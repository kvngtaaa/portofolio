const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const assetsDir = path.join(__dirname, '..', 'public', 'assets');
const tempDir = path.join(__dirname, 'temp_html');

if (!fs.existsSync(tempDir)) fs.mkdirSync(tempDir, { recursive: true });

const htmlAga = `<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<style>
  * { box-sizing: border-box; margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; }
  body { background: #0b0f17; color: #f1f5f9; padding: 24px; width: 1280px; height: 800px; overflow: hidden; display: flex; flex-direction: column; }
  .navbar { display: flex; justify-content: space-between; align-items: center; padding-bottom: 20px; border-bottom: 1px solid rgba(255,255,255,0.08); }
  .logo { display: flex; align-items: center; gap: 12px; }
  .logo-icon { width: 36px; height: 36px; background: #10b981; border-radius: 10px; display: flex; align-items: center; justify-content: center; font-weight: 900; color: #000; font-size: 18px; }
  .logo-text { font-size: 18px; font-weight: 800; letter-spacing: -0.02em; }
  .badge { background: rgba(16,185,129,0.15); border: 1px solid rgba(16,185,129,0.3); color: #34d399; font-size: 11px; font-weight: 700; padding: 4px 10px; border-radius: 99px; text-transform: uppercase; letter-spacing: 0.05em; }
  .status-badge { display: flex; align-items: center; gap: 8px; font-size: 12px; color: #94a3b8; background: #131b26; padding: 6px 14px; border-radius: 99px; border: 1px solid rgba(255,255,255,0.08); }
  .dot { width: 8px; height: 8px; border-radius: 50%; background: #10b981; box-shadow: 0 0 10px #10b981; }
  
  .main-layout { display: grid; grid-template-columns: 240px 1fr 340px; gap: 20px; margin-top: 20px; flex: 1; }
  
  .sidebar { background: #111722; border: 1px solid rgba(255,255,255,0.06); border-radius: 16px; padding: 18px; display: flex; flex-direction: column; gap: 8px; }
  .nav-item { padding: 10px 14px; border-radius: 10px; font-size: 13px; font-weight: 600; color: #94a3b8; display: flex; align-items: center; gap: 10px; cursor: pointer; }
  .nav-item.active { background: rgba(16,185,129,0.15); color: #34d399; border: 1px solid rgba(16,185,129,0.25); }
  
  .center-content { display: flex; flex-direction: column; gap: 18px; }
  .metrics-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 14px; }
  .metric-card { background: #111722; border: 1px solid rgba(255,255,255,0.06); border-radius: 14px; padding: 16px; position: relative; overflow: hidden; }
  .metric-label { font-size: 11px; text-transform: uppercase; letter-spacing: 0.06em; color: #64748b; font-weight: 700; margin-bottom: 6px; }
  .metric-val { font-size: 26px; font-weight: 800; color: #fff; letter-spacing: -0.02em; }
  .metric-sub { font-size: 11px; color: #10b981; margin-top: 4px; display: flex; align-items: center; gap: 4px; }
  
  .chart-card { background: #111722; border: 1px solid rgba(255,255,255,0.06); border-radius: 16px; padding: 20px; flex: 1; display: flex; flex-direction: column; }
  .chart-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 14px; }
  .chart-title { font-size: 14px; font-weight: 700; color: #f8fafc; }
  
  .right-panel { background: #111722; border: 1px solid rgba(255,255,255,0.06); border-radius: 16px; padding: 18px; display: flex; flex-direction: column; gap: 14px; }
  .ai-box { background: rgba(16,185,129,0.08); border: 1px solid rgba(16,185,129,0.2); border-radius: 12px; padding: 14px; font-size: 12px; line-height: 1.5; color: #cbd5e1; }
  .ai-box h4 { color: #34d399; font-size: 12px; font-weight: 700; margin-bottom: 6px; display: flex; align-items: center; gap: 6px; }
  
  .log-item { font-size: 11px; color: #94a3b8; padding: 8px 10px; background: rgba(255,255,255,0.02); border-radius: 8px; border-left: 3px solid #10b981; }
</style>
</head>
<body>
  <div class="navbar">
    <div class="logo">
      <div class="logo-icon">🌿</div>
      <div>
        <div class="logo-text">AGA Smart Agriculture</div>
        <div style="font-size: 11px; color: #64748b;">Asisten Generatif Agrikultur · Decision Support System</div>
      </div>
    </div>
    <div style="display: flex; gap: 12px; align-items: center;">
      <div class="badge">Laravel 11 + React + RAG AI</div>
      <div class="status-badge">
        <span class="dot"></span>
        <span>ESP32 Telemetry Live · 99.8% Sync</span>
      </div>
    </div>
  </div>

  <div class="main-layout">
    <div class="sidebar">
      <div style="font-size: 11px; font-weight: 800; color: #475569; text-transform: uppercase; margin-bottom: 6px; padding-left: 10px;">Land Zones</div>
      <div class="nav-item active">🌾 Block A — Hydroponic</div>
      <div class="nav-item">🍅 Block B — Greenhouse</div>
      <div class="nav-item">🥔 Block C — Open Field</div>
      
      <div style="font-size: 11px; font-weight: 800; color: #475569; text-transform: uppercase; margin-top: 18px; margin-bottom: 6px; padding-left: 10px;">Modules</div>
      <div class="nav-item">📊 Soil Telemetry</div>
      <div class="nav-item">🤖 RAG Advisor</div>
      <div class="nav-item">📖 Agronomy Logs</div>
      <div class="nav-item">⚙️ Device Config</div>
    </div>

    <div class="center-content">
      <div class="metrics-grid">
        <div class="metric-card">
          <div class="metric-label">Soil Moisture (Volumetric)</div>
          <div class="metric-val">74.2%</div>
          <div class="metric-sub">▲ +2.1% (Optimal Hydration)</div>
        </div>
        <div class="metric-card">
          <div class="metric-label">Soil Acidity / pH Level</div>
          <div class="metric-val">6.65 pH</div>
          <div class="metric-sub">● Balanced Target Zone</div>
        </div>
        <div class="metric-card">
          <div class="metric-label">Ambient Temperature</div>
          <div class="metric-val">27.8°C</div>
          <div class="metric-sub">▼ -0.4°C (Humidity 68%)</div>
        </div>
      </div>

      <div class="chart-card">
        <div class="chart-header">
          <div>
            <div class="chart-title">Real-Time Telemetry Curve (24h Window)</div>
            <div style="font-size: 11px; color: #64748b;">Telemetry aggregated from IoT Gateway via RESTful Stream</div>
          </div>
          <span style="font-size: 11px; color: #34d399; font-weight: 600; background: rgba(16,185,129,0.1); padding: 4px 8px; border-radius: 6px;">Live Ingestion</span>
        </div>
        <svg viewBox="0 0 600 200" style="width: 100%; height: 190px; overflow: visible;">
          <defs>
            <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stop-color="#10b981" stop-opacity="0.35"/>
              <stop offset="100%" stop-color="#10b981" stop-opacity="0.0"/>
            </linearGradient>
          </defs>
          <path d="M 0,150 Q 80,120 150,140 T 300,90 T 450,110 T 600,60 L 600,200 L 0,200 Z" fill="url(#chartGrad)"/>
          <path d="M 0,150 Q 80,120 150,140 T 300,90 T 450,110 T 600,60" fill="none" stroke="#10b981" stroke-width="3" stroke-linecap="round"/>
          <circle cx="600" cy="60" r="5" fill="#34d399" stroke="#0b0f17" stroke-width="2"/>
          <line x1="0" y1="50" x2="600" y2="50" stroke="rgba(255,255,255,0.05)" stroke-dasharray="4"/>
          <line x1="0" y1="100" x2="600" y2="100" stroke="rgba(255,255,255,0.05)" stroke-dasharray="4"/>
          <line x1="0" y1="150" x2="600" y2="150" stroke="rgba(255,255,255,0.05)" stroke-dasharray="4"/>
        </svg>
      </div>
    </div>

    <div class="right-panel">
      <div style="font-size: 13px; font-weight: 700; color: #fff;">AI Agronomy Intelligence</div>
      <div class="ai-box">
        <h4>✨ RAG Recommendation (LLM)</h4>
        "Soil moisture is stable at 74.2% with a 6.65 pH reading. Nitrogen replenishment schedule is forecasted for 08:00 tomorrow. Automated valve cut-off engaged to conserve 180L reservoir water."
      </div>
      <div style="font-size: 11px; font-weight: 700; color: #64748b; text-transform: uppercase;">Recent Telemetry Packets</div>
      <div class="log-item">
        <strong>16:48:12</strong> · Node-A01 ESP32 sensor heartbeat OK
      </div>
      <div class="log-item">
        <strong>16:45:00</strong> · Automated NPK telemetry logged to MySQL
      </div>
      <div class="log-item">
        <strong>16:30:11</strong> · RAG model queried by agronomist
      </div>
    </div>
  </div>
</body>
</html>`;

