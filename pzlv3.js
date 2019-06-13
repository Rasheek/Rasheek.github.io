var myCanvas =  document.getElementById('canvas');
var ctx = myCanvas.getContext('2d');
var snakeSize = 10;
var w = 608;
var h = 608;
var snake;
var food;
var bananas = document.getElementById('fruit');
var walls;
var walls3;
var walls2;
var walls4;
var walls5;
var walls6;
var walls7;
var audioEat = new Audio('eat.mp3');
var audioDead = new Audio('dead.mp3')






window.onload = function() {
//Getting the image
img = new Image();
img.src = 'pzbg.jpg';

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





  var drawSnake = function() {
      var length = 4;
      snake = [];
      for (var i = length-1; i>=0; i--) {
          snake.push({x:i, y:0});
      }
  }


  var paint = function(){
      ctx.fillRect(0, 0, w, h);
      ctx.strokeStyle = 'black';
      ctx.drawImage(img, 0, 0);

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
              ctx.fillRect(x*snakeSize, y*snakeSize, snakeSize, snakeSize);
              ctx.fillRect(x*snakeSize+1, y*snakeSize+1, snakeSize-2, snakeSize-2);
        }

        var fence = function(x, y) {
          ctx.fillStyle = 'brown';
          ctx.fillRect(x*snakeSize, y*snakeSize, snakeSize - 450, snakeSize);
          ctx.fillRect(x*snakeSize+ 1, y*snakeSize+1, snakeSize-2, snakeSize-2);




        }

        var fence3 = function(x, y) {
          ctx.fillStyle = 'brown';
          ctx.fillRect(x*snakeSize, y*snakeSize, snakeSize + 450, snakeSize);
          ctx.fillRect(x*snakeSize+ 1, y*snakeSize+1, snakeSize-2, snakeSize-2);




        }

        var fence2 = function(x, y) {
          ctx.fillStyle = 'brown';
          ctx.fillRect(x*snakeSize, y*snakeSize, snakeSize - 200, snakeSize);
          ctx.fillRect(x*snakeSize+ 1, y*snakeSize+1, snakeSize-2, snakeSize-2);




        }


        var fence4 = function(x, y) {
          ctx.fillStyle = 'brown';
          ctx.fillRect(x*snakeSize, y*snakeSize, snakeSize - 450, snakeSize);
          ctx.fillRect(x*snakeSize+ 1, y*snakeSize+1, snakeSize-2, snakeSize-2);




        }

        var fence5 = function(x, y) {
          ctx.fillStyle = 'brown';
          ctx.fillRect(x*snakeSize, y*snakeSize, snakeSize + 450, snakeSize);
          ctx.fillRect(x*snakeSize+ 1, y*snakeSize+1, snakeSize-2, snakeSize-2);




        }

        var fence6 = function(x, y) {
          ctx.fillStyle = 'brown';
          ctx.fillRect(x*snakeSize, y*snakeSize, snakeSize + 580, snakeSize);
          ctx.fillRect(x*snakeSize+ 1, y*snakeSize+1, snakeSize-2, snakeSize-2);




        }

        var fence7 = function(x, y) {
          ctx.fillStyle = 'brown';
          ctx.fillRect(x*snakeSize, y*snakeSize, snakeSize - 450, snakeSize);
          ctx.fillRect(x*snakeSize+ 1, y*snakeSize+1, snakeSize-2, snakeSize-2);




        }




        if(snakeX == food.x && snakeY == food.y) {
          var tail = {x: snakeX, y: snakeY}; //Create a new head instead of moving the tail
          audioEat.play();
          alert("CONGRATULATIONS");
        window.location = 'pzselection.html'

        } else {
          var tail = snake.pop(); //pops out the last cell
          tail.x = snakeX;
          tail.y = snakeY;
        }

        if(snakeX <= walls.x && snakeY == walls.y) {
            audioDead.play();
          btn.removeAttribute('disabled', true);

          ctx.clearRect(0,0,w,h);
          gameloop = clearInterval(gameloop);
          return;


        }

        if(snakeX >= walls3.x && snakeY == walls3.y) {
            audioDead.play();
          btn.removeAttribute('disabled', true);

          ctx.clearRect(0,0,w,h);
          gameloop = clearInterval(gameloop);
          return;


        }

        if(snakeX <= walls2.x && snakeY == walls2.y) {
            audioDead.play();
          btn.removeAttribute('disabled', true);

          ctx.clearRect(0,0,w,h);
          gameloop = clearInterval(gameloop);
          return;


        }

        if(snakeX <= walls4.x && snakeY == walls4.y) {
            audioDead.play();
          btn.removeAttribute('disabled', true);

          ctx.clearRect(0,0,w,h);
          gameloop = clearInterval(gameloop);
          return;


        }

        if(snakeX >= walls5.x && snakeY == walls5.y) {
            audioDead.play();
          btn.removeAttribute('disabled', true);

          ctx.clearRect(0,0,w,h);
          gameloop = clearInterval(gameloop);
          return;


        }

        if(snakeX >= walls6.x && snakeY == walls6.y) {
            audioDead.play();
          btn.removeAttribute('disabled', true);

          ctx.clearRect(0,0,w,h);
          gameloop = clearInterval(gameloop);
          return;


        }

        if(snakeX <= walls7.x && snakeY == walls7.y) {
            audioDead.play();
          btn.removeAttribute('disabled', true);

          ctx.clearRect(0,0,w,h);
          gameloop = clearInterval(gameloop);
          return;


        }

        //The snake can now eat the food.
        snake.unshift(tail); //puts back the tail as the first cell

        for(var i = 0; i < snake.length; i++) {
          bodySnake(snake[i].x, snake[i].y);
        }

        banana(food.x, food.y);
        fence(walls.x, walls.y);
        fence3(walls3.x, walls3.y);
        fence2(walls2.x, walls2.y);
        fence4(walls4.x, walls4.y);
        fence5(walls5.x, walls5.y);
        fence6(walls6.x, walls6.y);
        fence7(walls7.x, walls7.y);


  }


  var createWalls = function() {
    walls = {
      x:40,
      y:10


    }


    for (var i=0; i>snake.length; i++) {
      var snakeX = snake[i].x;
      var snakeY = snake[i].y;

      if (walls.x===snakeX && walls.y === snakeY || walls.y === snakeY && walls.x===snakeX) {
        walls.x = 0;
        walls.y = 10;
      }
    }


  }



  var createWalls3 = function() {
    walls3 = {
      x:15,
      y:40


    }


    for (var i=0; i>snake.length; i++) {
      var snakeX = snake[i].x;
      var snakeY = snake[i].y;

      if (walls3.x===snakeX && walls3.y === snakeY || walls3.y === snakeY && walls3.x===snakeX) {
        walls3.x = 15;
        walls3.y = 40;
      }
    }


  }

  var createWalls2 = function() {
    walls2 = {
      x:15,
      y:37


    }


    for (var i=0; i>snake.length; i++) {
      var snakeX = snake[i].x;
      var snakeY = snake[i].y;

      if (walls2.x===snakeX && walls2.y === snakeY || walls2.y === snakeY && walls2.x===snakeX) {
        walls2.x = 15;
        walls2.y = 40;
      }
    }


  }



  var createWalls4 = function() {
    walls4 = {
      x:40,
      y:43


    }


    for (var i=0; i>snake.length; i++) {
      var snakeX = snake[i].x;
      var snakeY = snake[i].y;

      if (walls4.x===snakeX && walls4.y === snakeY || walls4.y === snakeY && walls4.x===snakeX) {
        walls4.x = 15;
        walls4.y = 10;
      }
    }


  }

  var createWalls5 = function() {
    walls5 = {
      x:15,
      y:13


    }


    for (var i=0; i>snake.length; i++) {
      var snakeX = snake[i].x;
      var snakeY = snake[i].y;

      if (walls5.x===snakeX && walls5.y === snakeY || walls5.y === snakeY && walls5.x===snakeX) {
        walls5.x = 15;
        walls5.y = 40;
      }
    }


  }

  var createWalls6 = function() {
    walls6 = {
      x:2,
      y:15


    }


    for (var i=0; i>snake.length; i++) {
      var snakeX = snake[i].x;
      var snakeY = snake[i].y;

      if (walls6.x===snakeX && walls6.y === snakeY || walls6.y === snakeY && walls6.x===snakeX) {
        walls6.x = 15;
        walls6.y = 40;
      }
    }


  }

  var createWalls7 = function() {
    walls7 = {
      x:15,
      y:17


    }


    for (var i=0; i>snake.length; i++) {
      var snakeX = snake[i].x;
      var snakeY = snake[i].y;

      if (walls7.x===snakeX && walls7.y === snakeY || walls7.y === snakeY && walls7.x===snakeX) {
        walls7.x = 15;
        walls7.y = 40;
      }
    }


  }





  var createFood = function() {
      food = {
        x: 50,
        y: 50
      }

      for (var i=0; i>snake.length; i++) {
        var snakeX = snake[i].x;
        var snakeY = snake[i].y;

        if (food.x===snakeX && food.y === snakeY || food.y === snakeY && food.x===snakeX) {
          food.x = 50;
          food.y = 50;
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
      drawSnake();
      createFood();
      createWalls();
      createWalls3();
      createWalls2();
      createWalls4();
      createWalls5();
      createWalls6();
      createWalls7();

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
