(function(){
var AD_KEYS=['adPlacements','playerAds','adSlots','adBreakParams','adBreakHeartbeatParams','adBreakRenderer','adInlinePlaybackStaticText','advertisedVideo','promotedSparklesWebRenderer','promotedSparklesText','promotedVideoRenderer','engagementPanelSectionListRenderer','sparklesMediaResponse','searchPyvRenderer','compactPromotedItemRenderer','actionCompanionAdRenderer','adInfoRenderer','displayAdRenderer','adHoverTextButtonRenderer'];
function strip(o){if(!o||typeof o!=='object')return;for(var k in o){if(AD_KEYS.indexOf(k)>-1)delete o[k];else if(typeof o[k]==='object')strip(o[k])}}
var _p=JSON.parse;JSON.parse=function(){var r=_p.apply(this,arguments);if(r&&(r.adPlacements||r.playerResponse))strip(r);return r};
var _f=window.fetch;window.fetch=function(u){return _f.apply(this,arguments).then(function(r){var url=typeof u==='string'?u:(u&&u.url)||'';if(url.indexOf('/youtubei/v1/')>-1){return r.clone().json().then(function(d){strip(d);return new Response(JSON.stringify(d),{status:r.status,statusText:r.statusText,headers:r.headers})}).catch(function(){return r})}return r})};
})();
