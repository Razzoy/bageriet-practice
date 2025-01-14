import { useParams } from "react-router-dom";
import { useGet } from "../hooks/useGet";
import { useContext, useEffect, useState } from "react";
import { Section } from "../components/Section/Section";
import { SectionTitle } from "../components/SectionTitle/SectionTitle";
import { Breadcrumb } from "../components/Breadcrumb/Breadcrumb";
import { ProductHeading } from "../components/ProductHeading/ProductHeading";
import { ProductDescription } from "../components/ProductDescription/ProductDescription";
import { GridContainer } from "../components/GridContainer/GridContainer";
import { IngredientList } from "../components/IngredientList/IngredientList";
import { CommentInput } from "../components/CommentInput/CommentInput";
import { UserContext } from "../context/userContext";
import { CommentCard } from "../components/CommentCard/CommentCard";
import { convertTimeStampToDate } from "../helpers/convertTimeStampToDate";
import { Pagination } from "../components/Pagination/Pagination";

export function ProductDetailsPage() {
  const { category, id } = useParams();

  const { userData } = useContext(UserContext);
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(3);
  const [pageCount, setPageCount] = useState(1);
  const [commentStatus, setCommentStatus] = useState();

  const { data, isLoading, error } = useGet(
    `https://api.mediehuset.net/bakeonline/products/${id}`
  );

  const comment = useGet(
    `https://api.mediehuset.net/bakeonline/comments/${id}`,
    userData?.access_token,
    commentStatus
  );

  const pageForward = () => {
    if (endIndex < comment?.data?.items.length) {
      setStartIndex((prev) => prev + 3);
      setEndIndex((prev) => prev + 3);
      setPageCount((prev) => prev + 1);
    }
  };

  const pageBackward = () => {
    if (startIndex > 0) {
      setStartIndex((prev) => prev - 3);
      setEndIndex((prev) => prev - 3);
      setPageCount((prev) => prev - 1);
    }
  };

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

        {userData ? (
          <GridContainer>
            <CommentInput productID={id} setCommentStatus={setCommentStatus} />
            {comment?.data?.items?.slice(startIndex, endIndex).map((item) => {
              return (
                <CommentCard
                  key={item.id}
                  imgSrc=""
                  profileName={item.user.firstname + " " + item.user.lastname}
                  publishedDate={convertTimeStampToDate(item.created)}
                  commentText={item.comment}
                />
              );
            })}
            <Pagination pageForward={pageForward} pageBackward={pageBackward} pageCount={pageCount}/>
          </GridContainer>
        ) : (
          <SectionTitle title="Du skal være logget ind for at kommentere" />
        )}
      </Section>
    </>
  );
}
