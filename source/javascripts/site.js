// This is where it all goes :)
console.log('hello, this is js file');
const greeting = document.querySelector('.about');
const text = greeting.querySelector('h1');
const walk = 200;

function shadow(e) {
  console.log('I am in function shadow');
  const width = greeting.offsetWidth;
  const height = greeting.offsetHeight;
  let x = e.offsetX;
  let y = e.offsetY;

  // console.log(`x: ${x}`);
  // console.log(`e.target: ${e.target}`);
  // console.log(`e.target.offsetLeft: ${e.target.offsetLeft}`);

  if(this !== e.target) {
    x = x + e.target.offsetLeft;
    y = y + e.target.offsetRight;
  }

  // xWalk : -walk/2 ~ walk/2
  const xWalk = Math.round((x / width * walk) - (walk / 2));
  const yWalk = Math.round((y / height * walk) - (walk / 2));

  console.log(`xWalk: ${xWalk}`);

  text.style.textShadow = `
    ${xWalk}px ${yWalk}px 0 rgba(170,24,3,0.6),
    ${xWalk * -1}px ${yWalk}px 0 rgba(189, 97, 60,0.6),
    ${yWalk}px ${xWalk * -1}px 0 rgba(241, 186, 161,0.6),
    ${yWalk * -1}px ${xWalk}px 0 rgba(188, 175, 77,0.6)
    `;
}


greeting.addEventListener('mousemove', shadow)