import React from 'react';
import Layout from '@theme/Layout';

/**
 * Dedicated Chatbot Page
 * 
 * This creates a full-screen chatbot page accessible at /docs/chatbot
 * 
 * To use this instead of the floating widget:
 * 1. Update sidebars.js to add:
 *    'chatbot' (if creating as a doc)
 * 
 * 2. Or keep this as a custom page at /chatbot
 * 
 * Installation:
 * 1. Replace STREAMLIT_URL with your actual Streamlit app URL
 * 2. Rebuild: npm run build
 * 3. Push: git push origin main
 */

const STREAMLIT_URL = 'https://your-streamlit-app-url.streamlit.app?embed=true';

export default function ChatbotPage() {
  return (
    <Layout 
      title="AI Assistant" 
      description="Chat with our AI-powered home printer documentation assistant"
    >
      <div style={{ 
        width: '100%', 
        height: 'calc(100vh - 60px)', 
        overflow: 'hidden',
        backgroundColor: '#f5f5f5'
      }}>
        <iframe
          src={STREAMLIT_URL}
          style={{ 
            width: '100%', 
            height: '100%', 
            border: 'none',
            display: 'block'
          }}
          title="Home Printer Documentation Chatbot"
          allow="clipboard-write"
          loading="lazy"
        />
      </div>
    </Layout>
  );
}
