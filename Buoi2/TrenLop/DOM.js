let btn = document.getElementById('btn');
let div = document.getElementById('msg');

btn.addEventListener('click', function() {
    let s = ""
    for(let i = 0; i<20; i++)
        s += "<input type='button' value='Person "+i+"'/>"
    div.innerHTML = s
    var buttons = document.querySelectorAll('input')
    for(let button of buttons){
        this.removeEventListener('click', )
        button.addEventListener('click', function() {
            btn.value = button.value;
        })
    }
        
})


//Class Person {id, name, age, gpa}