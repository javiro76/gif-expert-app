

import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";
import { GifItem } from "./GifItem";


// import { useFetchGifs } from "../hooks/useFetchGifs";

import propTypes from 'prop-types';



export const GifGrid = ({category}) => {

    // const { images, isLoading } = useFetchGifs( category );

    // console.log({images, isLoading});

    const [images, setImages ] = useState([]);

    const getImages = async() => {
        const newImages = await getGifs( category );
        setImages( newImages );
    };

    useEffect( () => {
        getImages();
    }, []);
    


    return (
        <>
            <h3>{category}</h3>

            <div className="card-grid">
                {
                    images.map((image) => (
                        <GifItem key={image.id}
                            {...image}
                        />
                    ))          
                }
            </div>
        </>
    )
}

GifGrid.propTypes = {
    category: propTypes.string.isRequired
}
