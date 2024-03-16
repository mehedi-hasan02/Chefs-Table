import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faFire } from '@fortawesome/free-solid-svg-icons';

const Recipes = ({ recipe,handelCook}) => {
    // console.log(recipe);
    return (
        <div>
            <div className="card bg-base-100 shadow-xl border border-[#28282833] p-5 space-y-5">
                <figure><img className='h-[200px] w-full' src={recipe.recipe_image} alt="Shoes" /></figure>
                <div className="space-y-4">
                    <h2 className="card-title">{recipe.recipe_name}</h2>
                    <p className='text-[#878787]'>{recipe.short_description}</p>
                    <hr />
                    <p className='text-xl font-[500]'>Ingredients: {recipe.ingredients.length}</p>
                    
                        {recipe.ingredients.slice(0, 3).map((item, index) => (
                            <li className='text-[#878787] ml-2' key={index}>{item}</li>
                        ))}
                    
                    <hr />
                    <div className='flex gap-10 text-[#282828CC]'>
                        <p ><span><FontAwesomeIcon icon={faClock} /></span> {recipe.preparing_time} minutes</p>
                        <p><span><FontAwesomeIcon icon={faFire} /></span> {recipe.calories} calories</p>
                    </div>
                    <div className="card-actions">
                        <button onClick={()=>handelCook(recipe)}  className="btn bg-[#0BE58A] px-6 rounded-full">Want to Cook</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Recipes;
