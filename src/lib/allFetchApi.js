import { publicApi } from "./apiUrl";

export const getPetsData = async() => {
    const res = await fetch(`${publicApi}/pets`);
    const data = await res.json();
    return data.data;
}

export const getFeaturedPets = async() => {
    const res = await fetch(`${publicApi}/featured`);
    const data = await res.json();
    return data.data;
}