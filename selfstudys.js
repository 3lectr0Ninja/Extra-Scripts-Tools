// ==UserScript==
// @name         Free PDF Opener
// @namespace    https://github.com/3lectr0Ninja
// @version      1
// @description  Get PDF free without signing in
// @author       3lectr0N!nj@
// @match        https://www.selfstudys.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=selfstudys.com
// @grant        none
// ==/UserScript==
const opened = false
const proto = XMLHttpRequest.prototype;

if (!proto._open) proto._open = proto.open;
proto.open = function () {
    const [method, url] = arguments;
    Object.assign(this, {method, url});

    return proto._open.apply(this, arguments);
};

if (!proto._send) proto._send = proto.send;
proto.send = function (body) {
    if (this.url.includes("https://www.selfstudys.com/sitepdfs")) {
            let url = this.url
            alert("PDF url found! Opening in few seconds....")
            if(!opened){
                window.open(url)
                opened=true
                alert("PDF opened in new tab!")
                return proto._send.apply(this, arguments);
            }
        }
    return proto._send.apply(this, arguments);
};