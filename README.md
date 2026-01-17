# Vancouver Transit Tracker

Live, map based Vancouver transit tracking without Google dependency

**Live App:** https://vancouver-transit-tracker.vercel.app/  
**Demo Video:** https://www.youtube.com/watch?v=5VvWtFj0LGk

---

## Overview

Vancouver Transit Tracker is a web application that provides real time bus arrival data, service alerts, and arrival notifications for Vancouver transit users. Unlike traditional trip planners, this application prioritizes raw, live transit data so users can make their own routing decisions without being constrained by automated trip planning.

The application was designed to support:
- Local commuters who already know their routes and want flexibility
- Visitors without access to Google services
- Users who want fast access to arrival times and alerts without full trip planning

---

## Features

### Interactive Transit Map
- Clickable bus stops with real time arrival information
- Route based lookup showing all upcoming stops and arrivals
- Marker clustering to maintain performance with thousands of stops

### Real Time Transit Data
- Live data fetched from the TransLink API
- Graceful fallback to static data when live data is unavailable
- Visual indicators for active service alerts affecting routes or stops

### Arrival Notifications
- Web notifications for selected bus schedules
- Background service worker support so notifications work even when the app is closed
- Automatic scheduling of follow up notifications as buses approach

### Location Awareness
- User geolocation with accuracy radius visualization
- Desktop GPS uncertainty warnings to prevent misleading positioning
- Recenter and quick navigation controls

---

## Tech Stack

### Frontend
- React
- Vite
- Leaflet
- Mapbox

### Backend and APIs
- TransLink API
- Web Notification API
- Service workers
- Serverless functions

### DevOps
- GitHub Actions
- ESLint
- Vercel

---

## Architecture

- MVC based architecture separating UI, data models, and control logic
- Serverless API layer to protect keys and manage external requests
- Caching and clustering strategies to improve map performance
- Graceful error handling to keep the application responsive during API failures

---

## Testing and Quality

- Automated linting and production build validation via CI
- Jest used to simulate API edge cases and malformed responses
- Manual UI testing focused on performance and usability
- Performance improvements driven by peer testing feedback

---

## CI/CD Pipeline

- GitHub Actions runs linting and production builds on every merge
- Secrets managed securely using GitHub Secrets
- Automatic deployment to Vercel
- Runtime monitoring with Core Web Vitals and error tracking

---

## Known Limitations

- Notification system currently uses a shared user profile
- Some inconsistencies originate from external transit schedule data
- UI scaling improvements needed for varied screen sizes

Known issues and proposed fixes are tracked in GitHub Issues.

---

## Future Improvements

- City bike and scooter tracking integration
- Natural language transit queries using an AI assistant
- User favorites for routes and stops
- Enhanced error handling and accessibility improvements

---
