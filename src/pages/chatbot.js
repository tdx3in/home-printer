import React, { useEffect } from 'react';
import Layout from '@theme/Layout';

const DOCSBOT_ID = 'tu5ZtqgCIuGyfeGw9TgD/odUIFrNHqG36CW01zPKR';

export default function ChatbotPage() {
  useEffect(() => {
    if (typeof window === 'undefined' || window.__docsbotLoadStarted) {
      return;
    }

    window.__docsbotLoadStarted = true;

    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.src = 'https://widget.docsbot.ai/chat.js';

    script.onload = () => {
      if (window.DocsBotAI && typeof window.DocsBotAI.init === 'function') {
        window.DocsBotAI.init({ id: DOCSBOT_ID });
      }
    };

    script.onerror = () => {
      console.error('Failed to load DocsBot widget');
    };

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
        }}
      >
        <div id="docsbotai-root" style={{ minHeight: 'calc(100vh - 120px)' }} />
      </div>
    </Layout>
  );
}
