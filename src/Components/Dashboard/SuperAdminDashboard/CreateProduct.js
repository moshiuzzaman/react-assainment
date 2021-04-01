import React from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { createProduct } from '../../../Store/Actions/ProductsAction';
import { Alert } from '@material-ui/lab';
import { Avatar} from '@material-ui/core';
import { IoMdCreate } from "react-icons/io";


const CreateProduct = ({ setExactRoute }) => {
    const dispatch = useDispatch()
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => {
        dispatch(createProduct(data))
        setExactRoute("Products")
    }
    return (
        <Container className="updateUser" component="main" maxWidth="xs">
            <div
                align="center">
                <Avatar>
                    <IoMdCreate />
                </Avatar>
                <Typography
                    component="h1"
                    variant="h5">
                    Create a Product
                 </Typography>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="">Product Title</label>
                <input type="text" placeholder="title" name="title" ref={register({ required: true })} />
                <label htmlFor="">Product Price</label>
                <input type="number" placeholder="price" name="price" ref={register({ required: true })} />
                <label htmlFor="">Product category</label>
                <input type="text" placeholder="category" name="category" ref={register({ required: true })} />
                <label htmlFor="">Product Image Url</label>
                <input type="text" placeholder="image Url" name="image" ref={register({ required: true })} />
                <label htmlFor="">Product Description</label>
                <textarea name="description" placeholder="Description" ref={register({ required: true })} />
                {
                    errors.title ? <Alert severity="error">Title fill is required</Alert> :
                        errors.price ? <Alert severity="error">Price fill is required</Alert> :
                            errors.category ? <Alert severity="error">Category fill is required</Alert> :
                                errors.image ? <Alert severity="error">Image Url fill is required</Alert> :
                                    errors.description && <Alert severity="error">Description fill is required</Alert>
                }
                <input type="submit" />
            </form>
        </Container>
    );
};

export default CreateProduct;