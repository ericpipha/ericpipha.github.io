export let dateToString = (date: Date) => {
    return date.getDate().toString() + "/" + (date.getMonth()+1).toString() + "/" + date.getFullYear().toString();
};


export let sortDates = (d1: Date|undefined, d2: Date|undefined) => {
    if (d1==undefined) { return -1 }
    if (d2==undefined) { return 1 }
    if (d1>d2) {
        return -1
    }
    return 1
}