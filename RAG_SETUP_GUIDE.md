# RAG Chatbot Setup Guide

Complete guide to deploying a free-tier RAG (Retrieval-Augmented Generation) chatbot integrated with your Docusaurus documentation site.

## 🎯 Overview

This setup creates an AI assistant that:
- 🤖 Uses **Groq** for fast LLM inference (free tier, no expiration)
- 📌 Stores embeddings in **Pinecone** serverless vector database (free tier)
- 🧠 Generates embeddings with **Hugging Face** (free tier)
- 🎨 Hosts the UI on **Streamlit Community Cloud** (free tier)
- 💬 Integrates as a floating chat widget in your Docusaurus site

**Total cost: $0/month**

## 🏗️ Architecture

```
Your Docusaurus Site
    └── Floating Chat Widget
            └── iframe embed
                    └── Streamlit App (Streamlit Cloud)
                            ├── Query User Input
                            └── Retrieve Context
                                    ├── Get Embeddings (Hugging Face)
                                    ├── Vector Search (Pinecone)
                                    └── Generate Response (Groq)
```

## 📋 Prerequisites

- GitHub account
- Python 3.9+ installed locally
- API Keys from:
  - Groq (free)
  - Pinecone (free)
  - Hugging Face (free)

## 🚀 Step-by-Step Setup

### Phase 1: Get Free API Keys

