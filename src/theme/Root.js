import React, { useEffect } from 'react';

const DOCSBOT_SNIPPET = `
window.DocsBotAI=window.DocsBotAI||{},DocsBotAI.init=function(e){return new Promise((t,r)=>{var n=document.createElement("script");n.type="text/javascript",n.async=!0,n.src="https://widget.docsbot.ai/chat.js";let o=document.getElementsByTagName("script")[0];o.parentNode.insertBefore(n,o),n.addEventListener("load",()=>{let n;Promise.all([new Promise((t,r)=>{window.DocsBotAI.mount(Object.assign({}, e)).then(t).catch(r)}),(n=function e(t){return new Promise(e=>{if(document.querySelector(t))return e(document.querySelector(t));let r=new MutationObserver(n=>{if(document.querySelector(t))return e(document.querySelector(t)),r.disconnect()});r.observe(document.body,{childList:!0,subtree:!0})})})("#docsbotai-root"),]).then(()=>t()).catch(r)}),n.addEventListener("error",e=>{r(e.message)})})};
DocsBotAI.init({id: "tu5ZtqgCIuGyfeGw9TgD/odUIFrNHqG36CW01zPKR"});
`;

export default function Root({ children }) {
  useEffect(() => {
    if (typeof window === 'undefined' || document.getElementById('docsbot-snippet')) {
      return;
    }

    const script = document.createElement('script');
    script.id = 'docsbot-snippet';
    script.type = 'text/javascript';
    script.async = true;
    script.text = DOCSBOT_SNIPPET;

    const firstScript = document.getElementsByTagName('script')[0];
    if (firstScript && firstScript.parentNode) {
      firstScript.parentNode.insertBefore(script, firstScript);
    } else {
      document.head.appendChild(script);
    }
  }, []);

  return (
    <>
      {children}
      <div id="docsbotai-root" />
    </>
  );
}
