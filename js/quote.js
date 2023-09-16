// Define an array of Bob Ross quotes
const quotes = [
    "We don't make mistakes, just happy little accidents.",
    "Let's build a happy little cloud. Let's build some happy little trees.",
    "All you need to paint is a few tools, a little instruction, and a vision in your mind.",
    "There's nothing wrong with having a tree as a friend.",
    "You can do anything here — the only prerequisite is that it makes you happy.",
    "We don't really know where this goes — and I'm not sure we really care.",
    "This is your world. You're the creator. Find freedom on this canvas.",
    "Clouds are very, very free.",
    "The secret to doing anything is believing that you can do it.",
    "There is no such thing as mistakes, only happy accidents.",
    "This is your world. You're the creator. Find freedom on this canvas.",
    "The more you practice, the easier it gets. The more you paint, the better you get.",
    "Talent is a pursued interest. In other words, anything you are willing to practice, you can do.",
    "I can't think of anything more rewarding than being able to express yourself to others through painting.",
    "I guess I'm a little weird. I like to talk to trees and animals. That's okay though; I have more fun than most people.",
    "You have to make a determination and let it go. The universe is in control the rest of the way.",
    "We artists are a different breed of people. We're a happy bunch.",
    "There's nothing wrong with having a tree as a friend.",
    "Don't forget to make all these little things individuals — all of them special in their own way.",
    "Don't be afraid to go out on a limb because that's where the fruit is.",
    "This is your creation — and it's just as unique and special as you are.",
    "Look around. Look at what we have. Beauty is everywhere — you only have to look to see it.",
    "Anytime you learn, you gain.",
    "It's hard to see things when you're too close. Take a step back and look.",
    "And just sort of play with these things, and watch — watch things happen.",
    "It's life. It's interesting. It's fun.",
    "Anything that you're willing to practice, you can do.",
    "Anything that works against you can also work for you once you understand the Principle of Harmony.",
    "Let's make some happy little clouds in our world.",
    "I started painting as a hobby when I was little. I didn't know I had any talent. I believe talent is just a pursued interest.",
    "There's not a thing in the world wrong with washing your brush.",
    "All kinds of happy little splashes.",
    "It's cold, but it's beautiful.",
    "You can do anything you want to do. This is your world.",
    "Just let it happen.",
    "You can do it!",
    "I think there's an artist hidden in the bottom of every single one of us.",
    "We have a fantastic little sky!",
    "The light is your friend. Preserve it.",
    "You can create anything that makes you happy.",
    "In painting, you have unlimited power. You have the ability to move mountains. You can bend rivers.",
    "Talk to the tree, make friends with it.",
    "We want to use a lot pressure while using no pressure at all.",
    "You can do anything you want to do. This is your world.",
    "Let's make a nice big leafy tree.",
    "Don't hurry. Take your time and enjoy.",
    "Let's do it again then, what the heck.",
    "Sometimes you learn more from your mistakes than you do from your masterpieces.",
    "Imagination is the key to painting.",
    "In your world you can create anything you desire.",
    "Just let this happen. We just let this flow right out of our minds.",
  ];
  
  
let quoteTimeout;
let isQuoteDisplayed = false;

// Function to display a random quote
function displayRandomQuote() {

  const existingQuote = document.querySelector(".quote-popup");
  if (existingQuote) {
    existingQuote.remove();
  }

  // Mark that a quote is currently displayed
  isQuoteDisplayed = true;

  // Select a random quote from the array
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];

  // Create an element to display the quote
  const quoteElement = document.createElement("div");
  quoteElement.className = "quote-popup";
  quoteElement.textContent = randomQuote;

  // Append the quote element to the body
  document.body.appendChild(quoteElement);

  // Remove the quote element after 5 seconds
  quoteTimeout = setTimeout(() => {
    quoteElement.remove();
    isQuoteDisplayed = false; // Mark that the quote has disappeared
  }, 5000);
}

// Add an event listener to the brush icon
const quoteButton = document.getElementById("quote-button");
if (quoteButton) {
  quoteButton.addEventListener("click", displayRandomQuote);
}
