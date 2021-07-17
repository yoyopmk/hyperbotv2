  /*
	* HAI NAMAKU NAYLA
	* YAH DISINI AKU SEBAGAI PEMULA 
	* MAU MENCOBA MEMBUAT BOT SENDIRI
	* YANG PASTINYA PASTI BANYAK YG
	* BAKAL MELANGGAR DISINI
	* OKE TERIMA KASIH
  */
 const petik = '```'
exports.help = (wit,wita,wib,tampilTanggal, _Elite, tampilHari , limitawal, role, premi, sender, botname,pushname, prefix, wa_version, mcc, mnc, os_version, device_manufacturer, device_model ) => {
	return`╭─❒ *INFO BOT* 
│❒ ${petik}𝖭𝖺𝗆𝖺 : ${botname}${petik}
│❒ ${petik}Author : Nayla${petik}
│❒ ${petik}Recode : Zeeone${petik}
│❒ ${petik}Server : Baileys${petik}
│❒ ${petik}RAM : ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB${petik}
│❒ ${petik}MCC : ${mcc}${petik}
│❒ ${petik}MNC : ${mnc}${petik}
│❒ ${petik}Versi Os : ${os_version}${petik}
│❒ ${petik}Versi Hp : ${device_model}${petik}
│❒ ${petik}Merk Hp : ${device_manufacturer}${petik}
│❒ ${petik}WhatsApp : ${wa_version}${petik}
│❒ ${petik}Total User : ${_Elite.length}${petik}
╰───────────────┈ ⳹

╭─❒ *INFO USER* 
│❒ ${petik}𝖭𝖺𝗆𝖺 : ${pushname}${petik}
│❒ ${petik}Tag :${petik} @${sender.split("@")[0]}
│❒ ${petik}Status : ${premi}${petik}
│❒ ${petik}Role : ${role}${petik}
│❒ ${petik}Limit : ${limitawal} / Day${petik}
╰───────────────┈ ⳹

╭─❒ *INDONESIAN TIME* 
│❒ ${petik}Wib : ${wib}${petik}
│❒ ${petik}Wita : ${wita}${petik}
│❒ ${petik}Wit : ${wit}${petik}
╰───────────────┈ ⳹

╭─❒ *TANGGAL*
│❒ ${petik}Hari : ${tampilTanggal}${petik}
│❒ ${petik}${tampilHari}${petik}
╰───────────────┈ ⳹

╭─❒ *Sosmed*
│╿ Youtube :https://youtube.com/c/HYPERMOD
│
│╿ FACEBOOK :https://www.facebook.com/hype.mod.5
│
│ ╿ Whatsapp :https://chat.whatsapp.com/GKPlDEfZwPbKqYmLz2Qalj
╰───────────────┈ ⳹


╭──❒ *LIST MENU* 
│
├◪ ⧉ *GRUP MENU* ⧉
│  
│❒ ${petik}${prefix}hidetag${petik} 
│❒ ${petik}${prefix}add${petik} @user
│❒ ${petik}${prefix}kick${petik} @user
│❒ ${petik}${prefix}promote${petik} @user
│❒ ${petik}${prefix}demote${petik} @user
│❒ ${petik}${prefix}hidetag10${petik} 
│❒ ${petik}${prefix}group${petik} [ buka / tutup ]  
│❒ ${petik}${prefix}antigay${petik} [ 0 / 1 ] 
│❒ ${petik}${prefix}antibocil${petik} [ 0 / 1 ] 
│❒ ${petik}${prefix}antiwibu${petik} [ 0 / 1 ] 
│❒ ${petik}${prefix}antikasar${petik} [ 0 / 1 ] 
│❒ ${petik}${prefix}antitag${petik} [ 0 / 1 ] 
│❒ ${petik}${prefix}level${petik} 
│❒ ${petik}${prefix}limit${petik} 
│❒ ${petik}${prefix}leveling${petik} [ 0 / 1 ] 
│❒ ${petik}${prefix}antijawa${petik}  [ 0 / 1 ] 
│❒ ${petik}${prefix}katajago${petik} 
│❒ ${petik}${prefix}linkgc${petik} 
│❒ ${petik}${prefix}tagall${petik} 
│❒ ${petik}${prefix}delete${petik}
│
├◪ ⧉ *STICK MENU* ⧉
│
│❒ ${petik}${prefix}stickbucin${petik} 
│❒ ${petik}${prefix}stickanjing${petik} 
│❒ ${petik}${prefix}gawrgura${petik} 
│❒ ${petik}${prefix}umongus${petik} 
│❒ ${petik}${prefix}dadu${petik} 
│❒ ${petik}${prefix}randompatrick${petik} 
│❒ ${petik}${prefix}randomwibu${petik} 
│❒ ${petik}${prefix}sticker${petik}
│
├◪ ⧉ *PRO MENU* ⧉
│
│❒ ${petik}${prefix}nulis1${petik} 
│❒ ${petik}${prefix}nulis2${petik} 
│❒ ${petik}${prefix}nulis3${petik} 
│❒ ${petik}${prefix}nulis4${petik} 
│❒ ${petik}${prefix}nulis5${petik} 
│❒ ${petik}${prefix}nulis6${petik} 
│❒ ${petik}${prefix}video1${petik} 
│❒ ${petik}${prefix}video2${petik} 
│❒ ${petik}${prefix}video3${petik} 
│❒ ${petik}${prefix}video4${petik} 
│❒ ${petik}${prefix}video5${petik} 
│❒ ${petik}${prefix}video6${petik}
│
├◪ ⧉ *DOWNLOAD MENU* ⧉
│
│❒ ${petik}${prefix}telesticker${petik} 
│❒ ${petik}${prefix}tiktokmusic${petik} 
│❒ ${petik}${prefix}tiktoknowm${petik}  
│❒ ${petik}${prefix}igfoto${petik}
│❒ ${petik}${prefix}igvideo${petik} 
│❒ ${petik}${prefix}ytsearch${petik} 
│❒ ${petik}${prefix}ytmp3${petik} 
│❒ ${petik}${prefix}ytmp4${petik} 
│❒ ${petik}${prefix}play${petik}
│
├◪ ⧉ *GACHA CECAN* ⧉
│
│❒ ${petik}${prefix}china${petik} 
│❒ ${petik}${prefix}indonesia${petik} 
│❒ ${petik}${prefix}malaysia${petik} 
│❒ ${petik}${prefix}thailand${petik} 
│❒ ${petik}${prefix}korea${petik}
│❒ ${petik}${prefix}japan${petik}
│❒ ${petik}${prefix}vietnam${petik}
│
├◪ ⧉ *NSFW & SFW MENU* ⧉
│
│❒ ${petik}${prefix}ahegao${petik} 
│❒ ${petik}${prefix}ass${petik} 
│❒ ${petik}${prefix}bdsm${petik} 
│❒ ${petik}${prefix}blowjob${petik} 
│❒ ${petik}${prefix}cuckold${petik}
│❒ ${petik}${prefix}cum${petik} 
│❒ ${petik}${prefix}ero${petik} 
│❒ ${petik}${prefix}femdom${petik} 
│❒ ${petik}${prefix}foot${petik} 
│❒ ${petik}${prefix}gangbang${petik} 
│❒ ${petik}${prefix}glasses${petik}
│❒ ${petik}${prefix}hentai${petik} 
│❒ ${petik}${prefix}hentai_gifs${petik} 
│❒ ${petik}${prefix}jahy${petik} 
│❒ ${petik}${prefix}manga${petik} 
│❒ ${petik}${prefix}masturbation${petik} 
│❒ ${petik}${prefix}neko${petik}
│❒ ${petik}${prefix}orgy${petik} 
│❒ ${petik}${prefix}panties${petik} 
│❒ ${petik}${prefix}pussy${petik} 
│❒ ${petik}${prefix}neko_sfw${petik} 
│❒ ${petik}${prefix}tentacles${petik} 
│❒ ${petik}${prefix}thighs${petik}
│❒ ${petik}${prefix}yuri${petik}
│❒ ${petik}${prefix}zettai${petik}
│
├◪ ⧉ *ASUPAN MENU* ⧉
│
│❒ ${petik}${prefix}rikagusriani${petik} 
│❒ ${petik}${prefix}ukhty${petik} 
│❒ ${petik}${prefix}santuy${petik} 
│❒ ${petik}${prefix}geayubi${petik} 
│❒ ${petik}${prefix}bocil${petik}
│❒ ${petik}${prefix}asupan${petik} 
│
├◪ ⧉ *SOUND MENU* ⧉
│
│❒ ${petik}${prefix}tomp3${petik} 
│❒ ${petik}${prefix}sound1${petik}  
│❒ ${petik}${prefix}sound2${petik}  
│❒ ${petik}${prefix}sound3${petik}  
│❒ ${petik}${prefix}sound4${petik}  
│❒ ${petik}${prefix}sound5${petik}  
│❒ ${petik}${prefix}sound6${petik}  
│❒ ${petik}${prefix}sound7${petik}  
│❒ ${petik}${prefix}sound8${petik}  
│❒ ${petik}${prefix}sound9${petik}  
│❒ ${petik}${prefix}sound10${petik}  
│❒ ${petik}${prefix}sound11${petik}  
│❒ ${petik}${prefix}sound12${petik}  
│❒ ${petik}${prefix}sound13${petik}  
│❒ ${petik}${prefix}sound14${petik}  
│❒ ${petik}${prefix}sound15${petik}  
│❒ ${petik}${prefix}sound16${petik}  
│❒ ${petik}${prefix}sound17${petik}  
│❒ ${petik}${prefix}sound18${petik}  
│❒ ${petik}${prefix}sound19${petik}  
│❒ ${petik}${prefix}sound20${petik}  
│❒ ${petik}${prefix}sound21${petik}  
│❒ ${petik}${prefix}sound22${petik}  
│❒ ${petik}${prefix}sound23${petik}  
│❒ ${petik}${prefix}sound24${petik}  
│❒ ${petik}${prefix}sound25${petik} 
│
├◪ ⧉ *PORN MENU* ⧉
│
│❒ ${petik}${prefix}indo1${petik}   
│❒ ${petik}${prefix}indo2${petik}   
│❒ ${petik}${prefix}indo3${petik}   
│❒ ${petik}${prefix}indo4${petik}   
│❒ ${petik}${prefix}indo5${petik}   
│❒ ${petik}${prefix}indo6${petik}   
│❒ ${petik}${prefix}indo7${petik}   
│❒ ${petik}${prefix}indo8${petik}   
│❒ ${petik}${prefix}indo9${petik}   
│❒ ${petik}${prefix}indo10${petik}   
│❒ ${petik}${prefix}indo11${petik}   
│❒ ${petik}${prefix}indo12${petik}   
│❒ ${petik}${prefix}indo13${petik}   
│❒ ${petik}${prefix}indo14${petik}   
│❒ ${petik}${prefix}indo15${petik}   
│❒ ${petik}${prefix}indo16${petik}   
│❒ ${petik}${prefix}indo17${petik}   
│❒ ${petik}${prefix}indo18${petik}   
│❒ ${petik}${prefix}indo19${petik}   
│❒ ${petik}${prefix}indo20${petik}   
│❒ ${petik}${prefix}indo21${petik}   
│❒ ${petik}${prefix}indo22${petik}   
│❒ ${petik}${prefix}indo23${petik}   
│❒ ${petik}${prefix}indo24${petik}   
│❒ ${petik}${prefix}indo25${petik} 
│
├◪ ⧉ *STORAGE MENU* ⧉
│ 
│❒ ${petik}${prefix}chatlist${petik}  
│❒ ${petik}${prefix}addsticker${petik}  
│❒ ${petik}${prefix}addvn${petik}  
│❒ ${petik}${prefix}getvn${petik}  
│❒ ${petik}${prefix}getsticker${petik}  
│❒ ${petik}${prefix}liststicker${petik}  
│❒ ${petik}${prefix}listvn${petik}  
│❒ ${petik}${prefix}addimage${petik}  
│❒ ${petik}${prefix}getimage${petik}  
│❒ ${petik}${prefix}imagelist${petik}  
│❒ ${petik}${prefix}addvideo${petik}  
│❒ ${petik}${prefix}getvideo${petik}  
│❒ ${petik}${prefix}listvideo${petik} 
│
├◪ ⧉ *CHECK MENU* ⧉
│
│❒ ${petik}${prefix}gantengcek${petik}  
│❒ ${petik}${prefix}cantikcek${petik}  
│❒ ${petik}${prefix}jelekcek${petik}  
│❒ ${petik}${prefix}goblokcek${petik}  
│❒ ${petik}${prefix}begocek${petik}  
│❒ ${petik}${prefix}pintercek${petik}  
│❒ ${petik}${prefix}jagocek${petik}  
│❒ ${petik}${prefix}nolepcek${petik}  
│❒ ${petik}${prefix}babicek${petik}  
│❒ ${petik}${prefix}bebancek${petik}  
│❒ ${petik}${prefix}baikcek${petik}  
│❒ ${petik}${prefix}jahatcek${petik}  
│❒ ${petik}${prefix}anjingcek${petik}  
│❒ ${petik}${prefix}haramcek${petik}  
│❒ ${petik}${prefix}kontolcek${petik}  
│❒ ${petik}${prefix}pakboycek${petik}  
│❒ ${petik}${prefix}pakgirlcek${petik}  
│❒ ${petik}${prefix}sangecek${petik}  
│❒ ${petik}${prefix}bapercek${petik} 
│
├◪ ⧉ *TAG MENU* ⧉
│
│❒ ${petik}${prefix}ganteng${petik}  
│❒ ${petik}${prefix}cantik${petik}  
│❒ ${petik}${prefix}jelek${petik}  
│❒ ${petik}${prefix}goblok${petik}  
│❒ ${petik}${prefix}bego${petik}  
│❒ ${petik}${prefix}pinter${petik}  
│❒ ${petik}${prefix}jago${petik}  
│❒ ${petik}${prefix}babi${petik}  
│❒ ${petik}${prefix}beban${petik}  
│❒ ${petik}${prefix}baik${petik}  
│❒ ${petik}${prefix}jahat${petik}  
│❒ ${petik}${prefix}anjing${petik}  
│❒ ${petik}${prefix}monyet${petik}  
│❒ ${petik}${prefix}haram${petik}  
│❒ ${petik}${prefix}kontol${petik}  
│❒ ${petik}${prefix}pakboy${petik}  
│❒ ${petik}${prefix}pakgirl${petik}  
│❒ ${petik}${prefix}sadboy${petik}  
│❒ ${petik}${prefix}sadgirl${petik}  
│❒ ${petik}${prefix}wibu${petik}  
│❒ ${petik}${prefix}nolep${petik}  
│❒ ${petik}${prefix}hebat${petik} 
│
├◪ ⧉ *GAME MENU* ⧉
│
│❒ ${petik}${prefix}slot${petik}  
│❒ ${petik}${prefix}simi${petik}  
│❒ ${petik}${prefix}jumlah${petik}   
│❒ ${petik}${prefix}tebakgambar${petik}   
│❒ ${petik}${prefix}kapankah${petik}  
│❒ ${petik}${prefix}apakah${petik}  
│❒ ${petik}${prefix}ramalnomer${petik}   
│❒ ${petik}${prefix}ramalcinta${petik}   
│❒ ${petik}${prefix}jodohbali${petik}   
│❒ ${petik}${prefix}ramalnikah${petik}   
│❒ ${petik}${prefix}taksirmimpi${petik}   
│❒ ${petik}${prefix}suit${petik}      
│❒ ${petik}${prefix}boomtext${petik}  
│❒ ${petik}${prefix}holoh${petik}  
│❒ ${petik}${prefix}heleh${petik}  
│❒ ${petik}${prefix}huluh${petik}  
│❒ ${petik}${prefix}hilih${petik}  
│❒ ${petik}${prefix}halah${petik}   
│❒ ${petik}${prefix}kapital${petik}  
│❒ ${petik}${prefix}textfont${petik}  
│❒ ${petik}${prefix}tebak${petik}  
│❒ ${petik}${prefix}oxo${petik}  
│❒ ${petik}${prefix}pesan${petik}  
│❒ ${petik}${prefix}tebakkimia${petik}  
│❒ ${petik}${prefix}tebaklirik${petik}  
│❒ ${petik}${prefix}tebakin1${petik}  
│❒ ${petik}${prefix}tebakin2${petik} 
│
├◪ ⧉ *RANDOM TEXT* ⧉
│
│❒ ${petik}${prefix}quotes2 ${petik} 
│❒ ${petik}${prefix}grubwa${petik}  
│❒ ${petik}${prefix}nickff${petik} 
│❒ ${petik}${prefix}brainly${petik}  
│❒ ${petik}${prefix}quotes1${petik}  
│❒ ${petik}${prefix}kusonime${petik}  
│❒ ${petik}${prefix}renungan${petik}  
│❒ ${petik}${prefix}samehadaku${petik}  
│❒ ${petik}${prefix}infonomer${petik}  
│❒ ${petik}${prefix}jadwaltv${petik}  
│❒ ${petik}${prefix}tvjadwal${petik}  
│❒ ${petik}${prefix}fml${petik}  
│❒ ${petik}${prefix}cinta${petik}  
│❒ ${petik}${prefix}resepmasakan${petik}  
│❒ ${petik}${prefix}cersex${petik}  
│❒ ${petik}${prefix}cerpen${petik}  
│❒ ${petik}${prefix}jadwalsholat${petik}  
│❒ ${petik}${prefix}pantun${petik}  
│❒ ${petik}${prefix}cuaca${petik}  
│❒ ${petik}${prefix}namaninja${petik}  
│❒ ${petik}${prefix}fake${petik}    
│❒ ${petik}${prefix}quotes${petik}  
│❒ ${petik}${prefix}quotesnime${petik}  
│❒ ${petik}${prefix}kbbilazimedia${petik}  
│❒ ${petik}${prefix}covid${petik}  
│❒ ${petik}${prefix}wikiid${petik}  
│❒ ${petik}${prefix}wikien${petik}  
│❒ ${petik}${prefix}covidid${petik}  
│❒ ${petik}${prefix}kbbi${petik}  
│❒ ${petik}${prefix}infogempa${petik}  
│❒ ${petik}${prefix}randomquran${petik}  
│❒ ${petik}${prefix}kisanabi${petik}  
│❒ ${petik}${prefix}artinama${petik}  
│❒ ${petik}${prefix}artimimpi${petik}  
│❒ ${petik}${prefix}artijadian${petik}  
│❒ ${petik}${prefix}chord${petik}  
│❒ ${petik}${prefix}lirik${petik} 
│
├◪ ⧉ *FAST MENU* ⧉
│
│❒ ${petik}${prefix}fb${petik}  
│❒ ${petik}${prefix}tts${petik}   
│❒ ${petik}${prefix}stalktwit${petik}  
│❒ ${petik}${prefix}stalkgithub${petik}   
│❒ ${petik}${prefix}randomhusbu${petik}  
│❒ ${petik}${prefix}pinterest${petik}  
│❒ ${petik}${prefix}randomwaifu${petik}  
│❒ ${petik}${prefix}randomwaifu1${petik}  
│❒ ${petik}${prefix}stalkig${petik} 
│❒ ${petik}${prefix}estetikpic${petik} 
│❒ ${petik}${prefix}memeindo${petik}
│❒ ${petik}${prefix}darkjokes${petik}  
│❒ ${petik}${prefix}urlshort${petik}  
│❒ ${petik}${prefix}shortener${petik}  
│❒ ${petik}${prefix}fox${petik}  
│❒ ${petik}${prefix}dog${petik}  
│❒ ${petik}${prefix}cat${petik}  
│❒ ${petik}${prefix}panda${petik}  
│❒ ${petik}${prefix}panda1${petik}  
│❒ ${petik}${prefix}bird${petik}  
│❒ ${petik}${prefix}koala${petik}  
│❒ ${petik}${prefix}meme${petik}     
│❒ ${petik}${prefix}ngakak${petik}  
│❒ ${petik}${prefix}pin${petik}   
│❒ ${petik}${prefix}foto${petik}   
│❒ ${petik}${prefix}bts${petik}  
│❒ ${petik}${prefix}exo${petik}  
│❒ ${petik}${prefix}blackpink${petik}   
│❒ ${petik}${prefix}manga1${petik}  
│❒ ${petik}${prefix}character${petik}   
│❒ ${petik}${prefix}bug${petik} 
│❒ ${petik}${prefix}deteksiumur${petik} 
│
├◪ ⧉ *SERTIFIKAT MENU* ⧉
│
│❒ ${petik}${prefix}ffserti${petik}   
│❒ ${petik}${prefix}ffserti2${petik}  
│❒ ${petik}${prefix}ffserti3${petik}  
│❒ ${petik}${prefix}ffserti4${petik}  
│❒ ${petik}${prefix}ffserti5${petik}  
│❒ ${petik}${prefix}pubgserti${petik}  
│❒ ${petik}${prefix}pubgserti2${petik}  
│❒ ${petik}${prefix}pubgserti3${petik}  
│❒ ${petik}${prefix}pubgserti4${petik}  
│❒ ${petik}${prefix}pubgserti5${petik}  
│❒ ${petik}${prefix}mlserti${petik}  
│❒ ${petik}${prefix}mlserti2${petik}  
│❒ ${petik}${prefix}mlserti3${petik}  
│❒ ${petik}${prefix}mlserti4${petik}  
│❒ ${petik}${prefix}mlserti5${petik} 
│
├◪ ⧉ *OWNER MENU* ⧉
│
│❒ ${petik}${prefix}dellprem${petik}   
│❒ ${petik}${prefix}addprem${petik}  
│❒ ${petik}${prefix}clearall${petik}  
│❒ ${petik}${prefix}bc${petik}  
│❒ ${petik}${prefix}owner${petik}  
│❒ ${petik}${prefix}author${petik}   
│❒ ${petik}${prefix}setthum${petik}  
│❒ ${petik}${prefix}setpp${petik}  
│❒ ${petik}${prefix}setprefix${petik}  
│❒ ${petik}${prefix}setreply${petik} 
│
├◪ ⧉ *MAKER MENU* ⧉
│
│❒ ${petik}${prefix}maker2d${petik}  
│❒ ${petik}${prefix}maker2d2${petik} 
│❒ ${petik}${prefix}maker2d3${petik} 
│❒ ${petik}${prefix}maker2d4${petik} 
│❒ ${petik}${prefix}maker3d${petik} 
│❒ ${petik}${prefix}maker3d2${petik} 
│❒ ${petik}${prefix}maker3d3${petik} 
│❒ ${petik}${prefix}maker3d4${petik} 
│❒ ${petik}${prefix}transformer${petik} 
│❒ ${petik}${prefix}glitch${petik}  
│❒ ${petik}${prefix}google${petik}  
│❒ ${petik}${prefix}battlefield${petik}  
│❒ ${petik}${prefix}coffeecup${petik}  
│❒ ${petik}${prefix}coffeecup2${petik} 
│❒ ${petik}${prefix}neon${petik}  
│❒ ${petik}${prefix}glow${petik} 
│❒ ${petik}${prefix}summer${petik} 
│❒ ${petik}${prefix}flower${petik}  
│❒ ${petik}${prefix}burn${petik}  
│❒ ${petik}${prefix}quote${petik}  
│❒ ${petik}${prefix}wooden${petik}  
│❒ ${petik}${prefix}golden${petik}   
│❒ ${petik}${prefix}ttp4${petik}  
│❒ ${petik}${prefix}ttp3${petik}  
│❒ ${petik}${prefix}ttp2${petik}  
│❒ ${petik}${prefix}ttp1${petik}  
│❒ ${petik}${prefix}attp${petik} 
│❒ ${petik}${prefix}sticker${petik}  
│❒ ${petik}${prefix}stickergif${petik} 
│❒ ${petik}${prefix}removebg${petik}   
│❒ ${petik}${prefix}tahta${petik} 
│❒ ${petik}${prefix}wall${petik} 
│❒ ${petik}${prefix}neon2${petik} 
│❒ ${petik}${prefix}wolf${petik} 
│❒ ${petik}${prefix}tfire${petik} 
│❒ ${petik}${prefix}ytgold${petik} 
│❒ ${petik}${prefix}ytsilver${petik} 
│❒ ${petik}${prefix}t3d${petik} 
│❒ ${petik}${prefix}logoa${petik} 
│❒ ${petik}${prefix}pornhub${petik} 
│❒ ${petik}${prefix}marvel${petik} 
│❒ ${petik}${prefix}leavest${petik} 
│❒ ${petik}${prefix}phcoment${petik} 
│
├◪ ⧉ *SPESIAL MENU* ⧉
│
│❒ ${petik}${prefix}deteksiwajah${petik} 
│❒ ${petik}${prefix}readmore${petik} 
│❒ ${petik}${prefix}randomwibu${petik} 
│❒ ${petik}${prefix}phkomen${petik}  
│❒ ${petik}${prefix}semoji${petik}  
│❒ ${petik}${prefix}jadian${petik}  
│❒ ${petik}${prefix}citacita${petik}  
│❒ ${petik}${prefix}laut${petik}  
│❒ ${petik}${prefix}darat${petik}  
│❒ ${petik}${prefix}udara${petik}  
│❒ ${petik}${prefix}fakta${petik}  
│❒ ${petik}${prefix}gcard${petik}  
│❒ ${petik}${prefix}ssweb${petik}  
│❒ ${petik}${prefix}katailham${petik}  
│❒ ${petik}${prefix}randomwibu${petik} 
╰───────────────┈ ⳹
`
}
/*

╭─⧉ *THANKS TO* ⧉
├◪ 
│❒ ${petik}NAYLACHAN${petik}  
│❒ ${petik}RYNZ${petik}  
│❒ ${petik}LOLI KILLERS${petik}  
│❒ ${petik}ARA-ARA${petik} 
│❒ ${petik}ZEEONE${petik} 
╰───────────────┈ ⳹
*/
exports.grupmenu = (prefix) => {
	return`✇ *REST API*
https://api-alphabot.herokuapp.com

╭─❒ *GRUP MENU*  
├◪
│❒ ${petik}${prefix}hidetag${petik}  
│❒ ${petik}${prefix}add${petik}  
│❒ ${petik}${prefix}kick${petik}  
│❒ ${petik}${prefix}promote${petik}  
│❒ ${petik}${prefix}demote${petik}  
│❒ ${petik}${prefix}antilink${petik}    
│❒ ${petik}${prefix}hidetag10${petik} 
│❒ ${petik}${prefix}group${petik}  
│❒ ${petik}${prefix}antigay${petik}  
│❒ ${petik}${prefix}antibocil${petik}  
│❒ ${petik}${prefix}antiwibu${petik}  
│❒ ${petik}${prefix}antikasar${petik}  
│❒ ${petik}${prefix}antitag${petik}  
│❒ ${petik}${prefix}level${petik}  
│❒ ${petik}${prefix}limit${petik}  
│❒ ${petik}${prefix}leveling${petik}  
│❒ ${petik}${prefix}antijawa${petik}   
│❒ ${petik}${prefix}katajago${petik}  
│❒ ${petik}${prefix}linkgc${petik}  
│❒ ${petik}${prefix}tagall${petik}  
│❒ ${petik}${prefix}delete${petik} 
╰───────────────┈ ⳹
`
}
exports.stickmenu = (prefix) => {
	return`✇ *REST API*
https://api-alphabot.herokuapp.com

╭─❒ *STICK MENU*  
├◪
│❒ ${petik}${prefix}stickbucin${petik}  
│❒ ${petik}${prefix}stickanjing${petik}  
│❒ ${petik}${prefix}gawrgura${petik}  
│❒ ${petik}${prefix}umongus${petik}  
│❒ ${petik}${prefix}dadu${petik}  
│❒ ${petik}${prefix}randompatrick${petik}  
│❒ ${petik}${prefix}randomwibu${petik}  
│❒ ${petik}${prefix}sticker${petik} 
╰───────────────┈ ⳹
`
}

