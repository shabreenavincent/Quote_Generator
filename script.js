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
