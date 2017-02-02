chrome.webRequest.onBeforeSendHeaders.addListener(
        function(details) {
          console.log(details);
        },
        {urls: ["<all_urls>"]},
        ["blocking", "requestHeaders"]);