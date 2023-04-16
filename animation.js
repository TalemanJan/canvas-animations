
// // // // var a = 0;
// // // // var id = setInterval(Anim,500);

// // // // function Anim(){
// // // // 	a = a + 10;
// // // // 	if(a == 200){
// // // // 		clearInterval(id);
// // // // 	}else{
// // // // 		var target = document.getElementById("test");
// // // // 		//target.style.marginLeft = a + 'px';
// // // // 		target.style.width = a + 'px';
// // // // 	}
// // // // }



// // // //  JavaScript setTimeout

// // // var id = setTimeout(Anim,5000);

// // // function Anim(){
// // // 	var target = document.getElementById("test");
// // // 	target.style.width = "50px";
// // // 	console.log("Hello");
// // // }

// // // var id = setTimeout(function(){
// // // 	var target = document.getElementById("test");
// // // 	target.style.width = "500px";
// // // },5000);


// // // /* JavaScript clearTimeout*/
// // // function stopAnimation(){
// // // 	clearTimeout(id);
// // // }




// // // // var ary = [
// // // //     {fname : "Yahoo" , lname : "Baba"},
// // // //     {fname : "Rahul" , lname : "Kumar"},
// // // //     {fname : "Karan" , lname : "Sharma"},
// // // //     {fname : "jangjo" , lname : "Sama"},
// // // //     {fname : "hashmi" , lname : "rma"},
// // // //     {fname : "shamsheer" , lname : "harma"},
// // // //     {fname : "shakeel" , lname : "arma"},

// // // //   ];

// // // //   var b = ary.map(test);
// // // //   document.write(b);

  


// // // //   function test(x, prefix){
// // // //     var fullName = x.fname + " " + x.lname;
// // // //     prefix;
// // // //     return prefix + " "+fullName +" "+" "+" "+" "+" "+" "+" "+" " 
// // // //   }
// // // function my(num1) {
  

// // //   var num3='hello'
// // //   var num2=12

// // //   var ch=num3+num2
// // //   var che=num1+ch
// // //   document.write(che)
// // // }
// // // my()







// // // // var ch;

// // // // function my() {
// // // //   var num3 = 'hello';
// // // //   var num2 = 12;

// // // //   ch = num3 + num2;
// // // // }

// // // // my();
// // // // document.write(ch);






// // // var person = new Object();

// // // person.firstname = 'Ram';
// // // person.lastname = 'Kumar';
// // // // person.age = 25;
// // // person.age =32;
// // // document.write(person.firstname + "<br>");
// // // document.write(person.lastname + "<br>");
// // // document.write(person['age'] + "<br>");













// // try {
// //   // Code that might throw an error
// //   let x = y + 5; // Assume 'y' is not defined
// // } catch (error) {
// //   // Code to handle the error
// //   console.log("An error occurred: " + error.message);
// // }


// // function sum(name,...args){

// // return name+args

// // }

// // console.log(sum(3,1,2,3,4,5))




// // // example 1: combining arrays
// // const arr1 = [1, 2, 3];
// // const arr2 = [4, 5, 6];
// // const combinedArr = [...arr1, ...arr2]; // [1, 2, 
// // document.write(combinedArr)



// // function sum(...args) {
// //   let total = 0;
// //   for (let arg of args) {
// //     total += arg;
// //   }
// //   return total;
// // }

// // console.log(sum(1, 2, 3, 4)); // Output: 10
// // console.log(sum(5, 10, 15)); // Output: 30





// // let aey=[1,23,4,5,6,7,456,75]


// // let find=aey.map(check)
// // console.log(find)

// // function check(x){

// // return x+20

// // }


