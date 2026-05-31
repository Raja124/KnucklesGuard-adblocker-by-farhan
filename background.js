chrome.runtime.onInstalled.addListener(function(details) {
  if (details.reason === 'install') {
    chrome.declarativeNetRequest.updateEnabledRulesets({
      enableRulesetIds: ['ruleset_1']
    });
  }
});
