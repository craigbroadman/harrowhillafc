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


// --- HTML COMPONENTS ---

const HEADER_HTML = `
<header id="header" class="bg-gray-900 sticky top-0 z-50 transition-shadow duration-300 shadow-lg">
    <nav class="container mx-auto p-4 flex justify-between items-center">
        <a href="index.html" class="flex items-center space-x-3">
            <img src="images/crest.png" alt="Harrow Hill AFC Club Crest" class="h-12 w-12">
            <span class="text-xl font-bold text-white">Harrow Hill AFC</span>
        </a>

        <!-- Desktop Menu -->
        <div class="hidden md:flex items-center space-x-6">
            <div class="relative group">
                <button id="teams-menu-button-desktop"
                    class="text-gray-300 hover:text-white transition duration-300 flex items-center">
                    Teams
                    <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7">
                        </path>
                    </svg>
                </button>
                <div id="teams-dropdown-desktop"
                    class="absolute left-0 top-full hidden bg-gray-800 text-gray-300 rounded-md shadow-lg w-48 py-2 z-20 group-hover:block">
                    <!-- Team links will be injected here by JS -->
                </div>
            </div>
            <a href="committee.html" class="text-gray-300 hover:text-white transition duration-300">Committee</a>
            <a href="safeguarding.html" class="text-gray-300 hover:text-white transition duration-300">Safeguarding</a>
            <a href="#socials" class="text-gray-300 hover:text-white transition duration-300">Socials</a>
            <a href="#sponsors" class="text-gray-300 hover:text-white transition duration-300">Sponsors</a>
        </div>

        <!-- Mobile Menu Button -->
        <div class="md:hidden">
            <button id="mobile-menu-button" class="text-white focus:outline-none">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M4 6h16M4 12h16m-7 6h7"></path>
                </svg>
            </button>
        </div>
    </nav>

    <!-- Mobile Menu -->
    <div id="mobile-menu" class="hidden md:hidden px-4 pt-2 pb-4 space-y-2">
        <div class="relative">
            <button id="teams-menu-button-mobile"
                class="w-full text-left text-gray-300 hover:text-white transition duration-300 flex items-center justify-between py-2">
                Teams
                <svg class="w-4 h-4 ml-1 transform transition-transform duration-300" fill="none"
                    stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                </svg>
            </button>
            <div id="teams-dropdown-mobile"
                class="hidden bg-gray-700 text-gray-300 rounded-md shadow-lg mt-2 w-full py-2">
                <!-- Mobile team links will be injected here by JS -->
            </div>
        </div>
        <a href="committee.html" class="block text-gray-300 hover:text-white transition duration-300 py-2">Committee</a>
        <a href="safeguarding.html"
            class="block text-gray-300 hover:text-white transition duration-300 py-2">Safeguarding</a>
        <a href="#socials" class="block text-gray-300 hover:text-white transition duration-300 py-2">Socials</a>
        <a href="#sponsors" class="block text-gray-300 hover:text-white transition duration-300 py-2">Sponsors</a>
    </div>
</header>`;

const FOOTER_HTML = `
<!-- Socials Section -->
<section id="socials" class="py-16 md:py-20 bg-gray-800">
    <div class="container mx-auto px-4 text-center">
        <h2 class="text-3xl md:text-4xl font-bold mb-4 text-white">Follow Our Socials</h2>
        <p class="text-gray-400 mb-12 max-w-2xl mx-auto">Stay up-to-date with the latest news, matchday updates,
            and behind-the-scenes content.</p>
        <div class="flex justify-center items-center p-6 bg-white rounded-lg shadow-md max-w-lg mx-auto">
            <img src="images/crest.png" alt="Club Crest"
                class="h-16 w-16 rounded-full mr-4 border-2 border-gray-200">
            <div class="text-left">
                <h3 class="font-bold text-lg text-gray-900">Harrow Hill AFC</h3>
                <p class="text-gray-600">Official Club Account</p>
                <a href="https://www.facebook.com/HarrowHillAFC/" target="_blank" rel="noopener noreferrer"
                    class="text-blue-600 hover:underline">Follow us on Facebook</a>
            </div>
        </div>
    </div>
</section>

<!-- Sponsors Section -->
<section id="sponsors" class="py-16 md:py-20 bg-gray-100">
    <div class="container mx-auto px-4 text-center">
        <h2 class="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Our Sponsors</h2>
        <p class="text-gray-600 mb-12 max-w-2xl mx-auto">A huge thank you to our sponsors for their invaluable
            support. Please support the businesses that support us.</p>
        <div id="sponsors-grid-platinum"
            class="flex flex-wrap justify-center gap-8 bg-white border-t-4 border-b-4"
            style="border-color: #ba963e; padding: 1.5rem 0; margin-bottom: 30px;">
            <!-- Sponsor logos will be dynamically injected here -->
        </div>

        <div id="sponsors-grid-others" class="flex flex-wrap justify-center gap-8 items-center">
            <!-- Sponsor logos will be dynamically injected here -->
        </div>
    </div>
</section>

<!-- Footer -->
<footer class="bg-gray-900 text-white">
    <div class="container mx-auto py-8 px-4 text-center">
        <div class="flex justify-center space-x-6 mb-4">
            <a href="https://www.facebook.com/HarrowHillAFC/" target="_blank" rel="noopener noreferrer"
                aria-label="Facebook" class="text-gray-400 hover:text-white transition duration-300">
                <svg class="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                    <path
                        d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.494v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                </svg>
            </a>
            <a href="https://x.com/HarrowHillFC" target="_blank" rel="noopener noreferrer" aria-label="X"
                class="text-gray-400 hover:text-white transition duration-300">
                <svg class="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                    <path
                        d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
            </a>
        </div>
        <p class="text-gray-500">&copy; <span id="copyright-year"></span> Harrow Hill AFC. All Rights Reserved.</p>
    </div>
</footer>`;


/**
 * Injects the header and footer HTML into their placeholder elements.
 */
function loadComponents() {
    const headerPlaceholder = document.getElementById('header-placeholder');
    const footerPlaceholder = document.getElementById('footer-placeholder');

    if (headerPlaceholder) {
        headerPlaceholder.innerHTML = HEADER_HTML;
    }
    if (footerPlaceholder) {
        footerPlaceholder.innerHTML = FOOTER_HTML;
    }
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
document.addEventListener('DOMContentLoaded', () => {
    // Load reusable components from JS strings
    loadComponents();

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