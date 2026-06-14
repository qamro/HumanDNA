export const QUESTIONS = [
  {
    id: 1,
    text: "A fire breaks out. You have 10 seconds. You grab:",
    options: [
      { label: "My phone — it has everything", trait: "digital", color: "#3b82f6", icon: "📱" },
      { label: "My shoes — I need to run", trait: "survival", color: "#10b981", icon: "👟" },
      { label: "The cat — it can't save itself", trait: "empathy", color: "#f43f5e", icon: "🐈" },
      { label: "Nothing — I'm already at the door", trait: "instinct", color: "#f59e0b", icon: "🚪" },
    ]
  },
  {
    id: 2,
    text: "Pick a number between 1 and 10. Don't think. Just pick.",
    options: [
      { label: "1, 2, or 3 — the early ones", trait: "contrarian", color: "#7c3aed", icon: "⚡" },
      { label: "7 — everyone says 7", trait: "social", color: "#ec4899", icon: "🎯" },
      { label: "5 — exactly in the middle", trait: "balance", color: "#06b6d4", icon: "⚖️" },
      { label: "8, 9, or 10 — go big", trait: "ambitious", color: "#f59e0b", icon: "🔥" },
    ]
  },
  {
    id: 3,
    text: "You're late to a meeting. You tell yourself:",
    options: [
      { label: "Traffic was impossible today", trait: "external", color: "#f59e0b", icon: "🚗" },
      { label: "I should have left earlier", trait: "ownership", color: "#10b981", icon: "🪞" },
      { label: "This meeting could've been an email", trait: "rebel", color: "#f43f5e", icon: "😤" },
      { label: "I'll just apologize and move on", trait: "pragmatic", color: "#3b82f6", icon: "🤝" },
    ]
  },
  {
    id: 4,
    text: "It's 2am and you're hungry. You reach for:",
    options: [
      { label: "Cereal — quick, no effort", trait: "minimal", color: "#06b6d4", icon: "🥣" },
      { label: "Leftovers — like a pro", trait: "resourceful", color: "#10b981", icon: "🍱" },
      { label: "I order delivery, obviously", trait: "comfort", color: "#ec4899", icon: "🛵" },
      { label: "I don't eat at 2am. I'm asleep.", trait: "disciplined", color: "#7c3aed", icon: "😴" },
    ]
  },
  {
    id: 5,
    text: "Someone is wrong on the internet. You:",
    options: [
      { label: "Correct them with sources and receipts", trait: "justice", color: "#f43f5e", icon: "📎" },
      { label: "Screenshot it and send to a friend", trait: "observer", color: "#f59e0b", icon: "📸" },
      { label: "Log off. It's not worth it.", trait: "wise", color: "#7c3aed", icon: "🧘" },
      { label: "Like their reply so they feel seen", trait: "peacemaker", color: "#10b981", icon: "💚" },
    ]
  }
];

