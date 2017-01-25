var pathfinder = /^\/([a-zA-Z0-9]+)\//;

function setNavigatonState() {

    var selected;
    if (!window.location.hash && window.location.pathname === '/') {
        selected = 'home';
    } else if (window.location.hash) {
        selected = window.location.hash.substr(1).replace(/\/.*$/, '');
    } else {
        selected = pathfinder.exec(window.location.pathname)[1];
    }
    console.log("Selected: " + selected);
    updateNavigationMenu(selected);
}

function updateNavigationMenu(selected) {
    $('#navigation .navigation-content li').removeClass('selected');
    $('#navigation .navigation-content li[data-key=' + selected + ']').addClass('selected');
}


$(document).ready(function () {
    setNavigatonState();

    if ("onhashchange" in window) {
        window.onhashchange = function() {
            setNavigatonState();
            gaRegisterHashChange();
        };
    }
});
