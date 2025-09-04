document.addEventListener('DOMContentLoaded', () => {

    // --- DATA ---
    const TEAMS = [
        {
            id: 'firsts',
            name: 'First Team',
            league: 'Gloucestershire Northern Senior League Division 2',
            lrcodes: { fixtures: '813726653', results: '377223783', table: '677575511', divisionseason: '462214142' }
        },
        {
            id: 'reserves',
            name: 'Reserves',
            league: 'North Glos Division 1',
            lrcodes: { fixtures: '813726653', results: '377223783', table: '677575511', divisionseason: '462214142' }
        },
        {
            id: 'a-team',
            name: 'A Team',
            league: 'North Glos Division 2',
            lrcodes: { fixtures: '813726653', results: '377223783', table: '677575511', divisionseason: '462214142' }
        },
        {
            id: 'b-team',
            name: 'B Team',
            league: 'North Glos Division 3',
            lrcodes: { fixtures: '813726653', results: '377223783', table: '677575511', divisionseason: '462214142' }
        },
        {
            id: 'u11',
            name: 'U11 Youth Team',
            league: 'Severn Valley League',
            lrcodes: { fixtures: '813726653', results: '377223783', table: '677575511', divisionseason: '462214142' }
        }
    ];

    const COMMITTEE_MEMBERS = [
        { name: "Sean Thomas", role: "Chairman & GNSL Secretary" }, { name: "Barry Boseley", role: "Vice Chairman" },
        { name: "Andy Davies", role: "NGL Secretary" }, { name: "Kenny Mason", role: "Club Treasurer" },
        { name: "Paul Jones", role: "Football Treasurer" }, { name: "Jo White", role: "Welfare Officer" },
        { name: "Shaun Poole", role: "1st Team Manager" }, { name: "Craig Broadman", role: "Reserve Team Manager" },
        { name: "Jody Taylor", role: "A Team Manager" }, { name: "Royston Baldwin", role: "B Team Manager" },
        { name: "Liam Davies", role: "Youth Team" }, { name: "Roger Beckett", role: "Committee Member" },
        { name: "Matthew Boseley", role: "Committee Member" }, { name: "Dan Boseley", role: "Committee Member" },
        { name: "Donna Boseley", role: "Committee Member" }, { name: "Ben Carruthers", role: "Committee Member" },
        { name: "Jade Davies", role: "Committee Member" }, { name: "Nick Hopkins", role: "Committee Member" },
        { name: "Jordan Howard", role: "Committee Member" }, { name: "Meg Lewis", role: "Committee Member" },
        { name: "Jack Mason", role: "Committee Member" }, { name: "Hayley Morgan", role: "Committee Member" },
        { name: "Claire Partridge", role: "Committee Member" }, { name: "Sammy Taylor", role: "Committee Member" },
    ];

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

    // --- RENDER FUNCTIONS ---

    function renderCommittee(container) {
        const mainRoles = ["Chairman", "Vice Chairman", "Treasurer", "Welfare Officer", "Secretary"];
        const managerRoles = ["Manager", "Youth Team"];
        const isMainRole = member => mainRoles.some(role => member.role.toLowerCase().includes(role.toLowerCase()));
        const isManager = member => managerRoles.some(role => member.role.toLowerCase().includes(role.toLowerCase()));
        const isOther = member => !isMainRole(member) && !isManager(member);

        const mainRoleMembers = COMMITTEE_MEMBERS.filter(isMainRole);
        const managerMembers = COMMITTEE_MEMBERS.filter(isManager);
        const otherMembers = COMMITTEE_MEMBERS.filter(isOther);

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
            renderSection("Main Roles", mainRoleMembers) +
            renderSection("Team Management", managerMembers) +
            renderSection("Committee Members", otherMembers);
    }

    function renderSponsors(platinumContainer, othersContainer) {
        platinumContainer.innerHTML = "";
        othersContainer.innerHTML = "";

        const platinumSponsors = SPONSORS.filter(s => s.type === "Platinum");
        platinumSponsors.forEach(sponsor => {
            const div = document.createElement('div');
            div.className = "flex flex-col items-center";
            div.innerHTML = `<img src="${sponsor.logo}" alt="${sponsor.name}" class="max-h-24 md:max-h-32 mb-1" style="object-fit:contain;">`;
            platinumContainer.appendChild(div);
        });

        const otherSponsors = SPONSORS.filter(s => s.type !== "Platinum");
        otherSponsors.forEach(sponsor => {
            const div = document.createElement('div');
            div.className = "flex flex-col items-center";
            div.innerHTML = `<img src="${sponsor.logo}" alt="${sponsor.name}" class="max-h-10 md:max-h-14 mb-1" style="object-fit:contain;">`;
            othersContainer.appendChild(div);
        });
    }

    function renderTeamNav(desktopContainer, mobileContainer) {
        let teamLinks = '';
        const pageMap = {
            'firsts': 'first-team.html',
            'reserves': 'reserve-team.html',
            'a-team': 'a-team.html',
            'b-team': 'b-team.html',
            'u11': 'u11-team.html',
        };
        TEAMS.forEach(team => {
            teamLinks += `<a href="${pageMap[team.id]}" class="block px-4 py-2 text-sm hover:bg-gray-700">${team.name}</a>`;
        });
        desktopContainer.innerHTML = teamLinks;
        mobileContainer.innerHTML = teamLinks;
    }

    function renderHomeTeamCards(container) {
        const pageMap = {
            'firsts': 'first-team.html',
            'reserves': 'reserve-team.html',
            'a-team': 'a-team.html',
            'b-team': 'b-team.html',
            'u11': 'u11-team.html',
        };
        TEAMS.forEach(team => {
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

    function renderTeamPage(container, teamId) {
        const team = TEAMS.find(t => t.id === teamId);
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


    // --- TAB CONTENT & LOGIC ---

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
        const team = TEAMS.find(t => t.id === teamId);
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

    // --- INTERACTIVITY & SETUP ---

    function setupHeaderInteraction() {
        const mobileMenuButton = document.getElementById('mobile-menu-button');
        const mobileMenu = document.getElementById('mobile-menu');
        const teamsMenuButtonMobile = document.getElementById('teams-menu-button-mobile');
        const teamsDropdownMobileEl = document.getElementById('teams-dropdown-mobile');
        const mobileChevron = teamsMenuButtonMobile.querySelector('svg');

        mobileMenuButton.addEventListener('click', () => mobileMenu.classList.toggle('hidden'));

        teamsMenuButtonMobile.addEventListener('click', () => {
            teamsDropdownMobileEl.classList.toggle('hidden');
            mobileChevron.classList.toggle('rotate-180');
        });
    }

    function setupSmoothScrollingAndNav() {
        document.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', function (e) {
                const href = this.getAttribute('href');
                // Handle smooth scroll for on-page anchors
                if (href.startsWith('#')) {
                    e.preventDefault();
                    const targetElement = document.querySelector(href);
                    if (targetElement) {
                        targetElement.scrollIntoView({ behavior: 'smooth' });
                    }
                }
                // Close mobile menu after any link click
                const mobileMenu = document.getElementById('mobile-menu');
                if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
                    mobileMenu.classList.add('hidden');
                }
            });
        });
    }


    // --- MAIN EXECUTION ---

    // SHARED SETUP (RUNS ON EVERY PAGE)
    const teamsDropdownDesktop = document.getElementById('teams-dropdown-desktop');
    const teamsDropdownMobile = document.getElementById('teams-dropdown-mobile');
    const sponsorsGridPlatinum = document.getElementById('sponsors-grid-platinum');
    const sponsorsGridOthers = document.getElementById('sponsors-grid-others');

    if (teamsDropdownDesktop && teamsDropdownMobile) {
        renderTeamNav(teamsDropdownDesktop, teamsDropdownMobile);
    }
    if (sponsorsGridPlatinum && sponsorsGridOthers) {
        renderSponsors(sponsorsGridPlatinum, sponsorsGridOthers);
    }

    setupHeaderInteraction();
    setupSmoothScrollingAndNav();
    document.getElementById('copyright-year').textContent = new Date().getFullYear();

    // PAGE-SPECIFIC SETUP
    const committeeGrid = document.getElementById('committee-grid');
    const teamPageContainer = document.getElementById('team-page-container');
    const homeTeamsOverview = document.getElementById('teams-overview-container');

    if (committeeGrid) {
        renderCommittee(committeeGrid);
    }
    if (teamPageContainer) {
        renderTeamPage(teamPageContainer, teamPageContainer.dataset.teamId);
    }
    if (homeTeamsOverview) {
        renderHomeTeamCards(homeTeamsOverview);
    }
});
