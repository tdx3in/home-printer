# Docusaurus + RAG Chatbot Integration Guide

How to integrate your Streamlit RAG chatbot into your Docusaurus documentation site.

## 🎯 Two Integration Methods

| Method | Use Case | Setup Time |
| --- | --- | --- |
| **Floating Widget** | UX-friendly, persistent on all pages | 5 min |
| **Dedicated Page** | Full-screen chatbot, `/chatbot` URL | 2 min |

We recommend the **floating widget** for better UX.

---

## Method 1: Floating Chat Widget (Recommended) ✨

This creates a persistent 💬 button in the bottom-right corner on all pages.

### What's Already Set Up

Your Docusaurus project already includes:
- ✅ `src/components/ChatWidget/index.js` - React component
- ✅ `src/components/ChatWidget/styles.module.css` - Styling
- ✅ `src/theme/Root.js` - Global wrapper

### Configuration

**1. Update Streamlit URL**

Edit `src/components/ChatWidget/index.js` line 7:

```javascript
const streamlitUrl = 'https://YOUR-STREAMLIT-URL.streamlit.app?embed=true';
```

Replace `YOUR-STREAMLIT-URL` with your actual Streamlit Cloud URL.

**2. Rebuild Docusaurus**

```bash
npm run build
npm run serve
```

Visit `http://localhost:3000/home-printer-docs/` and look for the 💬 button!

**3. Deploy**

```bash
git add .
git commit -m "Update chatbot URL"
git push origin main
```

GitHub Actions will rebuild and deploy automatically.

### Customization

**Change button style**

Edit `src/components/ChatWidget/styles.module.css`:

```css
.chatButton {
  background: linear-gradient(135deg, #YOUR_COLOR 0%, #YOUR_COLOR_2 100%);
  /* ... */
}
```

**Change button position**

In `styles.module.css`:

```css
.widgetContainer {
  bottom: 20px;  /* Distance from bottom */
  right: 20px;   /* Distance from right */
  /* Change to: left: 20px; for left side */
}
```

**Change button icon**

In `index.js` line 27:

```javascript
{isOpen ? '✕' : '💬'}  /* Replace 💬 with another emoji */
```

**Disable on certain pages**

Modify `index.js` to check current path:

```javascript
import { useLocation } from '@docusaurus/router';

export default function ChatWidget() {
  const location = useLocation();
  const isDisabled = location.pathname.includes('/api/');
  
  if (isDisabled) return null;
  
  // ... rest of component
}
```

---

## Method 2: Dedicated Page

This creates a full-screen chatbot at `/chatbot`.

### Setup

The file `src/pages/chatbot.js` is already created.

**1. Update Streamlit URL**

Edit `src/pages/chatbot.js` line 12:

```javascript
const STREAMLIT_URL = 'https://YOUR-STREAMLIT-URL.streamlit.app?embed=true';
```

**2. Rebuild and Deploy**

```bash
npm run build
npm run serve
# Visit http://localhost:3000/chatbot

git push origin main
```

### Add Link to Navigation

Edit `docusaurus.config.js` navbar items:

```javascript
items: [
  {
    type: 'docSidebar',
    sidebarId: 'tutorialSidebar',
    position: 'left',
    label: 'Documentation',
  },
  {
    to: '/chatbot',
    label: 'AI Assistant',
    position: 'right',
  },
  // ... other items
]
```

---

## Combining Both Methods

Run **both simultaneously** for the best UX:

1. Floating widget on all pages (quick access)
2. Full-page chatbot for focused conversation

They don't interfere with each other since the widget uses an iframe.

### Disable Widget on Chatbot Page

If you want the full page without the button overlay:

Edit `src/theme/Root.js`:

```javascript
import { useLocation } from '@docusaurus/router';
import ChatWidget from '@site/src/components/ChatWidget';

export default function Root({children}) {
  const location = useLocation();
  const showWidget = !location.pathname.includes('/chatbot');

  return (
    <>
      {children}
      {showWidget && <ChatWidget />}
    </>
  );
}
```

---

## Testing

### Local Testing

```bash
npm start
# Site runs at http://localhost:3000/home-printer-docs/
# You'll see the 💬 button if using Method 1
```

**Test the widget:**
1. Click the 💬 button
2. Ask a question
3. Verify response appears

### Troubleshooting

**Widget doesn't appear**
- Check console (F12) for errors
- Verify `streamlitUrl` is correct
- Check Streamlit app is live and accessible

**Iframe not loading**
- CORS issue? Streamlit URL must be public
- Try visiting Streamlit URL directly
- Check if `?embed=true` is in the URL

**Chat not working in embedded iframe**
- Streamlit app needs proper CORS headers
- Verify in Streamlit app logs for errors
- Test direct Streamlit URL first

**Button hidden behind content**
- Increase `z-index` in `styles.module.css`
- Change button position (left/right, top/bottom)

---

## Advanced Features

### Custom Styling per Theme

Edit `src/components/ChatWidget/styles.module.css`:

```css
/* Light mode */
.chatButton {
  background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%);
}

/* Dark mode */
@media (prefers-color-scheme: dark) {
  .chatButton {
    background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
  }
}
```

### Analytics

Add tracking to widget clicks:

```javascript
const toggleChat = () => {
  // Track event
  if (window.gtag) {
    window.gtag('event', 'open_chatbot', {
      timestamp: new Date().toISOString()
    });
  }
  setIsOpen(!isOpen);
};
```

### Multiple Models

If you have multiple Streamlit apps:

```javascript
const [model, setModel] = useState('general');
const streamlitUrls = {
  general: 'https://general-chatbot.streamlit.app',
  technical: 'https://technical-chatbot.streamlit.app'
};

const streamlitUrl = streamlitUrls[model];
```

---

## Deployment Checklist

- [ ] Streamlit app is running at a public URL
- [ ] All API keys are configured in Streamlit Secrets
- [ ] Streamlit URL is updated in `ChatWidget/index.js`
- [ ] No hardcoded API keys in code
- [ ] Tested locally with `npm start`
- [ ] Built without errors: `npm run build`
- [ ] Changes committed: `git add . && git commit`
- [ ] Pushed to main: `git push origin main`
- [ ] GitHub Actions deployment completed
- [ ] Live site shows chat widget

---

## Files Modified

When setting up integration, these files are involved:

| File | Purpose | Status |
| --- | --- | --- |
| `src/components/ChatWidget/index.js` | Chat widget component | ✅ Created |
| `src/components/ChatWidget/styles.module.css` | Widget styling | ✅ Created |
| `src/theme/Root.js` | Global wrapper | ✅ Created |
| `src/pages/chatbot.js` | Dedicated page (optional) | ✅ Created |
| `docusaurus.config.js` | Site config (optional) | ⚠️ Update if using dedicated page |

---

## Next Steps

1. **Deploy Streamlit app** (if not done)
   - See [RAG_QUICKSTART.md](../RAG_QUICKSTART.md)

2. **Update Streamlit URL**
   - Edit `src/components/ChatWidget/index.js`

3. **Test locally**
   - `npm start`

4. **Deploy documentation**
   - `git push origin main`

5. **Monitor**
   - Check Streamlit logs
   - Monitor API key usage

---

## Need Help?

- 📖 [Streamlit Docs](https://docs.streamlit.io)
- 🦙 [Groq API](https://console.groq.com/docs)
- 📌 [Pinecone Docs](https://docs.pinecone.io)
- 🦣 [Docusaurus Guide](https://docusaurus.io/docs)

---

**Last Updated**: May 28, 2026
