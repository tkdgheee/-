import { create } from "zustand";
import { getAllPlaces, getUsersPlaces } from "../api/storeApi";

const usePlaceStore = create((set) => ({
    places: [],
    usersPlace: [],
    fetchPlaces: async () => {
        try {
            const data = await getAllPlaces();
            set({ places: data});
        }catch (error) {
            console.error('전체 맛집 불러오기 실패:', error)
        }
    },
    fetchUsersPlace: async () => {
        try{
            const data = await getUsersPlaces();
            set ({usersPlace : data});
        }catch (error) {
            console.error('찜한 맛집 불러오기 실패', error)
        }
    },
}
))

export default usePlaceStore