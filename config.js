const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "+254734869963";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '1'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_07_16_06_10_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDUyLFxuICAgICAgICAzNCxcbiAgICAgICAgMTY0LFxuICAgICAgICAxODUsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTU1LFxuICAgICAgICA3NCxcbiAgICAgICAgNzAsXG4gICAgICAgIDU4LFxuICAgICAgICAxNSxcbiAgICAgICAgNDIsXG4gICAgICAgIDg5LFxuICAgICAgICAzMCxcbiAgICAgICAgOSxcbiAgICAgICAgMjUwLFxuICAgICAgICAyMjksXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTMyLFxuICAgICAgICAxMTcsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTQwLFxuICAgICAgICAxNixcbiAgICAgICAgMzcsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTgxLFxuICAgICAgICAyMzQsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTg1LFxuICAgICAgICA3MCxcbiAgICAgICAgMTk3LFxuICAgICAgICA5NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0OSxcbiAgICAgICAgMTY3LFxuICAgICAgICA0MCxcbiAgICAgICAgMjUzLFxuICAgICAgICA1MyxcbiAgICAgICAgMTA3LFxuICAgICAgICAyMjIsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjUxLFxuICAgICAgICAxNTMsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNTEsXG4gICAgICAgIDkxLFxuICAgICAgICA2MyxcbiAgICAgICAgMTE5LFxuICAgICAgICAyMTYsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTUsXG4gICAgICAgIDc2LFxuICAgICAgICA3MixcbiAgICAgICAgMTYzLFxuICAgICAgICAwLFxuICAgICAgICA5LFxuICAgICAgICAzMCxcbiAgICAgICAgMTc0LFxuICAgICAgICAyMjgsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjQyLFxuICAgICAgICAxNTgsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjAxLFxuICAgICAgICA1NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgODcsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTIxLFxuICAgICAgICAxODgsXG4gICAgICAgIDQ4LFxuICAgICAgICAxNTAsXG4gICAgICAgIDcxLFxuICAgICAgICAxMTIsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNzEsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMzQsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTcwLFxuICAgICAgICAxMTQsXG4gICAgICAgIDIxNyxcbiAgICAgICAgODUsXG4gICAgICAgIDUyLFxuICAgICAgICA0NCxcbiAgICAgICAgMjMsXG4gICAgICAgIDg0LFxuICAgICAgICAxNTgsXG4gICAgICAgIDEzOCxcbiAgICAgICAgOTQsXG4gICAgICAgIDg2LFxuICAgICAgICAxMjcsXG4gICAgICAgIDQ2LFxuICAgICAgICA4MixcbiAgICAgICAgMTQzLFxuICAgICAgICA4OCxcbiAgICAgICAgMTA1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgwLFxuICAgICAgICAxNzIsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjI4LFxuICAgICAgICAxMzIsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMzgsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNzgsXG4gICAgICAgIDUsXG4gICAgICAgIDI5LFxuICAgICAgICA0NixcbiAgICAgICAgMCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMTMsXG4gICAgICAgIDUxLFxuICAgICAgICAyLFxuICAgICAgICAyMzQsXG4gICAgICAgIDEzOCxcbiAgICAgICAgNDUsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNzUsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTI5LFxuICAgICAgICAxODMsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTQzLFxuICAgICAgICAxMzAsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTcxLFxuICAgICAgICA2MCxcbiAgICAgICAgNDZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTgzLFxuICAgICAgICAyMTcsXG4gICAgICAgIDgyLFxuICAgICAgICAxMzMsXG4gICAgICAgIDU1LFxuICAgICAgICA3NCxcbiAgICAgICAgMTMzLFxuICAgICAgICAyMjQsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjM2LFxuICAgICAgICAyNDEsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjMzLFxuICAgICAgICA5OSxcbiAgICAgICAgNTUsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNTEsXG4gICAgICAgIDk2LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjAsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNzEsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTI3LFxuICAgICAgICAxNzgsXG4gICAgICAgIDUxLFxuICAgICAgICA3NSxcbiAgICAgICAgMTYxLFxuICAgICAgICAxMDlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzQsXG4gICAgICAgIDcyLFxuICAgICAgICA1NixcbiAgICAgICAgMjA3LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTY1LFxuICAgICAgICA5MyxcbiAgICAgICAgMzIsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTg1LFxuICAgICAgICAyMDcsXG4gICAgICAgIDU3LFxuICAgICAgICAxNzUsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTUwLFxuICAgICAgICA2MyxcbiAgICAgICAgMTc1LFxuICAgICAgICA5OCxcbiAgICAgICAgMTM1LFxuICAgICAgICA4MixcbiAgICAgICAgMTM4LFxuICAgICAgICA2NyxcbiAgICAgICAgNzIsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTE5LFxuICAgICAgICAyNDksXG4gICAgICAgIDgyLFxuICAgICAgICAzMSxcbiAgICAgICAgOTQsXG4gICAgICAgIDI2LFxuICAgICAgICAyNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDExN1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMSxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDEwN1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTMyLFxuICAgICAgICA5MyxcbiAgICAgICAgNjUsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjEwLFxuICAgICAgICAyMjEsXG4gICAgICAgIDgsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTg2LFxuICAgICAgICAyNTAsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTc2LFxuICAgICAgICAzMCxcbiAgICAgICAgNDEsXG4gICAgICAgIDE1LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjgsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMixcbiAgICAgICAgNzEsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTMwLFxuICAgICAgICAyMTYsXG4gICAgICAgIDE3MixcbiAgICAgICAgNzgsXG4gICAgICAgIDYsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNzgsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTUwLFxuICAgICAgICAyNTQsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjIsXG4gICAgICAgIDQwLFxuICAgICAgICAxOTUsXG4gICAgICAgIDksXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTUyLFxuICAgICAgICAxNjYsXG4gICAgICAgIDE3LFxuICAgICAgICAyNyxcbiAgICAgICAgMjMzLFxuICAgICAgICAxMSxcbiAgICAgICAgMjEsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjA4LFxuICAgICAgICAyNyxcbiAgICAgICAgMzcsXG4gICAgICAgIDkyLFxuICAgICAgICAzNixcbiAgICAgICAgNDAsXG4gICAgICAgIDc1LFxuICAgICAgICA1OCxcbiAgICAgICAgMTIwLFxuICAgICAgICAxNzEsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTEsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTExLFxuICAgICAgICA4MSxcbiAgICAgICAgMjAyLFxuICAgICAgICA2XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA5LFxuICBcImFkdlNlY3JldEtleVwiOiBcIlBJR2dScmN2TTJoLy9idWNORkUyeGowang0Z1c0YW5ZVW50NER2SWlZZUU9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjU0NzM0ODY5OTYzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIxRDUzOEVDMEM5QjIyQzdCMEZDNkQ1REE1NTAyQThDNlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTgwMDM3ODhcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyNTQ3MzQ4Njk5NjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjhCOUU1RjBEOTA2RkQ5RjM2OTM5RDcyRDVEQTBFMUY3XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxODAwMzc4OVxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjI1NDczNDg2OTk2M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiNzlGRDQ4NUI3MDlCN0RBODVDQTNBMUUxNzVCNDEwNjRcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzE4MDAzNzkyXG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIm5ldHRkbWRMU3lhS055Q2xJV0xSekFcIixcbiAgXCJwaG9uZUlkXCI6IFwiMWVkYThlNjYtYTgzZi00NWQxLWFhZGQtMmFkZWJkY2JmNTEzXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIzMSxcbiAgICAgIDI5LFxuICAgICAgMTc0LFxuICAgICAgNjIsXG4gICAgICA4MCxcbiAgICAgIDIwNCxcbiAgICAgIDIwMixcbiAgICAgIDcwLFxuICAgICAgMjksXG4gICAgICA0NCxcbiAgICAgIDE3LFxuICAgICAgMjUzLFxuICAgICAgMTE0LFxuICAgICAgMjM5LFxuICAgICAgNTksXG4gICAgICA0OSxcbiAgICAgIDI0MixcbiAgICAgIDIzMCxcbiAgICAgIDExNyxcbiAgICAgIDI0MlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNTAsXG4gICAgICAxNTksXG4gICAgICAxOTQsXG4gICAgICAxOTEsXG4gICAgICA3NSxcbiAgICAgIDU2LFxuICAgICAgMTE0LFxuICAgICAgMjQxLFxuICAgICAgMTI2LFxuICAgICAgMzksXG4gICAgICAyNSxcbiAgICAgIDIzMSxcbiAgICAgIDE3LFxuICAgICAgMjUwLFxuICAgICAgMTg0LFxuICAgICAgMTYsXG4gICAgICAyMzMsXG4gICAgICAxMDIsXG4gICAgICAxMjUsXG4gICAgICAxMFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCIzQ0pZQVE5VFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjU0NzM0ODY5OTYzOjRAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE2MjAyMzg0OTYxOTcwNzo0QGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIkJyaWFuXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDUGJpa05nREVNVFFtck1HR0FNZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJkanh6ZTc1ZlRXQXlVdUlmakJMc3ZjWSt4ZThud1pTbndXbnJHUmpTdFVJPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkZDV0ZpTzRjWUV4QmdidEdkWlIrSUdVallHZXNvWC9uWVdSK1FBUGs2MzB6Z3c4YU01RHNIWEpSMEN1UjBQem01VUNyZUpIbGVSaFhka2FOVldwOUJnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkVseGlkOERZNTVWRzJNSjNaK3ZBc2FJNGw0czlLUlV5U0NqV1Q1VUJqZTdhVExObkZlRy9jdXVWTDBMRGI1bDlMZEhjOU9UUGNwQWg1REJrZGg4QkN3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI1NDczNDg2OTk2Mzo0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDY2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTgwMDM3ODUsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFIVmtcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUhWay5qc29uIjogIntcImtleURhdGFcIjpcIkxsaWhrcFgwQ01NOUY1NVlVL1llb2g1bmI3a1FtekZKNEdtNEhlQkwwMTA9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6OTkwMTMwNTUwLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTgwMDA2MjM4MDlcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