export const HUMAN_TYPES = {
  // By dominant trait combinations
  "digital+social+external+comfort+observer": {
    name: "The Chaotic Optimist",
    tagline: "You move fast, feel everything loudly, and somehow make it all work. Chaos is your comfort zone, you just call it 'energy'.",
    traits: [
      { label: "Chaos tolerance", value: 92, color: "#f43f5e" },
      { label: "Social energy", value: 88, color: "#ec4899" },
      { label: "Adaptability", value: 76, color: "#7c3aed" },
      { label: "Inner peace", value: 24, color: "#3b82f6" },
    ]
  },
  default_types: [
    {
      name: "The Silent Strategist",
      tagline: "You think three moves ahead while everyone's still reading the rules. Quiet power. Precise timing. You rarely miss.",
      traits: [
        { label: "Strategic thinking", value: 94, color: "#7c3aed" },
        { label: "Patience", value: 87, color: "#3b82f6" },
        { label: "Verbal output", value: 31, color: "#06b6d4" },
        { label: "Inner chaos", value: 18, color: "#f43f5e" },
      ]
    },
    {
      name: "The Chaotic Optimist",
      tagline: "You move fast, feel everything loudly, and somehow make it all work. Chaos is your comfort zone, you just call it 'energy'.",
      traits: [
        { label: "Chaos tolerance", value: 92, color: "#f43f5e" },
        { label: "Social energy", value: 88, color: "#ec4899" },
        { label: "Adaptability", value: 76, color: "#7c3aed" },
        { label: "Inner peace", value: 24, color: "#3b82f6" },
      ]
    },
    {
      name: "The Soft Rebel",
      tagline: "You smile while breaking the rules. Everyone loves you. No one suspects a thing. You've been doing it for years.",
      traits: [
        { label: "Rule flexibility", value: 89, color: "#f59e0b" },
        { label: "Likability", value: 91, color: "#ec4899" },
        { label: "Conformity", value: 12, color: "#10b981" },
        { label: "Audacity", value: 78, color: "#f43f5e" },
      ]
    },
    {
      name: "The Reluctant Leader",
      tagline: "You didn't ask for this role. Nobody elected you. But here you are the most capable person in the room, again.",
      traits: [
        { label: "Responsibility", value: 85, color: "#10b981" },
        { label: "Ambition", value: 62, color: "#f59e0b" },
        { label: "Delegation", value: 44, color: "#3b82f6" },
        { label: "Burnout risk", value: 71, color: "#f43f5e" },
      ]
    },
    {
      name: "The Empathetic Analyst",
      tagline: "You feel everything AND you understand the data. This is rare. People both confide in you and ask for your spreadsheet.",
      traits: [
        { label: "Emotional intelligence", value: 93, color: "#f43f5e" },
        { label: "Logical reasoning", value: 86, color: "#3b82f6" },
        { label: "Decisiveness", value: 55, color: "#7c3aed" },
        { label: "Overthinking", value: 79, color: "#f59e0b" },
      ]
    },
    {
      name: "The Philosophical Survivalist",
      tagline: "You've read the stoics. You've also packed a go-bag. You're ready for the apocalypse and its deeper meaning.",
      traits: [
        { label: "Preparedness", value: 91, color: "#10b981" },
        { label: "Depth of thought", value: 88, color: "#7c3aed" },
        { label: "Small talk ability", value: 17, color: "#06b6d4" },
        { label: "Existential dread", value: 83, color: "#f43f5e" },
      ]
    },
    {
      name: "The Gentle Contrarian",
      tagline: "You disagree with everyone, but very politely. People leave conversations with you feeling questioned and strangely grateful.",
      traits: [
        { label: "Independent thinking", value: 97, color: "#7c3aed" },
        { label: "Tact", value: 84, color: "#10b981" },
        { label: "Agreement rate", value: 8, color: "#f43f5e" },
        { label: "Curiosity", value: 92, color: "#3b82f6" },
      ]
    },
    {
      name: "The Pragmatic Dreamer",
      tagline: "You have big ideas and a realistic plan for exactly zero of them. Yet somehow you pull it off, every single time, last minute.",
      traits: [
        { label: "Vision", value: 88, color: "#f59e0b" },
        { label: "Planning", value: 34, color: "#3b82f6" },
        { label: "Execution under pressure", value: 90, color: "#10b981" },
        { label: "Sleep quality", value: 29, color: "#06b6d4" },
      ]
    },
    {
      name: "The Undercover Romantic",
      tagline: "You act unbothered. You are extremely bothered. You have playlists for feelings you've never told anyone about.",
      traits: [
        { label: "Emotional depth", value: 96, color: "#f43f5e" },
        { label: "Emotional expression", value: 22, color: "#ec4899" },
        { label: "Inner life richness", value: 99, color: "#7c3aed" },
        { label: "Vulnerability shown", value: 15, color: "#3b82f6" },
      ]
    },
    {
      name: "The Disciplined Hedonist",
      tagline: "You've optimized your joy. Sleep schedule, nutrition, chaos quotas — all tracked. You treat fun like a performance metric.",
      traits: [
        { label: "Self-discipline", value: 87, color: "#7c3aed" },
        { label: "Enjoyment capacity", value: 90, color: "#f59e0b" },
        { label: "Spontaneity", value: 31, color: "#f43f5e" },
        { label: "Spreadsheet usage", value: 95, color: "#3b82f6" },
      ]
    },
    {
      name: "The Chaotic Empath",
      tagline: "You absorb everyone's feelings and then lose your keys. You're a beautiful mess with the best instincts in the room.",
      traits: [
        { label: "Empathy", value: 98, color: "#f43f5e" },
        { label: "Organization", value: 14, color: "#3b82f6" },
        { label: "Emotional range", value: 97, color: "#ec4899" },
        { label: "Key-finding ability", value: 9, color: "#f59e0b" },
      ]
    },
    {
      name: "The Midnight Philosopher",
      tagline: "You do your best thinking at 2am. This is a feature, not a bug. The rest of the world is just operating in the wrong timezone.",
      traits: [
        { label: "Night brain clarity", value: 94, color: "#7c3aed" },
        { label: "Morning energy", value: 11, color: "#f59e0b" },
        { label: "Depth of thought", value: 91, color: "#3b82f6" },
        { label: "Conventional hours", value: 7, color: "#10b981" },
      ]
    },
  ]
};

// DNA block color map per trait
export const TRAIT_COLORS = {
  digital:    { bg: "#3b82f6", icon: "📱" },
  survival:   { bg: "#10b981", icon: "👟" },
  empathy:    { bg: "#f43f5e", icon: "🐈" },
  instinct:   { bg: "#f59e0b", icon: "🚪" },
  contrarian: { bg: "#7c3aed", icon: "⚡" },
  social:     { bg: "#ec4899", icon: "🎯" },
  balance:    { bg: "#06b6d4", icon: "⚖️" },
  ambitious:  { bg: "#f59e0b", icon: "🔥" },
  external:   { bg: "#f59e0b", icon: "🚗" },
  ownership:  { bg: "#10b981", icon: "🪞" },
  rebel:      { bg: "#f43f5e", icon: "😤" },
  pragmatic:  { bg: "#3b82f6", icon: "🤝" },
  minimal:    { bg: "#06b6d4", icon: "🥣" },
  resourceful:{ bg: "#10b981", icon: "🍱" },
  comfort:    { bg: "#ec4899", icon: "🛵" },
  disciplined:{ bg: "#7c3aed", icon: "😴" },
  justice:    { bg: "#f43f5e", icon: "📎" },
  observer:   { bg: "#f59e0b", icon: "📸" },
  wise:       { bg: "#7c3aed", icon: "🧘" },
  peacemaker: { bg: "#10b981", icon: "💚" },
};
