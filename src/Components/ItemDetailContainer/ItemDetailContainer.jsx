import { useEffect } from "react";
import { useParams } from "react-router-dom"

export const ItemDetailContainer = () => {
    const { category } = useParams();
    const [products, setProducts ] = UseState([])
    const [isLoading, setIsLoading ] = UseState([true]);


    useEffect (() => {
        getProducts()
        .then((resp) => setProducts(resp))
        .catch((error) => console.log(error));
    }, []);


  return (
    { isLoading ? <h2> </h2> }
  );
}:
