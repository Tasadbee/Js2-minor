var elInp = document.querySelector('.inp')
var elBtn = document.querySelector('.btn')

function fn(){
    if (elInp.value.length <= 5){
        elInp.style.borderBottom = '5px solid red'
    }else if (elInp.value == elInp.value.toLowerCase()){
        elInp.style.borderBottom = '5px solid red'
    }else{
        elInp.style.borderBottom = '5px solid green'

    }
}