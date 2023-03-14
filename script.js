const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if(entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));


const menu_btn = document.querySelector('.hamburger');
const mobile_menu = document.querySelector('.mobile-nav');
menu_btn.classList.remove('is-active');

let a = menu_btn.addEventListener('click', function() {
    menu_btn.classList.toggle('is-active');
    mobile_menu.classList.toggle('is-active');
});




function sendMail(event) {
    event.preventDefault();

    var params = {
        ime: document.getElementById('ime').value,
        prezime: document.getElementById('prezime').value,
        email: document.getElementById('email').value,
        upit: document.getElementById('upit').value
    }

    console.log(params);

const serviceID = "service_caqnw3a";
const templateID = "template_9cu8dla";

emailjs.send(serviceID,templateID,params)
    .then(function(response) {
        document.getElementById("ime").value = "";
        document.getElementById("prezime").value = "";
        document.getElementById("email").value = "";
        document.getElementById("upit").value = "";

        console.log(response);
        alert("Vaša poruka je uspešno poslata!");
    })
.catch((err) => console.log(err));
}


var formBtn = document.getElementById('submit');

formBtn.addEventListener('click', function(event) {
    sendMail(event);
});
