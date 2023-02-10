import { useDispatch, useSelector } from "react-redux";
import { Card } from "../../components/Card/Card";
import { actionFavorite } from "../../store/actions/favoriteAction";

export default function Favorit() {
    const dispatch = useDispatch()
    const favorit = useSelector(state => state.favorite.favorite)
    const handleDelete = (id) => () => {
        console.log(id)
        dispatch(actionFavorite.deleteMovies(id))
    }

    const handleDeleteAll = () => {
        dispatch(actionFavorite.deleteAll())
    }

    return (
        <>
        <div>
            <button onClick={handleDeleteAll}>delete all</button>
        </div>
            {favorit.map(e => {
                
                return <Card e={e} text={"del"} onClick={handleDelete(e.id)} key={e.ind} />
            })}
            
        </>
    );
}