import { config } from "dotenv";
config(); 

import { REST, Routes, SlashCommandBuilder } from "discord.js";

// Define slash commands
const commands = [
  new SlashCommandBuilder()
    .setName("ping")
    .setDescription("Replies with Pong!"),

  new SlashCommandBuilder()
    .setName("ask")
    .setDescription("Ask the AI anything.")
    .addStringOption(option =>
      option.setName("prompt")
        .setDescription("Your question or prompt for the AI")
        .setRequired(true)
    ),
].map(command => command.toJSON());

// Set up Discord REST API client
const rest = new REST({ version: "10" }).setToken(process.env.DISCORD_BOT_TOKEN);

// Register the commands with Discord
(async () => {
  try {
    console.log(" Registering slash commands...");
    await rest.put(
      Routes.applicationCommands(process.env.CLIENT_ID),
      { body: commands }
    );
    console.log("✅ Slash commands registered successfully.");
  } catch (error) {
    console.error("❌ Error registering commands:", error);
  }
})();
