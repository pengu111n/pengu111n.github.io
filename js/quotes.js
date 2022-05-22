const quotes = [
  {
    quote:
      "The world as we have created it is a process of our thinking. It cannot be changed without changing our thinking",
    author: "Albert Einstein",
  },
  {
    quote: "Try not to become a man of success. Rather become a man of value.",
    author: "Albert Einstein",
  },
  {
    quote:
      "It is better to be hated for what you are than to be loved for what you are not.”",
    author: "André Gide",
  },
  {
    quote:
      "Good friends, good books, and a sleepy conscience: this is the ideal life.",
    author: "Mark Twain",
  },
  {
    quote: "Any fool can know. The point is to understand.",
    author: "Albert Einstein",
  },
  {
    quote:
      "Life is like riding a bicycle. To keep your balance, you must keep moving.",
    author: "Albert Einstein",
  },
  {
    quote: "Not all those who wander are lost.”",
    author: "J.R.R. Tolkien",
  },
  {
    quote: "He who angers you conquers you.",
    author: "Elizabeth Kenny",
  },
  {
    quote: "Action is the foundational key to all success.",
    author: "Pablo Picass",
  },
  {
    quote:
      "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    author: "Nelson Mandela",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = `-${todaysQuote.author}-`;

if (savedUsername === null) {
  quote.classList.add(HIDDEN_CLASSNAMES);
  author.classList.add(HIDDEN_CLASSNAMES);
} else {
  quote.classList.remove(HIDDEN_CLASSNAMES);
  author.classList.remove(HIDDEN_CLASSNAMES);
}
