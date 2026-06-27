import React, { useEffect } from 'react';
import Layout from '@theme/Layout';

const DOCSBOT_SNIPPET = `
window.DocsBotAI=window.DocsBotAI||{},DocsBotAI.init=function(e){return new Promise((t,r)=>{var n=document.createElement("script");n.type="text/javascript",n.async=!0,n.src="https://widget.docsbot.ai/chat.js";let o=document.getElementsByTagName("script")[0];o.parentNode.insertBefore(n,o),n.addEventListener("load",()=>{let n;Promise.all([new Promise((t,r)=>{window.DocsBotAI.mount(Object.assign({}, e)).then(t).catch(r)}),(n=function e(t){return new Promise(e=>{if(document.querySelector(t))return e(document.querySelector(t));let r=new MutationObserver(n=>{if(document.querySelector(t))return e(document.querySelector(t)),r.disconnect()});r.observe(document.body,{childList:!0,subtree:!0})})})("#docsbotai-root"),]).then(()=>t()).catch(r)}),n.addEventListener("error",e=>{r(e.message)})})};
DocsBotAI.init({id: "tu5ZtqgCIuGyfeGw9TgD/odUIFrNHqG36CW01zPKR"});
`;

export default function ChatbotPage() {
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
    <Layout
      title="AI Assistant"
      description="Chat with our AI-powered documentation assistant"
    >
      <div
        style={{
          width: '100%',
          minHeight: 'calc(100vh - 60px)',
          backgroundColor: '#f5f5f5',
          padding: '2rem',
          boxSizing: 'border-box',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'flex-start',
        }}
      >
        <iframe
          src="https://docsbot.ai/iframe/tu5ZtqgCIuGyfeGw9TgD/odUIFrNHqG36CW01zPKR"
          width="600"
          height="650"
          frameBorder="0"
          allowTransparency="true"
          scrolling="no"
          allow="microphone; camera"
          title="DocsBot AI Assistant"
          style={{ border: 'none', maxWidth: '100%' }}
        />
        <div id="docsbotai-root" style={{ minHeight: 'calc(100vh - 120px)' }} />
      </div>
    </Layout>
  );
}
