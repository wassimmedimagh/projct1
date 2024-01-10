function calculateBmi(){
    var weight= document.getElementById("weight").value
    var height= document.getElementById("height").value
    var bmi= (weight / (height**2)) 
    document.getElementById("heading").innerHTML="Your bmi is :"
    document.getElementById("bmi-output").innerHTML=bmi.toFixed(2)+"kg/m²"

    if (bmi<=24.9){
    document.getElementById("message").innerHTML="You are underweight"}
   else if  (bmi >=25 && bmi<=29.9){
    document.getElementById("message").innerHTML="You are a healthy weight"
} else{
    document.getElementById("message").innerHTML="You are overweight"

}

     
     
}
function reload(){
    window.location.reload()

}
function calculateProtein(){
    var weight1=document.getElementById("weight1").value
    var protein=(weight1*1.5)
    console.log(protein)
    document.getElementById("heading1").innerHTML="Your need of protein is"
    document.getElementById("protein-output").innerHTML=protein+"g"
    
}