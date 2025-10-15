// Mobile menu toggle
const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.nav');
if(hamburger){
  hamburger.addEventListener('click', ()=>{nav.classList.toggle('open')})
}

// Search handler (basic stub)
const searchBtn = document.getElementById('search-btn');
const siteSearchInput = document.getElementById('site-search');
if(searchBtn && siteSearchInput){
  searchBtn.addEventListener('click', ()=>{
    const q = siteSearchInput.value.trim();
    if(!q) return alert('Iltimos, so\'z kiriting');
    // Basic client-side search: try to find pages containing the query
    const pages = ['index.html','about.html','courses.html','lessons.html','books.html','contact.html'];
    const found = pages.filter(p=>p.toLowerCase().includes(q.toLowerCase()));
    if(found.length){
      window.location.href = found[0];
    } else {
      alert('Hech narsa topilmadi.');
    }
  })
}

// Admin modal
const adminBtn = document.getElementById('admin-btn');
const adminModal = document.getElementById('admin-modal');
const modalClose = document.querySelector('.modal-close');
if(adminBtn && adminModal){
  adminBtn.addEventListener('click', ()=>{adminModal.classList.remove('hidden')})
}
if(modalClose){
  modalClose.addEventListener('click', ()=>{adminModal.classList.add('hidden')})
}
adminModal && adminModal.addEventListener('click', (e)=>{if(e.target===adminModal) adminModal.classList.add('hidden')})

// Contact form
const contactForm = document.getElementById('contact-form');
if(contactForm){
  contactForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    alert('Rahmat! Biz siz bilan tez orada bog\'lanamiz.');
    contactForm.reset();
  })
}

// Video interactions: pause others when one plays
const videos = Array.from(document.querySelectorAll('video'));
videos.forEach((v)=>{
  v.addEventListener('play', ()=>{
    videos.forEach((o)=>{if(o!==v) o.pause()})
  })
});

