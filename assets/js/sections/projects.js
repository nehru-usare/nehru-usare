function renderProjects() {
  document.getElementById("projects").innerHTML = `
    <h2>Projects</h2>
    <div class="projects">

      <div class="project-card">
        <h3>📈 Intraday Stock Analyzer</h3>
        <p>
          A Spring Boot + Python integrated application that recommends 2 high-probability intraday stocks 
          based on real-time market data. Built using WebSocket, Jython integration, and live APIs.
        </p>
        <p><strong>Tech:</strong> Spring Boot, Python, WebSocket, TradingView API</p>
        <a href="https://github.com/yourusername/intraday-analyzer" target="_blank">View Project →</a>
      </div>

      <div class="project-card">
        <h3>💰 Crypto Scalping System</h3>
        <p>
          A high-frequency trading system using rule-based scalping logic, integrated with Binance APIs and a real-time dashboard.
        </p>
        <p><strong>Tech:</strong> Java, WebSocket, MongoDB, Binance API</p>
        <a href="https://github.com/yourusername/crypto-scalper" target="_blank">View Project →</a>
      </div>

    </div>
  `;
}
