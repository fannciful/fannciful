const form = document.querySelector("form");
const fullName = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const subject = document.getElementById("subject");
const mess = document.getElementById("message");

function sendEmail() {
    const bodyMessage = `Full Name: ${fullName.value}<br> Email: 
    ${email.value}<br> Phone Number: ${phone.value}<br> Message: 
    ${mess.value}`;


    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "juliya992@gmail.com",
        Password : "83A2A190F6060D10CD8BB98FBB734732D840",
        To : 'juliya992@gmail.com',
        From : "juliya992@gmail.com",
        Subject : subject.value,
        Body : bodyMessage
    }).then(
      message => {
        if (message == "OK") {
            Swal.fire({
                title: "Success! ",
                text: "Message sent successfully!",
                icon: "success"
              });
        }
      }
    );
}


function checkInputs() {
    const items = document.querySelectorAll(".item");

    for (const item of items) {
        if (item.value == "") {
            item.classList.add("error");
            item.parentElement.classList.add("error");
        }
    }
}

form.addEventListener("submit", (e) => {
    e.preventDefault();

    sendEmail();
});