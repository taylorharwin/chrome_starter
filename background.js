
function createPITMHeaders(params){
  const newFields = ['X-PLAID-ITEM','X-PLAID-WW-USER','X-PLAID-WW-PASS', 'X-PLAID-WW-2FA'];
  const newValues = [params.item_id, params.username, params.password, params.twoFactor];

  let PITMHeaders = [];

  for (var i = 0; i < newFields.length; i++){
    PITMHeaders.push({
      name: newFields[i],
      value: newValues[i]
    });
  }
  return PITMHeaders;
}


chrome.webRequest.onBeforeSendHeaders.addListener(
    function(details) {
      const PITM = localStorage.getItem('PITM_params');
      if (details.method === 'POST' && PITM != null) {
        console.log(details.requestHeaders);

        var newFields = createPITMHeaders(JSON.parse(PITM));
        var newHeaders = details.requestHeaders.concat(newFields);

        return { requestHeaders: newHeaders }
      }
    },
    {urls: ["<all_urls>"]},
    ["blocking", "requestHeaders"]);



