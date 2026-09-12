const $=s=>document.querySelector(s);const $$=s=>document.querySelectorAll(s);
const modal=$('#modal'), modalTitle=$('#modalTitle'), modalText=$('#modalText'), modalKicker=$('#modalKicker');
const content={
 night:['01 / TONIGHT','Follow the feeling','Start with the city, not a checklist. The campaign treats Nairobi after-dark as a sequence of moods: leave work, find the glow, follow the sound, stay a little longer.'],
 look:['02 / THE LOOK','Visual language','Onyx anchors the system. Burgundy creates intimacy. Cobalt and magenta behave like nightlife light, while warm amber keeps the city human.'],
 electric:['MOOD 01','Electric','For fast-moving moments: traffic, signage, glass, music, and cobalt light. Short copy, tight crops, kinetic motion.'],
 above:['MOOD 02','High above','A quieter pause in the campaign. Skyline views, negative space and restrained type give the night room to breathe.'],
 street:['MOOD 03','Street heat','The warmest layer: streetlights, late rides, open doors and the energy that keeps Nairobi moving.'],
 line:['04 / THE LINE','Make a night of it','A conversion moment without the hard sell. The invitation is simple: choose your mood, save the campaign, and step into the city.'],
 creative:['05 / CREATIVE','Social / The night starts here','A vertical first-touch asset built for discovery. It introduces the idea with one image, one line and one clear movement into the experience.']
};
function openModal(key){const d=content[key]||content.creative;modalKicker.textContent=d[0];modalTitle.textContent=d[1];modalText.textContent=d[2];modal.classList.add('open');modal.setAttribute('aria-hidden','false');document.body.style.overflow='hidden'}
function closeModal(){modal.classList.remove('open');modal.setAttribute('aria-hidden','true');document.body.style.overflow=''}
$$('[data-open]').forEach(b=>b.addEventListener('click',()=>openModal(b.dataset.open)));
$('#close').addEventListener('click',closeModal);modal.addEventListener('click',e=>{if(e.target===modal)closeModal()});document.addEventListener('keydown',e=>{if(e.key==='Escape')closeModal()});
const formats={social:['Social / The night starts here.','“Where are you when Nairobi turns the lights on?”'],paid:['Paid / Find your after-hours.','A sharp, high-contrast invitation built to stop the scroll before the city disappears into the night.'],email:['Email / Your night, properly planned.','A personal late-evening note that moves from curiosity to one simple action: choose the mood.'],landing:['Landing / Stay out a little longer.','The immersive destination: city imagery, campaign story, colour system and a direct route into the night.']};
$$('.format').forEach(btn=>btn.addEventListener('click',()=>{$$('.format').forEach(x=>x.classList.remove('active'));btn.classList.add('active');const d=formats[btn.dataset.format];$('#formatOutput h3').textContent=d[0];$('#formatOutput p').textContent=d[1]}));
const toast=$('#toast');$$('[data-copy]').forEach(b=>b.addEventListener('click',async()=>{try{await navigator.clipboard.writeText(b.dataset.copy);toast.textContent=`Copied ${b.dataset.copy}`;toast.classList.add('show');setTimeout(()=>toast.classList.remove('show'),1300)}catch{toast.textContent=b.dataset.copy;toast.classList.add('show');setTimeout(()=>toast.classList.remove('show'),1300)}}));
const menu=$('#menu'),mobile=$('#mobileNav');menu.addEventListener('click',()=>{const open=mobile.classList.toggle('open');menu.setAttribute('aria-expanded',open)});$$('.mobile-nav a').forEach(a=>a.addEventListener('click',()=>{mobile.classList.remove('open');menu.setAttribute('aria-expanded','false')}));
