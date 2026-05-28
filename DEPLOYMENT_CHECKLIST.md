# Deployment Checklist

Complete checklist for taking your documentation + chatbot live.

---

## Phase 1: GitHub Repository Setup

- [ ] **Create GitHub repository**
  - Name: `home-printer-docs`
  - Visibility: Public (required for Streamlit Cloud)
  - Do NOT initialize with files (you have them locally)

- [ ] **Configure local Git**
  ```bash
  cd c:\tdx3\AI_Content
  git init
  git add .
  git commit -m "Initial commit: Documentation + RAG chatbot"
  git remote add origin https://github.com/YOUR_USERNAME/home-printer-docs.git
  git branch -M main
  git push -u origin main
  ```

- [ ] **Verify on GitHub**
  - All files visible on GitHub web interface
  - `.env` files are NOT pushed (check in chatbot directory)

---

## Phase 2: Get Free API Keys

### Groq LLM
- [ ] Visit https://console.groq.com
- [ ] Sign up or login
- [ ] Navigate to API Keys
- [ ] Create new key
- [ ] Copy key: `gsk_...`
- [ ] Save securely (needed for Streamlit deployment)

### Pinecone Vector Database
- [ ] Visit https://app.pinecone.io
- [ ] Sign up or login
- [ ] Create new project (Free tier)
- [ ] Create index:
  - Name: `home-printer-docs`
  - Dimension: `384`
  - Metric: `cosine`
- [ ] Go to API Keys
- [ ] Copy API key: `pcn_...`
- [ ] Note index name and environment
- [ ] Save securely

### Hugging Face
- [ ] Visit https://huggingface.co
- [ ] Sign up or login
- [ ] Go to Settings → Access Tokens
- [ ] Create token (read permission)
- [ ] Copy token: `hf_...`
- [ ] Save securely

---

## Phase 3: Document Ingestion (Local)

- [ ] **Prepare environment**
  ```bash
  cd c:\tdx3\AI_Content\chatbot
  ```

- [ ] **Create `.env` file**
  ```bash
  cp .env.example .env
  # Edit .env and add your 3 API keys
  ```

