import Item from 'common/ITEMS/Item';

const items = {
  // id = item id
  // --------
  // PHASE 1
  // --------
  DARKMOON_CARD_BERSERKER: {
    id: 42989,
    name: 'Darkmoon Card: Berserker!',
    icon: 'inv_inscription_tarotberserker',
    buffId: 60196,
    buffName: 'Berserker!',
  },
  DARKMOON_CARD_DEATH: {
    id: 42990,
    name: 'Darkmoon Card: Death',
    icon: 'inv_inscription_tarotdeath',
    buffId: 60203,
    buffName: 'Darkmoon Card: Death',
  },
  DARKMOON_CARD_GREATNESS_AGILITY: {
    id: 44253,
    name: 'Darkmoon Card: Greatness',
    icon: 'inv_inscription_tarotgreatness',
    buffId: 60233,
    buffName: 'Greatness',
  },
  DARKMOON_CARD_GREATNESS_INTELLECT: {
    id: 44255,
    name: 'Darkmoon Card: Greatness',
    icon: 'inv_inscription_tarotgreatness',
    buffId: 60234,
    buffName: 'Greatness',
  },
  DARKMOON_CARD_GREATNESS_SPIRIT: {
    id: 44254,
    name: 'Darkmoon Card: Greatness',
    icon: 'inv_inscription_tarotgreatness',
    buffId: 60235,
    buffName: 'Greatness',
  },
  DARKMOON_CARD_GREATNESS_STRENGTH: {
    id: 42987,
    name: 'Darkmoon Card: Greatness',
    icon: 'inv_inscription_tarotgreatness',
    buffId: 60229,
    buffName: 'Greatness',
  },
  DARKMOON_CARD_ILLUSION: {
    id: 42988,
    name: 'Darkmoon Card: Illusion',
    icon: 'inv_inscription_tarotillusion',
    buffId: 57350,
    buffName: 'Illusionary Barrier',
    spellId: 57350,
  },
  DYING_CURSE: {
    id: 40255,
    name: 'Dying Curse',
    icon: 'inv_trinket_naxxramas03',
    buffId: 60494,
    buffName: 'Dying Curse',
  },
  EMBRACE_OF_THE_SPIDER: {
    id: 39229,
    name: 'Embrace of the Spider',
    icon: 'inv_trinket_naxxramas04',
    buffId: 60492,
    buffName: 'Embrace of the Spider',
  },
  FIGURINE_SAPPHIRE_OWL: {
    id: 42413,
    name: 'Figurine - Sapphire Owl',
    icon: 'inv_jewelcrafting_azureowl',
    buffId: 56186,
    buffName: 'Sapphire Owl',
    spellId: 56186,
  },
  FORGE_EMBER: {
    id: 37660,
    name: 'Forge Ember',
    icon: 'spell_fire_fire',
    buffId: 60479,
    buffName: 'Forge Ember',
  },
  GRIM_TOLL: {
    id: 40256,
    name: 'Grim Toll',
    icon: 'inv_trinket_naxxramas04',
    buffId: 60437,
    buffName: 'Grim Toll',
  },
  ILLUSTRATION_OF_THE_DRAGON_SOUL: {
    id: 40432,
    name: 'Illustration of the Dragon Soul',
    icon: 'inv_offhand_hyjal_d_01',
    buffId: 60486,
    buffName: 'Illustration of the Dragon Soul',
  },
  JETZES_BELL: {
    id: 37835,
    name: "Je'Tze's Bell",
    icon: 'inv_misc_bell_01',
    buffId: 49623,
    buffName: 'Effervescence',
  },
  LOATHEBS_SHADOW: {
    id: 39257,
    name: "Loatheb's Shadow",
    icon: 'inv_trinket_naxxramas03',
    buffId: 60439,
    buffName: "Loatheb's Shadow",
    spellId: 60439,
  },
  MARK_OF_NORGANNON: {
    id: 40531,
    name: 'Mark of Norgannon',
    icon: 'ability_hunter_readiness',
    buffId: 60319,
    buffName: 'Mark of Norgannon',
  },
  MARK_OF_THE_WAR_PRISONER: {
    id: 37873,
    name: 'Mark of the War Prisoner',
    icon: 'inv_jewelry_talisman_13',
    buffId: 60480,
    buffName: 'Mark of the War Prisoner',
  },
  METEORITE_WHETSTONE: {
    id: 37390,
    name: 'Meteorite Whetstone',
    icon: 'inv_misc_stonetablet_02',
    buffId: 60302,
    buffName: 'Meteorite Whetstone',
  },
  MIRROR_OF_TRUTH: {
    id: 40684,
    name: 'Mirror of Truth',
    icon: 'inv_jewelry_talisman_08',
    buffId: 60065,
    buffName: 'Reflection of Torment',
  },
  SOUL_PRESERVER: {
    id: 37111,
    name: 'Soul Preserver',
    icon: 'inv_misc_orb_03',
    buffId: 60513,
    buffName: 'Healing Trance',
  },
  SUNDIAL_OF_THE_EXILED: {
    id: 40682,
    name: 'Sundial of the Exiled',
    icon: 'ability_hunter_readiness',
    buffId: 60064,
    buffName: 'Now is the Time!',
  },
  // --------
  // PHASE 2
  // --------
  BLOOD_OF_THE_OLD_GOD: {
    id: 45522,
    name: 'Blood of the Old God',
    icon: 'inv_misc_gem_bloodstone_03',
    buffId: 64790,
    buffName: 'Blood of the Old God',
  },
  COMETS_TRAIL: {
    id: 45609,
    name: "Comet's Trail",
    icon: 'spell_arcane_starfire',
    buffId: 64772,
    buffName: "Comet's Trail",
  },
  DARK_MATTER: {
    id: 46038,
    name: 'Dark Matter',
    icon: 'ability_warrior_bloodnova',
    buffId: 65024,
    buffName: 'Implosion',
  },
  ELEMENTAL_FOCUS_STONE: {
    id: 45866,
    name: 'Elemental Focus Stone',
    icon: 'inv_misc_pocketwatch_03',
    buffId: 65004,
    buffName: 'Alacrity of the Elements',
  },
  ENERGY_SIPHON: {
    id: 45292,
    name: 'Energy Siphon',
    icon: 'ability_druid_typhoon',
    buffId: 65008,
    buffName: 'Energy Siphon',
    spellId: 65008,
  },
  EYE_OF_THE_BROODMOTHER: {
    id: 45308,
    name: 'Eye of the Broodmother',
    icon: 'inv_misc_eye_02',
    buffId: 65006,
    buffName: 'Eye of the Broodmother',
  },
  FLARE_OF_THE_HEAVENS: {
    id: 45518,
    name: 'Flare of the Heavens',
    icon: 'ability_hunter_readiness',
    buffId: 64713,
    buffName: 'Flare of the Heavens',
  },
  FURNACE_STONE: {
    id: 45313,
    name: 'Furnace Stone',
    icon: 'inv_misc_stonetablet_05',
    buffId: 65011,
    buffName: 'Furnace Stone',
    spellId: 65011,
  },
  HEART_OF_IRON: {
    id: 45158,
    name: 'Heart of Iron',
    icon: 'ability_rogue_fleetfooted',
    buffId: 398478,
    buffName: 'Heart of Iron',
    spellId: 398478,
  },
  LIVING_FLAME: {
    id: 45148,
    name: 'Living Flame',
    icon: 'spell_fire_burnout',
    buffId: 398475,
    buffName: 'Living Flame',
    spellId: 398475,
  },
  METEORITE_CRYSTAL: {
    id: 46051,
    name: 'Meteorite Crystal',
    icon: 'inv_misc_gem_azuredraenite_01',
    buffId: 64999,
    buffName: 'Meteoric Inspiration',
    spellId: 64999,
  },
  MJOLNIR_RUNESTONE: {
    id: 45931,
    name: 'Mjolnir Runestone',
    icon: 'inv_misc_rune_11',
    buffId: 65019,
    buffName: 'Mjolnir Runestone',
  },
  PANDORAS_PLEA: {
    id: 45490,
    name: "Pandora's Plea",
    icon: 'ability_hunter_readiness',
    buffId: 64741,
    buffName: "Pandora's Plea",
  },
  PYRITE_INFUSER: {
    id: 45286,
    name: 'Pyrite Infuser',
    icon: 'spell_fire_felpyroblast',
    buffId: 65014,
    buffName: 'Pyrite Infusion',
  },
  ROYAL_SEAL_OF_KING_LLANE: {
    id: 46021,
    name: 'Royal Seal of King Llane',
    icon: 'inv_crown_13',
    buffId: 65012,
    buffName: 'Royal Seal of King Llane',
    spellId: 65012,
  },
  SCALE_OF_FATES: {
    id: 45466,
    name: 'Scale of Fates',
    icon: 'inv_spiritshard_02',
    buffId: 64707,
    buffName: 'Scale of Fates',
    spellId: 64707,
  },
  SHOW_OF_FAITH: {
    id: 45535,
    name: 'Show of Faith',
    icon: 'spell_holy_divineprovidence',
    buffId: 64739,
    buffName: 'Show of Faith',
  },
  SIFS_REMEMBRANCE: {
    id: 45929,
    name: "Sif's Remembrance",
    icon: 'spell_frost_coldhearted',
    buffId: 65003,
    buffName: 'Memories of Love',
  },
  THE_GENERALS_HEART: {
    id: 45507,
    name: "The General's Heart",
    icon: 'spell_holy_devotionaura',
    buffId: 64765,
    buffName: "The General's Heart",
  },
  WRATHSTONE: {
    id: 45263,
    name: 'Wrathstone',
    icon: 'inv_pet_scorchedstone',
    buffId: 398488,
    buffName: 'Wrathstone',
  },
} satisfies Record<string, Item>;

export default items;
