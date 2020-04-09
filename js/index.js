const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

const navs = document.querySelectorAll('a')
navs[0].textContent = (siteContent["nav"]["nav-item-1"]);
navs[1].textContent = (siteContent["nav"]["nav-item-2"]);
navs[2].textContent = (siteContent["nav"]["nav-item-3"]);
navs[3].textContent = (siteContent["nav"]["nav-item-4"]);
navs[4].textContent = (siteContent["nav"]["nav-item-5"]);
navs[5].textContent = (siteContent["nav"]["nav-item-6"]);
navs.forEach(contents => contents.style.color = "green")

const headerOne = document.querySelector('h1')
headerOne.innerHTML = ('Dom <br> Is <br> Awesome')

let secondImg = document.getElementById("cta-img")
secondImg.setAttribute('src', siteContent["cta"]["img-src"])

const middleImage = document.getElementById('middle-img')
middleImage.src = (siteContent["main-content"]["middle-img-src"])

const btn = document.querySelector('button')
btn.textContent = (siteContent.cta .button)

const headerFour = document.querySelectorAll('h4')
headerFour[0].textContent = (siteContent["main-content"]["features-h4"]);
headerFour[1].textContent = (siteContent["main-content"]["about-h4"])
headerFour[2].textContent = (siteContent["main-content"]["services-h4"])
headerFour[3].textContent = (siteContent["main-content"]["product-h4"])
headerFour[4].textContent = (siteContent["main-content"]["vision-h4"])
headerFour[5].textContent = (siteContent["contact"]["contact-h4"])

const paragraphs = document.querySelectorAll('p')
paragraphs[0].textContent = (siteContent["main-content"]["features-content"])
paragraphs[1].textContent = (siteContent["main-content"]["about-content"])
paragraphs[2].textContent = (siteContent["main-content"]["services-content"])
paragraphs[3].textContent = (siteContent["main-content"]["product-content"])
paragraphs[4].textContent = (siteContent["main-content"]["vision-content"])

paragraphs[5].innerHTML = '123 Way 456 Street <br> Somewhere, USA';
paragraphs[6].textContent = (siteContent["contact"]["phone"])
paragraphs[7].textContent = (siteContent["contact"]["email"])
paragraphs[8].textContent = (siteContent["footer"]["copyright"])

let allNavs = document.querySelector("nav")


let prependedA = document.createElement('a')
prependedA.textContent = "Prepended"
prependedA.href = "#"
allNavs.prepend(prependedA)
prependedA.style.color = 'red'

let appendedA = document.createElement('a')
appendedA.textContent = 'Appended'
appendedA.href = "#"
allNavs.appendChild(appendedA)
appendedA.style.color = 'red'