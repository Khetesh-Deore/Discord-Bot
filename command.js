import { config } from "dotenv";
config(); // Load .env variables

import { REST, Routes } from "discord.js";

const commands = [
  {
    name: "ping",
    description: "Replies with Pong!",
  },
];

const rest = new REST({ version: "10" }).setToken(
  process.env.DISCORD_BOT_TOKEN
);


try {
	console.log('Started refreshing application (/) commands.');
  
	await rest.put(Routes.applicationCommands('1369607749825986620'), { body: commands });
  
	console.log('Successfully reloaded application (/) commands.');
  } catch (error) {
	console.error(error);
  }