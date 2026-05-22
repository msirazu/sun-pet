import { publicApi } from "./apiUrl";

export const getPetsData = async(query = '') => {
    const url = query ? `${publicApi}/pets?${query}` : `${publicApi}/pets`;
    const res = await fetch(url, {cache: 'no-store'});
    const data = await res.json();
    return data.data;
}

export const getFeaturedPets = async() => {
    const res = await fetch(`${publicApi}/featured`, {cache: 'no-store'});
    const data = await res.json();
    return data.data;
}

export const getMyRequestData = async() => {
    const res = await fetch(`${publicApi}/user/dashboard/my-request`, {cache: 'no-store'});
    const data = await res.json();
    return data.data;
}