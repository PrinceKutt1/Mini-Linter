let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

let overusedWords = ['really', 'very', 'basically'];

let unnecessaryWords = ['extremely', 'literally', 'actually' ];


let storyWords = story.split(' ');


// function to remove the unnecessary words from story
const betterWords = storyWords.filter(words => {
return unnecessaryWords.includes(words) ? false : true;
});
//console.log(betterWords);

// initialising overusedWords
let NumberOfReally = 0;
let NumberOfVery = 0;
let NumberOfBasically = 0;
const countOverUsedWords = betterWords.forEach(words => {

  if (words === 'really') {
    NumberOfReally += 1;
  } else if (words === 'very') {
    NumberOfVery += 1;
  } else if (words === 'basically') {
    NumberOfBasically += 1;
  }
});

// sentence Count in the paragraph
let sentenceCount = 0;
const numberOfSentence = betterWords.forEach(words => {
  if (words.includes('.') || words.includes('!')) {
    sentenceCount += 1;
  }
});

// Function to print all info in sentence
console.log("*****************************************************");
console.log("The number of words in the Story is : "+storyWords.length);
const sentenceInformation = () => {
  
  console.log("The better words count is: " + betterWords.length);
  console.log(`Sentence count is : ${sentenceCount}`);
  console.log(`Below are the overused words and their counts: \n really : ${NumberOfReally},\n very : ${NumberOfVery}, \n basically : ${NumberOfBasically} `);
};

sentenceInformation();
console.log('***********************************************');

console.log(betterWords.join(' '));
