function renderHomeTeamCards(container) {
    if (!container) return;
    const pageMap = {
        'firsts': 'first-team.html',
        'reserves': 'reserve-team.html',
        'a-team': 'a-team.html',
        'b-team': 'b-team.html',
        'u11': 'u11-team.html',
    };
    window.TEAMS.forEach(team => {
        const card = document.createElement('a');
        card.href = pageMap[team.id];
        card.className = "block bg-gray-800 rounded-lg shadow-xl p-6 text-center hover:bg-gray-700 hover:scale-105 transform transition-all duration-300";
        card.innerHTML = `
            <h3 class="text-xl font-bold text-white">${team.name}</h3>
            <p class="text-club-gold mt-1">${team.league}</p>
        `;
        container.appendChild(card);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const homeTeamsOverview = document.getElementById('teams-overview-container');
    if (homeTeamsOverview) {
        renderHomeTeamCards(homeTeamsOverview);
    }
});