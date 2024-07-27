// ==UserScript==
// @name         tzoni
// @namespace    http://tampermonkey.net/
// @version      0.3
// @description  ;)
// @author       Me
// @include      http://*.grepolis.*/game/*
// @include      https://*.grepolis.*/game/*
// @updateURL    https://raw.githubusercontent.com/Flakkes1/test/main/Tzoni.js
// @downloadURL  https://raw.githubusercontent.com/Flakkes1/test/main/Tzoni.js
// @grant        GM_xmlhttpRequest
// ==/UserScript==

FUCK YOU

(function() {
    var currentVersion = '0.3';

    function checkForUpdate() {
        GM_xmlhttpRequest({
            method: 'GET',
            url: 'https://raw.githubusercontent.com/Flakkes1/test/main/Tzoni.js',
            onload: function(response) {
                var remoteVersionMatch = /@version\s+([\d.]+)/.exec(response.responseText);
                if (remoteVersionMatch) {
                    var remoteVersion = remoteVersionMatch[1];
                    if (remoteVersion && remoteVersion !== currentVersion) {
                        console.log('A new version (' + remoteVersion + ') of the script is available. Current version is ' + currentVersion + '.');
                        alert('A new version of the script is available. The page will now reload to update.');
                        setTimeout(function() {
                            GM_setValue('isUpdated', true);  // Set a flag indicating that an update is happening
                            window.location.reload();
                        }, 3000);  // Wait 3 seconds before reloading to allow alert to be seen
                    }
                }
            },
            onerror: function(error) {
                console.log('Error checking for update:', error);
            }
        });
    }

    // Only check for updates if not in the middle of an update
    if (!GM_getValue('isUpdated', false)) {
        setInterval(checkForUpdate, 5 * 1000);  // Check for updates every 5 seconds (for testing purposes)
        checkForUpdate();  // Initial check on script load
    } else {
        GM_setValue('isUpdated', false);  // Reset the flag after reload
        console.log('Script updated to new version');
    }
})();

