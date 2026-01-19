let form = document.getElementById ('myForm');

form.addEventListener ('submit', function (e) {
  e.preventDefault ();

  let name = document.getElementById ('Name').value.trim();
  let Email = document.getElementById ('Email').value.trim();
  let Phone = document.getElementById ('Phone').value.trim();
  let TextArea = document.getElementById ('Text-area').value.trim();
  let error = document.getElementById ('error');

  if (name === '' || Email ==="" || Phone ==="" || TextArea ==="") {
    error.innerText = 'Please Filled all Field';
    error.style.color="red";
  } else {
    error.innerText = '';
    alert ('Message sent!');
    form.reset();
  }
});


let GithubProfile = document.querySelector(".Github");

GithubProfile.addEventListener("click", () => {
  let anchor = document.createElement("a");
  anchor.href = "https://github.com/Ritikyadav7830";
  anchor.target = "_blank";
  anchor.click();
});

let LinkedinProfile = document.querySelector(".Linkedin");

LinkedinProfile.addEventListener("click", () => {
  let anchor = document.createElement("a");
  anchor.href = "https://www.linkedin.com/in/ritik-yadav-74392b25a?utm_source=share_via&utm_content=profile&utm_medium=member_android";
  anchor.target = "_blank";
  anchor.click();
});

let InstagramProfile = document.querySelector(".Instagram");

InstagramProfile.addEventListener("click", () => {
  let anchor = document.createElement("a");
  anchor.href = "https://www.instagram.com/ritikk.2009?igsh=MXRsZ2lheTY3czhqeA==";
  anchor.target = "_blank";
  anchor.click();
});

let ViewMoreBtn = document.querySelector(".View-more-btn");

ViewMoreBtn.addEventListener("click", () => {
  console.log("ritik")
  let anchor = document.createElement("a");
  anchor.href = "#about";
  anchor.click();
});


const text1 = document.getElementById ('desc1');
const innerText = document.getElementById ('desc1').innerText;
text1.innerText = innerText.substring (0, 70) + '...';


const text2 = document.getElementById ('desc2');
const innerText2 = document.getElementById ('desc2').innerText;
text2.innerText = innerText2.substring (0, 80) + '...';

const text3 = document.getElementById ('desc3');
const innerText3 = document.getElementById ('desc3').innerText;
text3.innerText = innerText3.substring (0, 80) + '...';




let menuBtn = document.getElementById("menu-btn");
let nav = document.getElementById("mobile-nav");

menuBtn.addEventListener("click", () => {
  nav.classList.toggle("active");
 
    if (nav.classList.contains("active")) {
    document.body.style.overflow = "hidden"; 
  } else {
    document.body.style.overflow = "auto";
  }
});



let navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("active");
     document.body.style.overflow = "auto";
  });
});



let navLinks2 = document.querySelectorAll(".nav-link");

// Page load par HOME active rahe
navLinks2.forEach(link => {
  if (link.getAttribute("href") === "#home") {
    link.classList.add("active");
  }
});

// Click handling
navLinks2.forEach(link => {
  link.addEventListener("click", () => {

    // Pehle sabse active hatao
    navLinks2.forEach(item => item.classList.remove("active"));

    // Phir current pe active lagao
    link.classList.add("active");
  });
});
