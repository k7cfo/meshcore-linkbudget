# MeshCore Link Budget

**MeshCore Link Budget** is a simple, data-driven web app that visualizes how different **LoRa radio configuration settings** affect network **speed, sensitivity, and channel utilization** in conjunction with **MeshCore mesh networking**.

---

## 📊 Overview

The site provides an interactive table of LoRa modem configurations — showing how **spreading factor (SF)**, **bandwidth**, and **symbol time** influence performance tradeoffs between **throughput** and **reliability**.  
Users can search, sort, and compare presets to understand how changing parameters impacts link efficiency.

---

## 🔍 Key Metrics Displayed

- **Total Configurations:** 50 unique LoRa radio settings  
- **Max Speed:** 62.50 kbps  
- **Min Speed:** 0.39 kbps  
- **Best Sensitivity:** –136.06 dBm  
- **Channel Utilization Range:** 1.72% – 274.91%  

---

## 📋 Data Columns Explained

| Column | Description |
|:-------|:-------------|
| **Preset Name** | Human-readable configuration label (e.g., Narrow Very Slow) |
| **SF (Spreading Factor)** | Determines signal processing gain and range; higher SF = slower, more reliable |
| **Bandwidth (kHz)** | Transmission bandwidth — narrower = longer range but lower throughput |
| **KBPS** | Effective data rate (kilobits per second) |
| **dBm No Noise** | Receiver sensitivity — lower (more negative) means better performance at weak signals |
| **Symbol Time (ms)** | Time per LoRa symbol; relates to SF and bandwidth |
| **CH Util (%)** | Channel utilization — how much air-time a signal consumes (efficiency measure) |

---

## 🧩 Example Insights

- **High SF (e.g., 10–12)** increases reliability and range but greatly reduces speed and increases channel utilization.  
- **Wider Bandwidth (e.g., 62.5 kHz)** improves speed but sacrifices sensitivity.  
- Optimal setups depend on your mesh density and desired range–throughput balance.

---

## 🤝 Sponsorship

Sponsored by **West Coast Mesh**, a community initiative exploring resilient communication networks for real-world use in rural, emergency, and off-grid scenarios.

---

## 🌐 Live Interface

The web interface supports:
- Searchable and sortable preset tables  
- Real-time metrics display  
- Preset-based filtering  
- Responsive dark-mode UI  

---

*Built to help radio enthusiasts, researchers, and network engineers visualize LoRa performance in mesh networking environments.*
