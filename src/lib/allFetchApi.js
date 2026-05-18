import { publicApi } from "./apiUrl";

export const getPetsData = async() => {
    const res = await fetch(`${publicApi}/pets`);
    const data = await res.json();
    return data.data;
}