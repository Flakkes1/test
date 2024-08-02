// ==UserScript==
// @name         Click Element by Partial Text and Another Link
// @namespace    http://tampermonkey.net/
// @version      1.3
// @description  Click an element with partial specific text on the page and then another link after 2 seconds
// @author       Your Name
// @match        https://temp-mail.io/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=example.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    function clickElementContainingText(partialText) {
        const allSpans = document.getElementsByTagName('span');

        for (let span of allSpans) {
            if (span.textContent.includes(partialText)) {
                console.log(`Element containing text "${partialText}" found`);

                try {
                    span.click();
                    console.log('Element clicked');

                    // Wait for 2 seconds and then click the second link
                    setTimeout(clickSecondLink, 2000);
                    return; // Exit function once the element is clicked
                } catch (e) {
                    console.error('Error clicking element:', e);
                }
            }
        }

        console.error(`Element containing text "${partialText}" not found`);
    }

    function clickSecondLink() {
        // Find the first <a> tag within the <table> with class "caption_wrap"
        const link = document.querySelector('table.caption_wrap td a');
        if (link) {
            try {
                link.click(); // Click the link
                console.log('Second link clicked');
            } catch (e) {
                console.error('Error clicking second link:', e);
            }
        } else {
            console.error('Second link not found');
        }
    }

    // Call the function with the partial text you want to click
    setTimeout(() => {
        clickElementContainingText('Confirme o seu endereço de e-mail'); // Partial text before the variable part
    }, 5000); // Adjust timing as needed

})();

