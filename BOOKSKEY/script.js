
var btn=document.getElementById("idbutton")
var z=document.querySelector(".i")
var y=document.querySelector(".j")
btn.addEventListener("click",function(){
    z.style.display="block"
    y.style.display="block"
})


var P=document.querySelector(".p")
P.addEventListener("click",function(event){
    event.preventDefault()
     z.style.display="none"
    y.style.display="none"

})

var B =document.querySelector(".b")
var A =document.querySelector(".a")
var L =document.querySelector(".l")
var M =document.querySelector(".m")
var N =document.querySelector(".n")
var O =document.querySelector(".o")

O.addEventListener("click",function(event){
    event.preventDefault()
    var Man=document.createElement("div")
    Man.setAttribute("class","b")
    Man.innerHTML=`<h2 >${L.value}</h2>
    <h5> ${M.value}</h5>
    <p>${N.value}</p>
    <button onclick="fn(event)" >DELETE

    </button>`
    A.append(Man)
})


function fn(event)
{
    event.target.parentElement.remove()

}