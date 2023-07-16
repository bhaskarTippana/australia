let popup=document.getElementById("popup")

let be=document.getElementById("be")


be.onclick=()=>{
   popup.classList.toggle("active")

   popup1.classList.remove("active")
   popup2.classList.remove("active")
   popup3.classList.remove("active")

}


let popup1=document.getElementById("popup1")
let place=document.getElementById("place")
place.onclick=()=>{
   popup1.classList.toggle("active")
   popup.classList.remove("active")
   popup2.classList.remove("active")
   popup3.classList.remove("active")
}


let popup2=document.getElementById("popup2")
let things=document.getElementById("things")
things.onclick=()=>{
   popup2.classList.toggle("active")
   popup.classList.remove("active")
   popup1.classList.remove("active")
   popup3.classList.remove("active")
}


let popup3=document.getElementById("popup3")
let plan=document.getElementById("plan")
plan.onclick=()=>{
   popup3.classList.toggle("active")
   popup.classList.remove("active")
   popup1.classList.remove("active")
   popup2.classList.remove("active")
}





















// let popup1=document.getElementById("popup1")

// let popup2=document.getElementById("popup2")

// let popup3=document.getElementById("popup3")