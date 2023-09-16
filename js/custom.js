// Define your Bob Ross quotes
const quotes = [
    "Happy little trees.",
    "We don't make mistakes, just happy little accidents.",
    "In your world, you have total and absolute power.",
    // Add more quotes here
  ];
  
  // Function to display a random quote
  function displayRandomQuote() {
    const quoteText = document.getElementById("quote-text");
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quoteText.textContent = quotes[randomIndex];
  }
  
  // Add event listeners to trigger the quote display
  const quoteCircle = document.getElementById("quote-circle");
  quoteCircle.addEventListener("click", displayRandomQuote);
  