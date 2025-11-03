function renderTestimonials() {
  document.getElementById("testimonials").innerHTML = `
    <h2>Testimonials</h2>
    <div class="testimonials">
      <blockquote>
        “Nehru has a deep understanding of Java backend systems. His code quality and design patterns
        make him a valuable contributor to any engineering team.”
        <footer>— Senior Engineer, XYZ Tech</footer>
      </blockquote>

      <blockquote>
        “He brings clarity, structure, and a strong sense of ownership to every project.
        His Spring Boot expertise helped us ship complex microservices quickly.”
        <footer>— Tech Lead, ABC Software</footer>
      </blockquote>
    </div>
  `;
}
