const fs = require('fs');

const css = `
    body {
        font-family: 'Helvetica Neue', Arial, sans-serif;
        color: #333;
        line-height: 1.8;
        margin: 0;
        padding: 0;
        background-color: #fff;
    }
    .page {
        margin: 0 auto;
        background: #fff;
        padding: 40px 80px;
        box-sizing: border-box;
    }
    .page:first-child {
        page-break-before: avoid;
    }
    h1, h2, h3, h4, h5, h6 {
        color: #0056b3; /* Blue Headings */
        font-family: 'Segoe UI', sans-serif;
        margin-top: 1.5rem;
        margin-bottom: 1rem;
        page-break-after: avoid;
    }
    h1 { font-size: 2.8rem; }
    h2 { font-size: 2.2rem; border-bottom: 2px solid #0056b3; padding-bottom: 10px; }
    h3 { font-size: 1.8rem; }
    p { font-size: 1.15rem; margin-bottom: 1.5rem; text-align: justify; }
    ul, ol { font-size: 1.15rem; margin-bottom: 1.5rem; padding-left: 2rem; }
    li { margin-bottom: 0.8rem; }
    .toc-list li { margin-bottom: 0.4rem; }
    .screenshot {
        display: block;
        max-width: 100%;
        height: auto;
        margin: 3rem auto;
        border: 1px solid #ddd;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.1);
        page-break-inside: avoid;
    }
    .footer {
        display: none;
    }
    .cover-page {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        min-height: 1120px;
        page-break-after: always;
    }
    .cover-page h1 { font-size: 4.5rem; margin-top: 200px; margin-bottom: 20px; color: #004494; border: none; }
    .cover-page p { font-size: 1.8rem; color: #666; text-align: center; }
`;

const pages = [];

// Page 1: Cover
pages.push(`
<div class="page cover-page">
    <h1>Stackly ERP</h1>
    <p>Comprehensive Technical Documentation</p>
</div>
`);

// Page 2: Table of Contents
pages.push(`
<div class="page">
    <h2>Table of Contents</h2>
    <ol class="toc-list">
        <li>Executive Summary</li>
        <li>System Architecture Overview</li>
        <li>Directory and File Structure</li>
        <li>UI Design Language and Theming</li>
        <li>Advanced CSS Animations Breakdown</li>
        <li>Homepage Configuration (index.html)</li>
        <li>Feature Modules (features.html)</li>
        <li>Industry Solutions (solutions.html)</li>
        <li>Pricing Strategy (pricing.html)</li>
        <li>About Us & Company Vision (about.html)</li>
        <li>Knowledge Base (resources.html)</li>
        <li>Contact & Support Integration (contact.html)</li>
        <li>Authentication Flow (login/signup)</li>
        <li>Dashboard Ecosystem Overview</li>
        <li>Admin Dashboard Deep-Dive</li>
        <li>Manager Dashboard Deep-Dive</li>
        <li>Employee Dashboard Deep-Dive</li>
        <li>Security, Compliance & Error Handling</li>
        <li>Performance Optimization Strategies</li>
        <li>Future Roadmap & Scaling</li>
    </ol>
    <div class="footer">Page 2</div>
</div>
`);

// Page 3: Executive Summary
pages.push(`
<div class="page">
    <h2>1. Executive Summary</h2>
    <p>Stackly ERP represents a paradigm shift in modern enterprise resource planning systems. Built with speed, security, and an incredibly intuitive user interface, it unifies fragmented operational workflows into a single, comprehensive workspace.</p>
    <p>This technical documentation serves as the master reference guide for the frontend implementation of the Stackly ERP platform. It details the precise methodologies used in designing the application's interface without relying on raw source code, making it accessible to stakeholders, designers, and project managers alike.</p>
    <p>The primary objectives of the Stackly architecture are extreme responsiveness, visually captivating micro-animations, and uncompromised accessibility. Throughout this document, you will discover how these objectives are met across 20 critical components of the system.</p>
    <h3>Key Design Pillars</h3>
    <ul>
        <li><strong>Glassmorphism:</strong> Extensive use of semi-transparent backgrounds with background blur to create depth and a futuristic aesthetic.</li>
        <li><strong>Fluid Typography:</strong> The implementation of scalable fonts that adapt perfectly to mobile, tablet, and ultra-wide displays.</li>
        <li><strong>Thematic Consistency:</strong> A unified color palette leaning heavily on deep space darks paired with neon emerald and cyan accents.</li>
    </ul>
    <div class="footer">Page 3</div>
</div>
`);

