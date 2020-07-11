var context = new Mark(document.querySelector("body"))
chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    if (message.type === "highlight" && message.terms != "") {
        let re = new RegExp(message.terms, "g");
        context.unmark();
        context.markRegExp(re);
    }
});