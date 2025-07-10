# Quote_Generator
## Date:
## Objective:
To create a simple quote generator using HTML, CSS, and JavaScript that displays a new random motivational quote each time a button is clicked — similar to daily quote sections on blogs or productivity apps.

## Tasks:

#### 1. Create the HTML Structure:
Add a heading like ```<h1>InspireMe</h1>```

Use a ```<div> or <p>``` to display the quote text.

Use another ```<p> or <span>``` to display the author’s name.

Add a button labeled “Get Quote”.

#### 2. Style the Layout Using CSS:
Center everything on the page using flexbox.

Style the quote box with padding, background color, and rounded borders.

Use a clean font (like Roboto or Open Sans).

Add hover effects for the button.

#### 3. Add JavaScript Functionality:
Store an array of quotes (objects with text and author).

On button click, generate a random index using Math.random().

Display the selected quote and author in the HTML.

Ensure each click updates the quote dynamically using innerText.

#### 4. Enhancements:
Animate the quote change using fade effects.

Add a “Tweet this” button with a share link.
## HTML Code:
```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>InspireMe - Quote Generator</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div class="quote-box">
    <h1>InspireMe</h1>
    <p id="quote" class="fade">“Push yourself, because no one else is going to do it for you.”</p>
    <p id="author" class="fade">— Unknown</p>
    <button onclick="generateQuote()">Get Quote</button>
    <a id="tweet" href="#" target="_blank">Tweet this</a>
  </div>

  <script src="script.js"></script>
</body>
</html>
```
## CSS Code:
```
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body, html {
  height: 100%;
  font-family: 'Open Sans', sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f2f2f2;
}

.quote-box {
  background-color: #ffffff;
  padding: 30px 40px;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  max-width: 500px;
  width: 90%;
}

h1 {
  margin-bottom: 20px;
  color: #333;
}

#quote {
  font-size: 1.2rem;
  color: #555;
  margin-bottom: 10px;
  transition: opacity 0.5s ease-in-out;
}

#author {
  font-size: 1rem;
  color: #888;
  margin-bottom: 20px;
  transition: opacity 0.5s ease-in-out;
}

button {
  background-color: #007BFF;
  color: white;
  border: none;
  padding: 10px 18px;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #0056b3;
}

#tweet {
  display: inline-block;
  margin-top: 15px;
  font-size: 0.9rem;
  text-decoration: none;
  color: #1DA1F2;
}

.fade {
  opacity: 1;
}
```
## Js code:
```
const quotes = [
  {
    text: "Push yourself, because no one else is going to do it for you.",
    author: "Unknown"
  },
  {
    text: "Success is not for the lazy.",
    author: "Unknown"
  },
  {
    text: "Great things never come from comfort zones.",
    author: "Anonymous"
  },
  {
    text: "Believe you can and you're halfway there.",
    author: "Theodore Roosevelt"
  },
  {
    text: "Dream it. Wish it. Do it.",
    author: "Unknown"
  },
  {
    text: "Don't watch the clock; do what it does. Keep going.",
    author: "Sam Levenson"
  }
];

function generateQuote() {
  const quoteEl = document.getElementById("quote");
  const authorEl = document.getElementById("author");
  const tweetBtn = document.getElementById("tweet");

  // Fade out
  quoteEl.style.opacity = 0;
  authorEl.style.opacity = 0;

  setTimeout(() => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const selected = quotes[randomIndex];

    quoteEl.innerText = `“${selected.text}”`;
    authorEl.innerText = `— ${selected.author}`;

    // Update tweet link
    const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
      `"${selected.text}" — ${selected.author}`
    )}`;
    tweetBtn.href = tweetUrl;

    // Fade in
    quoteEl.style.opacity = 1;
    authorEl.style.opacity = 1;
  }, 300);
}
```
## Output:
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/6021e564-8578-4862-8351-e341d4a3dbcb" />

## Result:
A simple quote generator using HTML, CSS, and JavaScript that displays a new random motivational quote each time a button is clicked — similar to daily quote sections on blogs or productivity apps is created successfully.
