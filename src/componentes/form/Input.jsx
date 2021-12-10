import React, { useState } from "react";

export default (props) => {
    const [nome, setNome] = useState('Zélezinn')
    return (
        <>
            {/* <input type="text" value={nome} />
            <input type="text" value={null} /> */}
            <h3>{nome}</h3>
            <input type="text" value={nome} 
                onChange={e => setNome(e.target.value)} />
        </>
    );
};