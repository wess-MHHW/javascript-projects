const button = document.querySelector("#new-quote");

const quote = document.querySelector(".quote");

const person = document.querySelector(".person");

const quotes = [
  {
    author: "Albert Einstein",
    quote: "Imagination is more important than knowledge.",
  },
  {
    author: "Mark Twain",
    quote: "The secret of getting ahead is getting started.",
  },
  {
    author: "Maya Angelou",
    quote: "We may encounter many defeats but we must not be defeated.",
  },
  {
    author: "Steve Jobs",
    quote: "Your time is limited, don't waste it living someone else's life.",
  },
  {
    author: "Oscar Wilde",
    quote: "Be yourself; everyone else is already taken.",
  },
  {
    author: "Mahatma Gandhi",
    quote: "Be the change that you wish to see in the world.",
  },
  {
    author: "J.K. Rowling",
    quote: "It does not do to dwell on dreams and forget to live.",
  },
  {
    author: "Nelson Mandela",
    quote:
      "The greatest glory in living lies not in never falling, but in rising every time we fall.",
  },
  {
    author: "Martin Luther King Jr.",
    quote: "The time is always right to do what is right.",
  },
  {
    author: "Ralph Waldo Emerson",
    quote:
      "Do not go where the path may lead, go instead where there is no path and leave a trail.",
  },
];

button.addEventListener("click", function () {
  let random = Math.floor(Math.random() * quotes.length);
  quote.innerText = quotes[random].quote;
  person.innerText = quotes[random]["author"];
});
