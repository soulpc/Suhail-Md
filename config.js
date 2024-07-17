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
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://Keerthy:Keerthy@cluster0.jiyojhk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ MALLU MOVIES" 


global.devs = "919747358233" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "919747358233 91 70122 32015";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "true"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "true" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "true"
global.readmessage = process.env.READ_MESSAGE || "true"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_07_33_07_17_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTI0LFxuICAgICAgICAxMDMsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjA4LFxuICAgICAgICAxODEsXG4gICAgICAgIDkzLFxuICAgICAgICA1MyxcbiAgICAgICAgMTE5LFxuICAgICAgICAxNTUsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMzcsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjM0LFxuICAgICAgICAxNjUsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNyxcbiAgICAgICAgNTAsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjE2LFxuICAgICAgICAyMzksXG4gICAgICAgIDE1MixcbiAgICAgICAgMjI2LFxuICAgICAgICAyLFxuICAgICAgICAyMDAsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTQyLFxuICAgICAgICAyNDgsXG4gICAgICAgIDY5LFxuICAgICAgICA0LFxuICAgICAgICA3OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTksXG4gICAgICAgIDE0OCxcbiAgICAgICAgNixcbiAgICAgICAgMTA0LFxuICAgICAgICAyNDcsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjExLFxuICAgICAgICAxMTYsXG4gICAgICAgIDIwNSxcbiAgICAgICAgOTksXG4gICAgICAgIDM5LFxuICAgICAgICA0MixcbiAgICAgICAgODMsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMzMsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMzQsXG4gICAgICAgIDExOSxcbiAgICAgICAgNjksXG4gICAgICAgIDEwOSxcbiAgICAgICAgNDgsXG4gICAgICAgIDcyLFxuICAgICAgICAyMixcbiAgICAgICAgNTIsXG4gICAgICAgIDMyLFxuICAgICAgICAxMDgsXG4gICAgICAgIDUsXG4gICAgICAgIDU3LFxuICAgICAgICAxMTIsXG4gICAgICAgIDQ2LFxuICAgICAgICA0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3MixcbiAgICAgICAgMTM3LFxuICAgICAgICA3NSxcbiAgICAgICAgMTQsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNSxcbiAgICAgICAgNSxcbiAgICAgICAgMTk0LFxuICAgICAgICAxMjQsXG4gICAgICAgIDYzLFxuICAgICAgICAyMTAsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTUsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNjIsXG4gICAgICAgIDksXG4gICAgICAgIDU0LFxuICAgICAgICAxODcsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTE0LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjIzLFxuICAgICAgICAxMixcbiAgICAgICAgMjQxLFxuICAgICAgICAxODksXG4gICAgICAgIDk4LFxuICAgICAgICAyOCxcbiAgICAgICAgMjI2LFxuICAgICAgICAxNDUsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTAxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDM3LFxuICAgICAgICAyMzQsXG4gICAgICAgIDU0LFxuICAgICAgICAyNTUsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTc1LFxuICAgICAgICAyMTYsXG4gICAgICAgIDEyMSxcbiAgICAgICAgOTgsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMzQsXG4gICAgICAgIDg5LFxuICAgICAgICAxMDEsXG4gICAgICAgIDU0LFxuICAgICAgICAyMTUsXG4gICAgICAgIDc5LFxuICAgICAgICA1OCxcbiAgICAgICAgNjIsXG4gICAgICAgIDMxLFxuICAgICAgICAyMyxcbiAgICAgICAgNTksXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTA2LFxuICAgICAgICAxNjMsXG4gICAgICAgIDQ0LFxuICAgICAgICAxNzEsXG4gICAgICAgIDEwMCxcbiAgICAgICAgNzAsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjQyLFxuICAgICAgICAxNzUsXG4gICAgICAgIDg0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODQsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTA3LFxuICAgICAgICA3MCxcbiAgICAgICAgMTE4LFxuICAgICAgICAyMzksXG4gICAgICAgIDE5NixcbiAgICAgICAgMTIxLFxuICAgICAgICAxNTAsXG4gICAgICAgIDE1OCxcbiAgICAgICAgOTcsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTQsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTkwLFxuICAgICAgICA5OCxcbiAgICAgICAgMTAzLFxuICAgICAgICAyMzIsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTQzLFxuICAgICAgICAyMzIsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMzQsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjMsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTg2LFxuICAgICAgICAyMTksXG4gICAgICAgIDI1MCxcbiAgICAgICAgODMsXG4gICAgICAgIDQzLFxuICAgICAgICAxMDhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMSxcbiAgICAgICAgMTM3LFxuICAgICAgICAxNzcsXG4gICAgICAgIDExMixcbiAgICAgICAgMTI4LFxuICAgICAgICAyMjgsXG4gICAgICAgIDk3LFxuICAgICAgICAxMTEsXG4gICAgICAgIDgwLFxuICAgICAgICAxMTAsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjIyLFxuICAgICAgICAxMjMsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMyxcbiAgICAgICAgNTksXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTgyLFxuICAgICAgICAxNDgsXG4gICAgICAgIDI5LFxuICAgICAgICAxODAsXG4gICAgICAgIDI3LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTgwLFxuICAgICAgICAxNzUsXG4gICAgICAgIDExNixcbiAgICAgICAgNjEsXG4gICAgICAgIDEyMixcbiAgICAgICAgNzQsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTA3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIxNixcbiAgICAgICAgICA5LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICA3LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTEyXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgNDFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDIsXG4gICAgICAgIDI0NCxcbiAgICAgICAgOCxcbiAgICAgICAgMTE4LFxuICAgICAgICAyMzYsXG4gICAgICAgIDE4LFxuICAgICAgICA2NixcbiAgICAgICAgMjAxLFxuICAgICAgICA5MSxcbiAgICAgICAgMTEzLFxuICAgICAgICA2OSxcbiAgICAgICAgMTQzLFxuICAgICAgICA2OCxcbiAgICAgICAgMjA5LFxuICAgICAgICA4OCxcbiAgICAgICAgMixcbiAgICAgICAgMTcsXG4gICAgICAgIDAsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjI3LFxuICAgICAgICAyNDAsXG4gICAgICAgIDI2LFxuICAgICAgICAxMjUsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjUyLFxuICAgICAgICAyMDgsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTY5LFxuICAgICAgICAyMTYsXG4gICAgICAgIDQ5LFxuICAgICAgICAxODQsXG4gICAgICAgIDg1LFxuICAgICAgICAyMzYsXG4gICAgICAgIDQsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMzYsXG4gICAgICAgIDQxLFxuICAgICAgICAyMjAsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTIzLFxuICAgICAgICAyMjEsXG4gICAgICAgIDIyNixcbiAgICAgICAgOCxcbiAgICAgICAgNDMsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjEsXG4gICAgICAgIDE2MSxcbiAgICAgICAgODksXG4gICAgICAgIDI0NixcbiAgICAgICAgNjksXG4gICAgICAgIDQwLFxuICAgICAgICA1MSxcbiAgICAgICAgMjYsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjQxLFxuICAgICAgICAzOCxcbiAgICAgICAgOTEsXG4gICAgICAgIDM2LFxuICAgICAgICAyMjEsXG4gICAgICAgIDg4LFxuICAgICAgICAxNDEsXG4gICAgICAgIDI5LFxuICAgICAgICAyXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA4OSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJzSlBqZjBxMTVmSkdJOTBxR29tdFU5U1FEdmxGb3hTd2FkZ2V2U3RBOTZNPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkxOTc0NzM1ODIzM0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiRDk4QkQ0QUVBNzRDNUE5QjkxNjI0MjBEODMxNzgwOUVcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIxMjAxNTg1XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImx1M1VkX2pBVG1HQWp0NGRNN1hNSUFcIixcbiAgXCJwaG9uZUlkXCI6IFwiOGQ1OTRlZjQtODg5Yi00MDQ1LWIyMDMtOTU1OGYxZGRlYWI0XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDMwLFxuICAgICAgNjIsXG4gICAgICAyMTYsXG4gICAgICAxMzgsXG4gICAgICAxMTIsXG4gICAgICA5MyxcbiAgICAgIDM0LFxuICAgICAgMTk4LFxuICAgICAgMjQ4LFxuICAgICAgOTQsXG4gICAgICA2NSxcbiAgICAgIDg0LFxuICAgICAgMTI3LFxuICAgICAgNTUsXG4gICAgICAxMjAsXG4gICAgICA0NCxcbiAgICAgIDc5LFxuICAgICAgMTk2LFxuICAgICAgMTgsXG4gICAgICAxMDJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTI5LFxuICAgICAgMzcsXG4gICAgICAyNDAsXG4gICAgICA4MyxcbiAgICAgIDU4LFxuICAgICAgMjE4LFxuICAgICAgMjM3LFxuICAgICAgNzgsXG4gICAgICAxMzMsXG4gICAgICAxMzUsXG4gICAgICAxMTIsXG4gICAgICA1OSxcbiAgICAgIDI0NyxcbiAgICAgIDUzLFxuICAgICAgNzMsXG4gICAgICA0NixcbiAgICAgIDE1MCxcbiAgICAgIDEyMSxcbiAgICAgIDE3MixcbiAgICAgIDEzNlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI4SkdKRDFaUVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTE5NzQ3MzU4MjMzOjYxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiTUFMTFUgTU9WSUVTXCIsXG4gICAgXCJsaWRcIjogXCI2MDczMDgzNzg1MzkxOjYxQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ09mS3Y2NEJFS3ZuM2JRR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwibEEwVFQrSHVpM1JUcktTMUFCNmFIZi9DVDhXSHJBYlFHVTluTjF2Um1tbz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJQMlp5N2x2M292T3l1Y1I3SzhrNk5tcEx4TTIydjh1Q3lMY200eCtnUmVEa1llU1plYjAweEVtNXV6RWR6YmM2MzRWczd6WTE4NW5peXJ6clhFN2FCQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJBc3lyelB6ZUdxTkdZZGlPU1JOREc2TEVSWkt6dmsrUTgvRW9RZkZGRy9qSytDeENHd2Q4M0pxbGpIWGNVbFFKMW0ySnoza1h4blZlZk1sRCtYZ05Cdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MTk3NDczNTgyMzM6NjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgNixcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTA2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjEyMDE1ODMsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFIcXNcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUhxcy5qc29uIjogIntcImtleURhdGFcIjpcIncrT01XRktnbnYyRW1uU0d3V1BsNVBYQWF4Zk4xM2twYXVZak0rZmZQRXc9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MzY1OTQ2MjE0LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMF19LFwidGltZXN0YW1wXCI6XCIxNzIxMjAxNTY0ODQ4XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "MALLU_MOVIES_BOT",
  ownername:process.env.OWNER_NAME|| "SOUL_PC",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
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
