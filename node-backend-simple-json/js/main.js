const answer = document.getElementById("answer")
const question = document.getElementById("question")


document.querySelector('#clickMe').addEventListener('click', makeReq)

async function makeReq(){
    const res = await fetch(`/api?question=entered`)
        const data = await res.json()

        console.log(data);
        document.querySelector("#answer").textContent = data.answer
  }



//Make list of "answers"
//On clikc - Generatre random number
//Select "answer" from the list (random number)
//Print to the DOM (h2)

// function generateRandNum(){
//   //Generate 1-10
//   return Math.floor((Math.random() * 20) + 1)
// }

//array of 20 possible answers
function getAnswer(){
  const answer = ["As I see it, yes.", "Ask again later.", "Better not tell you now.", "Cannot predict now.", "Concentrate and ask again.",
  "Don't count on it.", "It is certain.", "It is decidedly so.", "Most likely.", "My reply is no.", "My sources say no.",
  "Outlook not so good.", "Outlook good.", "Reply hazy, try again.", "Signs point to yes.", "Very doubtful.", "Without a doubt.",
  "Yes.", "Yes - definitely.", "You may rely on it."];

 main
  //const random = Math.floor((Math.random() * 20) + 1)
  //if we add more answers
  const random = Math.floor((Math.random() * answer.length))

  return answer[random]
}
