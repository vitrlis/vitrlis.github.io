import os

def generate_html(source_file, output_file, main_title):
    if not os.path.exists(source_file):
        print(f"Source file {source_file} not found.")
        return

    with open(source_file, 'r') as f:
        content = f.read()

    chapters = content.split('\n-\n')
    
    body_class = "poems-page" if "poems" in output_file.lower() else ""
    
    html_content = f"""<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{main_title} - vitrlis</title>
    <link rel="stylesheet" href="style.css">
</head>
<body class="sub-page {body_class}">
    <div class="site-header">
        <a href="index.html"><h3>vitrlis</h3></a>
    </div>
    
    <div class="content-container">
        <h2 class="main-title">{main_title}</h2>
        <hr class="full-width">
        
        <div class="chapters">
"""

    for chapter in chapters:
        chapter = chapter.strip()
        if not chapter:
            continue
            
        lines = chapter.split('\n')
        title = ""
        text_lines = []
        
        for line in lines:
            if line.startswith('Title: '):
                title = line.replace('Title: ', '').strip()
            else:
                text_lines.append(line)
        
        text = '\n'.join(text_lines).strip()
        
        if "poems" in output_file.lower():
            text = f'<div class="poem-body">{text}</div>'
        
        html_content += f"""
            <div class="chapter">
                <h5 class="chapter-title">{title}</h5>
                <div class="text-content">{text}</div>
                <hr class="chapter-divider">
            </div>
"""

    html_content += """
        </div>
    </div>
</body>
</html>
"""

    with open(output_file, 'w') as f:
        f.write(html_content)
    print(f"Generated {output_file}")

def generate_visions(output_file):
    username = "username"
    if os.path.exists('username.txt'):
        with open('username.txt', 'r') as f:
            username = f.read().strip()
    
    html_content = f"""<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>visions - vitrlis</title>
    <link rel="stylesheet" href="style.css">
</head>
<body class="sub-page visions-page">
    <div class="site-header">
        <a href="index.html"><h3>vitrlis</h3></a>
    </div>
    
    <div class="content-container">
        <h2 class="main-title">visions</h2>
        <hr class="full-width">
        
        <div class="chapters">
            <div class="chapter">
                <h5 class="chapter-title"></h5>
                <div class="text-content">
                    They're on <a href="https://www.instagram.com/{username}" style="text-decoration: underline;">instagram</a>, if you wanna go there
                </div>
                <hr class="chapter-divider">
            </div>
        </div>
    </div>
</body>
</html>"""

    with open(output_file, 'w') as f:
        f.write(html_content)
    print(f"Generated {output_file}")

if __name__ == "__main__":
    generate_html('books.txt', 'book.html', 'Hard Sacks')
    generate_html('poems.txt', 'poems.html', 'poems')
    # generate_visions('visions.html')
