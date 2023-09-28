export const normalizeDate = (date: Date | string | null, useTime=false, useSeconds=false):string => {
    if (date === null) return '';
    const normalizeDate = typeof date === "string" ?  new Date(Date.parse(date)) : date;
    const day = normalizeDate.getDate() >= 10 ? normalizeDate.getDate() : '0' + normalizeDate.getDate();
    const month = normalizeDate.getMonth() + 1 >= 10 ? normalizeDate.getMonth() + 1 : '0' + (normalizeDate.getMonth() + 1);
    const year = normalizeDate.getFullYear();
    if (useTime) {
        const hours = normalizeDate.getHours() >= 10 ? normalizeDate.getHours() : '0' + normalizeDate.getHours();
        const minutes = normalizeDate.getMinutes() >= 10 ? normalizeDate.getMinutes() : '0' + normalizeDate.getMinutes();
        if (useSeconds) {
            const seconds = normalizeDate.getSeconds() >= 10 ? normalizeDate.getSeconds() : '0' + normalizeDate.getSeconds();
            return `${day}.${month}.${year} ${hours}:${minutes}:${seconds}`;
        }
        return `${day}.${month}.${year} ${hours}:${minutes}`;

    }
    return `${day}.${month}.${year}`;
};
