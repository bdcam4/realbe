# RealBe

A bot to ping users at random intervals each day on discord.

**Usage:**

1. Call `node discord-bot.js` to start the bot.

**Installation:**

1. Clone the repo and npm install `git clone ${gitHubURL} && cd realbe && npm i`
2. Create and configure `config.json` in the base directory

**Example config:**

```
{
	"token": "your-application-token-goes-here",
	"roleId": role-id-goes-here,
	"channelId": channel-id-goes-here,
    "schedulerTime": 3,
	"popTime": {
		"min": 6,
		"max": 9
	}
}
```

- **token (string)** – Bot application secret token.
- **roleId (integer)** – Discord ID of @role to be mentioned.
- **channelId (integer)** – Discord ID of #channel to post in.
- **schedulerTime (integer)** – Time (24h) when the script loads to generate the pop time.
- **popTime (integer)** – Time (24h) minimum/maximum bounds for pop time.
