import { Button, Container, Grid, Paper } from "@material-ui/core";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { addToCart } from "../../../../Store/Actions/CartAction";
import { selectedProduct } from "../../../../Store/Actions/ProductsAction";
import NavBar from "../../../NavBar/NavBar";
import ProductDetailsHeader from "./ProductDetailsHeader";



const ProductDetails = () => {
  const { id } = useParams()
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(selectedProduct(id))
  }, [dispatch, id])
  const product = useSelector(state => state.products.selectedProduct)

  const handleAddToCart = (pd) => {
    dispatch(addToCart(pd))
  }
  return (
    <>
      <NavBar />
      <ProductDetailsHeader product={product}/>
      <Container>
        <Paper className="productDetails">
          <Grid
            container
            justify="center"
            alignItems="center">
            <Grid item sm={5} md={6} align="center">
              <img src={product.image} alt="" />
            </Grid>
            <Grid item sm={7} md={6} className="p-5 ">
              <h2>{product.title}</h2>
              <p><b>category: </b>{product.category}</p>
              <h6>Description</h6>
              <p>{product.description}</p>
              <h4 className="pb-4"><b>Price: </b>${product.price}</h4>
              <Button color="secondary" variant="contained" className='add-to-cart' onClick={() => handleAddToCart(product)}>Add to cart</Button>
            </Grid>
          </Grid>
        </Paper>

      </Container>
    </>



  );
};

export default ProductDetails;