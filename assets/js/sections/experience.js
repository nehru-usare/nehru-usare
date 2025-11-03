function renderExperience() {
  document.getElementById("experience").innerHTML = `
    <h2>Experience</h2>
    <div class="timeline">

      <div class="job">
        <h3>Backend Developer — XYZ Tech</h3>
        <span>Jan 2023 – Present</span>
        <ul>
          <li>Developed and maintained REST APIs using Spring Boot and MySQL.</li>
          <li>Optimized database queries, improving response times by 30%.</li>
          <li>Integrated authentication using Spring Security and JWT.</li>
          <li>Collaborated with frontend teams to deliver full-stack features.</li>
        </ul>
      </div>

      <div class="job">
        <h3>Java Developer — ABC Software</h3>
        <span>Jun 2021 – Dec 2022</span>
        <ul>
          <li>Implemented microservices-based architecture using Spring Cloud.</li>
          <li>Worked on Kafka-based messaging for asynchronous communication.</li>
          <li>Deployed applications on AWS EC2 and managed CI/CD pipelines.</li>
        </ul>
      </div>

    </div>
  `;
}
