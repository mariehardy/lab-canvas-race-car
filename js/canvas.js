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
        this.x -= 30
    },
    rightArrowPressed: function () {
        this.x += 30
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

    crashWith: function (obstacle) {
        return !(
            this.bottom() < obstacle.top() ||
            this.top() > obstacle.bottom() ||
            this.right() < obstacle.left() ||
            this.left() > obstacle.right()
        );
    }

}



class Obstacle {
    constructor(posX) {
        this.x = posX
        this.y = 0
        this.width = 200
        this.height = 30
        this.speedX = 0
        this.speedY = 0
    }


    top() {
        return this.y
    }
    left() {
        return this.x
    }
    bottom() {
        return this.y + this.height
    }
    right() {
        return this.x + this.width
    }

    update() {
        context.fillStyle = 'red'
        context.fillRect(this.x, this.y, this.width, this.height);
        this.y += 3
    }
}


// array of all obstacles
let obstacleArr = []
// console.log(obstacleArr)

let frameCounter = 0


let draw = () => {
    context.clearRect(0, 0, canvas.width, canvas.height)
    frameCounter ++
    backgroundImg()


    obstacleArr.forEach((o) => {
        
        if (car.crashWith(o)) {
            // alert('loser')
            return
        }
        o.update()
    })

    car.update();


    // after each 1 second
    if (frameCounter % 180 === 0) {
        randomPosX = Math.floor(Math.random() * 300)
        // add three new obstacles to the array
        obstacleArr.push(new Obstacle(randomPosX))
        
    }


    window.requestAnimationFrame(draw)


}