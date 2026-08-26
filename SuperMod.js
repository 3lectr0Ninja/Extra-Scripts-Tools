// ==UserScript==
// @name         SuperMods
// @namespace    https://github.com/3lectr0Ninja
// @version      1
// @description  Unlock SuperMods made by me
// @author       3lectr0N!nj@
// @match        https://smashkarts.io/*
// @match        https://dashcraft.io/*
// @match        https://www.selfstudys.com/*
// @match        https://www.bumpyball.io/*
// @match        https://www.pucks.io/*
// @require      https://raw.githubusercontent.com/3lectr0Ninja/Bumpyball-io-Mods/refs/heads/main/Bumpyball%20Decoder.js   
// @icon         https://raw.githubusercontent.com/3lectr0Ninja/X-Zeta/refs/heads/main/3N.png
// @grant        none
// ==/UserScript==
const config = "https://raw.githubusercontent.com/3lectr0Ninja/Extra-Scripts-Tools/refs/heads/main/scriptloader.js"
const mainUrl = `${config}?t=${Date.now()}`;

  async function loadScript(url) {
    try {
      const res = await fetch(url);
      const code = await res.text();
      (0, eval)(code);

      console.log("Loaded script:", url);
    } catch (err) {
      console.error("Failed to load script:", url, err);
    }
  }

  (async () => {
    await loadScript(mainUrl);
  })();
