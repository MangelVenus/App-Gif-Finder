import { useState } from "react"
import { AddCategory, GifGrid } from "./components/"

export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['Doro'])

  const onAddCategory = ( newCategory ) => {
    if( categories.includes(newCategory) ) return;
    setCategories([ newCategory, ...categories ])
  }

  console.log(categories)


  return (
    <>

      <h1>Doro Gif</h1>

      <AddCategory
        onNewCategory={ (value) => onAddCategory(value) } 
      />
      
      {
        categories.map( ( category ) => (
          <GifGrid
            key={ category }
            category={ category }
          />
        ))
      }

      <footer>
        <p>Esta es una App de prueba</p>
        <p>No nos hacemos resposables por el contenido que pueda aparecer relacionado a las busquedas realizadas.</p>
      </footer>
      
    </>
  )
}
