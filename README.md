# JEE Mains Journey Tracker

A mobile-first web app for JEE Mains aspirants to track study sessions, manage focus time, and stay consistent through exam preparation.

## Features

### Daily Study Tracker
- Log study hours subject-wise (Physics, Chemistry, Maths)
- Set a daily study goal and track progress with a visual bar
- Streak counter showing consecutive days studied
- 7-day study history with per-subject breakdown

### Pomodoro Timer
- 45-minute focus sessions followed by 10-minute breaks
- Animated circular countdown timer
- Auto-switches phases and plays through sessions
- Set a current task to stay focused on a specific goal

### Focus Mode
- Distraction-free overlay showing only the timer and current task
- Rotating JEE-specific motivational quotes
- Blocks accidental navigation away with a beforeunload warning

### Screen Time Controller
- Tracks daily time spent on the app
- Configurable daily screen time limit with warning alerts

### Reminders & Notifications
- Uses the browser Notifications API for alerts
- Add custom reminders with a label, time, and day-of-week repeat schedule
- Daily check-in reminder if no study session has been logged by a set time

### Dashboard
- Stats grid: today's study hours, streak, weekly total, goal progress
- Subject-wise progress bars
- Weekly bar chart (Chart.js) showing hours studied per day
- Rotating motivational quote

## Tech Stack

- **Frontend**: Vanilla HTML, CSS, JavaScript — no frameworks
- **Charts**: Chart.js 4.4 (CDN)
- **Fonts**: Inter (Google Fonts)
- **Storage**: `localStorage` — fully offline, no backend required
- **Build/Serve**: Vite (for local dev and deployment)

## Project Structure

```
artifacts/jee-tracker/
├── index.html          # Entire app — HTML, CSS, and JS in one file
├── src/
│   └── main.tsx        # Vite entry point (minimal)
├── vite.config.ts
└── package.json
```

## Getting Started

### Prerequisites
- Node.js 20+
- pnpm

### Install & Run

```bash
pnpm install
pnpm --filter @workspace/jee-tracker run dev
```

The app will be available at `http://localhost:<PORT>`.

## Data & Privacy

All data is stored locally in the browser via `localStorage`. Nothing is sent to any server. Clearing browser data will reset the app.

## License

MIT
