'use client'
import {React} from "react";
import ReactDOM from "react-dom";
import IconButton from '@mui/material/IconButton';
import CancelRoundedIcon from '@mui/icons-material/CancelRounded';

const modal = ({onClose, children, title,classes})=>{

    const modalContainerClass = classes.modalContainerClass?classes.modalContainerClass:'absolute z-[999]'
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
        <div className={modalContainerClass}>
            <div className="flex justify-between">
                <span className={spanClass}>{title}</span>
                <IconButton color="primary" className="p-0" onClick={(e)=>handleCloseClick(e)}>
                    <CancelRoundedIcon />
                </IconButton>
            </div>
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