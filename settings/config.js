const fs = require('fs')
//~~~~~~~~~SETTING BOT~~~~~~~~~~//
global.owner = "923161407016" //ganti aja
global.nama = "_"
global.namaowner = "_" 
global.namaBot = "ᴜsᴍᴀɴ ᴄʜᴀᴄʜᴀʀ" 
global.ch = '_' 
global.ownername = "_" 
global.botname = "ᴜsᴍᴀɴ ᴄʜᴀᴄʜᴀʀ" 
global.status = true 
global.foother = "©Usman" 
global.namach = 'us mods 2022-2025 ' 
global.idch = '_' // diemin kalau gda
global.namafile = 'us mods 2022-2025' 
global.yt = '_' 
global.themeemoji = '🌼' 
global.packname = "sᴛɪᴄᴋᴇʀ ʙʏ" 
global.author = "\n\n\n\n\nᴄʀᴇᴀᴛᴇ \nᴜsᴍᴀɴ : ᴄʜᴀᴄʜᴀʀ" 
global.creator = "923161407016@s.whatsapp.net" 
global.welcome = false
global.autoswview = true //auto status/story view
global.delayPushkontak = 7500
//~~~~~~~~~ Settings Payment ~~~~~~~~~//
global.dana = "923161407016" 
global.ovo = "Tidak Tersedia" 
global.qris = "https://i.ibb.co/d0XZLt4K/IMG-20250511-002924-317.jpg" 
//====== [ THEME URL & URL ] ========//
global.thumb = fs.readFileSync('./makima.jpg'); // Buffer Image
global.thumbfurina = 'https://i.ibb.co/d0XZLt4K/IMG-20250511-002924-317.jpg'
global.thumbnail = 'https://i.ibb.co/d0XZLt4K/IMG-20250511-002924-317.jpg' 
global.reply = 'https://i.ibb.co/d0XZLt4K/IMG-20250511-002924-317.jpg'
global.Url = '-' //
global.logodana = "https://i.ibb.co/d0XZLt4K/IMG-20250511-002924-317.jpg",
global.logoovo = "https://i.ibb.co/d0XZLt4K/IMG-20250511-002924-317.jpg",
//===================== Setting Apikey V1 =========================//
global.domain = 'domain'
global.apikey = 'plta'
global.capikey = 'pltc'
//===================== Setting Apikey V2 =========================//
global.domain2 = "domain"
global.apikey2 = "plta"
global.capikey2 = "pltc"
//===================== Setting Apikey V3 =========================//
global.domain3 = "https://kenzstore-mujib.zackyoffc.xyz"
global.apikey3 = "ptla_h51ID3CRoGZxwAMA2OAQXSDZ5xUoGGXSBICCEICV8dM"
global.capikey3 = "ptlc_9H4b9yPFtunO8K17xcZzn1wHThwvoO9oyEW3LwIJN4I"
//===================== BIARIN!!!! =========================//
global.eggsnya = '15' // id eggs yang dipakai
global.location = '1' // id location

// jpm ch isi id nya
global.jpmch1 = "923161407016@newsletter"
global.jpmch150 = ""
//~~~~~~~~~ Settings reply ~~~~~~~~~//
global.mess = {
    owner: "𝘛𝘏𝘐𝘚 𝘐𝘚 𝘍𝘖𝘙 𝘖𝘞𝘕𝘌𝘙, 𝘕𝘖𝘛 𝘍𝘖𝘙 𝘠𝘖𝘜 🦋",
    prem: "𝘛𝘏𝘐𝘚 𝘐𝘚 𝘍𝘖𝘙 𝘗𝘙𝘌𝘔𝘐𝘜𝘔, 𝘕𝘖𝘛 𝘍𝘖𝘙 𝘠𝘖𝘜 🦋",
    group: "𝘛𝘏𝘐𝘚 𝘐𝘚 𝘍𝘖𝘙 𝘎𝘙𝘖𝘜𝘗 𝘖𝘕𝘓𝘠🦋",
    private: "𝘖𝘕𝘓𝘠 𝘗𝘙𝘐𝘝𝘈𝘛𝘌 𝘊𝘏𝘈𝘛 🦋"
}


global.packname = 'ᴜsᴍᴀɴ ᴄʜᴀᴄʜᴀʀ' 
global.author = '\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n@ᴜsᴍᴀɴ ᴄʜᴀᴄʜᴀʀ'
//~~~~~~~~~~~ DIEMIN ~~~~~~~~~~//
global.pairing = "ᴜsᴍᴀɴ ᴄʜᴀᴄʜᴀʀ" // Jangan Di Apa Apain
global.qrcode = "120363417769859412@newsletter" // Jangan Di Apa Apain

let file = require.resolve(__filename)
require('fs').watchFile(file, () => {
  require('fs').unwatchFile(file)
  console.log('\x1b[0;32m'+__filename+' \x1b[1;32mupdated!\x1b[0m')
  delete require.cache[file]
  require(file)
})
