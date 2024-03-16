import './App.css'
import Banner from './component/banner/Banner'
import Header from './component/header/Header'
import RecipeTitle from './component/recipes/RecipeTitle';
import Recipes from './component/recipes/Recipes'
import { useEffect, useState } from "react";


function App() {

  // let count = 1;

  const [recipes, setRecipes] = useState([]);
  const [recipe, setRecipe] = useState([]);
  const [showToast, setShowToast] = useState(false);
  const [cookCount, setCookCount] = useState(0);
  const [currCook, setCurrCook] = useState([]);
  const [totalTime, setTime] = useState(0);
  const [totalCalories, setCalorie] = useState(0);
  const [currCookCount, setCurrCookCount] = useState(0);

  useEffect(() => {
    const allRecipes = async () => {
      const res = await fetch('./fakeData.json');
      const data = await res.json();
      setRecipes(data);
    }

    allRecipes()

  }, [])

  const handelCook = (c) => {
    const isExit = recipe.find(rc => rc.recipe_id === c.recipe_id);
    if (!isExit) {
      setRecipe([...recipe, c]);
      increaseCookCount();
    } else {
      setShowToast(true);
      setTimeout(() => {
        setShowToast(false); // Hide toast after 2 seconds
      }, 2000)
    }
  }

  const increaseCookCount = () => {
    setCookCount(cookCount + 1);
  }

  const decreaseCookCount = () =>{
    setCookCount(cookCount - 1);
  }

  const increaseCurrCookCount = () =>{
    setCurrCookCount(currCookCount + 1);
  }

  const hamdelRemove = (r) => {
    setCurrCook([...currCook, r]);
    const newRecipe = recipe.filter(item => item.recipe_id !== r.recipe_id);
    setRecipe(newRecipe);
    setTime(totalTime + r.preparing_time)
    setCalorie(totalCalories + r.calories)
    decreaseCookCount();
    increaseCurrCookCount();
  }




  return (
    <>

      <Header></Header>
      <Banner></Banner>
      <RecipeTitle></RecipeTitle>

      <div className="flex flex-col lg:flex-row gap-10 mt-12 p-3">
        <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-5 ">
          {showToast && (
          // toast-top toast-center
            <div className="toast toast-top toast-end z-10">
              <div className="alert alert-info">
                <span>Recipe already added!</span>
              </div>
            </div>
          )}
          {


            recipes.map(recipe => <Recipes key={recipe.recipe_id} recipe={recipe} handelCook={handelCook}></Recipes>)
          }
        </div>
        <div className="lg:w-[40%] border border-[#28282833] rounded-xl">
          <div>
            <div className='text-center mt-10'>
              <h1 className='text-2xl font-semibold'>Want to cook: {cookCount}</h1>

            </div>
            <hr className='w-[60%] mx-auto mt-2' />

            <div className="overflow-x-auto">
              <table className="table ">
                <thead>
                  <tr >
                    <th></th>
                    <th>Name</th>
                    <th>Time</th>
                    <th>Calories</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody className='bg-base-200 mb-2'>

                  {
                    recipe.map((item, index) => (

                      <tr key={index}>
                        <th>{index + 1}</th>
                        <td>{item.recipe_name}</td>
                        <td>{item.preparing_time} minutes</td>
                        <td>{item.calories} calories</td>
                        <td><button onClick={() => hamdelRemove(item)} className='btn bg-[#0BE58A] rounded-full hover:bg-[#0BE58A]'>Preparing</button></td>
                      </tr>
                    ))
                  }
                </tbody>
              </table>
            </div>

          </div>
          <div>
            <div className='text-center'>
              <h1 className='text-2xl font-semibold mt-7'>Currently cooking: {currCookCount}</h1>
            </div>
            <hr className='w-[60%] mx-auto mt-2' />

            <div className="overflow-x-auto">
              <table className="table">
                <thead>
                  <tr>
                    <th></th>
                    <th>Name</th>
                    <th>Time</th>
                    <th>Calories</th>
                  </tr>
                </thead>
                <tbody className='bg-base-200'>

                  {
                    currCook.map((item, index) => (

                      <tr key={index}>
                        <th>{index + 1}</th>
                        <td>{item.recipe_name}</td>
                        <td>{item.preparing_time} minutes</td>
                        <td>{item.calories} calories</td>
                        
                      </tr>
                    ))
                  }
                  
                </tbody>
                
              </table>
              <div className='flex gap-10 ml-10 mt-6 font-semibold'>
                <p >Total Time = <br />{totalTime} minutes</p>
                <p >Total calories = <br /> {totalCalories} calories</p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default App
