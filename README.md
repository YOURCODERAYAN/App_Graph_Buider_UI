# Graph Builder UI

A ReactFlow-based dashboard for visualizing and managing cloud infrastructure services as an interactive node graph. Built with React, TypeScript, ReactFlow, TanStack Query, and Zustand.

<img width="1919" height="909" alt="image" src="https://github.com/user-attachments/assets/fc685ea6-f999-4d97-a23c-721782acba8f" />


![Status](https://img.shields.io/badge/status-active-success)
![React](https://img.shields.io/badge/React-19-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![Zustand](https://img.shields.io/badge/Zustand-blue)
![TanStack Query](https://img.shields.io/badge/TanStackQuery-blue)
![React Flow](https://img.shields.io/badge/ReactFlow-blue)





🔗 **Live Demo:** [https://app-graph-buider-ui.vercel.app/]

---

## ✨ Features

- **Interactive Graph Canvas** — drag, zoom, pan, and connect service nodes using ReactFlow
- **App Switching** — select between multiple applications, each with its own service graph
- **Node Inspector Panel** — click any node to view and edit its details in a side panel
- **Status Pills** — visual indicators for `Healthy`, `Degraded`, and `Down` service states
- **Synced Slider + Input** — CPU limit control with a range slider and numeric input kept in sync
- **Tabbed Inspector** — `Config` and `Runtime` tabs per node, with a live CPU usage bar chart
- **Mock API Layer** — simulated network latency and loading/error states via TanStack Query
- **Responsive Layout** — right panel collapses into a mobile slide-over drawer on small screens
- **Delete Nodes** — remove a selected node via the `Delete`/`Backspace` key or a button
- **Fit View** — manually re-center the graph, or have it auto-fit on window resize

---

## 🛠️ Tech Stack

| Category         | Tool                          |
|-------------------|-------------------------------|
| Framework         | React + TypeScript            |
| Build Tool        | Vite                          |
| Graph Visualization | ReactFlow (xyflow)           |
| Data Fetching      | TanStack Query                |
| State Management   | Zustand                       |
| Styling            | Tailwind CSS                  |
| Icons              | Lucide React                  |

---

## 🚀 Setup Instructions

### Prerequisites
- Node.js 18+
- npm

### Installation

```bash
# clone the repository
git clone https://github.com/YOURCODERAYAN/App_Graph_Buider_UI.git
cd App_Graph_Buider_UI

# install dependencies
npm install
```

### Available Scripts

```bash
npm run dev         # start local dev server with hot reload
npm run build        # type-check and build for production
npm run preview      # preview the production build locally
npm run lint          # run ESLint checks
npm run typecheck     # run TypeScript type checking only
```

The app will be available at `http://localhost:5173` by default.

---

## 📁 Project Structure

```
App_Graph_Buider_UI
├─ eslint.config.js
├─ index.html
├─ package.json
├─ public
│  ├─ favicon.svg
│  └─ icons.svg
├─ README.md
├─ src
│  ├─ App.css
│  ├─ App.tsx
│  ├─ assets
│  │  └─ vite.svg
│  ├─ Components
│  │  ├─ Canvas.tsx          # ReactFlow canvas, graph rendering
│  │  ├─ CardUi.tsx           # Node inspector panel (Config/Runtime tabs)
│  │  ├─ LeftRail.tsx         # Left icon navigation rail
│  │  ├─ Navbar.tsx           # Top navbar (app name, Fit button)
│  │  ├─ RightPanel.tsx       # App selector + inspector container
│  │  └─ ServiceNode.tsx      # Custom ReactFlow node design
│  ├─ hooks
│  │  ├─ useApps.ts           # TanStack Query hook — fetches app list
│  │  ├─ useGraph.ts          # TanStack Query hook — fetches graph per app
│  │  └─ useMediaQuery.ts     # Responsive breakpoint hook
│  ├─ index.css
│  ├─ lib
│  │  └─ mockApi.ts           # In-memory mock API with simulated latency
│  ├─ main.tsx
│  ├─ Pages
│  │  └─ Home.tsx             # Main layout composition
│  └─ stores
│     └─ uistore.ts           # Zustand store — nodes, edges, selected app/node, drawer state
├─ tsconfig.app.json
├─ tsconfig.json
├─ tsconfig.node.json
└─ vite.config.ts
```

---

## 🧠 Key Decisions

- **Mock API via `setTimeout`, not MSW** — the task allowed either approach; `setTimeout`-wrapped promises were chosen for simplicity since no real network interception was required for this scope.
- **Nodes and edges live fully in Zustand, not local ReactFlow state** — `Canvas` and `RightPanel` are sibling components with no direct parent-child relationship, so `nodes`, `edges`, `selectedAppId`, and `selectedNode` are all stored centrally in Zustand. `Canvas` writes the fetched graph into the store; `CardUi` (the inspector) reads and updates it directly via `updateNode` and `deleteNode` actions — avoiding prop drilling entirely.
- **`updateNode` and `deleteNode` as Zustand actions** — both find the target node by `id` inside the store, update or remove it immutably, and also sync `selectedNode` so the inspector panel and the canvas node never fall out of sync after an edit or deletion.
- **`queryKey: ['graph', appId]`** — including the app ID in the query key gives each app its own independent cache entry in TanStack Query, so switching back to a previously visited app renders instantly instead of refetching.
- **Custom `ServiceNode` registered via `nodeTypes`** — kept as a stable reference outside the component to avoid unnecessary remounts on every render, which otherwise caused click handlers to misfire.
- **CPU bar chart built with plain CSS, no chart library** — a set of `div` elements with randomized, capped heights was sufficient to visually represent load without adding a charting dependency.

---

## ⚠️ Known Limitations

- The mock API has a randomized failure chance to simulate error states — refreshing may occasionally show an error card by design.
- Node positions and edits are held in client-side state only; nothing persists after a page refresh.
- The bar chart in the Runtime tab uses randomized values scaled by CPU percentage rather than real historical metrics.
- Only one custom node type (`ServiceNode`) is implemented; all services share the same visual template.
- Mobile drawer behavior is functional but canvas resizing on viewport changes may require clicking "Fit" rather than adjusting fully automatically in all cases.

---


