client.on('message', async (message) => {
    if (message.content.startsWith('oyunrolleri')) {
      message.delete()
      let button = new disbut.MessageButton()
      .setStyle('green')
      .setLabel('Vampir köylü')
      .setID('Vampir köylü')
      let button2 = new disbut.MessageButton()
      .setStyle('red')
      .setLabel('D/C') // Lawainn tarafından yapılmıştır. 
      .setID('D/C') // ⍭'Lâwâinn'S#2309
      let button3 = new disbut.MessageButton()
      .setStyle('green') 
      .setLabel('Burç yorum')
      .setID('Burç yorum') // ⍭'Lâwâinn'S#2309
      message.channel.send("Aşağıda ki butonlara tıklayarak **Vampir köylü**, **Doğruluk mu cesaret mi** ve **Burç yorum** rollerini alabilirsiniz.",{buttons:[button,button2, button3]});
    }
}); // ⍭'Lâwâinn'S#2309

client.on("clickButton", async (button) => {
  if (button.id == 'Vampir köylü'){
    if (button.clicker.member.roles.cache.has(config.vampirköylü)){
      await button.clicker.member.roles.remove(config.vampirköylü)
      await button.reply.think(true);
      await button.reply.edit('Başarılı bir şekilde **Vampir köylü** rolü alındı.')
    } else {
      await button.clicker.member.roles.add(config.vampirköylü)
      await button.reply.think(true);
      await button.reply.edit('Başarılı bir şekilde **Vampir köylü** rolü verildi.')
    }
  } else {
    if (button.id == 'D/C'){ // conf dosyasındaki ayarları yapın
      if (button.clicker.member.roles.cache.has(config.DC)){
        await button.clicker.member.roles.remove(config.DC)
        await button.reply.think(true);
        await button.reply.edit('Başarılı bir şekilde **D/C** rolü alındı.')
      } else {
        await button.clicker.member.roles.add(config.DC)
        await button.reply.think(true);
        await button.reply.edit('Başarılı bir şekilde **DC** rolü verildi.')
      }
    } if (button.id == 'Burç yorum'){
      if (button.clicker.member.roles.cache.has(config.burçyorum)){
        await button.clicker.member.roles.remove(config.burçyorum)
        await button.reply.think(true);
        await button.reply.edit('Başarılı bir şekilde **Burç yorum** rolü alındı.')
      } else { // ⍭'Lâwâinn'S#2309
        await button.clicker.member.roles.add(config.burçyorum)
        await button.reply.think(true);
        await button.reply.edit('Başarılı bir şekilde **Burç yorum** rolü alındı.')
      } // ⍭'Lâwâinn'S#2309
    }
  } // Codare - ⍭'Lâwâinn'S#2309
})
