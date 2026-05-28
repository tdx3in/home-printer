import React, { useState } from 'react';
import styles from './styles.module.css';

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const streamlitUrl = 'https://home-printer-rag-chatbot-gaencarjwjpk6ccgdwwjwv.streamlit.app/?embed=true';

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.widgetContainer}>
      {/* Floating Action Button */}
      <button 
        className={styles.chatButton} 
        onClick={toggleChat}
        title={isOpen ? 'Close chat' : 'Open AI Assistant'}
        aria-label="Toggle AI Assistant"
      >
        {isOpen ? '✕' : '💬'}
      </button>

      {/* Chat Window Panel */}
      {isOpen && (
        <div className={styles.chatWindow}>
          <div className={styles.chatHeader}>
            <h3>Home Printer Assistant</h3>
            <button 
              className={styles.closeButton}
              onClick={toggleChat}
              aria-label="Close chat"
            >
              ✕
            </button>
          </div>
          
          <div className={styles.chatContent}>
            <iframe
              src={streamlitUrl}
              className={styles.chatIframe}
              title="Home Printer Documentation Chatbot"
              sandbox="allow-same-origin allow-scripts allow-popups allow-forms allow-popups-to-escape-sandbox"
              allow="clipboard-write; microphone; camera"
              loading="lazy"
            />
          </div>
        </div>
      )}
    </div>
  );
}