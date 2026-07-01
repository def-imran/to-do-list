# Dynamic To-Do List Application

An interactive web application that allows users to add, complete, and delete tasks dynamically. The application keeps tasks synchronized across page reloads by using the browser's LocalStorage.

🔗 **Live Demo:** [def-imran.github.io/to-do-list/](https://def-imran.github.io/to-do-list/)

**🎯 Project Purpose**
This project serves as a major milestone in my portfolio. After building several smaller mini-projects to master isolated coding skills, this application was developed as a larger, comprehensive project to connect all those pieces together. It marks my transition into building fully functional, state-driven web applications with a solid, foundational grip on Vanilla JavaScript.

**🤖 AI Collaboration**
This project was written and architected by me, utilizing an AI assistant as a dedicated tutor and code-reviewer rather than a code generator. 

Instead of blind copy-pasting, I deliberately used AI to:
* **Debug complex logic**: Investigating index-shifting bugs when manipulating state arrays.
* **Deepen understanding**: Learning the low-level behavior of JavaScript methods (like why `indexOf()` returns `-1` when a match is not found).
* **Refine implementation**: Actively challenging the AI's initial suggestions to replace them with cleaner, semantic solutions (such as targeting specific `<label>` tags via parent nodes instead of string manipulation).

Every line of code and structural decision in this project was analyzed, understood, and implemented by me.

**🚀 JavaScript Features & Concepts Applied**
Through this project, I practiced and applied the following JavaScript techniques:

* **State Synchronization & LocalStorage**: Reading and writing state arrays to the browser's storage using `JSON.stringify()` and `JSON.parse()` to persist data after page refreshes.
* **DOM Traversal & Relative Scoping**: Navigating through parent and sibling nodes using `.parentNode` and `.nextElementSibling` to target exact elements contextually rather than globally.
* **Array Mutation**: Utilizing `.push()` to append state data and `.splice()` combined with `.indexOf()` to safely remove specific elements without index-drift bugs.
* **Event Delegation**: Attaching a single change event listener to a parent container (`taskDisplay`) to handle checkbox inputs dynamically for existing and future list items.
* **Conditional UI Updates**: Validating user input against empty strings before altering state, and programmatically applying inline CSS styling (like `textDecoration = "line-through"`) based on user interaction.
* **Template Literals & Dynamic Rendering**: Clearing and rebuilding the inner HTML structure of a container dynamically by iterating over an array with `.forEach()`.

**🛠️ Tech Stack**
* **JavaScript (ES6+)** — Application logic, state management, LocalStorage, and DOM behavior.
* **HTML5** — Semantic markup, input handling, and page structure.
* **CSS3** — Component styling, layout, and visual feedback for completed tasks.

📄 License
This project is open-source and free to use for educational purposes.
