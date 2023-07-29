import { SUBMIT_ACTION, allCategory, currentStatus, noteForm } from "./index.js";
import { addNote, editNote } from "./noteActions.js";
import { notes } from "./notesData.js";
import renderNoteRows from "./render/renderNoteRows.js";
import renderSummaryRows from "./render/renderSummaryRows.js";

export const getLocalStringDate = (date) => {
    return new Date(date).toLocaleString("en-GB", {
        month: "short",
        day: "numeric",
        year: "numeric",
        hour: "numeric",
        minute: "numeric",
    });
};

export const getDatesFromContent = (content) => {
    return [...new Set(content.match(/\d{1,2}([\/.-])\d{1,2}\1\d{2,4}/g))];
};

export const reRenderTables = () => {
    renderNoteRows(currentStatus);
    renderSummaryRows(allCategory);
};

export const prepareRender = () => {
    let isArchivedVisbl = document.getElementById("is-archived");
    isArchivedVisbl.style.visibility = isArchivedVisbl.style.visibility === "visible" ? "hidden" : "visible";
};

export const openModal = (noteForm, action) => {
    noteForm.classList.add("active");
    noteForm.style.visibility = "visible";
    noteForm.dataset.action = action;
};

export const closeModal = (noteForm) => {
    noteForm.classList.remove("active");
    setTimeout(() => {
        noteForm.style.visibility = "hidden";
        noteForm.reset();
    }, 400);
};

export const handleEdit = (id) => {
    const { name, created, category, content, status } = notes.find((note) => note.created === id);
    noteForm.elements["name"].value = name;
    noteForm.elements["category"].value = category;
    noteForm.elements["content"].value = content;
    noteForm.dataset.createdTime = created;
    noteForm.dataset.status = status;

    openModal(noteForm, SUBMIT_ACTION.EDIT);
};

export const handleSubmit = (e) => {
    e.preventDefault();
    const submitAction = noteForm.dataset.action;
    if (submitAction === SUBMIT_ACTION.ADD) {
        addNote(e);
    } else if (submitAction === SUBMIT_ACTION.EDIT) {
        editNote(e);
    }
    reRenderTables();
};

export const getAllCategory = () => {
    const category = new Set(notes.map((note) => note.category));
    return category;
};

export const getCountOfCategory = (category, status) => {
    const count = notes.reduce((accumulator, current) => {
        if (current.category === category && current.status === status) {
            return accumulator + 1;
        } else {
            return accumulator;
        }
    }, 0);
    return count;
};
