# RealBe

A bot to ping users at random intervals each day on discord.

## Install

This project requires node v22.10 or later and recommends the use of [PM2](https://pm2.keymetrics.io/docs/usage/quick-start/) to manage processes.

```
$ git clone ${gitHubURL} && cd realbe && npm i
```

## Usage

1. Create and configure `config.json` in the base directory
2. Call `pm2 discord-bot.js` and use `pm2 list` to view the process later


**Example config:**

```
{
	"token": "your-application-token-goes-here",
	"roleId": "role-id-goes-here",
	"channelId": "channel-id-goes-here",
    "schedulerTime": 3,
	"popTime": {
		"min": 6,
		"max": 9
	}
}
```

- **token (string)** – Bot application secret token.
- **roleId (string)** – Discord ID of @role to be mentioned.
- **channelId (string)** – Discord ID of #channel to post in.
- **schedulerTime (integer)** – Time (24h) when the script loads to generate the pop time.
- **popTime (integer)** – Time (24h) minimum/maximum bounds for pop time.
