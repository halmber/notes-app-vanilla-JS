import { STATUS, currentStatus } from "./index.js";
import { notes } from "./notesData.js";
import renderNoteRows from "./render/renderNoteRows.js";

export const getLocalStringDate = (date) => {
    return new Date(date).toLocaleString("en-GB", {
        month: "short",
        day: "numeric",
        year: "numeric",
        hour: "numeric",
        minute: "numeric",
    });
};

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

const createActionButtons = (id) => {
    const td = document.createElement("td");

    const editImg = document.createElement("img");
    editImg.src = "../src/assets/edit.svg";
    editImg.width = 25;
    editImg.addEventListener("click", () => console.log("edit"));

    const archiveImg = document.createElement("img");
    archiveImg.src = "../src/assets/archive.svg";
    archiveImg.width = 18;
    if (currentStatus === STATUS.ACTIVE) {
        archiveImg.title = "Archive note";
        archiveImg.addEventListener("click", () => archiveNote(id));
    } else if (currentStatus === STATUS.ARCHIVED) {
        archiveImg.title = "Unarchive note";
        archiveImg.addEventListener("click", () => unArchiveNote(id));
    }

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

export const prepareRender = () => {
    let isArchivedVisbl = document.getElementById("is-archived");
    isArchivedVisbl.style.visibility = isArchivedVisbl.style.visibility === "visible" ? "hidden" : "visible";
};

const deleteNote = (id) => {
    if (confirm("Are you sure you want to remove this note?")) {
        const index = notes.findIndex((note) => note.created === id);
        notes.splice(index, 1);
        renderNoteRows(currentStatus);
    }
};

const archiveNote = (id) => {
    if (confirm("Are you sure you want to archive this note?")) {
        const note = notes.find((note) => note.created === id);
        note.status = STATUS.ARCHIVED;
        renderNoteRows(currentStatus);
    }
};

const unArchiveNote = (id) => {
    if (confirm("Are you sure you want to unarchive this note?")) {
        const note = notes.find((note) => note.created === id);
        note.status = STATUS.ACTIVE;
        renderNoteRows(currentStatus);
    }
};

export const openModal = (noteForm) => {
    noteForm.classList.add("active");
};

export const closeModal = (noteForm) => {
    noteForm.classList.remove("active");
    setTimeout(() => {
        noteForm.reset();
    }, 400);
};

export const addNote = (e, noteForm) => {
    e.preventDefault();

    const name = e.target.elements.name.value;
    const category = e.target.elements.category.value;
    const content = e.target.elements.content.value;

    if (name && category && content) {
        const created = new Date().getTime();
        const status = STATUS.ACTIVE;
        const dates = [];

        notes.unshift({ name, created, category, content, dates, status });

        renderNoteRows(currentStatus);
        closeModal(noteForm);
    }
};
