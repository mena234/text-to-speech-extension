const contextMenuItem = {
    "id": "TextToSpeech",
    "title": "Text To Speech",
    "contexts": ["selection"]
}
chrome.runtime.onInstalled.addListener(() => chrome.contextMenus.create(contextMenuItem));

chrome.contextMenus.onClicked.addListener((clickData) => {
    if (clickData.menuItemId === "TextToSpeech" && clickData.selectionText) {
        chrome.tts.getVoices((voices) => chrome.tts.speak(clickData.selectionText, { 'rate': 0.6, 'lang': 'en-US', 'voiceName': voices[5].voiceName }));
    }
})