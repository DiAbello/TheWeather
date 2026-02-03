export const getTime = (dt_txt?: string) => {
    if (!dt_txt) return "--:--"
    const timePart = dt_txt.split(" ")[1] ?? ""
    return timePart.slice(0, 5) ?? "--:--"
}