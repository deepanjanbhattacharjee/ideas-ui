'use client'
import { useState } from 'react';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import IconButton from '@mui/material/IconButton';
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import NotificationsActiveRoundedIcon from '@mui/icons-material/NotificationsActiveRounded';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import Modal from '../../components/modal';
import { usePathname  } from 'next/navigation';
import CreatePost from './createPost';

const topNavBar = ()=>{

    const [showModal,setModalVisibility] = useState(false);

    let pathName = usePathname();
    pathName = pathName.slice(1);
    pathName = pathName.charAt(0).toUpperCase() + pathName.slice(1);

    let placeHolder = ''
    if(pathName == "Dashboard"){
        placeHolder = "Search for an idea..."
    }else if(pathName == "Forum"){
        placeHolder = "Search for a chat..."
    }else if(pathName == "Circle"){
        placeHolder = "Search for a group..."
    }else if(pathName == "Profile"){
        placeHolder = "Search for a detail..."
    }

    const openPostModal =()=>{
        setModalVisibility(true)
    }

    const closePostModal =()=>{
        setModalVisibility(false)
    }

    const modalClasses = {
        modalContainerClass : 'w-6/12 h-2/3 absolute left-[25%] top-[18%] z-[999] p-8 rounded-2xl bg-white',
        spanClass: 'text-lg text-header-text font-bold'
    }

    const createPostClasses = {
        containerClass: 'flex flex-col justify-evenly h-full'
    }

    return(
        <div className="flex justify-between h-[10%]">
            <span className="text-header-text font-bold w-2/12">{pathName}</span>
            <div className='w-6/12'>
                <TextField id="standard-basic" placeholder={placeHolder}
                InputProps={{
                    startAdornment: (
                    <InputAdornment position="start">
                        <SearchRoundedIcon />
                    </InputAdornment>
                    ),
                    endAdornment:(
                        <InputAdornment position="end">
                             <IconButton color="primary">
                                 <ArrowForwardRoundedIcon />
                            </IconButton>
                        </InputAdornment>
                    )
                }}
                variant="standard" 
                className='w-2/3'/>
            </div>
            <div className='flex justify-between w-1/12 items-start'>
                {pathName == "Dashboard" && 
                            <IconButton color="primary" onClick={openPostModal}>
                            <AddCircleRoundedIcon />
                       </IconButton>
                }
            <IconButton color="primary">
                 <NotificationsActiveRoundedIcon />
            </IconButton>
            <IconButton color="primary">
                 <SettingsRoundedIcon />
            </IconButton>
            </div>
            {showModal && <Modal onClose={()=>setModalVisibility(false)} title="Post your idea" classes={...modalClasses}>
                    <CreatePost classes={...createPostClasses}></CreatePost>
                </Modal>}
        </div>
    )
}

export default topNavBar;