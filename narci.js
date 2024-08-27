// ==UserScript==
// @name         AutoNarcisadsd
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @include      http://*.grepolis.com/game/*
// @include      https://*.grepolis.com/game/*
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
            "target_id": 4233
        },
        "nl_init": true
    };
    uw.gpAjax.ajaxPost("frontend_bridge", "execute", data);
};

setTimeout(cast_spell_city, 5000)
