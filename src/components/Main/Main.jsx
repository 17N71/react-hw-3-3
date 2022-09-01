import React from 'react';
import RideAttributes from "./RideAttributes/RideAttributes.jsx";
import Productes from "./Productes/Productes.jsx";

function Main(props) {
    return (
        <main>
            <RideAttributes />
            <Productes />
        </main>
    );
}

export default Main;