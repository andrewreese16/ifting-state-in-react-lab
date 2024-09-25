import Ingredient from './Ingredient';
import '../App.css';

const BurgerStack = ({ stack, removeFromBurger }) => {
  return (
    <main>
      <section>
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
      </section>
      </main>
  );
};

export default BurgerStack;
  