var app = document.getElementById("app");

var typewriter = new Typewriter(app, {
  loop: true,
});

typewriter
  .typeString("Won't You Love to experience the latest technology?")
  .pauseFor(2500)
  .deleteAll()
  .typeString("Dive Into the endless pool of awesome Gadgets")
  .pauseFor(2500)
  .deleteAll()
  .typeString("<strong>Gadgeverse got you!</strong>")
  .pauseFor(3500)
  .start();

window.addEventListener("scroll", reveal);

function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowheight = window.innerHeight;
    var revealtop = reveals[i].getBoundingClientRect().top;
    var revealpoint = 100;

    if (revealtop < windowheight - revealpoint) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}
