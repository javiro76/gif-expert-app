


import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

import propTypes from 'prop-types';




export const GifGrid = ({category}) => {

    const { images, isLoading } = useFetchGifs( category );

    console.log({images, isLoading});




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