const htmlAgrinova = `<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<style>
  * { box-sizing: border-box; margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; }
  body { background: #0c1017; color: #e2e8f0; padding: 24px; width: 1280px; height: 800px; overflow: hidden; display: flex; flex-direction: column; }
  .header { display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid rgba(255,255,255,0.08); padding-bottom: 16px; }
  .badge { background: #1e293b; border: 1px solid #334155; color: #38bdf8; font-size: 11px; padding: 4px 10px; border-radius: 8px; font-weight: 600; }
  .content { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-top: 20px; flex: 1; }
  .card { background: #141923; border: 1px solid rgba(255,255,255,0.07); border-radius: 16px; padding: 20px; display: flex; flex-direction: column; }
  .card-title { font-size: 14px; font-weight: 700; color: #f8fafc; margin-bottom: 12px; display: flex; align-items: center; justify-content: space-between; }
  .sensor-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 12px; }
  .sensor-item { background: #0f131a; border: 1px solid rgba(255,255,255,0.05); border-radius: 12px; padding: 14px; }
  .sensor-num { font-size: 28px; font-weight: 800; color: #38bdf8; margin-top: 4px; }
</style>
</head>
<body>
  <div class="header">
    <div style="display: flex; align-items: center; gap: 12px;">
      <div style="width: 38px; height: 38px; background: #0284c7; border-radius: 10px; display: flex; align-items: center; justify-content: center; font-size: 18px;">🌱</div>
      <div>
        <h2 style="font-size: 18px; font-weight: 800; color: #fff;">AgriNova Solutions</h2>
        <p style="font-size: 11px; color: #64748b;">Modular Smart Farming & ESP32 Telemetry Architecture</p>
      </div>
    </div>
    <div style="display: flex; gap: 10px;">
      <span class="badge">ESP32 Telemetry</span>
      <span class="badge">WebSockets Active</span>
      <span class="badge" style="color: #4ade80; border-color: rgba(74,222,128,0.3); background: rgba(74,222,128,0.1);">AI Advisory Online</span>
    </div>
  </div>

  <div class="content">
    <div class="card">
      <div class="card-title">
        <span>Hardware Sensor Gateway Payload</span>
        <span style="font-size: 11px; color: #10b981;">● Online</span>
      </div>
      <div class="sensor-grid">
        <div class="sensor-item">
          <div style="font-size: 11px; color: #94a3b8; font-weight: 600;">SOIL MOISTURE SENSOR</div>
          <div class="sensor-num" style="color: #34d399;">68.4%</div>
          <div style="font-size: 11px; color: #64748b; margin-top: 4px;">Capacitive v1.2 · Calibrated</div>
        </div>
        <div class="sensor-item">
          <div style="font-size: 11px; color: #94a3b8; font-weight: 600;">SOIL PH LEVEL</div>
          <div class="sensor-num" style="color: #38bdf8;">6.8 pH</div>
          <div style="font-size: 11px; color: #64748b; margin-top: 4px;">Electrochemical Probe</div>
        </div>
        <div class="sensor-item">
          <div style="font-size: 11px; color: #94a3b8; font-weight: 600;">CANOPY TEMPERATURE</div>
          <div class="sensor-num" style="color: #fbbf24;">26.3°C</div>
          <div style="font-size: 11px; color: #64748b; margin-top: 4px;">DHT22 Sensor Matrix</div>
        </div>
        <div class="sensor-item">
          <div style="font-size: 11px; color: #94a3b8; font-weight: 600;">RELATIVE HUMIDITY</div>
          <div class="sensor-num" style="color: #a78bfa;">81.0%</div>
          <div style="font-size: 11px; color: #64748b; margin-top: 4px;">Atmospheric Vapor Gauge</div>
        </div>
      </div>
    </div>

    <div class="card">
      <div class="card-title">
        <span>AI Decision Engine (LLM + Dynamic Telemetry)</span>
        <span style="font-size: 11px; color: #38bdf8;">Latency: 18ms</span>
      </div>
      <div style="background: #0f131a; border: 1px solid rgba(56,189,248,0.2); border-radius: 12px; padding: 16px; margin-bottom: 12px;">
        <div style="font-size: 12px; font-weight: 700; color: #38bdf8; margin-bottom: 6px;">💡 Dynamic Agronomic Insight</div>
        <p style="font-size: 12px; color: #cbd5e1; line-height: 1.6;">
          "Sensor payload indicates optimal soil moisture and pH balance for crop vegetative phase. Real-time recommendation: retain scheduled nutrient drip while reducing fogger duty cycle to prevent humidity spikes."
        </p>
      </div>
      <div style="background: #0f131a; border-radius: 12px; padding: 14px; border: 1px solid rgba(255,255,255,0.05); flex: 1;">
        <div style="font-size: 11px; font-weight: 700; color: #64748b; text-transform: uppercase; margin-bottom: 8px;">Active Microcontroller Nodes</div>
        <div style="display: flex; justify-content: space-between; font-size: 12px; padding: 6px 0; border-bottom: 1px solid rgba(255,255,255,0.04);">
          <span>Node 01: ESP32-WROOM-32D</span>
          <span style="color: #4ade80;">Active (Signal -54dBm)</span>
        </div>
        <div style="display: flex; justify-content: space-between; font-size: 12px; padding: 6px 0;">
          <span>Node 02: ESP32-S3 Micro</span>
          <span style="color: #4ade80;">Active (Signal -61dBm)</span>
        </div>
      </div>
    </div>
  </div>
</body>
</html>`;

