/* GameForge showcase — EN/ZH runtime dictionary.
   Keys map to [data-i18n] elements; values are trusted authored HTML. */

const I18N = {
  en: {
    'meta.title': 'GameForge — One conversation. Every game asset.',
    'meta.desc': 'GameForge is a creative agent for game assets: characters, sprite animations, maps, UI kits, music and SFX, created in conversation and dropped onto an infinite canvas.',
    stations: ['hero', 'sprite/', 'props', 'map/ + tilemap/', 'uikit/', 'audio/', 'how it works', 'under the hood'],

    'nav.showcase': 'Features',
    'nav.how': 'How it works',
    'nav.hood': 'Contact',

    'hero.h1': 'One conversation.<br><span class="selected-line">Every game asset.<i></i><i></i><i></i><i></i></span>',
    'hero.sub': 'An AI agent that creates game assets as you imagine:<br>characters, sprite animations, maps, UI kits, music &amp; SFX.',
    'hero.q': 'a treasure chest bursting open with golden light…',
    'hero.send': 'Generate',

    'anim.h2': 'Describe a character.<br>Watch it move.',
    'anim.lede': 'Characters and animations are created in conversation: a reference image comes first, and once approved, the same likeness is turned into a looping animation. You can also upload your own reference art to set an existing character in motion. Pixel, Ghibli, Pixar — the style is yours to choose.',

    'props.h2': 'One prop. Every animation.',
    'props.lede': 'Weapons, pickups and treasure chests, created in conversation. A single prop gets a whole series of animations: idle, interaction, destruction, with its look and details kept consistent across the set.',

    'worlds.h2': 'Interactive, extensible maps.',
    'worlds.lede': 'Maps are created in conversation: side-scrolling levels ship with collision data, interactive from the moment they land; tile-based towns come with a tileset and a real Tiled project file, ready to extend and edit in your engine.',

    'ui.h2': 'Game UI, delivered as a kit.',
    'ui.lede': 'One prompt produces a finished game screen, delivered as a complete kit: every control is a standalone transparent PNG, with button states and bar frames split from their fills. Circle any region on the mockup and it joins the kit as a cut-out.',

    'audio.h2': 'BGM, SFX and voice,<br>all in one place.',
    'audio.lede': 'Looping BGM, one-shot SFX and character voices are all generated in conversation, covering a game\'s full audio needs. Once a character is cast, its voice stays consistent across the project. Every clip below is playable.',
    'audio.t1': '8-bit side-scroll battle',
    'audio.t2': 'Palace battlefield theme',
    'audio.t3': "Dark lord's throne",
    'audio.t4': 'Chest breaking',
    'audio.t5': 'Pixel bomb explosion',
    'audio.t6': '“Lightning Kick!” · a cast character voice',

    'how.h2': 'A team of agents,<br>creating for you.',
    'how.lede': 'A collaborating team of agents drives the whole process: dedicated specialists for characters, animation, maps, UI, music and voice; any asset can be revised and re-edited simply by talking; and the project remembers, keeping character likeness, voices and style consistent across rounds of creation.',

    'end.stack': 'One conversation. Every game asset.',
    'end.cta': 'Get in touch',
    'end.colophon': '© 2026 Jay',
  },

  zh: {
    'meta.title': 'GameForge — 对话创作，全套游戏素材。',
    'meta.desc': 'GameForge 是一个游戏素材创作 Agent：角色、精灵动画、地图、UI 套件、音乐与音效，在对话中生成，落上无限画布。',
    stations: ['首页', '精灵动画', '道具', '地图 · 瓦片', '游戏 UI', '音乐音效', '工作原理', '技术幕后'],

    'nav.showcase': '功能特性',
    'nav.how': '产品预览',
    'nav.hood': '联系',

    'hero.h1': '对话创作，<br><span class="selected-line">全套游戏素材。<i></i><i></i><i></i><i></i></span>',
    'hero.sub': '游戏素材创作 Agent，随心生成<br>角色、精灵动画、地图、UI 套件与音乐音效。',
    'hero.q': '一个迸发金光的开启宝箱…',
    'hero.send': '生成',

    'anim.h2': '说出你的角色，<br>看它动起来。',
    'anim.lede': '角色与动画皆可在对话中创作：先生成参考图，经确认后，同一形象即转化为循环动画；也可上传自有参考素材，为既有角色赋予动作。像素、吉卜力、皮克斯，风格由你决定。',

    'props.h2': '一件道具，系列动画。',
    'props.lede': '武器、拾取物、宝箱，皆可在对话中创作。围绕同一件道具生成系列动画，待机、交互、摧毁各态齐备，形象与细节在整个系列中保持一致。',

    'worlds.h2': '可交互、可扩展的地图。',
    'worlds.lede': '游戏地图在对话中生成：横版关卡附带碰撞数据，落地即可交互；瓦片地图交付瓦片集与 Tiled 工程文件，进入引擎后可继续扩展与编辑。',

    'ui.h2': '游戏 UI，整套交付。',
    'ui.lede': '一句话生成完整的游戏界面，交付的则是整套素材：每个控件拆解为独立的透明 PNG，按钮三态、血条框体与填充分离；在界面上圈选任意区域，也会提取为切图并入套件。',

    'audio.h2': 'BGM、音效、配音，一站式搞定。',
    'audio.lede': '循环 BGM、单发音效与角色配音，皆可在对话中生成，覆盖游戏音频的完整需求；角色一经选角，声线在整个项目中保持一致。下方每一段均可试听。',
    'audio.t1': '8-bit 横版战斗',
    'audio.t2': '宫廷战场配乐',
    'audio.t3': '黑暗领主王座',
    'audio.t4': '宝箱破碎',
    'audio.t5': '像素炸弹爆炸',
    'audio.t6': '“Lightning Kick!” · 选角后的角色配音',

    'how.h2': '多 Agent 协作，<br>为你创作。',
    'how.lede': '一支会协作的 Agent 团队驱动整个创作：角色、动画、地图、UI、音乐与配音各有专属的创作专家；每件素材都可在对话中继续修改、二次编辑；项目具备记忆，角色形象、声线与风格在多轮创作之间保持一致。',

    'end.stack': '对话创作，全套游戏素材。',
    'end.cta': '联系我',
    'end.colophon': '© 2026 Jay',
  },
};

function applyLang(lang) {
  const d = I18N[lang] || I18N.en;
  document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const v = d[el.dataset.i18n];
    if (v != null) el.innerHTML = v;
  });
  document.title = d['meta.title'];
  document.querySelector('meta[name="description"]').setAttribute('content', d['meta.desc']);

  document.querySelectorAll('.station').forEach((el, i) => { el.dataset.name = d.stations[i]; });
  const counterName = document.getElementById('counter-name');
  if (counterName) counterName.textContent = d.stations[window.__activeStation ?? 0];

  document.getElementById('lang-label').textContent = lang === 'zh' ? 'EN' : '中文';
  try { localStorage.setItem('gf-lang', lang); } catch (e) { /* private mode */ }
  window.__lang = lang;
}

const initialLang = (() => {
  const q = new URLSearchParams(location.search).get('lang');
  if (q === 'zh' || q === 'en') return q;
  let saved = null;
  try { saved = localStorage.getItem('gf-lang'); } catch (e) { /* private mode */ }
  if (saved === 'zh' || saved === 'en') return saved;
  return (navigator.language || '').toLowerCase().startsWith('zh') ? 'zh' : 'en';
})();

applyLang(initialLang);
document.getElementById('lang-toggle').addEventListener('click', () => {
  applyLang(window.__lang === 'zh' ? 'en' : 'zh');
});
