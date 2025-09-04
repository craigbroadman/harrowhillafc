function getInfoContent(team) {
    return `
    <div class="bg-gray-700 p-6 rounded-lg text-center">
        <h4 class="text-xl font-bold text-white mb-2">${team.name}</h4>
        <p class="text-club-gold mb-2">${team.league}</p>
        <p class="text-gray-300">Welcome to the ${team.name} page. Here you can find fixtures, results, and the current league table for this team.</p>
    </div>`;
}

function loadFAWidget(lrcode, divisionseason, container) {
    container.innerHTML = `
    <div id="lrep${lrcode}" class="bg-white rounded-lg p-2 text-gray-800">
        Data loading from The FA... If it does not appear, you can 
        <a href="https://fulltime.thefa.com/index.html?divisionseason=${divisionseason}" target="_blank" rel="noopener" class="text-blue-600 hover:underline">click here to view on the FA website</a>.
    </div>`;
    window.lrcode = lrcode;
    const oldScript = document.getElementById('fa-widget-script');
    if (oldScript) oldScript.remove();
    const script = document.createElement('script');
    script.id = 'fa-widget-script';
    script.src = 'https://fulltime.thefa.com/client/api/cs1.js';
    script.async = true;
    document.body.appendChild(script);
}

function updateTabContent(teamId, tabType) {
    const contentDiv = document.getElementById(`content-${teamId}`);
    const team = window.TEAMS.find(t => t.id === teamId);
    if (!contentDiv || !team) return;

    if (tabType === 'info') {
        contentDiv.innerHTML = getInfoContent(team);
    } else if (team.lrcodes && team.lrcodes[tabType]) {
        loadFAWidget(team.lrcodes[tabType], team.lrcodes.divisionseason, contentDiv);
    } else {
        contentDiv.innerHTML = `<p class="text-center text-gray-400">Data not available for this section.</p>`;
    }
}

function setupTabbedContent(teamId) {
    const tabButtons = document.querySelectorAll(`.tab-button[data-team="${teamId}"]`);
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const tabType = button.dataset.tab;
            tabButtons.forEach(btn => {
                btn.classList.remove('border-club-gold', 'text-club-gold');
                btn.classList.add('border-transparent', 'text-gray-400');
            });
            button.classList.add('border-club-gold', 'text-club-gold');
            button.classList.remove('border-transparent', 'text-gray-400');
            updateTabContent(teamId, tabType);
        });
    });
}

function renderTeamPage(container, teamId) {
    const team = window.TEAMS.find(t => t.id === teamId);
    if (!team) {
        container.innerHTML = `<p class="text-center text-red-400">Team not found.</p>`;
        return;
    }

    container.innerHTML = `
        <div id="team-${team.id}" class="bg-gray-800 rounded-lg shadow-xl p-6 md:p-8">
            <div class="text-center mb-8">
                <h1 class="text-3xl md:text-4xl font-bold text-white">${team.name}</h1>
                <p class="text-club-gold text-lg">${team.league}</p>
            </div>
            <div class="border-b border-gray-600 mb-6">
                <nav class="-mb-px flex justify-center space-x-4 md:space-x-8" aria-label="Tabs">
                    <button data-team="${team.id}" data-tab="info" class="tab-button whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm md:text-base border-club-gold text-club-gold">Info</button>
                    <button data-team="${team.id}" data-tab="fixtures" class="tab-button whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm md:text-base border-transparent text-gray-400 hover:text-gray-200 hover:border-gray-400">Fixtures</button>
                    <button data-team="${team.id}" data-tab="results" class="tab-button whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm md:text-base border-transparent text-gray-400 hover:text-gray-200 hover:border-gray-400">Results</button>
                    <button data-team="${team.id}" data-tab="table" class="tab-button whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm md:text-base border-transparent text-gray-400 hover:text-gray-200 hover:border-gray-400">League Table</button>
                </nav>
            </div>
            <div id="content-${team.id}" class="tab-content min-h-[400px]">
                <!-- Tab content is injected here -->
            </div>
        </div>`;

    setupTabbedContent(team.id);
    updateTabContent(team.id, 'info');
}

document.addEventListener('DOMContentLoaded', () => {
    const teamPageContainer = document.getElementById('team-page-container');
    if (teamPageContainer && teamPageContainer.dataset.teamId) {
        renderTeamPage(teamPageContainer, teamPageContainer.dataset.teamId);
    }
});