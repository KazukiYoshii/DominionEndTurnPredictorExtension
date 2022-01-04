function getFeatures() {
    const vocab = [
        'no_card', 'no_colonies', 'no_shelters', 'no_landspace', 'shelters', 'colonies',
        'stockpile', 'gardens', 'bridge', 'stonemason', 'remodel', 'butcher', 'workshop',
        'fools-gold', 'animal-fair', 'moat', 'council-room', 'soothsayer', 'artisan',
        'ironworks', 'mine', 'pixie', 'hermit', 'lighthouse', 'market', 'wharf',
        'tunnel', 'merchant', 'talisman', 'jack-of-all-trades', 'haggler', 'groom',
        'silk-road', 'hoard', 'barge', 'mill', 'kiln', 'vassal', 'cellar', 'explorer',
        'smithy', 'fisherman', 'camel-train', 'bridge-troll', 'transmogrify', 'bandit',
        'fool', 'bounty-hunter', 'sheepdog', 'guardian', 'harem', 'chapel', 'falconer',
        'library', 'poacher', 'moneylender', 'peddler', 'wayfarer', 'candlestick-maker',
        'squire', 'supplies', 'haven', 'salvager', 'goatherd', 'caravan-guard', 'harbinger',
        'masterpiece', 'courtyard', 'festival', 'treasure-map', 'horn-of-plenty',
        'laboratory', 'pawn', 'menagerie', 'replace', 'island', 'amulet', 'quarry',
        'farmers-market', 'bureaucrat', 'baron', 'village', 'messenger', 'gatekeeper',
        'displace', 'remake', 'farmland', 'fortune-teller', 'venture', 'beggar', 'tragic-hero',
        'jester', 'expand', 'guide', 'royal-seal', 'steward', 'fishing-village',
        'develop', 'coin-of-the-realm', 'cache', 'feodum', 'ratcatcher', 'engineer',
        'embargo', 'caravan', 'watchtower', 'den-of-sin', 'pearl-diver', 'capital',
        'embassy', 'gear', 'duchess', 'dismantle', 'courtier', 'ill-gotten-gains',
        'trading-post', 'wine-merchant', 'nomad-camp', 'taxman', 'forager', 'navigator',
        'duke', 'gladiator', 'merchant-ship', 'sacrifice', 'harvest', 'trader',
        'horse-traders', 'forge', 'merchant-guild', 'bank', 'spices', 'graverobber',
        'snowy-village', 'trade-route', 'coven', 'treasure-trove', 'sacred-grove',
        'baker', 'counting-house', 'contraband', 'inventor', 'marauder', 'cutpurse',
        'counterfeit', 'altar', 'fairgrounds', 'armory', 'noble-brigand', 'upgrade',
        'secret-passage', 'hireling', 'night-watchman', 'poor-house', 'governor',
        'black-cat', 'market-square', 'tactician', 'scavenger', 'bard', 'lost-city',
        'raider', 'oasis', 'herbalist', 'treasury', 'faithful-hound', 'silk-merchant',
        'grand-market', 'destrier', 'duplicate', 'mandarin', 'leprechaun', 'cobbler',
        'city', 'ghost-town', 'scrap', 'procession', 'ranger', 'monument', 'mint',
        'rats', 'lurker', 'vineyard', 'charm', 'highway', 'crypt', 'conclave',
        'lackeys', 'castles', 'distant-lands', 'transmute', 'royal-blacksmith',
        'archive', 'vagrant', 'scheme', 'journeyman', 'vault', 'lookout',
        'raze', 'warehouse', 'village-green', 'junk-dealer', 'death-cart',
        'nobles', 'oracle', 'hunting-grounds', 'diplomat', 'pillage', 'conspirator',
        'storeroom', 'prince', 'patrician', 'bazaar', 'mystic', 'herald',
        'catacombs', 'bishop', 'cursed-village', 'university', 'sleigh',
        'cemetery', 'border-village', 'sage', 'workers-village', 'temple', 'changeling',
        'pirate-ship', 'port', 'throne-room', 'necromancer', 'cartographer', 'walled-village',
        'paddock', 'farming-village', 'rabble', 'native-village', 'improve', 'sentry',
        'miser', 'shanty-town', 'patrol', 'count', 'wishing-well', 'giant', 'druid',
        'skulk', 'mining-village', 'haunted-woods', 'monastery', 'hamlet', 'loan',
        'idol', 'settlers', 'devils-workshop', 'apprentice', 'relic', 'enchantress',
        'villa', 'masquerade', 'livery', 'envoy', 'philosophers-stone', 'magpie',
        'tracker', 'pooka', 'plaza', 'rogue', 'crossroads', 'spice-merchant',
        'hostelry', 'sanctuary', 'royal-carriage', 'hunting-lodge', 'cargo-ship',
        'apothecary', 'tormentor', 'golem', 'bandit-camp', 'ducat', 'forum',
        'acting-troupe', 'smugglers', 'rebuild', 'sculptor', 'hunting-party',
        'blessed-village', 'swamp-hag', 'treasurer', 'patron', 'wild-hunt',
        'priest', 'doctor', 'young-witch', 'ironmonger', 'werewolf', 'dungeon',
        'swashbuckler', 'stables', 'crown', 'fortress', 'cavalry', 'artificer',
        'flag-bearer', 'witch', 'advisor', 'scholar', 'encampment', 'legionary',
        'villain', 'scepter', 'inn', 'band-of-misfits', 'research', 'experiment',
        'storyteller', 'mastermind', 'militia', 'old-witch', 'chariot-race',
        'secret-cave', 'vampire', 'alchemist', 'seer', 'hideout', 'cardinal',
        'margrave', 'minion', 'overlord', 'wandering-minstrel', 'outpost',
        'sauna', 'shepherd', 'mountain-village', 'exorcist', 'page', 'city-quarter',
        'recruiter', 'groundskeeper', 'border-guard', 'kings-court', 'sea-hag',
        'torturer', 'peasant', 'catapult', 'goons', 'scrying-pool', 'familiar',
        'mountebank', 'ghost-ship', 'ambassador', 'church', 'knights', 'cultist',
        'tower', 'urchin', 'advance', 'black-market', 'obelisk', 'borrow', 'swindler',
        'captain', 'salt-the-earth', 'trade', 'delve', 'save', 'fountain', 'wedding',
        'triumphal-arch', 'ball', 'pilgrimage', 'plan', 'alms', 'quest', 'seaway',
        'windfall', 'training', 'banquet', 'raid', 'tomb', 'museum', 'bonfire',
        'ferry', 'scouting-party', 'expedition', 'conquest', 'ritual', 'arena',
        'summon', 'labyrinth', 'travelling-fair', 'orchard', 'wolf-den', 'baths',
        'annex', 'cathedral', 'triumph', 'palace', 'aqueduct', 'guildhall', 'lost-arts',
        'defiled-shrine', 'basilica', 'exploration', 'colonnade', 'sinister-plot',
        'dominate', 'bandit-fort', 'fair', 'sewers', 'crop-rotation', 'city-gate',
        'piazza', 'canal', 'barracks', 'pathfinding', 'pageant', 'road-network',
        'star-chart', 'donate', 'capitalism', 'battlefield', 'innovation', 'tournament',
        'keep', 'academy', 'fleet', 'mountain-pass', 'tax', 'silos', 'mission',
        'inheritance', 'wall', 'citadel', 'desperation', 'ride', 'alliance', 'enclave',
        'transport', 'enhance', 'bargain', 'delay', 'commerce', 'demand', 'reap',
        'march', 'seize-the-day', 'toil', 'banish', 'way-of-the-worm', 'way-of-the-sheep',
        'stampede', 'pursue', 'way-of-the-monkey', 'way-of-the-goat', 'way-of-the-turtle',
        'way-of-the-squirrel', 'way-of-the-camel', 'way-of-the-seal', 'populate',
        'way-of-the-pig', 'way-of-the-rat', 'way-of-the-mule', 'way-of-the-owl',
        'way-of-the-otter', 'way-of-the-frog', 'way-of-the-butterfly', 'invest',
        'gamble', 'way-of-the-chameleon', 'way-of-the-mouse', 'way-of-the-mole',
        'way-of-the-ox', 'way-of-the-horse', 'possession', 'day'
    ]

    var mini_card_arts = document.getElementsByClassName('mini-card-art');
    var card_arts = document.getElementsByClassName('full-card-art');
    var landscape_arts = document.getElementsByClassName('landscape-art');
    var card_names = []

    var shelters = 'no_shelters'
    var colonies = 'no_colonies'
    try {
        for (var i = 0; card_arts.length; i++) {
            var card_name = card_arts[i].style.backgroundImage.split("/")[4].split(".")[0]
            //console.log(card_arts[i].style.backgroundImage.split("/")[4].split(".")[0])
            if (vocab.includes(card_name)){
                card_names.push(card_name)
            }
            if (card_name == 'overgrown-estate') {
                shelters = 'shelters'
            }
        };
    } catch (error) {}

    // 魔女娘用
    if (card_names.length <= 10) {
        card_names.push('no_card')
    }

    try {
        for (var i = 0; mini_card_arts.length; i++) {
            var card_name = mini_card_arts[i].style.backgroundImage.split("/")[4].split(".")[0]
            if (card_name == 'mini-colony') {
                colonies = 'colonies'
            }
        };
    } catch (error) {}
    card_names.push(shelters)
    card_names.push(colonies)

    var num_landspace = 0;
    try {
        for (var i = 0; landscape_arts.length; i++) {
            var card_name = landscape_arts[i].style.backgroundImage.split("/")[4].split(".")[0]
            //console.log(landscape_arts[i].style.backgroundImage.split("/")[4].split(".")[0])
            if (vocab.includes(card_name) && !(card_names.includes(card_name))){
                card_names.push(card_name)
                num_landspace++;
            }
        };
    } catch (error) {}

    var cnt = 2 - num_landspace;
    for (var i = 0; i < cnt; i++){
        card_names.push('no_landspace')
    }

    var player1_rate = 60.0
    var player2_rate = 60.0
    var log_line = document.getElementsByClassName('log-line');
    var tmp_player1_rate = parseFloat(log_line[0].textContent.split(': ')[1].slice( 0, 5 ))
    var tmp_player2_rate = parseFloat(log_line[0].textContent.split(': ')[2].slice( 0, 5 ))

    if (!isNaN(tmp_player1_rate)){
        player1_rate = tmp_player1_rate
    }
    if (!isNaN(tmp_player2_rate)){
        player2_rate = tmp_player2_rate
    }

    var player_rates = [player1_rate, player2_rate]
    //console.log(card_names)
    //console.log(player_rates)

    var data = {supply: card_names, player_rates: player_rates}
    console.log(data)
    return data
};

// message: {action, url}
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message && message.action === 'GET_SUPPLY_INFO') {
    sendResponse(getFeatures());
  }
});