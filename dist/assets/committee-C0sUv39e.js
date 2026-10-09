import"./main-DJh0Z_av.js";function u(t){if(!t)return;const l=["Chairman & GNSL Secretary","Treasurer","Welfare Officer","Secretary"],c=["Manager","Youth Team"],n=e=>l.some(o=>e.isMainOfficial===!0),i=e=>c.some(o=>e.role.toLowerCase().includes(o.toLowerCase())),d=e=>!n(e)&&!i(e),M=window.COMMITTEE_MEMBERS.filter(n),f=window.COMMITTEE_MEMBERS.filter(i),m=window.COMMITTEE_MEMBERS.filter(d);function r(e,o){if(o.length===0)return"";let s=`<div class="col-span-full"><h3 class="text-2xl font-bold text-club-gold mb-4 mt-6 border-b border-gray-700 pb-2">${e}</h3></div>`;return o.forEach(a=>{s+=`
                <div class="bg-gray-700 rounded-lg shadow-lg p-6 text-center">
                    <h4 class="text-xl font-bold text-white">${a.name}</h4>
                    <p class="text-club-gold">${a.role}</p>
                </div>
            `}),s}t.innerHTML=r("Key Officials",M)+r("Club Officials",m)+r("The Managers",f)}document.addEventListener("DOMContentLoaded",()=>{const t=document.getElementById("committee-grid");t&&u(t)});
