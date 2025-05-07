import { config } from "dotenv";
config(); 

import { Client, GatewayIntentBits, Events, SlashCommandBuilder, REST, Routes } from "discord.js";
import { GoogleGenerativeAI } from "@google/generative-ai";


const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// Create Discord client
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

// Register slash commands
const commands = [
  new SlashCommandBuilder()
    .setName("ping")
    .setDescription("Replies with Pong!"),
  new SlashCommandBuilder()
    .setName("ask")
    .setDescription("Ask a question to Gemini")
    .addStringOption(option =>
      option.setName("prompt")
        .setDescription("Your question or prompt")
        .setRequired(true)),
].map(cmd => cmd.toJSON());

// Register commands with Discord API
const rest = new REST({ version: "10" }).setToken(process.env.DISCORD_BOT_TOKEN);
(async () => {
  try {
    console.log(" Refreshing application (/) commands...");
    await rest.put(Routes.applicationCommands("1369607749825986620"), {
      body: commands,
    });
    console.log(" Slash commands registered.");
  } catch (error) {
    console.error(" Error registering commands:", error);
  }
})();

// Bot ready event
client.once(Events.ClientReady, (c) => {
  console.log(`🤖 Bot is online as ${c.user.tag}`);
});

// Handle slash commands
client.on(Events.InteractionCreate, async (interaction) => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === "ping") {
    await interaction.reply(" Pong!");
  }

  if (interaction.commandName === "ask") {
	const userPrompt = interaction.options.getString("prompt");
	await interaction.deferReply();
  
	try {
	  const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });
  
	  const result = await model.generateContent(
		`You are a concise assistant. Please keep your entire reply under 2000 characters.\n\nUser: ${userPrompt}`
	  );
  
	  const response = await result.response;
	  const text = response.text();
  
	  await interaction.editReply(text || "🤖 No response.");
	} catch (err) {
	  console.error("Gemini error:", err);
	  await interaction.editReply("❌ Failed to get response from Gemini.");
	}
  }
  
});

// Handle regular messages
client.on("messageCreate", async (message) => {
  if (message.author.bot) return;

  console.log(`${message.author.tag}: ${message.content}`);

  await message.reply({
    content: "👋 Hi from the bot!",
  });
});


client.login(process.env.DISCORD_BOT_TOKEN);
