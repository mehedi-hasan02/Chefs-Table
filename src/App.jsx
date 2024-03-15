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

  useEffect(() => {
    const allRecipes = async () => {
      const res = await fetch('../public/fakeData.json');
      const data = await res.json();
      setRecipes(data);
    }

    allRecipes()

  }, [])

  const handelCook = (c) => {
    const isExit = recipe.find(rc => rc.recipe_id === c.recipe_id);
    if (!isExit) {
      setRecipe([...recipe, c]);
      incrementCookCount();
    } else {
      setShowToast(true);
      setTimeout(() => {
        setShowToast(false); // Hide toast after 2 seconds
      }, 2000)
    }
  }

  const incrementCookCount = () => {
    setCookCount(cookCount + 1);
  }

  const hamdelRemove = (r) => {
    setCurrCook([...currCook, r]);
    const newRecipe = recipe.filter(item => item.recipe_id !== r.recipe_id);
    setRecipe(newRecipe);
  }

  // console.log(currCook);

  let totalTime = 0;
  let totalCalories = 0;


  return (
    <>

      <Header></Header>
      <Banner></Banner>
      <RecipeTitle></RecipeTitle>

      <div className="flex gap-10 mt-12">
        <div className="flex-1 grid grid-cols-2 gap-5 ">
          {showToast && (
            <div className="toast toast-top toast-center">
              <div className="alert alert-info">
                <span>Recipe already added!</span>
              </div>
            </div>
          )}
          {

            recipes.map(recipe => <Recipes key={recipe.id} recipe={recipe} handelCook={handelCook}></Recipes>)
          }
        </div>
        <div className="w-[40%] border border-[#28282833] rounded-xl">
          <div>
            <div className='text-center mt-10'>
              <h1 className='text-2xl font-semibold'>Want to cook: {cookCount}</h1>

            </div>
            <hr className='w-[60%] mx-auto mt-2' />
            <div className='flex gap-20 ml-14 mt-5'>
              <p>Name</p>
              <p>Time</p>
              <p>Calories</p>
            </div>
            <div>
              {
                recipe.map((item, index) => (

                  <div key={index} className='flex gap-10 bg-base-300 my-2 py-3 items-center rounded-xl'>

                    <div className='flex'>
                      <div className='mt-4 ml-3'>
                        <p>{index + 1}</p>
                      </div>
                      <div className='flex gap-20 ml-10'>
                        <div className='w-[50px] mt-3'>

                          <p>{item.recipe_name}</p>
                        </div>
                        <div className='w-[50px] mt-3'>
                          <p>{item.preparing_time} minutes</p>
                        </div>
                        <div className='w-[50px] mt-3'>
                          <p>{item.calories} calories</p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <button onClick={() => hamdelRemove(item)} className='btn bg-[#0BE58A] rounded-full hover:bg-[#0BE58A]'>Preparing</button>
                    </div>
                  </div>

                ))
              }
            </div>
          </div>
          <div>
            <div className='text-center'>
              <h1 className='text-2xl font-semibold mt-7'>Currently cooking: 02</h1>
            </div>
            <hr className='w-[60%] mx-auto mt-2' />
            <div className='flex justify-around mt-5'>
              <p>Name</p>
              <p>Time</p>
              <p>Calories</p>
            </div>
            <div>
              {
                currCook.map((item, index) => (
                  <div key={index}>
                    <div className='flex gap-10 bg-base-300 my-2 py-3 items-center rounded-xl'>
                      <div className='flex'>
                        <div className='mt-4 ml-3'>
                          <p>{index + 1}</p>
                        </div>
                        <div className='flex gap-20 ml-10'>
                          <div className='w-[50px] mt-3'>

                            <p>{item.recipe_name}</p>
                          </div>
                          <div className='w-[50px] mt-3'>
                            <p>{item.preparing_time} minutes</p>
                          </div>
                          <div className='w-[50px] mt-3'>
                            <p>{item.calories} calories</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <p>Total Time = {totalTime += item.preparing_time} minutes</p>
                      <p>Total calories = {totalCalories += item.calories}</p>
                    </div>
                  </div>


                ))
              }
            </div>
          </div>

        </div>

      </div>

    </>
  )
}

export default App
