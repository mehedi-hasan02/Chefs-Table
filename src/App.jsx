import './App.css'
import Banner from './component/banner/Banner'
import Header from './component/header/Header'
import RecipeTitle from './component/recipes/RecipeTitle';
import Recipes from './component/recipes/Recipes'
import { useEffect, useState } from "react";


function App() {

  const [recipes, setRecipe] = useState([]);

  useEffect(() => {
    const allRecipes = async () => {
      const res = await fetch('../public/fakeData.json');
      const data = await res.json();
      setRecipe(data);
    }

    allRecipes()

  }, [])

  console.log(recipes);


  return (
    <>

      <Header></Header>
      <Banner></Banner>
      <RecipeTitle></RecipeTitle>

      <div className="flex gap-10 mt-12">
        <div className="flex-1 grid grid-cols-2 gap-5 ">
          {
            recipes.map(recipe => <Recipes key={recipe.id} recipe={recipe}></Recipes>)
          }
        </div>
        <div className="w-[40%] border border-black"></div>
      </div>

      {/* <Recipes recipes={recipes}></Recipes> */}





    </>
  )
}

export default App
