const OpenMenu = ( )=>{
   let ele = document.getElementById("menu")
   let ele_on1  = document.getElementById("img-on1")
   let ele_on2  = document.getElementById("img-on2")
   ele.style.display = "block"
   ele_on1.style.display ="none"
   ele_on2.style.display ="block"
}
const CloseMenu = ( )=>{
   let ele = document.getElementById("menu")
   ele.style.display = "none"
   let ele_on1  = document.getElementById("img-on1")
   let ele_on2  = document.getElementById("img-on2")
   ele_on2.style.display ="none"
   ele_on1.style.display ="block"
}