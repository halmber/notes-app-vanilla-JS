import renderNoteRows from "./render/renderNoteRows.js";
import { addNote, closeModal, openModal, prepareRender } from "./tools.js";

export const STATUS = { ACTIVE: "ACTIVE", ARCHIVED: "ARCHIVED" };

export let currentStatus = STATUS.ACTIVE;

document.addEventListener("DOMContentLoaded", () => {
    renderNoteRows(currentStatus);
});

const showArchivedBtn = document.querySelector("#show-archived");
showArchivedBtn.addEventListener("click", () => {
    prepareRender();
    currentStatus = currentStatus === STATUS.ACTIVE ? STATUS.ARCHIVED : STATUS.ACTIVE;
    renderNoteRows(currentStatus);
});

const addNoteBtn = document.querySelector("#add-note");
const noteForm = document.querySelector("#modal");
const canselAddNoteBtn = document.querySelector("#close-modal");

addNoteBtn.addEventListener("click", () => {
    openModal(noteForm);
});

canselAddNoteBtn.addEventListener("click", () => {
    closeModal(noteForm);
});

noteForm.addEventListener("submit", (e) => {
    addNote(e, noteForm);
});
