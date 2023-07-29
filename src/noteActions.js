import { STATUS, noteForm } from "./index.js";
import { notes } from "./notesData.js";
import { closeModal, getDatesFromContent, reRenderTables } from "./tools.js";

export const deleteNote = (id) => {
    if (confirm("Are you sure you want to remove this note?")) {
        const index = notes.findIndex((note) => note.created === id);
        if (index !== -1) {
            notes.splice(index, 1);
            reRenderTables();
        }
    }
};

export const handleArchive = (id, status) => {
    const actionName = status === STATUS.ACTIVE ? "archive" : "unarchive";

    if (confirm(`Are you sure you want to ${actionName} this note?`)) {
        const note = notes.find((note) => note.created === id);
        note.status = status === STATUS.ACTIVE ? STATUS.ARCHIVED : STATUS.ACTIVE;
        reRenderTables();
    }
};

export const addNote = () => {
    const name = noteForm.elements.name.value;
    const category = noteForm.elements.category.value;
    const content = noteForm.elements.content.value;

    if (name && category && content) {
        const created = new Date().getTime();
        const status = STATUS.ACTIVE;
        const dates = getDatesFromContent(content);

        notes.unshift({ name, created, category, content, dates, status });

        closeModal(noteForm);
    }
};

export const editNote = () => {
    const name = noteForm.elements.name.value;
    const category = noteForm.elements.category.value;
    const content = noteForm.elements.content.value;
    const created = Number(noteForm.dataset.createdTime);
    const status = noteForm.dataset.status;

    if (name && category && content) {
        const dates = getDatesFromContent(content);
        const note = notes.find((note) => note.created === created);

        if (note) {
            note.name = name;
            note.created = created;
            note.category = category;
            note.content = content;
            note.status = status;
            note.dates = dates;

            closeModal(noteForm);
        }
    }
};
