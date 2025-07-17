(function () {
  var script = document.createElement("script");
  script.id = "cc_catfish_cs";
  script.innerHTML = `      
  const catfishAd = document.querySelector('div[data-ad-type="catfish"]');
  const ccgdiv = document.querySelector(
    'div[data-ad-type="catfish"] div[id^="div-gpt-ad"]'
  );
   const ccgiframe = document.querySelector(
    'div[data-ad-type="catfish"] iframe[id^="google_ads_iframe"]'
  );
  if (catfishAd) {
    catfishAd.style.width = "100%";
    catfishAd.style.height = "auto";       
    catfishAd.style.aspectRatio = "375/175";
    catfishAd.style.position = "fixed";
    catfishAd.style.margin = "auto";
    catfishAd.style.left = "0";
    catfishAd.style.right = "0";
    catfishAd.style.bottom = "0";
    catfishAd.style.display = "flex";
    catfishAd.style.justifyContent = "center";
    catfishAd.style.zIndex = "99999999";
    ccgdiv.style.width = "100%";
    ccgdiv.style.height = "100%";
    ccgdiv.style.aspectRatio = "375/175";    
    ccgiframe.style.width = "100%";
    ccgiframe.style.height = "100%";
    ccgiframe.style.aspectRatio = "375/175";

    let resizedDiv = false;
    let resizedFrame = false;

    const observer = new MutationObserver(() => {     
      const ftDiv = document.querySelector('div[id^="ftdiv"]');
      console.log(ftDiv)
      if (ftDiv && !resizedDiv) {
       console.log("set up ft element")
        ftDiv.style.width = "100%";
        ftDiv.style.height = "100%";
        ftDiv.style.aspectRatio = "375/175";
        resizedDiv = true;
      }
      const ftFrame = document.querySelector('iframe[id^="ftframe"]');
      if (ftFrame && !resizedFrame) {
       console.log("set up ft element")
        ftFrame.style.width = "100%";
        ftFrame.style.height = "100%";
        ftFrame.style.aspectRatio = "375/175";
        resizedFrame = true;
      }
      if (resizedDiv && resizedFrame) {
        observer.disconnect();
      }
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });
  }`;
  try {
    if(document.getElementById(ccscriptId)) {
      console.log(document.getElementById(ccscriptId))
    };
    var parentDoc = window.parent.document;
    parentDoc.body.appendChild(script);

  } catch (e) {
    console.warn("Injection failed due to cross-origin restrictions:", e);
  }
})();
