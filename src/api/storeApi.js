import axiosInstance from "./axiosInstance"

export async function getAllPlaces() {
    const res = await axiosInstance.get('/places')
    return res.data
}

export async function getUsersPlaces() {
    const res = await axiosInstance.get('/users/places')
    return res.data
}