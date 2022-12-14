const { bot, textToStylist, fontType, stylishTextGen } = require('../lib')
bot(
	{
		pattern: 'fancy ?(.*)',
		fromMe: true,
		desc: 'Creates fancy text from given text',
		type: 'misc',
	},
	async (message, match) => {
		if (!match || (!match && message.reply_message.text) || isNaN(match) || match < 1 || match > 47)
			return await message.sendMessage('Chooose font\n Ex: fancy 7')
		if (message.reply_message.text) {
			return await message.sendMessage(
				textToStylist(message.reply_message.text, fontType(match))
			)
		}
		return await message.sendMessage(stylishTextGen(match))
	}
)