// // var isColorChanging = false;
// // document.addEventListener("mousemove", function(event) {
// //   if (!isColorChanging) {
// //     isColorChanging = true;
// //     setTimeout(function() {
// //       var x = event.clientX;
// //       var y = event.clientY;
// //       var myDiv = document.getElementById("myDiv");
// //       var red = Math.round(Math.random() * 255);
// //       var green = Math.round(Math.random() * 255);
// //       var blue = Math.round(Math.random() * 255);
// //       myDiv.style.backgroundColor = "rgb(" + red + "," + green + "," + blue + ")";
// //       isColorChanging = false;
// //     }, 100);
// //   }
// // });
 

// // var cursor =document.getElementById('cursor')
// // document.addEventListener('mousemove',function(e){


// // var x=e.clientX
// // var y=e.clientY
// // cursor.style.left=x+"px"
// // cursor.style.left=y+"px"



// // })



// // function prom (complete){
// // return new Promise(function(resolve,reject){
// // if (complete){
// // resolve("okay")}
// // else{
// // reject("good")

// // }

// // }
// // )
// // }
// // prom(true).then((data) => {
// //   // If the promise is resolved, log the user data to the console
// // console.log("User data:", data);
// // })
// // .catch((error) => {
// //   // If the promise is rejected, log the error message to the console
// //   console.error("Error:", error);
// // });


// // document.write(prom(true))









// // // Define a class called Person
// // class Person {
// //   constructor(name, age) {
// //     this.name = name;
// //     this.age = age;
// //   }
  
// //   // Define a method for the class
// //   sayHello() {
// //     console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
// //   }
// // }

// // // Create a new object from the Person class
// // const john = new Person("John", 30);

// // // Call the sayHello method on the object
// // john.sayHello(); // Output: "Hello, my name is John and I am 30 years old."




// // function OPP(){




// // }






// function promise(complete){
// return new Promise((resolve,reject)=>{

// if(complete){
//   resolve("good")

// }else{
//   reject("bad")
// }
// }
// )

// }


// promise(true)
// .then((data)=>{
// console.log("userdata is",data);

// })
// .catch((error)=>{
// console.log("data is",error );
// })





// // // Define a function that returns a promise
// // function fetchUserData() {
// //   return new Promise((resolve, reject) => {
// //     // Make an API call to fetch user data
// //     const userData = { name: "John", age: 30 };
// //     if (userData) {
// //       // If the API call is successful, resolve the promise with the data
// //       resolve(userData);
// //     } else {
// //       // If the API call fails, reject the promise with an error message
// //       reject("Failed to fetch user data");
// //     }
// //   });
// // }

// // // Call the function and handle the promise
// // fetchUserData().then((data) => {
// //     // If the promise is resolved, log the user data to the console
// // console.log("User data:", data);
// //   })
// //   .catch((error) => {
// //     // If the promise is rejected, log the error message to the console
// //     console.error("Error:", error);
// //   });




// // function CONS(name,classs,age){

// // this.name=name;
// // this.classs=classs;
// // this.age=age;


// // }


// // // var x=text+'px'


// // function displayDate() {
// //   var date = new Date();
// //   var div = document.getElementById("date");
// //   div.innerHTML = date;
// // }




// // const left = document.getElementById("left-side");

// // const handleMove = e => {
// //   left.style.width = `${e.clientX / window.innerWidth * 100}%`;
// // }

// // document.onmousemove = e => handleMove(e);

// // document.ontouchmove = e => handleMove(e.touches[0]);


// // var isColorChanging = false;
// // document.addEventListener("mousemove", function(event) {
// //   if (!isColorChanging) {
// //     isColorChanging = true;
// //     setTimeout(function() {
// //       var x = event.clientX;
// //       var y = event.clientY;
// //       var myDiv = document.getElementById("myDiv");
// //       var red = Math.round(Math.random() * 255);
// //       var green = Math.round(Math.random() * 255);
// //       var blue = Math.round(Math.random() * 255);
// //       myDiv.style.backgroundColor = "rgb(" + red + "," + green + "," + blue + ")";
// //       isColorChanging = false;
// //     }, 100);
// //   }
// // });

