import React, {useState, useEffect} from 'react';
import './App.css'

function Checkbox(props){

    const [ checked, setChecked] = useState(false)

    function toggle(){
        setChecked(!checked)
    }

    const checkedClass = checked ? 'checked' : '';

    const containerClass = `checkbox ${checkedClass}`.trim()



    return (
        <div className={containerClass} onClick={toggle} />
    )
}

export default Checkbox;