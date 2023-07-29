import renderNoteRows from "./render/renderNoteRows.js";
import { closeModal, handleSubmit, openModal, prepareRender } from "./tools.js";

export const STATUS = { ACTIVE: "ACTIVE", ARCHIVED: "ARCHIVED" };
export const SUBMIT_ACTION = { EDIT: "EDIT", ADD: "ADD" };

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
export const noteForm = document.querySelector("#modal");
const canselAddNoteBtn = document.querySelector("#close-modal");

addNoteBtn.addEventListener("click", () => {
    openModal(noteForm, SUBMIT_ACTION.ADD);
});

canselAddNoteBtn.addEventListener("click", () => {
    closeModal(noteForm);
});

noteForm.addEventListener("submit", (e) => {
    handleSubmit(e);
});
