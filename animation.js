
let canvas = document.getElementById("canvas1");
let ctx = canvas.getContext("2d");
const particlesarray=[]
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx.fillStyle = "rgb(233, 34,200 )";
ctx.fillRect(50, 50, 100, 133);

let mouse = {
  x: undefined, // we defined this object so that we can use it globally
  y: undefined,
};

canvas.addEventListener('click',function(event){
mouse.x=event.x
mouse.y=event.y
circle()

})

canvas.addEventListener("mousemove", function (event) {
  mouse.x = event.x;
  mouse.y = event.y;
circle()
});


function circle(){
  ctx.clearRect(0, 0, canvas.width, canvas.height); // clear the canvas
  ctx.beginPath();
  ctx.fillStyle='black';
  ctx.strokeStyle='white';
  ctx.lineWidth=2;
  ctx.arc(mouse.x, mouse.y, 10, 0, Math.PI*2);
  ctx.fill();
}








class Particle{
constructor(){
// this.x=mouse.x
// this.y=mouse.y
this.x=Math.random()*canvas.width;
this.y=Math.random()*canvas.height;
this.size=Math.random()*23+1
this.speedX=Math.random()*0.5-0.5
this.speedY=Math.random()*0.5-0.5
}
update(){
this.x+=this.speedX 
this.y+=this.speedY
if(this.size>0.2) this.size-=0.1
}

draw(){
  ctx.fillStyle = "black";
  ctx.beginPath();
  ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
  ctx.fill();


}
}




function particle(){
for(let i=0; i<100 ; i+=2){
  particlesarray.push(new Particle())
}
}

particle()
console.log(particlesarray);





function handleparticle(){
  for(let i=0 ; i<particlesarray.length;i++){
  
  particlesarray[i].update();
  particlesarray[i].draw()
  }
  
  }
  
  
  
   
   function animate() {
     ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    handleparticle()
     requestAnimationFrame(animate);
   }
   animate()




















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