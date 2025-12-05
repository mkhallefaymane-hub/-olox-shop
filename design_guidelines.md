# OLOX SHOP Design Guidelines

## Design Approach
**User-Specified Aesthetic**: Dark neon futuristic theme inspired by tech/gaming culture with Arabic RTL layout.

## Core Design Principles
1. **Dark Neon Theme**: Purple/blue glowing aesthetic on dark backgrounds
2. **Arabic-First**: RTL layout with modern Arabic typography
3. **Tech-Forward**: Futuristic, gaming-inspired visual language
4. **Smooth Interactions**: Polished animations and hover states

---

## Colors
- **Background**: `#0e0e24` (deep dark blue/purple)
- **Accent Colors**: Neon purple and neon blue for glows, borders, and highlights
- **Text**: White/light colors for readability on dark background
- **Glow Effects**: CSS box-shadows with purple/blue neon glow on cards, buttons, and interactive elements

---

## Typography
- **Font Family**: Modern Arabic web font (Cairo, Tajawal, or Almarai via Google Fonts)
- **Style**: Futuristic, tech-inspired feel
- **Hierarchy**:
  - Hero title: Large, bold, glowing text effect
  - Section headings: Medium-large, prominent
  - Body text: Clear, readable Arabic text
  - Button text: Bold, uppercase style where appropriate

---

## Layout System
- **Direction**: RTL (right-to-left) for all Arabic content
- **Spacing**: Generous padding and margins for breathing room
- **Container Width**: Centered content with max-width for readability
- **Grid**: Responsive product grid (3-4 columns desktop, 2 tablet, 1 mobile)

---

## Component Library

### Navigation
- Fixed header with OLOX SHOP logo
- Smooth scroll navigation to sections
- WhatsApp contact button prominently placed

### Hero Section
- **Background**: Animated neon gradient or particle effect
- **Layout**: Centered text with two prominent CTA buttons
- **CTAs**: 
  - Primary: "تواصل معنا على واتساب" (WhatsApp button with glow)
  - Secondary: Scroll to products

### Category Cards (4 cards)
- **Style**: Neon-bordered cards with glow effect
- **Content**: Icon, title, description
- **Interaction**: Hover glow intensifies, smooth transitions
- **Cards**: OLOX Media, OLOX Play, OLOX Music, OLOX Tech

### Product Grid
- **Cards**: Dark background with neon border
- **Content**: Abstract icon (NOT branded logos), name, description, placeholder price
- **Button**: "اطلب الآن" with neon glow
- **Hover**: Card elevates with enhanced glow

### Order Form
- **Style**: Large, centered form with dark background and neon accents
- **Fields**: Full name, phone, email, product dropdown, duration selector, notes
- **Submit Button**: Large, glowing neon button
- **Validation**: Inline error messages in neon red

### How to Order Section
- **Layout**: 4 illustrated steps in horizontal row (stack on mobile)
- **Style**: Icon/illustration, step number, description
- **Design**: Connected flow with arrows/lines between steps

### FAQ Section
- **Format**: Accordion-style expandable questions
- **Style**: Neon borders on active/hover states
- **Questions**: 8 Arabic FAQs with smooth expand/collapse animations

### Testimonials
- **Layout**: 3 cards in a row (stack on mobile)
- **Style**: Neon glowing card borders
- **Content**: Arabic review text, customer name, rating stars

### Admin Dashboard
- **Theme**: Consistent dark neon aesthetic
- **Table**: Clean, readable table with alternating row highlights
- **Login Form**: Centered, neon-bordered form on dark background

---

## Animations
- **Smooth Scroll**: Enable smooth scrolling between sections
- **Hover Effects**: Buttons and cards glow brighter on hover
- **Hero Background**: Subtle animated gradient or particle effect
- **Transitions**: 0.3s ease for all interactive elements
- **Form Submit**: Success message with fade-in, then redirect to WhatsApp after 3s

---

## Images
**Hero Section**: Use an abstract tech/digital themed background image or animated gradient (particles, geometric patterns, or neon waves). No large photographic hero image needed - focus on neon effects and text.

**Category Icons**: Simple, abstract geometric icons for each category (not branded logos).

**Products**: Use placeholder abstract icons representing each product type (avoid copyrighted logos).

**Testimonials**: Optional placeholder avatars with neon circular borders.

---

## Responsive Behavior
- **Mobile**: Single column layout, stacked cards, full-width buttons
- **Tablet**: 2-column grids, adjusted spacing
- **Desktop**: Full multi-column layouts, maximum visual impact
- **Breakpoints**: Standard mobile (<768px), tablet (768-1024px), desktop (>1024px)

---

## Key Interactions
- **WhatsApp Integration**: Multiple prominent WhatsApp buttons linking to `+212716594562`
- **Smooth Scrolling**: Click category cards to scroll to relevant products
- **Form Submission**: Save to database → Show success message → Auto-redirect to WhatsApp after 3 seconds
- **Admin Access**: Session-protected dashboard with login redirect