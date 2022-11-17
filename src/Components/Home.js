import axios from 'axios';
import {useEffect, useState} from 'react'
import RecipeCard from './RecipeCard';
import styles from './Search.module.css'
import Container from './Container';
function Home(){

    const [query, setQuery] = useState("")
    const [data, setData] = useState([])
    function handleOnChange(e){
        e.preventDefault();
        setQuery(e.target.value)
        console.log(query)
    }
    useEffect(() => {
        axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`)
       .then((response) => {
        setData(response.data.meals)
        console.log(response.data)
    }) 
       .catch((error) => console.log(error))
    }, [query])
return(
    <Container>
        <form className={styles.form}>
        <input type="text" placeholder="Pasta..." value={query} name="recipe" onChange={(e) => handleOnChange(e)}/> 
        </form>
        {data ? data.map((item) => (
            <RecipeCard strMeal={item.strMeal} thumb={item.strMealThumb} category={item.strCategory} id={item.idMeal}/>
    )) : (<h1>No recipe was found.</h1>)}
    </Container>
)
}

export default Home