exports.promenu = (prefix) => {
	return`✇ *REST API*
https://api-alphabot.herokuapp.com

╭─❒ *PRO MENU*
├◪
│❒ ${petik}${prefix}nulis1${petik}  
│❒ ${petik}${prefix}nulis2${petik}  
│❒ ${petik}${prefix}nulis3${petik}  
│❒ ${petik}${prefix}nulis4${petik}  
│❒ ${petik}${prefix}nulis5${petik}  
│❒ ${petik}${prefix}nulis6${petik}  
│❒ ${petik}${prefix}video1${petik}  
│❒ ${petik}${prefix}video2${petik}  
│❒ ${petik}${prefix}video3${petik}  
│❒ ${petik}${prefix}video4${petik}  
│❒ ${petik}${prefix}video5${petik}  
│❒ ${petik}${prefix}video6${petik} 
╰───────────────┈ ⳹
`
}

exports.downloadmenu = (prefix) => {
	return`✇ *REST API*
https://api-alphabot.herokuapp.com


╭─❒ *DOWNLOAD MENU*
├◪
│❒ ${petik}${prefix}telesticker${petik}  
│❒ ${petik}${prefix}tiktokmusic${petik}  
│❒ ${petik}${prefix}tiktoknowm${petik}  
│❒ ${petik}${prefix}igfoto${petik}  
│❒ ${petik}${prefix}igvideo${petik}  
│❒ ${petik}${prefix}ytsearch${petik}  
│❒ ${petik}${prefix}ytmp3${petik}  
│❒ ${petik}${prefix}ytmp4${petik}  
│❒ ${petik}${prefix}play${petik} 
╰───────────────┈ ⳹
`
}

