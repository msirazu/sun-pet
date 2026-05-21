import { publicApi } from "./apiUrl";

export const getPetsData = async() => {
    const res = await fetch(`${publicApi}/pets`, {cache: 'no-store'});
    const data = await res.json();
    return data.data;
}

export const getFeaturedPets = async() => {
    const res = await fetch(`${publicApi}/featured`, {cache: 'no-store'});
    const data = await res.json();
    return data.data;
}