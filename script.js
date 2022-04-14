// var javascript = {
//     name:'javaScript',
//     libraries: ['React', 'Angular', 'Vue'],
//     printlibraries: function() {
//         this.libraries.forEach((a) =>  console.log(`${this.name}loves ${a}`));
//     },
// };

// javascript.printlibraries();

const searchInput = document.querySelector(".search");
const display = document.querySelector(".result");
const thanks = document.querySelector(".thanks");

function show() {
    display.innerHTML = this.value;
    var self = this;
    setTimeout(function ()  {
        thanks.innerHTML = `You have typed: ${self.value}`;
    }, 1000);
}


// searchInput.addEventListener("keyup", () => {
//     display.innerHTML = this.value;
// });

searchInput.addEventListener("keyup", show);