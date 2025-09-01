document.addEventListener('DOMContentLoaded', () => {

    // --- DATA ---
    const TEAMS = [
        { 
            id: 'firsts', 
            name: 'First Team', 
            league: 'Gloucestershire Northern Senior League Division 2',
            lrcode: '813726653'
        },
        { 
            id: 'reserves', 
            name: 'Reserves', 
            league: 'North Glos Division 1',
            lrcode: 'RESERVES_LRCODE_HERE' // TODO: Replace with actual code
        },
        { 
            id: 'a-team', 
            name: 'A Team', 
            league: 'North Glos Division 2',
            lrcode: 'A_TEAM_LRCODE_HERE' // TODO: Replace with actual code
        },
        { 
            id: 'b-team', 
            name: 'B Team', 
            league: 'North Glos Division 3',
            lrcode: 'B_TEAM_LRCODE_HERE' // TODO: Replace with actual code
        },
        { 
            id: 'u11', 
            name: 'U11 Youth Team', 
            league: 'Severn Valley League',
            lrcode: 'U11_LRCODE_HERE' // TODO: Replace with actual code
        }
    ];

    const COMMITTEE_MEMBERS = [
        { name: "Damian Lancett", role: "Chairman" },
        { name: "Jamie Addis", role: "Vice Chairman" },
        { name: "Jodie Lancett", role: "Secretary" },
        { name: "Michelle Gunter", role: "Treasurer & Safeguarding Officer" },
        { name: "Ryan Cahalane", role: "Committee Member" },
        { name: "Ryan Mason", role: "Committee Member" },
        { name: "Beau Lancett", role: "Committee Member" },
        { name: "Nathan Davies", role: "Committee Member" },
        { name: "Lucy Addis", role: "Committee Member" },
    ];

    const SPONSORS = [
        { name: "GLS Windows", logo: "https://via.placeholder.com/150x80.png?text=GLS+Windows" },
        { name: "Severn Sport", logo: "https://via.placeholder.com/150x80.png?text=Severn+Sport" },
        { name: "Nikki's Events", logo: "https://via.placeholder.com/150x80.png?text=Nikki's+Events" },
        { name: "Whitson Barber Shop", logo: "https://via.placeholder.com/150x80.png?text=Whitson+Barber" },
    ];

    // --- MOCK DATA GENERATION ---
    const createMockResults = (teamName) => {
        const opponents = ["Rivals FC", "Local Rovers", "United City", "County Town"];
        return Array(5).fill(null).map((_, i) => ({
            homeTeam: i % 2 === 0 ? teamName : opponents[i % 4],
            awayTeam: i % 2 !== 0 ? teamName : opponents[i % 4],
            homeScore: Math.floor(Math.random() * 5),
            awayScore: Math.floor(Math.random() * 5),
            date: `2025-08-${23-i*7}`
        }));
    };

    const createMockLeagueTable = (teamName) => {
        const teams = [teamName, "Rivals FC", "Local Rovers", "United City", "County Town", "Another Team", "Village XI", "Borough United"];
        return teams.map((name, i) => ({
            pos: i + 1,
            name,
            p: 10,
            w: Math.floor(Math.random() * 10),
            d: Math.floor(Math.random() * (10 - (i === 0 ? 5:0))),
            l: Math.floor(Math.random() * 3),
            gd: Math.floor(Math.random() * 20) - 10,
            pts: Math.floor(Math.random() * 30)
        })).sort((a, b) => b.pts - a.pts).map((team, i) => ({...team, pos: i+1}));
    };


    // --- DYNAMIC CONTENT INJECTION ---

    const teamsContainer = document.getElementById('teams-container');
    const committeeGrid = document.getElementById('committee-grid');
    const sponsorsGrid = document.getElementById('sponsors-grid');
    const teamsDropdownDesktop = document.getElementById('teams-dropdown-desktop');
    const teamsDropdownMobile = document.getElementById('teams-dropdown-mobile');
    
    // Populate Teams Section
    if (teamsContainer) {
        TEAMS.forEach(team => {
            const teamSection = document.createElement('div');
            teamSection.id = `team-${team.id}`;
            teamSection.className = 'bg-gray-800 rounded-lg shadow-xl p-6 md:p-8';
            teamSection.innerHTML = `
                <div class="text-center mb-8">
                    <h3 class="text-2xl md:text-3xl font-bold text-white">${team.name}</h3>
                    <p class="text-club-gold">${team.league}</p>
                </div>
                <div class="border-b border-gray-600 mb-6">
                    <nav class="-mb-px flex justify-center space-x-4 md:space-x-8" aria-label="Tabs">
                        <button data-team="${team.id}" data-tab="fixtures" class="tab-button whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm md:text-base border-club-gold text-club-gold">Fixtures</button>
                        <button data-team="${team.id}" data-tab="results" class="tab-button whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm md:text-base border-transparent text-gray-400 hover:text-gray-200 hover:border-gray-400">Results</button>
                        <button data-team="${team.id}" data-tab="table" class="tab-button whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm md:text-base border-transparent text-gray-400 hover:text-gray-200 hover:border-gray-400">League Table</button>
                    </nav>
                </div>
                <div id="content-${team.id}" class="tab-content">
                    <!-- Tab content is injected here -->
                </div>
            `;
            teamsContainer.appendChild(teamSection);
        });
    }

    // Populate Committee Section
    if (committeeGrid) {
        COMMITTEE_MEMBERS.forEach(member => {
            const card = document.createElement('div');
            card.className = 'bg-gray-700 rounded-lg shadow-lg p-6 text-center';
            card.innerHTML = `
                <h3 class="text-xl font-bold text-white">${member.name}</h3>
                <p class="text-club-gold">${member.role}</p>
            `;
            committeeGrid.appendChild(card);
        });
    }

    // Populate Sponsors Section
    if (sponsorsGrid) {
        SPONSORS.forEach(sponsor => {
            const sponsorDiv = document.createElement('div');
            sponsorDiv.className = 'flex justify-center items-center';
            sponsorDiv.innerHTML = `<img src="${sponsor.logo}" alt="${sponsor.name}" class="max-h-20">`;
            sponsorsGrid.appendChild(sponsorDiv);
        });
    }

    // Populate Teams Dropdown Menus
    if (teamsDropdownDesktop && teamsDropdownMobile) {
        let teamLinks = '';
        TEAMS.forEach(team => {
            teamLinks += `<a href="#team-${team.id}" class="block px-4 py-2 text-sm hover:bg-gray-700">
                            ${team.name}
                          </a>`;
        });
        teamsDropdownDesktop.innerHTML = teamLinks;
        teamsDropdownMobile.innerHTML = teamLinks;
    }


    // --- INTERACTIVITY ---

    // Mobile Menu Toggle
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });

    // Teams Dropdown Toggle (Mobile)
    const teamsMenuButtonMobile = document.getElementById('teams-menu-button-mobile');
    const teamsDropdownMobileEl = document.getElementById('teams-dropdown-mobile');
    const mobileChevron = teamsMenuButtonMobile.querySelector('svg');

    teamsMenuButtonMobile.addEventListener('click', () => {
        teamsDropdownMobileEl.classList.toggle('hidden');
        mobileChevron.classList.toggle('rotate-180');
    });

    // Smooth Scrolling & Close Mobile Menu on Link Click
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if(targetElement){
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
            // Close mobile menu if open
            if (!mobileMenu.classList.contains('hidden')) {
                mobileMenu.classList.add('hidden');
            }
            // Close mobile teams dropdown if open
            if (!teamsDropdownMobileEl.classList.contains('hidden')) {
                teamsDropdownMobileEl.classList.add('hidden');
                mobileChevron.classList.remove('rotate-180');
            }
        });
    });

    // --- TAB HANDLING LOGIC ---
    
    function getFixturesContent(lrcode) {
        // Use iframe to avoid script conflicts when loading multiple widgets
        const iframeSrc = `https://fulltime.thefa.com/client/api/cs1.html?lc=${lrcode}&col=1,2,3,4&text_col=000000&bg_col=FFFFFF&border=1`;
        return `<div class="bg-white rounded-lg overflow-hidden">
                    <iframe src="${iframeSrc}" style="width: 100%; min-height: 400px; border: none;" title="Fixtures Widget"></iframe>
                </div>`;
    }

    function getResultsContent(teamId) {
        const team = TEAMS.find(t => t.id === teamId);
        const results = createMockResults(team.name);
        let html = '<div class="space-y-4">';
        results.forEach(result => {
            const homeWin = result.homeScore > result.awayScore;
            const awayWin = result.awayScore > result.homeScore;
            const homeClasses = result.homeTeam === team.name ? 'font-bold text-white' : 'text-gray-300';
            const awayClasses = result.awayTeam === team.name ? 'font-bold text-white' : 'text-gray-300';
            
            html += `
                <div class="bg-gray-700 p-4 rounded-lg flex items-center justify-between">
                    <span class="w-2/5 text-right ${homeClasses}">${result.homeTeam}</span>
                    <span class="mx-3 text-center bg-gray-900 px-3 py-1 rounded-md text-lg font-mono">
                      ${result.homeScore} - ${result.awayScore}
                    </span>
                    <span class="w-2/5 text-left ${awayClasses}">${result.awayTeam}</span>
                </div>
            `;
        });
        html += '</div>';
        return html;
    }
    
    function getTableContent(teamId) {
        const team = TEAMS.find(t => t.id === teamId);
        const tableData = createMockLeagueTable(team.name);
        let html = `
            <div class="overflow-x-auto rounded-lg">
                <table class="min-w-full bg-gray-700 text-sm">
                    <thead class="bg-gray-900 text-gray-300 uppercase">
                        <tr>
                            <th class="py-3 px-2 md:px-4 text-left">Pos</th>
                            <th class="py-3 px-2 md:px-4 text-left">Team</th>
                            <th class="py-3 px-2 md:px-4 text-center">P</th>
                            <th class="py-3 px-2 md:px-4 text-center">W</th>
                            <th class="py-3 px-2 md:px-4 text-center">D</th>
                            <th class="py-3 px-2 md:px-4 text-center">L</th>
                            <th class="py-3 px-2 md:px-4 text-center">GD</th>
                            <th class="py-3 px-2 md:px-4 text-center">Pts</th>
                        </tr>
                    </thead>
                    <tbody class="text-gray-200">
        `;
        tableData.forEach(row => {
            const isHomeTeam = row.name === team.name;
            const rowClass = isHomeTeam ? 'bg-club-blue bg-opacity-20 font-bold' : '';
            html += `
                        <tr class="${rowClass} border-t border-gray-600">
                            <td class="py-3 px-2 md:px-4">${row.pos}</td>
                            <td class="py-3 px-2 md:px-4">${row.name}</td>
                            <td class="py-3 px-2 md:px-4 text-center">${row.p}</td>
                            <td class="py-3 px-2 md:px-4 text-center">${row.w}</td>
                            <td class="py-3 px-2 md:px-4 text-center">${row.d}</td>
                            <td class="py-3 px-2 md:px-4 text-center">${row.l}</td>
                            <td class="py-3 px-2 md:px-4 text-center">${row.gd}</td>
                            <td class="py-3 px-2 md:px-4 text-center font-bold">${row.pts}</td>
                        </tr>
            `;
        });
        html += `
                    </tbody>
                </table>
            </div>
        `;
        return html;
    }

    function updateTabContent(teamId, tabType) {
        const contentDiv = document.getElementById(`content-${teamId}`);
        const team = TEAMS.find(t => t.id === teamId);
        if (!contentDiv || !team) return;

        let content = '';
        if (tabType === 'fixtures') {
            content = getFixturesContent(team.lrcode);
        } else if (tabType === 'results') {
            content = getResultsContent(teamId);
        } else if (tabType === 'table') {
            content = getTableContent(teamId);
        }
        contentDiv.innerHTML = content;
    }

    document.querySelectorAll('.tab-button').forEach(button => {
        button.addEventListener('click', () => {
            const teamId = button.dataset.team;
            const tabType = button.dataset.tab;

            // Update button styles
            document.querySelectorAll(`.tab-button[data-team="${teamId}"]`).forEach(btn => {
                btn.classList.remove('border-club-gold', 'text-club-gold');
                btn.classList.add('border-transparent', 'text-gray-400', 'hover:text-gray-200', 'hover:border-gray-400');
            });
            button.classList.add('border-club-gold', 'text-club-gold');
            button.classList.remove('border-transparent', 'text-gray-400', 'hover:text-gray-200', 'hover:border-gray-400');
            
            // Update content
            updateTabContent(teamId, tabType);
        });
    });

    // Initial load for all teams' first tab (fixtures)
    TEAMS.forEach(team => {
        updateTabContent(team.id, 'fixtures');
    });

    // Set Copyright Year
    document.getElementById('copyright-year').textContent = new Date().getFullYear();

});
