chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "captureTab") {
        chrome.tabs.captureVisibleTab(null, {format: 'png', quality: 100}, (imageUri) => {
            if (chrome.runtime.lastError) {
                console.error('Error capturing the tab: ', chrome.runtime.lastError.message);
                sendResponse({success: false, error: "Failed to capture tab"});
                return;
            }

            // Open the wrapper HTML page in a new tab with the image URI as a fragment
            chrome.tabs.create({url: `image_display.html#${encodeURIComponent(imageUri)}`});

            sendResponse({success: true});
        });
        return true; // Indicate async response
    }
});
