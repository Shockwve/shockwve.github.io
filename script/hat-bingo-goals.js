var bingoList = [];

bingoList[1] = [
  { name: "Obtain 2 hats", types: ["hat"] },
  { name: "Open 4 Chests in Mafia Town", types: ["chest"] },
  { name: "Activate and complete 2 Pon Party Balls", types: ["pon"] },
];
bingoList[2] = [
  { name: "Rumbi Selfie", types: ["selfie"] },
  { name: "Buy 1 Badge", types: ["badge"] },
];
bingoList[3] = [
  { name: "Beach Selfie" , types: ["selfie"] },
  { name: "Collect 5 Relics", types: ["relic"] },
  { name: "Collect 15 Yarn", types: ["yarn"] },
];
bingoList[4] = [
  { name: "Collect 2 Badges", types: ["badge"] },
  { name: "Obtain 3 hats", types: ["hat"] },
  { name: "Save 3 men from the mafia's beating", types: [""] },
];
bingoList[5] = [
  { name: "Collect the Scooter Badge", types: ["badge"] },
  { name: "Collect 3 Badges", types: ["badge"] },
  { name: "Juice Bar? Selfie" , types: ["selfie"] },
];
bingoList[6] = [
  { name: "Repair 1 Relic" , types: ["relic"] },
  { name: "Collect a net total of 500 Pons", types: ["pon"] },
  { name: "Collect 3 roullette tokens", types: ["relic"] },
];
bingoList[7] = [
  { name: "Craft 3 hats", types: ["hat"] },
  { name: "Get 2 time pieces from time rifts", types: ["rift"] },
  { name: "Repair 2 Relics", types: [""] },
];
bingoList[8] = [
  { name: "Complete 1 Pink Time rift", types: ["rift"] },
  { name: "Collect all the Photo Album pieces from Mafia of Cooks", types: ["rift"] },
  { name: "Collect all comic pieces from one pink time rift", types: ["rift"] },
];
bingoList[9] = [
  { name: "Complete A Murder On Owl Express with collecting 0 evidence", types: ["act"] },
  { name: "Repair 3 Relics", types: ["relic"] },
  { name: "Gallery Time Rift", types: ["rift"] },
];
bingoList[10] = [
  { name: "Complete 2 pink rifts", types: ["rift"] },
  { name: "Dweller Mask", types: ["hat"] },
  { name: "Relic at the top of Subcon's Tree", types: ["relic"] },
];
bingoList[11] = [
  { name: "Craft 4 hats", types: ["hat"] },
  { name: "Buy the Mumble Badge", types: ["badge"] },
  { name: "Collect 1000 Pons", types: ["pon"] },
];
bingoList[12] = [
  { name: "Collect 3 yarns in subcon", types: ["yarn"] },
  { name: "Storytime Selfie", types: ["selfie"] },
  { name: "Get into the Mailroom without the Ice Hat", types: [""] },
];
bingoList[13] = [
  { name: "Parade Selfie", types: ["selfie"] },
  { name: "Open 3 chests in Subcon", types: ["chest"] },
  { name: "Defeat Snatcher", types: ["boss"] },
];
bingoList[14] = [
  { name: "Destroy 3 tracker eyeballs in Subcon forest", types: ["etc"] },
  { name: "Owl Express Rift", types: ["rift"] },
  { name: "Train rush with 100+ seconds left", types: ["act"] },
];
bingoList[15] = [
  { name: "Complete 3 painting burning rituals in Subcon", types: ["etc"] },
  { name: "Complete The Big Parade", types: ["act"] },
  { name: "Collect 5 roullette tokens", types: ["relic"] },
];
bingoList[16] = [
  { name: "Beat any finale excluding fake finale", types: ["boss"] },
  { name: "Beat 2 Bosses", types: ["boss"] },
  { name: "Kill the Toilet of Doom", types: ["boss"] },
];
bingoList[17] = [
  { name: "Repair all Relics", types: ["selfie"] },
  { name: "Vanessa Selfie", types: ["selfie"] },
  { name: "The Moon Rift", types: ["rift"] },
];
bingoList[18] = [
  { name: "Make the Conductor win the award", types: ["botb"] },
  { name: "Make DJ Grooves win the award", types: ["botb"] },
  { name: "Alpine Skyline Pink Rift", types: ["botb"] },
];
bingoList[19] = [
  { name: "1000 points in Battle of the Birds Feud", types: ["botb"] },
  { name: "Collect 15 Time Pieces", types: ["tp"] },
  { name: "Get the chest at the Goat Refinery", types: ["alpine"] },
  { name: "Curly Tail Trail Rift", types: ["rift"]}
];
bingoList[20] = [
  { name: "Get the chest at Purrloined Village", types: ["alpine"] },
  { name: "Blow the horn in Mystifying Time Mesa", types: ["alpine"] },
  { name: "Selfie riding the Windmill in Alpine", types: ["alpine"] },
];
bingoList[21] = [
  { name: "Craft Time Stop Hat", types: ["hat"] },
  { name: "Complete 1 act from Alpine Skyline", types: ["act"] },
  { name: "1 Rift from each Chapter", types: ["rift, tp"] },
];
bingoList[22] = [
  { name: "Birdie Selfie", types: ["selfie"] },
  { name: "Collect 20 time pieces", types: ["tp"] },
  { name: "3 Acts from each Chapter", types: ["act, tp"] },
];
bingoList[23] = [
  { name: "All Acts in Skyline", types: ["act"] },
  { name: "Collect 25 time pieces", types: ["tp"] },
  { name: "Golden Girl Selfie", types: ["selfie"] },
];
bingoList[24] = [
  { name: "Crybaby - Run away crying from Moustache Girl", types: ["etc"]},
  { name: "Final Boss Fight Selfie", types: ["selfie"] },
  { name: "Take a number in Time's End", types: ["etc"] },
];
bingoList[25] = [
  { name: "Collect 30 time pieces", types: ["tp"] },
  { name: "All blue time rifts", types: ["rift"] },
  { name: "Beat every boss", types: ["boss"] },
];

$(function() { srl.bingo(bingoList, 5); });