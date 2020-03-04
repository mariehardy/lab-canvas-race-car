let canvas = document.getElementById('canvas');
let context = canvas.getContext('2d');


backgroundImg = function () {
    let img = new Image();
    img.src = "../images/road.png";
    context.drawImage(img, 0, 0, 500, 700);

        // var img = new Image();
        // img.onload = function () {
        //     context.drawImage(img, 0, 0, 500, 700);
        // }
        // img.src = "../images/road.png";

}



let car = {
    x: 350,
    y: 450,
    width: 50,
    height: 100,
    // speedX: 0,
    // speedY: 0,
    leftArrowPressed: function () {
      this.x -= 20
    },
    rightArrowPressed: function () {
      this.x += 20
    },
    update: function () {
        let img = new Image();
        img.src = "../images/car.png";
        context.drawImage(img, this.x, this.y, this.width, this.height);
        
            // var img = new Image();
            // img.onload = function () {
            //     let context = canvas.getContext('2d');
            //     context.drawImage(img, 300, 250, this.width, this.height);
            //     console.log(this.x + this.y)
            // }
            // img.src = "../images/car.png";
    },
    top: function () {
        return this.y
    },
    left: function () {
        return this.x
    },
    bottom: function () {
        return this.y + this.height
    },
    right: function () {
        return this.x + this.width
    },
    
    //crashWith: function (obstacle) {
    //     return !(
    //       this.bottom() < obstacle.top() ||
    //       this.top() > obstacle.bottom() ||
    //       this.right() < obstacle.left() ||
    //       this.left() > obstacle.right()
    //     );
    //   },

    crashWith: function (boundaries) {
        return !(
          this.bottom() < boundaries.top() ||
          this.top() > boundaries.bottom() ||
          this.right() < boundaries.left() ||
          this.left() > boundaries.right()
        );
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


    // obstacleArr.forEach((o) => {
    //     if (rect1.crashWith(o)) {
    //       alert('loser')
    //     }
    //     o.update()
    //   })


    car.update();
    window.requestAnimationFrame(draw)


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


