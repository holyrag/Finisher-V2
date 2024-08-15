//Bot by ᕼOᒪYᖇᗩGE ᙭ ITᗩᑕᕼI//


require("./all/module")
global.owner = "2348144723858" 
global.namaCreator = "RAGE x ITACHI MD"
global.autoJoin = false 
global.antilink = false 
global.versisc = '6.𝟏' 
global.codeInvite = "https://whatsapp.com/channel/0029VaaqaSp0LKZDuwe5SI3e"
global.isLink = 'https://whatsapp.com/channel/0029VafgKHuDjiOa7y21kq37'
global.sessionName = 'session'
global.thumb = fs.readFileSync("./thumb.png") 
global.audionya = fs.readFileSync("./all/sound.mp3") 
global.packname = "RAGE MD" 
global.author = "ᠻ꠸ꪀ꠸ᦓꫝꫀ᥅-ꪜᒿ" 
global.jumlah = "5" 
global.namabot = "ᠻ꠸ꪀ꠸ᦓꫝꫀ᥅-ꪜᒿ" 
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
