const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

const form = document.getElementById('contactForm');
if (form) {
  form.addEventListener('submit', function (e) {
    const name = document.getElementById('name');
    const phone = document.getElementById('phone');
    const email = document.getElementById('email');
    const comments = document.getElementById('comments');

    const nameError = document.getElementById('nameError');
    const phoneError = document.getElementById('phoneError');
    const emailError = document.getElementById('emailError');
    const commentsError = document.getElementById('commentsError');

    const phoneRe = /^\d{10}$/;
    const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    let valid = true;

    function showError(input, errorEl, message) {
      errorEl.textContent = message;
      errorEl.style.display = 'block';
      input.focus();
      if (input.select) input.select();
      valid = false;
    }

    [nameError, phoneError, emailError, commentsError].forEach(el => { if (el) el.style.display = 'none'; });

    if (!name.value.trim()) {
      e.preventDefault();
      return showError(name, nameError, 'Please enter your name.');
    }

    if (!phoneRe.test(phone.value.trim())) {
      e.preventDefault();
      return showError(phone, phoneError, 'Enter a 10-digit phone number.');
    }

    if (!emailRe.test(email.value.trim())) {
      e.preventDefault();
      return showError(email, emailError, 'Enter a valid email address.');
    }

    if (!comments.value.trim()) {
      e.preventDefault();
      return showError(comments, commentsError, 'Please provide a comment.');
    }

    return valid;
  });
}
