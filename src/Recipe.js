import Styles from './Recipe.module.css'

function Recipe(props){

    return<div className={Styles.recipe}>
        <h1>{props.title}</h1>
        
        <ol>
            {props.ingredients.map(ing => <li>{ing.text}</li>)}
        </ol>
        <p>{props.cal}</p>
        <img src ={props.image} className={Styles.image}/>
        
    </div>
}

export default Recipe