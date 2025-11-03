window.addEventListener('DOMContentLoaded', () => {
  loadSection('about');
  loadSection('experience');
  loadSection('projects');
  loadSection('skills');
  loadSection('certifications');
  loadSection('testimonials');
  loadSection('contact');
});

function loadSection(section) {
  fetch(`assets/js/sections/${section}.js`)
    .then(() => {
      const fn = window[`render${capitalize(section)}`];
      if (fn) fn();
    })
    .catch(console.error);
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
