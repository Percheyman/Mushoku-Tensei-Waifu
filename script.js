const observer = new IntersectionObserver((entires) => {
    entires.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show')
        }
    });
});

const hiddenElements1 = document.querySelectorAll('vdo');

hiddenElements1.forEach((el) => observer.observe(el));












const popuprudeus = document.getElementsByClassName("popup-rudeus")[0]
const popuproxy = document.getElementsByClassName("popup-roxy")[0]
const popupsylphy = document.getElementsByClassName("popup-sylphy")[0]
const popuperis = document.getElementsByClassName("popup-eris")[0]
const popuppaul = document.getElementsByClassName("popup-paul")[0]
const popupzenith = document.getElementsByClassName("popup-zenith")[0]
const popupruijerd = document.getElementsByClassName("popup-ruijerd")[0]
const popupghislaine = document.getElementsByClassName("popup-ghislaine")[0]

const waifuroxy = document.getElementsByClassName("roxy")[1]
const waifusylphy = document.getElementsByClassName("sylphy")[1]
const waifueris = document.getElementsByClassName("eris")[1]

function chooseroxy() {
    waifuroxy.getElementsByTagName("div")[0].style.boxShadow = "0 0 3rem 0.3rem #ffdd27" 
    waifusylphy.getElementsByTagName("div")[0].style.boxShadow = "0 0 1.5rem 0.3rem rgba(0, 0, 0, 0.4)" 
    waifueris.getElementsByTagName("div")[0].style.boxShadow = "0 0 1.5rem 0.3rem rgba(0, 0, 0, 0.4)" 
    waifusylphy.style.filter = "grayscale(1)"
    waifueris.style.filter = "grayscale(1)"
    waifuroxy.style.filter = "none"
}

function choosesylphy() {
    waifusylphy.getElementsByTagName("div")[0].style.boxShadow = "0 0 3rem 0.3rem #ffdd27" 
    waifuroxy.getElementsByTagName("div")[0].style.boxShadow = "0 0 1.5rem 0.3rem rgba(0, 0, 0, 0.4)" 
    waifueris.getElementsByTagName("div")[0].style.boxShadow = "0 0 1.5rem 0.3rem rgba(0, 0, 0, 0.4)" 
    waifuroxy.style.filter = "grayscale(1)"
    waifueris.style.filter = "grayscale(1)"
    waifusylphy.style.filter = "none"
}

function chooseeris() {
    waifueris.getElementsByTagName("div")[0].style.boxShadow = "0 0 3rem 0.3rem #ffdd27" 
    waifuroxy.getElementsByTagName("div")[0].style.boxShadow = "0 0 1.5rem 0.3rem rgba(0, 0, 0, 0.4)" 
    waifusylphy.getElementsByTagName("div")[0].style.boxShadow = "0 0 1.5rem 0.3rem rgba(0, 0, 0, 0.4)" 
    waifuroxy.style.filter = "grayscale(1)"
    waifusylphy.style.filter = "grayscale(1)"
    waifueris.style.filter = "none"
}

function confirm() {
    waifuroxy.getElementsByTagName("div")[0].style.boxShadow = "0 0 1.5rem 0.3rem rgba(0, 0, 0, 0.4)" 
    waifusylphy.getElementsByTagName("div")[0].style.boxShadow = "0 0 1.5rem 0.3rem rgba(0, 0, 0, 0.4)" 
    waifueris.getElementsByTagName("div")[0].style.boxShadow = "0 0 1.5rem 0.3rem rgba(0, 0, 0, 0.4)"
}




function openpopuprudeus() {
    popuprudeus.style.display = "block"
}

function closepopuprudeus() {
    popuprudeus.style.display = "none"
}

function openpopuproxy () {
    popuproxy.style.display = "block"
}

function closepopuproxy () {
    popuproxy.style.display = "none"
}

function openpopupsylphy() {
    popupsylphy.style.display = "block"
}

function closepopupsylphy() {
    popupsylphy.style.display = "none"
}

function openpopuperis() {
    popuperis.style.display = "block"
}

function closepopuperis() {
    popuperis.style.display = "none"
}

function openpopuppaul() {
    popuppaul.style.display = "block"
}

function closepopuppaul() {
    popuppaul.style.display = "none"
}

function openpopupzenith() {
    popupzenith.style.display = "block"
}

function closepopupzenith() {
    popupzenith.style.display = "none"
}

function openpopupruijerd() {
    popupruijerd.style.display = "block"
}

function closepopupruijerd() {
    popupruijerd.style.display = "none"
}

function openpopupghislaine() {
    popupghislaine.style.display = "block"
}

function closepopupghislaine() {
    popupghislaine.style.display = "none"
}
