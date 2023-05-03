
chrome.scripting.registerContentScripts([
    {
        id: "tch_injected",
        js: ['injected.js'],
        matches: ["*://*.twitch.tv/*"],
        runAt: "document_start",
        allFrames: true,
        world: "MAIN",
    }
]);


chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (sender.id !== chrome.runtime.id) {
        return;
    }
    
});


export {}