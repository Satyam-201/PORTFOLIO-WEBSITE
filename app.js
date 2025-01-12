const linkSkill = document.querySelector(".linkSkill");
const linkExperiance = document.querySelector(".linkExperiance");
const linkEducation = document.querySelector(".linkEducation");

const tabSkill = document.querySelector(".tabSkill");
const tabExperiance = document.querySelector(".tabExperiance");
const tabEducation = document.querySelector(".tabEducation");

const links = [linkSkill, linkExperiance, linkEducation];
const tabs = [tabSkill, tabExperiance, tabEducation];

function clickHandler(event) {
    tabs.forEach((tab) => {
        tab.classList.remove('active-tab')
    });
    links.forEach((link) => {
        link.classList.remove('active-link')
    });

    if (event.srcElement.classList[1] == "linkSkill") {
        linkSkill.classList.add('active-link');
        tabSkill.classList.add('active-tab');
    }
    else if (event.srcElement.classList[1] == "linkExperiance") {
        linkExperiance.classList.add('active-link');
        tabExperiance.classList.add('active-tab');
    }
    else if (event.srcElement.classList[1] == "linkEducation") {
        linkEducation.classList.add('active-link');
        tabEducation.classList.add('active-tab');
    }
}



links.forEach((link) => {
    link.addEventListener("click", clickHandler)
});




var sideMenu = document.getElementById('sideMenu');

function openMenu() {
    sideMenu.style.right = "0";
}

function closeMenu() {
    sideMenu.style.right = "-200px";
}


const scriptURL = 'https://script.google.com/macros/s/AKfycbzskx7XhpWpN9ftZkVaVEJ5Rq4qLyIvu01Cd-_BuPAUsjCva8_EbiX2sZ59qVdlNEjs/exec'
const form = document.forms['submit-to-google-sheet']

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => alert("Form Submitted Successfully"))
        .catch(error => alert("Something Went Wrong! Please Try Again"))
})

