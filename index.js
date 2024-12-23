const btn = document.getElementById('SubmitQuery');

document.getElementById('testform').addEventListener('submit', function(event) {
   event.preventDefault();
   btn.value = 'Sending...';

   const serviceID = 'service_gtu2llx';
   const templateID = 'template_kblkj48';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'BOOK A SITE VISIT';
      alert('Sent!');
    }, (err) => {
      btn.value = 'BOOK A SITE VISIT';
      alert(JSON.stringify(err));
    });
});

document.getElementById('testform1').addEventListener('submit', function(event) {
  event.preventDefault();
  btn.value = 'Sending...';

  const serviceID = 'service_gtu2llx';
  const templateID = 'template_kblkj48';

  emailjs.sendForm(serviceID, templateID, this)
   .then(() => {
     btn.value = 'BOOK A SITE VISIT';
     alert('Sent!');
   }, (err) => {
     btn.value = 'BOOK A SITE VISIT';
     alert(JSON.stringify(err));
   });
});

document.getElementById('testform2').addEventListener('submit', function(event) {
  event.preventDefault();
  btn.value = 'Sending...';

  const serviceID = 'service_gtu2llx';
  const templateID = 'template_kblkj48';

  emailjs.sendForm(serviceID, templateID, this)
   .then(() => {
     btn.value = 'BOOK A SITE VISIT';
     alert('Sent!');
   }, (err) => {
     btn.value = 'BOOK A SITE VISIT';
     alert(JSON.stringify(err));
   });
});

document.addEventListener("scroll", function() {
  const priceSection = document.getElementById("price-list");
  const modal = new bootstrap.Modal(document.getElementById("modal1"));

  // Check if user has scrolled past the price section
  if (window.scrollY > priceSection.offsetTop + priceSection.offsetHeight) {
    modal.show();
    // Remove the scroll event listener after showing the modal
    document.removeEventListener("scroll", arguments.callee);
  }
});

function toggleNavbar() {
  document.getElementById("navbarNavAltMarkup").classList.toggle("show");
}

function closeHamburgerMenu()
{
  document.getElementById("navbarNavAltMarkup").classList.remove("show");
}

document.querySelectorAll('#navbarNavAltMarkup .nav-link').forEach(link => {
  link.addEventListener('click', closeHamburgerMenu);
});
