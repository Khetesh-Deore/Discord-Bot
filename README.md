

# 🤖 Discord Gemini AI Bot

This project is a **Discord bot** that integrates with **Google Gemini AI** to provide intelligent, concise responses to your queries using slash commands like `/ask`. It's built using **Node.js**, **Discord.js v14**, and **@google/generative-ai**.

---

## 🌟 Features

- `/ping` - Check if the bot is active.
- `/ask` - Ask any question and get a smart reply (under 2000 characters) powered by Gemini AI.
- Auto-reply to messages with a greeting.
- Structured with environment variables for secure API management.

---

## 🛠️ Prerequisites

- [Node.js](https://nodejs.org/) (v18+ recommended)
- A [Discord Developer Portal](https://discord.com/developers/applications) account
- A Google Cloud account with access to Gemini API

---

## 📁 Project Structure

```

discord-gemini-bot/
├── index.js           # Main bot logic
├── command.js         # Slash command registration
├── .env               # Environment variables (tokens and keys)
├── package.json       # Dependencies and scripts

````

---

## 🚀 How to Setup & Run

### 1. Clone the Repository

```bash
git clone https://github.com/Khetesh-Deore/Discord-Bot.git
cd discord-bot
````

### 2. Install Dependencies

```bash
npm install
```

### 3. Create a `.env` File

Create a `.env` file in the root with the following content:

```
DISCORD_BOT_TOKEN=your_discord_bot_token
CLIENT_ID=your_discord_client_id
GEMINI_API_KEY=your_google_gemini_api_key
```

> Replace the values above with your actual keys.

---

## 🔑 How to Get Tokens

### ✅ Get Discord Bot Token & Client ID

1. Go to [Discord Developer Portal](https://discord.com/developers/applications)
2. Click **"New Application"**
3. Go to **"Bot" > Add Bot**
4. Enable **Message Content Intent** under Privileged Gateway Intents
5. Copy the **Token** and **Client ID**
6. Under **OAuth2 > URL Generator**, check `bot` + `applications.commands`, generate the URL and invite the bot to your server

### ✅ Get Gemini API Key

1. Visit: [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Sign in with your Google account
3. Click "Create API Key"
4. Copy and paste the key into `.env` as `GEMINI_API_KEY`

---

## 📦 Register Slash Commands

Run this to register commands:

```bash
node command.js
```

---

## ▶️ Start the Bot

```bash
npm run start
```

> You should see logs like:
> `🤖 Bot is online as YourBot#1234`

---

## 💬 How to Use

Once the bot is online in your server:

* `/ping` → Returns "Pong!"
* `/ask [your question]` → Get a concise reply from Gemini AI

Example:

```
/ask What is quantum computing?
```

---

## 📌 Application

* Create interactive AI assistants in Discord servers
* Use in student, dev, or productivity communities
* Easily extend to support summarization, coding help, or chatbot features

---

## 🧠 Tech Stack

* **Node.js**
* **Discord.js v14**
* **@google/generative-ai**
* **dotenv**
* **nodemon** (dev)

---

## 📎 License

This project is open-sourced for learning and personal use.

---

## 🙌 Contributions

PRs are welcome! Feel free to suggest improvements or new features.



