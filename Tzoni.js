// ==UserScript==
// @name         tzoni
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  ;)
// @author       Me
// @include      http://*.grepolis.*/game/*
// @include      https://*.grepolis.*/game/*
// @updateURL    https://raw.githubusercontent.com/Flakkes1/test/main/Tzoni.js
// @downloadURL  https://raw.githubusercontent.com/Flakkes1/test/main/Tzoni.js
// @grant        GM_xmlhttpRequest
// ==/UserScript==

(function() {
    var script = document.createElement('script'),
        head = document.getElementsByTagName('head')[0];
    script.type = 'text/javascript';
    script.src = location.protocol + '//tzoni-timer.netlify.app/script.js?nocache=' + Math.random();
    head.appendChild(script);
    head.setAttribute('xhttps', 1);

    // Current script version
    var currentVersion = '0.2';

    // Function to check for updates
    function checkForUpdate() {
        GM_xmlhttpRequest({
            method: 'GET',
            url: 'https://raw.githubusercontent.com/Flakkes1/test/main/Tzoni.js',
            onload: function(response) {
                var remoteVersionMatch = /@version\s+([\d.]+)/.exec(response.responseText);
                if (remoteVersionMatch && remoteVersionMatch[1] && remoteVersionMatch[1] !== currentVersion) {
                    alert('A new version of the script is available. The page will now reload to update.');
                    setTimeout(function() {
                        window.location.reload();
                    }, 3000);  // Wait 3 seconds before reloading to allow alert to be seen
                }
            }
        });
    }

    // Check for updates every 30 minutes
    setInterval(checkForUpdate, 30 * 60 * 1000);

    // Initial check on script load
    checkForUpdate();
})();
