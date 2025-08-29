# Layouts Directory Guidelines

## events.vto

This is a file using the Vento (https://vento.js.org) template engine. It is being used by the Lume (https://lume.land) static site generator.

### Page Structure

The Events page must include the following sections in order:

1. **Header Section**

   - Page title and description
   - Pulled from `events/index.yml` data

2. **Filter by Organization**

   - Multi-select organization filter
   - Alphabetically sorted organizations
   - Visual feedback for selected filters
   - Clear all button when filters are active

3. **Year Navigation**

   - Previous/Next year buttons
   - Current year display
   - Only show navigation for years with events

4. **Calendar View (12 Months)**

   - Display all 12 months for the selected year
   - Grid layout (responsive: 1 column mobile, 2 columns tablet, 3 columns desktop)
   - Each month shows:
     - Month name header
     - Week numbers (ISO format W01-W53)
     - Days starting from Monday
     - Event indicators on dates with events
     - Click on date to see event details

5. **Upcoming Events List**
   - Shows all events for the selected year
   - Sorted chronologically by start date
   - Each event displays:
     - Event name
     - Organization name
     - City/location
     - Date range
     - Week number
     - Link to event website (if available)
   - Respects active organization filters

### Core Requirements

#### Calendar Implementation

- Use Alpine.js for interactivity (adding/removing CSS classes based on state)
- All HTML elements must be server-rendered from `events/index.yml` data
- Alpine.js only manipulates CSS classes/styles, NOT DOM creation (for SEO)
- Alpine.js handles showing/hiding elements by adding/removing CSS classes

#### Calendar Specifications

- **Week Numbers**: Display ISO week numbers (W01 to W53, zero-padded)
- **Week Start**: Calendar MUST start on Monday (not Sunday)
- **Week Display**: Show week numbers prominently in the calendar view

#### Date Handling

- **Timezone**: Parse dates as UTC midnight to avoid timezone shifts
- Use consistent date parsing: `new Date(dateStr + 'T00:00:00')`
- Ensure dates from YAML (format: `2025-11-14`) are handled correctly
- Compare dates using consistent timezone-aware methods

#### Layout & Styling

- Use similar margins/padding as `post.vto` layout
- Background should be `#292562` and should follow the branding style guide (`BRANDING.md`)
- The calendars should be readable and not monotone purple
- Maintain consistent spacing with other page layouts

#### Sorting Requirements

- **Events List**: Sort chronologically by start date (earliest first)
- **Organizations Filter**: Sort alphabetically by name
- Maintain sort order when filters are applied

#### Navigation Features

- Year navigation (previous/next) - only show when events exist for those years
- Check data availability before showing year navigation buttons
- Smooth transitions between years

#### Filtering

- Multi-select organization filter
- Allow users to select multiple organizations simultaneously
- Filter persists through URL parameters
- Visual feedback for active filters
- Organizations must be sorted alphabetically

#### Responsive Design

- Mobile-first approach
- Calendar must be fully functional on all screen sizes
- Touch-friendly interface for mobile devices
- Consider thumb-reachable zones for interactive elements

#### User Experience

- Clear visual hierarchy
- Intuitive navigation
- Fast filter response times
- Accessible modal interactions
- Loading states where appropriate
- Error handling for edge cases

### Implementation Notes

- Server-side render all event data into HTML
- Use Alpine.js x-show/x-if for visibility control
- Implement URL parameter reading/writing for filters
- Ensure modal accessibility (keyboard navigation, focus trap)
- Test on various screen sizes and devices

### DO NOT

- Create DOM elements with JavaScript/Alpine.js
- Forget zero-padding for week numbers
- Start weeks on Sunday
- Ignore mobile responsiveness
- Show year navigation without checking for events
