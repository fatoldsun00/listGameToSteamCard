<script setup lang="ts">
import { ref } from "vue";
import type { Game } from "@/type/Game";
const defaultListGame = `1 Screen Platformer
  10 Second Ninja X
  100% Orange Juice
  100 Things to See in the Night Sky
  100 Things to See in the Southern Night Sky
  1,001 Facts That Will Scare the S#*t Out of You
  112 Operator
  140
  2Dark
  911 Operator
  A Case of Distrust
  A Fisherman's Tale
  A Glider's Journey
  A Short Hike
  A Story About My Uncle
  A Year of Rain
  Aaero
  Aarklash: Legacy
  Abalone
  Absolver
  Acceleration of SUGURI 2
  Adom
  Advanced Roblox Coding Book: An Unofficial Guide
  Adventure Boy Cheapskate DX
  The Adventure Pals
  Adventure Time: Pirates of the Enchiridion
  after HOURS
  Ageless
  Agents of Mayhem (EU)
  Agricola: All Creatures Big and Small
  AI War 2
  Alan Wake's American Nightmare
  All In 1 Sprite Shader
  The Ambassador: Fractured Timelines
  American Fugitive
  Amnesia Fortnight 2012
  Amnesia Fortnight 2014
  Amnesia Fortnight 2017
  Amnesia: Rebirth
  Among Us
  Anachronox
  Anatomy 101
  Ancestors: The Humankind Odyssey
  Animal Super Squad
  Anomaly 2
  Anomaly Defenders
  Anomaly Korea
  Anomaly: Warzone Earth
  Antichamber
  Apex Construct
  Architecture 101
  Arizona Sunshine
  Armello
  Artemis: God-Queen of The Hunt
  As Far as the Eye
  Ashes of the Singularity: Escalation
  Assassin's Creed® Origins
  Assault Android Cactus
  Astronomy 101
  Atomicrops
  Automachef
  Aven Colony
  Aviary Attorney
  Balancelot
  Barony
  Bastion
  Batalj BETA
  Battle Chasers Nightwar
  Battlestation: Harbinger Soundtrack
  Battlevoid: Harbinger
  Bear With Me - Collector's Edition
  The Beast Inside
  Beat Cop
  Beatbuddy: Tale of the Guardians
  Bee Simulator
  Ben 10
  Beware Planet Earth!
  Bizarre World
  Black Future '88
  Black the Fall
  Blacksmith
  Blade & Bones
  Blasters of the Universe
  Blaston
  Bleed 2
  Bleeding Edge Press Video Course: Kong
  Bloodstained
  Blue Fire
  Board Battlefield
  Boid (Early Access)
  Book of Demons
  Boomerang Fu
  Booth
  Border Force
  Boreal Blade
  BPM: Bullets Per Minute
  Braid
  Broken Age
  Brütal Legend
  Budget Cuts 2
  Building Apps with Riot
  Call of Cthulhu
  Call of Duty: Black Ops 4 Additional Content
  Call of Duty: Black Ops 4 C.O.D.E. Salute Pack
  Call of Duty: Black Ops 4 Standard Edition
  Carcassonne - Inns & Cathedrals
  Carcassonne - The Princess and The Dragon DLC
  Carcassonne - The River
  Carcassonne - Tiles & Tactics
  Carcassonne - Traders & Builders DLC
  Carcassonne - Winter & Gingerbread Man DLC
  CardLife: Cardboard Survival
  CARRION (Steam)
  Carto
  Castle of Illusion
  Catan: Creator's Edition
  Cathedral
  The Cave
  Cepheus Protocol
  Chaos on Deponia
  Chatbots for eCommerce
  Children of Morta
  Chivalry: Medieval Warfare
  Cities in Motion 2
  Civilization VI - Australia Civilization & Scenario Pack
  Civilization VI - Vikings Scenario Pack
  Clatter
  Clicker bAdventure
  Cloudborn
  Codex of Victory
  Colt Canyon
  Colt Express
  The Coma 2: Vicious Sisters
  Company of Heroes
  Contractors
  Contraption Maker
  Control
  Convoy
  Cook, Serve, Delicious! 2!!
  Cook, Serve, Delicious 3
  Cook-Out
  Cool Cars / Cartooning
  Co-open
  THE CORRIDOR
  Costume Quest
  The Counting Kingdom
  Crawl
  Crayola Scoot
  Crazy Plant Shop
  Creating Interfaces with Bulma
  CreatorCrate
  Creed: Rise to Glory
  Crusader Kings II: Dynasty Starter Pack
  CryoFall
  Crypt of the NecroDancer
  Cube Link
  Cyber Hook
  Dad’s Book of Awesome Science Experiments
  Daikatana
  Dandara
  DARK SOULS™ III
  Darkest Dungeon
  Darksiders Genesis
  Day of the Tentacle Remastered
  Dead by Daylight - Curtain Call
  Dead by Daylight - Of Flesh and Mud
  Dead by Daylight - Spark of Madness
  Dead Synchronicity: Tomorrow Comes Today
  Deadlight: Director's Cut
  Deadly Days
  Death Squared
  Deathgarden™: BLOODHARVEST
  Death's Gambit
  Deep Dungeons of Doom
  Deep Learning in the Browser
  Deleveled
  Deponia
  Desolate
  Destiny 2
  Detective Case and Clown Bot in: Murder in the Hotel Lisbon
  Developing a gulp Edge
  Developing a hapi Edge
  Developing a React.js Edge
  Developing an Electron Edge
  Dino Run DX
  Dirt 5
  Disjunction
  Divekick
  Divide By Sheep
  DLC redemption
  DNA is You!
  Do Not Feed the Monkeys
  Don't Stand Out
  Double Fine Adventure
  Down The Rabbit Hole
  Downtown Drift
  Dragon Fist: VR Kung Fu
  Drake Hollow
  Draw Your Game
  Drawing: Manga
  Drawkanoid
  Dreadlands
  DreamWorks Dragons: Dawn of New Riders
  Drink More Glurp Jingle Jam Challenge
  Duck Game
  Ducktales: Remastered
  Due Process
  Dungelot: Shattered Lands
  Dungeon Defenders + All DLC
  Dungeon Defenders Soundtrack
  Dungeon Escape
  Duskers
  Dust: An Elysian Tail
  Dustforce DX
  Dustforce Soundtrack
  Effie
  The Elder Scrolls® Online: Tamriel Unlimited™
  Elderborn
  Elex
  Elite Dangerous - Cobra Mk III ship skin
  ENCODYA
  Endless Space® 2 - Digital Deluxe Edition
  ENSLAVED™: Odyssey to the West™ Premium Edition
  Escape Goat 2
  Etherborn
  Euro Truck Simulator 2
  Everyday Amazing
  Everything
  Evolve
  EXAPUNKS
  F1 2019 Anniversary Edition
  F1 2020
  Facts From Space!
  Fae Tactics Sneak Peek
  Fahrenheit: Indigo Prophecy Remastered
  Family Man
  Feather
  FEZ
  FEZ Soundtrack
  Fighting Fantasy Legends
  The Final Station
  Finding Paradise
  Fire
  fistful of nothing
  The Flame in the Flood
  Fling to the Finish
  Flux8
  Fort Meow
  Fort Triumph
  Fortune-499
  Framed Collection
  Freaky Awesome
  Frog Detective
  Frog Detective 2
  Frostpunk
  FTL: Faster than Light
  Full Metal Furies
  Full Throttle Remastered
  Fury Unleashed
  Future Proof
  Game Dev Studio
  Gang Beasts
  GARAGE: Bad Trip
  The Gardens Between
  Gems of War – Demon Hunter Bundle
  Genesis Alpha One Deluxe Edition
  Genetics 101
  GET EVEN
  Get Your Learn on Special Instructions
  Giana Sisters: Twisted Dreams
  GNOG
  Going Under
  Gone Home
  Goodbye Deponia
  Graveyard Keeper
  The Greater Good
  Grim Fandango Remastered
  Grimm & Tonic
  GRIP: Combat Racing
  The Groundz
  Guacamelee! Gold Edition
  Guacamelee! Soundtrack
  Guild Wars 2: Heroic Edition
  Guild Wars 2: Toy Mini Eye DLC
  Guild Wars: Eye of the North DLC
  Guild Wars: Nightfall
  GUILTY GEAR Xrd REV 2
  GUILTY GEAR Xrd -SIGN-
  Guns of Icarus Alliance
  Guts and Glory
  Hack 'n' Slash
  Hacknet
  HackyZack
  Hamble Coloring Pages
  Hamble Wallpaper Pack
  Hammerting
  Hand of Fate 2
  Harald: A Game of Influence
  HARD BULLET
  The Haunted Island, a Frog Detective Game
  The Haunting of Billy
  Headlander
  Heave Ho
  Heaven's Vault
  Heeey! Park-Boy
  Hello Neighbor
  Hello Pollution!
  Hellpoint
  HERO DEFENSE
  The Hex
  Hitman 2: Silent Assassin
  Hitman: Codename 47
  Hitman GO: Definitive Edition
  Hiveswap Friendsim
  Hollow Knight
  Holy Potatoes! We're in Space?!
  Hotline Miami
  Hotshot Racing
  House Flipper
  How to Draw Magical, Monstrous & Mythological Creatures
  How to Draw Vampires
  How to Survive 2
  Humble Soundtrack
  Hyperdrive Massacre
  Ikenfell
  I'm not a Monster
  In memory of TITAN
  In Other Waters
  In the Company of Trees
  Indecision.
  Indivisible
  Influent
  Into the Breach
  Into the Radius VR
  INVERSUS Deluxe
  Invisible Inc.
  Iris and the Giant
  Iron Brigade
  Joggernauts DRM-Free
  Joggernauts (Steam)
  John Wick Hex
  The Journey Down: Chapter Three
  JUMANJI: The Video Game
  Jurassic World Evolution
  Kabounce
  Kalaban
  Katana Zero
  Keebles
  Ken Follett's The Pillars of the Earth
  KIDS
  Kill It With Fire
  Killing Floor 2
  King and Assassins
  Kingdom: Classic
  Kingdom: New Lands
  Kingdom Two Crowns
  Kong: Becoming a King of API Gateways
  Lakeview Cabin Collection
  Lara Croft GO
  Last Day of June
  Last Encounter
  Last Oasis
  Le Havre: The Inland Port
  LEGO Batman
  LEGO® Batman 2 DC Super Heroes™
  LEGO Batman 3: Beyond Gotham
  LEGO® City Undercover
  LEGO Harry Potter: Years 1-4
  LEGO Harry Potter: Years 5-7
  The LEGO® Movie - Videogame
  LEGO® Worlds
  Levelhead
  Life is Strange Complete Season (Episodes 1-5)
  LIMBO
  LISA
  Little Big Workshop
  The Lord of the Rings Adventure Card Game
  Lost Castle
  Lost in the Dungeon
  LostWinds 2: Winter of the Melodias
  LOVE
  Love Letter
  Lovecraft's Untold Stories
  Lucius Demake
  Ludwig
  Macdows 95
  Machinarium
  Mages of Mystralia
  Magicka 2
  Magnifico
  Main Assembly
  Majesty 2 Collection
  Marvin's Mittens
  Masquerade: The Baubles of Doom
  Massive Chalice
  Match Point
  Math Geek
  MetaMorph: Dungeon Creatures
  Metro Exodus
  Middle-earth: Shadow of War
  Milky Way Prince – The Vampire Star
  Mindball Play
  Mini Ninjas
  MINIT
  Minoria
  Misadventures of Laura Silver: Chapter 1
  MO:Astray
  Mobius Front '83
  Momodora: Reverie Under The Moonlight
  Monaco
  Monster Loves You!
  Monster Prom
  Monster Train
  Morkredd
  Mortal Kombat 11
  Mortal Kombat X
  Motorsport Manager
  Mountain
  Move or Die
  Moving Out
  Mr. Shifty
  Mugsters
  Must Dash Amigos
  Mutant Year Zero: Road to Eden
  My Friend Pedro
  My Friend Peppa Pig
  Mysterium - Hidden Signs
  Mysterium - Secrets & Lies
  Mysterium: A Psychic Clue Game
  Naiad
  Narita Boy
  Nature is the Worst
  NBA 2K17
  Nemo Dungeon
  Neon Abyss
  NEOVERSE
  Nest.js: A Progressive Node.js Framework
  Niche - a genetics survival game
  Nidhogg
  Niffelheim
  Night Call
  The Night of the Rabbit
  Nimbatus The Space Drone Constructor
  Ninja Senki DX
  No Time To Explain Remastered
  Nongünz
  Northgard
  The Norwood Suite
  Not for Broadcast
  Not Tonight
  Nowhere Prophet
  Nuclear Throne
  The Occupation
  Of Orcs and Men
  Offworld Trading Company
  Okami HD
  Omensight: Definitive Edition
  On the Rain-Slick Precipice of Darkness, Episode One
  Once Upon A Crime In The West
  ONE PIECE BURNING BLOOD
  One Step from Eden
  Opus Magnum
  Orwell
  Out of Space
  Out There: Ω Edition
  Outcast - Second Contact
  Outlast
  Outward
  Overcooked
  Overcooked! 2
  Overgrowth
  Overruled!
  Owlboy
  Pac-Man 256
  PAC-MAN™ CHAMPIONSHIP EDITION 2
  Pandemic: The Board Game
  Panoptic
  Panzer Paladin
  Paper Beast
  Paper Fire Rookie
  Paperbark
  Paradigm
  Paradise Killer
  Paratopic
  Partial Control
  Patchwork
  Path of Giants
  Pathfinder Adventures
  Pathfinder Kingmaker Explorer Edition
  Pathologic 2
  PAW Patrol Mighty Pups Save Adventure Bay
  Paw Patrol: On A Roll!
  Paw Paw Paw
  PC Building Simulator
  Peaky Blinders: Mastermind
  Perfect Heist
  Pesterquest
  PGA TOUR 2K21
  Phantom Abyss (Steam)
  Physics of Star Wars
  Pillars of Eternity
  Pistol Whip
  Pizza Titan Ultra
  Planet Coaster
  Planetary Annihilation
  PLAYERUNKNOWN'S BATTLEGROUNDS
  POLYGON - Prototype Pack
  POLYGON - Western Pack
  Pool Panic
  Popup Dungeon
  Potatoman Seeks the Troof
  Potion Explosion
  PowerBeatsVR
  Practical gRPC
  Primal Carnage: Extinction
  Professor Lupo and his Horrible Pets (Steam)
  Progressive Web Apps with Preact
  Project Wingman
  Propagation VR - Co-op
  Psych 101
  Psych Experiments
  Psychonauts
  Pumped BMX +
  Q.U.B.E.: Director's Cut
  Q.U.B.E. Soundtrack
  Quest of Dungeons
  Quiet City
  Race The Sun
  RAD
  Ragnarock
  Rainy Season
  Rapture Rejects
  Raw Data
  Rayman® Legends
  Rayman® Origins
  R-COIL
  Rebound Dodgeball Evolved
  Red Faction Guerrilla Re-Mars-tered
  Red Horizon
  Red Matter
  Red Orchestra 2: Heroes of Stalingrad with Rising Storm
  Regular Human Basketball
  Relicta
  Remothered: Broken Porcelain
  Retimed
  Retired Men's Nude Beach Volleyball
  Ring of Pain
  Rising Dusk
  Röki
  Road Doom
  Road to Ballhalla
  Rock of Ages 2: Bigger & Boulder™
  Rock Of Ages 3
  Rogue Mansion
  Rogue Rocks
  ROUNDS
  Ruin Raiders - Unknown Menace
  Satellite Reign
  Scanner Sombre
  Science of Marvel
  ScourgeBringer DEMO
  Scythe: Digital Edition
  Secret Neighbor
  Secret Ponchos
  Sensor Toolkit
  Sentinels of the Multiverse
  Serial Cleaner
  She Remembered Caterpillars
  Shenmue III
  SHENZHEN I/O
  Sherlock Holmes: The Devil's Daughter
  Shining Resonance Refrain
  Sid Meier's Civilization® VI
  Simple Acts to Save Our Planet
  Simple Rockets 2
  SIMULACRA
  SIMULACRA 2
  Sins of a Solar Empire: Rebellion
  Sir, You Are Being Hunted
  Size Matters
  Skullgirls + All Characters + Color Palette Bundle DLC
  Skullgirls + All Characters and Color Palette Bundle
  Skully
  Skyfront VR (Steam)
  SkyScrappers
  Slay the Spire
  Slime-san
  Sluggish Morss Pattern Circus
  Small World 2
  SMUSH.TV - Competitive VR x PC Action (Steam)
  Snake Pass
  Sniper Elite 3
  Sniper Ghost Warrior Contracts
  Sokobond
  SOMA
  Song of Horror
  Songs of Skydale
  Sorcery! Part 3
  Space Pilgrim Episode 1: Alpha Centauri
  Space Pilgrim Episode I: Alpha Centauri
  Space Routine
  Spacebase DF-9
  Spec Ops: The Line
  Spider: Rite of the Shrouded Moon
  SPLASH BLAST PANIC
  Splasher
  Splendor
  Splotches
  Squidlit
  Stacking
  Star Wars™: Squadrons
  Star Wars Vs. Star Trek
  Stars in Shadow
  Starseed Pilgrim
  Statistics 101
  Steel Rats
  Stick Fight: The Game
  Still There
  The Stillness of the Wind
  Stories: The Path of Destinies
  Street Fighter V
  Struggling
  Stubbs the Zombie in Rebel Without a Pulse
  Styx: Master of Shadows
  Styx: Shards of Darkness
  Subserial Network
  Subsurface Circular
  Summertime Madness
  Super Animal Royale
  Super Chicken Catchers
  Super Daryl Deluxe
  Super Meat Boy
  Super Steampunk Pinball 2D
  Superliminal
  Sure Footing
  The Surge 2
  Swag & Sorcery
  The Swapper
  S.W.I.N.E. HD Remaster
  Switchblade Epic Pack DLC
  Switchblade Starter Pack
  The Swords of Ditto: Mormo's Curse
  Syberia 3
  Synth Riders
  Tabletop Playground
  Tacoma
  Takelings House Party
  Tales From Off-Peak City Vol. 1
  Tales of the Neon Sea
  Talisman: Digital Edition
  Tannenberg
  THE TEAR
  Temple of Xiala
  Tennis World Tour
  TensorFlow For Machine Intelligence
  Textorcist
  Them's Fightin' Herds
  Thief Gold
  Think of the Children
  THOR Thunderstorm
  THOTH
  Throne of Lies® The Online Game of Deceit
  Through the Darkest of Times
  Ticket to Ride
  Timelie
  Tom Clancy's The Division™
  Tools Up!
  Total Tank Simulator
  Totally Accurate Battlegrounds
  Tower 57
  Tower of Guns
  Tower Tag
  Traffic Jams
  Trailmakers
  Train Station Renovation
  TRANSFORMERS: BATTLEGROUNDS
  Trident's Wake (Steam)
  Trine
  Trine 2: Complete Story
  Trine 3: The Artifacts of Power
  Trine 4: The Nightmare Prince
  Trine Enchanted Edition
  Trine Enhanced Edition
  Tross
  Trover Saves the Universe
  Turnip Boy Commits Tax Evasion
  Twilight Struggle
  Two Point Hospital
  Type:Rider
  Ultimate Chicken Horse - Steam
  Ultimate Roblox Book: An Unofficial Guide
  Underwhere #1
  Underwhere #2
  Underwhere #3
  Underwhere #4
  Unit 4
  Unparallel
  Unrailed!
  Until You Fall
  Uplay Client (will download latest version)
  Upwards, Lonely Robot
  Vacation Simulator
  Valfaris
  Valkyria Chronicles 4 Complete Edition
  Vampire: The Masquerade - Shadows of New York
  Vampyr
  Vane
  Vanishing Realms
  Void Bastards
  VoidExpanse
  V-Rally 4
  VTOL VR
  Vue.js: Understanding its Tools and Ecosystem
  Wandersong
  Wands
  War for the Overworld
  Wargroove
  Warhammer 40,000: Gladius - Relics Of War
  Warhammer 40,000: Space Marine
  Warhammer: Chaosbane
  Warhammer: End Times - Vermintide
  Warhammer: Vermintide 2
  WARSAW
  Warstone TD
  We Need to Go Deeper
  We Were Here Together
  Weather 101
  Werewolf: The Apocalypse — Heart of the Forest
  West of Dead
  Westerado: Double Barreled
  What's Your STEM?
  Why Didn’t I Think of That?
  The Wild Eight
  Wildfire
  The Window Box
  Wingspan
  Wizorb
  World Of Goo
  World Of Goo Soundtrack
  Worms Blast
  Worms Crazy Golf
  Worms Rumble
  WRATH: Aeon of Ruin
  Wuppo
  WWE 2K Battlegrounds
  XCOM® 2
  XCOM: Chimera Squad
  Xenonauts
  Yakuza 0
  Yakuza 3 Remastered
  Yooka-Laylee
  YORG.io
  You Can Draw Manga Chibis
  Zero Caliber VR
  Zero G Arena
  Zodiac XX
  Zwei: The Arges Adventure
  Zwei: The Ilvard Insurrection
  `;

const emit = defineEmits(["update:games"]);

const listGames = ref(defaultListGame);
const games: Game[] = [];

const setGames = async () => {
  games.length = 0;
  //init games array with textArea
  listGames.value.split("\n").forEach((searchedName: string) => {
    games.push({ searchedName, notFound: false });
  });
  emit("update:games", games);
};
</script>

<template>
  <div>
    <textarea v-model="listGames" rows="5" cols="33"> </textarea>
    <button type="button" @click="setGames">Process list</button>
  </div>
</template>

<style scoped></style>
