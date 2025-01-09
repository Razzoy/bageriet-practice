import { useState } from "react";
import { ProductMenu } from "../components/ProductMenu/ProductMenu";
import { useGet } from "../hooks/useGet";
import { GridContainer } from "../components/GridContainer/GridContainer";
import { ProductCard } from "../components/ProductCard/ProductCard";
import { ProductPageWrapper } from "../components/ProductPageWrapper/ProductPageWrapper";

export function ProductPage() {
  const [id, setId] = useState(1);
  const { data, isLoading, error } = useGet(
    `https://api.mediehuset.net/bakeonline/categories/${id}`
  );

  console.log("Produkter", data);

  return (
    <>
      <h2>{data?.item.title}</h2>
      <ProductPageWrapper>
        <ProductMenu setId={setId} />
        <GridContainer columns={4}>
          {data?.item.products.map((product) => {
            return (
              <ProductCard
                key={product.title}
                imgSrc={product.image.fullpath}
                numberComments={product.num_comments}
                title={product.title}
                text={product.teaser}
                id={product.id}
              />
            );
          })}
        </GridContainer>
      </ProductPageWrapper>
    </>
  );
}
