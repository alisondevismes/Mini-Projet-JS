function rechercheMagasin() {
    let input = document.getElementById('recherche').value
    input=input.toLowerCase();
    let x = document.getElementsByClassName('magasin');
    
    for (i = 0; i < x.length; i++) {
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display="none";
        }
        else {
            x[i].style.display="list-item";                 
        }
    }
}

let togg1 = document.getElementById("togg1");
let d1 = document.getElementById("afficher");

function togg() {
  if(getComputedStyle(d1).display != "none") {
    d1.style.display = "none";
  } else {
    d1.style.display = "block";
  }
};

togg1.onclick = togg;

let togg2 = document.getElementById("togg2");
let d2 = document.getElementById("afficher2");

function togga() {
  if(getComputedStyle(d2).display != "none") {
    d2.style.display = "none";
  } else {
    d2.style.display = "block";
  }
};

togg2.onclick = togga;

let togg3 = document.getElementById("togg3");
let d3 = document.getElementById("afficher3");

function toggb() {
  if(getComputedStyle(d3).display != "none") {
    d3.style.display = "none";
  } else {
    d3.style.display = "block";
  }
};

togg3.onclick = toggb;

let togg4 = document.getElementById("togg4");
let d4 = document.getElementById("afficher4");

function toggc() {
  if(getComputedStyle(d4).display != "none") {
    d4.style.display = "none";
  } else {
    d4.style.display = "block";
  }
};

togg4.onclick = toggc;

let togg5 = document.getElementById("togg5");
let d5 = document.getElementById("afficher5");

function toggd() {
  if(getComputedStyle(d5).display != "none") {
    d5.style.display = "none";
  } else {
    d5.style.display = "block";
  }
};

togg5.onclick = toggd;

let togg6 = document.getElementById("togg6");
let d6 = document.getElementById("afficher6");

function togge() {
  if(getComputedStyle(d6).display != "none") {
    d6.style.display = "none";
  } else {
    d6.style.display = "block";
  }
};

togg6.onclick = togge;

let togg7 = document.getElementById("togg7");
let d7 = document.getElementById("afficher7");

function toggf() {
  if(getComputedStyle(d7).display != "none") {
    d7.style.display = "none";
  } else {
    d7.style.display = "block";
  }
};

togg7.onclick = toggf;

let togg8 = document.getElementById("togg8");
let d8 = document.getElementById("afficher8");

function toggg() {
  if(getComputedStyle(d8).display != "none") {
    d8.style.display = "none";
  } else {
    d8.style.display = "block";
  }
};

togg8.onclick = toggg;

let togg9 = document.getElementById("togg9");
let d9 = document.getElementById("afficher9");

function toggh() {
  if(getComputedStyle(d9).display != "none") {
    d9.style.display = "none";
  } else {
    d9.style.display = "block";
  }
};

togg9.onclick = toggh;

let togg10 = document.getElementById("togg10");
let d10 = document.getElementById("afficher10");

function toggi() {
  if(getComputedStyle(d10).display != "none") {
    d10.style.display = "none";
  } else {
    d10.style.display = "block";
  }
};

togg10.onclick = toggi;

let togg11 = document.getElementById("togg11");
let d11 = document.getElementById("afficher11");

function toggj() {
  if(getComputedStyle(d11).display != "none") {
    d11.style.display = "none";
  } else {
    d11.style.display = "block";
  }
};

togg11.onclick = toggj;

let togg12 = document.getElementById("togg12");
let d12 = document.getElementById("afficher12");

function toggk() {
  if(getComputedStyle(d12).display != "none") {
    d12.style.display = "none";
  } else {
    d12.style.display = "block";
  }
};

togg12.onclick = toggk;