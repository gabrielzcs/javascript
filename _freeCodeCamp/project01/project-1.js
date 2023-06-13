// VARIABLES

let btn = document.querySelector("#new-quote");
let quote = document.querySelector(".quote");
let person = document.querySelector(".person");

const quotes = [
  {
    quote: `“So many books, so little time.”`,
    person: `Frank Zappa`,
  },
  {
    quote: `“A room without books is like a body without a soul.”`,
    person: `Marcus Tullius Cicero`,
  },
  {
    quote: `“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”`,
    person: `Dr. Seuss`,
  },
  {
    quote: `“You only live once, but if you do it right, once is enough.”`,
    person: `Mae West`,
  },
  {
    quote: `“Be the change that you wish to see in the world.”`,
    person: `Mahatma Gandhi`,
  },
  {
    quote: `“In three words I can sum up everything I've learned about life: it goes on.”`,
    person: `Robert Frost`,
  },
  {
    quote: `“If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.”`,
    person: `J.K. Rowling, Harry Potter and the Goblet of Fire`,
  },
  {
    quote: `“If you tell the truth, you don't have to remember anything.”`,
    person: `Mark Twain`,
  },
  {
    quote: `“I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.”`,
    person: `Maya Angelou`,
  },
  {
    quote: `“Live as if you were to die tomorrow. Learn as if you were to live forever.”`,
    person: `Mahatma Gandhi`,
  },
];

btn.addEventListener("click", function () {
  let random = Math.floor(Math.random() * quotes.length);
  quote.innerText = quotes[random].quote;
  person.innerText = quotes[random].person;
});
