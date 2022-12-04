import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styles from './Recipe.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook, faBowlFood, faBowlRice, faCake, faCodeFork, faPlateWheat, faSpoon, faUtensilSpoon} from '@fortawesome/free-solid-svg-icons'
import Header from './Layout/Header'

function Recipe(){
    const { id } = useParams()
    const [data, setData] = useState([])
    const ingredients = [];
    if(data){
       for(let i = 1; i <= 20; i++ ){
        ingredients.push(data[`strIngredient${[i]}`])
       }
    }
    const filteredIngredients = ingredients.filter(item =>  item !== null && item !== undefined && item.length > 1 )
    console.log(filteredIngredients)
    useEffect(() => {
        axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
        .then(response => {
            setData(response.data.meals[0])
            console.log(response.data.meals)
        })
        
    }, [])
    return(
        <div className={styles.recipe_div}>
            <div className={styles.img_div}>
            <img src={data.strMealThumb}/>
            </div>
            <div className={styles.ingredients}>
            <h1> <FontAwesomeIcon icon={faBowlRice} /> Ingredients</h1>
            <ul>
                {filteredIngredients.map((item, index) => (
                    <li>
                       <p> {item}</p>
                    </li>
                ))}
            </ul>
            </div>
            <div className={styles.instructions}>
            <h1><FontAwesomeIcon icon={faBook} /> Instructions</h1>
            <p>{data.strInstructions}</p>
            </div>
        </div>

    )
}

export default Recipe