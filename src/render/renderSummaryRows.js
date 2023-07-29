import { createSummaryCells } from "./createElements.js";

const renderSummaryRows = (categories) => {
    const tableBody = document.querySelector("#summary-body");
    tableBody.innerHTML = "";

    categories.forEach((item) => {
        const noteCells = createSummaryCells(item);
        tableBody.appendChild(noteCells);
    });
};

export default renderSummaryRows;