exports.soundmenu = (prefix) => {
	return`✇ *REST API*
https://api-alphabot.herokuapp.com

╭─❒ *SOUND MENU*
├◪
│❒ ${petik}${prefix}tomp3${petik}  
│❒ ${petik}${prefix}sound1${petik}  
│❒ ${petik}${prefix}sound2${petik}  
│❒ ${petik}${prefix}sound3${petik}  
│❒ ${petik}${prefix}sound4${petik}  
│❒ ${petik}${prefix}sound5${petik}  
│❒ ${petik}${prefix}sound6${petik}  
│❒ ${petik}${prefix}sound7${petik}  
│❒ ${petik}${prefix}sound8${petik}  
│❒ ${petik}${prefix}sound9${petik}  
│❒ ${petik}${prefix}sound10${petik}  
│❒ ${petik}${prefix}sound11${petik}  
│❒ ${petik}${prefix}sound12${petik}  
│❒ ${petik}${prefix}sound13${petik}  
│❒ ${petik}${prefix}sound14${petik}  
│❒ ${petik}${prefix}sound15${petik}  
│❒ ${petik}${prefix}sound16${petik}  
│❒ ${petik}${prefix}sound17${petik}  
│❒ ${petik}${prefix}sound18${petik}  
│❒ ${petik}${prefix}sound19${petik}  
│❒ ${petik}${prefix}sound20${petik}  
│❒ ${petik}${prefix}sound21${petik}  
│❒ ${petik}${prefix}sound22${petik}  
│❒ ${petik}${prefix}sound23${petik}  
│❒ ${petik}${prefix}sound24${petik}  
│❒ ${petik}${prefix}sound25${petik} 
╰───────────────┈ ⳹
`
}

