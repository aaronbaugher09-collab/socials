emailjs.init("SBYRWrYyWo3U4q21j");


document.getElementById("nannyForm")
.addEventListener("submit", function(e){

e.preventDefault();


emailjs.send(
"service_84maz4r",
"template_q3q3ldg",
{
name: document.getElementById("name").value,
phone: document.getElementById("phone").value,
email: document.getElementById("email").value,
children: document.getElementById("children").value,
ages: document.getElementById("ages").value,
careType: document.getElementById("careType").value,
hours: document.getElementById("hours").value,
message: document.getElementById("message").value
}

)

.then(()=>{

document.getElementById("status").innerHTML =
"Thank you! Your request has been sent.";

document.getElementById("nannyForm").reset();

})


.catch((error)=>{

console.log(error);

document.getElementById("status").innerHTML =
"Something went wrong. Please try again.";

});


});
