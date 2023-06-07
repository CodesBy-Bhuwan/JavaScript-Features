(function(){
    let screen = document.getElementById('screen');
    let buttons = document.querySelectorAll('.btn');
    let equal = document.getElementById('equal');
    let clear = document.getElementsByClassName('btn-blue');

    buttons.forEach(function(button){
        button.addEventListener('click', function(e){
            let value = e.target.dataset.num;
            screen.value += value;
            // console.log(screen.value)
        })
    });

    // equal.addEventListener('click', function(e) {
    //     if(screen.value === '') {
    //         screen.value = "";
    //     } else{
    //         let answer = eval(screen.value);
    //         screen.value = answer;
    //     }
    // })

    // equal.addEventListener('click', function(e){
    //     if(screen.value === ''){
    //         screen.value = " ";
    //         console.log(screen.value)
            
    //     }else{
    //         let answ = eval(screen.value);
    //         screen.value = answ;

    //     }
    // })
    // clear.addEventListener('click', function(e){
    //     screen.value = "";
    // })
})();