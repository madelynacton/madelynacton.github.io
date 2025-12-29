// This feature was self taught/implemented using https://www.w3schools.com/howto/howto_js_typewriter.asp
// I also self taught myself some JavaScript basics from CodeAcademy and learned basic interactive JS features
const roles = [
  "Front End Developer",
  "Full Stack Developer",
  "Web Developer",
  "UX Designer",
  "UX Researcher",
  "Software Engineer"
];

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typingSpeed = 100;
const deletingSpeed = 80;
const wordDelay = 1500;
const nextWordDelay = 1500;

const typingText = document.getElementById("job-titles");

function typeEffect() {
  const currentRole = roles[roleIndex];

  if (!isDeleting) {
    typingText.textContent = currentRole.slice(0, charIndex++);
    if (charIndex > currentRole.length) {
      isDeleting = true;
      setTimeout(typeEffect, wordDelay);
      return;
    }
  } else {
    typingText.textContent = currentRole.slice(0, charIndex--);

    if (charIndex < 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;

      charIndex = 0;
      typingText.textContent = "";

      setTimeout(typeEffect, nextWordDelay);
      return;
    }
  }

  setTimeout(typeEffect, isDeleting ? deletingSpeed : typingSpeed);
}

typeEffect();