// Page 4: Architecture Overview
pages.push(`
<div class="page">
    <h2>2. System Architecture Overview</h2>
    <p>The frontend architecture of Stackly ERP is intentionally designed as a robust, vanilla HTML/CSS/JS application. This strategic decision eliminates dependency bloat and ensures ultra-fast parsing and rendering times across all modern web browsers.</p>
    <h3>Component Modularization</h3>
    <p>Despite not using a traditional JavaScript framework like React or Vue, the application adheres to strict modular design principles. Navigation bars, footers, and dashboard sidebars are designed to be easily extensible. Global styles are managed centrally, ensuring that any modification to a CSS variable cascades predictably throughout the entire application suite.</p>
    <h3>Performance Considerations</h3>
    <p>By heavily utilizing CSS Grid and Flexbox, the application avoids costly JavaScript-based layout recalculations. Animations are strictly limited to properties that do not trigger layout reflows (specifically transforms and opacities), which guarantees a silken 60 frames-per-second experience even on lower-tier hardware.</p>
    <img src="screenshots/index.png" class="screenshot" alt="Overview Screenshot" />
    <div class="footer">Page 4</div>
</div>
`);

// Page 5: Directory Structure
pages.push(`
<div class="page">
    <h2>3. Directory and File Structure</h2>
    <p>The project follows a flattened, highly accessible directory structure designed for rapid onboarding and maintenance. The root directory contains all primary routing endpoints, while assets are compartmentalized based on their functional type.</p>
    <h3>Root Directory Content</h3>
    <p>The root houses all HTML files. This includes the public-facing marketing pages such as the index, about, features, solutions, and pricing pages. It also contains the secured dashboard views (admin, manager, employee) and authentication portals.</p>
    <h3>The Assets Directory</h3>
    <p>The <strong>/assets/</strong> folder is the central repository for all multimedia. It contains over 60 highly optimized WebP images, ensuring maximum visual fidelity with minimal bandwidth footprint. SVGs are utilized directly within the HTML to save HTTP requests, but standalone graphic files reside here.</p>
    <h3>CSS and JS Directories</h3>
    <p>The <strong>/css/</strong> folder contains the global stylesheet (style.css) which acts as the central nervous system for the app's aesthetics, alongside specialized sheets like dashboard.css. The <strong>/js/</strong> directory contains specialized logic controllers like script.js for UI interactions and auth.js for simulated authentication states.</p>
    <div class="footer">Page 5</div>
</div>
`);

// Page 6: UI Design Language
pages.push(`
<div class="page">
    <h2>4. UI Design Language and Theming</h2>
    <p>Stackly's visual identity is defined by its bold, unapologetic use of dark mode as the default state. The primary background color is a deep, immersive navy (hex 0A1128), which significantly reduces eye strain for enterprise users operating the software for hours at a time.</p>
    <h3>Theming Engine (CSS Variables)</h3>
    <p>The entire color system is driven by root CSS variables. The primary brand color is a vibrant emerald green (#10B981) that signifies success, stability, and growth. This is complemented by a secondary cyan (#06B6D4) and an accent purple (#8B5CF6). These colors are frequently combined into linear gradients to give text and buttons a striking, luminescent quality.</p>
    <h3>Typography</h3>
    <p>The Inter font family is implemented globally. Inter was specifically chosen for its high legibility in dense data tables and its sleek, geometric appearance in large hero headings. Font weights span from 300 (light) to 800 (extra bold), providing a deep typographic hierarchy.</p>
    <h3>Card Design</h3>
    <p>Data containers (Bento grids, pricing cards, feature blocks) utilize a signature "glass-panel" effect. This is achieved using a heavily desaturated background color with very low opacity, paired with a backdrop-filter blur. Hover states dynamically increase the border opacity and apply a subtle box-shadow, creating an interactive "lift" effect.</p>
    <div class="footer">Page 6</div>
</div>
`);

