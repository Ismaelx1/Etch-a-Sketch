// Target container and rows firstchild to ingore then only work on cells

let container = document.getElementById("container");
let rows = document.getElementsByClassName("gridRow");
let cells = document.getElementsByClassName("cell");
const clearBtn = document.querySelector('#clear-btn')
const colorBtn = document.querySelector('#color-btn')




makeBoth(4, 4)

function makeBoth(rowNum, cellNum) {
    for (r = 0; r < rowNum; r++) {
        let row = document.createElement("div");
        container.appendChild(row).className = "gridRow";
    };
        for (i = 0; i < rows.length; i++) {
            for (j = 0; j < cellNum; j++) {
                let newCell = document.createElement("div");
                rows[j].appendChild(newCell).className = "cell";
                    // let cellId = document.querySelectorAll('')
            };
        };
        container.style.backgroundColor = 'white'
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

container.addEventListener('mouseover', colors, false)
function colors(event) {
  
  if (event.target === thingy || event.target === container) {
    false
  
} else {
    event.target.style.backgroundColor = 'black'
}


}


}


function multi() {
    container.addEventListener('mouseover', colors, false)
    function colors(event) {
        let random1 = Math.floor(Math.random() * 256)
        let random2 = Math.floor(Math.random() * 256)
        let random3 = Math.floor(Math.random() * 256)

      


      if (event.target === thingy || event.target === container) {
        false
      
    } else {
        event.target.style.backgroundColor = `rgb(${random1}, ${random2}, ${random3})`
    }
  
      }
   
     } 
    
    
    function empty() {

        container.addEventListener('mouseover', colors, false)
        function colors(event) {
         
         
            if (event.target === thingy || event.target === container) {
                false
              
            } else {
              event.target.style.backgroundColor = 'white'
            }
          }

        }
        let thingy = document.querySelectorAll("#container > div")

  
  
        console.log(thingy)
    
