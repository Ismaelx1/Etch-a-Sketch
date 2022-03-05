// Target container and rows firstchild to ingore then only work on cells

let container = document.getElementById("container");
let rows = document.getElementsByClassName("gridRow");
let cells = document.getElementsByClassName("cell");
const clearBtn = document.querySelector('#clear-btn')
const colorBtn = document.querySelector('#color-btn')



makeBoth(2, 2)

function makeBoth(rowNum, cellNum) {
    for (r = 0; r < rowNum; r++) {
        let row = document.createElement("div");
        container.appendChild(row).className = "gridRow";
    };
        for (i = 0; i < rows.length; i++) {
            for (j = 0; j < cellNum; j++) {
                let newCell = document.createElement("div");
                rows[j].appendChild(newCell).className = "cell";
            };
        };
    };

    



clearBtn.addEventListener('click', function(){
  
container.innerHTML = '';


let userChoice = prompt(`"How many squares per side you'd like for the new grid? (max:64)"`)


if (userChoice > 64) {
    
    alert('Error! Try a lesser number.')
} else { 
    makeBoth(userChoice, userChoice)
}
container.style.backgroundColor = 'white'



})

function black() {

container.addEventListener('click', colors, false)
function colors(event) {
  event.target.style.backgroundColor = 'black'

}


}


function multi() {
    container.addEventListener('click', colors, false)
    function colors(event) {
        let random1 = Math.floor(Math.random() * 256)
        let random2 = Math.floor(Math.random() * 256)
        let random3 = Math.floor(Math.random() * 256)

      event.target.style.backgroundColor = `rgb(${random1}, ${random2}, ${random3})`

      if (event.target === firstthing) {
          console.log("Right")
      }
   
     } 
    }
    
    function empty() {

        container.addEventListener('click', colors, false)
        function colors(event) {
          event.target.style.backgroundColor = 'white'
          console.log(event.target)
        }
        
        
        }
        

        let firstthing = document.querySelector("#container > div:nth-child(1) > div:nth-child(1)")
        
    
