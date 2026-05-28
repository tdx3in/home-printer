# Home Printer Documentation

A comprehensive Docusaurus-based documentation site with an integrated AI-powered chatbot.

## 🚀 Features

- ✅ **Static Site**: Docusaurus generates fast, SEO-optimized static HTML
- ✅ **AI Chatbot**: RAG (Retrieval-Augmented Generation) chatbot using free cloud services
- ✅ **Zero Cost**: Uses only free tiers (Streamlit, Groq, Pinecone, Hugging Face)
- ✅ **Responsive Design**: Works on desktop, tablet, and mobile
- ✅ **Dark Mode**: Built-in light/dark theme toggle
- ✅ **Search Friendly**: Full-text search across documentation
- ✅ **GitHub Pages**: Direct deployment from GitHub

## 🏗️ Project Structure

```
home-printer-docs/
├── docs/                          # Markdown documentation
│   ├── index.md
│   ├── basics.md
│   ├── features.md
│   ├── install-configure.md
│   ├── settings-reference.md
│   ├── maintenance.md
│   └── troubleshooting.md
├── chatbot/                       # AI Chatbot (Streamlit)
│   ├── app.py                    # Main chatbot application
│   ├── ingest.py                 # Document ingestion script
│   ├── requirements.txt           # Python dependencies
│   ├── .env.example              # Environment variables template
│   └── README.md                 # Chatbot setup guide
├── src/
│   ├── components/
│   │   └── ChatWidget/           # Floating chat widget
│   │       ├── index.js
│   │       └── styles.module.css
│   ├── pages/
│   │   └── chatbot.js            # Dedicated chatbot page
│   ├── css/
│   │   └── custom.css
│   └── theme/
│       └── Root.js               # Global layout wrapper
├── static/img/                   # Logos and images
├── docusaurus.config.js          # Site configuration
├── sidebars.js                   # Navigation structure
├── package.json                  # Node.js dependencies
├── RAG_QUICKSTART.md             # 5-step chatbot setup
├── RAG_SETUP_GUIDE.md            # Comprehensive chatbot guide
├── INTEGRATION_GUIDE.md          # Chatbot integration docs
├── DEPLOYMENT.md                 # GitHub Pages deployment
├── INSTALL.md                    # Local setup guide
├── CONTRIBUTING.md               # Contribution guidelines
└── README.md                     # This file
```

## 🚀 Quick Start

### 1. Documentation Site

#### Local Development
```bash
npm install
npm start
```
Visit `http://localhost:3000/home-printer-docs/`

#### Build for Production
```bash
npm run build
npm run serve
```

#### Deploy to GitHub Pages
```bash
git push origin main
# GitHub Actions automatically builds and deploys
```

### 2. AI Chatbot

#### Quick Setup (30 minutes)
```bash
cd chatbot
cp .env.example .env
# Add your API keys to .env

pip install -r requirements.txt
python ingest.py
```

Then deploy to Streamlit Cloud and integrate with Docusaurus.

👉 **See [RAG_QUICKSTART.md](./RAG_QUICKSTART.md) for full instructions**

## 📚 Documentation

| Guide | Purpose |
| --- | --- |
| [INSTALL.md](./INSTALL.md) | Local development setup |
| [DEPLOYMENT.md](./DEPLOYMENT.md) | Deploy documentation to GitHub Pages |
| [RAG_QUICKSTART.md](./RAG_QUICKSTART.md) | Quick start for AI chatbot (30 min) |
| [RAG_SETUP_GUIDE.md](./RAG_SETUP_GUIDE.md) | Comprehensive chatbot setup |
| [INTEGRATION_GUIDE.md](./INTEGRATION_GUIDE.md) | Integrate chatbot into Docusaurus |
| [CONTRIBUTING.md](./CONTRIBUTING.md) | Contribute to documentation |
| [chatbot/README.md](./chatbot/README.md) | Chatbot development guide |

## 🤖 AI Chatbot Features

The integrated RAG chatbot:
- **Retrieves** relevant documentation using semantic search
- **Generates** context-aware responses using Groq LLM
- **Embeds** documents with Hugging Face
- **Stores** vectors in Pinecone cloud database
- **Hosts** on Streamlit Community Cloud
- **Appears** as a floating widget on all pages

### Stack
- 🦙 **Groq**: Fast LLM inference (free tier)
- 📌 **Pinecone**: Vector database (free tier)
- 🧠 **Hugging Face**: Embeddings (free tier)
- 🎨 **Streamlit**: UI hosting (free tier)
- 💬 **React Widget**: Integrated into Docusaurus

### Cost
**$0/month** - Everything uses generous free tiers

## 🌐 Deployment

### Documentation Site
- **Host**: GitHub Pages
- **Cost**: Free
- **Setup**: Push to `main` branch
- **URL**: `https://YOUR_USERNAME.github.io/home-printer-docs/`

### AI Chatbot
- **Host**: Streamlit Community Cloud
- **Cost**: Free
- **Setup**: 5 minutes
- **URL**: `https://YOUR_USERNAME-chatbot.streamlit.app`

## 🔒 Security

- ✅ API keys stored in Streamlit Secrets (not in code)
- ✅ Environment variables for local development
- ✅ `.env` file excluded from Git
- ✅ Public documentation (no sensitive data)

## 🎓 Learning Resources

- [Docusaurus Documentation](https://docusaurus.io/docs)
- [Streamlit Docs](https://docs.streamlit.io)
- [Groq API Guide](https://console.groq.com/docs)
- [Pinecone Vector DB](https://docs.pinecone.io)
- [Hugging Face API](https://huggingface.co/docs/api)

## 🤝 Contributing

We welcome contributions! See [CONTRIBUTING.md](./CONTRIBUTING.md) for guidelines.

## 📋 Todo List

- [ ] Set up free API keys (Groq, Pinecone, Hugging Face)
- [ ] Customize documentation with your content
- [ ] Deploy documentation to GitHub Pages
- [ ] Deploy chatbot to Streamlit Cloud
- [ ] Configure chatbot Streamlit URL in widget
- [ ] Test AI chatbot integration
- [ ] Monitor free tier usage

## 🆘 Troubleshooting

### Documentation Issues
- See [INSTALL.md](./INSTALL.md) for setup problems
- See [DEPLOYMENT.md](./DEPLOYMENT.md) for deployment issues

### Chatbot Issues
- See [RAG_SETUP_GUIDE.md](./RAG_SETUP_GUIDE.md) for setup help
- See [INTEGRATION_GUIDE.md](./INTEGRATION_GUIDE.md) for widget issues
- See [chatbot/README.md](./chatbot/README.md) for development

## 📞 Support

- 📖 Check the relevant guide above
- 🐛 Open a GitHub issue
- 💬 Ask in our discussions
- 📧 Check service documentation (links above)

## 📄 License

This documentation project is provided as-is. See included documentation for terms.

## ✨ What's Included

### Out of the Box
- ✅ Complete documentation site (Docusaurus)
- ✅ 7 documentation pages (home printer guides)
- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Dark mode support
- ✅ GitHub Pages automation
- ✅ Floating chat widget component
- ✅ Dedicated chatbot page template
- ✅ Global layout wrapper (Root.js)

### To Complete (Free)
- ⏳ Deploy documentation to GitHub Pages (1 click)
- ⏳ Create free API keys (15 minutes)
- ⏳ Deploy chatbot to Streamlit (5 minutes)
- ⏳ Configure chatbot widget URL (2 minutes)

**Total time to production: ~1 hour**

---

**Created**: May 28, 2026  
**Status**: Production Ready  
**Cost**: $0/month
