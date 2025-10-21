# MeshCore Link Budget

**MeshCore Link Budget** is a lightweight, interactive web app that visualizes how different **LoRa radio configurations** affect network **speed, sensitivity, and channel utilization** — optimized for use with **MeshCore mesh networking**.

🛰️ **Live Demo:** [westcoastmesh-linkbudget.vercel.app](https://westcoastmesh-linkbudget.vercel.app/)

---

## 📊 Overview

This project helps you explore the tradeoffs between **throughput**, **range**, and **reliability** for LoRa-based communication.  
Each configuration combines spreading factor (SF), bandwidth, and symbol timing to reveal how small changes in radio parameters can dramatically alter link performance.

The data is displayed in a clean, searchable dashboard that makes technical radio metrics easy to interpret.

---

## 🔍 Key Metrics Displayed

- **Total Configurations:** 50 unique LoRa settings  
- **Max Speed:** 62.50 kbps  
- **Min Speed:** 0.39 kbps  
- **Best Sensitivity:** –136.06 dBm  
- **Channel Utilization Range:** 1.72% – 274.91%  

---

## 📋 Data Columns Explained

| Column | Description |
|:-------|:-------------|
| **Preset Name** | Human-readable label (e.g., “Narrow Very Slow”) |
| **SF (Spreading Factor)** | Determines signal range and reliability (higher = slower, more robust) |
| **Bandwidth (kHz)** | Transmission width — higher bandwidth = faster but less sensitive |
| **KBPS** | Effective data rate (kilobits per second) |
| **dBm No Noise** | Sensitivity level — lower (more negative) = stronger performance in weak signal conditions |
| **Symbol Time (ms)** | Duration of one LoRa symbol; affects airtime and efficiency |
| **CH Util (%)** | Channel utilization — how much airtime the signal occupies |

---

## 💡 Insights

- **Higher SF values** (e.g., 10–12) boost range but dramatically lower data rate and increase channel usage.  
- **Narrow bandwidths** improve sensitivity for long-range links.  
- **Balanced configurations** (mid-SF and moderate bandwidth) perform best for general-purpose mesh networks.

---

## ⚙️ Features

- 📈 **Interactive table:** Sort and filter presets in real time  
- 🎚️ **Dynamic metrics:** Instantly view how changes affect speed and channel use  
- 🌓 **Dark-mode UI:** Built for clarity and modern display environments  
- 🧩 **Simple data model:** Easy to extend or integrate into MeshCore-based tools  

---

## 🤝 Sponsored By

**West Coast Mesh** — a community-driven initiative focused on resilient, off-grid communication systems across California and beyond.  
Learn more and explore related mesh networking tools at [westcoastmesh-linkbudget.vercel.app](https://westcoastmesh-linkbudget.vercel.app/).

---

*Built for radio enthusiasts, engineers, and experimenters who want to understand and optimize LoRa mesh performance.*  
