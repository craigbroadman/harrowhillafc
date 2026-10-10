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
        ? team.sponsors.map(sponsor => sponsor.logo
            ? `<div class="p-2"><img src="${sponsor.logo}" alt="${sponsor.name}" class="max-h-32 object-contain"></div>`
            : `<div class="flex min-h-32 min-w-[12rem] items-center justify-center rounded-lg border border-gray-600 bg-gray-800 px-4 py-6 text-center text-sm font-semibold text-white">${sponsor.name}</div>`).join('')
        : '<p class="text-gray-400">This team is currently seeking a sponsor.</p>';

    const assistantHTML = team.assistant
        ? `
            <div class="pt-4 mt-4 border-t border-gray-600">
                <p class="text-sm uppercase tracking-wide text-gray-400">Assistant Manager</p>
                <p class="text-xl font-semibold text-white mt-1">${team.assistant.name}</p>
            </div>`
        : '';

    const faLinkHTML = team.faFullTimeUrl
        ? `
            <div class="bg-gray-700 p-6 rounded-lg shadow-xl">
                <h4 class="text-xl font-bold text-white mb-4">Fixtures, Results & League Table</h4>
                <p class="text-gray-300 mb-4">View the latest fixtures, results and standings on the FA Full-Time website.</p>
                <a href="${team.faFullTimeUrl}" target="_blank" rel="noopener" class="inline-block bg-club-gold hover:bg-club-blue text-club-navy font-bold py-3 px-6 rounded-lg transition-colors duration-200">Open on FA Full-Time</a>
            </div>`
        : '';
    
    const newPlayerInfoHTML = team.registrationInfo
        ? `<div class="bg-gray-700 p-6 rounded-lg shadow-xl text-left">
                <h4 class="text-xl font-bold text-white mb-4 border-b border-gray-600 pb-2">${team.registrationInfo.title}</h4>
                <div class="space-y-3 text-gray-300">
                    <p>${team.registrationInfo.description}</p>
                    ${team.registrationInfo.formLink ? `<a href="${team.registrationInfo.formLink}" target="_blank" rel="noopener" class="inline-block bg-club-gold hover:bg-club-blue text-club-navy hover:text-club-navy font-bold py-3 px-6 rounded-lg transition-colors duration-200 mt-2">Registration Form</a>` : ''}
                </div>
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
                ${assistantHTML}
            </div>
            <!-- Registration Info Card -->
            ${newPlayerInfoHTML}
            <!-- Details Card -->
            <div class="bg-gray-700 p-6 rounded-lg shadow-xl text-left">
                <h4 class="text-xl font-bold text-white mb-4 border-b border-gray-600 pb-2">Team Details</h4>
                <div class="space-y-3 text-gray-300">
                    <p><strong>Training:</strong> ${team.training.day}, ${team.training.time} at ${team.training.location}</p>
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
            ${faLinkHTML}
            <!-- Team Sponsors -->
            <div class="bg-gray-700 p-6 rounded-lg shadow-xl">
                <h4 class="text-xl font-bold text-white mb-4">Team Sponsors</h4>
                <div class="flex flex-wrap justify-center items-center gap-6">
                    ${sponsorsHTML}
                </div>
            </div>
        </div>
    </div>
    `;
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
            <div id="content-${team.id}" class="min-h-[400px]">
                ${getInfoContent(team)}
            </div>
        </div>`;
}

document.addEventListener('DOMContentLoaded', () => {
    const teamPageContainer = document.getElementById('team-page-container');
    if (teamPageContainer && teamPageContainer.dataset.teamId) {
        renderTeamPage(teamPageContainer, teamPageContainer.dataset.teamId);
    }
});