import axios from 'axios'
import {useEffect} from 'react'
import styles from './RecipeCard.module.css'
import { Link } from 'react-router-dom'

function RecipeCard({ id, strMeal, thumb, category }){
return(
    <div className={styles.cards}>
<h1>{strMeal}</h1>
<p><span>Category:</span> {category}</p>
<Link to={`/recipe/${id}`}> <img src={thumb}/> </Link>
    </div>

)
}

export default RecipeCard