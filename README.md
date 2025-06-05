🎬 Anime Movie Watchlist 🎬
Welcome to my interactive web project! This is a movie watchlist application inspired by popular anime titles. Built using HTML, CSS, and JavaScript, it allows users to browse a set of anime movies and add them to a personal watchlist. This project highlights DOM manipulation, dynamic rendering, event handling, and the use of Flexbox for layout design.

✨ Features
🎥 Interactive Movie Selection
Displays a curated list of anime movies such as Naruto, Dragon Ball, and more.

Each movie is represented as a card component with a title and an "Add to Watchlist" button.

🔄 Dynamic DOM Rendering
JavaScript is used to:

Create and display movie cards dynamically.

Add selected movies to the watchlist section instantly.

Update the total cost of all movies in the watchlist in real time.

🖱️ Event-Driven Interactions
Each movie card includes an Add button with an event listener.

On click, the movie is appended to the Watchlist section and the total cost updates automatically.

Smooth hover effect on buttons for visual feedback and engagement.

🧱 Key HTML Elements Used
✅ Semantic Structure
<div> elements for layout and section grouping.

<h1> used for clear labeling of the Movies and Watchlist sections.

<p> and <span> for dynamically updating the total cost.

✅ Linked Assets
<link> tag connects to styles.css for design.

<script> tag links the logic from script.js.

🎨 Key CSS Elements Used
📐 Flexbox Layout
The #layout container uses display: flex for a responsive, side-by-side layout.

gap property adds spacing between the movie list and watchlist panels.

🎨 Styling & Effects
.movie-card: Styled with padding, borders, and a unique background color.

.add-btn: Custom button styles with hover animations.

Hover transforms (scale(1.20)) add interactivity.

Smooth transitions via transition: all 0.3s ease.

🧠 Concepts Practiced
JavaScript Arrays: Used to manage movie data and watchlist items.

DOM Manipulation: Dynamically create and insert elements into the page.

Event Listeners: Add-to-watchlist functionality powered by click events.

Flexbox: Applied for horizontal layout and alignment of main sections.

UI Feedback: Visual hover effects and interactive updates to total cost.

🚀 Future Enhancements
Allow removal of movies from the watchlist.

Add movie thumbnails and brief descriptions.

Store data in localStorage to persist watchlist items across sessions.

Integrate with a public anime movie API for dynamic content.

🪞 Reflection
This project was a creative exercise in building interactivity from the ground up using JavaScript and Flexbox. By combining structured layout, responsive design, and real-time feedback, it laid the foundation for future feature-rich applications.