// Page 7: Animations
pages.push(`
<div class="page">
    <h2>5. Advanced CSS Animations Breakdown</h2>
    <p>Motion design is fundamental to the Stackly experience. Rather than static state changes, the application employs fluid choreography to guide the user's attention.</p>
    <h3>The "Reveal" Mechanism</h3>
    <p>Almost all content blocks on the marketing pages use a sophisticated reveal animation. Elements start slightly translated downward and completely transparent. As the user scrolls, Intersection Observers trigger a class swap that animates them into their final position. This creates a cascading waterfall effect as content gracefully enters the viewport.</p>
    <h3>Infinite Marquees</h3>
    <p>Both the client logo strip on the homepage and the ecosystem integrations section utilize infinite linear scroll animations. By duplicating the content tracks and applying a precise mathematical translation (calc(-50% - gap)), the animation loops seamlessly without any perceptible reset judder. Furthermore, the animation pauses on hover, allowing users to interact with the moving elements.</p>
    <h3>Ambient Background Motion</h3>
    <p>To prevent the dark mode from feeling stagnant, massive, highly blurred "blobs" float in the fixed background layer. These blobs use a multi-stage keyframe animation to slowly drift, expand, and contract over a 20-second loop. Because they are absolutely positioned behind the main content, they provide a subtle, organic life to the application without distracting from the core data.</p>
    <div class="footer">Page 7</div>
</div>
`);

// Page 8: index.html
pages.push(`
<div class="page">
    <h2>6. Homepage Configuration (index.html)</h2>
    <p>The homepage acts as the primary conversion funnel. It is architected to immediately communicate value, establish trust, and drive user registration.</p>
    <h3>Hero Section & Slideshow</h3>
    <p>The very top of the page features a dynamic, fading background slideshow showcasing the software in various enterprise environments. Overlaying this is the core value proposition text, rendered with a striking primary gradient, and twin call-to-action buttons. A glowing badge highlights the latest AI Copilot release.</p>
    <h3>Bento Grid Layout</h3>
    <p>The features are summarized in a highly modern "Bento box" grid. This asymmetric layout mixes square and rectangular cards to break visual monotony. Each card combines a high-quality WebP thumbnail with concise copy, explaining modules like Finance, HR, and Supply Chain.</p>
    <img src="screenshots/index.png" class="screenshot" alt="Index Screenshot" />
    <div class="footer">Page 8</div>
</div>
`);

// Page 9: features.html
pages.push(`
<div class="page">
    <h2>7. Feature Modules (features.html)</h2>
    <p>The features page is an exhaustive catalog of Stackly's technical capabilities, broken down into digestible, highly visual segments.</p>
    <h3>Feature Deep Dives</h3>
    <p>The page follows a zig-zag layout pattern (alternating image-left, text-right, then text-left, image-right). This classical design pattern keeps the user's eyes tracking actively across the screen, improving reading retention.</p>
    <h3>Technical Implementation</h3>
    <p>Each feature section highlights specific technical advantages: real-time synchronization, multi-currency ledger support, and API extensibility. The page utilizes custom SVG iconography heavily, coloring them with the platform's primary emerald hue to create visual anchors for the text.</p>
    <img src="screenshots/features.png" class="screenshot" alt="Features Screenshot" />
    <div class="footer">Page 9</div>
</div>
`);

// Page 10: solutions.html
pages.push(`
<div class="page">
    <h2>8. Industry Solutions (solutions.html)</h2>
    <p>Recognizing that a generic ERP is insufficient for modern enterprises, the solutions page caters to specific industry verticals.</p>
    <h3>Industry Grid</h3>
    <p>The top of the page presents a responsive grid of industry cards (Retail, Manufacturing, Healthcare, Education, Logistics, etc.). Each card features a dark-overlay background image and an animated top-border gradient that reveals itself on hover.</p>
    <h3>Detailed Breakdown Adjustments</h3>
    <p>Recently, the Education and Logistics sections were heavily augmented to balance visual weight against large UI screenshots. The Education section now boasts a modern bulleted list with custom checkmark SVGs, while Logistics utilizes nested "glass-panel" feature cards detailing 'Route AI' and 'Fleet Sync'. This demonstrates the flexible nature of the CSS framework used.</p>
    <img src="screenshots/solutions.png" class="screenshot" alt="Solutions Screenshot" />
    <div class="footer">Page 10</div>
</div>
`);

