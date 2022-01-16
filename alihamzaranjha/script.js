$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY>20){
            $('.navebar').addClass('sticky')
        }else{
            $('.navebar').removeClass('sticky')
        }
    });
    // toggle menue/navbar
    $('.menu-btn').click(function(){
        $('.navebar .menu').toggleClass('active')
        $('.menu-btn i').toggleClass('active')
    })
});

// typing animation 
let typed = new Typed(".typing", {
    strings: ["Developer", "Designer", "Freelancer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
})
let typed2 = new Typed(".typing-2", {
    strings: ["Developer", "Designer", "Freelancer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
})

// email submission 
var form = document.getElementById("my-form");
    
    async function handleSubmit(event) {
      event.preventDefault();
      var status = document.getElementById("status");
      var data = new FormData(event.target);
      fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
      }).then(response => {
        status.innerHTML = "Thanks for your submission!";
        form.reset()
      }).catch(error => {
        status.innerHTML = "Oops! There was a problem submitting your form"
      });
    }
    form.addEventListener("submit", handleSubmit)

   