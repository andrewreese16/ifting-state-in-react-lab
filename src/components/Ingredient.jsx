const Ingredient = ({ ingredient, onAdd, onRemove, isRemovable }) => {
    return (
      <li>
        <span style={{ backgroundColor: ingredient.color }}>{ingredient.name}</span>
        {isRemovable ? (
          <button onClick={() => onRemove(ingredient)}>X</button>
        ) : (
          <button onClick={() => onAdd(ingredient)}>+</button>
        )}
      </li>
    );
  };
  
  export default Ingredient;