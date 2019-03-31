
// Code that generates the random lorem ipsum text

// Create a new object called loremIpsum by invoking the GenerateNewText constructor function
const loremIpsum = new GenerateNewText();

// Constructor function that creates an object with the sentences property
function GenerateNewText() {
  // Add property to the object
  this.sentences =
    [
       "Do you see me on the phone?",
			 "Be home before the street lights come on.",
			"Huh, you must not be hungry, then.",
			"Imma give you something to cry about.",
			"Quit running around this house like you ain't got no goddamn sense!",
			"This is my house.",
			"My roof, my rules.",
			"Ima Pusha yo T if you don't do that homework!",
			"Name to me what bills you pay in my house.",
			 "Do you pay my bills?",
			"Do you pay my telephone bills?",
			"Do you pay my automo-bills?",
			"I brought you into this world and I will take you out.",
			"I don't think you do!",
			"Who you think you talking to?",
			"What did I tell you about playing on the phone?",
			"What did I tell you about playing in the rain?",
			"God, give me strength.",
			"Lord, provide me with the strength.",
			"Lord, bless me...with the strength.",
			"I'm a independent black woman.",
			"Dear Heavenly Father, please bless this food for the nourishment of our bodies. In the sweet name of our mighty Lord and Savior Jesus Christ we pray...amen.",
			"(belt snap)",
			"I don't need to explain myself! I'm grown!",
			"I-N-D-E-P-E-N-D-E-N-T, do you know what that mean?",
			"I will slap some sense into you.",
			"Don't ask me for nothing else.",
			"Oh, so you think you grown now, huh?",
			"Don't make me go upside yo head.",
			"I will knock you into the middle of next week.",
			"Do you understand me?",
			"Get out my mouth, this grown folks' business.",
			 "Don't you slam no doors in my  house!",
			"Pick or choose, you either gon stay in or stay out.",
			 "Where you act up is where you get beat up.",
			"Do you got Aeropostale money?",
			"You got McDonald's money?",
			"You got hospital money?",
			"Roll your eyes again, imma slap em to the back of yo head.",
			"God ain't through with me yet!",
			"God don’t like ugly!",
			"I'm not one of your little friends",
			"Stop all that crying before I give you something to cry about.",
			"First of all, check your tone.",
			"I hope you know that school work like you know them songs.",
			"When we get in this store, don't touch nothin'.",
			 "Fix your face.",
			 "Keep playing and see what happens.",
			"I brought you in this world, and I can take you out."
   ];
}

// Method to the GenerateNewText constructor function that generates a random sentence
GenerateNewText.prototype.getRandomSentence = function() {
  let randomSentence = this.sentences[Math.floor(Math.random() * this.sentences.length)]
	return randomSentence;
}

// Method to the GenerateNewText constructor function that generates a paragraph from random sentences
GenerateNewText.prototype.getParagraph = function() {
  let paragraph = "";
  // Set the minimum number of words
  let minimumCharacterLength = 250;
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