exports.pornmenu = (prefix) => {
	return`✇ *REST API*
https://api-alphabot.herokuapp.com

╭─❒ *PORN MENU*
├◪
│❒ ${petik}${prefix}indo1${petik}   
│❒ ${petik}${prefix}indo2${petik}   
│❒ ${petik}${prefix}indo3${petik}   
│❒ ${petik}${prefix}indo4${petik}   
│❒ ${petik}${prefix}indo5${petik}   
│❒ ${petik}${prefix}indo6${petik}   
│❒ ${petik}${prefix}indo7${petik}   
│❒ ${petik}${prefix}indo8${petik}   
│❒ ${petik}${prefix}indo9${petik}   
│❒ ${petik}${prefix}indo10${petik}   
│❒ ${petik}${prefix}indo11${petik}   
│❒ ${petik}${prefix}indo12${petik}   
│❒ ${petik}${prefix}indo13${petik}   
│❒ ${petik}${prefix}indo14${petik}   
│❒ ${petik}${prefix}indo15${petik}   
│❒ ${petik}${prefix}indo16${petik}   
│❒ ${petik}${prefix}indo17${petik}   
│❒ ${petik}${prefix}indo18${petik}   
│❒ ${petik}${prefix}indo19${petik}   
│❒ ${petik}${prefix}indo20${petik}   
│❒ ${petik}${prefix}indo21${petik}   
│❒ ${petik}${prefix}indo22${petik}   
│❒ ${petik}${prefix}indo23${petik}   
│❒ ${petik}${prefix}indo24${petik}   
│❒ ${petik}${prefix}indo25${petik} 
╰───────────────┈ ⳹
`
}

