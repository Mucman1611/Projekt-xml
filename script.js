// funkcija za simulaciju pretraživanja muzičkih zajednica (dinamički prikaz)
function pretraziZajednice() {
    const query = document.getElementById('searchQuery').value.trim();
    const platform = document.getElementById('platformSelect').value;
    const resultsDiv = document.getElementById('searchResults');
    
    if (!query && platform === 'sve') {
        resultsDiv.innerHTML = `<div class="mock-result">🔎 Unesite naziv izvođača, žanr ili zajednicu (npr. "metal", "kpop", "Billie Eilish") da vidite primjere diskusija.</div>`;
        return;
    }
    
    let displayText = '';
    const searchTerm = query === '' ? 'popularni izvođač' : query;
    
    // podaci simulirani za razlicite platforme
    const redditResults = [
        `r/Music: "Što mislite o novom albumu ${searchTerm}?" - 234 komentara`,
        `r/${searchTerm.replace(/\s/g,'')} : Fanovi raspravljaju o turneji`,
        `Trending: najbolje pjesme ${searchTerm} u 2025.`
    ];
    
    const twitterResults = [
        `🔥 #${searchTerm.replace(/\s/g,'')} trending s 45k tweetova`,
        `Fan account: "Upravo slušam ${searchTerm} – remek djelo"`,
        `Anketa: Najbolji album godine → ${searchTerm} vodi`
    ];
    
    const facebookResults = [
        `Grupa "Ljubitelji ${searchTerm}" - 12.3k članova`,
        `Događanje: Slušanje albuma uživo (FB live)`,
        `Post: "Preporučite pjesme slične ${searchTerm}"`
    ];
    
    const discordResults = [
        `Discord server "${searchTerm} Community" - 3400 online`,
        `#general: listening party za novi singl`,
        `Kanal #fan-art posvećen ${searchTerm}`
    ];
    
    const tiktokResults = [
        `#${searchTerm}Challenge - 2M pregleda`,
        `Video eseji o utjecaju ${searchTerm} na žanr`
    ];
    
    if (platform === 'sve' || platform === 'Reddit') {
        displayText += `<div class="mock-result"><strong>🔴 Reddit zajednice:</strong><br> - ${redditResults.join('<br> - ')}</div>`;
    }
    if (platform === 'sve' || platform === 'X (Twitter)') {
        displayText += `<div class="mock-result"><strong>🐦 X (Twitter) rasprave:</strong><br> - ${twitterResults.join('<br> - ')}</div>`;
    }
    if (platform === 'sve' || platform === 'Facebook') {
        displayText += `<div class="mock-result"><strong>📘 Facebook grupe:</strong><br> - ${facebookResults.join('<br> - ')}</div>`;
    }
    if (platform === 'sve' || platform === 'Discord') {
        displayText += `<div class="mock-result"><strong>💬 Discord serveri:</strong><br> - ${discordResults.join('<br> - ')}</div>`;
    }
    if (platform === 'TikTok') {
        displayText += `<div class="mock-result"><strong>📱 TikTok muzički fandomovi:</strong><br> - ${tiktokResults.join('<br> - ')}</div>`;
    } else if (platform === 'sve') {
        displayText += `<div class="mock-result"><strong>📱 TikTok (dodatno):</strong><br> - ${tiktokResults.join('<br> - ')}</div>`;
    }
    
    if (!displayText) {
        displayText = `<div class="mock-result">⚠️ Nema rezultata za platformu "${platform}", pokušajte s "sve" ili drugom opcijom.</div>`;
    }
    
    resultsDiv.innerHTML = displayText;
}

// jednostavna funkcija za demo button-e na karticama
function showMockResult(platformName) {
    const resultsDiv = document.getElementById('searchResults');
    resultsDiv.innerHTML = `<div class="mock-result">🎵 Prikaz primjera sa platforme ${platformName}: U posljednjih sat vremena fanovi raspravljaju o novim singlovima, remixevima i najavama turneja. Zajednica je vrlo aktivna!</div>`;
    document.getElementById('searchQuery').focus();
}