document.addEventListener('DOMContentLoaded', () => {

    // --- DATA ---

    const TEAMS = [
        { id: 'first-team', name: 'First Team', description: 'Our senior team competing in the County League Premier Division.' },
        { id: 'reserves', name: 'Reserves', description: 'Our reserve squad, a vital part of our club\'s depth.' },
        { id: 'a-team', name: 'A Team', description: 'Competing in the North Gloucestershire League Division One.' },
        { id: 'b-team', name: 'B Team', description: 'Showcasing talent in the North Gloucestershire League Division Two.' },
        { id: 'youth-team', name: 'Youth Team', description: 'Developing the next generation of Hillmen.' },
    ];

    const COMMITTEE_MEMBERS = [
        { name: 'John Doe', role: 'Chairman', imageUrl: 'https://picsum.photos/seed/chairman/200' },
        { name: 'Jane Smith', role: 'Secretary', imageUrl: 'https://picsum.photos/seed/secretary/200' },
        { name: 'Peter Jones', role: 'Treasurer', imageUrl: 'https://picsum.photos/seed/treasurer/200' },
        { name: 'Mary Williams', role: 'First Team Manager', imageUrl: 'https://picsum.photos/seed/manager1/200' },
        { name: 'David Brown', role: 'Reserves Manager', imageUrl: 'https://picsum.photos/seed/manager2/200' },
        { name: 'Susan Taylor', role: 'Youth Team Coordinator', imageUrl: 'https://picsum.photos/seed/youth/200' },
    ];

    const SPONSORS = [
        { name: 'Local Business A', logoUrl: 'https://picsum.photos/seed/sponsorA/200/100', websiteUrl: '#' },
        { name: 'Local Business B', logoUrl: 'https://picsum.photos/seed/sponsorB/200/100', websiteUrl: '#' },
        { name: 'Local Business C', logoUrl: 'https://picsum.photos/seed/sponsorC/200/100', websiteUrl: '#' },
        { name: 'Local Business D', logoUrl: 'https://picsum.photos/seed/sponsorD/200/100', websiteUrl: '#' },
        { name: 'Local Business E', logoUrl: 'https://picsum.photos/seed/sponsorE/200/100', websiteUrl: '#' },
        { name: 'Local Business F', logoUrl: 'https://picsum.photos/seed/sponsorF/200/100', websiteUrl: '#' },
    ];

    // --- MOCK DATA GENERATION (from faFullTimeService) ---

    const createMockLeagueTable = (teamId) => {
        const teams = ['Harrow Hill AFC', 'Rival Rovers', 'Local United', 'City Wanderers', 'Town FC', 'Village Albion', 'County City', 'Borough FC'];
        const ourTeamIndex = teams.indexOf('Harrow Hill AFC');

        return teams.map((name, index) => {
            const played = 10;
            const won = Math.floor(Math.random() * (played + 1));
            const drawn = Math.floor(Math.random() * (played - won + 1));
            const lost = played - won - drawn;
            const goalsFor = Math.floor(Math.random() * 30);
            const goalsAgainst = Math.floor(Math.random() * 30);
            
            let points = (won * 3) + drawn;
            if (index === ourTeamIndex) {
              if(teamId.includes('first')) points += 5;
              if(teamId.includes('reserves')) points += 2;
            }

            return {
                position: index + 1,
                teamName: name,
                played, won, drawn, lost, goalsFor, goalsAgainst,
                goalDifference: goalsFor - goalsAgainst,
                points
            };
        }).sort((a, b) => b.points - a.points || b.goalDifference - a.goalDifference).map((team, index) => ({ ...team, position: index + 1 }));
    };

    const createMockResults = () => {
        const opponents = ['Village Albion', 'County City', 'Borough FC'];
        return [
          { date: '2024-08-24', opponent: opponents[0], venue: 'Home', score: '3 - 1', result: 'W', competition: 'County League Premier Division' },
          { date: '2024-08-17', opponent: opponents[1], venue: 'Away', score: '1 - 1', result: 'D', competition: 'County League Premier Division' },
          { date: '2024-08-10', opponent: opponents[2], venue: 'Home', score: '0 - 2', result: 'L', competition: 'County League Premier Division' },
        ];
    };

    // --- RENDER FUNCTIONS ---

    const renderTeams = () => {
        const container = document.getElementById('teams-container');
        if (!container) return;
        
        container.innerHTML = TEAMS.map(team => `
            <section id="${team.id}" class="py-16 team-section">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div class="text-center">
                        <h2 class="text-3xl font-extrabold text-white sm:text-4xl">${team.name}</h2>
                        <p class="mt-4 max-w-2xl mx-auto text-lg text-gray-300">${team.description}</p>
                    </div>
                    <div class="mt-12">
                        <div class="border-b border-gray-700">
                            <nav class="-mb-px flex space-x-2 sm:space-x-4" aria-label="Tabs">
                                <button data-tab="fixtures" class="tab-button active-tab px-4 py-2 text-sm sm:text-base font-medium rounded-t-lg transition-colors">Fixtures</button>
                                <button data-tab="results" class="tab-button px-4 py-2 text-sm sm:text-base font-medium rounded-t-lg transition-colors">Results</button>
                                <button data-tab="table" class="tab-button px-4 py-2 text-sm sm:text-base font-medium rounded-t-lg transition-colors">League Table</button>
                            </nav>
                        </div>
                        <div class="mt-8 bg-white p-4 sm:p-6 rounded-b-lg rounded-r-lg shadow-md">
                            <div data-tab-content="fixtures" class="tab-content">
                                <h3 class="text-xl font-bold mb-4 text-club-dark">Upcoming Fixtures</h3>
                                <div id="lrep11925535" style="width: 100%;">
                                    <p class="text-gray-600">Loading fixtures...</p>
                                </div>
                            </div>
                            <div data-tab-content="results" class="tab-content hidden"></div>
                            <div data-tab-content="table" class="tab-content hidden"></div>
                        </div>
                    </div>
                </div>
            </section>
        `).join('');
    };

    const renderCommittee = () => {
        const grid = document.getElementById('committee-grid');
        if (!grid) return;
        grid.innerHTML = COMMITTEE_MEMBERS.map(member => `
            <div class="bg-white rounded-lg shadow-md overflow-hidden text-center transition-transform transform hover:-translate-y-1">
                <img src="${member.imageUrl}" alt="${member.name}" class="w-full h-48 object-cover"/>
                <div class="p-4">
                    <h3 class="text-lg font-bold text-club-dark">${member.name}</h3>
                    <p class="text-club-maroon">${member.role}</p>
                </div>
            </div>
        `).join('');
    };

    const renderSponsors = () => {
        const grid = document.getElementById('sponsors-grid');
        if (!grid) return;
        grid.innerHTML = SPONSORS.map(sponsor => `
            <a href="${sponsor.websiteUrl}" target="_blank" rel="noopener noreferrer" class="flex justify-center transition-transform transform hover:scale-110">
                <img class="max-h-16 object-contain" src="${sponsor.logoUrl}" alt="${sponsor.name}" />
            </a>
        `).join('');
    };

    const renderTeamDropdowns = () => {
        const desktopMenu = document.getElementById('teams-dropdown-menu');
        const mobileMenu = document.getElementById('mobile-teams-dropdown-menu');
        if (!desktopMenu || !mobileMenu) return;

        const linksHTML = TEAMS.map(team => `
            <a href="#${team.id}" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 nav-link">${team.name}</a>
        `).join('');

        const mobileLinksHTML = TEAMS.map(team => `
            <a href="#${team.id}" class="text-gray-300 hover:bg-white/10 hover:text-white block px-3 py-2 rounded-md text-base font-medium nav-link">${team.name}</a>
        `).join('');

        desktopMenu.innerHTML = linksHTML;
        mobileMenu.innerHTML = mobileLinksHTML;
    };


    // --- INITIAL PAGE RENDER ---
    
    renderTeams();
    renderCommittee();
    renderSponsors();
    renderTeamDropdowns();


    // --- INTERACTIVITY ---

    // Navigation Handling
    const setupNavigation = () => {
        const mobileMenuButton = document.getElementById('mobile-menu-button');
        const mobileMenu = document.getElementById('mobile-menu');
        const openIcon = document.getElementById('mobile-menu-open-icon');
        const closeIcon = document.getElementById('mobile-menu-close-icon');

        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
            openIcon.classList.toggle('hidden');
            closeIcon.classList.toggle('hidden');
        });

        const teamsDropdownButton = document.getElementById('teams-dropdown-button');
        const teamsDropdownMenu = document.getElementById('teams-dropdown-menu');
        const teamsDropdownIcon = document.getElementById('teams-dropdown-icon');
        
        teamsDropdownButton.addEventListener('click', () => {
            teamsDropdownMenu.classList.toggle('hidden');
            teamsDropdownIcon.classList.toggle('rotate-180');
        });

        const mobileTeamsDropdownButton = document.getElementById('mobile-teams-dropdown-button');
        const mobileTeamsDropdownMenu = document.getElementById('mobile-teams-dropdown-menu');
        
        mobileTeamsDropdownButton.addEventListener('click', () => {
            mobileTeamsDropdownMenu.classList.toggle('hidden');
        });

        // Close dropdowns if clicking outside
        document.addEventListener('click', (event) => {
            if (!teamsDropdownButton.contains(event.target)) {
                teamsDropdownMenu.classList.add('hidden');
                teamsDropdownIcon.classList.remove('rotate-180');
            }
        });
        
        // Smooth scrolling for all nav links
        document.querySelectorAll('.nav-link').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });

                    // Close mobile menu after navigation
                    mobileMenu.classList.add('hidden');
                    openIcon.classList.remove('hidden');
                    closeIcon.classList.add('hidden');
                    // Close mobile teams dropdown
                    mobileTeamsDropdownMenu.classList.add('hidden');
                }
            });
        });
    };

    // FA Widget Script Injection
    let faScriptInjected = false;
    const injectFaScript = () => {
        if (faScriptInjected) return;
        
        const inlineScript = document.createElement('script');
        inlineScript.innerHTML = `var lrcode = '11925535'`;
        document.body.appendChild(inlineScript);

        const script = document.createElement('script');
        script.src = 'https://fulltime.thefa.com/client/api/cs1.js';
        script.async = true;
        document.body.appendChild(script);

        faScriptInjected = true;
    };

    // Team Section Tabs
    const setupTeamTabs = () => {
        const teamSections = document.querySelectorAll('.team-section');
        teamSections.forEach(section => {
            const tabButtons = section.querySelectorAll('.tab-button');
            const tabContents = section.querySelectorAll('.tab-content');
            
            // Inject FA script for the first team's fixture tab on load
            if (section.id === 'first-team') {
                injectFaScript();
            }

            tabButtons.forEach(button => {
                button.addEventListener('click', () => {
                    const tabName = button.dataset.tab;

                    // Update button styles
                    tabButtons.forEach(btn => {
                        btn.classList.remove('active-tab');
                        btn.classList.add('inactive-tab');
                    });
                    button.classList.add('active-tab');
                    button.classList.remove('inactive-tab');
                    
                    // Show/hide content
                    tabContents.forEach(content => {
                        if (content.dataset.tabContent === tabName) {
                            content.classList.remove('hidden');
                            // Load content if it's not already loaded
                            if (!content.innerHTML.trim()) {
                                loadTabContent(content, section.id);
                            }
                        } else {
                            content.classList.add('hidden');
                        }
                    });

                    // Special handling for fixtures widget
                    if (tabName === 'fixtures') {
                        injectFaScript();
                    }
                });
            });
        });
    };

    const loadTabContent = (contentElement, teamId) => {
        const tabType = contentElement.dataset.tabContent;
        if (tabType === 'results') {
            const results = createMockResults();
            const getResultBadge = (result) => {
                switch (result) {
                    case 'W': return 'bg-green-500 text-white';
                    case 'D': return 'bg-yellow-500 text-white';
                    case 'L': return 'bg-red-500 text-white';
                }
            };
            contentElement.innerHTML = `
                <h3 class="text-xl font-bold mb-4 text-club-dark">Recent Results</h3>
                <div class="space-y-4">
                    ${results.map(result => `
                        <div class="bg-white rounded-lg shadow-md overflow-hidden p-4 flex flex-col sm:flex-row justify-between items-center transition-shadow hover:shadow-lg">
                            <div class="flex items-center space-x-4 w-full sm:w-auto text-center sm:text-left mb-2 sm:mb-0">
                                <span class="w-8 h-8 rounded-full flex items-center justify-center font-bold ${getResultBadge(result.result)}">${result.result}</span>
                                <div>
                                    <p class="font-semibold text-club-dark">${result.opponent} (${result.venue === 'Home' ? 'H' : 'A'})</p>
                                    <p class="text-sm text-gray-500">${result.competition}</p>
                                </div>
                            </div>
                            <div class="flex items-center space-x-4 text-lg font-bold w-full sm:w-auto justify-center">
                                <span>${result.score}</span>
                                <span class="text-sm text-gray-400 font-normal">${new Date(result.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'short' })}</span>
                            </div>
                        </div>
                    `).join('')}
                </div>`;
        } else if (tabType === 'table') {
            const standings = createMockLeagueTable(teamId);
            const headers = ['Pos', 'Team', 'P', 'W', 'D', 'L', 'GD', 'Pts'];
            contentElement.innerHTML = `
                <h3 class="text-xl font-bold mb-4 text-club-dark">League Table</h3>
                <div class="overflow-x-auto bg-white rounded-lg shadow">
                    <table class="min-w-full divide-y divide-gray-200">
                        <thead class="bg-gray-50">
                            <tr>
                                ${headers.map(h => `<th scope="col" class="px-2 md:px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider ${h === 'Team' ? 'w-1/2' : ''}">${h}</th>`).join('')}
                            </tr>
                        </thead>
                        <tbody class="bg-white divide-y divide-gray-200">
                            ${standings.map(row => `
                                <tr class="${row.teamName === 'Harrow Hill AFC' ? 'bg-club-skyblue/20 font-bold' : ''}">
                                    <td class="px-2 md:px-4 py-4 whitespace-nowrap text-sm">${row.position}</td>
                                    <td class="px-2 md:px-4 py-4 whitespace-nowrap text-sm text-gray-900">${row.teamName}</td>
                                    <td class="px-2 md:px-4 py-4 whitespace-nowrap text-sm">${row.played}</td>
                                    <td class="px-2 md:px-4 py-4 whitespace-nowrap text-sm">${row.won}</td>
                                    <td class="px-2 md:px-4 py-4 whitespace-nowrap text-sm">${row.drawn}</td>
                                    <td class="px-2 md:px-4 py-4 whitespace-nowrap text-sm">${row.lost}</td>
                                    <td class="px-2 md:px-4 py-4 whitespace-nowrap text-sm">${row.goalDifference > 0 ? `+${row.goalDifference}` : row.goalDifference}</td>
                                    <td class="px-2 md:px-4 py-4 whitespace-nowrap text-sm font-bold">${row.points}</td>
                                </tr>
                            `).join('')}
                        </tbody>
                    </table>
                </div>`;
        }
    };
    
    // Custom styles for tabs
    const style = document.createElement('style');
    style.textContent = `
        .tab-button.active-tab {
            background-color: white;
            color: #5c2128; /* club-maroon */
            border-bottom: 2px solid #5c2128;
        }
        .tab-button:not(.active-tab) {
            color: #D1D5DB; /* gray-300 */
        }
        .tab-button:not(.active-tab):hover {
            background-color: rgba(107, 114, 128, 0.5); /* gray-700/50 */
        }
    `;
    document.head.appendChild(style);


    // --- INITIALIZE ALL ---
    setupNavigation();
    setupTeamTabs();

});
