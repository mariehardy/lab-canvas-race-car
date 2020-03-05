
// let startGameButton = document.getElementById('start-button');

window.onload = () => {
    document.getElementById('start-button').onclick = () => {
  //hangman = new Hangman(['node', 'javoscript', 'react', 'miamo', 'paris', 'amsterdom', 'lisboa']);
    // raceCarCanvas = new RaceCarCanvas();
    // raceCarCanvas.createBoard()

    startGame();
  };
}


function startGame() {
  // raceCarCanvas.backgroundImg()
  // car.update()

  draw()

  //EDISON+DIMA'S CODE
  // let ctx = document.getElementById("canvas").getContext("2d");
  // ctx.clearRect(0, 0, canvas.width, canvas.height);
  // let roadImg = new Image();
  // roadImg.src = "images/road.png";
  // let carImg = new Image();
  // carImg.src = "images/car.png";
  // ctx.drawImage(roadImg, 0, 0, canvas.width, canvas.height);
  // ctx.drawImage(carImg, 220, 500, 50, 100);
  // window.requestAnimationFrame(startGame);
};

document.onkeydown = function (e) {
  
    switch (e.keyCode) {
      case 37:
        if (car.x > 50) {
          car.leftArrowPressed();
        } else {
        }
        break;
      case 39: 
      if (car.x < canvas.width-70) {
        car.rightArrowPressed();
      } else {
      }
      break;    
    }
} 
