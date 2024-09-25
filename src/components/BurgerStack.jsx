import Ingredient from './Ingredient';

const BurgerStack = ({ stack, removeFromBurger }) => {
  return (
    <ul>
      {stack.length === 0 ? (
        <li>No Ingredients</li>
      ) : (
        stack.map((ingredient, index) => (
          <Ingredient 
            key={index}
            ingredient={ingredient}
            onRemove={removeFromBurger}
            isRemovable={true}
          />
        ))
      )}
    </ul>
  );
};

export default BurgerStack;
  