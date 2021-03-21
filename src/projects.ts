interface Project {
  title: string
  subtitle: string
  description: string
  link: string
}

export const aida: Project = {
  title: "Aida",
  subtitle: "Your digital assistant for meeting new people 👬🏼",
  description: `
    Aida is a dating chatbot for iOS and Android that uses neural networks to predict personality and match users.
    An attention-based BLSTM was trained to predict a user’s personality given answers to practice dating questions asked by Aida. Users were matched based on the similarity of their personalities.
    The neural network improved state of the art results by ~3.22% and performed with the same accuracy during evaluation.
  `,
  link: "https://github.com/zachary/aida"
}

export const revisify: Project = {
  title: "Revisify",
  subtitle: "A simple online revision tool for students 🎓",
  description: `
    Revisify began as a small project to help me prepare for my GCSEs.
    Within the space of 2 years it grew into a community of 3000 students and teachers, creating and sharing quizzes with each other.
  `,
  link: "https://github.com/zachary/revisify"
}

export const rocketRiot: Project = {
  title: "Rocket Riot",
  subtitle: "Turn by turn space game with real time minigames 🚀",
  description: `
      As part of a university project, I worked in a team of six to build a Java-based multiplayer game that works over a local network.
      Players take in turns moving around a grid with the aim of capturing as many planets as possible through fun minigames.
    `,
  link: "https://github.com/rocketriot/game"
}

export const copBot: Project = {
  title: "Cop Bot",
  subtitle: "Supreme bot for Chrome 🛒",
  description: `
    I built a Chrome extension bot that would automate buying products from Supreme during their weekly drops.
    Cop Bot is capable of ordering multiple products in a matter of seconds.
  `,
  link: "https://github.com/zachary/cop-bot"
}

export const spotiparty: Project = {
  title: "SpotiParty",
  subtitle: "Queue songs on Spotify with your friends 🎵",
  description: `
    As part of a hackathon project, five friends and I built a tool that lets people collaborate on a Spotify playlist at social events.
    Songs can be added to a queue by texting a song name to a mobile number. A server searches for the song and adds it to the playlist.
  `,
  link: "https://github.com/aledjackson/Hackference-2018"
}

export const bulb: Project = {
  title: "Bulb",
  subtitle: "An alarm app for Android that works with LIFX 💡",
  description: `
    In the winter when it’s dark and cold its always harder to get out of bed. I bought a LIFX bulb and discovered their public API.
    Using the API, I built an app that gently turns my light on before playing a soothing alarm when I need to get out of bed.
  `,
  link: "https://github.com/zachary/bulb"
}

export const daynote: Project = {
  title: "DayNote",
  subtitle: "Your personal development journal ✏️",
  description: `
  While learning about the benefits of daily journaling I created an app that would keep track of my journal entries.
  I built a Google Assistant app that works with the Android app to view and create journal entries as part of competition ran by Google.
`,
  link: "https://github.com/zachary/daynote"
}

const projects = [aida, revisify, rocketRiot, copBot, spotiparty, bulb, daynote]

export default projects
