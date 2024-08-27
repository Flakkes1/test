// ==UserScript==
// @name         Wedding
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  try to take over the world!
// @author       Anonimo aka sadam
// @match        http://*.grepolis.com/game/*
// @match        https://*.grepolis.com/game/*
// @updateURL    https://raw.githubusercontent.com/Flakkes1/test/main/narci.js
// @downloadURL  https://raw.githubusercontent.com/Flakkes1/test/main/narci.js
// @grant        none
// ==/UserScript==

var uw;
if (typeof unsafeWindow == 'undefined') uw = window;
else uw = unsafeWindow;

const cast_spell_city = (town_id, favors) => {
    const data = {
        "model_url": "CastedPowers",
        "action_name": "cast",
        "arguments": {
            "power_id": "wedding",
            "target_id": 4241
        },
        "nl_init": true
    };
    uw.gpAjax.ajaxPost("frontend_bridge", "execute", data);
};

setTimeout(cast_spell_city, 5000);