const htmlTrigobalindo = `<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<style>
  * { box-sizing: border-box; margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; }
  body { background: #0f172a; color: #f8fafc; padding: 30px; width: 1280px; height: 800px; overflow: hidden; display: flex; flex-direction: column; justify-content: space-between; }
  .header { display: flex; justify-content: space-between; align-items: center; }
  .nav { display: flex; gap: 20px; font-size: 13px; color: #94a3b8; }
  .hero { margin: 40px 0; max-width: 800px; }
  .hero h1 { font-size: 44px; font-weight: 900; line-height: 1.15; letter-spacing: -0.03em; margin-bottom: 16px; }
  .hero p { font-size: 16px; color: #94a3b8; line-height: 1.6; }
  .btn { display: inline-block; padding: 12px 24px; border-radius: 10px; background: #3b82f6; color: #fff; font-weight: 700; font-size: 13px; text-decoration: none; margin-top: 20px; }
  .cards { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
  .c-card { background: #1e293b; border: 1px solid rgba(255,255,255,0.08); border-radius: 14px; padding: 20px; }
</style>
</head>
<body>
  <div class="header">
    <div style="font-size: 20px; font-weight: 900; letter-spacing: -0.02em; color: #fff;">PT TRIGOBALINDO ID</div>
    <div class="nav">
      <span>About</span>
      <span>Services</span>
      <span>Portfolio</span>
      <span>Contact</span>
    </div>
  </div>

  <div class="hero">
    <span style="font-size: 12px; font-weight: 700; color: #60a5fa; text-transform: uppercase; letter-spacing: 0.1em;">Corporate Digital Solutions</span>
    <h1>Accelerating Industrial Trading & Business Operations.</h1>
    <p>A premier global trading and enterprise procurement partner delivering high-reliability supply chains across manufacturing, logistics, and digital commerce.</p>
    <a href="#" class="btn">Explore Solutions →</a>
  </div>

  <div class="cards">
    <div class="c-card">
      <h3 style="font-size: 15px; margin-bottom: 8px;">Global Sourcing</h3>
      <p style="font-size: 12px; color: #94a3b8;">End-to-end multi-national supply chain procurement with verified compliance.</p>
    </div>
    <div class="c-card">
      <h3 style="font-size: 15px; margin-bottom: 8px;">Enterprise Logistics</h3>
      <p style="font-size: 12px; color: #94a3b8;">High-throughput distribution channels with continuous tracking visibility.</p>
    </div>
    <div class="c-card">
      <h3 style="font-size: 15px; margin-bottom: 8px;">Strategic Advisory</h3>
      <p style="font-size: 12px; color: #94a3b8;">Tailored corporate trade advisory and streamlined B2B trade structures.</p>
    </div>
  </div>
</body>
</html>`;

