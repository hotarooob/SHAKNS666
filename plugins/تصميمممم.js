let handler = async (m, { conn, command, text }) => {
let love = `
*☬ ⊱⊶✤⊷⊰ •〔🐉〕• ⊱⊶✤⊷⊰ ☬*

*〘🎞༻نتائج فعالية الادت ༺🎞〙*
*الـــــجـوائــــ💰ـــز:*

*الـمــقــــ👮🏻‍♂️ـــدم⇜. •〖〗• .*
                *✣༺【𝟒𝟎𝐤】༻✣*

*الـمــ🥇ــــــركز الاول⇜. • 〖〗• .*
                *✣༺【𝟕𝟎𝐤】༻✣*

*الـمــ🥈ـــــركز الثاني⇜. •〖〗• .*
                *✣༺【𝟓𝟎𝐤】༻✣*

*المـــ🥉ــــــركز الثالث⇜. •〖〗• .*
                *✣༺【𝟑𝟎𝐤】༻✣*

*☬ ⊱⊶✤⊷⊰ •〔🐉〕• ⊱⊶✤⊷⊰ ☬*

*~تــ✍︎ــوقــيــع اداࢪة┊📜┊↯:~*
   *~〘☬╎𝐑.𝐍.𝐍 𓆩❄𓆪 𝑺𝑶𝑼𝑳╎☬〙~*
`.trim()
m.reply(love, null, { mentions: conn.parseMention(love) })}
handler.help = ['estupidez']
handler.tags = ['fun']
handler.command = /^(التصميم|تصميم)$/i
export default handler
