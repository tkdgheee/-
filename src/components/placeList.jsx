import { useEffect } from "react";
import usePlaceStore from "../store/placeStore";

const PlaceList = () => {
  const IMAGE_BASE_URL = "http://localhost:3000/";

  const placesData = usePlaceStore(state => state.places);
  const places = placesData?.places || [];

  const fetchPlaces = usePlaceStore(state => state.fetchPlaces);

  useEffect(() => {
    fetchPlaces();
  }, [fetchPlaces]);

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-8 text-center">📍 전국 맛집 리스트</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {places.map(place => (
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
