import { create } from "zustand";
import { getAllPlaces, getUsersPlaces } from "../api/storeApi";

const usePlaceStore = create((set) => ({
    places: [],
    usersPlace: [],
    isLoading: false,
    error: null,

    fetchPlaces: async () => {
        set({isLoading: true, error: null});
        try {
            const data = await getAllPlaces();
            set({ places: data});
            set({isLoading: false});
        }catch (error) {
            console.error('전체 맛집 불러오기 실패:', error)
            set({ error: '맛집 목록을 불러오는 데 실패했습니다. 404 Not Found' });
        }finally {set({isLoading: false});
        }
        
    },
    fetchUsersPlace: async () => {
        set({isLoading: true, error: null});
        try{
            const data = await getUsersPlaces();
            set ({usersPlace : data});
            set({isLoading: false});
        }catch (error) {
            console.error('찜한 맛집 불러오기 실패', error)
            set({ error: '찜한 맛집 목록을 불러오는 데 실패했습니다. 404 Not Found' });
        }finally {
            set({isLoading: false});
        }
    },
}
))

export default usePlaceStore