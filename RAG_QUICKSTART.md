# RAG Chatbot Quick Start

Get your AI-powered documentation chatbot running in 30 minutes using free cloud services.

## TL;DR - 5 Steps

### Step 1: Get Free API Keys (5 min)
- **Groq**: [console.groq.com](https://console.groq.com/keys) → Create API key
- **Pinecone**: [app.pinecone.io](https://app.pinecone.io) → Create project & index `home-printer-docs` (384 dimensions, cosine metric)
- **Hugging Face**: [huggingface.co/settings/tokens](https://huggingface.co/settings/tokens) → Create token

### Step 2: Ingest Documents Locally (10 min)
```bash
cd c:\tdx3\AI_Content\chatbot

# Create .env file with your keys
echo GROQ_API_KEY=your_key > .env
echo PINECONE_API_KEY=your_key >> .env
echo HUGGINGFACE_API_KEY=your_key >> .env

# Install and run ingestion
pip install -r requirements.txt
python ingest.py
```

### Step 3: Deploy to Streamlit Cloud (5 min)
```bash
# Push to GitHub
git init
git add .
git commit -m "Initial"
git remote add origin https://github.com/YOU/home-printer-rag-chatbot.git
git push -u origin main
```

Then go to [share.streamlit.io](https://share.streamlit.io):
- Click "New app"
- Select your repo and `app.py`
- Click Deploy
- Once deployed, add secrets (API keys) from Streamlit settings

### Step 4: Update Docusaurus Widget
Edit `src/components/ChatWidget/index.js`:
```javascript
const streamlitUrl = 'https://your-streamlit-app-url.streamlit.app?embed=true';
```

### Step 5: Deploy Documentation
```bash
npm run build
git push origin main
```

Done! 🎉

---

## Detailed Guides

See [RAG_SETUP_GUIDE.md](./RAG_SETUP_GUIDE.md) for comprehensive setup instructions.

## Test It

1. **Direct Streamlit app**: Visit your Streamlit URL
2. **Integrated widget**: Visit your Docusaurus site, click 💬 button

## Cost

✅ **$0/month** - Everything uses free tiers

| Service | Free Tier |
| --- | --- |
| Groq LLM | Unlimited requests |
| Pinecone | 1M vectors |
| Hugging Face | 30k/month API calls |
| Streamlit Cloud | Unlimited apps |

---

**Full documentation**: [RAG_SETUP_GUIDE.md](./RAG_SETUP_GUIDE.md)