exports.storagemenu = (prefix) => {
	return`✇ *REST API*
https://api-alphabot.herokuapp.com

╭─❒ *STORAGE MENU*
├◪
│❒ ${petik}${prefix}readmore${petik}  
│❒ ${petik}${prefix}chatlist${petik}  
│❒ ${petik}${prefix}addsticker${petik}  
│❒ ${petik}${prefix}addvn${petik}  
│❒ ${petik}${prefix}getvn${petik}  
│❒ ${petik}${prefix}getsticker${petik}  
│❒ ${petik}${prefix}liststicker${petik}  
│❒ ${petik}${prefix}listvn${petik}  
│❒ ${petik}${prefix}addimage${petik}  
│❒ ${petik}${prefix}getimage${petik}  
│❒ ${petik}${prefix}imagelist${petik}  
│❒ ${petik}${prefix}addvideo${petik}  
│❒ ${petik}${prefix}getvideo${petik}  
│❒ ${petik}${prefix}listvideo${petik} 
╰───────────────┈ ⳹
`
}

exports.cekmenu = (prefix) => {
	return`✇ *REST API*
https://api-alphabot.herokuapp.com

╭─❒ *CHECK MENU*
├◪
│❒ ${petik}${prefix}gantengcek${petik}  
│❒ ${petik}${prefix}cantikcek${petik}  
│❒ ${petik}${prefix}jelekcek${petik}  
│❒ ${petik}${prefix}goblokcek${petik}  
│❒ ${petik}${prefix}begocek${petik}  
│❒ ${petik}${prefix}pintercek${petik}  
│❒ ${petik}${prefix}jagocek${petik}  
│❒ ${petik}${prefix}nolepcek${petik}  
│❒ ${petik}${prefix}babicek${petik}  
│❒ ${petik}${prefix}bebancek${petik}  
│❒ ${petik}${prefix}baikcek${petik}  
│❒ ${petik}${prefix}jahatcek${petik}  
│❒ ${petik}${prefix}anjingcek${petik}  
│❒ ${petik}${prefix}haramcek${petik}  
│❒ ${petik}${prefix}kontolcek${petik}  
│❒ ${petik}${prefix}pakboycek${petik}  
│❒ ${petik}${prefix}pakgirlcek${petik}  
│❒ ${petik}${prefix}sangecek${petik}  
│❒ ${petik}${prefix}bapercek${petik} 
╰───────────────┈ ⳹
`
}