// Page 11: pricing.html
pages.push(`
<div class="page">
    <h2>9. Pricing Strategy (pricing.html)</h2>
    <p>The pricing page is engineered for ultimate transparency and conversion optimization.</p>
    <h3>Interactive Billing Toggle</h3>
    <p>A custom-built JavaScript toggle allows users to switch between Monthly and Yearly billing seamlessly. When triggered, the DOM updates the displayed prices instantly. A vibrant "Save 20%" badge draws attention to the yearly commitment.</p>
    <h3>The 3-Card Centered Grid</h3>
    <p>The core of the page is the three-tier pricing model: Starter, Business, and Enterprise. These cards are perfectly centered using a 3-column CSS grid. The 'Business' tier is heavily emphasized—it scales up by 5%, features a glowing primary border, and sports a 'Most Popular' badge, employing standard psychological anchoring techniques.</p>
    <img src="screenshots/pricing.png" class="screenshot" alt="Pricing Screenshot" />
    <div class="footer">Page 11</div>
</div>
`);

// Page 12: about.html
pages.push(`
<div class="page">
    <h2>10. About Us & Company Vision (about.html)</h2>
    <p>The About page shifts focus from the software to the humans building it, establishing corporate credibility and trust.</p>
    <h3>Mission Statement</h3>
    <p>A sweeping, cinematic hero section introduces the company's core mission: eliminating software fragmentation. The text is large, bold, and heavily padded to ensure maximum readability.</p>
    <h3>Leadership Gallery</h3>
    <p>A grid of team member profiles introduces the executives. These cards employ hover-zoom effects on the portraits and display social media icon links. The layout ensures that whether on mobile (1 column) or desktop (4 columns), the aspect ratios of the portraits remain perfect.</p>
    <img src="screenshots/about.png" class="screenshot" alt="About Screenshot" />
    <div class="footer">Page 12</div>
</div>
`);

// Page 13: resources.html
pages.push(`
<div class="page">
    <h2>11. Knowledge Base (resources.html)</h2>
    <p>The resources hub is designed as a centralized learning portal, offering everything from API documentation to thought leadership articles.</p>
    <h3>Categorized Content Hubs</h3>
    <p>The layout features horizontal scrolling containers for videos and webinars, alongside vertical lists for whitepapers. A prominent search bar allows users to theoretically filter through hundreds of documents. Article cards feature thumbnail images that subtly scale up on hover, reinforcing interactivity.</p>
    <div class="footer">Page 13</div>
</div>
`);

// Page 14: contact.html
pages.push(`
<div class="page">
    <h2>12. Contact & Support Integration (contact.html)</h2>
    <p>The contact page facilitates multiple streams of communication: sales inquiries, technical support, and partnership requests.</p>
    <h3>Form Architecture</h3>
    <p>The primary lead capture form is housed inside a massive glass-panel container. It utilizes custom-styled input fields with completely removed default browser borders, relying instead on bottom-borders that transition colors when focused. This creates a frictionless data-entry experience.</p>
    <h3>Global Presence</h3>
    <p>Below the form, a grid displays various global office locations, complete with tiny map pin icons and local time indicators, projecting the image of a massive, multinational corporation.</p>
    <div class="footer">Page 14</div>
</div>
`);

// Page 15: Auth Pages
pages.push(`
<div class="page">
    <h2>13. Authentication Flow (login/signup)</h2>
    <p>The gateway to the actual software. The login and signup pages strip away navigation and footers to eliminate distractions.</p>
    <h3>Split Screen Design</h3>
    <p>The layout is a classic 50/50 split. The left side contains the authentication forms (OAuth buttons for Google/Microsoft, and standard email/password inputs). The right side features a gorgeous, full-height image overlayed with customer testimonials to reinforce confidence right at the moment of login.</p>
    <h3>Security Visuals</h3>
    <p>Subtle lock icons and "Secure 256-bit encryption" badges are placed near the submit buttons to assure enterprise clients of the platform's security standards.</p>

    <div class="footer">Page 15</div>
</div>
`);

