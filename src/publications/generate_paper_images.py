import json
import os
import requests
from huggingface_hub import InferenceClient
import time

def load_publications():
    """Load publications from JSON file"""
    with open('publications.json', 'r') as f:
        return json.load(f)

def save_publications(publications):
    """Save publications back to JSON file"""
    with open('publications.json', 'w') as f:
        json.dump(publications, f, indent=4)

def create_image_filename(title):
    """Create sanitized filename from paper title"""
    sanitized = "".join(c for c in title if c.isalnum() or c.isspace())
    return f"{sanitized[:50].lower().replace(' ', '_')}.png"

def main():
    # Set up the HF client
    api_token = os.getenv("HF_API_TOKEN")
    # Read HF API token from file if not set in environment
    if not api_token:
        try:
            with open(os.path.expanduser('~/.hftoken'), 'r') as f:
                api_token = f.read().strip()
        except FileNotFoundError:
            raise ValueError("Please set HF_API_TOKEN environment variable or create ~/.hftoken file")
    if not api_token:
        raise ValueError("Please set HF_API_TOKEN environment variable")
    
    client = InferenceClient(
        model="playgroundai/playground-v2.5-1024px-aesthetic",
        token=api_token
    )
    
    # Create images directory if it doesn't exist
    image_dir = "../home/paperimages"
    os.makedirs(image_dir, exist_ok=True)

    # Load publications
    publications = load_publications()
    
    # Process each publication
    for pub in publications:
        if 'image' not in pub or not pub['image']:
            filename = create_image_filename(pub['title'])
            image_path = os.path.join(image_dir, filename)
            print(image_path)
            
            # Skip if image already exists
            if os.path.exists(image_path):
                print(f"Image already exists for: {pub['title']}")
                pub['image'] = filename
                continue
                
            print(f"Generating image for: {pub['title']}")
            
            # Create prompt
            prompt = f'simple minimalist geometric abstraction art titled "{pub["title"]}"'
            
            try:
                # Generate image using HF Inference API
                image_bytes = client.post(
                    json={
                        "inputs": prompt,
                        "parameters": {
                            "num_inference_steps": 30,
                            "guidance_scale": 3
                        }
                    }
                )
                
                # Save image
                with open(image_path, "wb") as f:
                    f.write(image_bytes)
                
                # Update publication entry
                pub['image'] = filename
                
                print(f"Successfully generated image: {filename}")
                
                # Add a small delay to avoid rate limits
                time.sleep(2)
                
            except Exception as e:
                print(f"Error generating image for {pub['title']}: {str(e)}")
    
    # Save updated publications
    save_publications(publications)
    print("Completed image generation process")

if __name__ == "__main__":
    main() 