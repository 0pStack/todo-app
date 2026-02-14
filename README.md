# Todo App - JavaScript Assignment

This project was developed as part of a JavaScript course at Medieinstitutet. The goal of the assignment was to build a simple todo application with a focus on **data persistence**, **error handling**, and **code improvement (refactoring)**.

## Features & Functionality

1. **Persistent Storage**  
   - All added items are saved in `localStorage`, allowing users to reopen the application and retrieve previously saved items.

2. **Error Handling**  
   - Users are notified if they attempt to add an item without filling in the input field.  
   - Users are also alerted if they try to add a duplicate item to the list.

3. **Code Refactoring & Improvement**  
   - The code has been structured and cleaned up to improve readability, maintainability, and overall quality.

## Assignment Tasks (Completed)

- Implemented the remaining `localStorage` logic in `app.js`.  
- Displayed the **Clear All** button only when there are items in the list.  
- Fixed the bug that occurred when clicking on an empty list.  
- Bonus: Automatically removed the `localStorage` key when all items were deleted manually.

## Bonus Features

- Ensures that `localStorage` is cleaned up if the list becomes empty, keeping the application data consistent.
