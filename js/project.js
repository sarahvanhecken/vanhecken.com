// Add no touch class
if (!("ontouchstart" in document.documentElement)) {
  document.documentElement.className += "no-touch";
}

// Toggle CV bar via click
let el = document.querySelector('.experience-overlay-block');
el.onclick = function() {
  el.classList.toggle('experience-overlay-block-toggled-active');
}

// Toggle CV sidebar via logo 'bars'
let logo_bar = document.querySelector('.logo-bar');
logo_bar.onclick = function() {
  if(el.classList.contains('experience-overlay-block-toggled-active')) {
    el.classList.remove('allow-hover');

    el.classList.toggle('experience-overlay-block-toggled-active');

    setTimeout(function() {
      el.classList.add('allow-hover');
    }, 300);
  }
  else {
    el.classList.toggle('experience-overlay-block-toggled-active');
  }
}

// Send mail link
const sendMailList = document.querySelectorAll('.send-email');
sendMailList.forEach(element => {
    element.addEventListener('click', function() {
        window.location.href = "mailto:sarah@vanhecken.com";
    })
});