exports.tagmenu = (prefix) => {
	return`✇ *REST API*
https://api-alphabot.herokuapp.com


╭─❒ *TAG MENU*
├◪
│❒ ${petik}${prefix}ganteng${petik}  
│❒ ${petik}${prefix}cantik${petik}  
│❒ ${petik}${prefix}jelek${petik}  
│❒ ${petik}${prefix}goblok${petik}  
│❒ ${petik}${prefix}bego${petik}  
│❒ ${petik}${prefix}pinter${petik}  
│❒ ${petik}${prefix}jago${petik}  
│❒ ${petik}${prefix}babi${petik}  
│❒ ${petik}${prefix}beban${petik}  
│❒ ${petik}${prefix}baik${petik}  
│❒ ${petik}${prefix}jahat${petik}  
│❒ ${petik}${prefix}anjing${petik}  
│❒ ${petik}${prefix}monyet${petik}  
│❒ ${petik}${prefix}haram${petik}  
│❒ ${petik}${prefix}kontol${petik}  
│❒ ${petik}${prefix}pakboy${petik}  
│❒ ${petik}${prefix}pakgirl${petik}  
│❒ ${petik}${prefix}sadboy${petik}  
│❒ ${petik}${prefix}sadgirl${petik}  
│❒ ${petik}${prefix}wibu${petik}  
│❒ ${petik}${prefix}nolep${petik}  
│❒ ${petik}${prefix}hebat${petik} 
╰───────────────┈ ⳹
`
}

exports.gamemenu = (prefix) => {
	return`✇ *REST API*
https://api-alphabot.herokuapp.com

╭─❒ *GAME MENU*
├◪
│❒ ${petik}${prefix}slot${petik}  
│❒ ${petik}${prefix}simi${petik}  
│❒ ${petik}${prefix}jumlah${petik}   
│❒ ${petik}${prefix}tebakgambar${petik}  
│❒ ${petik}${prefix}nickff${petik}  
│❒ ${petik}${prefix}kapankah${petik}  
│❒ ${petik}${prefix}apakah${petik}  
│❒ ${petik}${prefix}ramalnomer${petik}   
│❒ ${petik}${prefix}ramalcinta${petik}   
│❒ ${petik}${prefix}jodohbali${petik}   
│❒ ${petik}${prefix}ramalnikah${petik}   
│❒ ${petik}${prefix}taksirmimpi${petik}   
│❒ ${petik}${prefix}suit${petik}                     
│❒ ${petik}${prefix}boomtext${petik}  
│❒ ${petik}${prefix}holoh${petik}  
│❒ ${petik}${prefix}heleh${petik}  
│❒ ${petik}${prefix}huluh${petik}  
│❒ ${petik}${prefix}hilih${petik}  
│❒ ${petik}${prefix}halah${petik}   
│❒ ${petik}${prefix}kapital${petik}  
│❒ ${petik}${prefix}textfont${petik}  
│❒ ${petik}${prefix}tebak${petik}  
│❒ ${petik}${prefix}oxo${petik}  
│❒ ${petik}${prefix}pesan${petik}  
│❒ ${petik}${prefix}tebakkimia${petik}  
│❒ ${petik}${prefix}tebaklirik${petik} 
│❒ ${petik}${prefix}tebakin1${petik}  
│❒ ${petik}${prefix}tebakin2${petik} 
╰───────────────┈ ⳹
`
}

exports.randomtext = (prefix) => {
	return`✇ *REST API*
https://api-alphabot.herokuapp.com


╭─❒ *RANDOM TEXT*
├◪
│❒ ${petik}${prefix}quotes2${petik}  
│❒ ${petik}${prefix}grubwa${petik}  
│❒ ${petik}${prefix}brainly${petik}  
│❒ ${petik}${prefix}quotes1${petik}  
│❒ ${petik}${prefix}kusonime${petik}  
│❒ ${petik}${prefix}renungan${petik}  
│❒ ${petik}${prefix}samehadaku${petik}  
│❒ ${petik}${prefix}infonomer${petik}  
│❒ ${petik}${prefix}jadwaltv${petik}  
│❒ ${petik}${prefix}tvjadwal${petik}  
│❒ ${petik}${prefix}fml${petik}  
│❒ ${petik}${prefix}cinta${petik}  
│❒ ${petik}${prefix}resepmasakan${petik}  
│❒ ${petik}${prefix}cersex${petik}  
│❒ ${petik}${prefix}cerpen${petik}  
│❒ ${petik}${prefix}jadwalsholat${petik}  
│❒ ${petik}${prefix}pantun${petik}  
│❒ ${petik}${prefix}cuaca${petik}  
│❒ ${petik}${prefix}namaninja${petik}  
│❒ ${petik}${prefix}fake${petik}   
│❒ ${petik}${prefix}spamemail${petik}  
│❒ ${petik}${prefix}quotes${petik}  
│❒ ${petik}${prefix}quotesnime${petik}  
│❒ ${petik}${prefix}kbbilazimedia${petik}  
│❒ ${petik}${prefix}covid${petik}  
│❒ ${petik}${prefix}wikiid${petik}  
│❒ ${petik}${prefix}wikien${petik}  
│❒ ${petik}${prefix}covidid${petik}  
│❒ ${petik}${prefix}kbbi${petik}  
│❒ ${petik}${prefix}infogempa${petik}  
│❒ ${petik}${prefix}randomquran${petik}  
│❒ ${petik}${prefix}kisanabi${petik}  
│❒ ${petik}${prefix}artinama${petik}  
│❒ ${petik}${prefix}artimimpi${petik}  
│❒ ${petik}${prefix}artijadian${petik}  
│❒ ${petik}${prefix}chord${petik}  
│❒ ${petik}${prefix}lirik${petik} 
╰───────────────┈ ⳹
`
}

