import style from "./IngredientList.module.scss";

export function IngredientList({ ingredients }) {
  return (
    <aside className={style.ingredientList}>
      <b>Ingredienser</b>
      <ul>
        {ingredients.map((item) => {
          return (
            <li key={item.ingredient_title}>
              <p>
                {item.ingredient_title} - {item.amount} {item.unit_abbr}
              </p>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}