const htmlTranstrack = `<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<style>
  * { box-sizing: border-box; margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; }
  body { background: #0a0e17; color: #f1f5f9; padding: 24px; width: 1280px; height: 800px; overflow: hidden; display: flex; flex-direction: column; }
  .header { display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid rgba(255,255,255,0.08); padding-bottom: 16px; }
  .grid { display: grid; grid-template-columns: 2fr 1fr; gap: 20px; margin-top: 20px; flex: 1; }
  .panel { background: #111827; border: 1px solid rgba(255,255,255,0.07); border-radius: 16px; padding: 20px; display: flex; flex-direction: column; }
</style>
</head>
<body>
  <div class="header">
    <div style="display: flex; align-items: center; gap: 12px;">
      <div style="font-size: 20px; font-weight: 900; color: #f97316;">TRANSTRACK.ID</div>
      <span style="font-size: 11px; background: rgba(249,115,22,0.15); color: #fb923c; border: 1px solid rgba(249,115,22,0.3); padding: 3px 8px; border-radius: 99px; font-weight: 700;">FLEET TELEMATICS QA</span>
    </div>
    <div style="font-size: 12px; color: #94a3b8;">Enterprise Fleet Assurance Engine</div>
  </div>

  <div class="grid">
    <div class="panel">
      <h3 style="font-size: 15px; margin-bottom: 14px;">Live Fleet Geofence & Ingestion Monitor</h3>
      <div style="background: #0d121d; border: 1px solid rgba(255,255,255,0.05); border-radius: 12px; height: 320px; display: flex; align-items: center; justify-content: center; position: relative;">
        <span style="color: #64748b; font-size: 13px;">[Interactive Map: 1,420 Active Vehicles Tracked]</span>
        <div style="position: absolute; bottom: 16px; left: 16px; background: rgba(0,0,0,0.7); padding: 8px 14px; border-radius: 8px; font-size: 11px; border: 1px solid rgba(255,255,255,0.1);">
          Vehicle #TR-9021 · Speed 64 km/h · Route Bandung - Jakarta
        </div>
      </div>
    </div>

    <div class="panel">
      <h3 style="font-size: 15px; margin-bottom: 14px;">QA Test Suite Health</h3>
      <div style="font-size: 12px; color: #10b981; font-weight: 700; margin-bottom: 8px;">✓ 99.4% Automated Test Pass Rate</div>
      <div style="font-size: 11px; color: #94a3b8; line-height: 1.6;">
        • Jira defect lifecycle validation active<br>
        • Postman API test scenarios: 480 endpoints verified<br>
        • Telematics regression test suite passed<br>
        • Zero critical defects in production release
      </div>
    </div>
  </div>
</body>
</html>`;

const files = [
  { name: 'aga', html: htmlAga, out: 'aga-web.png' },
  { name: 'agrinova', html: htmlAgrinova, out: 'agrinova-web.png' },
  { name: 'trigobalindo', html: htmlTrigobalindo, out: 'trigobalindo-web.png' },
  { name: 'transtrack', html: htmlTranstrack, out: 'transtrack-web.png' },
];

files.forEach(({ name, html, out }) => {
  const htmlFile = path.join(tempDir, `${name}.html`);
  const outFile = path.join(assetsDir, out);
  fs.writeFileSync(htmlFile, html);
  
  const cmd = `"${chromePath}" --headless --disable-gpu --screenshot="${outFile}" --window-size=1280,800 "${htmlFile}"`;
  console.log(`Rendering ${out}...`);
  execSync(cmd);
  console.log(`Rendered: ${outFile}`);
});

fs.rmSync(tempDir, { recursive: true, force: true });
console.log('All mockups generated in public/assets successfully!');
