import Ingredient from './Ingredient';

const IngredientList = ({ ingredients, addToBurger }) => {
  return (
    <ul>
      {ingredients.map((ingredient) => (
        <Ingredient 
          key={ingredient.name}
          ingredient={ingredient}
          onAdd={addToBurger}
          isRemovable={false}
        />
      ))}
    </ul>
  );
};

export default IngredientList;
