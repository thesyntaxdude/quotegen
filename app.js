const randomQuote = document.querySelector("#random-quote");
const addQuote = document.querySelector("#add-quote");
const inputElement = document.querySelector("#add-quote-input");
const quotes = JSON.parse(localStorage.getItem("quotes")) || [
  `It is unavoidable. It is your destiny. You - like your father - are now... mine!`,
  `Don't you turn your back on me, Harry Potter! I want you to look at me when I kill you! I want to see the light leave your eyes!`,
  `The world is not what it ought to be. Humanity longs for the eternal for a world beyond time, because time is what enslaves us. Time is an insult. Death is an insult. Doctor, We don't seek to rule this world... We seek to save it.`,
  `You've come to die! Your world is now my world, like all worlds!`,
  `We all go a little mad sometimes.`,
  `You think you were born? No. You were built. And your Creators want you back!`,
  `If you can make God bleed, then people will cease to believe in him. And there will be blood in the water, and the sharks will come. The truth, all I have to do is sit here and watch, as the world will consume you.`,
  `Business. That's all it ever is, is business. I was working for Fallon at the time. Your father was supposed to throw a fight. And your girl was in the wrong family at the wrong time. It's all business. And you've been in my business for too long!`,
  `ou were supposed to understand... I'll MAKE you understand.`,
  `If I must suffer, humanity will suffer with me! I shall repay them for sentencing me to a life without human comfort.`,
  `Allow me to reintroduce myself. I am Count Vladislaus Dragulia. Born: 1422. Murdered: 1462.`,
  `Well, let me remind you: a Man-cub becomes Man, and Man is FORBIDDEN!!!`,
  `I am... inevitable.`,
  `Why so serious?`,
  `Don’t ever apologize for being the smartest one in the room.`,
  `You either die a hero or live long enough to see yourself become the villain.`,
  `People think in terms of good and evil, but really, the true enemy is time. Time kills everything.`,
  `As long there are those that remember what was, there will always be those that are unable to accept what can be.`,
  `It's funny how those funny accidents can change the entire direction of your life`,
  `As long as there is a concept of victors, the vanquished will also exist.`,
  `What's wrong with seeking perfection?`,
  `Order breeds stagnation, Only through chaos can the world evolve.`,
  `You see in their last moments, people show you who they really are.`,
  `The greatest trick the devil ever pulled was convincing the world he didn't exist`,
  `It's better to be hanged for loyalty than rewarded for betrayal.`,
  `People are not born heroes or villains; they're created by the people around them.`,
  `I firmly believe that a story is only as good as the villain`,
  `Being young and beautiful is not a crime you know.`,
  `A villain is simply a victim whose story hasn't been told.`,
  `A villain's strength lies in their ability to manipulate others.`,
];
randomQuote.addEventListener("click", () => displayQuote());
addQuote.addEventListener("click", () => addNewQuote());
inputElement.addEventListener("keypress", (e) => {
  if (e.keyCode === 13) {
    addNewQuote();
  }
});

function displayQuote() {
  const generatedQuote = getRandomQuote();
  const quoteParagraph = document.querySelector(".quote");
  quoteParagraph.textContent = generatedQuote;
}

function addNewQuote() {
  const newQuote = inputElement.value;
  if (newQuote) {
    quotes.push(newQuote);
    localStorage.setItem("quotes", JSON.stringify(quotes));
    console.log(quotes);
  } else {
    alert("Enter a quote");
  }
  inputElement.value = "";
}

function getRandomQuote() {
  const randomNum = Math.floor(Math.random() * quotes.length);
  return quotes[randomNum];
}
