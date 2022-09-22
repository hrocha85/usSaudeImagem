import React, { useContext } from 'react';
import { LaudosContext } from '../../../context/LuadosContext';


function Tireoide() {
    const { laudoPrin, signIn, setLaudoPrin } = useContext(LaudosContext);

    return (
        <div>
            {laudoPrin}
            <p>estou no Tereoide</p>
        </div>
    )
}

export default Tireoide;