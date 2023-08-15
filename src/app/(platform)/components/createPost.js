'use client'
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

const createPost = ()=>{

    const[ideaImg,setIdeaImg] = useState('')


    const saveImage=(e)=>{
        let reader = new FileReader() 
        reader.readAsDataURL(e.target.files[0])
        reader.onload = () => {      
            setIdeaImg(reader.result)
        }

    }

    return(
        <>
            <div className='flex flex-col'>
                    <FormGroup className='flex'>
                        <FormControlLabel control={<Checkbox />} label="Need Sponsors" />
                        <FormControlLabel control={<Checkbox />} label="Need suggestions" />
                        <FormControlLabel control={<Checkbox />} label="It's a survey, if my idea is good to go or not" />
                    </FormGroup>
                <div className='flex'>
                    <TextField
                        id="outlined-multiline-static"
                        label="Multiline"
                        multiline
                        rows={6}
                        maxRows = {10}
                        defaultValue="Default Value"
                    />
                    <div className='flex flex-col'>
                        <input type="file" accept='.png, .jpg, .docx, .pdf, .xlsx' className='rounded-t-lg rounded-b-lg h-10' onChange={saveImage}></input>
                        <img src={ideaImg}></img>
                        <Button variant="outlined" color="success" type="button">Add</Button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default createPost;