// Page 16: Dashboard Overview
pages.push(`
<div class="page">
    <h2>14. Dashboard Ecosystem Overview</h2>
    <p>Upon authenticating, users enter the core ERP software. The dashboards discard the marketing aesthetic for a high-density, data-first approach.</p>
    <h3>Layout Structure</h3>
    <p>The application adopts a persistent left-hand sidebar for navigation and a top header for global search and user profile management. The main content area dynamically updates. A specialized 'dashboard.css' file handles these unique layout requirements, relying heavily on CSS Grid for widget placement.</p>
    <img src="screenshots/dashboard.png" class="screenshot" alt="Dashboard Screenshot" />
    <div class="footer">Page 16</div>
</div>
`);

// Page 17: Admin Dashboard
pages.push(`
<div class="page">
    <h2>15. Admin Dashboard Deep-Dive</h2>
    <p>The highest privilege tier. The Admin dashboard is focused entirely on macro-level analytics and system configuration.</p>
    <h3>Key Widgets</h3>
    <p>The interface prominently displays total revenue, active user counts, and server health status in bold, top-row metric cards. Below, large charting areas are reserved for financial projections and geographic user distribution maps. The color coding here is strict: red for alerts, green for positive growth, and blue for informational data.</p>
    <div class="footer">Page 17</div>
</div>
`);

// Page 18: Manager & Employee Dashboards
pages.push(`
<div class="page">
    <h2>16. Manager & 17. Employee Dashboards</h2>
    <p>Role-based access control dictates the UI for these tiers.</p>
    <h3>Manager Dashboard</h3>
    <p>Focuses on team productivity and approval workflows. The interface includes widgets for pending expense reports, team task completion rates, and departmental budgets. Interactive data tables allow for rapid sorting and filtering of employee requests.</p>
    <h3>Employee Dashboard</h3>
    <p>Highly streamlined for the individual contributor. The primary features are a timesheet logging widget, a simplified expense submission form, and a company-wide announcement banner. The interface prioritizes ease-of-use to ensure high daily active usage without requiring training.</p>
    <div class="footer">Page 18</div>
</div>
`);

// Page 19: Security & Performance
pages.push(`
<div class="page">
    <h2>18. Security & 19. Performance Strategies</h2>
    <p>Underpinning the beautiful UI are stringent structural paradigms.</p>
    <h3>Security (404.html & Error States)</h3>
    <p>Error handling is graceful. The custom 404 page maintains the brand aesthetic while clearly guiding lost users back to the dashboard. All forms implement basic HTML5 validation to prevent malformed data submission before it even hits a backend server.</p>
    <h3>Performance Optimization</h3>
    <p>By using WebP images, the total asset payload is incredibly small. The CSS is modularized, and DOM elements are kept surprisingly shallow. The use of hardware-accelerated CSS properties ensures that even highly complex animated pages draw virtually zero CPU cycles, preserving laptop battery life for end-users.</p>
    <div class="footer">Page 19</div>
</div>
`);

// Page 20: Conclusion
pages.push(`
<div class="page">
    <h2>20. Future Roadmap & Scaling</h2>
    <p>The Stackly frontend is perfectly poised for future scaling.</p>
    <h3>Componentization Potential</h3>
    <p>While currently vanilla HTML/CSS, the strict class-naming conventions and highly isolated CSS variables mean this entire codebase can be mapped to React components, Vue Single File Components, or Angular modules within days.</p>
    <h3>Conclusion</h3>
    <p>Stackly ERP proves that enterprise software does not have to be visually stagnant. By combining a dark-mode glassmorphism aesthetic with deeply considered layouts and buttery smooth micro-animations, it delivers a user experience that rivals consumer-grade applications while maintaining the data density required by global corporations.</p>
    <div class="footer">Page 20</div>
</div>
`);

const html = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Stackly Tech Docs</title>
    <style>${css}</style>
</head>
<body>
    ${pages.join('\n')}
</body>
</html>
`;

fs.writeFileSync('tech_documentation.html', html);
console.log('HTML Documentation generated.');
