// --- SHARED DATA ---
// Placed on the window object to be accessible by other scripts.
window.TEAMS = [
    {
        id: 'firsts',
        name: 'First Team',
        type: 'senior',
        league: 'Gloucestershire Northern Senior League Division 2',
        lrcodes: { fixtures: '265597183', results: '616256420', table: '542423978', divisionseason: '462214142' },
        manager: { name: "Shaun Poole", photo: "images/teams/person.png" },
        kit: { home: 'Maroon & Blue', away: 'Blue' },
        training: { day: 'Tuesdays', time: '6:30 PM', location: 'Harrow Hill AFC' },
        photos: ['images/teams/2025-26-1st-Team.png'],
        sponsors: [
            { name: "GLS Windows", logo: "images/sponsors/glswindows.png" },
            { name: "Severn Sport", logo: "images/sponsors/severnsport.png" }
        ]
    },
    {
        id: 'reserves',
        name: 'Reserves',
        type: 'senior',
        league: 'North Glos Division 1',
        lrcodes: { fixtures: '885246073', results: '620295000', table: '257439364', divisionseason: '789060406' },
        manager: { name: "Craig Broadman", photo: "images/teams/person.png" },
        kit: { home: 'Blue', away: 'Maroon & Blue' },
        training: { day: 'Tuesdays', time: '6:30 PM', location: 'Harrow Hill AFC' },
        photos: [ 'images/teams/2025-26-Reserve-Team.png' ],
        sponsors: [
            { name: "A.A. Kear", logo: "images/sponsors/aakearelectricalservicesltd.png" },
            { name: "Vigor8 Reflexology", logo: "images/sponsors/vigor8reflexology.png" }
        ]
    },
    {
        id: 'a-team',
        name: 'A Team',
        type: 'senior',
        league: 'North Glos Division 2',
        lrcodes: { fixtures: '885246073', results: '620295000', table: '415439960', divisionseason: '450636774' },
        manager: { name: "Jody Taylor", photo: "images/teams/person.png" },
        kit: { home: 'Maroon', away: 'Blue' },
        training: { day: 'Tuesdays', time: '6:30 PM', location: 'Harrow Hill AFC' },
        photos: [],
        sponsors: [
            { name: "Dean Electrical", logo: "images/sponsors/deanelectrical.png" },
            { name: "Drew Property Law", logo: "images/sponsors/drewpropertylaw.png" }
        ]
    },
    {
        id: 'b-team',
        name: 'B Team',
        type: 'senior',
        league: 'North Glos Division 3',
        lrcodes: { fixtures: '885246073', results: '620295000', table: '1384130', divisionseason: '399928630' },
        manager: { name: "Royston Baldwin", photo: "images/teams/person.png" },
        kit: { home: 'Blue', away: 'Maroon' },
        training: { day: 'Tuesdays', time: '6:30 PM', location: 'Harrow Hill AFC' },
        photos: [],
        sponsors: []
    },
    {
        id: 'u11',
        name: 'U11 Youth Team',
        type: 'youth',
        league: 'Severn Valley League',
        // lrcodes: { fixtures: '813726653', results: '377223783', table: '677575511', divisionseason: '462214142' },
        manager: { name: "Liam Davies", photo: "images/teams/person.png" },
        kit: { home: 'Maroon & Blue', away: '-' },
        training: { day: 'Wednesdays', time: '6:00 PM', location: 'Harrow Hill AFC' },
        photos: ['images/teams/2025-26-Youth-U11s.jpg'],
        sponsors: [
            { name: "Wyedean Scaffolding", logo: "images/sponsors/wyedeanscaffolding.png" },
            { name: "Pollocks plumbing and heating", logo: "images/sponsors/pollocksplumbingandheating.png", },
            { name: "SC Scaffolding", logo: "images/sponsors/scscaffolding.png" },
            { name: "Cobus", logo: "images/sponsors/cobus.png" },
            { name: "Misty Windows", logo: "images/sponsors/mistywindows.png", },
            { name: "Forest Phoenix Accountancy", logo: "images/sponsors/forestphoenixaccountancy.png", },

        ],
        newPlayerInfo: "We are always looking for new players to join our growing youth setup. If your child is interested in playing football in a fun and safe environment, please get in touch with the manager."
    },
    {
        id: 'u12',
        name: 'U12 Youth Team',
        type: 'youth',
        league: 'TBC',
        status: 'coming-soon'
    }
];

window.COMMITTEE_MEMBERS = [
    { name: "Sean Thomas", role: "Chairman & GNSL Secretary", isMainOfficial: true }, 
    { name: "Andy Davies", role: "NGL Secretary", isMainOfficial: true }, 
    { name: "Paul Jones", role: "Treasurer", isMainOfficial: true }, 
    { name: "Jo White", role: "Welfare Officer", isMainOfficial: true },
    { name: "Barry Boseley", role: "Vice Chairman" },
    { name: "Kenny Mason", role: "Social Club Treasurer" },
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
    { name: "Shaun Poole", role: "1st Team Manager" }, 
    { name: "Craig Broadman", role: "Reserve Team Manager" },
    { name: "Jody Taylor", role: "A Team Manager" }, 
    { name: "Royston Baldwin", role: "B Team Manager" },
    { name: "Liam Davies", role: "U11 Youth Team Manager" }, 
];