#### 1.1 Groq API Key
1. Visit [console.groq.com](https://console.groq.com)
2. Sign up with your GitHub account
3. Go to API Keys section
4. Create a new API key
5. Copy and save the key securely

**Features**: Free tier gives you thousands of daily requests with no expiration

#### 1.2 Pinecone Vector Database

1. Visit [app.pinecone.io](https://app.pinecone.io)
2. Sign up (free tier available)
3. Create a new project (select Free tier)
4. Create an index named `home-printer-docs` with:
   - Dimension: `384` (for BAAI/bge-small-en-v1.5)
   - Metric: `cosine`
5. Go to API Keys and copy your API key
6. Save the environment and index name

**Features**: Free tier includes 1M vectors stored

#### 1.3 Hugging Face API Key

1. Visit [huggingface.co](https://huggingface.co)
2. Sign up (free)
3. Go to Settings → Access Tokens
4. Create a new token with `read` permission
5. Copy and save the token

**Features**: Free tier includes sufficient API calls for documentation

### Phase 2: Prepare Documents (Local)

1. **Navigate to chatbot directory**:
   ```bash
   cd c:\tdx3\AI_Content\chatbot
   ```

2. **Create `.env` file with your API keys**:
   ```bash
   HUGGINGFACE_API_KEY=hf_xxxxxxxxxxxxx
   PINECONE_API_KEY=pcn_xxxxxxxxxxxxx
   PINECONE_INDEX=home-printer-docs
   GROQ_API_KEY=gsk_xxxxxxxxxxxxx
   ```

3. **Install Python dependencies**:
   ```bash
   pip install -r requirements.txt
   ```

4. **Run the ingestion script** (one-time setup):
   ```bash
   python ingest.py
   ```

   This will:
   - Read all markdown files from `docs/`
   - Generate embeddings for each chunk
   - Upload vectors to Pinecone
   - Take 5-10 minutes depending on document size

   **Check progress**: It uses tqdm to show a progress bar

### Phase 3: Deploy Streamlit App

#### 3.1 Push to GitHub

1. **Create GitHub repository**:
   - Go to [github.com/new](https://github.com/new)
   - Name: `home-printer-rag-chatbot`
   - Make it public (Streamlit Cloud needs access)
   - Click Create

2. **Push chatbot code** (from your local machine):
   ```bash
   cd chatbot
   git init
   git add .
   git commit -m "Initial commit: RAG chatbot"
   git remote add origin https://github.com/YOUR_USERNAME/home-printer-rag-chatbot.git
   git branch -M main
   git push -u origin main
   ```

#### 3.2 Deploy to Streamlit Cloud

1. **Go to [share.streamlit.io](https://share.streamlit.io)**
2. **Click "New app"**
3. **Select**:
   - Repository: `YOUR_USERNAME/home-printer-rag-chatbot`
   - Branch: `main`
   - Main file path: `app.py`
4. **Click Deploy**

Streamlit will build and deploy your app. Wait 2-5 minutes.

#### 3.3 Add Secrets to Streamlit

1. Once deployed, go to your Streamlit app URL
2. Click the **☰ menu** in top right
3. Select **Settings**
4. Go to **Secrets**
5. Paste your API keys in TOML format:
   ```toml
   GROQ_API_KEY = "gsk_xxxxxxxxxxxxx"
   PINECONE_API_KEY = "pcn_xxxxxxxxxxxxx"
   PINECONE_INDEX = "home-printer-docs"
   HUGGINGFACE_API_KEY = "hf_xxxxxxxxxxxxx"
   DEBUG_MODE = false
   ```
6. Click **Save**

Your Streamlit app will rerun and now have access to the secrets.

**Your chatbot URL**: `https://xxxxx-home-printer-rag-chatbot-xxxxx.streamlit.app`

### Phase 4: Integrate into Docusaurus

#### 4.1 Update Chat Widget URL

Edit `src/components/ChatWidget/index.js`:

```javascript
const streamlitUrl = 'https://YOUR-STREAMLIT-URL.streamlit.app?embed=true';
```

Replace with your actual Streamlit app URL from Phase 3.

#### 4.2 Rebuild Docusaurus (local testing)

```bash
cd c:\tdx3\AI_Content
npm run build
npm run serve
```

Visit `http://localhost:3000/home-printer-docs/` and test the floating chat button in the bottom-right corner.

#### 4.3 Push updated site

```bash
git add .
git commit -m "Add RAG chatbot widget"
git push origin main
```

GitHub Actions will automatically deploy to GitHub Pages.

## 🧪 Testing

### 1. Test the Chatbot Directly
- Visit your Streamlit URL directly
- Ask questions like:
  - "How do I install a home printer?"
  - "What causes poor print quality?"
  - "How often should I maintain my printer?"

### 2. Test Integrated Widget
- Visit your Docusaurus site at GitHub Pages URL
- Look for the 💬 button in bottom-right corner
- Click to open the chat widget
- Ask a question and verify the response

### 3. Troubleshooting

**Chatbot says "No relevant documentation found"**
- Verify ingestion ran successfully
- Check Pinecone dashboard to see if vectors were uploaded
- Run `python ingest.py` again

**Embedding errors**
- Check Hugging Face API key is correct
- Verify you have available API quota
- Test: `curl -H "Authorization: Bearer YOUR_KEY" https://api-inference.huggingface.co/pipeline/feature-extraction/BAAI/bge-small-en-v1.5 -d "test"`

**Streamlit app not loading**
- Check Streamlit Cloud status page
- Verify API keys are in Secrets
- Check app logs in Streamlit dashboard

**Chat widget not appearing on Docusaurus**
- Verify `streamlitUrl` in `ChatWidget/index.js` is correct
- Check browser console for CORS errors
- Rebuild and push changes: `npm run build && git push`

## 📊 Monitoring

### Free Tier Quotas

| Service | Free Tier | Status |
| --- | --- | --- |
| Groq API | ~500k requests/month | Unlimited (no expiration) |
| Pinecone | 1M vectors | ~50-100k vectors for docs |
| Hugging Face | 30k monthly API calls | OK for docs |
| Streamlit Cloud | Unlimited public apps | Compute limited but OK |

Monitor your usage:
- **Groq**: [console.groq.com](https://console.groq.com) → Usage
- **Pinecone**: [app.pinecone.io](https://app.pinecone.io) → Metrics
- **Hugging Face**: [huggingface.co](https://huggingface.co) → Settings → Notifications

## 🔄 Updating Documentation

When you update your markdown files:

1. **Local ingestion** (re-upload vectors):
   ```bash
   cd chatbot
   python ingest.py
   ```
   This clears and re-populates Pinecone with updated embeddings.

2. **Rebuild Docusaurus**:
   ```bash
   npm run build
   git push origin main
   ```

## 🛡️ Security Best Practices

- ✅ Store API keys in Streamlit Secrets (never in code)
- ✅ Use environment variables for local development
- ✅ Create separate API keys for different services
- ✅ Rotate keys periodically
- ✅ Keep GitHub repos public (Streamlit Cloud requirement)
- ✅ Add `.env` to `.gitignore` locally

## 🎓 How the RAG Pipeline Works

### When a user asks a question:

1. **User types query** in Streamlit chat
2. **Embed the query** using Hugging Face
3. **Search Pinecone** for similar chunks (semantic search)
4. **Retrieve top 3-5 chunks** with highest similarity
5. **Build system prompt** with retrieved context
6. **Call Groq LLM** with system prompt + user query
7. **Stream response** back to user

### Why this works:
- Groq is fast (~100ms response time)
- Semantic search finds relevant docs automatically
- LLM generates natural, context-aware responses
- No hallucinations (LLM only uses provided context)

## 📚 Advanced Customization

### Add metadata to documents
Edit `ingest.py` to extract and store custom metadata:
```python
metadata = {
    "document": doc_id,
    "topic": "troubleshooting",  # Custom
    "difficulty": "intermediate",  # Custom
    "text": chunk[:1000]
}
```

### Filter by metadata in search
Edit `app.py` retrieval to filter:
```python
results = index.query(
    vector=query_embedding,
    top_k=3,
    filter={"topic": {"$eq": "troubleshooting"}}
)
```

### Use different embedding models
Edit `ingest.py` and `app.py`:
```python
EMBEDDING_MODEL = "sentence-transformers/all-MiniLM-L6-v2"
```

## ❓ FAQ

**Q: Can I use a different LLM?**
A: Yes! Replace `llama-3.1-8b-instant` with any Groq-supported model or use a different provider.

**Q: Is this compliant with data privacy?**
A: Your documents are stored in Pinecone's cloud. Review their privacy policy for your use case.

**Q: What if I exceed free tier limits?**
A: Services gracefully degrade or fail. Upgrade to paid tiers if needed (typically $5-20/month).

**Q: Can I use this for production?**
A: Yes, but consider upgrading to paid tiers for reliability and support.

**Q: How do I add more documents?**
A: Add markdown files to `docs/`, run `python ingest.py`, and they're automatically indexed.

## 🆘 Support

- **Streamlit Issues**: [docs.streamlit.io](https://docs.streamlit.io)
- **Groq Support**: [console.groq.com](https://console.groq.com) help
- **Pinecone Docs**: [docs.pinecone.io](https://docs.pinecone.io)
- **Hugging Face Help**: [huggingface.co/docs](https://huggingface.co/docs)

---

**Created**: May 28, 2026
**Status**: Production Ready (Free Tier)
