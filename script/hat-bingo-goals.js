var bingoList = [];

bingoList[1] = [
  { name: "Craft 2 hats", types: ["hat"] },
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
  { name: "Craft 3 Hats", types: ["hat"] },
  { name: "Save 3 men from the mafia's beating", types: [""] },
];
bingoList[5] = [
  { name: "Collect 3 Badges", types: ["badge"] },
  { name: "Juice Bar? Selfie" , types: ["selfie"] },
  { name: "Open 3 chests in Subcon", types: ["chest"] },
];
bingoList[6] = [
  { name: "Repair 1 Relic" , types: ["relic"] },
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
  { name: "Grab all 4 golden tickets in Golden Vault", types: ["act"] },
  { name: "Collect the Scooter Badge", types: ["badge"] },
  { name: "Complete all 4 endorsements in Picture Perfect", types: ["act"] },
];
bingoList[10] = [
  { name: "Complete 2 pink rifts", types: ["rift"] },
  { name: "Dweller Mask", types: ["hat"] },
  { name: "Relic at the top of Subcon's Tree", types: ["relic"] },
];
bingoList[11] = [
  { name: "Open 3 chests in Dead Bird Studio", types: ["hat"] },
  { name: "Repair 3 Relics", types: ["relic"] },
  { name: "Collect 3 yarns in subcon", types: ["yarn"] },
];
bingoList[12] = [
  { name: "Get all photo album pieces from DBS Rift", types: ["rift"] },
  { name: "Selfie at the top of floating stonehenge", types: ["selfie"] },
];
bingoList[13] = [
  { name: "Gather all 6 evidence pieces in Murder on the Owl Express", types: ["yarn"] },
  { name: "Storytime Selfie", types: ["selfie"] },
  { name: "Get into the Mailroom without the Ice Hat", types: [""] },
];
bingoList[14] = [
  { name: "Parade Selfie", types: ["selfie"] },
   { name: "Vanessa Selfie", types: ["selfie"] },
  { name: "Get all 10 Time Pieces from Mafia Town", types: ["tp"] },
];
bingoList[15] = [
  { name: "Destroy 3 tracker eyeballs in Subcon forest", types: ["etc"] },
  { name: "Owl Express Rift", types: ["rift"] },
  { name: "Train rush with 100+ seconds left", types: ["act"] },
   { name: "Beat 2 Bosses", types: ["boss"] },
];
bingoList[16] = [
  { name: "Complete 3 painting burning rituals in Subcon", types: ["etc"] },
  { name: "Collect 5 roullette tokens", types: ["relic"] },
  { name: "Craft 4 hats", types: ["hat"] },
];
bingoList[17] = [
  { name: "Beat any finale excluding fake finale", types: ["boss"] },
  { name: "Kill the Toilet of Doom", types: ["boss"] },
  { name: "Complete The Big Parade", types: ["act"] },
];
bingoList[18] = [
   { name: "Collect all photo album pieces from Sleepy Subcon rift", types: ["rift"] },
  { name: "Create a relic in The Lab", types: [""] },
];
bingoList[19] = [
  { name: "Repair all Relics", types: [""] },
  { name: "1000 points in Battle of the Birds Feud", types: ["botb"] },
  { name: "The Moon Rift", types: ["rift"] },
];
bingoList[20] = [
 { name: "Make DJ Grooves win the award", types: ["botb"] },
 { name: "Make the Conductor win the award", types: ["botb"] },
  { name: "Defeat Snatcher", types: ["boss"] },
];
bingoList[21] = [
  { name: "Get the chest at Purrloined Village", types: ["alpine"] },
  { name: "Collect 15 Time Pieces", types: ["tp"] },
];
bingoList[22] = [
 { name: "Get the chest at the Goat Refinery", types: ["alpine"] },
 { name: "Selfie with a goat", types: ["selfie"] },
 { name: "Green Screen Selfie in DBS Basement", types: ["selfie"] },
];
bingoList[23] = [
  { name: "1 Rift from each Chapter", types: ["rift, tp"] },
  { name: "Get all the photo album pieces from Alpine Skyline Rift", types: ["rift"] },
];
bingoList[24] = [
  { name: "Blow the horn in Mystifying Time Mesa", types: ["alpine"] },
  { name: "Birdie Selfie", types: ["selfie"] },
  { name: "Craft Time Stop Hat", types: ["hat"] },
  { name: "Selfie with a ghost goat in The Twilight Bell", types: ["selfie"] },
];
bingoList[25] = [
  { name: "Curly Tail Trail Rift", types: ["tp"] },
  { name: "Complete 1 act from Alpine Skyline", types: ["rift"] },
  { name: "Selfie riding the Windmill in Alpine", types: ["alpine"] },
  { name: "Complete all acts in Battle of the Birds", types: ["botb"] },
];

$(function() { srl.bingo(bingoList, 5); });
