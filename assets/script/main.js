let interaction = document.querySelector('a:nth-of-type(12)')

interaction.addEventListener('click', jumpHandler)
interaction.addEventListener('animationend', jumpHandler)

function jumpHandler() {
  interaction.classList.toggle('jump')
}

/*FIX*/
let fix = document.querySelector('a:nth-of-type(6)')

fix.addEventListener('click', rotateHandler)
fix.addEventListener('animationend', rotateHandler)

function rotateHandler() {
  fix.classList.toggle('rotate')
}

/*DESIGN*/
let design = document.querySelector('a:nth-of-type(2)')

design.addEventListener('click', slideHandler)
design.addEventListener('animationend', slideHandler)

function slideHandler() {
  design.classList.toggle('slide')
}

/*NAVIGATION*/
let navigation = document.querySelector('a:nth-of-type(19)')

navigation.addEventListener('click', halfHandler)
navigation.addEventListener('animationend', halfHandler)

function halfHandler() {
  navigation.classList.toggle('half')
}

/*CODE*/
let code = document.querySelector('a:nth-of-type(20)')

code.addEventListener('click', hangHandler)
code.addEventListener('animationend', hangHandler)

function hangHandler() {
  code.classList.toggle('hang')
}

/*FEEDFORWARD*/
let feedforward = document.querySelector('a:nth-of-type(16)')

feedforward.addEventListener('dblclick', weirdHandler)
feedforward.addEventListener('animationend', weirdHandler)

function weirdHandler() {
  feedforward.classList.toggle('weird')
}








/*LONGPRESS*/

let development = document.querySelector('a:nth-of-type(4)');

function longPress(el, callback, ms = 1000) {
  let timeoutId;

  el.addEventListener("mousedown", () => {
    timeoutId = setTimeout(() => {
      callback();
    }, ms);
  });

  el.addEventListener("mouseup", () => {
    clearTimeout(timeoutId);
  });
}

longPress(development, () => {
  document.querySelector("a").classList.add("active");
});

document.querySelector("a").onclick = (development) => {
  development.currentTarget.classList.remove("active");
};














/*FRONTEND*/
let frontend = document.querySelector('a:nth-of-type(1)')

frontend.addEventListener ('click', aroundHandler)
frontend.addEventListener ('animationend', aroundHandler)

function aroundHandler (){
  frontend.classList.toggle('around')
}

/*FILL*/

let and = document.querySelector ('a:nth-of-type(3)')

and.addEventListener ('click', fillHandler)
and.addEventListener ('animationend', fillHandler)

function fillHandler (){
  and.classList.toggle ('fill')
}

/*FALL*/
 
let sprint = document.querySelector ('a:nth-of-type(5)')

sprint.addEventListener ('click', fallHandler)
sprint.addEventListener ('animationend', fallHandler)

function fallHandler(){
  sprint.classList.toggle ('fall')
}

/*THE*/

let the = document.querySelector ('a:nth-of-type(7)')

the.addEventListener ('click', squeezeHandler)
the.addEventListener ('animationend', squeezeHandler )

function squeezeHandler (){
  the.classList.toggle ('squeeze')
}