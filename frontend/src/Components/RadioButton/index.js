import React from "react";
import { withStyles } from '@material-ui/core/styles'
import Radio from '@material-ui/core/Radio'

import './style.css'

function RadioButton({selectedValue, handleChange}){

    const CustomRadio = withStyles({
        root:{
            color: '#7bc9f7',
            '&$checked':{
                color: '#24a4ee'
            },
        },
        checked: {},
    })((props) => <Radio color="default" {...props}/>)

    return(
        <div className="radioOptions">
            <div>
                <CustomRadio
                    checked={selectedValue === 'all'}
                    onChange={e => handleChange(e.target)}
                    value="all"
                />
                <span>Todos</span>
            </div>

            <div>
                <CustomRadio 
                    checked={selectedValue === 'true'}
                    onChange={e => handleChange(e.target)}
                    value="true"
                />
                <span>Prioridade</span>
            </div>

            <div>
                <CustomRadio 
                    checked={selectedValue === 'false'}
                    onChange={e => handleChange(e.target)}
                    value="false"
                />
                <span>Normal</span>
            </div>
        </div>
       
    )
}

export default RadioButton



// import * as React from 'react';
// import Radio from '@mui/material/Radio';

// export default function RadioButtons() {
//     const [selectedValue, setSelectedValue] = React.useState('a');

//     const handleChange = (event) => {
//         setSelectedValue(event.target.value);
//     };

//     return (
//         <div>
//             <Radio
//                 checked={selectedValue === 'a'}
//                 onChange={handleChange}
//                 value="a"
//                 name="radio-buttons"
//                 inputProps={{ 'aria-label': 'A' }}
//             />
//             <Radio
//                 checked={selectedValue === 'b'}
//                 onChange={handleChange}
//                 value="b"
//                 name="radio-buttons"
//                 inputProps={{ 'aria-label': 'B' }}
//             />
//         </div>
//     );
// }
