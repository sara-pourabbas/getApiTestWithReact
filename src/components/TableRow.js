import React from "react";

export default (props)=>{
    return(
        <tr >
            <td className='text-center' >{props.fileNumber}</td>
            <td className='text-center' >{props.submittionDate}</td>
            <td className='text-center'>{props.submitterUser}</td>
            <td className='text-center'>{props.inviter}</td>
            <td className='text-center'>{props.roomCount}</td>
        </tr>
    )
}