
(function(){
    let screen = document.querySelector('.screen')
    let buttons = document.querySelectorAll('.bun')
    let clear = document.querySelector('.bun-clear')
    let equal = document.querySelector('.bun-equal')
    let del = document .querySelector('.bun-delete')

    
    buttons.forEach(function(button) {
        button.addEventListener('click', function(e){
            let value = e.target.dataset.num
            screen.value += value
        })
    });
    

    equal.addEventListener('click', function(e){

        if(screen.value === ''){
            screen.value="Please enter";
        } else {
            let answer = eval(screen.value);
            screen.value=answer;
        }
        
    })

    clear.addEventListener('click', function(e){
        screen.value = ""
    })

    del.addEventListener('click', function(e){
       screen.value= screen.value.slice(0, -1)
    })
    
})();





