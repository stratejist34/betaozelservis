import json

broken_slugs = [
    "motor-yag-degisimi-onemi",
    "klima-gazi-dolumu-tuzla-gebze-pendik",
    "klima-gazi-dolumu",
    "otomatik-sanzuman-tamiri"
]

correct_slugs = {
    "motor-yag-degisimi-onemi": "araclarda-motor-yag-degisiminin-onemi",
    "klima-gazi-dolumu-tuzla-gebze-pendik": "klima-gazi-dolumu-tuzla-gebze",
    "klima-gazi-dolumu": "klima-gazi-dolumu-tuzla-gebze",
    "otomatik-sanzuman-tamiri": "otomatik-sanziman-tamiri"
}

file_path = 'data/posts.json'
with open(file_path, 'r', encoding='utf-8') as f:
    posts = json.load(f)

slugs_found = []
links_found = []

for post in posts:
    slug = post.get('slug')
    if slug in broken_slugs:
        slugs_found.append({"id": post.get('id'), "title": post.get('title'), "broken_slug": slug})
    
    content = post.get('content', '')
    for broken in broken_slugs:
        if f'href="/{broken}"' in content or f'href="/{broken}/"' in content:
            links_found.append({"id": post.get('id'), "title": post.get('title'), "found_broken_link": broken})

print("Broken Slugs Found in posts.json:")
print(json.dumps(slugs_found, indent=2))
print("\nBroken Internal Links Found in posts.json:")
print(json.dumps(links_found, indent=2))
