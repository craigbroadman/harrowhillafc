function getInfoContent(team) {
    if (team.status === 'coming-soon') {
        return `
        <div class="bg-gray-700 p-6 rounded-lg text-center">
            <h2 class="text-3xl font-bold text-white mb-4">Coming Soon!</h2>
            <p class="text-lg text-gray-300 mb-4">We are excited to be launching our new ${team.name} for the upcoming season.</p>
            <p class="text-gray-400">For more information and to register interest, please contact Club Chairman Sean Thomas.</p>
        </div>`;
    }

    const photosHTML = team.photos && team.photos.length > 0
        ? team.photos.map(photo => `<div class="p-2"><img src="${photo}" alt="${team.name} photo" class="rounded-lg shadow-lg w-full"></div>`).join('')
        : '<p class="text-gray-400 p-2">No team photos available yet.</p>';

    const sponsorsHTML = team.sponsors && team.sponsors.length > 0
        ? team.sponsors.map(sponsor => `<div class="p-2"><img src="${sponsor.logo}" alt="${sponsor.name}" class="max-h-32 object-contain"></div>`).join('')
        : '<p class="text-gray-400">This team is currently seeking a sponsor.</p>';
    
    const newPlayerInfoHTML = team.newPlayerInfo
        ? `<div class="bg-gray-900 bg-opacity-50 rounded-lg p-6 mt-6 text-center">
             <h4 class="text-xl font-bold text-club-gold mb-2">New Players Welcome!</h4>
             <p class="text-gray-300">${team.newPlayerInfo}</p>
           </div>`
        : '';

    return `
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <!-- Left Column: Manager & Info -->
        <div class="lg:col-span-1 space-y-6">
            <!-- Manager Card -->
            <div class="bg-gray-700 p-6 rounded-lg text-center shadow-xl">
                <img src="${team.manager.photo}" alt="${team.manager.name}" class="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-club-gold">
                <h3 class="text-2xl font-bold text-white">${team.manager.name}</h3>
                <p class="text-club-gold">Team Manager</p>
            </div>
            <!-- Details Card -->
            <div class="bg-gray-700 p-6 rounded-lg shadow-xl text-left">
                <h4 class="text-xl font-bold text-white mb-4 border-b border-gray-600 pb-2">Team Details</h4>
                <div class="space-y-3 text-gray-300">
                    <p><strong>Kit:</strong> ${team.kit.home} (Home), ${team.kit.away} (Away)</p>
                </div>
            </div>
        </div>

        <!-- Right Column: Gallery & Sponsors -->
        <div class="lg:col-span-2 space-y-6">
            <!-- Photo Gallery -->
            <div class="bg-gray-700 p-6 rounded-lg shadow-xl">
                <h4 class="text-xl font-bold text-white mb-4">Photo Gallery</h4>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    ${photosHTML}
                </div>
            </div>
            <!-- Team Sponsors -->
            <div class="bg-gray-700 p-6 rounded-lg shadow-xl">
                <h4 class="text-xl font-bold text-white mb-4">Team Sponsors</h4>
                <div class="flex flex-wrap justify-center items-center gap-6">
                    ${sponsorsHTML}
                </div>
            </div>
        </div>
    </div>
    ${newPlayerInfoHTML}
    `;
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

    if (team.status === 'coming-soon') {
        contentDiv.innerHTML = getInfoContent(team);
        return;
    }

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

    // Hide tabs for coming-soon teams
    const navHTML = team.status === 'coming-soon' ? '' : `
        <div class="border-b border-gray-600 mb-6">
            <nav class="-mb-px flex justify-center space-x-4 md:space-x-8" aria-label="Tabs">
                <button data-team="${team.id}" data-tab="info" class="tab-button whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm md:text-base border-club-gold text-club-gold">Info</button>
                <button data-team="${team.id}" data-tab="fixtures" class="tab-button whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm md:text-base border-transparent text-gray-400 hover:text-gray-200 hover:border-gray-400">Fixtures</button>
                <button data-team="${team.id}" data-tab="results" class="tab-button whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm md:text-base border-transparent text-gray-400 hover:text-gray-200 hover:border-gray-400">Results</button>
                <button data-team="${team.id}" data-tab="table" class="tab-button whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm md:text-base border-transparent text-gray-400 hover:text-gray-200 hover:border-gray-400">League Table</button>
            </nav>
        </div>`;

    container.innerHTML = `
        <div id="team-${team.id}" class="bg-gray-800 rounded-lg shadow-xl p-6 md:p-8">
            <div class="text-center mb-8">
                <h1 class="text-3xl md:text-4xl font-bold text-white">${team.name}</h1>
                <p class="text-club-gold text-lg">${team.league}</p>
            </div>
            ${navHTML}
            <div id="content-${team.id}" class="tab-content min-h-[400px]">
                <!-- Tab content is injected here -->
            </div>
        </div>`;
    
    if (team.status !== 'coming-soon') {
        setupTabbedContent(team.id);
    }
    updateTabContent(team.id, 'info');
}

document.addEventListener('DOMContentLoaded', () => {
    const teamPageContainer = document.getElementById('team-page-container');
    if (teamPageContainer && teamPageContainer.dataset.teamId) {
        renderTeamPage(teamPageContainer, teamPageContainer.dataset.teamId);
    }
});