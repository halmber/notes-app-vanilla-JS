import { notes } from "../notesData.js";
import { createNoteCells } from "./createElements.js";

const renderNoteRows = (status) => {
    const tableBody = document.querySelector("#notes-body");
    tableBody.innerHTML = "";

    notes.forEach((item) => {
        if (status === item.status) {
            const noteCells = createNoteCells(item);
            tableBody.appendChild(noteCells);
        }
    });
};

export default renderNoteRows;
