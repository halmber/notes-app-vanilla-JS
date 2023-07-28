import renderNoteRows from "./render/renderNoteRows.js";

export const STATUS = { ACTIVE: "ACTIVE", ARCHIVED: "ARCHIVED" };

let currentStatus = STATUS.ACTIVE;

document.addEventListener("DOMContentLoaded", () => {
    renderNoteRows(currentStatus);
});

const showArchivedBtn = document.querySelector("#show-archived");
showArchivedBtn.addEventListener("click", () => {
    currentStatus = currentStatus === STATUS.ACTIVE ? STATUS.ARCHIVED : STATUS.ACTIVE;
    renderNoteRows(currentStatus);
});
