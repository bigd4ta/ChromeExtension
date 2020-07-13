document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("search").addEventListener("click", function() {
        var terms = document.getElementById("terms").value
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            chrome.tabs.sendMessage(tabs[0].id, "ping", function (response) {
                if (response === "pong") {
                    // Content script is loaded at this point; just ask it to highlight.
                    chrome.tabs.sendMessage(tabs[0].id, {type: "highlight", terms: terms})
                } else {
                    // Load the content scripts for the first search.
                    chrome.tabs.insertCSS(tabs[0].id, {file: "styles/content.css"})
                    chrome.tabs.executeScript({file: 'scripts/mark.min.js'})
                    chrome.tabs.executeScript({file: 'scripts/content.js'}, function (response) {
                        chrome.tabs.sendMessage(tabs[0].id, {type: "highlight", terms: terms})
                    })
                }
            })
        })
    })
})

var input = document.getElementById("terms")
input.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault()
        document.getElementById("search").click()
    }
})