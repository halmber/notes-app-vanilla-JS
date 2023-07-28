import { notes } from "../notesData.js";
import { createActionButtons, getLocalStringDate } from "../tools.js";

const renderNoteRows = () => {
    const tableBody = document.querySelector("#notes-body");
    tableBody.innerHTML = "";

    notes.forEach((item) => {
        const tr = document.createElement("tr");

        tr.insertCell().textContent = item.name;
        tr.insertCell().textContent = getLocalStringDate(item.created);
        tr.insertCell().textContent = item.category;
        tr.insertCell().textContent = item.content;
        tr.insertCell().textContent = item.dates.join(", ");

        //додати кнопки з екшенами
        tr.insertCell().appendChild(createActionButtons(item.created));

        tr.classList.add("note-row");
        tableBody.appendChild(tr);
    });
};

export default renderNoteRows;
