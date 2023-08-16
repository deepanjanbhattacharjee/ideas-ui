'use client'
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

const createPost = ({classes})=>{

    const[ideaImg,setIdeaImg] = useState('')
    const[ideaFileType,setFileType] =useState('')


    const saveImage=(e)=>{
        setFileType(e.target.files[0].type)
        let reader = new FileReader() 
        debugger
        reader.readAsDataURL(e.target.files[0])
        reader.onload = () => {      
            setIdeaImg(reader.result)
        }

    }

    let containerClass = classes.containerClass?classes.containerClass:'flex flex-col'

    return(
        <>
            <div className={containerClass}>
                <div className='flex'>
                    <FormControlLabel control={<Checkbox />} label="Need Sponsors" labelPlacement="end"/>
                    <FormControlLabel control={<Checkbox />} label="Need suggestions" labelPlacement="end"/>
                    <FormControlLabel control={<Checkbox />} label="It's a survey, if my idea is good to go or not" labelPlacement="end"/>
                </div>
                <div className='flex justify-between'>
                    <div className='flex flex-col w-6/12'>
                        <TextField
                            id="idea-title"
                            placeholder="Give a title..."
                            className='my-2'
                        />
                        <TextField
                            id="idea-tags"
                            placeholder="Add hashtags..."
                            className='my-2'
                        />
                        <TextField
                            id="idea-desc"
                            multiline
                            rows={6}
                            placeholder="Scribble down your idea..."
                            className='my-2'
                        />
                    </div>
                    <div className='flex flex-col w-5/12'>
                        <input type="file" accept='.png, .jpg, .docx, .pdf, .xlsx' className='rounded-t-lg rounded-b-lg h-10' onChange={saveImage}></input>
                        {(ideaFileType=="image/jpeg" || ideaFileType=="image/jpg" || ideaFileType=="image/png") &&  <img src={ideaImg} className="w-full"></img>}
                        <Button className='absolute bottom-[4.7rem] right-[2rem] w-1/3' variant="outlined" color="success" type="button">Add</Button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default createPost;