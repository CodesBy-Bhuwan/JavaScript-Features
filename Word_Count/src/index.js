let box1 = document.getElementById("box1");
box1.addEventListener('input', function(){
    var text = this.value;
    let char = text.length;
    // console.log(char)
    document.getElementById("char").innerHTML = char;

    text= text.trim()//Remove Or Trim space count at last and front
    let words = text.split(" ")
    let cleanlist = words.filter(function(elm){ //filter will filter extra space form the sentences
    return elm != "";
    }
    });

    document.getElementById("word").innerHTML = cleanlist.length;
})