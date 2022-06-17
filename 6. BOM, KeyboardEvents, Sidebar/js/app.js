// console.log(window.innerHeight);
// console.log(window.innerWidth);

// console.log(screen.height);
// console.log(screen.width);


// function Open() {
//     window.open();
// }

// function Close() {
//     window.close();
// }


// setTimeout(() => {
//     window.close();
// }, 5000);


// function Change() {
//     let text = document.getElementById('text');
//     text.style.color = 'red'
//     setTimeout(() => {
//         window.location.reload();
//     }, 1000);
// }


// function Change() {
//     let text = document.getElementById('text');
//     let select = document.getElementById('slc');
//     text.innerHTML = select.value
// }


// let count = 0;
// let span = document.getElementById('count');

// document.body.onkeydown = function(e) {
//     if(e.keyCode === 32) {
//         count++;
//         span.innerHTML = count
//     }
// }



// document.body.onkeyup = function(e) {
//     if(e.keyCode === 32) {
//         count = 0;
//         span.innerHTML = count
//     }
// }


// let x = 0;
// let y = 0;
// let width = 0;
// let div = document.getElementById('first');
// document.body.onkeydown = function(e) {
//     if(e.keyCode === 39) {
//         x += 50;
//         width +=20
//         div.style.marginLeft = `${x}px`
//         div.style.width = `${200 + x}px`
//         console.log(x);
//     }

//     if(e.keyCode === 37) {
//         x -= 50;
//         div.style.marginLeft = `${x}px`
//         console.log(x);
//     }
//     if(e.keyCode === 40) {
//         y += 50;
//         div.style.marginTop = `${y}px`
//     }

//     if(e.keyCode === 38) {
//         y -= 50;
//         div.style.marginTop = `${y}px`
//     }
// }


// let percent = 0
// let div = document.getElementById('inside')
// let text = document.getElementById('percent')
// function Increase() {

//     percent += 20
//     div.style.width = `${percent}%`
//     text.innerHTML = percent

//     if(percent === 120) {
//         percent = 100;
//         text.innerHTML = percent
//         clearInterval(interval);
//         alert('Download is completed!!!')
//     }
// }

// let interval = setInterval(() => {
//     Increase();
// }, 1000);   


// classList ==> add,remove,toggle,contains 


let icon = document.getElementById('icon');
let menu = document.getElementById('sidebar');

icon.onclick = function() {
    menu.classList.add('active')
}

document.getElementById('close').onclick = function() {
    menu.classList.remove('active');
}

// icon.onclick = () => {
//     if(menu.style.display === 'none'){
//         menu.style.display = 'block' 
//     }
//     else{
//         menu.style.display = 'none'
//     }
// }

// icon.onclick = function() {
//     menu.classList.toggle('active')
// }

// icon.onclick = () => {
//     if(menu.classList.contains('active')){
//         menu.classList.remove('active')
//     }
//     else{
//         menu.classList.add('active')
//     }
// }