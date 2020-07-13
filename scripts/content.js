var context = new Mark(document.querySelector("body"))
chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    if (message.type === "highlight" && message.terms != "") {
        context.unmark();
        context.mark(message.terms.split(" "))
    }
})
chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    if (message === "ping") {
        sendResponse("pong")
    }
})