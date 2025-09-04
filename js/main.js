// --- SHARED DATA ---
// Placed on the window object to be accessible by other scripts.
window.TEAMS = [
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

window.COMMITTEE_MEMBERS = [
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

window.SPONSORS = [
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

function renderTeamNav() {
    const desktopContainer = document.getElementById('teams-dropdown-desktop');
    const mobileContainer = document.getElementById('teams-dropdown-mobile');
    if (!desktopContainer || !mobileContainer) return;

    let teamLinks = '';
    const pageMap = {
        'firsts': 'first-team.html',
        'reserves': 'reserve-team.html',
        'a-team': 'a-team.html',
        'b-team': 'b-team.html',
        'u11': 'u11-team.html',
    };
    window.TEAMS.forEach(team => {
        teamLinks += `<a href="${pageMap[team.id]}" class="block px-4 py-2 text-sm hover:bg-gray-700">${team.name}</a>`;
    });
    desktopContainer.innerHTML = teamLinks;
    mobileContainer.innerHTML = teamLinks;
}


// --- SHARED INTERACTIVITY ---

function setupHeaderInteraction() {
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const teamsMenuButtonMobile = document.getElementById('teams-menu-button-mobile');
    const teamsDropdownMobileEl = document.getElementById('teams-dropdown-mobile');
    
    if (!mobileMenuButton || !mobileMenu || !teamsMenuButtonMobile || !teamsDropdownMobileEl) {
        return;
    }
    const mobileChevron = teamsMenuButtonMobile.querySelector('svg');

    mobileMenuButton.addEventListener('click', () => mobileMenu.classList.toggle('hidden'));

    teamsMenuButtonMobile.addEventListener('click', () => {
        teamsDropdownMobileEl.classList.toggle('hidden');
        if(mobileChevron) mobileChevron.classList.toggle('rotate-180');
    });
}

function setupSmoothScrolling() {
    document.body.addEventListener('click', function (e) {
        const link = e.target.closest('a');
        
        if (link) {
            const href = link.getAttribute('href');
            if (href && href.startsWith('#')) {
                e.preventDefault();
                const targetElement = document.querySelector(href);
                if (targetElement) {
                    targetElement.scrollIntoView({ behavior: 'smooth' });
                }
            }
             const mobileMenu = document.getElementById('mobile-menu');
             if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
                 mobileMenu.classList.add('hidden');
             }
        }
    });
}


// --- MAIN EXECUTION ---
document.addEventListener('DOMContentLoaded', async () => {
    // Load reusable components from HTML files
    await loadComponents();

    // Now that components are in the DOM, setup their dynamic parts and interactions
    renderTeamNav();
    renderSponsors();
    setupHeaderInteraction();
    setupSmoothScrolling();
    
    const copyrightYear = document.getElementById('copyright-year');
    if (copyrightYear) {
        copyrightYear.textContent = new Date().getFullYear();
    }
});