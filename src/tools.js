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

export const prepareRender = () => {
    let isArchivedVisbl = document.getElementById("is-archived");
    isArchivedVisbl.style.visibility = isArchivedVisbl.style.visibility === "visible" ? "hidden" : "visible";
};

export const openModal = (noteForm) => {
    noteForm.classList.add("active");
    noteForm.style.visibility = "visible";
};

export const closeModal = (noteForm) => {
    noteForm.classList.remove("active");
    setTimeout(() => {
        noteForm.style.visibility = "hidden";
        noteForm.reset();
    }, 400);
};
