import React from "react";
import * as FaIcons from 'react-icons/fa';

export const Verdiene = ({gjoremol,slettAktivitet}) => {
    
    return gjoremol.map(gjoremol=>(
        
        <tr key={gjoremol.aktivitet}>
            <td>{gjoremol.klokkeslett}</td>
            <td>{gjoremol.aktivitet}</td>
            <td className="delete" onClick={()=>slettAktivitet(gjoremol.aktivitet)}><FaIcons.FaTrash/></td>            
        </tr>
    ))
}


