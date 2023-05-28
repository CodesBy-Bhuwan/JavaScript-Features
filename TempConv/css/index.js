var cel = document.getElementById("ceid")
var feh = document.getElementById("feid")
cel.addEventListener('input', function(){
    // console.log("movement noticed in Celsius scale")
    let c = this.value;
    // console.log(this)
    let f = (c *9/5)+ 32;
    if(!Number.isInteger(f)){
        f = f.toFixed(4);
    }
    feh.value = f;
});
feh.addEventListener('input', function(){
    // console.log("movement noticed in Fehrn")
    let f = this.value;
    // console.log(this)
    let c = (f - 32)* 5/9;
    if(!Number.isInteger(c)){
        c = c.toFixed(4);
    }
    cel.value = c;
});