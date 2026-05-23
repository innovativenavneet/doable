<div align="center">

# 🏃 Doable

**Tasks. Calendar. Long-term plans. All in one place.**

Built with Expo · React Native · TypeScript · Firebase

[![Expo SDK](https://img.shields.io/badge/Expo-52.x-000020?style=flat-square&logo=expo)](https://expo.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.3-3178C6?style=flat-square&logo=typescript)](https://www.typescriptlang.org)
[![Firebase](https://img.shields.io/badge/Firebase-11.x-FFCA28?style=flat-square&logo=firebase&logoColor=black)](https://firebase.google.com)
[![License: MIT](https://img.shields.io/badge/License-MIT-4F46E5?style=flat-square)](LICENSE)

</div>

---

## What is Doable?

Doable is a personal productivity app for Android. It combines three tools that usually live in separate apps:

- **Task Planner** — create tasks with due dates, priorities, and categories. Get a push notification when each one is due.
- **Calendar View** — see your tasks mapped onto a calendar. Tap any day to check off what's done.
- **Plan Mode** — track long-term goals (weeks, months, years) with milestone progress bars.

No account needed. Doable signs you in anonymously via Firebase on first launch and syncs everything in the background. Works offline too.

---

## Screenshots

> _Add your screenshots here once the app is running._

| Tasks | Calendar | Plans |
|-------|----------|-------|
| ![tasks](./assets/screenshots/tasks.png) | ![calendar](./assets/screenshots/calendar.png) | ![plans](./assets/screenshots/plans.png) |

---

## Tech Stack

| Layer | Choice |
|-------|--------|
| Framework | Expo SDK ~52 |
| Language | TypeScript 5.3 |
| Navigation | Expo Router (file-based) |
| Backend | Firebase Firestore |
| Auth | Firebase Anonymous Auth |
| Notifications | expo-notifications |
| Calendar UI | react-native-calendars |
| List performance | @shopify/flash-list |
| Animations | react-native-reanimated |
| Date utilities | date-fns |
| State management | React Context + useReducer |

---

## Project Structure

```
Doable/
├── app/
│   ├── (tabs)/
│   │   ├── _layout.tsx        # Tab bar config
│   │   ├── index.tsx          # Task Planner
│   │   ├── calendar.tsx       # Calendar View
│   │   └── plans.tsx          # Plan Mode
│   ├── task/[id].tsx          # Task detail / edit modal
│   ├── plan/[id].tsx          # Plan detail / edit modal
│   └── _layout.tsx            # Root layout (auth + notifications init)
├── components/
│   ├── tasks/                 # TaskCard, TaskForm, PriorityBadge …
│   ├── calendar/              # CalendarHeader, DayTaskList …
│   ├── plans/                 # PlanCard, PlanForm, MilestoneList …
│   └── shared/                # FAB, EmptyState, DateTimePicker …
├── contexts/                  # AuthContext, TaskContext, PlanContext
├── hooks/                     # useTasks, usePlans, useNotifications …
├── services/                  # firebase.ts, taskService.ts, planService.ts …
├── types/                     # Shared TypeScript interfaces
├── constants/                 # theme.ts, config.ts
└── utils/                     # dateUtils, sortUtils
```

---

## Getting Started

### Prerequisites

- Node.js 18+
- Expo CLI — `npm install -g expo`
- A Firebase project with **Firestore** and **Anonymous Authentication** enabled
- iOS Simulator (macOS) or Android Emulator, or the [Expo Go](https://expo.dev/go) app on your phone

### 1. Clone and install

```bash
git clone https://github.com/your-username/Doable.git
cd Doable
npm install
```

### 2. Configure environment variables

Create a `.env` file in the project root:

```env
EXPO_PUBLIC_FIREBASE_API_KEY=your_api_key
EXPO_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
EXPO_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
EXPO_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
EXPO_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
EXPO_PUBLIC_FIREBASE_APP_ID=your_app_id
```

> **Never commit `.env` to version control.** It's already in `.gitignore`.

### 3. Set Firestore security rules

In Firebase Console → Firestore → Rules, paste:

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /users/{uid}/{document=**} {
      allow read, write: if request.auth != null
                         && request.auth.uid == uid;
    }
  }
}
```

### 4. Run the app

```bash
npx expo start          # opens Expo dev tools
npx expo start --ios    # iOS Simulator directly
npx expo start --android # Android Emulator directly
```

---

## Firebase Data Model

All data is scoped under the anonymous user's UID.

```
users/
  {uid}/
    tasks/
      {taskId}  →  { title, description, dueDate, priority,
                     category, isCompleted, notificationId,
                     createdAt, updatedAt }
    plans/
      {planId}  →  { title, description, startDate, targetDate,
                     status, category, milestones[], color,
                     createdAt, updatedAt }
```

---

## Features in Detail

### Task Planner

- Create tasks with title, description, date + time, priority (high / medium / low), and category
- Filter by: All, Today, Upcoming, Completed
- Tasks grouped by date: Today / Tomorrow / This Week / Later
- Priority shown as a coloured left border — red, amber, green
- Completing a task automatically cancels its scheduled notification

### Calendar View

- Monthly calendar powered by `react-native-calendars`
- Colour-coded dots per day show task priority and completion status
- Tap any day to see that day's tasks in a bottom panel
- Check off tasks directly from the calendar

### Plan Mode

- Long-horizon goal cards with customisable colours
- Add milestones with optional target dates
- Progress bar auto-updates as milestones are checked off
- Status: Not Started → In Progress → Completed → On Hold
- Status auto-suggests transitions as you check milestones

### Notifications

- Local push notifications — no server required
- Scheduled via `expo-notifications` at the task's exact due date/time
- Tapping a notification deep-links into the task detail screen
- Gracefully skips scheduling if permission is denied

### Offline Support

- Firestore offline persistence enabled by default
- Tasks and plans load instantly from local cache
- Changes sync automatically when connectivity is restored

---

## Building for Production

Doable uses [EAS Build](https://docs.expo.dev/build/introduction/).

```bash
npm install -g eas-cli
eas login
eas build:configure

# Android
eas build --platform android --profile production

# iOS
eas build --platform ios --profile production
```

Store your Firebase keys as EAS Secrets instead of `.env` for production builds:

```bash
eas secret:create --scope project --name EXPO_PUBLIC_FIREBASE_API_KEY --value your_key
```

---

## Roadmap

- [ ] Recurring tasks (daily / weekly / monthly)
- [ ] Home screen widget (today's tasks at a glance)
- [ ] Account linking (Google / Apple) to sync across devices
- [ ] Plan Mode timeline / Gantt view
- [ ] Task templates
- [ ] CSV export

---

## Contributing

1. Fork the repo
2. Create a feature branch — `git checkout -b feat/your-feature`
3. Commit your changes — `git commit -m 'feat: add your feature'`
4. Push to the branch — `git push origin feat/your-feature`
5. Open a Pull Request

Please follow [Conventional Commits](https://www.conventionalcommits.org) for commit messages.

---

## License

MIT © [Your Name](https://github.com/your-username)

---

<div align="center">
  <sub>Built with ☕ and too many open tabs.</sub>
</div>