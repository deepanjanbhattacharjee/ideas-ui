'use client'
import {React} from "react";
import ReactDOM from "react-dom";

const modal = ({onClose, children, title,classes})=>{

    const wrapperClass = classes.wrapperClass?classes.wrapperClass:'absolute z-[999]'
    const spanClass = classes.spanClass?classes.spanClass:'text-base'

    const handleCloseClick = (e) => {
        e.preventDefault();
        onClose();
    };

    const backDrop =(
        <div className="bg-slate-100/75 absolute z-[998] w-full h-full" onClick={(e)=>handleCloseClick(e)}>
        </div>
    )

    const modalContent = (
        <div className={wrapperClass}>
            <span className={spanClass}>{title}</span>
            {children}
        </div>
    )

    return(
        <>
            {ReactDOM.createPortal(backDrop,document.getElementById('backdrop-root'))}
            {ReactDOM.createPortal(modalContent,document.getElementById('modal-root'))}
        </>
    ) 
    
}

export default modal