exports.fastmenu = (prefix) => {
	return`✇ *REST API*
https://api-alphabot.herokuapp.com

╭─❒ *FAST MENU*
├◪
│❒ ${petik}${prefix}fb${petik}  
│❒ ${petik}${prefix}tts${petik}  
│❒ ${petik}${prefix}steam${petik}  
│❒ ${petik}${prefix}stalktwit${petik}  
│❒ ${petik}${prefix}stalkgithub${petik}   
│❒ ${petik}${prefix}randomhusbu${petik}  
│❒ ${petik}${prefix}pinterest${petik}  
│❒ ${petik}${prefix}randomwaifu${petik}  
│❒ ${petik}${prefix}randomwaifu1${petik}  
│❒ ${petik}${prefix}stalkig${petik}  
│❒ ${petik}${prefix}estetikpic${petik}  
│❒ ${petik}${prefix}memeindo${petik}  
│❒ ${petik}${prefix}darkjokes${petik}  
│❒ ${petik}${prefix}urlshort${petik}  
│❒ ${petik}${prefix}shortener${petik}  
│❒ ${petik}${prefix}fox${petik}  
│❒ ${petik}${prefix}dog${petik}  
│❒ ${petik}${prefix}cat${petik}  
│❒ ${petik}${prefix}panda${petik}  
│❒ ${petik}${prefix}panda1${petik}  
│❒ ${petik}${prefix}bird${petik}  
│❒ ${petik}${prefix}koala${petik}  
│❒ ${petik}${prefix}meme${petik}    
│❒ ${petik}${prefix}asupan${petik}  
│❒ ${petik}${prefix}asupan1${petik}  
│❒ ${petik}${prefix}asupan2${petik}  
│❒ ${petik}${prefix}ngakak${petik}  
│❒ ${petik}${prefix}pin${petik}   
│❒ ${petik}${prefix}foto${petik}   
│❒ ${petik}${prefix}bts${petik}  
│❒ ${petik}${prefix}exo${petik}  
│❒ ${petik}${prefix}blackpink${petik}  
│❒ ${petik}${prefix}attp${petik}  
│❒ ${petik}${prefix}manga1${petik}  
│❒ ${petik}${prefix}character${petik}  
│❒ ${petik}${prefix}ttp4${petik}  
│❒ ${petik}${prefix}ttp3${petik}  
│❒ ${petik}${prefix}ttp2${petik}  
│❒ ${petik}${prefix}ttp1${petik}  
│❒ ${petik}${prefix}sticker${petik}  
│❒ ${petik}${prefix}stickergif${petik}  
│❒ ${petik}${prefix}bug${petik} 
╰───────────────┈ ⳹
`
}

exports.sertifikat = (prefix) => {
	return`✇ *REST API*
https://api-alphabot.herokuapp.com

╭─❒ *SERTIFIKAT MENU*
├◪
│❒ ${petik}${prefix}ffserti${petik}   
│❒ ${petik}${prefix}ffserti2${petik}  
│❒ ${petik}${prefix}ffserti3${petik}  
│❒ ${petik}${prefix}ffserti4${petik}  
│❒ ${petik}${prefix}ffserti5${petik}  
│❒ ${petik}${prefix}pubgserti${petik}  
│❒ ${petik}${prefix}pubgserti2${petik}  
│❒ ${petik}${prefix}pubgserti3${petik}  
│❒ ${petik}${prefix}pubgserti4${petik}  
│❒ ${petik}${prefix}pubgserti5${petik}  
│❒ ${petik}${prefix}mlserti${petik}  
│❒ ${petik}${prefix}mlserti2${petik}  
│❒ ${petik}${prefix}mlserti3${petik}  
│❒ ${petik}${prefix}mlserti4${petik}  
│❒ ${petik}${prefix}mlserti5${petik} 
╰───────────────┈ ⳹
`
}

exports.ownermenu = (prefix) => {
	return`✇ *REST API*
https://api-alphabot.herokuapp.com

╭─❒ *OWNER MENU*
├◪
│❒ ${petik}${prefix}dellprem${petik}   
│❒ ${petik}${prefix}addprem${petik}  
│❒ ${petik}${prefix}clearall${petik}  
│❒ ${petik}${prefix}bc${petik}  
│❒ ${petik}${prefix}owner${petik}  
│❒ ${petik}${prefix}author${petik}  
│❒ ${petik}${prefix}setout${petik}  
│❒ ${petik}${prefix}setwelcome${petik}   
│❒ ${petik}${prefix}setthum${petik}  
│❒ ${petik}${prefix}setpp${petik}  
│❒ ${petik}${prefix}setprefix${petik}  
│❒ ${petik}${prefix}setreply${petik} 
╰───────────────┈ ⳹
`
}

exports.makermenu = (prefix) => {
	return`✇ *REST API*
https://api-alphabot.herokuapp.com

╭─❒ *MAKER MENU*
├◪
│❒ ${petik}${prefix}maker2d${petik}  
│❒ ${petik}${prefix}maker2d2${petik} 
│❒ ${petik}${prefix}maker2d3${petik} 
│❒ ${petik}${prefix}maker2d4${petik} 
│❒ ${petik}${prefix}maker3d${petik} 
│❒ ${petik}${prefix}maker3d2${petik} 
│❒ ${petik}${prefix}maker3d3${petik} 
│❒ ${petik}${prefix}maker3d4${petik} 
│❒ ${petik}${prefix}transformer${petik}  
│❒ ${petik}${prefix}glitch${petik}  
│❒ ${petik}${prefix}google${petik}  
│❒ ${petik}${prefix}battlefield${petik}  
│❒ ${petik}${prefix}coffeecup${petik}  
│❒ ${petik}${prefix}coffeecup2${petik} 
│❒ ${petik}${prefix}neon${petik}  
│❒ ${petik}${prefix}glow${petik} 
│❒ ${petik}${prefix}summer${petik} 
│❒ ${petik}${prefix}flower${petik}  
│❒ ${petik}${prefix}burn${petik}  
│❒ ${petik}${prefix}quote${petik}  
│❒ ${petik}${prefix}wooden${petik}  
│❒ ${petik}${prefix}golden${petik}   
│❒ ${petik}${prefix}ttp4${petik}  
│❒ ${petik}${prefix}ttp3${petik}  
│❒ ${petik}${prefix}ttp2${petik}  
│❒ ${petik}${prefix}ttp1${petik}  
│❒ ${petik}${prefix}attp${petik} 
│❒ ${petik}${prefix}sticker${petik}  
│❒ ${petik}${prefix}stickergif${petik} 
│❒ ${petik}${prefix}removebg${petik} 
│❒ ${petik}${prefix}tahta${petik} 
│❒ ${petik}${prefix}wall${petik} 
│❒ ${petik}${prefix}neon2${petik} 
│❒ ${petik}${prefix}wolf${petik} 
│❒ ${petik}${prefix}tfire${petik} 
│❒ ${petik}${prefix}ytgold${petik} 
│❒ ${petik}${prefix}ytsilver${petik} 
│❒ ${petik}${prefix}t3d${petik} 
│❒ ${petik}${prefix}logoa${petik} 
│❒ ${petik}${prefix}pornhub${petik} 
│❒ ${petik}${prefix}marvel${petik} 
│❒ ${petik}${prefix}leavest${petik} 
│❒ ${petik}${prefix}phcoment${petik} 
╰───────────────┈ ⳹
`
}

