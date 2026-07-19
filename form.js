emailjs.init("SBYRWrYyWo3U4q21j");


document
.getElementById("nannyForm")
.addEventListener("submit", function(e){

    e.preventDefault();


    const formData = {

        name: document.getElementById("name").value,

        phone: document.getElementById("phone").value,

        email: document.getElementById("email").value,

        contactMethod:
        document.getElementById("contactMethod").value,

        children:
        document.getElementById("children").value,

        ages:
        document.getElementById("ages").value,

        careType:
        document.getElementById("careType").value,

        startDate:
        document.getElementById("startDate").value,

        hours:
        document.getElementById("hours").value,

        message:
        document.getElementById("message").value

    };


    // Send request to Ashlyn

    emailjs.send(
        "service_84maz4r",
        "template_q3q3ldg",
        formData
    )


    .then(()=>{


        // Send confirmation email to parent

        return emailjs.send(
            "service_84maz4r",
            "template_1gks8vm",
            {
                name: formData.name,
                email: formData.email
            }
        );


    })


    .then(()=>{


        document.getElementById("status").innerHTML =
        "Thank you! Your request has been submitted.";


        document
        .getElementById("nannyForm")
        .reset();


    })


    .catch((error)=>{


        console.log("EmailJS Error:", error);


        document.getElementById("status").innerHTML =
        "Something went wrong. Please try again.";


    });


});
