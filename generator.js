
// Code that generates the random lorem ipsum text

// Create a new object called loremIpsum by invoking the GenerateNewText constructor function
const loremIpsum = new GenerateNewText();

// Constructor function that creates an object with the sentences property
function GenerateNewText() {
  // Add property to the object
  this.sentences =
    [
	   "Do you see me on the phone?", 
	   "Stop calling me while I'm at work",
	   "Be home before the street lights come on.", 
	   "Don't let these friends of yours make you look stupid",
		"Huh, you must not be hungry, then.", 
		"Did you do the dishes?",
		"Imma give you something to cry about.", 
		"Get me my purse from the kitchen",
		"Quit running around this house like you ain't got no goddamn sense!", 
		"This is my house.", 
		"Did you take the chicken out the freezer?",
		"My roof, my rules.",
		"And people in hell want ice water.",
		"And people in hell want ice water.",
		"Ima Pusha yo T if you don't do that homework!",
		"Ima Pusha yo T if you don't do that homework!",
		"Name to me what bills you pay in my house.",
		"If Sally had 4 apples, and gave Bob 2, how many does she have left?", 
		"IF SALLY HAD FO APPLES! AND GAVE BOB 2! HOW MANY DOES SHE HAVE LEFT?",
		"Do you pay my bills?", 
		"Do you pay my telephone bills?",
		"Do you pay my automo-bills?",
		"I don't think you do!",
		"I brought you into this world and I will take you out.", 
		"You should be grateful you even got a place to sleep",
		"Who you think you talking to?", 
		"God, give me strength.",
		"What did I tell you about playing on the phone?",
		"Don't sweat out yo hair before Sunday",
		"What did I tell you about playing in the rain?", 
		"Go play wit yo cousins!",
		"God, give me strength.", 
		"I'm a independent black woman.",
		"Lord, provide me with the strength.", 
		"Stop leaving these lights on like you pay the eletric bill!",
		"Lord, bless me...with the strength.", 
		"Dear Heavenly Father, please bless this food for the nourishment of our bodies. In the sweet name of our mighty Lord and Savior Jesus Christ we pray...amen.",
		"(belt snap)", 
		"Its spaghetti in there!",
		"I don't need to explain myself! I'm grown!", 
		"Close that refridgerator door!",
		"I-N-D-E-P-E-N-D-E-N-T, do you know what that mean?",
		"Its like you Pigpin; Just leaving dirt wherever you go",
		"I will slap some sense into you.",
		"Don't ask me for nothing else.",
		"Don't ask me for nothing else.",
		"Hand me the remote!",
		"Oh, so you think you grown now, huh?", 
		"Stop running in my house!",
		"Don't make me go upside yo head.", 
		"Put some water in it",
		"I will knock you into the middle of next week.", 
		"I work two jobs! ",
		"Do you understand me?",
		"Get out my mouth, this grown folks' business.",
		"Don't you slam no doors in my  house!",
		"Do you got Aeropostale money?",
		"Pick or choose, you either gon stay in or stay out.", 
		"What you need new shows for? You already wearing shoes!",
		"Where you act up is where you get beat up.", 
		"Call your grandma, and see if she'll watch you.",
		"You got McDonald's money?", 
		"You got hospital money?",
		"Roll your eyes again, imma slap em to the back of yo head.",
		"God ain't through with me yet!", 
		"You don't know nothin' bout this!",
		"God don’t like ugly!", 
		"I was watching that!",
		"I must be booboo the fool huh?", 
		"Quit playin', and turn my TV on",
		"I'm not one of your little friends", 
		"Maybe you know if you stop playing all those damn videogames",
		"Stop all that crying before I give you something to cry about.", 
		"First of all, check your tone.",
		"I hope you know that school work like you know them songs.", 
		"Fix your face.",
		"Put that radio on the oldie's station",
		"Make sure you eat everything on your plate",
		"When we get in this store, don't touch nothin'.", 
		"Keep playing and see what happens.",
		"I brought you in this world, and I can take you out."
   ];
}

// Method to the GenerateNewText constructor function that generates a random sentence
GenerateNewText.prototype.getRandomSentence = function() {
  let randomSentence = this.sentences[Math.floor(Math.random() * 10)]
	return randomSentence;
}

// Method to the GenerateNewText constructor function that generates a paragraph from random sentences
GenerateNewText.prototype.getParagraph = function() {
  let paragraph = "";
  // Set the minimum number of words
  let minimumCharacterLength = 10;
  let firstSentence = true;
  while (paragraph.length < minimumCharacterLength) {
    if (firstSentence) {
      paragraph = paragraph.concat(this.getRandomSentence());
      firstSentence = false;
    } else {
      paragraph = paragraph.concat(" " + this.getRandomSentence());
    }
  }
  return paragraph;
}

// Method to the GenerateNewText constructor function that gerates multiple paragraphs from paragraphs
GenerateNewText.prototype.getAllParagraphs = function(numberOfParagraphs) {
  let allParagraphs = [];
  // Generate the number of paragraphs as specified by the user
  while (allParagraphs.length < numberOfParagraphs) {
    allParagraphs.push(this.getParagraph());
  }
  // Convert array into HTML string
  let paragraphHTML = "";
  allParagraphs.forEach(function (paragraph) {
    paragraphHTML += "<p>" + paragraph + "</p>";
  });
  return paragraphHTML;
}


module.exports = loremIpsum;
//export default loremIpsum;
//module.exports = GenerateNewText;