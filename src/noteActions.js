import { STATUS, currentStatus } from "./index.js";
import { notes } from "./notesData.js";
import renderNoteRows from "./render/renderNoteRows.js";
import { closeModal, getDatesFromContent } from "./tools.js";

export const deleteNote = (id) => {
    if (confirm("Are you sure you want to remove this note?")) {
        const index = notes.findIndex((note) => note.created === id);
        notes.splice(index, 1);
        renderNoteRows(currentStatus);
    }
};

export const archiveNote = (id) => {
    if (confirm("Are you sure you want to archive this note?")) {
        const note = notes.find((note) => note.created === id);
        note.status = STATUS.ARCHIVED;
        renderNoteRows(currentStatus);
    }
};

export const unArchiveNote = (id) => {
    if (confirm("Are you sure you want to unarchive this note?")) {
        const note = notes.find((note) => note.created === id);
        note.status = STATUS.ACTIVE;
        renderNoteRows(currentStatus);
    }
};

export const addNote = (e, noteForm) => {
    e.preventDefault();

    const name = e.target.elements.name.value;
    const category = e.target.elements.category.value;
    const content = e.target.elements.content.value;

    if (name && category && content) {
        const created = new Date().getTime();
        const status = STATUS.ACTIVE;
        const dates = getDatesFromContent(content);

        notes.unshift({ name, created, category, content, dates, status });

        renderNoteRows(currentStatus);
        closeModal(noteForm);
    }
};
