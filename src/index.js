import renderNoteRows from "./render/renderNoteRows.js";
import { prepareRender } from "./tools.js";

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
addNoteBtn.addEventListener("click", () => {
    console.log("add note");
});
