import { useEffect, useState } from "react";
import usePlaceStore from "../store/placeStore";
import { sortPlacesByDistance } from "../utils/loc";

const PlaceList = () => {
    const IMAGE_BASE_URL = import.meta.env.VITE_IMAGE_BASE_URL;
    const placesData = usePlaceStore(state => state.places);
    const places = placesData?.places || [];
    const [sortedPlaces, setSortedPlaces] = useState([]);
    const fetchPlaces = usePlaceStore(state => state.fetchPlaces);
    const isLoading = usePlaceStore(state => state.isLoading);
    const error = usePlaceStore(state => state.error);

  useEffect(() => {
    fetchPlaces();
  }, [fetchPlaces]);

  useEffect(()=> {
    if (places.length === 0) {
      console.error("맛집 목록이 비어 있습니다.");
      return;
    }
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      const sorted = sortPlacesByDistance(places, latitude, longitude);
      setSortedPlaces(sorted);
    },
    (error) => {
      console.error("위치 정보를 가져오는 데 실패했습니다:", error);
      error("위치 정보를 가져오는 데 실패했습니다. 맛집 목록을 원래 순서대로 표시합니다.");
      setSortedPlaces(places); // 위치 정보가 없을 경우 원래 순서대로 표시
    }
  )}, [places]);

  if(isLoading) {
    return (
      <div className="flex justify-center items-center h-screen text-5xl text-gray-500">
            맛집 목록을 불러오는 중입니다...
      </div>
    );
  }

  if(error) {
    return (
      <div className="flex justify-center items-center h-screen text-5xl text-red-500">
        맛집 목록을 불러오는 데 실패했습니다. 404 Not Found
      </div>
    );
  }


  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-8 text-center">📍 전국 맛집 리스트</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {sortedPlaces.map(place => (
          <div
            key={place.id}
            className="bg-white rounded-2xl shadow-md overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl"
          >
            <img
              src={`${IMAGE_BASE_URL}${place.image.src}`}
              alt={place.image.alt}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{place.title}</h3>
              <p className="text-gray-600 text-sm">{place.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlaceList;
