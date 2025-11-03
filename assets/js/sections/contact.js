function renderContact() {
  document.getElementById("contact").innerHTML = `
    <h2>Contact Me</h2>
    <form id="contact-form" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
      <label for="name">Name</label>
      <input type="text" id="name" name="name" required />

      <label for="email">Email</label>
      <input type="email" id="email" name="email" required />

      <label for="message">Message</label>
      <textarea id="message" name="message" rows="5" required></textarea>

      <button type="submit">Send Message</button>
    </form>

    <div class="contact-info">
      <p>📧 <a href="mailto:nehru.usare@example.com">nehru.usare@example.com</a></p>
      <p>🔗 
        <a href="https://github.com/yourusername" target="_blank">GitHub</a> • 
        <a href="https://linkedin.com/in/yourprofile" target="_blank">LinkedIn</a>
      </p>
    </div>
  `;
}
