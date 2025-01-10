import { useParams } from "react-router-dom";
import { useGet } from "../hooks/useGet";
import { useContext, useEffect } from "react";
import { Section } from "../components/Section/Section";
import { Breadcrumb } from "../components/Breadcrumb/Breadcrumb";
import { ProductHeading } from "../components/ProductHeading/ProductHeading";
import { ProductDescription } from "../components/ProductDescription/ProductDescription";
import { GridContainer } from "../components/GridContainer/GridContainer";
import { IngredientList } from "../components/IngredientList/IngredientList";
import { CommentInput } from "../components/CommentInput/CommentInput";
import { UserContext } from "../context/userContext";
import { CommentCard } from "../components/CommentCard/CommentCard";

export function ProductDetailsPage() {
  const { category, id } = useParams();

  const {userData} = useContext(UserContext);

  const { data, isLoading, error } = useGet(
    `https://api.mediehuset.net/bakeonline/products/${id}`
  );

  const comment = useGet(
    `https://api.mediehuset.net/bakeonline/comments/${id}`,
    userData?.access_token
  );

  console.log("Produkt", data);
  console.log("Comments", comment);
  

  useEffect(() => {
    document.title = `${data?.item.title}`;
  }, [data]);

  return (
    <>
      <Section width="50%">
        <Breadcrumb
          content={`produkter > ${category !== "undefined" ? category : ""} > ${
            data?.item.title
          }`}
        />
        <ProductHeading
          productTitle={data?.item.title}
          productSubtitle={category !== "undefined" ? category : ""}
        />
      </Section>
      <Section width="50%">
        <GridContainer columns={2}>
          <ProductDescription
            textContent={data?.item.description}
            imgSrc={data?.item.image.fullpath}
          />

          {data && <IngredientList ingredients={data?.item.ingredients} />}
        </GridContainer>
        <CommentInput/>
        {userData ? comment?.data?.items?.map((item) => (
          <CommentCard key={item.id} imgSrc='' profileName={item.user.firstname + ' ' + item.user.lastname} publishedDate={item.created} commentText={item.comment} />
        )) : <h4>Du skal være logget ind for at kommentere</h4>}
      </Section>
    </>
  );
}