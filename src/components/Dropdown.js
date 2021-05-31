import React, {useState,useEffect,useRef} from 'react';

const Dropdown = ({ label,options, selected, onSelectedChange }) => {
    const[open, setOpen] = useState(false);
    const ref = useRef();


    useEffect(() =>{
        document.body.addEventListener('click', (event)=> {
            if(ref.current.contains(event.target)){
                return;
            }

            setOpen(false);
            
        });
    },[]);
    const renderedOption = options.map((option) => {
        if (option.value === selected.value) {
            return null;
        }
        return (
            <div key ={option.value} className="item" onClick={() => onSelectedChange(option)} style={{ color:`${option.value}`}}>
                {option.label}
            </div>
        );
    });
    
    return (
        <div ref={ref} className="ui form">
            <div className="field">
                <label className="label">{label}</label>
                <div onClick={()=> setOpen(!open)} className={`ui selection dropdown ${open? 'visible active' : ''}`}>
                    <i className="dropdown icon"></i>
                    <div className="text">{selected.label}</div>
                    <div className={`menu ${open ? 'visible transition' : ''}`}>
                        {renderedOption}
                        
                    </div>
                </div>
            </div>
            <p style={{ color:`${selected.value}`}}>{selected.label}</p>
        </div>
    )
};

export default Dropdown;