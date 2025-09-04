document.addEventListener('DOMContentLoaded', () => {

    // --- DATA ---
    const TEAMS = [
        {
            id: 'firsts',
            name: 'First Team',
            league: 'Gloucestershire Northern Senior League Division 2',
            lrcodes: {
                fixtures: '813726653',
                results: '377223783',
                table: '677575511',
                divisionseason: '462214142'
            }
        },
        {
            id: 'reserves',
            name: 'Reserves',
            league: 'North Glos Division 1',
            lrcodes: {
                fixtures: '813726653',
                results: '377223783',
                table: '677575511',
                divisionseason: '462214142'
            }
        },
        {
            id: 'a-team',
            name: 'A Team',
            league: 'North Glos Division 2',
            lrcodes: {
                fixtures: '813726653',
                results: '377223783',
                table: '677575511',
                divisionseason: '462214142'
            }
        },
        {
            id: 'b-team',
            name: 'B Team',
            league: 'North Glos Division 3',
            lrcodes: {
                fixtures: '813726653',
                results: '377223783',
                table: '677575511',
                divisionseason: '462214142'
            }
        },
        {
            id: 'u11',
            name: 'U11 Youth Team',
            league: 'Severn Valley League',
            lrcodes: {
                fixtures: '813726653',
                results: '377223783',
                table: '677575511',
                divisionseason: '462214142'
            }
        }
    ];

    const COMMITTEE_MEMBERS = [
        { name: "Sean Thomas", role: "Chairman & GNSL Secretary" },
        { name: "Barry Boseley", role: "Vice Chairman" },
        { name: "Andy Davies", role: "NGL Secretary" },
        { name: "Kenny Mason", role: "Club Treasurer" },
        { name: "Paul Jones", role: "Football Treasurer" },
        { name: "Jo White", role: "Welfare Officer" },
        { name: "Shaun Poole", role: "1st Team Manager" },
        { name: "Craig Broadman", role: "Reserve Team Manager" },
        { name: "Jody Taylor", role: "A Team Manager" },
        { name: "Royston Baldwin", role: "B Team Manager" },
        { name: "Liam Davies", role: "Youth Team" },
        { name: "Roger Beckett", role: "Committee Member" },
        { name: "Matthew Boseley", role: "Committee Member" },
        { name: "Dan Boseley", role: "Committee Member" },
        { name: "Donna Boseley", role: "Committee Member" },
        { name: "Ben Carruthers", role: "Committee Member" },
        { name: "Jade Davies", role: "Committee Member" },
        { name: "Nick Hopkins", role: "Committee Member" },
        { name: "Jordan Howard", role: "Committee Member" },
        { name: "Meg Lewis", role: "Committee Member" },
        { name: "Jack Mason", role: "Committee Member" },
        { name: "Hayley Morgan", role: "Committee Member" },
        { name: "Claire Partridge", role: "Committee Member" },
        { name: "Sammy Taylor", role: "Committee Member" },
    ];

    // ...existing code...

    const SPONSORS = [
        { name: "GLS Windows", logo: "images/sponsors/glswindows.png", type: "Platinum" },
        { name: "A.A. Kear Electrical Services Ltd", logo: "images/sponsors/aakearelectricalservicesltd.png", type: "Platinum" },
        { name: "Dean Electrical", logo: "images/sponsors/deanelectrical.png", type: "Platinum" },
        { name: "R&S Building Services Engineers", logo: "images/sponsors/rsbuildingservicesengineers.png", type: "Platinum" },
        { name: "Wyedean Scaffolding", logo: "images/sponsors/wyedeanscaffolding.png", type: "Platinum" },

        { name: "Severn Sport", logo: "images/sponsors/severnsport.png", type: "Standard" },
        { name: "Vigor8 Reflexology", logo: "images/sponsors/vigor8reflexology.png", type: "Standard" },
        { name: "Drew Property Law", logo: "images/sponsors/drewpropertylaw.png", type: "Standard" },
        { name: "Sparkpak", logo: "images/sponsors/sparkpak.png", type: "Standard" },
        { name: "Silent Warrior Fitness", logo: "images/sponsors/silentwarriorfitness.png", type: "Standard" },
        { name: "AJW Control Solutions Ltd", logo: "images/sponsors/ajwcontrolsolutionsltd.png", type: "Standard" },
        { name: "SparkLED", logo: "images/sponsors/sparkled.png", type: "Standard" },
        { name: "Cinderford Garden Centre at Slabs 2 U", logo: "images/sponsors/cinderfordgardencentreatslabs2u.png", type: "Standard" },
        { name: "Forest Products", logo: "images/sponsors/forestproducts.png", type: "Standard" },
        { name: "Nikki's Events", logo: "images/sponsors/nikkisevents.png", type: "Standard" },
        { name: "Whitson Barber Shop", logo: "images/sponsors/whitsonbarbershop.png", type: "Standard" },
        { name: "K30 Interior Contracts", logo: "images/sponsors/k30interiorcontracts.png", type: "Standard" },
        { name: "Beard & Tandy Building Contractors", logo: "images/sponsors/beardtandybuildingcontractors.png", type: "Standard" },
        { name: "TH White Agriculture", logo: "images/sponsors/thwhiteagriculture.png", type: "Standard" },
        { name: "Gloucestershire College", logo: "images/sponsors/gloucestershirecollege.png", type: "Standard" },
        { name: "A&H Jones Quality Butchers", logo: "images/sponsors/ahjonesqualitybutchers.png", type: "Standard" },
        { name: "KAV Scaffolding", logo: "images/sponsors/kavscaffolding.png", type: "Standard" },
        { name: "Andy Davies Chimney Sweep", logo: "images/sponsors/andydavieschimneysweep.png", type: "Standard" },
        { name: "JT Heating and Maintenance", logo: "images/sponsors/jtheatingandmaintenance.png", type: "Standard" },
        { name: "A.W. Parker Coal Merchant Ltd", logo: "images/sponsors/awparkercoalmerchantltd.png", type: "Standard" },
        { name: "The Belfry", logo: "images/sponsors/thebelfry.png", type: "Standard" },
        { name: "The Golden Lion", logo: "images/sponsors/thegoldenlion.png", type: "Standard" },
        { name: "Forest Driving Range", logo: "images/sponsors/forestdrivingrange.png", type: "Standard" },
        { name: "Plumbase Gloucester", logo: "images/sponsors/plumbasegloucester.png", type: "Standard" },
        { name: "Camerons Quality Butchers", logo: "images/sponsors/cameronsqualitybutchers.png", type: "Standard" },
        { name: "Crazy Daisy Balloons", logo: "images/sponsors/crazydaisyballoons.png", type: "Standard" },
        { name: "MG Building Solutions", logo: "images/sponsors/mgbuildingsolutions.png", type: "Standard" },
        { name: "MTB Plumbing and Heating", logo: "images/sponsors/mtbplumbingandheating.png", type: "Standard" },
        { name: "The Looking Glass", logo: "images/sponsors/thelookingglass.png", type: "Standard" },

        { name: "SC Scaffolding", logo: "images/sponsors/scscaffolding.png", type: "Youth" },
        { name: "Misty Windows", logo: "images/sponsors/mistywindows.png", type: "Youth" },
        { name: "Cobus", logo: "images/sponsors/cobus.png", type: "Youth" },
        { name: "Forest Phoenix Accountancy", logo: "images/sponsors/forestphoenixaccountancy.png", type: "Youth" },
    ];

    // ...existing code...

    // --- MOCK DATA GENERATION ---
    const createMockResults = (teamName) => {
        const opponents = ["Rivals FC", "Local Rovers", "United City", "County Town"];
        return Array(5).fill(null).map((_, i) => ({
            homeTeam: i % 2 === 0 ? teamName : opponents[i % 4],
            awayTeam: i % 2 !== 0 ? teamName : opponents[i % 4],
            homeScore: Math.floor(Math.random() * 5),
            awayScore: Math.floor(Math.random() * 5),
            date: `2025-08-${23 - i * 7}`
        }));
    };

    const createMockLeagueTable = (teamName) => {
        const teams = [teamName, "Rivals FC", "Local Rovers", "United City", "County Town", "Another Team", "Village XI", "Borough United"];
        return teams.map((name, i) => ({
            pos: i + 1,
            name,
            p: 10,
            w: Math.floor(Math.random() * 10),
            d: Math.floor(Math.random() * (10 - (i === 0 ? 5 : 0))),
            l: Math.floor(Math.random() * 3),
            gd: Math.floor(Math.random() * 20) - 10,
            pts: Math.floor(Math.random() * 30)
        })).sort((a, b) => b.pts - a.pts).map((team, i) => ({ ...team, pos: i + 1 }));
    };


    // --- DYNAMIC CONTENT INJECTION ---

    const teamsContainer = document.getElementById('teams-container');
    const committeeGrid = document.getElementById('committee-grid');
    const sponsorsGridPlatinum = document.getElementById('sponsors-grid-platinum');
    const sponsorsGridOthers = document.getElementById('sponsors-grid-others');
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
                        <button data-team="${team.id}" data-tab="info" class="tab-button whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm md:text-base border-club-gold text-club-gold">Info</button>
                        <button data-team="${team.id}" data-tab="fixtures" class="tab-button whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm md:text-base border-transparent text-gray-400 hover:text-gray-200 hover:border-gray-400">Fixtures</button>
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
        // Define role groupings
        const mainRoles = [
            "Chairman", "Vice Chairman", "Treasurer", "Welfare Officer", "Secretary"
        ];
        const managerRoles = [
            "Manager"
        ];

        // Helper functions to check role type
        const isMainRole = member =>
            mainRoles.some(role =>
                member.role.toLowerCase().includes(role.toLowerCase())
            );
        const isManager = member =>
            managerRoles.some(role =>
                member.role.toLowerCase().includes(role.toLowerCase())
            );
        const isOther = member =>
            !isMainRole(member) && !isManager(member);

        // Filter members
        const mainRoleMembers = COMMITTEE_MEMBERS.filter(isMainRole);
        const managerMembers = COMMITTEE_MEMBERS.filter(isManager);
        const otherMembers = COMMITTEE_MEMBERS.filter(isOther);

        // Render section helper
        function renderSection(title, members) {
            if (members.length === 0) return '';
            let html = `<div class="col-span-full"><h3 class="text-lg font-bold text-club-gold mb-2 mt-6">${title}</h3></div>`;
            members.forEach(member => {
                html += `
                    <div class="bg-gray-700 rounded-lg shadow-lg p-6 text-center">
                        <h3 class="text-xl font-bold text-white">${member.name}</h3>
                        <p class="text-club-gold">${member.role}</p>
                    </div>
                `;
            });
            return html;
        }

        // Build the grid HTML
        committeeGrid.innerHTML =
            renderSection("Main Roles", mainRoleMembers) +
            renderSection("Managers", managerMembers) +
            renderSection("Other Committee Members", otherMembers);
    }

    // ...existing code...

    if (sponsorsGridPlatinum) {
        sponsorsGridPlatinum.innerHTML = "";

        // --- Platinum Sponsors Bar ---
        const platinumSponsors = SPONSORS.filter(s => s.type === "Platinum");
        if (platinumSponsors.length > 0) {
            platinumSponsors.forEach(sponsor => {
                const div = document.createElement('div');
                div.className = "flex flex-col items-center";
                div.innerHTML = `
    <img src="${sponsor.logo}" alt="${sponsor.name}" class="max-h-24 md:max-h-32 mb-1" style="object-fit:contain;">`;
                sponsorsGridPlatinum.appendChild(div);
            });
            //sponsorsGridPlatinum.appendChild(platinumBar);
        }

        // --- Other Sponsors Grid ---
        const otherSponsors = SPONSORS.filter(s => s.type !== "Platinum");
        if (otherSponsors.length > 0) {

            otherSponsors.forEach(sponsor => {
                const div = document.createElement('div');
                div.className = "flex flex-col items-center";
                div.innerHTML = `
    <img src="${sponsor.logo}" alt="${sponsor.name}" class="max-h-10 md:max-h-14 mb-1" style="object-fit:contain;">`;
                sponsorsGridOthers.appendChild(div);
            });

        }
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
            if (targetElement) {
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

    function loadFAWidget(lrcode, divisionseason, container) {
        // Clear previous content
        container.innerHTML = `
        <div id="lrep${lrcode}">
            Data loading....<a href="https://fulltime.thefa.com/index.html?divisionseason=${divisionseason}">click here for Division</a><br/><br/>
            <a href="http://www.thefa.com/FULL-TIME">FULL-TIME Home</a>
        </div>
    `;

        // Set global lrcode variable
        window.lrcode = lrcode;

        // Remove any previous FA widget script
        const oldScript = document.getElementById('fa-widget-script');
        if (oldScript) oldScript.remove();

        // Dynamically add the FA widget script
        const script = document.createElement('script');
        script.id = 'fa-widget-script';
        script.src = 'https://fulltime.thefa.com/client/api/cs1.js';
        script.async = true;
        container.appendChild(script);
    }

    function getInfoContent(team) {
        return `
        <div class="bg-gray-700 p-6 rounded-lg text-center">
            <h4 class="text-xl font-bold text-white mb-2">${team.name}</h4>
            <p class="text-club-gold mb-2">${team.league}</p>
            <p class="text-gray-300">Welcome to the ${team.name} page. Here you can find fixtures, results, and the current league table for this team.</p>
        </div>
    `;
    }

    function updateTabContent(teamId, tabType) {
        const contentDiv = document.getElementById(`content-${teamId}`);
        const team = TEAMS.find(t => t.id === teamId);
        if (!contentDiv || !team) return;

        if (tabType === 'info') {
            contentDiv.innerHTML = getInfoContent(team);
        } else if (team.lrcodes && team.lrcodes[tabType]) {
            loadFAWidget(team.lrcodes[tabType], team.lrcodes.divisionseason, contentDiv);
        } else {
            // Fallback to mock data if no lrcode
            if (tabType === 'fixtures') {
                contentDiv.innerHTML = getFixturesContent(team.lrcode);
            } else if (tabType === 'results') {
                contentDiv.innerHTML = getResultsContent(teamId);
            } else if (tabType === 'table') {
                contentDiv.innerHTML = getTableContent(teamId);
            }
        }
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

    // Initial load for all teams' first tab (info)
    TEAMS.forEach(team => {
        updateTabContent(team.id, 'info');
    });

    // Set Copyright Year
    document.getElementById('copyright-year').textContent = new Date().getFullYear();

});
