
import './App.css';
import {useEffect,useState} from 'react'
import Recipe from './Recipe';

function App() {

  const [recipes,setRecipes] = useState([])
  const [search,setSearch] = useState('')
  const [query,setQuery]= useState('chicken')

  const submitHandler =(e) =>{
  e.preventDefault()
  setQuery(search)
  setSearch('')
  }
  console.log(recipes)
  const APP_ID ='3ccee393';
  const APP_KEY='2480965a051caabbb0fdf58d25340845'

  useEffect(()=>{
  getRecipes()
  },[query])
  const getRecipes = async () =>{
  const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
   const data = await response.json()
   setRecipes(data.hits)
  // console.log(data.hits)
  }

  return (
    <div className="App">
    
    <form className='search-form' onSubmit={submitHandler}>
      <input type="text" className='search-bar' value={search} onChange={e => setSearch(e.target.value)}/>
      <button type='submit'className='search-button'>Search</button>
    </form>
    {
      recipes.map((rec,i) =>(
      <Recipe 
      key={i}
      title={rec.recipe.label}
      image={rec.recipe.image}
      ingredients={rec.recipe.ingredients}
      cal={rec.recipe.calories}/>
      ))
    }
    </div>
  );
}

export default App;
