import { useState } from "react";

function AddFood ({addFood}) {
    const [name, setName] = useState("")
    const [image, setImage] = useState("")
    const [calories, setCalories] = useState(0)
    const [servings, setServings] = useState(0)


    const handleSubmit = (e) => {
        e.preventDefault()
    

    const newFood = {
        _id: Math.random().toString(),
        name: name,
        image: image,
        calories: calories,
        servings: servings
    }
    addFood(newFood)

    setName("")
    setImage("")
    setCalories(0)
    setServings(0)

}
return (
    <form className="add-food" onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input 
            type="text"
            name="name">
        </input>
        <label htmlFor="image">Image</label>
        <input 
            type="text"
            name="image">
        </input>
        <label htmlFor="calories">Calories</label>
        <input 
            type="number"
            name="calories">
        </input>
        <label htmlFor="servings">Servings</label>
        <input 
            type="number"
            name="servings">
        </input>
        
        <button type="submit">Create</button>
    </form>
    
)
}

export default AddFood