var myCanvas =  document.getElementById('canvas');
var ctx = myCanvas.getContext('2d');
var snakeSize = 10;
var w = 608;
var h = 608;
var score = 0;
var snake;
var food;
var bananas = document.getElementById('fruit');
var poison;
var number;
var audioEat = new Audio('eat.mp3');
var audioDead = new Audio('dead.mp3')



function generateNum() {
randNum = Math.floor(Math.random() * 2) + 1;
console.log(randNum);


}


generateNum();

window.onload = function() {
//Getting the image
img = new Image();
img.src = 'bg2.jpg';

img.onload = function() {
  fill_canvas(img);



}

function fill_canvas(img) {
img.width = myCanvas.width;
img.height = myCanvas.height;
ctx.drawImage(img, 0, 0);




}

}





//Canvas Elements

var drawModule = (function () {

  var bodySnake = function(x, y) {
    var my_gradient = ctx.createLinearGradient(0, 0, 304, 304);
      my_gradient.addColorStop(0, "black");
      my_gradient.addColorStop(1, "white");
        ctx.fillStyle = my_gradient;
        ctx.fillRect(x*snakeSize, y*snakeSize, snakeSize, snakeSize);
        ctx.strokeStyle = 'darkgreen';
        ctx.strokeRect(x*snakeSize, y*snakeSize, snakeSize, snakeSize);
  }




  var scoreText = function() {
    var score_text = "Score: " + score;
    ctx.fillStyle = 'blue';
    ctx.fillText(score_text, 145, h-5);
  }

  var createSnake = function() {
      var length = 4;
      snake = [];
      for (var i = length-1; i>=0; i--) {
          snake.push({x:i, y:0});
      }
  }




  var paint = function(){
    //Background



      ctx.fillRect(0, 0, w, h);
      ctx.drawImage(img, 0, 0);
      ctx.strokeStyle = 'black';
      ctx.strokeRect(0, 0, w, h);

      btn.setAttribute('disabled', true);

      var snakeX = snake[0].x;
      var snakeY = snake[0].y;

//What the keys correspond to
      if (direction == 'right') {
        snakeX++; }
      else if (direction == 'left') {
        snakeX--; }
      else if (direction == 'up') {
        snakeY--;
      } else if(direction == 'down') {
        snakeY++; }

      if (snakeX == -1 || snakeX == w/snakeSize || snakeY == -1 || snakeY == h/snakeSize || checkCollision(snakeX, snakeY, snake)) {
          //restart game
              audioDead.play();
          btn.removeAttribute('disabled', true);

          ctx.clearRect(0,0,w,h);
          gameloop = clearInterval(gameloop);
          return;
        }


        var banana = function(x, y) {
              ctx.fillStyle = 'yellow';
              ctx.strokeStyle = 'brown';
              ctx.fillRect(x*snakeSize, y*snakeSize, snakeSize, snakeSize);
              ctx.fillRect(x*snakeSize+1, y*snakeSize+1, snakeSize-2, snakeSize-2);
        }

        function killer(x, y) {
         ctx.fillStyle = '#e0c73a';
         ctx.fillRect(x*snakeSize, y*snakeSize, snakeSize, snakeSize);
         ctx.fillRect(x*snakeSize+1, y*snakeSize+1, snakeSize-2, snakeSize-2);


       }


        if(snakeX == food.x && snakeY == food.y) {
          var tail = {x: snakeX, y: snakeY}; //Create a new head instead of moving the tail
                  audioEat.play();
          score ++;
          generateNum();





          createFood(); //Create new food
          if (randNum == 1) {
            createPoison();

          }

        else {
          tail.x = snakeX;
          tail.y = snakeY;



        }
        }


        else {
          var tail = snake.pop(); //pops out the last cell
          tail.x = snakeX;
          tail.y = snakeY;
        }

        //The snake can now eat the food.


        if(snakeX == poison.x && snakeY == poison.y) {
              audioDead.play();
          btn.removeAttribute('disabled', true);

          ctx.clearRect(0,0,w,h);
          gameloop = clearInterval(gameloop);
          return;


        }


        snake.unshift(tail); //puts back the tail as the first cell

        for(var i = 0; i < snake.length; i++) {
          bodySnake(snake[i].x, snake[i].y);
        }

        banana(food.x, food.y);
        scoreText();
        if (randNum == 1) {
        killer(poison.x, poison.y);


        }
  }







  var createFood = function() {
      food = {
        x: Math.floor((Math.random() * 58) + 1),
        y: Math.floor((Math.random() * 58) + 1)

      }

      for (var i=0; i>snake.length; i++) {
        var snakeX = snake[i].x;
        var snakeY = snake[i].y;

        if (food.x===snakeX && food.y === snakeY || food.y === snakeY && food.x===snakeX) {
          food.x = Math.floor((Math.random() * 58) + 1);
          food.y = Math.floor((Math.random() * 58) + 1);
        }
      }
  }





//Making poison

function createPoison() {

  poison = {
    x: Math.floor((Math.random() * 58) + 1),
    y: Math.floor((Math.random() * 58) + 1)


  }

  for (var i=0; i>snake.length; i++) {
    var snakeX = snake[i].x;
    var snakeY = snake[i].y;

    if (killer.x===snakeX && killer.y === snakeY || killer.y === snakeY && killer.x===snakeX) {
      killer.x = Math.floor((Math.random() * 58) + 1);
      killer.y = Math.floor((Math.random() * 58) + 1);
    }

}

}


  var checkCollision = function(x, y, array) {
      for(var i = 0; i < array.length; i++) {
        if(array[i].x === x && array[i].y === y)
        return true;
      }
      return false;
  }

  var init = function(){
      direction = 'down';
      createSnake();
      createFood();

        createPoison();


      score = 0;
      gameloop = setInterval(paint, 80);
  }


    return {
      init : init
    };


}());



(function (window, document, drawModule, undefined) {

    //Connect the button in the html with the _init_ function.
    var btn = document.getElementById('btn');
    btn.addEventListener("click", function () {
        drawModule.init();
    });
    //Controls

    document.onkeydown = function (event) {

        keyCode = window.event.keyCode;
        keyCode = event.keyCode;

        switch (keyCode) {

        case 37:
            if (direction != 'right') {
                direction = 'left';
            }
            console.log('left');
            break;

        case 39:
            if (direction != 'left') {
                direction = 'right';
                console.log('right');
            }
            break;

        case 38:
            if (direction != 'down') {
                direction = 'up';
                console.log('up');
            }
            break;

        case 40:
            if (direction != 'up') {
                direction = 'down';
                console.log('down');
            }
            break;
        }
    }
}) (window, document, drawModule);
