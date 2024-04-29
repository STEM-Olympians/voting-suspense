// ==UserScript==
// @name         Voting Suspence rcv123.com
// @namespace    http://tampermonkey.net/
// @version      2024-04-25
// @description  Adding a little bit of suspense to elections!
// @author       beaver
// @match        https://www.rcv123.org/results/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=tampermonkey.net
// @grant        none
// ==/UserScript==


setInterval(main, 25);

let reset = false
let showWinner = false
let originalText = ""

function main() {
    'use strict';

    const boringText = document.querySelector(".py-3");
    boringText.style.display = "none"

    const chart = document.getElementById("results-chart");
    if(!reset){
        chart.style.display = "none"
    }else{
        chart.style.display = "block"
    }

    const slider = document.getElementById("rounds-slider")

    const sliderPlace = slider.getAttribute("data-value")
    console.log(sliderPlace)

    if(sliderPlace == 1){
       reset = true
    }

    const winner = document.querySelector("h4")


    if(sliderPlace == 4 && reset || showWinner){
        showWinner = true
        winner.style.display = "block";
        winner.textContent = originalText + "!!! 🎉"
    } else {
        originalText = winner.textContent;
        winner.style.display = "none";
    }


};

