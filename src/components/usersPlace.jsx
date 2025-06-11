import { useEffect } from "react"
import usePlaceStore from "../store/placeStore"

const UsersPlace = () => {
    const {usersPlace, fetchUsersPlace} = usePlaceStore()

    useEffect(()=>{
        fetchUsersPlace()
    }, [fetchUsersPlace])
    

    return (
        <div>
            <h2>찜한 맛집 목록</h2>
            <ul>
                {usersPlace.map((place) => (
                    <li key={place.id} className="mb-7">
                    <h3>{place.title}</h3>
                    <img
                        src={`${IMAGE_BASE_URL}${place.image.src}`}
                        alt={place.image.alt}
                        width={250}
                    />
                    <p>{place.description}</p>
                    </li>
            ))}
            </ul>
        </div>
    )
}


export default UsersPlace;
