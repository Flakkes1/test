// ==UserScript==
// @name         tzoni
// @namespace    http://tampermonkey.net/
// @version      0.4
// @description  ;)
// @author       Me
// @include      http://*.grepolis.*/game/*
// @include      https://*.grepolis.*/game/*
// @updateURL    https://raw.githubusercontent.com/Flakkes1/test/main/Tzoni.js
// @downloadURL  https://raw.githubusercontent.com/Flakkes1/test/main/Tzoni.js
// @grant        GM_xmlhttpRequest
// @grant        GM_setValue
// @grant        GM_getValue
// ==/UserScript==

(function() {
    FUCK YUOU
    var currentVersion = '0.4'; 

    function checkForUpdate() {
        console.log('Checking for update...');
        GM_xmlhttpRequest({
            method: 'GET',
            url: 'https://raw.githubusercontent.com/Flakkes1/test/main/Tzoni.js?' + Math.random(),  // Cache-busting parameter
            onload: function(response) {
                console.log('Update check response received');
                var remoteVersionMatch = /@version\s+([\d.]+)/.exec(response.responseText);
                if (remoteVersionMatch) {
                    var remoteVersion = remoteVersionMatch[1];
                    console.log('Remote version:', remoteVersion);
                    console.log('Current version:', currentVersion);
                    if (remoteVersion && remoteVersion !== currentVersion) {
                        console.log('A new version (' + remoteVersion + ') of the script is available. Current version is ' + currentVersion + '.');
                        alert('A new version of the script is available. The page will now reload to update.');
                        setTimeout(function() {
                            GM_setValue('isUpdated', true);  // Set a flag indicating that an update is happening
                            window.location.reload();
                        }, 3000);  // Wait 3 seconds before reloading to allow alert to be seen
                    }
                } else {
                    console.log('No version found in update check response');
                }
            },
            onerror: function(error) {
                console.log('Error checking for update:', error);
            }
        });
    }

    // Only check for updates if not in the middle of an update
    if (!GM_getValue('isUpdated', false)) {
        setInterval(checkForUpdate, 30 * 60 * 1000);  // Check for updates every 30 minutes
        checkForUpdate();  // Initial check on script load
    } else {
        GM_setValue('isUpdated', false);  // Reset the flag after reload
        console.log('Script updated to new version');
    }
})();

