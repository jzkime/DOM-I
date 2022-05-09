const siteContent = { // DO NOT CHANGE THIS OBJECT
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
  },
  "main-content": {
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "services-h4": "Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4": "Contact",
    "address": "123 Way 456 Street Somewhere, USA",
    "phone": "1 (888) 888-8888",
    "email": "sales@greatidea.io",
  },
  "footer": {
    "copyright": "Copyright Great Idea! 2021",
  },
  "images": {
    "logo-img": "http://localhost:9000/img/logo.png",
    "cta-img": "http://localhost:9000/img/cta.png",
    "accent-img": "http://localhost:9000/img/accent.png",
  },
};

console.log('project wired!')

// navigation 
const navLinks = document.querySelectorAll("nav a");

navLinks.forEach((link, index) => {
  link.className = "italic";
  navLinks[index].textContent = siteContent["nav"]["nav-item-" + (index + 1)]
})

// heading 
const logoImg = document.querySelector("#logo-img");
logoImg.src = siteContent["images"]["logo-img"];

const headerTitle = document.querySelector("h1");
const headerButton = document.querySelector(".cta-text button");
headerTitle.textContent = siteContent["cta"]["h1"];
headerButton.textContent = siteContent["cta"]["button"];

// heading img
const codeImg = document.querySelector("#cta-img");
codeImg.src = siteContent["images"]["cta-img"];

// topcontent 
const firstContent = document.querySelector(".top-content .text-content");
const secondContent = firstContent.nextElementSibling;

const firstHeadContent = firstContent.querySelector("h4");
const firstParaContent = firstContent.querySelector("p");
const secondHeadContent = secondContent.querySelector("h4");
const secondParaContent = secondContent.querySelector("p");

firstHeadContent.textContent = siteContent["main-content"]["features-h4"];
firstParaContent.textContent = siteContent["main-content"]["features-content"];
secondHeadContent.textContent = siteContent["main-content"]["about-h4"];
secondParaContent.textContent = siteContent["main-content"]["about-content"]

// content middle image
const middleImg = document.querySelector(".middle-img");
middleImg.src = siteContent["images"]["accent-img"]

// bottom content
const firstBottomDiv = document.querySelector(".bottom-content .text-content")
const firstBottHeading = firstBottomDiv.querySelector("h4");
const firstBottContent = firstBottomDiv.querySelector("p");
firstBottHeading.textContent = siteContent["main-content"]["services-h4"];
firstBottContent.textContent = siteContent["main-content"]["services-content"];

const secondBottomDiv = firstBottomDiv.nextElementSibling;
const secondBottHeading = secondBottomDiv.querySelector("h4");
const secondBottContent = secondBottomDiv.querySelector("p");
secondBottHeading.textContent = siteContent["main-content"]["product-h4"];
secondBottContent.textContent = siteContent["main-content"]["product-content"]

const lastBottomDiv = secondBottomDiv.nextElementSibling;
const lastBottHeading = lastBottomDiv.querySelector("h4");
const lastBottContent = lastBottomDiv.querySelector("p");
lastBottHeading.textContent = siteContent["main-content"]["vision-h4"];
lastBottContent.textContent = siteContent["main-content"]["vision-content"];

// contact section
const contactDiv = document.querySelector(".contact");
const contactHead = contactDiv.querySelector("h4");
const contactpFirst = contactDiv.querySelector("p");
const contactpSecond = contactpFirst.nextElementSibling;
const contactpThird = contactpSecond.nextElementSibling;
contactHead.textContent = siteContent["contact"]["contact-h4"];
contactpFirst.textContent = siteContent["contact"]["address"];
contactpSecond.textContent = siteContent["contact"]["phone"];
contactpThird.textContent = siteContent["contact"]["email"];

// footer
const foot = document.querySelector("footer a");
foot.textContent = siteContent["footer"]["copyright"];
foot.className = "bold";