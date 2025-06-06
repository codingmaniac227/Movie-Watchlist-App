# 🎬 Anime Movie Watchlist 🎬
Welcome to my interactive web project! This is a movie watchlist application inspired by popular anime titles. Built using HTML, CSS, and JavaScript, it allows users to browse a set of anime movies and add them to a personal watchlist.

## This project highlights:

- **DOM manipulation**

- **Dynamic rendering**

- **Event handling**

- **Use of Flexbox for layout design**

## ✨ Features
- **🎥 Interactive Movie Selection**
- Displays a curated list of anime movies such as Naruto, Dragon Ball, and more.
- Each movie is represented as a card with a title and an "Add to Watchlist" button.

- **🔄 Dynamic DOM Rendering**
- JavaScript dynamically creates and displays movie cards.
- When a movie is selected, it is instantly added to the Watchlist section.
- The total cost of all selected movies updates in real time.


- **🖱️ Event-Driven Interactions**
- Each "Add" button has an event listener for user clicks.
- Clicking the button appends the movie to the Watchlist and updates the total.
- Smooth hover effects on buttons provide visual feedback and improve UX.

## 🧱 Key HTML Elements Used
- **✅ Semantic Structure**
- <div>: Used for grouping layout sections such as movie list and watchlist.
- <h1>: Labels the main sections clearly — Movies and Watchlist.
- <p> and <span>: Dynamically display the total cost of selected movies.


- **✅ Linked Assets****
- <link>: Connects the external stylesheet (styles.css).
- <script>: Links the JavaScript logic from script.js.

## 🎨 Key CSS Elements Used
- **📐 Flexbox Layout**
- The #layout container uses display: flex for a side-by-side layout.
- The gap property adds spacing between the movie list and watchlist panels.


- **🎨 Styling & Effects**
- .movie-card: Styled with padding, borders, and a distinctive background color.
- .add-btn: Custom buttons styled with hover transforms (e.g., scale(1.2)).
- Smooth transitions applied using transition: all 0.3s ease.


## 🧠 Concepts Practiced
- **JavaScript Arrays**
- Used to store and manage movie data and watchlist entries.


- **DOM Manipulation**
- Dynamically create and insert elements into the page

- **Event Listeners**
- Add-to-watchlist functionality powered by click events

- **Flexbox**
- Applied for horizontal layout and alignment of main sections

- **UI Feedback**
- Visual hover effects and interactive updates to total cost

## 🚀 Future Enhancements
- Add ability to remove movies from the watchlist.
- Include movie thumbnails and brief plot descriptions.
- Store selected watchlist items in localStorage to persist across sessions.
- Connect to a public anime API to fetch live movie data dynamically.


## 🪞 Reflection
This project was a creative exercise in building interactivity from the ground up using JavaScript and Flexbox. By combining structured layout, responsive design, and real-time feedback, it laid the foundation for future feature-rich applications.