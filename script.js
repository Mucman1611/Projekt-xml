// funkcija za pretraživanje i prikaz linkova na stvarne rasprave/stranice
function pretraziZajednice() {
    const query = document.getElementById('searchQuery').value.trim();
    const platform = document.getElementById('platformSelect').value;
    const resultsDiv = document.getElementById('searchResults');

    if (!query && platform === 'sve') {
        resultsDiv.innerHTML = `<div class="mock-result">🔎 Unesite naziv izvođača, žanr ili zajednicu da vidite linkove na relevantne rasprave.</div>`;
        return;
    }

    let displayHTML = '';
    const searchTerm = query === '' ? 'music' : encodeURIComponent(query);
    const displayTerm = query === '' ? 'popularni izvođač' : query;

    // Generiranje linkova za Reddit
    if (platform === 'sve' || platform === 'Reddit') {
        displayHTML += `<div class="platform-header">🔴 Reddit zajednice i rasprave</div>`;
        displayHTML += `<a href="https://www.reddit.com/r/Music/search/?q=${searchTerm}" target="_blank" class="result-link">
                            <span class="link-title">🎵 r/Music - Pretraga: ${displayTerm}</span>
                            <span class="link-url">reddit.com/r/Music/search/?q=${searchTerm}</span>
                        </a>`;
        displayHTML += `<a href="https://www.reddit.com/r/indieheads/search/?q=${searchTerm}" target="_blank" class="result-link">
                            <span class="link-title">🎸 r/indieheads - Rasprave o ${displayTerm}</span>
                            <span class="link-url">reddit.com/r/indieheads/search/?q=${searchTerm}</span>
                        </a>`;
        displayHTML += `<a href="https://www.reddit.com/r/hiphopheads/search/?q=${searchTerm}" target="_blank" class="result-link">
                            <span class="link-title">🎤 r/hiphopheads - ${displayTerm} diskusije</span>
                            <span class="link-url">reddit.com/r/hiphopheads/search/?q=${searchTerm}</span>
                        </a>`;
        displayHTML += `<a href="https://www.reddit.com/r/kpop/search/?q=${searchTerm}" target="_blank" class="result-link">
                            <span class="link-title">🇰🇷 r/kpop - ${displayTerm} zajednica</span>
                            <span class="link-url">reddit.com/r/kpop/search/?q=${searchTerm}</span>
                        </a>`;
    }

    // Generiranje linkova za X (Twitter)
    if (platform === 'sve' || platform === 'X (Twitter)') {
        displayHTML += `<div class="platform-header">🐦 X (Twitter) - Trending rasprave</div>`;
        displayHTML += `<a href="https://twitter.com/search?q=${searchTerm}%20music&f=live" target="_blank" class="result-link">
                            <span class="link-title">🔥 #${displayTerm} - Najnoviji tweetovi</span>
                            <span class="link-url">twitter.com/search?q=${searchTerm}%20music</span>
                        </a>`;
        displayHTML += `<a href="https://twitter.com/search?q=%23NowPlaying%20${searchTerm}&f=live" target="_blank" class="result-link">
                            <span class="link-title">🎧 #NowPlaying - Što ljudi slušaju?</span>
                            <span class="link-url">twitter.com/search?q=%23NowPlaying%20${searchTerm}</span>
                        </a>`;
        displayHTML += `<a href="https://twitter.com/search?q=${searchTerm}%20fan&f=live" target="_blank" class="result-link">
                            <span class="link-title">💬 Fan tweetovi o ${displayTerm}</span>
                            <span class="link-url">twitter.com/search?q=${searchTerm}%20fan</span>
                        </a>`;
    }

    // Generiranje linkova za Facebook
    if (platform === 'sve' || platform === 'Facebook') {
        displayHTML += `<div class="platform-header">📘 Facebook grupe i stranice</div>`;
        displayHTML += `<a href="https://www.facebook.com/search/top?q=${searchTerm}%20music%20fans" target="_blank" class="result-link">
                            <span class="link-title">👥 Grupe obožavatelja - ${displayTerm}</span>
                            <span class="link-url">facebook.com/search/top?q=${searchTerm}%20music%20fans</span>
                        </a>`;
        displayHTML += `<a href="https://www.facebook.com/search/events?q=${searchTerm}%20concert" target="_blank" class="result-link">
                            <span class="link-title">🎤 Događaji i koncerti - ${displayTerm}</span>
                            <span class="link-url">facebook.com/search/events?q=${searchTerm}%20concert</span>
                        </a>`;
        displayHTML += `<a href="https://www.facebook.com/search/groups/?q=${searchTerm}%20fan%20club" target="_blank" class="result-link">
                            <span class="link-title">🎸 Fan klubovi - ${displayTerm}</span>
                            <span class="link-url">facebook.com/search/groups/?q=${searchTerm}%20fan%20club</span>
                        </a>`;
    }

    // Generiranje linkova za Discord
    if (platform === 'sve' || platform === 'Discord') {
        displayHTML += `<div class="platform-header">💬 Discord serveri (disboard.org pretraga)</div>`;
        displayHTML += `<a href="https://disboard.org/servers/tag/${searchTerm}" target="_blank" class="result-link">
                            <span class="link-title">🎵 Discord serveri s tagom #${displayTerm}</span>
                            <span class="link-url">disboard.org/servers/tag/${searchTerm}</span>
                        </a>`;
        displayHTML += `<a href="https://top.gg/servers/search?q=${searchTerm}" target="_blank" class="result-link">
                            <span class="link-title">🎧 Top.gg - ${displayTerm} community serveri</span>
                            <span class="link-url">top.gg/servers/search?q=${searchTerm}</span>
                        </a>`;
    }

    // Generiranje linkova za TikTok
    if (platform === 'TikTok') {
        displayHTML += `<div class="platform-header">📱 TikTok - Muzički fandomovi</div>`;
        displayHTML += `<a href="https://www.tiktok.com/tag/${searchTerm}" target="_blank" class="result-link">
                            <span class="link-title">#${displayTerm} - Trendovi i challengeovi</span>
                            <span class="link-url">tiktok.com/tag/${searchTerm}</span>
                        </a>`;
        displayHTML += `<a href="https://www.tiktok.com/search?q=${searchTerm}%20music" target="_blank" class="result-link">
                            <span class="link-title">🎬 Video preporuke za ${displayTerm}</span>
                            <span class="link-url">tiktok.com/search?q=${searchTerm}%20music</span>
                        </a>`;
    } else if (platform === 'sve') {
        displayHTML += `<div class="platform-header">📱 TikTok (dodatno)</div>`;
        displayHTML += `<a href="https://www.tiktok.com/tag/${searchTerm}" target="_blank" class="result-link">
                            <span class="link-title">#${displayTerm} - TikTok zajednica</span>
                            <span class="link-url">tiktok.com/tag/${searchTerm}</span>
                        </a>`;
    }

    if (!displayHTML) {
        displayHTML = `<div class="mock-result">⚠️ Nema rezultata za platformu "${platform}". Pokušajte odabrati "Sve platforme" ili drugu opciju.</div>`;
    }

    resultsDiv.innerHTML = displayHTML;
}