- [ ] **Verify `.env` file**
  - [ ] GROQ_API_KEY set
  - [ ] PINECONE_API_KEY set
  - [ ] PINECONE_INDEX = home-printer-docs
  - [ ] HUGGINGFACE_API_KEY set
  - [ ] `.env` in `.gitignore` (check it's not staged)

- [ ] **Install dependencies**
  ```bash
  pip install -r requirements.txt
  ```

- [ ] **Run ingestion script**
  ```bash
  python ingest.py
  ```
  Expected output:
  - "Loaded X markdown files"
  - Progress bar for embeddings
  - "Successfully uploaded X vectors to Pinecone"

- [ ] **Verify in Pinecone dashboard**
  - Go to https://app.pinecone.io
  - Open your index
  - See vector count increase

---

## Phase 4: Deploy Chatbot to Streamlit Cloud

- [ ] **Push changes to GitHub**
  ```bash
  cd c:\tdx3\AI_Content
  git add .
  git commit -m "Add chatbot configuration"
  git push origin main
  ```

- [ ] **Create Streamlit repository** (if separate)
  OR ensure `chatbot/` files are in main repo

- [ ] **Deploy via Streamlit Cloud**
  - Visit https://share.streamlit.io
  - Click "New app"
  - Select:
    - Repository: `YOUR_USERNAME/home-printer-docs`
    - Branch: `main`
    - Main file path: `chatbot/app.py`
  - Click Deploy

- [ ] **Wait for deployment**
  - Takes 2-5 minutes
  - You'll see a live URL like: `https://xxxxx-home-printer-rag-chatbot-xxxxx.streamlit.app`

- [ ] **Add Streamlit Secrets**
  - Once deployed, click app menu (☰)
  - Select Settings
  - Go to Secrets
  - Paste (in TOML format):
    ```toml
    GROQ_API_KEY = "gsk_..."
    PINECONE_API_KEY = "pcn_..."
    PINECONE_INDEX = "home-printer-docs"
    HUGGINGFACE_API_KEY = "hf_..."
    DEBUG_MODE = false
    ```
  - Click Save
  - App will rerun

- [ ] **Test chatbot directly**
  - Visit your Streamlit URL
  - Ask a question: "How do I install a printer?"
  - Verify you get a response

- [ ] **Note your Streamlit URL**
  - Example: `https://myapp-chatbot-abcdef.streamlit.app`
  - You'll need this for Docusaurus integration

---

## Phase 5: Update Docusaurus with Chatbot URL

- [ ] **Edit ChatWidget component**
  - File: `src/components/ChatWidget/index.js`
  - Line 7: Replace `'https://your-streamlit-app-url.streamlit.app?embed=true'`
  - With your actual Streamlit URL + `?embed=true`
  - Example: `'https://myapp-chatbot-abcdef.streamlit.app?embed=true'`

- [ ] **Edit dedicated chatbot page** (optional)
  - File: `src/pages/chatbot.js`
  - Line 12: Update same URL

- [ ] **Rebuild documentation**
  ```bash
  npm run build
  ```
  - Should complete without errors
  - Creates `/build` directory

- [ ] **Test locally**
  ```bash
  npm run serve
  ```
  - Visit http://localhost:3000/home-printer-docs/
  - Look for 💬 button in bottom-right
  - Click and verify iframe loads

- [ ] **Push changes to GitHub**
  ```bash
  git add .
  git commit -m "Integrate RAG chatbot widget"
  git push origin main
  ```

---

## Phase 6: Enable GitHub Pages

- [ ] **Go to repository Settings**
  - https://github.com/YOUR_USERNAME/home-printer-docs/settings

- [ ] **Navigate to Pages**
  - Left sidebar → Pages

- [ ] **Configure deployment**
  - Source: "Deploy from a branch"
  - Branch: `gh-pages`
  - Folder: `/ (root)`
  - Click Save

- [ ] **GitHub Actions workflow runs**
  - Go to Actions tab
  - Wait for workflow to complete
  - Should take 2-5 minutes

- [ ] **Verify deployment**
  - Your site URL: `https://YOUR_USERNAME.github.io/home-printer-docs/`
  - Check that it's live and loading

---

## Phase 7: Final Verification

### Documentation Site
- [ ] Can access main site
- [ ] Navigation sidebar works
- [ ] Can navigate to all 7 pages
- [ ] Dark/light mode toggle works
- [ ] Mobile responsive (check on phone)
- [ ] No 404 errors in console

### Chat Widget
- [ ] 💬 button visible bottom-right
- [ ] Can click to open chat
- [ ] Streamlit app loads in iframe
- [ ] Can type questions
- [ ] Gets responses from chatbot
- [ ] Can close and reopen

### Direct Chatbot URL
- [ ] Can visit Streamlit app directly
- [ ] Sidebar works
- [ ] Chat history preserved
- [ ] Debug info shown (if DEBUG_MODE=true)

---

## Phase 8: Post-Deployment

- [ ] **Test in production**
  - Ask various questions
  - Check response quality
  - Monitor Streamlit logs

- [ ] **Monitor free tier usage**
  - Groq: https://console.groq.com → Usage
  - Pinecone: https://app.pinecone.io → Metrics
  - Hugging Face: https://huggingface.co/account

- [ ] **Set up monitoring**
  - Save important URLs
  - Set reminders to check quota

- [ ] **Document your URLs**
  - Main site: `https://YOUR_USERNAME.github.io/home-printer-docs/`
  - Chatbot app: `https://your-streamlit-url.streamlit.app`
  - GitHub repo: `https://github.com/YOUR_USERNAME/home-printer-docs`

- [ ] **Share with others**
  - Documentation is live and public
  - Can share the URL
  - Chatbot is integrated and working

---

## Phase 9: Future Updates

### Update Documentation
```bash
# Edit docs/*.md files
npm start  # Test locally
npm run build
git push origin main  # GitHub Actions deploys
```

### Update Chatbot
```bash
# Edit docs/ files
cd chatbot
python ingest.py  # Re-upload to Pinecone
git push origin main  # Streamlit auto-redeploys
```

### Update Chatbot Code
```bash
# Edit chatbot/app.py
git push origin main  # Streamlit auto-redeploys
```

---

## 🎉 Success Criteria

You're done when:

- ✅ Documentation site is live at GitHub Pages URL
- ✅ Chat widget appears on all documentation pages
- ✅ 💬 button opens Streamlit chat interface
- ✅ Can ask questions and get responses
- ✅ Dark mode works
- ✅ Mobile friendly
- ✅ No errors in console
- ✅ API keys are secure (not in code)

---

## ⏱️ Timeline

| Phase | Task | Time |
| --- | --- | --- |
| 1 | GitHub setup | 5 min |
| 2 | Get API keys | 15 min |
| 3 | Ingest documents | 15 min |
| 4 | Deploy chatbot | 10 min |
| 5 | Update Docusaurus | 5 min |
| 6 | Enable GitHub Pages | 5 min |
| 7 | Verify everything | 10 min |
| **TOTAL** | **ALL PHASES** | **~65 min** |

---

## 💰 Cost Verification

After deployment, verify you're on free tiers:

- [ ] **Groq Console**: Shows 0 cost, thousands of free requests
- [ ] **Pinecone Dashboard**: Shows free tier quota remaining
- [ ] **Hugging Face**: Shows usage within 30k/month
- [ ] **Streamlit**: Shows green "free" badge on app
- [ ] **GitHub Pages**: Zero cost

**Total Monthly Cost: $0**

---

## 🆘 If Something Goes Wrong

### Site not deploying
- [ ] Check GitHub Actions logs
- [ ] Verify branch is `main`
- [ ] Check no build errors: `npm run build`

### Chat widget not appearing
- [ ] Check browser console for errors
- [ ] Verify Streamlit URL is correct
- [ ] Try hard refresh (Ctrl+Shift+R)
- [ ] Check if URL is public/accessible

### Chatbot not responding
- [ ] Verify API keys in Streamlit Secrets
- [ ] Check Streamlit app logs
- [ ] Verify Pinecone vectors uploaded
- [ ] Test direct Streamlit URL first

### API errors
- [ ] Verify `.env` file exists locally
- [ ] Verify Streamlit Secrets are set
- [ ] Check API key format is correct
- [ ] Ensure API keys are still valid

---

## ✅ Before Going Live

Last checks:

- [ ] No API keys in `.gitignore` violations
- [ ] `.env` file is in `.gitignore`
- [ ] All tests pass locally
- [ ] No console errors
- [ ] All links work
- [ ] Chat responses are accurate
- [ ] Dark/light mode works
- [ ] Mobile view is readable

---

## 🎊 Launch! 

Once all boxes are checked, you're ready to:
- Share the URL with others
- Integrate into other projects
- Scale up documentation
- Monitor and iterate

**Congratulations! You have a production-grade, zero-cost documentation site with AI chatbot!**

---

**Created**: May 28, 2026
**Last Updated**: May 28, 2026
