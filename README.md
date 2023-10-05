# Vanilla JS Notes App

This repository contains a simple Notes App built using HTML, CSS, and JavaScript (vanilla). The app allows you to create, edit, archive, and manage notes. Below, you'll find an overview of the project structure and functionality.

## Project Structure

The project consists of the following key files and directories:

1. `index.html`: This is the main HTML file that defines the structure of the Notes App interface. It includes links to CSS and JavaScript files.

2. `src/` Directory:
   - `index.css`: The CSS file for styling the Notes App.
   - `assets/`: A directory containing image assets used in the app.
   - `index.js`: The main JavaScript file for handling app functionality.

3. `render/` Directory:
   - `renderNoteRows.js`: JavaScript file responsible for rendering the notes table.
   - `renderSummaryRows.js`: JavaScript file responsible for rendering the summary table.
   - `createElements.js`: JavaScript file responsible for creating action buttons, summary and note cells.

4. `tools.js`: Contains utility functions used for handling modals, form submissions, and other actions.

5. `noteActions.js`: Contains functions for adding, editing, archiving, and deleting notes.

6. `notesData.js`: An array of sample notes used for testing and initializing the app.

## App Functionality

The Notes App offers the following features:

- Displaying a list of notes with columns for Name, Created, Category, Content, Dates, and Actions.
- Filtering notes by status (Active or Archived) with the "Show Archived" button.
- Adding new notes using the "Add note" button, which opens a modal.
- Editing existing notes by clicking the "Edit" button in the notes table.
- Archiving and unarchiving notes using the "Archive" button in the notes table.
- Deleting notes with the "Delete" button in the notes table.
- Displaying a summary table with the count of notes in each category for both Active and Archived notes.

## Getting Started

To run the Notes App locally, follow these steps:

1. Clone the repository to your local machine:

   ```
   git clone <repository_url>
   ```

2. Open the `index.html` file in a web browser to launch the app.

## Usage

- To add a new note, click the "Add note" button and fill in the required information in the modal. Click "Submit" to save the note.

- To edit an existing note, click the "Edit" button in the notes table. Make your changes in the modal and click "Submit" to save the edits.

- To archive or unarchive a note, click the "Archive" or "Unarchive" button in the notes table, respectively.

- To delete a note, click the "Delete" button in the notes table. A confirmation dialog will appear.

- Use the "Show Archived" button to toggle between displaying Active and Archived notes.

## Contributing

Contributions to this project are welcome. If you have any suggestions, bug reports, or feature requests, please open an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
