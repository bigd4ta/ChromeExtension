document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("search").addEventListener("click", function() {
        var terms = document.getElementById("terms").value;
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            chrome.tabs.sendMessage(tabs[0].id, {type: "highlight", terms: terms});
        });
    });
});

var input = document.getElementById("terms");
input.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("search").click();
    }
});
