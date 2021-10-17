var readlineSync=require('readline-sync');
var score=0;
var userName=readlineSync.question('Enter Your Name  ');
console.log("Welcome  "+userName);
var questions=[
  {
    question:"What is my full name ? ",
    answer:"aquil choudhary"
  },
  {
    question:"Am I older than 25 ?",
    answer:"no"
  },
  {
    question:"Where do I live ?",
    answer:"Ghaziabad"
  },
  {
    question:"Where do I work ?",
    answer:"i am boss"
  },
  {
    question:"what is my favourite ice cream? ",
    answer:"rabdi"
  },
  {
    question:"what is my favourite sport ? ",
    answer:"athelete"
  },
  {
    question:"which is my first school ? ",
    answer:"ben hur"
  }
];
function play(question,answer)
{
  var userAnswer=readlineSync.question(question);
  if (userAnswer===answer)
  {  
  console.log("You are right");
  score=score+1;
  console.log("Your score is "+score);
  }
  else
  {
    score=score-1;
    console.log("Your score is "+score);
    console.log("Your answer is wrong");
  }
}

for (var i=0;i<questions.length;i++)
{
  var currentquestions=questions[i];
  play(currentquestions.question,currentquestions.answer)
}
// var readlineSync = require('readline-sync');
// var userName = readlineSync.question("May i have your name ?  ");
// console.log('Hi '+userName);
// var score=0;
// var myAge=readlineSync.question("Am i older than 25  ");
// console.log('the answer is  '+myAge);
// if (myAge==="yes")
// { console.log("you are right") 
// score=score+1;
// console.log('the score is '+score)
// }
// else
// { console.log("you are wrong")
// score=score-1;
// console.log('the score is'+score) }

// var myCity=readlineSync.question('where do i live ?');
// console.log('the answer is  '+myCity);
// if (myCity==="Ghaziabad");{
//   console.log('the answer is right');
// score = score+1;
// console.log('the score is'+score);
// }
// else{
//   console.log('the answer is wrong');
// score=score-1;
// console.log('the score is '+score);
// }






