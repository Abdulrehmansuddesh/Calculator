function setNum(num){
   var input = document.getElementById("number")
    input.value += num

}

function equal(){
 var input = document.getElementById("number")
 var eq = eval(input.value)
 input.value = eq
}

function Clear(){
    var input = document.getElementById("number")
    input.value = ""
    console.log(input.value = "")
}

function del(){
    var input = document.getElementById("number")
    value = input.value
    input.value = input.value.slice(0,-1)
}