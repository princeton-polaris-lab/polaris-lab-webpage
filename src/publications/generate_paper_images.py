import json
import os
import time
from datetime import datetime
import random
from selenium import webdriver
from selenium.webdriver.chrome.service import Service as ChromeService
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from webdriver_manager.chrome import ChromeDriverManager

SPACE_URL = "https://huggingface.co/spaces/playgroundai/playground-v2.5"

def load_publications():
    with open('publications.json', 'r') as f:
        return json.load(f)

def save_publications(publications):
    with open('publications.json', 'w') as f:
        json.dump(publications, f, indent=4)

def create_image_filename(title):
    sanitized = "".join(c for c in title if c.isalnum() or c.isspace())
    return f"{sanitized[:50].lower().replace(' ', '_')}.png"

def parse_date(date_str):
    try:
        # Handle ISO format with time component (e.g., 2020-01-01T00:00:00Z)
        if 'T' in date_str:
            return datetime.strptime(date_str.split('T')[0], "%Y-%m-%d")
        # Handle simple date format
        return datetime.strptime(date_str, "%Y-%m-%d")
    except:
        return datetime.min  # Return earliest date if parsing fails

def main():
    image_dir = "../home/paperimages"
    os.makedirs(image_dir, exist_ok=True)

    # Load and sort publications by date
    publications = load_publications()
    publications = sorted(publications, key=lambda x: parse_date(x.get('published', '1970-01-01')), reverse=True)
    
    # Take only the most recent 20 publications
    # publications = publications[:20]
    print(f"📚 Processing {len(publications)} most recent publications...")

    # ─── Launch Chrome (visible) ────────────────────────────────
    chrome_opts = webdriver.ChromeOptions()
    # chrome_opts.add_argument("--headless")   # comment out to watch
    chrome_opts.add_argument("--disable-gpu")
    chrome_opts.add_argument("--window-size=1280,800")

    driver = webdriver.Chrome(
        service=ChromeService(ChromeDriverManager().install()),
        options=chrome_opts
    )
    driver.maximize_window()
    print("🚀 Chrome launched—navigating to the Space…")

    driver.get(SPACE_URL)

    # Wait for the iframe to be present and switch to it
    print("   🔍 Waiting for iframe...")
    iframe = WebDriverWait(driver, 30).until(
        EC.presence_of_element_located((By.CSS_SELECTOR, "iframe[src*='hf.space']"))
    )
    print("   ✅ Found iframe")
    
    # Switch to the iframe
    driver.switch_to.frame(iframe)
    print("   ✅ Switched to iframe")

    # Wait for the page to load inside the iframe
    time.sleep(5)  # Give the page time to load

    # Print the current page source for debugging
    print("   📝 Current page source:")
    print(driver.page_source[:1000] + "...")

    # now we're inside the correct iframe
    # publications = load_publications()

    for i, pub in enumerate(publications):
        if pub.get('image'):
            print(f"🔎 Skipping already-processed: {pub['title']}")
            continue

        prompt = f'simple minimalist geometric abstraction art titled "{pub["title"]}"'
        filename = create_image_filename(pub["title"])
        image_path = os.path.join(image_dir, filename)

        if os.path.exists(image_path):
            print(f"📂 Exists on disk, updating JSON: {filename}")
            pub['image'] = filename
            publications[i] = pub
            save_publications(publications)
            continue

        print(f"🎨 Generating image for: {pub['title']}")

        # — Find the prompt box & Run button —
        print("   🔍 Looking for prompt input...")
        try:
            # Try multiple selectors for the input
            selectors = [
                'input[data-testid="textbox"]',
                'input[placeholder="Enter your prompt"]',
                'input[class*="scroll-hide"]',
                'input[type="text"]',
                'input'
            ]
            
            prompt_input = None
            for selector in selectors:
                try:
                    print(f"   🔍 Trying selector: {selector}")
                    prompt_input = WebDriverWait(driver, 5).until(
                        EC.presence_of_element_located((By.CSS_SELECTOR, selector))
                    )
                    if prompt_input:
                        print(f"   ✅ Found input with selector: {selector}")
                        break
                except Exception as e:
                    print(f"   ❌ Selector {selector} failed: {str(e)}")
                    continue

            if not prompt_input:
                raise Exception("Could not find prompt input with any selector")

            # Try to interact with the input
            print("   ✍️  Attempting to type prompt...")
            driver.execute_script("arguments[0].scrollIntoView(true);", prompt_input)
            time.sleep(2)  # Wait for scroll to complete
            
            # Clear and type the prompt with delays between characters
            prompt_input.clear()
            time.sleep(1)
            
            # Type the prompt character by character with small delays
            for char in prompt:
                prompt_input.send_keys(char)
                time.sleep(random.random() * 0.1)  # Small delay between characters
            
            # Wait to ensure the input is complete
            time.sleep(2)
            
            # Verify the input was typed correctly
            actual_text = prompt_input.get_attribute('value')
            print(f"   📝 Actual text in input: {actual_text}")
            
            if actual_text != prompt:
                print("   ⚠️  Input text doesn't match expected prompt, retrying...")
                prompt_input.clear()
                time.sleep(1)
                for char in prompt:
                    prompt_input.send_keys(char)
                    time.sleep(0.1)
                time.sleep(2)
            
            print("   ✅ Typed prompt")

        except Exception as e:
            print("   ❌ Failed to interact with prompt input")
            print(f"   📝 Error: {str(e)}")
            print("   📝 Available elements:")
            elements = driver.find_elements(By.CSS_SELECTOR, "*")
            for elem in elements[:10]:  # Print first 10 elements
                print(f"      - {elem.tag_name}: {elem.get_attribute('class')} {elem.get_attribute('data-testid')}")
            raise

        print("   🔍 Looking for Run button...")
        try:
            # Try multiple selectors for the Run button
            button_selectors = [
                '//button[normalize-space()="Run"]',
                '//button[contains(text(), "Run")]',
                'button[data-testid="run-button"]',
                'button[class*="run"]',
                'button[aria-label*="Run"]'
            ]
            
            run_btn = None
            for selector in button_selectors:
                try:
                    print(f"   🔍 Trying button selector: {selector}")
                    if selector.startswith('//'):
                        run_btn = WebDriverWait(driver, 5).until(
                            EC.element_to_be_clickable((By.XPATH, selector))
                        )
                    else:
                        run_btn = WebDriverWait(driver, 5).until(
                            EC.element_to_be_clickable((By.CSS_SELECTOR, selector))
                        )
                    if run_btn:
                        print(f"   ✅ Found Run button with selector: {selector}")
                        break
                except Exception as e:
                    print(f"   ❌ Button selector {selector} failed: {str(e)}")
                    continue

            if not run_btn:
                raise Exception("Could not find Run button with any selector")

            # Wait a bit before clicking the Run button
            time.sleep(2)
            
            print("   ▶️  Clicking Run...")
            driver.execute_script("arguments[0].scrollIntoView(true);", run_btn)
            time.sleep(1)
            run_btn.click()
            print("   ✅ Clicked Run button")

        except Exception as e:
            print("   ❌ Failed to interact with Run button")
            print(f"   📝 Error: {str(e)}")
            raise

        # Wait for the generated image
        print("   🔍 Waiting for generated image...")
        def find_img(drv):
            try:
                # Try multiple approaches to find the image
                # 1. Look for data:image URLs
                for img in drv.find_elements(By.TAG_NAME, "img"):
                    src = img.get_attribute("src") or ""
                    if src.startswith("data:image"):
                        # Check if it's not a loading image
                        if "loading" not in src.lower() and "spinner" not in src.lower():
                            print(f"   ✅ Found image with data URL: {src[:50]}...")
                            return img
                
                # 2. Look for images in the result area
                result_area = drv.find_elements(By.CSS_SELECTOR, "[class*='result'] img")
                if result_area:
                    img = result_area[0]
                    src = img.get_attribute("src") or ""
                    if "loading" not in src.lower() and "spinner" not in src.lower():
                        print("   ✅ Found image in result area")
                        return img
                
                # 3. Look for any visible images
                visible_imgs = [img for img in drv.find_elements(By.TAG_NAME, "img") 
                              if img.is_displayed() and img.size['width'] > 100]
                for img in visible_imgs:
                    src = img.get_attribute("src") or ""
                    if "loading" not in src.lower() and "spinner" not in src.lower():
                        print("   ✅ Found visible image")
                        return img
                
                # 4. Look for images with specific classes
                class_imgs = drv.find_elements(By.CSS_SELECTOR, "img[class*='result'], img[class*='output']")
                for img in class_imgs:
                    src = img.get_attribute("src") or ""
                    if "loading" not in src.lower() and "spinner" not in src.lower():
                        print("   ✅ Found image with result/output class")
                        return img
                
                # Print debug information
                print("   📝 Available images:")
                for img in drv.find_elements(By.TAG_NAME, "img"):
                    src = img.get_attribute("src") or ""
                    classes = img.get_attribute("class") or ""
                    print(f"      - src: {src[:50]}...")
                    print(f"        classes: {classes}")
                    print(f"        visible: {img.is_displayed()}")
                    print(f"        size: {img.size}")
                
                return False
            except Exception as e:
                print(f"   ❌ Error in find_img: {str(e)}")
                return False

        try:
            # Wait for the image with a longer timeout
            print("   ⏳ Waiting up to 180 seconds for image generation...")
            img_elem = WebDriverWait(driver, 180).until(find_img)
            print("   ✅ Found generated image")
            
            # Wait a bit for the image to be fully loaded
            time.sleep(5)
            
            # Try to get the image dimensions
            try:
                width = img_elem.size['width']
                height = img_elem.size['height']
                print(f"   📐 Image dimensions: {width}x{height}")
                
                # Verify the image is large enough to be a real result
                if width < 200 or height < 200:
                    print("   ⚠️  Image seems too small, might be a loading screen")
                    time.sleep(10)  # Wait longer and try again
                    img_elem = WebDriverWait(driver, 60).until(find_img)
            except Exception as e:
                print(f"   ⚠️  Could not get image dimensions: {str(e)}")
            
            print("   📸 Capturing screenshot…")
            img_elem.screenshot(image_path)
            print(f"   ✅ Saved image to {image_path}")
            
        except Exception as e:
            print("   ❌ Failed to find generated image")
            print(f"   📝 Error: {str(e)}")
            print("   📝 Current page source:")
            print(driver.page_source[:1000] + "...")
            raise

        pub['image'] = filename
        print(f"   ✅ Saved as {filename}\n")

        time.sleep(2)

    # Switch back to default content
    driver.switch_to.default_content()

    print("🛑 All done—closing browser and writing JSON.")
    driver.quit()
    save_publications(publications)
    print("🎉 Completed image generation.")

if __name__ == "__main__":
    main()
