const Discord = require('discord.js')
const c = new Discord.Client()

c.on('ready', function () {
  console.log(`Connecté avec @${c.user.tag} !`)
  c.user.setActivity('Tapez S-help et regardez @adriengonz' , {type: 'STREAMING'})
});

c.on('message', async msg => {
  console.log(`@${msg.author.username} à dit "${msg.content}" dans ${msg.channel.name}`); //Message sous forme lisible logger dans l'invite de commandes
  console.log(`<@${msg.author.id}> à dit "${msg.id}" dans <#${msg.channel.name}>`); //Message sous forme ID logger dans l'invite de commandes
  console.log('--'); //Séparateur

  if(msg.content.startsWith('SONDAGE Y/N') || msg.content.startsWith('SONDAGE O/N')){
      msg.react('✅')
      msg.react('❌')
    }
  if(msg.content.startsWith('SONDAGE 2')){
    msg.react('1⃣')
    msg.react('2⃣')
  }
  if(msg.content.startsWith('SONDAGE 3')){
    msg.react('1⃣')
    msg.react('2⃣')
    msg.react('3⃣')
  }
  if(msg.content.startsWith('SONDAGE 4')){
    msg.react('1⃣')
    msg.react('2⃣')
    msg.react('3⃣')
    msg.react('4⃣')
  }
    if(msg.content.startsWith('SONDAGE 5')){
      msg.react('1⃣')
      msg.react('2⃣')
      msg.react('3⃣')
      msg.react('4⃣')
      msg.react('5⃣')
  }
   if(msg.content === 'S-invite'){
     msg.reply('Voilà le lien d\'invitaton ! : https://discordapp.com/oauth2/authorize?client_id=467650879206588426&scope=bot&permissions=67456064')
   }
   if(msg.content === 'S-help'){
     msg.reply('Hey ! Voilà les listes des commandes ! ✅ : \n ➡ S-help : Affiche la liste des commandes 📜 \n ➡ S-helpEN : Affiche la liste des commandes en Anglais 📜 \n ➡ S-invite : Envoie le lien pour inviter ce bot sur votre serveur ! 🌐 \n ➡ S-support : Envoie le lien du serveur de support \n ➡ S-createur : Affiche le nom du créateur du bot 👨‍💻 \n ➡ Commandes Sondages : 〰 Commencez par mettre au début de votre message en majuscules SONDAGE puis soit **Y/N** ou **2** ou **3** ou **4** ou **5** et + (tapez S-liste pour savoir combien de réactions le bot supporte et quand j\'aurais le temps j\'en rajouterais)〰')
   }
   if(msg.content === 'S-helpEN'){
     msg.reply('Hey ! This is the commands ! ✅ : \n ➡ S-help : Show the list of commands 📜 \n ➡ S-helpEN : Show the list of commands in English 📜 \n ➡ S-invite : Send the link for invite this bot on your server ! 🌐 \n ➡ S-support : Send the link for join the support server \n ➡ S-createur : Show the name of creator of bot 👨‍💻 \n ➡ Sondage commands : 〰 Start your message in majuscules SONDAGE and is **Y/N** or **2** or **3** or **4** or **5** and + (tap S-liste for know how much reactions the bot support and when i have the time, i will add ! 😁👍)〰')
   }
   if(msg.content === 'S-liste'){
     msg.reply('Le bot peut réagir avec les chiffres de 1 à 5. **Mis à jour le 14/07/2018** ✅🌐 Pour savoir comment faire : Tapez S-help ou S-helpEN for English.')
   }
   if(msg.content === 'S-support'){
     msg.reply('Voilà le lien d\'invitation ! : https://discord.gg/fTY82bB')
   }
   if(msg.content === 'S-createur'){
     msg.reply('Ce bot a été crée par Adrien Gonz**** (Adri-djay g ou Adridu84 sur YouTube)')
   }
 });

   c.login('NDY3NjUwODc5MjA2NTg4NDI2.DittXQ.QSrwoNBk5GsPPc4F4A8zMGzlTXI')
