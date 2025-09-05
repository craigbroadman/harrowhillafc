function renderCommittee(container) {
    if (!container) return;
    const mainRoles = ["Chairman & GNSL Secretary", "Treasurer", "Welfare Officer", "Secretary"];
    const managerRoles = ["Manager", "Youth Team"];
    const isMainRole = member => mainRoles.some(role => member.isMainOfficial === true);
    const isManager = member => managerRoles.some(role => member.role.toLowerCase().includes(role.toLowerCase()));
    const isOther = member => !isMainRole(member) && !isManager(member);

    const mainRoleMembers = window.COMMITTEE_MEMBERS.filter(isMainRole);
    const managerMembers = window.COMMITTEE_MEMBERS.filter(isManager);
    const otherMembers = window.COMMITTEE_MEMBERS.filter(isOther);

    function renderSection(title, members) {
        if (members.length === 0) return '';
        let html = `<div class="col-span-full"><h3 class="text-2xl font-bold text-club-gold mb-4 mt-6 border-b border-gray-700 pb-2">${title}</h3></div>`;
        members.forEach(member => {
            html += `
                <div class="bg-gray-700 rounded-lg shadow-lg p-6 text-center">
                    <h4 class="text-xl font-bold text-white">${member.name}</h4>
                    <p class="text-club-gold">${member.role}</p>
                </div>
            `;
        });
        return html;
    }

    container.innerHTML =
        renderSection("Main Officials", mainRoleMembers) +
        renderSection("Club Officials", otherMembers) +
        renderSection("Team Management", managerMembers);
}


document.addEventListener('DOMContentLoaded', () => {
    const committeeGrid = document.getElementById('committee-grid');
    if (committeeGrid) {
        renderCommittee(committeeGrid);
    }
});