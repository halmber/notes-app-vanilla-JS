import renderNoteRows from "./render/renderNoteRows.js";
import { notes } from "./notesData.js";

document.addEventListener("DOMContentLoaded", (event) => {
    renderNoteRows(notes);
});
