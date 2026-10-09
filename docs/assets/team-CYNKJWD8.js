import"./main-DJh0Z_av.js";function i(t){if(t.status==="coming-soon")return`
        <div class="bg-gray-700 p-6 rounded-lg text-center">
            <h2 class="text-3xl font-bold text-white mb-4">Coming Soon!</h2>
            <p class="text-lg text-gray-300 mb-4">We are excited to be launching our new ${t.name} for the upcoming season.</p>
            <p class="text-gray-400">For more information and to register interest, please contact Club Chairman Sean Thomas.</p>
        </div>`;const o=t.photos&&t.photos.length>0?t.photos.map(s=>`<div class="p-2"><img src="${s}" alt="${t.name} photo" class="rounded-lg shadow-lg w-full"></div>`).join(""):'<p class="text-gray-400 p-2">No team photos available yet.</p>',e=t.sponsors&&t.sponsors.length>0?t.sponsors.map(s=>`<div class="p-2"><img src="${s.logo}" alt="${s.name}" class="max-h-32 object-contain"></div>`).join(""):'<p class="text-gray-400">This team is currently seeking a sponsor.</p>',a=t.assistant?`<div class="bg-gray-700 p-6 rounded-lg text-center shadow-xl">
                <img src="${t.assistant.photo}" alt="${t.assistant.name}" class="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-club-blue">
                <h3 class="text-2xl font-bold text-white">${t.assistant.name}</h3>
                <p class="text-club-blue">Assistant Manager</p>
            </div>`:"",n=t.description?`<div class="col-span-full bg-gray-700 p-6 rounded-lg shadow-xl text-left mb-6">
                <p class="text-gray-300 text-lg">${t.description}</p>
            </div>`:"",l=t.faLink?`<div class="bg-gray-700 p-6 rounded-lg shadow-xl text-center">
                <h4 class="text-xl font-bold text-white mb-4">Fixtures, Results & League Table</h4>
                <p class="text-gray-300 mb-4">View fixtures, results, and league standings on the official FA website.</p>
                <a href="${t.faLink}" target="_blank" rel="noopener" class="inline-block bg-club-gold hover:bg-club-blue text-club-navy hover:text-club-navy font-bold py-3 px-6 rounded-lg transition-colors duration-200">View on FA Website</a>
            </div>`:"",r=t.registrationInfo?`<div class="bg-gray-700 p-6 rounded-lg shadow-xl text-left">
                <h4 class="text-xl font-bold text-white mb-4 border-b border-gray-600 pb-2">${t.registrationInfo.title}</h4>
                <div class="space-y-3 text-gray-300">
                    <p>${t.registrationInfo.description}</p>
                    <a href="${t.registrationInfo.formLink}" target="_blank" rel="noopener" class="inline-block bg-club-gold hover:bg-club-blue text-club-navy hover:text-club-navy font-bold py-3 px-6 rounded-lg transition-colors duration-200 mt-2">Registration Form</a>
                </div>
            </div>`:"";return`
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        ${n}
        <!-- Left Column: Manager & Info -->
        <div class="lg:col-span-1 space-y-6">
            <!-- Manager Card -->
            <div class="bg-gray-700 p-6 rounded-lg text-center shadow-xl">
                <img src="${t.manager.photo}" alt="${t.manager.name}" class="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-club-gold">
                <h3 class="text-2xl font-bold text-white">${t.manager.name}</h3>
                <p class="text-club-gold">Team Manager</p>
            </div>
            <!-- Assistant Manager Card -->
            ${a}
            <!-- Registration Info Card -->
            ${r}
            <!-- Details Card -->
            <div class="bg-gray-700 p-6 rounded-lg shadow-xl text-left">
                <h4 class="text-xl font-bold text-white mb-4 border-b border-gray-600 pb-2">Team Details</h4>
                <div class="space-y-3 text-gray-300">
                    <p><strong>Kit:</strong> ${t.kit.home} (Home), ${t.kit.away} (Away)</p>
                </div>
            </div>
        </div>

        <!-- Right Column: Gallery, FA Link & Sponsors -->
        <div class="lg:col-span-2 space-y-6">
            <!-- Photo Gallery -->
            <div class="bg-gray-700 p-6 rounded-lg shadow-xl">
                <h4 class="text-xl font-bold text-white mb-4">Photo Gallery</h4>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    ${o}
                </div>
            </div>
            <!-- Fixtures, Results & League Table -->
            ${l}
            <!-- Team Sponsors -->
            <div class="bg-gray-700 p-6 rounded-lg shadow-xl">
                <h4 class="text-xl font-bold text-white mb-4">Team Sponsors</h4>
                <div class="flex flex-wrap justify-center items-center gap-6">
                    ${e}
                </div>
            </div>
        </div>
    </div>
    `}function d(t,o){const e=window.TEAMS.find(a=>a.id===o);if(!e){t.innerHTML='<p class="text-center text-red-400">Team not found.</p>';return}t.innerHTML=`
        <div id="team-${e.id}" class="bg-gray-800 rounded-lg shadow-xl p-6 md:p-8">
            <div class="text-center mb-8">
                <h1 class="text-3xl md:text-4xl font-bold text-white">${e.name}</h1>
                <p class="text-club-gold text-lg">${e.league}</p>
            </div>
            <div id="content-${e.id}" class="tab-content">
                ${i(e)}
            </div>
        </div>`}document.addEventListener("DOMContentLoaded",()=>{const t=document.getElementById("team-page-container");t&&t.dataset.teamId&&d(t,t.dataset.teamId)});