// var tID; //we will use this variable to clear the setInterval()

// function stopAnimate() {
//   clearInterval(tID);
// } //end of stopAnimate()


// function animateScript() {

//   var position = 256; //start position for the image slicer
//   const interval = 100; //100 ms of interval for the setInterval()
//   const diff = 256; //diff as a variable for position offset
  
//   tID = setInterval(() => {
  
//     document.getElementById("image").style.backgroundPosition =
//       `-${position}px 0px`;
//     //we use the ES6 template literal to insert the variable "position"
    
//     if (position < 1536) {
//       position = position + diff;
//     }
//     //we increment the position by 256 each time
//     else {
//       position = 256;
//     }
//     //reset the position to 256px, once position exceeds 1536px
    
//   }, interval); //end of setInterval
// } //end of animateScript()



// const canvas=document.getElementById('canvas1');
// const ctx=canvas.getContext('2d');

// const CANVAS_WIDTH=canvas.width=600;
// const CANVAS_HEIGHT=canvas.height=600;

// const playerImage=new Image()
// let x=0

// function animate(){
// ctx.clearRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT)
// ctx.fillRect(x,50,100,100)
// x++
// requestAnimationFrame(animate)
// }


// animate()


const canvas=document.getElementById('canvas1')
const ctx=canvas.getContext('2d')
    canvas.width=window.innerWidth;
    canvas.height=window.innerHeight
    ctx.fillStyle='rgb(233, 34,237 )'
    ctx.fillRect(50,50,100,133)


const mouse ={
    x:undefined,
    y:undefined
    }
    
    canvas.addEventListener('click',function(event){
    mouse.x=event.x
    mouse.y=event.y
    circle()
    })


    
    canvas.addEventListener('mousemove',function(event){
        mouse.x=event.x
    mouse.y=event.y
        circle()
        })
    

function circle(){
ctx.fillStyle='blue'
ctx.strokeStyle='white'
ctx.lineWidth=2
ctx.beginPath()
ctx.arc(mouse.x,mouse.y,10,0,Math.PI*2)
ctx.fill()
ctx.stroke()
}


function animate (){
ctx.clearRect (0,0,canvas.width,canvas.height);
circle()
requestAnimationFrame(animate)

}

animate()





// var init = function(){
//     var isMobile = navigator.userAgent &&
//       navigator.userAgent.toLowerCase().indexOf('mobile') >= 0;
//     var isSmall = window.innerWidth < 1000;
    
//     var ps = new ParticleSlider({
//       ptlGap: isMobile || isSmall ? 3 : 0,
//       ptlSize: isMobile || isSmall ? 3 : 1,
//       width: 1e9,
//       height: 1e9
//     });
      
//     var gui = new dat.GUI();
//     gui.add(ps, 'ptlGap').min(0).max(5).step(1).onChange(function(){
//       ps.init(true);
//     });
//     gui.add(ps, 'ptlSize').min(1).max(5).step(1).onChange(function(){
//       ps.init(true);
//     });
//     gui.add(ps, 'restless');
//     gui.addColor(ps, 'color').onChange(function(value){
//       ps.monochrome = true;
//       ps.setColor(value);
//       ps.init(true);
//     });
    
    
//     (window.addEventListener
//      ? window.addEventListener('click', function(){ps.init(true)}, false)
//      : window.onclick = function(){ps.init(true)});
//   }
  
//   var initParticleSlider = function(){
//     var psScript = document.createElement('script');
//     (psScript.addEventListener
//       ? psScript.addEventListener('load', init, false)
//       : psScript.onload = init);
//     psScript.src = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/23500/ps-0.9.js';
//     psScript.setAttribute('type', 'text/javascript');
//     document.body.appendChild(psScript);
//   }
      
//   (window.addEventListener
//     ? window.addEventListener('load', initParticleSlider, false)
//     : window.onload = initParticleSlider);