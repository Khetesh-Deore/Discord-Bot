import { config } from "dotenv";
config(); // Load .env variables

import { Client, GatewayIntentBits, Events } from "discord.js";

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

// Log when bot is ready
client.once(Events.ClientReady, (c) => {
  console.log(`✅ Bot is ready as ${c.user.tag}`);
});

// Handle slash commands like /ping
client.on(Events.InteractionCreate, async (interaction) => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === "ping") {
    await interaction.reply("🏓 Pong!");
  }
});

// Handle normal messages (text-based, like "hello")
client.on("messageCreate", async (message) => {
  if (message.author.bot) return;

  console.log(`${message.author.tag}: ${message.content}`);

  await message.reply({
    content: "👋 Hi from the bot!",
  });
});

// Login with your bot token
client.login(process.env.DISCORD_BOT_TOKEN);
