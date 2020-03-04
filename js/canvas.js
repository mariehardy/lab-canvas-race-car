let canvas = document.getElementById('canvas');
let context = canvas.getContext('2d');


backgroundImg = function () {
        var img = new Image();
        img.onload = function () {
            context.drawImage(img, 0, 0, 500, 700);
        }
        img.src = "../images/road.png";
}



let car = {
    x: 300,
    y: 250,
    width: 158,
    height: 319,
    // speedX: 0,
    // speedY: 0,
    leftArrowPressed: function () {
      this.x -= 5
    },
    rightArrowPressed: function () {
      this.x += 5
    },
    update: function () {
        // context.drawImage(img, this.x, this.y, this.width, this.height);
        
            var img = new Image();
            img.onload = function () {
                let context = canvas.getContext('2d');
                context.drawImage(img, 300, 250, this.width, this.height);
                console.log(this.x + this.y)
            }
            img.src = "../images/car.png";
    }
    }





// array of all obstacles
// let obstacleArr = []

// var img = new Image();
// img.src = "../images/car.png";



let frameCounter = 0

let draw = () => {
    context.clearRect(0, 0, 500, 700)
    backgroundImg()
    car.update();


//   this.context.clearRect(0, 0, canvas.width, canvas.height)
//   frameCounter++

//   obstacleArr.forEach((o) => {
//     if (rect1.crashWith(o)) {
//       alert('loser')
//     }
//     o.update()
//   })
//   rect1.update()

//   // after each 1 second
//   if (frameCounter % 60 === 0) {
//     // add three new obstacles to the array
//     obstacleArr.push(new Obstacle(10))
//     obstacleArr.push(new Obstacle(250))
//     obstacleArr.push(new Obstacle(350))
//   }

//   window.requestAnimationFrame(draw)

}


