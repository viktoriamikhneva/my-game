var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var figureArr = [];
var intervalId = null;

function Figure(ctx) {
    this.x = Math.floor(0 + Math.random() * (canvas.width + 1 - 0));
    this.y = 0;
    this.width = 20;
    this.height = 20;
    this.color = '#' + Math.random().toString(16).substr(-6);
    this.speed = 1;
    ctx.fillStyle = this.color;
    this.drow = () => {
        ctx.fillRect(this.width + this.x, this.y, this.width, this.height);
    };
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    figureArr.forEach(item => {
        ctx.fillStyle = item.color;
        item.drow();
        item.y += item.speed;
    });

    requestAnimationFrame(animate);
}

document.getElementById('startBtn').addEventListener('click', event => {
    figureArr.push(new Figure(ctx));
    animate();

    intervalId = setInterval(function () {
        figureArr.push(new Figure(ctx));
        animate();
    }, 2000);
});

document.getElementById('stopBtn').addEventListener('click', event => {
    clearInterval(intervalId);
    figureArr = [];
    ctx.clearRect(0, 0, canvas.width, canvas.height);
});