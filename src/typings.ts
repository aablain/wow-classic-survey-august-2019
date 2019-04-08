export namespace Survey {
  export type AgeRangeResp =
    | "Under 18"
    | "18 - 24"
    | "25 - 34"
    | "35 - 44"
    | "44 - 55"
    | "55+";
  export type FactionResp = "For the Alliance!" | "For the Horde!";
  export type ClassResp =
    | "Shaman"
    | "Rogue"
    | "Priest"
    | "Warrior"
    | "Paladin"
    | "Mage"
    | "Warlock"
    | "Hunter"
    | "Druid";
  export type CharacterGenderResp = "Male" | "Female";
  export type RoleResp = "DPS" | "Healer" | "Tank";
  export type ServerTypeResp = "PvP" | "PvE" | "RP" | "RP-PvP";
  export type RegionResp = "Americas" | "Oceanas" | "Europe" | "Asia";
  export type RaceResp =
    | "Human"
    | "Dwarf"
    | "Night Elf"
    | "Gnome"
    | "Orc"
    | "Undead"
    | "Tauren"
    | "Troll";
  export type Expansion =
    | "Vanilla"
    | "The Burning Crusade"
    | "Wrath of the Lich King"
    | "Cataclysm"
    | "Mists of Pandaria"
    | "Warlords of Draenor"
    | "Legion"
    | "Battle for Azeroth";
  export type Profession =
    | "Alchemy"
    | "Blacksmithing"
    | "Enchanting"
    | "Engineering"
    | "Herbalism"
    | "Leatherworking"
    | "Mining"
    | "Skinning"
    | "Tailoring";
  export type YesNo = "Yes" | "No";
  export type ClassComparisonResp =
    | "I will be rolling the same class as my previous main"
    | "I will be rolling a class I have played extensively, but did not main"
    | "I will be rolling a new class, or one that I played minimally";
  export type ExpectedTimeTo60Resp =
    | "< 1 week"
    | "1 - 2 weeks"
    | "2 - 4 weeks"
    | "1 - 2 months"
    | "2 - 4 months"
    | "4 - 6 months"
    | "6+ months";
  export type Content =
    | "Questing"
    | "Dungeons"
    | "World PvP"
    | "Battlegrounds"
    | "Raids"
    | "Role Playing"
    | "Colecting items/recipes/wealth"
    | "Barrens Chat";

  export type AllAnswers =
    | AgeRangeResp
    | CharacterGenderResp
    | ClassResp
    | ClassComparisonResp
    | ExpectedTimeTo60Resp
    | FactionResp
    | Expansion
    | YesNo
    | RaceResp
    | RegionResp
    | RoleResp
    | ServerTypeResp
    | string;

  export interface Response {
    ageRange: AgeRangeResp;
    characterGender: CharacterGenderResp;
    class: ClassResp;
    classComparison: ClassComparisonResp;
    contentInterest: string;
    expectedTimeTo60: ExpectedTimeTo60Resp;
    faction: FactionResp;
    firstRetailExpansionPlayed: Expansion;
    hasActiveSub: YesNo;
    hasPlayedPrivateServer: YesNo;
    mostRecentExpansionPlayed: Expansion;
    prof60: string;
    profLeveling: string;
    race: RaceResp;
    region: RegionResp;
    responseDate: string;
    role: RoleResp;
    serverType: ServerTypeResp;
  }
}

export namespace FilterTypes {
  export interface SelectedAnswers {
    ageRange: {
      [x: string]: boolean;
    };
    characterGender: {
      [x: string]: boolean;
    };
    class: {
      [x: string]: boolean;
    };
    classComparison: {
      [x: string]: boolean;
    };
    contentInterest: {
      [x: string]: boolean;
    };
    expectedTimeTo60: {
      [x: string]: boolean;
    };
    faction: {
      [x: string]: boolean;
    };
    firstRetailExpansionPlayed: {
      [x: string]: boolean;
    };
    hasActiveSub: {
      [x: string]: boolean;
    };
    hasPlayedPrivateServer: {
      [x: string]: boolean;
    };
    mostRecentExpansionPlayed: {
      [x: string]: boolean;
    };
    prof60: {
      [x: string]: boolean;
    };
    profLeveling: {
      [x: string]: boolean;
    };
    race: {
      [x: string]: boolean;
    };
    region: {
      [x: string]: boolean;
    };
    responseDate: {
      [x: string]: boolean;
    };
    role: {
      [x: string]: boolean;
    };
    serverType: {
      [x: string]: boolean;
    };
  }

  export interface AnswersCounts {
    ageRange: {
      [x: string]: number;
    };
    characterGender: {
      [x: string]: number;
    };
    class: {
      [x: string]: number;
    };
    classComparison: {
      [x: string]: number;
    };
    contentInterest: {
      [x: string]: number;
    };
    expectedTimeTo60: {
      [x: string]: number;
    };
    faction: {
      [x: string]: number;
    };
    firstRetailExpansionPlayed: {
      [x: string]: number;
    };
    hasActiveSub: {
      [x: string]: number;
    };
    hasPlayedPrivateServer: {
      [x: string]: number;
    };
    mostRecentExpansionPlayed: {
      [x: string]: number;
    };
    prof60: {
      [x: string]: number;
    };
    profLeveling: {
      [x: string]: number;
    };
    race: {
      [x: string]: number;
    };
    region: {
      [x: string]: number;
    };
    responseDate: {
      [x: string]: number;
    };
    role: {
      [x: string]: number;
    };
    serverType: {
      [x: string]: number;
    };
  }

  export interface QuestionsShowing {
    ageRange: boolean;
    characterGender: boolean;
    class: boolean;
    classComparison: boolean;
    contentInterest: boolean;
    expectedTimeTo60: boolean;
    faction: boolean;
    firstRetailExpansionPlayed: boolean;
    hasActiveSub: boolean;
    hasPlayedPrivateServer: boolean;
    mostRecentExpansionPlayed: boolean;
    prof60: boolean;
    profLeveling: boolean;
    race: boolean;
    region: boolean;
    responseDate: boolean;
    role: boolean;
    serverType: boolean;
  }
}