exports.spesialmenu = (prefix) => {
	return`✇ *REST API*
https://api-alphabot.herokuapp.com

╭─❒ *SPESIAL MENU*
├◪
│❒ ${petik}${prefix}randomwibu${petik}  
│❒ ${petik}${prefix}phkomen${petik}  
│❒ ${petik}${prefix}semoji${petik}  
│❒ ${petik}${prefix}jadian${petik}  
│❒ ${petik}${prefix}citacita${petik}  
│❒ ${petik}${prefix}laut${petik}  
│❒ ${petik}${prefix}darat${petik}  
│❒ ${petik}${prefix}udara${petik}  
│❒ ${petik}${prefix}fakta${petik}  
│❒ ${petik}${prefix}gcard${petik}  
│❒ ${petik}${prefix}ssweb${petik}  
│❒ ${petik}${prefix}katailham${petik}  
│❒ ${petik}${prefix}randomwibu${petik} 
╰───────────────┈ ⳹
`
}
exports.newsmenu = (prefix) => {
	return`✇ *REST API*
https://api-alphabot.herokuapp.com

╭─❒ *NEWS MENU*
├◪
│❒ ${petik}${prefix}newsdetik${petik}  
│❒ ${petik}${prefix}newskompas${petik}   
│❒ ${petik}${prefix}newstribun${petik}  
│❒ ${petik}${prefix}jalantikus${petik}  
╰───────────────┈ ⳹
`
}
exports.cecan = (prefix) => {
	return`✇ *REST API*
https://api-alphabot.herokuapp.com

╭─❒ *GACHA CECAN*
├◪
│❒ ${petik}${prefix}china${petik}  
│❒ ${petik}${prefix}indonesia${petik}  
│❒ ${petik}${prefix}malaysia${petik}  
│❒ ${petik}${prefix}thailand${petik}  
│❒ ${petik}${prefix}korea${petik} 
│❒ ${petik}${prefix}japan${petik} 
│❒ ${petik}${prefix}vietnam${petik}  
╰───────────────┈ ⳹
`
}
exports.asupan = (prefix) => {
	return`✇ *REST API*
https://api-alphabot.herokuapp.com

╭─❒ *ASUPAN MENU*
├◪
│❒ ${petik}${prefix}rikagusriani${petik}  
│❒ ${petik}${prefix}ukhty${petik}  
│❒ ${petik}${prefix}santuy${petik}  
│❒ ${petik}${prefix}geayubi${petik}  
│❒ ${petik}${prefix}bocil${petik} 
│❒ ${petik}${prefix}asupan${petik}  
╰───────────────┈ ⳹
`
}
exports.nsfw = (prefix) => {
	return`✇ *REST API*
https://api-alphabot.herokuapp.com

╭─❒ *NSFW & SFW MENU*
├◪
│❒ ${petik}${prefix}ahegao${petik}
│❒ ${petik}${prefix}ass${petik} 
│❒ ${petik}${prefix}bdsm${petik} 
│❒ ${petik}${prefix}blowjob${petik} 
│❒ ${petik}${prefix}cuckold${petik}
│❒ ${petik}${prefix}cum${petik} 
│❒ ${petik}${prefix}ero${petik} 
│❒ ${petik}${prefix}femdom${petik} 
│❒ ${petik}${prefix}foot${petik} 
│❒ ${petik}${prefix}gangbang${petik} 
│❒ ${petik}${prefix}glasses${petik}
│❒ ${petik}${prefix}hentai${petik} 
│❒ ${petik}${prefix}hentai_gifs${petik} 
│❒ ${petik}${prefix}jahy${petik} 
│❒ ${petik}${prefix}manga${petik} 
│❒ ${petik}${prefix}masturbation${petik} 
│❒ ${petik}${prefix}neko${petik}
│❒ ${petik}${prefix}orgy${petik} 
│❒ ${petik}${prefix}panties${petik} 
│❒ ${petik}${prefix}pussy${petik} 
│❒ ${petik}${prefix}neko_sfw${petik} 
│❒ ${petik}${prefix}tentacles${petik} 
│❒ ${petik}${prefix}thighs${petik}
│❒ ${petik}${prefix}yuri${petik}
│❒ ${petik}${prefix}zettai${petik} 
╰───────────────┈ ⳹
`
}

exports.botx = (prefix) => {
	return`[❗] MODE BOTX TIDAK AKTIF\nKETIK *${prefix}botx*\nUNTUK MENGAKTIFKAN`
	}
exports.error = (prefix, command) => {
    return`[❗] ERROR SILAHKAN LAPORKAN KE OWNER. KETIK *${prefix}bug ${command}*\n[ *APIKEY UNFALID* ]`
    }
exports.info1 = () => { 
    return`🐳 = $200
🦈 = $121
🐬 = $104
🐋 = $94
🐟 = $87
🐠 = $79
🦐 = $62
🦑 = $34
🦀 = $17
🐚 = $2
*NOTE* : TETAPLAH BERBURU KAWAN. WALAUPUN TIDAK BERGUNA SEPERTI ANDA`
  }
exports.info2 = () => { 
    return`🐔 = $200
🦃 = $121
🐿 = $104
🐐 = $94
🐏 = $87
🐖 = $79
🐑 = $62
🐎 = $34
🐺 = $17
🦩 = $2
*NOTE* : TETAPLAH BERBURU KAWAN. WALAUPUN TIDAK BERGUNA SEPERTI ANDA`
}
exports.info3 = () => { 
    return`🦋 = $200
🕷 = $121
🐝 = $104
🐉 = $94
🦆 = $87
🦅 = $79
🕊 = $62
🐧 = $34
🐦 = $17
🦇 = $2
*NOTE* : TETAPLAH BERBURU KAWAN. WALAUPUN TIDAK BERGUNA SEPERTI ANDA`
} 
exports.lvlnul = () => {
	return`*LEVELMU MASIH KOSONG*`
}
exports.levelup = (pushname, sender, getLevelingXp,  getLevel, getLevelingLevel) => {
	return`╭──❲  NAIK LEVEL  ❳
│❒ ${petik}Nama : ${pushname}${petik}  
│❒ ${petik}wa.me/${sender.split("@")[0]} 
│❒ ${petik}Xp : ${getLevelingXp(sender)}${petik}  
│❒ ${petik}Limit : +3${petik}   
│❒ ${petik}Level : ${getLevel} ⊱ ${getLevelingLevel(sender)}${petik}  
╰──❲  BOTZ  ❳`	
}
