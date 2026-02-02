📊 Deriverse Analytics Dashboard
A high-fidelity, comprehensive trading analytics interface built for the Deriverse Ecosystem.

💡 Overview
This dashboard addresses the critical need for unified performance tracking across Spot, Perpetuals, and Options. While most exchanges fragment this data, our solution aggregates it into a single "Trader Health" view, offering unique insights like Session Heatmaps and Bias Analysis.

Note for Judges:
This submission is a Frontend-First Prototype. To ensure maximum stability and zero latency during the judging period, the application runs on a deterministic static data service (simulating API responses). The architecture is designed to be fully non-custodial and pluggable into the Deriverse Indexer SDK.

🏆 How I Met the Criteria
1. Comprehensiveness & Innovation
I went beyond simple PnL charts. Our solution includes:

Unified Portfolio View: Aggregates Spot, Perps, and Options exposure in one donut chart.

Session Performance Heatmap: A GitHub-style contribution graph for trading activity (Day/Hour), identifying a trader's "golden hours."

Long/Short Bias Meter: visualizes psychological trading patterns.

Ecosystem Rewards Tracker: Dedicated tracking for DRVS fee rebates.

2. Clarity & Readability
Dark Mode Native: Designed for low eye strain during long trading sessions.

Color Logic: Standardized Green/Red signals for instant decision-making.

Responsive: Fully optimized for desktop and tablet analysis.

3. Security & Data Privacy
Non-Custodial Architecture: The dashboard is designed as a client-side interface. It reads on-chain data but never requires private keys.

No Central Database: User trade history is fetched directly from the chain (simulated for this demo), meaning no user data is stored on our servers, eliminating central breach risks.

🛠 Tech Stack
Framework: Next.js 14 (App Router)

Styling: Tailwind CSS (Custom "Deriverse" Dark Theme)

Visualization: Recharts (Responsive, accelerated SVGs)

Icons: Lucide React

🚀 Getting Started
To run the dashboard locally:

Bash
# 1. Clone the repository
git clone https://github.com/01Laurent/Deriverse-Analytics.git

# 2. Install dependencies
npm install

# 3. Run the development server
npm run dev
Open http://localhost:3000 to view the analytics suite.

🔮 Future Roadmap (Post-Hackathon)
Live Indexer Integration: Replace the static data service with real-time fetch calls to the Deriverse GraphQL endpoint.

Wallet Sign-In: Integrate Solana Wallet Adapter (Phantom/Backpack) to auto-fetch user addresses.

PDF Export: Generate tax-friendly PnL reports directly from the Journal view.