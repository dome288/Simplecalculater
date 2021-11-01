
function compute()

{
    if(principal.value < 1){
        alert("Amount has to be a positive")
        principal.focus()
        return
        
    }
    let interest = principal.value * years.value * rate.value /100;
    yearInFuture = new Date() .getFullYear() + parseInt(years.value);
    result = Document.getElementById("result")
    result.innerHTML = "<p> Your deposit <mark>"+ principal.value +"</mark>,<br>an interest"
    
    
}

function refreshSlider(){
    rate.value
    document.getElementById("rateLabel").innerText = rate.value + "%"}


finishPage = () =>{
    
    var rate =document.getElementById("rate");
    var principal = document.getElementById("principal");
    var years = document.getElementById("years");
    years = document.getElementById("years");
    for(i=1; i<=10; i++){
        let element = document.createElement("option")
        element.innerText = i
        element.setAttribute("value", i)
        years.appendChild(element)
    
    
    }
    
}
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    

    p=document.getElementById("principal")
     

}