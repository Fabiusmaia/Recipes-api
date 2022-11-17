import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styles from './Recipe.module.css'

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
            <h1>{data.strMeal}</h1>
            <img src={data.strMealThumb}/>
            <hr></hr>
            <h2>Ingredients</h2>
            <ul>
                {filteredIngredients.map((item, index) => (
                    <li>
                        {item}
                    </li>
                ))}
            </ul>
            <hr></hr>
            <h2>Instructions</h2>
            <p>{data.strInstructions}</p>
        </div>

    )
}

export default Recipe