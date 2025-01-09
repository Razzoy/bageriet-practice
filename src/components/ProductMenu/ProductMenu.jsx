import { useEffect, useState } from "react";
import { useGet } from "../../hooks/useGet";
import style from "./ProductMenu.module.scss";

export function ProductMenu({ setId }) {

  const [activeId, setActiveId] = useState(null);

  const handleClick = (id) => {
    setActiveId(id);
    setId(id);
  };

  const { data, isLoading, error } = useGet(
    "https://api.mediehuset.net/bakeonline/categories"
  );

  useEffect(() => {
    if (!isLoading && data?.items.length > 0) {
      const firstCategoryId = data.items[0].id;
      setActiveId(firstCategoryId);
      setId(firstCategoryId);
    }
  }, [isLoading]);

  

  return (
    <aside className={style.sideBar}>
      <ul>
        {!isLoading &&
          data?.items.map((item) => {
            return (
              <li
                key={item.id}
                onClick={() => handleClick(item.id)}
                className={activeId === item.id ? style.active : ''}
              >
                {item.title}
              </li>
            );
          })}
      </ul>
    </aside>
  );
}
