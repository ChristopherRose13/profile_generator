const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let answers = [];
let questions = ['What\'s your name? Nicknames are also acceptable :) ','What\'s an activity you like doing?', 'What do you listen to while doing that?', "Which meal is your favourite (eg: dinner, brunch, etc.)", "What's your favourite thing to eat for that meal?", "Which sport is your absolute favourite?", "What is your superpower? In a few words, tell us what you are amazing at!"];

let nextQuestion = function(index) {
  if (index < questions.length) {
    rl.question(questions[index], (answer) => {
      answers.push(answer);
      index ++;
      nextQuestion(index);
    });
  } else {
    rl.close();
    let output = `${answers[0]} loves ${answers[1]} while listening to ${answers[2]}, devouring ${answers[4]} for ${answers[3]}, prefers ${answers[5]} over any other sport, and is amazing at ${answers[6]}.`;
    console.log(output);
  }
};



nextQuestion(0);

