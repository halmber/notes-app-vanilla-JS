import { STATUS, currentStatus } from "../index.js";
import { deleteNote, handleArchive } from "../noteActions.js";
import { getCountOfCategory, getLocalStringDate, handleEdit } from "../tools.js";

export const createNoteCells = (note) => {
    const tr = document.createElement("tr");

    tr.insertCell().textContent = note.name;
    tr.insertCell().textContent = getLocalStringDate(note.created);
    tr.insertCell().textContent = note.category;
    tr.insertCell().textContent = note.content;
    tr.insertCell().textContent = note.dates.join(", ");
    tr.insertCell().appendChild(createActionButtons(note.created));
    tr.classList.add("note-row");

    return tr;
};

export const createSummaryCells = (category) => {
    const tr = document.createElement("tr");

    tr.insertCell().textContent = category;
    tr.insertCell().textContent = getCountOfCategory(category, STATUS.ACTIVE);
    tr.insertCell().textContent = getCountOfCategory(category, STATUS.ARCHIVED);

    return tr;
};

const createActionButtons = (id) => {
    const td = document.createElement("td");

    const editImg = document.createElement("img");
    editImg.src = "./src/assets/edit.svg";
    editImg.width = 25;
    editImg.addEventListener("click", () => handleEdit(id));

    const archiveImg = document.createElement("img");
    archiveImg.src = "./src/assets/archive.svg";
    archiveImg.width = 18;
    if (currentStatus === STATUS.ACTIVE) {
        archiveImg.title = "Archive note";
        archiveImg.addEventListener("click", () => handleArchive(id, STATUS.ACTIVE));
    } else if (currentStatus === STATUS.ARCHIVED) {
        archiveImg.title = "Unarchive note";
        archiveImg.addEventListener("click", () => handleArchive(id, STATUS.ARCHIVED));
    }

    const deleteImg = document.createElement("img");
    deleteImg.src = "./src/assets/delete.svg";
    deleteImg.width = 25;
    deleteImg.addEventListener("click", () => deleteNote(id));

    td.appendChild(editImg);
    td.appendChild(archiveImg);
    td.appendChild(deleteImg);
    td.classList.add("action-cell");

    return td;
};
