# !pip3 install newspapers4k
import newspaper, requests, json
from newspaper import Article

def snake_case(string):
    return string.lower().replace(" ", "_")

def press_image_filepath(file_name):
    return f"./press_images/{file_name}.jpg"

def save_article_image(article):
    '''Saves image to press_images folder if it exists. Returns relative path
       to image. If image does not exist, returns relative path to default image.
    '''
    image_response = requests.get(article.top_image)

    # Returns default image if no image is found
    if image_response.status_code != 200:
        return press_image_filepath("default_press_image.jpg")
    
    # Saves image and returns file path 
    save_image_filepath = press_image_filepath(snake_case(article.title))
    with open(save_image_filepath, "wb") as image_file:
        image_file.write(image_response.content)
    image_file.close()
    return save_image_filepath

def make_article_dictionary(article):
    '''Makes article dictionary that represents how we want to store article info in a JSON'''
    return {
        "title": article.title,
        "publication_source_url": article.source_url,
        "original_url": article.url,
        "text": article.text,
        "top_image_relative_path": save_article_image(article),
        "date": article.publish_date.isoformat() if article.publish_date else ""
    }

def update_missing_dates(press_json):
    '''Update JSON entries that are missing the "date" field or have an empty date'''
    updated = False
    for entry in press_json:
        if "date" not in entry or not entry["date"]:
            try:
                article = Article(entry["original_url"])
                article.download()
                article.parse()
                if article.publish_date:
                    entry["date"] = article.publish_date.isoformat()
                else:
                    entry["date"] = ""
                updated = True
            except Exception as e:
                print(f"Failed to update date for article {entry['original_url']}: {e}")
    return updated

def update_press_articles_in_press_json():
    with open("articles.txt", "r") as article_file:
        article_urls = article_file.read().splitlines()
    article_file.close()

    with open("press.json", "r") as press_json_file:
        try:
            press_json = json.load(press_json_file)
        except json.decoder.JSONDecodeError:
            press_json = []
    press_json_file.close()

    # Update existing articles in press.json that are missing a date
    if update_missing_dates(press_json):
        print("Updated missing dates in existing press JSON entries.")
        with open("press.json", "w") as press_json_file:
            json.dump(press_json, press_json_file, indent=4)
        press_json_file.close()

    existing_urls = [entry["original_url"] for entry in press_json]

    for url in article_urls:
        # Check if the article has already been saved
        if url in existing_urls:
            continue
        
        # Downloads article and notifies user if download fails
        try:
            article = Article(url)
            article.download()
            article.parse()
        except Exception as e:
            print(f"The url {url} was not downloaded properly.\n Please edit 'press.json' with its information manually.")
            continue
        
        # Adds new article to the list
        article_dictionary = make_article_dictionary(article)
        press_json.append(article_dictionary)

    # Save the complete list back to press.json
    with open('press.json', "w") as press_json_file:
        json.dump(press_json, press_json_file, indent=4)      
    press_json_file.close()

update_press_articles_in_press_json()