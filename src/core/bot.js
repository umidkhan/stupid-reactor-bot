const { Telegraf } = require("telegraf");
require("dotenv").config();

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.start(async ctx => {
    ctx.reply(`Welcome to the bot, stupid <a href="tg://user?id=${ctx.from.id}" >${ctx.from.first_name}</a> 😜`, {
        reply_to_message_id: ctx.message.message_id,
        parse_mode: "HTML"
    })
});

bot.on("channel_post", ctx => {
    if (ctx.channelPost) {
        return null;
    }
})

bot.on("text", async ctx => {
    if (ctx.msg.text.includes("⚡️")) {
        await ctx.react("⚡️")
    } else if (ctx.msg.text.includes("🔥")) {
        await ctx.react("🔥")
    } else if (ctx.msg.text.includes("💯")) {
        await ctx.react("💯")
    } else if (ctx.msg.text.includes("stupid")) {
        await ctx.reply(`No, you're stupid <a href="tg://user?id=${ctx.from.id}" >${ctx.from.first_name}</a> 😁`, {
            reply_to_message_id: ctx.message.message_id,
            parse_mode: "HTML"
        })
    } else if (ctx.msg.text.includes("idiot")) {
        await ctx.reply(`No, you're idiot <a href="tg://user?id=${ctx.from.id}" >${ctx.from.first_name}</a> 😁`, {
            reply_to_message_id: ctx.message.message_id,
            parse_mode: "HTML"
        })
    } else if (ctx.msg.text.includes("snow")) {
        await ctx.reply(`Do you like a snow? 😁`, {
            reply_to_message_id: ctx.message.message_id,
            parse_mode: "HTML"
        })
    }
    else {
        await ctx.react("❤️")
    }
})

bot.on("message", async ctx => {
    await ctx.react("❤️")
})


bot.catch(err => {
    console.error(err);
})

bot.launch(() => {
    console.log("-! Bot started !-")
})

module.exports = bot;