window.SPONSORS = [
    { name: "GLS Windows", logo: "images/sponsors/glswindows.png", type: "Platinum" },
    { name: "A.A. Kear Electrical Services Ltd", logo: "images/sponsors/aakearelectricalservicesltd.png", type: "Platinum" },
    { name: "Dean Electrical", logo: "images/sponsors/deanelectrical.png", type: "Platinum" },
    { name: "R&S Building Services Engineers", logo: "images/sponsors/rsbuildingservicesengineers.png", type: "Platinum" },
    { name: "Wyedean Scaffolding", logo: "images/sponsors/wyedeanscaffolding.png", type: "Platinum" },
    { name: "Pollocks plumbing and heating", logo: "images/sponsors/pollocksplumbingandheating.png", type: "Platinum" },
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


/**
 * Injects the header and footer HTML into their placeholder elements by fetching them from files.
 */
async function loadComponents() {
    const headerPlaceholder = document.getElementById('header-placeholder');
    const footerPlaceholder = document.getElementById('footer-placeholder');

    const load = async (element, url) => {
        if (!element) return;
        try {
            const response = await fetch(url);
            if (response.ok) {
                element.innerHTML = await response.text();
            } else {
                element.innerHTML = `<p class="text-red-500 text-center">Error: Could not load ${url}.</p>`;
                console.error(`Failed to load ${url}:`, response.status, response.statusText);
            }
        } catch (error) {
            element.innerHTML = `<p class="text-red-500 text-center">Error: Failed to fetch ${url}.</p>`;
            console.error(`Error fetching ${url}:`, error);
        }
    };

    await Promise.all([
        load(headerPlaceholder, '_header.html'),
        load(footerPlaceholder, '_footer.html')
    ]);
}

// --- SHARED RENDER FUNCTIONS ---

function renderSponsors() {
    const platinumContainer = document.getElementById('sponsors-grid-platinum');
    const othersContainer = document.getElementById('sponsors-grid-others');
    if (!platinumContainer || !othersContainer) return;

    platinumContainer.innerHTML = "";
    othersContainer.innerHTML = "";

    const platinumSponsors = window.SPONSORS.filter(s => s.type === "Platinum");
    platinumSponsors.forEach(sponsor => {
        const div = document.createElement('div');
        div.className = "flex flex-col items-center";
        div.innerHTML = `<img src="${sponsor.logo}" alt="${sponsor.name}" class="max-h-24 md:max-h-32 mb-1" style="object-fit:contain;">`;
        platinumContainer.appendChild(div);
    });

    const otherSponsors = window.SPONSORS.filter(s => s.type !== "Platinum");
    otherSponsors.forEach(sponsor => {
        const div = document.createElement('div');
        div.className = "flex flex-col items-center";
        div.innerHTML = `<img src="${sponsor.logo}" alt="${sponsor.name}" class="max-h-10 md:max-h-14 mb-1" style="object-fit:contain;">`;
        othersContainer.appendChild(div);
    });
}

function renderTeamNavs() {
    const pageMap = {
        'firsts': 'first-team.html', 'reserves': 'reserve-team.html',
        'a-team': 'a-team.html', 'b-team': 'b-team.html',
        'u11': 'u11-team.html', 'u12': 'u12-team.html',
    };

    const seniorTeams = window.TEAMS.filter(t => t.type === 'senior');
    const youthTeams = window.TEAMS.filter(t => t.type === 'youth');

    const createLinks = (teams) => teams.map(team =>
        `<a href="${pageMap[team.id]}" class="block px-4 py-2 text-sm hover:bg-gray-700">${team.name}</a>`
    ).join('');

    // Desktop
    document.getElementById('senior-teams-dropdown-desktop').innerHTML = createLinks(seniorTeams);
    document.getElementById('youth-teams-dropdown-desktop').innerHTML = createLinks(youthTeams);

    // Mobile
    document.getElementById('senior-teams-dropdown-mobile').innerHTML = createLinks(seniorTeams);
    document.getElementById('youth-teams-dropdown-mobile').innerHTML = createLinks(youthTeams);
}


// --- SHARED INTERACTIVITY ---

function setupHeaderInteraction() {
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    if (!mobileMenuButton || !mobileMenu) return;

    mobileMenuButton.addEventListener('click', () => mobileMenu.classList.toggle('hidden'));

    // Mobile dropdown toggles
    const setupDropdown = (buttonId, dropdownId) => {
        const button = document.getElementById(buttonId);
        const dropdown = document.getElementById(dropdownId);
        if (button && dropdown) {
            const chevron = button.querySelector('svg');
            button.addEventListener('click', () => {
                dropdown.classList.toggle('hidden');
                if (chevron) chevron.classList.toggle('rotate-180');
            });
        }
    };
    setupDropdown('senior-teams-menu-button-mobile', 'senior-teams-dropdown-mobile');
    setupDropdown('youth-teams-menu-button-mobile', 'youth-teams-dropdown-mobile');
}

// --- MAIN EXECUTION ---
document.addEventListener('DOMContentLoaded', async () => {
    // Load reusable components from HTML files
    await loadComponents();

    // Now that components are in the DOM, setup their dynamic parts and interactions
    renderTeamNavs();
    renderSponsors();
    setupHeaderInteraction();

    const copyrightYear = document.getElementById('copyright-year');
    if (copyrightYear) {
        copyrightYear.textContent = new Date().getFullYear();
    }
});