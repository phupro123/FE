import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getListProduct } from '../../redux/Product/productAction';

const Home = ({ title }) => {
    
    const dispatch = useDispatch();
    const products = useSelector(((state)=>state.product.products))
    console.log(products)
    useEffect(() => {
        document.title = title;
        dispatch(getListProduct());
    }, []);
   
    return (
        <div className="w-300 mx-auto flex flex-col space-y-24 py-24">
            
           
        </div>
    );
};
export default Home;
