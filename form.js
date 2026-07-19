emailjs.init("SBYRWrYyWo3U4q21j");

document.getElementById("nannyForm")
.addEventListener("submit", function(event){

    event.preventDefault();

    emailjs.send("service_84maz4r", "template_q3q3ldg", {

        name: document.getElementById("name").value,
        phone: document.getElementById("phone").value,
        email: document.getElementById("email").value,
        children: document.getElementById("children").value,
        message: document.getElementById("message").value

    })
    .then(function(){

        document.getElementById("status").innerHTML =
        "Thanks! Your request has been sent.";

        document.getElementById("nannyForm").reset();

    }, function(error){

        document.getElementById("status").innerHTML =
        "Something went wrong. Please try again.";

        console.log(error);

    });

});
