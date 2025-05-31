# 📄 Project Suggestion Report — TGG Minigame Hub

**Project Name:** TGG Minigame Hub  
**Created By:** [developertgg](https://github.com/developertgg)  
**Date:** June 1, 2025

---

## 🧩 Summary
TGG Minigame Hub is a fun, Roblox-inspired, web-based game experience. It currently includes:
- A first-person 3D maze
- A hard obby course
- A home screen where players choose between game modes

---

## 💡 Suggestions for Improvement

### 1. Add a Main Menu UI
- **Why:** A cleaner, more interactive welcome screen makes the site feel like a real platform.
- **What to add:**
  - Logo and custom background (e.g., the TGG image)
  - “Play Maze” and “Play Obby” buttons
  - Sound effects or background music toggle

### 2. Separate Maze and Obby into Scenes
- **Why:** This makes each game more organized and easier to expand.
- **How:**
  - Create a scene loader in JavaScript to switch between `maze.html` and `obby.html`.

### 3. Mobile Controls
- **Why:** Many players use phones or tablets.
- **What to do:** Add touch joystick controls for movement and jumping.

### 4. Game Win/End Condition
- Add a clear goal for each game:
  - 🎯 **Maze**: Reach the center or find a key to escape.
  - 🏁 **Obby**: Touch a trophy or flag at the end.

### 5. Multiplayer (Future Update)
- Use WebSockets or Firebase to allow multiple players to join the same map.

---

## 🛠 Technical Ideas
- Host using **GitHub Pages** (already set up ✅)
- Use **Three.js** for 3D graphics
- Use **modules** to keep code organized:
  - `game.js` – game logic
  - `player.js` – movement
  - `menu.js` – main screen controls

---

## ✅ Action Plan

| Task                        | Status        | Priority   |
|-----------------------------|---------------|------------|
| Create menu with TGG image  | 🔲 Not started | ⭐ High     |
| Fix PointerLockControls bug | ✅ Fixed       | ⭐⭐ Medium  |
| Add mobile touch support    | 🔲 Not started | ⭐⭐ Medium  |
| Add win condition to Obby   | 🔲 Not started | ⭐⭐⭐ High   |

---

## ✨ Extra Ideas
- Add particle effects at the finish line
- Unlockable levels after winning a mode
- Sound on/off button in the corner
