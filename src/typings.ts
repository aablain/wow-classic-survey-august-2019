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
