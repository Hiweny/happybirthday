/**
 * ✨ EDIT THIS FILE to customize the birthday greeting! ✨
 *
 * This is the ONLY file you need to modify.
 * No need to touch HTML, CSS, or any other JavaScript files.
 *
 * AVAILABLE SECTION TYPES:
 *   "greeting"      → Opening greeting with recipient's name
 *   "announcement"  → Birthday announcement text
 *   "chatbox"       → Chat message with typing animation
 *   "ideas"         → Sequential text reveals, one by one
 *   "quote"         → Styled quote card with optional author
 *   "countdown"     → Animated 3-2-1 countdown
 *   "stars"         → Twinkling stars background
 *   "fireworks"     → Colorful firework sparks burst
 *   "balloons"      → Floating balloon animation
 *   "profile"       → Profile photo with birthday wish
 *   "confetti"      → Confetti burst animation
 *   "closing"       → Closing message with replay button
 *
 * HOW TO USE:
 *   REMOVE a section  → Delete its object from the sections array
 *   DUPLICATE          → Copy-paste any section object
 *   REORDER            → Move the section object up/down in the array
 *   EDIT TEXT          → Change the string values
 */

const CONFIG = {
  // ── Recipient Info ────────────────────────────────────────────
  name: "杜灿",
  photo: "./img/杜灿.jpg",       // Place your photo in the img/ folder
  music: "./music/hbd.mpeg",      // Place your music in the music/ folder

  // ── Theme Colors ──────────────────────────────────────────────
  // A toggle button lets the viewer switch between dark & light mode.
  colors: {
    primary: "#f472b6",           // Main accent color (rose pink)
    accent: "#60a5fa",            // Secondary accent color (sky blue)
    dark: {
      background: "#0f172a",      // Slate 900
      text: "#f1f5f9",            // Slate 100
    },
    light: {
      background: "#fafaf9",      // Stone 50
      text: "#1e293b",            // Slate 800
    },
  },

  // ── Default Color Mode ────────────────────────────────────────
  // Options: "dark" or "light"
  defaultMode: "dark",

  // ── Sections ──────────────────────────────────────────────────
  // Add, remove, duplicate, or reorder as you wish!
  sections: [
    {
      type: "greeting",
      title: "Hi",
      subtitle: "准备好迎接你的生日祝福了吗",
    },
    {
      type: "countdown",
      from: 3,                    // Countdown from this number
      goText: "🎉",              // Text shown after countdown ends
    },
    {
      type: "announcement",
      text: "19岁生日快乐!🎂🎂",
    },
    {
      type: "chatbox",
      message:
        "Happy birthday to youu!!祝你天天开心快快乐乐好吃好喝身体健康万事如意心想事成自由自在越来越美，恭喜你又老了一岁！恭喜你🎉被我恭喜到了 每个成功的女人的背后都有一个坚实的脊柱 当然还有哥的支持😎，不知道你有没有想哥啊，反正 祝你十九岁生日快乐🎂记得给我包红包😘 ",
      buttonText: "Send",
    },
    {
      type: "ideas",
      lines: [
        "我说完了",
        "嗯？你怎么还在看",
        "那就再听我叨叨几句吧"
        "我是之前在手机日历里记了你的生日，所以有消息提醒"
        "但我又不想给你包红包😜"
        "所以就捣鼓出来了这个"
        "虽然算不上精美和好看，那你就凑合着看吧"
        "  🫶<strong>❤️</strong>."
        " <span>:)</span>",
      ],
      bigLetters: "SO",
    },
    {
      type: "quote",
      text: "朱颜长似，头上花枝，岁岁年年。",
      author: "葛胜仲《诉衷情·友人生日》",
    },
    {
      type: "stars",
      count: 40,
    },
    {
      type: "balloons",
      count: 30,
    },
    {
      type: "profile",
      wishTitle: "Happy Birthday!",
      wishText: "May the TNT always be with you! ;)",
    },
    {
      type: "fireworks",
      count: 30,
    },
    {
      type: "confetti",
      count: 9,
    },
    {
      type: "closing",
      text: "怎么样？还不错吧😎",
      replayText: "Or click, if you want to watch it again.",
    },
  ],
};
