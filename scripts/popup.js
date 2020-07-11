document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("search").addEventListener("click", function() {
        var terms = document.getElementById("terms").value;
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            chrome.tabs.sendMessage(tabs[0].id, {type: "highlight", terms: terms});
        });
    });
});