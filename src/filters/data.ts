const colors = [
  "#C0392B", // dark-red
  "#2980B9", // dark-blue
  "#9B59B6", // dark-purple
  "#D35400", // dark-orange
  "#1E8449", // Dark Green
  // "#D4AC0D", // Lighter Dark Yellow
  "#B7950B", // Dark Yellow
  "#D98880", // light-red
  "#7FB3D5", // light-blue
  "#C39BD3", // light-purple
  "#F0B27A", // light-orange
  "#7DCEA0", // light-green
  "#B3B6B7" // light-grey
];

const colorBlindColors = [
  "#154360",
  "#1A5276",
  "#1F618D",
  "#1F618D",
  "#2980B9",
  "#5499C7",
  "#5DADE2",
  "#7FB3D5",
  "#85C1E9"
];

const colorsObj = {
  Druid: "#FF7D0A",
  Hunter: "#ABD473",
  Mage: "#40C7EB",
  Paladin: "#F58CBA",
  Priest: "#858585",
  Rogue: "#F1C40F",
  Shaman: "#0070DE",
  Warlock: "#8787ED",
  Warrior: "#C79C6E",
  DK: "#C41F3B",
  DH: "#A330C9",
  Monk: "#00FF96",
  alt1: "tomato",
  alt2: "blanchedalmond"
};

const questions = [
  "ageRange",
  "characterGender",
  "class",
  "classComparison",
  "contentInterest",
  "expectedTimeTo60",
  "faction",
  "firstRetailExpansionPlayed",
  "hasActiveSub",
  "hasPlayedPrivateServer",
  "mostRecentExpansionPlayed",
  "profLeveling",
  "prof60",
  "race",
  "region",
  // "responseDate",
  "role",
  "serverType"
];

const titles = {
  ageRange: "What is your age",
  characterGender: "What gender will your character be",
  class: "What class will your character be",
  classComparison:
    "Will you roll the same class your previous main, or try a new one",
  contentInterest: "What content are you most excited about",
  expectedTimeTo60:
    "From the launch of Classic, how long do you anticipate it will take you, in real-world-time, to reach level 60",
  faction: "What faction will your character belong to",
  firstRetailExpansionPlayed:
    "What is the earliest retail World of Warcraft expansion you played",
  hasActiveSub: "Do you have an active World of Warcraft subscription",
  hasPlayedPrivateServer:
    "Had you played on a Vanilla WoW private server, prior to Classic's announcement",
  mostRecentExpansionPlayed:
    "What is the most recent retail World of Warcraft expansion you played?",
  profLeveling:
    "What primary professions will you be using while leveling from 1-60",
  prof60: "What primary professions will you be using at level 60",
  race: "What race will your character be",
  region: "What region will you be playing on",
  responseDate: "Response Timestamp",
  role: "What will the primary role of your character be",
  serverType: "What type of sever will you be playing on"
};

export default {
  answers: {
    ageRange: ["Under 18", "18 - 24", "25 - 34", "35 - 44", "44 - 55", "55+"],
    characterGender: ["Male", "Female"],
    class: [
      "Shaman",
      "Rogue",
      "Priest",
      "Warrior",
      "Paladin",
      "Mage",
      "Warlock",
      "Hunter",
      "Druid"
    ],
    classComparison: [
      "I will be rolling the same class as my previous main",
      "I will be rolling a class I have played extensively, but did not main",
      "I will be rolling a new class, or one that I played minimally"
    ],
    contentInterest: [
      "Questing",
      "Dungeons",
      "World PvP",
      "Battlegrounds",
      "Raids",
      "Role Playing",
      "Collecting items/recipes/wealth",
      "Barrens Chat"
    ],
    expectedTimeTo60: [
      "< 1 week",
      "1 - 2 weeks",
      "2 - 4 weeks",
      "1 - 2 months",
      "2 - 4 months",
      "4 - 6 months",
      "6+ months"
    ],
    faction: ["For the Horde!", "For the Alliance!"],
    firstRetailExpansionPlayed: [
      "Vanilla",
      "The Burning Crusade",
      "Wrath of the Lich King",
      "Cataclysm",
      "Mists of Pandaria",
      "Warlords of Draenor",
      "Legion",
      "Battle for Azeroth"
    ],
    hasActiveSub: ["Yes", "No"],
    hasPlayedPrivateServer: ["Yes", "No"],
    mostRecentExpansionPlayed: [
      "Vanilla",
      "The Burning Crusade",
      "Wrath of the Lich King",
      "Cataclysm",
      "Mists of Pandaria",
      "Warlords of Draenor",
      "Legion",
      "Battle for Azeroth"
    ],
    prof60: [
      "Alchemy",
      "Blacksmithing",
      "Enchanting",
      "Engineering",
      "Herbalism",
      "Leatherworking",
      "Mining",
      "Skinning",
      "Tailoring"
    ],
    profLeveling: [
      "Alchemy",
      "Blacksmithing",
      "Enchanting",
      "Engineering",
      "Herbalism",
      "Leatherworking",
      "Mining",
      "Skinning",
      "Tailoring"
    ],
    race: [
      "Human",
      "Dwarf",
      "Night Elf",
      "Gnome",
      "Orc",
      "Undead",
      "Tauren",
      "Troll"
    ],
    region: ["Americas", "Oceanic", "Europe", "Asia"],
    role: ["DPS", "Healer", "Tank"],
    serverType: ["PvP", "PvE", "RP", "RP-PvP"]
  },
  colors,
  colorBlindColors,
  colorsObj,
  questions,
  titles
};
