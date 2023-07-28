import { notes } from "./notesData.js";
import renderNoteRows from "./render/renderNoteRows.js";

export const getLocalStringDate = (date) => {
    return new Date(date).toLocaleString("en-us", {
        month: "short",
        day: "numeric",
        year: "numeric",
    });
};

export const createActionButtons = (id) => {
    const td = document.createElement("td");

    const editImg = document.createElement("img");
    editImg.src = "../src/assets/edit.svg";
    editImg.width = 25;
    editImg.addEventListener("click", () => console.log("edit"));

    const archiveImg = document.createElement("img");
    archiveImg.src = "../src/assets/archive.svg";
    archiveImg.width = 18;
    archiveImg.addEventListener("click", () => console.log("archive"));

    const deleteImg = document.createElement("img");
    deleteImg.src = "../src/assets/delete.svg";
    deleteImg.width = 25;
    deleteImg.addEventListener("click", () => deleteNote(id));

    td.appendChild(editImg);
    td.appendChild(archiveImg);
    td.appendChild(deleteImg);
    td.classList.add("action-cell");

    return td;
};

const deleteNote = (id) => {
    if (confirm("Are you sure you want to remove this note?")) {
        const index = notes.findIndex((note) => note.created === id);
        notes.splice(index, 1);
        renderNoteRows();
    }
};
