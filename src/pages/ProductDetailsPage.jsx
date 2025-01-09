import { useParams } from "react-router-dom";
import { useGet } from "../hooks/useGet";

export function ProductDetailsPage() {

  const { id } = useParams();

  const { data, isLoading, error } = useGet(
    `https://api.mediehuset.net/bakeonline/products/${id}`
  );


  return <h2>{data?.item.title}</h2>;
}
