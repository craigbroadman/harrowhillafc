import"./main-DJh0Z_av.js";function n(e){if(!e)return;const r={firsts:"first-team.html",reserves:"reserve-team.html","a-team":"a-team.html","b-team":"b-team.html",u12:"u12-team.html",u14:"u14-team.html"};window.TEAMS.forEach(a=>{const t=document.createElement("a");t.href=r[a.id],t.className="block bg-gray-800 rounded-lg shadow-xl p-6 text-center hover:bg-gray-700 hover:scale-105 transform transition-all duration-300",t.innerHTML=`
            <h3 class="text-xl font-bold text-white">${a.name}</h3>
            <p class="text-club-gold mt-1">${a.league}</p>
        `,e.appendChild(t)})}document.addEventListener("DOMContentLoaded",()=>{const e=document.getElementById("teams-overview-container");e&&n(e)});
