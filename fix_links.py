import json

replacements = {
    'href="/motor-yag-degisimi-onemi"': 'href="/araclarda-motor-yag-degisiminin-onemi"',
    'href="/motor-yag-degisimi-onemi/"': 'href="/araclarda-motor-yag-degisiminin-onemi/"',
    
    'href="/klima-gazi-dolumu-tuzla-gebze-pendik"': 'href="/klima-gazi-dolumu-tuzla-gebze"',
    'href="/klima-gazi-dolumu-tuzla-gebze-pendik/"': 'href="/klima-gazi-dolumu-tuzla-gebze/"',
    
    'href="/klima-gazi-dolumu"': 'href="/klima-gazi-dolumu-tuzla-gebze"',
    'href="/klima-gazi-dolumu/"': 'href="/klima-gazi-dolumu-tuzla-gebze/"',
    
    'href="/otomatik-sanzuman-tamiri"': 'href="/otomatik-sanziman-tamiri"',
    'href="/otomatik-sanzuman-tamiri/"': 'href="/otomatik-sanziman-tamiri/"'
}

file_path = 'data/posts.json'
with open(file_path, 'r', encoding='utf-8') as f:
    posts = json.load(f)

count = 0
for post in posts:
    content = post.get('content', '')
    original_content = content
    for old, new in replacements.items():
        content = content.replace(old, new)
    
    if content != original_content:
        post['content'] = content
        count += 1

with open(file_path, 'w', encoding='utf-8') as f:
    json.dump(posts, f, ensure_ascii=False, indent=2)

print(f"Success: Updated links in {count} posts.")
