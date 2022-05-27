const http = require('http');
const fs = require('fs')
const url = require('url');
const querystring = require('querystring');
const figlet = require('figlet')

const server = http.createServer((req, res) => {
  const page = url.parse(req.url).pathname;
  const params = querystring.parse(url.parse(req.url).query);
  console.log(page);
  if (page == '/') {
    fs.readFile('index.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    });
  }
  else if (page == '/api') {
    if('question' in params){
      if(params['question'] == 'entered'){
        res.writeHead(200, {'Content-Type': 'application/json'});

        //array of 20 possible answers
        function getAnswer(){
          const answer = ["As I see it, yes.", "Ask again later.", "Better not tell you now.", "Cannot predict now.", "Concentrate and ask again.",
          "Don't count on it.", "It is certain.", "It is decidedly so.", "Most likely.", "My reply is no.", "My sources say no.",
          "Outlook not so good.", "Outlook good.", "Reply hazy, try again.", "Signs point to yes.", "Very doubtful.", "Without a doubt.",
          "Yes.", "Yes - definitely.", "You may rely on it."];

          //const random = Math.floor((Math.random() * 20) + 1)
          //if we add more answers
          const random = Math.floor((Math.random() * answer.length))

          answerReply = answer[random]
          console.log(answerReply)
        }

        getAnswer()

        const objToJson = {
         answer: answerReply
        }
        res.end(JSON.stringify(objToJson));
      }//question = false
      else if(params['question'] != 'true'){
        res.writeHead(200, {'Content-Type': 'application/json'});
        const objToJson = {
          answer: "unknown"
        }
        res.end(JSON.stringify(objToJson));
      }
    }
  }
  else if (page == '/css/style.css'){
    fs.readFile('css/style.css', function(err, data) {
      res.write(data);
      res.end();
    });
  }else if (page == '/js/main.js'){
    fs.readFile('js/main.js', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/javascript'});
      res.write(data);
      res.end();
    });
  }else{
    figlet('404!!', function(err, data) {
      if (err) {
          console.log('Something went wrong...');
          console.dir(err);
          return;
      }
      res.write(data);
      res.end();
    });
  }
});

server.listen(5500);

// // 👇️ Store a JSON value in local storage
// localStorage.setItem('person', JSON.stringify({name: 'Tom'}));

// // 👇️ parse the value when accessing it
// const result = JSON.parse(localStorage.getItem('person'));
