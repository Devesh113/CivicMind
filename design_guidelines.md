# CleanCity - AI-Powered Civic Issue Reporter
## Design Guidelines

### Design Approach
**Selected Approach:** Material Design System with civic trust modifications

**Justification:** CleanCity is a utility-focused civic tool where clarity, efficiency, and trust are paramount. Material Design provides excellent visual hierarchy, strong feedback systems, and works exceptionally well with image-heavy content and data visualization - all critical for this platform.

**Key Design Principles:**
- Trust through transparency (show real metrics, real progress)
- Action-first design (reporting should be immediate)
- Visual evidence (photos are primary content)
- Civic accountability (performance data front and center)

---

### Typography

**Font Family:**
- Primary: 'Inter' (Google Fonts) - Clean, highly legible for data
- Monospace: 'Roboto Mono' - For metrics, timestamps, location coordinates

**Type Scale:**
- Hero/Impact: text-5xl md:text-6xl, font-bold
- Section Headers: text-3xl md:text-4xl, font-bold
- Card Titles: text-xl font-semibold
- Body Text: text-base, font-normal
- Captions/Meta: text-sm, font-medium
- Micro Labels: text-xs, font-medium uppercase tracking-wide

---

### Layout System

**Spacing Primitives:**
Use Tailwind units: **2, 4, 6, 8, 12, 16** for consistent rhythm
- Tight spacing: p-2, gap-2 (within components)
- Standard spacing: p-4, gap-4 (between related elements)
- Section breathing: p-8, py-12, py-16 (between major sections)

**Container Strategy:**
- Page container: max-w-7xl mx-auto px-4
- Content sections: max-w-6xl
- Form containers: max-w-2xl
- Cards: Full width within grid constraints

**Grid Systems:**
- Dashboard: grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6
- Issue feed: grid-cols-1 md:grid-cols-2 gap-4
- Metrics: grid-cols-2 md:grid-cols-4 gap-4
- Authority leaderboard: Single column with responsive table

---

### Component Library

#### Navigation & Header
- Sticky top navigation with logo, main actions, user menu
- Primary CTA: Large "Report Issue" button (always visible, elevated)
- Secondary nav: Dashboard, My Reports, Community, Leaderboards
- Mobile: Hamburger menu with slide-out drawer

#### Issue Reporting Flow
- Camera interface card with large upload zone
- Real-time AI analysis display (loading states, results)
- Location confirmation map embed
- Issue type badges with icons (Material Icons)
- Severity indicator (low/medium/high with distinct visual treatment)
- Submission success with tracking number

#### Issue Cards (Feed/Dashboard)
- Image thumbnail (aspect-ratio-square or 4:3)
- Issue type badge, severity indicator
- Location text with map pin icon
- Timestamp and status pill
- Action buttons (View Details, Update Status for authorities)
- Vote/duplicate confirmation for citizens

#### Status System
- Pending: Neutral indicator
- Acknowledged: In-progress indicator  
- In Progress: Active indicator
- Resolved: Success indicator with checkmark
- Status timeline visualization for issue detail view

#### Authority Dashboard
- Assigned issues queue with filters
- Quick action buttons for status updates
- Upload before/after comparison images
- Performance metrics cards (issues resolved, avg time, rating)
- Regional issue heatmap

#### Performance & Leaderboards
- Monthly ranking table with authority names, regions
- Metric columns: Issues Resolved, Avg Resolution Time, Citizen Rating
- Top performers highlighted
- Time period selector (This Month, Last Month, All Time)
- Trend indicators (up/down arrows)

#### Rating System
- 5-star rating interface for resolved issues
- Optional comment textarea
- Submit rating with confirmation
- Display aggregate ratings on authority profiles

#### Map Integration
- Interactive map showing issue locations with colored markers
- Marker clustering for dense areas
- Click marker to see issue details
- Filter by status, type, severity
- User location indicator

#### Community Feed
- Chronological list of recent reports and resolutions
- Before/after image pairs for resolved issues
- Engagement metrics (duplicates confirmed, ratings)
- "Thank you" acknowledgments from authorities

---

### Forms & Inputs

**Report Issue Form:**
- Large drag-drop upload zone with camera icon
- File input trigger button
- Location auto-detect with manual override
- Optional description textarea
- Issue category selector (if AI needs confirmation)
- Submit button (primary action, prominent)

**Authority Update Form:**
- Status dropdown selector
- Progress notes textarea
- Before/after image uploads (side-by-side)
- Estimated completion date picker
- Update button

**All Form Inputs:**
- Clear labels above inputs
- Placeholder text for guidance
- Input borders with focus states
- Helper text below for context
- Error messages inline (red text, icon)
- Success confirmations (green checkmark)

---

### Data Displays

**Metric Cards:**
- Large number (text-4xl font-bold)
- Label below (text-sm uppercase)
- Trend indicator (icon + percentage)
- Subtle background elevation

**Issue Timeline:**
- Vertical timeline with connecting line
- Status nodes (circles) with icons
- Timestamp and action description
- Authority name/ID

**Comparison Views:**
- Before/After image slider
- Side-by-side layout on desktop
- Stacked on mobile
- Labels clearly marked

---

### Animations

**Minimal, purposeful only:**
- Form submission: Success checkmark animation
- Status updates: Smooth pill transition
- Image upload: Progress indicator
- Page transitions: Subtle fade (150ms)
- NO scroll-triggered animations
- NO decorative motion

---

### Images

**Image Usage Strategy:**

**Hero Section (Homepage):**
Large hero image showing successful civic resolution - before/after split showing transformation of a cleaned area (garbage cleared, pothole fixed). This establishes trust and shows real impact.

**Issue Cards Throughout:**
Every reported issue displays user-submitted photo as primary content. Images should be consistent aspect ratio (4:3 or square).

**Authority Dashboard:**
Before/after comparison images for resolved issues prominently featured to showcase progress.

**Community Feed:**
Grid of recent issue photos with resolution status overlays.

**Performance Section:**
Background pattern or subtle city skyline illustration (not photo) to support leaderboard data.

**No images needed:**
- Navigation areas
- Form interfaces (icon-based)
- Metric dashboards (data-focused)

---

### Accessibility
- Consistent ARIA labels on all interactive elements
- Keyboard navigation throughout all workflows
- Form inputs with proper labels and error announcements
- Status indicators with text labels (not color alone)
- Image alt text for all user-uploaded content
- Map with keyboard-accessible alternative list view

---

### Page-Specific Layouts

**Homepage:**
- Hero with before/after image, tagline, primary CTA
- Quick stats (total issues resolved, avg resolution time, active users)
- Recent resolutions feed (grid of 6-8 cards)
- How it works (3-step process with icons)
- CTA section for authorities to join platform

**Report Issue Page:**
- Centered upload interface (max-w-2xl)
- Step indicator (1. Upload, 2. Review, 3. Submit)
- Full-width preview of uploaded image
- AI analysis results in card format
- Map for location confirmation

**Dashboard (Citizens):**
- My reports grid with filter tabs
- Each report card showing current status
- Quick re-report button for similar issues
- Points/reputation counter

**Dashboard (Authorities):**
- Pending queue (urgent first)
- Active issues list
- Performance metrics row
- Regional heatmap view
- Recent activity timeline

**Leaderboard Page:**
- Time period selector at top
- Table with sortable columns
- Top 3 authorities highlighted with medals
- Regional filter dropdown
- Monthly archive access

**Issue Detail Page:**
- Large issue image gallery
- Status timeline
- Location map embed
- Duplicate reports counter
- Comments/updates thread
- Resolution photos when available
- Rating interface (if resolved)