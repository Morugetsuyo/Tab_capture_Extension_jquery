$(document).ready(function() {
    $('#captureBtn').click(function() {
        chrome.runtime.sendMessage({action: "captureTab"}, function(response) {
            if(response && response.success) {
                console.log('Tab captured successfully.');
            } else {
                console.error('Failed to capture tab.');
            }
        });
    });
});
