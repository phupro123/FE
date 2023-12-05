import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const Home = ({ title }) => {
    
    

    useEffect(() => {
        document.title = title;
    }, []);
   
    return (
        <div className="w-300 mx-auto flex flex-col space-y-24 py-24">
            
           
        </div>
    );
};
export default Home;
