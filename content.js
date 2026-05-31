(function(){
var C='#masthead-ad,#player-ads,#ad-container,.video-ads,.ytp-ad-module,.ytp-ad-player-overlay,.ytp-ad-player-overlay-layout,.ytp-ad-overlay-container,.ytp-ad-image-overlay,.ytp-ad-text-overlay,.ytp-ad-action-interrupt-slot,.ytp-ad-action-interstitial,.ytp-ad-preview-container,.ytp-ad-progress-list,.ytp-ad-message-overlay,.ytp-ad-mute-overlay,.ytp-ad-button,.ytp-ad-visit-advertiser-button,.ytp-ad-skip-button,.ytp-ad-skip-button-modern,.ytp-ad-overlay-close-button,.ytp-skip-ad-button,.ytp-ad-badge,.ytp-ad-text,.ytp-ad-simple-ad-badge,ytd-display-ad-renderer,ytd-ad-slot-renderer,ytd-action-companion-ad-renderer,ytd-promoted-video-renderer,ytd-in-feed-ad-layout-renderer,ytd-sponsored-addon-renderer,ytd-video-masthead-ad-v3-renderer,ytd-merchandise-shelf-renderer,ytd-search-panel-ad-renderer,ytd-compact-promoted-video-renderer,ytd-statement-banner-renderer,ytd-ad-simple-impression-renderer,ytd-promoted-sparkles-text-search-renderer,ytd-promoted-sparkles-web-renderer,ytd-carousel-ad-renderer,ytd-companion-slot-renderer,ytd-mealbar-promo-renderer,ytd-banner-promo-renderer,ytd-brand-video-singleton-renderer,ytd-brand-video-shelf-renderer,ytd-search-pyv-renderer,ytd-compact-promoted-item-renderer,ytd-enforcement-message-view-model,tp-yt-paper-dialog:has(ytd-enforcement-message-view-model),tp-yt-iron-overlay-backdrop,ins.adsbygoogle,div[id^="div-gpt"],amp-ad,amp-embed{display:none!important;visibility:hidden!important;opacity:0!important;pointer-events:none!important;position:absolute!important;top:-9999px!important;left:-9999px!important;z-index:-9999!important;width:1px!important;height:1px!important;overflow:hidden!important}';
try{var s=document.createElement('style');s.id='acs';s.textContent=C;document.documentElement.appendChild(s)}catch(e){}
function sn(r){
 if(!r||!r.querySelectorAll)return;
 try{if(r.getElementById&&!r.getElementById('acs')){var s=document.createElement('style');s.id='acs';s.textContent=C;r.appendChild(s)}}catch(e){}
 try{var k=r.querySelectorAll('*');for(var i=0;i<k.length;i++){try{if(k[i].shadowRoot)sn(k[i].shadowRoot)}catch(e){}}}catch(e){}
}
function rm(r){
 if(!r||!r.querySelectorAll)return;
 try{var ad=r.querySelector('.ytp-ad-player-overlay,.ytp-ad-module,.video-ads,#player-ads');if(ad){var sk=r.querySelector('.ytp-ad-skip-button,.ytp-ad-skip-button-modern,.ytp-skip-ad-button');if(sk)try{sk.click()}catch(e){}try{ad.remove()}catch(e){}}}catch(e){}
  try{var a=document.querySelector('.ad-showing,.ytp-ad-player-overlay,.ytp-ad-module');if(a){var v=document.querySelector('video');if(v&&v.duration&&v.duration<120&&v.currentTime>0.5){v.currentTime=v.duration-0.1;v.play()}}}catch(e){}
 try{var k=r.querySelectorAll('*');for(var i=0;i<k.length;i++){try{if(k[i].shadowRoot)rm(k[i].shadowRoot)}catch(e){}}}catch(e){}
}
sn(document);sn(document.documentElement);rm(document);
try{new MutationObserver(function(){rm(document);rm(document.documentElement)}).observe(document.documentElement,{childList:true,subtree:true})}catch(e){}
setInterval(function(){rm(document);rm(document.documentElement)},200);
setInterval(function(){sn(document);sn(document.documentElement)},4000);
document.addEventListener('yt-navigate-finish',function(){setTimeout(function(){rm(document);rm(document.documentElement)},50);setTimeout(function(){sn(document);sn(document.documentElement)},300)});
})();
