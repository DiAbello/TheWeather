export const getDate = (dt_txt: string) => {
    if (!dt_txt) return "xxxx-xx-xx"
   return dt_txt.split(" ")[0] ?? ""
}