let text = document.querySelector('.span')
let number = 0;



function decrese(){
    // number = 0;
    if(number >= 1){
    number--;
   text.textContent = number;  
   document.body.style.color = "red" 
    }
}
function reset(){
   number = 0;
   text.textContent =  number;
   document.body.style.color = "green"

}
function increse(){
        ++number
        text.textContent = number;
        document.body.style.color = "orange"
    

}