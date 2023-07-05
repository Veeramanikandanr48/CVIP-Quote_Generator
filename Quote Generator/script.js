function getNewQuote() {
  fetch('https://quote-garden.onrender.com/api/v3/quotes/random')
    .then(response => response.json())
    .then(data => {
      const quote = data.data[0];
      document.getElementById('quote').textContent = quote.quoteText;
      document.getElementById('author').textContent = `- ${quote.quoteAuthor}`;
    })
    .catch(error => {
      console.log(error);
      document.getElementById('quote').textContent = 'An error occurred while fetching the quote.';
      document.getElementById('author').textContent = '';
    });
}

function shareOnTwitter() {
  const quote = document.getElementById('quote').textContent;
  const author = document.getElementById('author').textContent;
  const tweetContent = `${quote} - ${author}`;
  const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(tweetContent)}`;
  window.open(tweetUrl, '_blank');
}

function shareOnFacebook() {
  const quote = document.getElementById('quote').textContent;
  const author = document.getElementById('author').textContent;
  const postContent = `Check out this amazing quote:\n\n${quote}\n\n- ${author}`;
  const url = `https://your-website-url.com/create-post?content=${encodeURIComponent(postContent)}`;
  window.open(url, '_blank');
}

function shareOnLinkedIn() {
  const quote = document.getElementById('quote').textContent;
  const author = document.getElementById('author').textContent;
  const postContent = `Check out this amazing quote:\n\n${quote}\n\n- ${author}`;
  const linkedinUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
    window.location.href
  )}`;
  window.open(linkedinUrl, '_blank');
}

function shareOnWhatsApp() {
  const quote = document.getElementById('quote').textContent;
  const author = document.getElementById('author').textContent;
  const message = `Check out this amazing quote:\n\n${quote}\n\n- ${author}`;
  const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(message)}`;
  window.open(whatsappUrl, '_blank');
}

// Initial quote on page load
getNewQuote();
