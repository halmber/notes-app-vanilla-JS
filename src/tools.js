export const getLocalStringDate = (date) => {
    return new Date(date).toLocaleString("en-us", {
        month: "short",
        day: "numeric",
        year: "numeric",
    });
};
