let count = 0;
let MalaCount = 0;
let total = 0;

const counterElement = document.querySelector('#counter');
const plus = document.querySelector('#inc');
const minus = document.querySelector('#dec');
const reset = document.querySelector('.reset');
const Netotal = document.querySelector('.Total');
const Mcount = document.querySelector('.MalaTotal');


plus.addEventListener('click', () => {
    count++;
    total++;
    if(count > 107){
        count = 0;
        MalaCount++;
        Mcount.textContent = MalaCount;
        
    }
    Netotal.textContent = total;
    counterElement.textContent = count;
    
});
minus.addEventListener('click', () => {
    if (count > 0){
    count--;
    total--;
    counterElement.textContent = count;
    Netotal.textContent = total;
    }  
});
reset.addEventListener('click', () => {
    count = 0;
    counterElement.textContent = count;
    Netotal.textContent = total;
});

// let count = 0;
// let MalaCount = 0;
// let total = 0;

// const counterElement = document.querySelector('#counter');  // Fixed the selector
// const plus = document.querySelector('#inc');
// const minus = document.querySelector('#dec');
// const reset = document.querySelector('.reset');
// const Netotal = document.querySelector('.Total');
// const Mcount = document.querySelector('.MalaTotal');

// plus.addEventListener('click', () => {
//     count++;
//     total++;
//     if (count > 107) {
//         count = 0;
//         MalaCount++;
//         Mcount.textContent = MalaCount;  // Update the Mala count in the UI
//     }
//     counterElement.textContent = count;
//     Netotal.textContent = total;
// });

// minus.addEventListener('click', () => {
//     if (count > 0) {
//         count--;
//         total--;
//         counterElement.textContent = count;
//         Netotal.textContent = total;
//     }
// });

// reset.addEventListener('click', () => {
//     count = 0;
//     // total = 0;  // Optionally reset the total count as well
//     counterElement.textContent = count;
//     // Netotal.textContent = total;
//     MalaCount = 0;  // Optionally reset the Mala count as well
//     Mcount.textContent = MalaCount;
// });


