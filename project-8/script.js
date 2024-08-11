let like = document.querySelector(".heart")
let btn = document.querySelector(".btn");
let flag = 0;
like.addEventListener("click", function(){
    if(flag === 0){
    like.style.color = "red";
    like.style.scale = "1.3"
    flag = 1
    }else{
    like.style.color = ""
    like.style.scale = "1"
    flag = 0
    }
})
 btn.addEventListener("click",function(){
    let count = 0;
    if(count === 0){
    btn.innerHTML = "Payment"
    count = 1
    }else{
        btn.style.boder = "none"
         btn.innerHTML = "Get Enrolled"
        count = 0
    }
 })