"use strict";
function Wiki() {
    var iframe = dom.tag("iframe");
    iframe.resize = true;
    this.panel = new Panel("wiki", "Wiki", [iframe]);
    this.panel.hooks.show = function() {
        iframe.src = "http://rogalia.ru/wiki/";
        this.panel.hooks.show = null;
    }.bind(this);
}
