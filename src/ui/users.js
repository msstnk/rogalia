/* global Panel, T, dom, game, Permission */

"use strict";
function Users() {
    var lists = {};

    function renderList(content, list, empty) {
        dom.setContents(
            content,
            (list)
                ? [
                    dom.make("p", T("Total") + ": " + list.length),
                    isFriendList(list) ? makeFriendList(list) : makeSimpleList(list)
                ] : T(empty)
        );
    }

    function isFriendList(list) {
        return _.isObject(list[0]);
    }

    function makeSimpleList(list) {
        return dom.make("ul", list.sort().map(function(name) {
            const li = dom.tag("li", "", {text: name});
            li.onmousedown = function(e) {
                return game.chat.nameMenu(e, name);
            };
            return li;
        }));
    }

    function makeFriendList(list) {
        list.sort(function(a, b) {
            return a.Name.localeCompare(b.Name);
        });
        return dom.make("ul", list.map(function({Id, Name, Perm}) {
            const name = dom.span(Name);
            name.onmousedown = function(e) {
                return game.chat.nameMenu(e, Name);
            };
            return dom.make("li", [name, Permission.make(Id, Perm)]);
        }));
    }

    function render(content, data, selector, empty) {
        var list = {
            content: content,
            data: data[selector] || [],
            empty: empty,
        };
        lists[selector] = list;
        renderList(list.content, list.data, list.empty);
    }

    function makeTabUpdate(cmd, selector, empty) {
        return function (title, content) {
            function update(data) {
                render(content, data, selector, empty);
            }
            game.network.send(cmd, {}, update);
            // when e.g. this.updateFriendsTab()  will be called from game.chat
            // we need to chain game.network.send callback
            // so return it
            return update;
        };
    }

    this.tabs = dom.tabs([
        {
            title: T("Online players"),
            update: makeTabUpdate("player-list", "OnlinePlayers", "")
        },
        {
            title: T("Friends"),
            update: makeTabUpdate("friend-list", "Friends", "No friends")
        },
        {
            title: T("Blacklist"),
            update: makeTabUpdate("blacklist-list", "Blacklist", "Blacklist is empty")
        }
    ]);

    this.panel = new Panel(
        "users",
        "Users",
        this.tabs
    );

    this.updateOnlinePlayersTab = this.tabs.tabs[0].update;
    this.updateFriendsTab = this.tabs.tabs[1].update;
    this.updateBlacklistTab = this.tabs.tabs[2].update;

    this.addPlayer = function(name) {
        if (name == game.playerName)
            return;
        var list = lists.OnlinePlayers;
        if (list && list.data.indexOf(name) == -1) {
            list.data.push(name);
            renderList(list.content, list.data, list.empty);
        }
    };

    this.removePlayer = function(name) {
        if (name == game.playerName)
            return;
        var list = lists.OnlinePlayers;
        if (list) {
            var data = list.data;
            data.splice(data.indexOf(name), 1);
            renderList(list.content, list.data, list.empty);
        }
    };

    this.getOnlinePlayers = function() {
        return lists.OnlinePlayers.data;
    };
}
