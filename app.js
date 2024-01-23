const boxes = document.querySelectorAll(".box");
let input = document.querySelector("input");
let str = "";

Array.from(boxes).forEach((box) => {
    box.addEventListener('click', (e) =>{
        // console.log(e.target);
        // str = str + box.innerText;
        if(e.target.innerHTML == "="){
            // str = eval(str);
            // input.value = str;
            // console.log(e.target);
            calculate();
            
        }
        else if(e.target.innerText == "AC"){
            str = "";
            input.value = str;
            console.log(e.target);
        }
        else if(e.target.innerHTML == "X"){
            str = str 
        }
        else{
            str = str + e.target.innerHTML;
            input.value = str;
            console.log(e.target);
        }
        
    })
})

function calculate() {
    try {
        input.value = eval(input.value);
    } catch (error) {
        input.value = 'Error';
        // clear();
        setTimeout(() => {
            clear();
        },3000)
    }
}
function clear(){
    str = "";
    input.value = str;
}