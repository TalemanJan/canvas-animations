// let canvas = document.getElementById("canvas1");
// let ctx = canvas.getContext("2d");
// const particlesarray = [];
// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;

// let mouse = {
//   x: undefined,
//   y: undefined,
// };

// canvas.addEventListener('mousemove', function(event) {
//   mouse.x = event.x;
//   mouse.y = event.y;
// });

// class Particle {
//   constructor() {
//     this.x = Math.random() * canvas.width;
//     this.y = Math.random() * canvas.height;
//     this.size = Math.random() * 5 + 1;
//     this.speedX = Math.random() * 3 - 1.5;
//     this.speedY = Math.random() * 3 - 1.5;
//   }
  
//   update() {
//     this.x+=this.speedX;
//     this.y+=this.speedY;
//     }
  

//   draw() {
//     ctx.beginPath();
//     ctx.fillStyle = 'black';
//     ctx.strokeStyle = 'white';
//     ctx.lineWidth = 2;
//     ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
//     ctx.fill();
//   }
// }

// function init() {
//   for (let i = 0; i < 100; i++) {
//     particlesarray.push(new Particle());
//   }
// }

// function handleparticle() {
//   for (let i = 0; i < particlesarray.length; i++) {
//     particlesarray[i].update();
//     particlesarray[i].draw();
//   }
// }

// function animate() {
//   ctx.clearRect(0, 0, canvas.width, canvas.height);
//   handleparticle();
//   requestAnimationFrame(animate);
// }

// init();
// animate();

let canvas = document.getElementById("canvas1");
let ctx = canvas.getContext("2d");
const particlesarray=[]
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx.fillStyle = "rgb(233, 34,200 )";
ctx.fillRect(50, 50, 100, 133);
let hue=0;
let mouse = {
  x: undefined,
  y: undefined,
};

canvas.addEventListener('click',function(event){
  mouse.x=event.x
  mouse.y=event.y
  for(let i=0 ; i<10; i++){
    particlesarray.push(new Particle())
  }
})

canvas.addEventListener("mousemove", function (event) {
  mouse.x = event.x;
  mouse.y = event.y;
  for(let i=0 ; i<5; i++){
    particlesarray.push(new Particle())
  }
});

function circle(){
  ctx.beginPath();
  ctx.fillStyle='white'
  ctx.strokeStyle='white';
  ctx.lineWidth=1;
  ctx.arc(mouse.x, mouse.y, 10, 0, Math.PI*2);
  ctx.fill();
}

class Particle {
  constructor() {
    this.x = mouse.x;
    this.y = mouse.y;
    this.size = Math.random()*18+1;
    this.speedX = Math.random()*0.5-0.5;
    this.speedY = Math.random()*0.5-0.5;
    this.color = 'hsl('+hue+',100%,50%)'; // add color property to Particle class
  }
  
  update() {
    this.x += this.speedX;
    this.y += this.speedY;
    if (this.size > 0.1) this.size -= 0.1;
  }

  draw() {
    ctx.fillStyle = this.color; // use color property of Particle
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  }
}

function handleparticle() {
  for (let i=0 ; i<particlesarray.length; i++) {
    particlesarray[i].update();
    particlesarray[i].draw();
    for(let j=0 ; j<particlesarray.length;j++){
      const dx=particlesarray[i].x-particlesarray[j].x;
      const dy=particlesarray[i].y-particlesarray[j].y;
      const distance=Math.sqrt( dx*dx + dy*dy) // fix the calculation of distance
      if(distance<100){
        ctx.beginPath()
        ctx.strokeStyle=particlesarray[i].color
        ctx.lineWidth=0.4
        ctx.moveTo(particlesarray[i].x,particlesarray[i].y);
        ctx.lineTo(particlesarray[j].x,particlesarray[j].y);
        ctx.stroke( )
        ctx.closePath()
      }
    }
    if (particlesarray[i].size <= 0.3) {
      particlesarray.splice(i,1);
      i--;
    }
  }
}

function animate() {
  ctx.clearRect(0,0,canvas.width,canvas.height)
  handleparticle();
  circle(); // call circle function
  hue+=3 // increment hue
  requestAnimationFrame(animate);
}

animate();




// let canvas =document.getElementById('canvas1')
// let ctx=canvas.getContext('2d')
//  canvas.width = window.innerWidth;
//  canvas.height = window.innerHeight;

// ctx.fillStyle='red'
// ctx.fillRect(50,10,canvas.width,canvas.height)

// function circle(){
// let canvas =document.getElementById('canvas1')
// let ctx=canvas.getContext('2d')
// ctx.beginPath()
// ctx.fillStyle='black'
// ctx.strokeStyle='white';
// ctx.lineWidth=2
// ctx.arc(50,50,10,0,Math.PI*2)
// ctx.fill()
// }









// let mouse ={
// x:undefined,
// y:undefined
// }



// canvas.addEventListener('mousemove',function(event){
// mouse.x=event.x
// mouse.y=event.y
// console.log(event);
// circle()

// })


// function animate(){
// ctx.clearRect(mouse.x,mouse.y,canvas.width,canvas.height)
// circle()
// requestAnimationFrame(animate)

// }
// animate()