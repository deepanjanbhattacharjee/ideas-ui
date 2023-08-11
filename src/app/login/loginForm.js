import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useForm } from "react-hook-form";
import SocialMediaLogin from './socialMediaLinks';
import { useRouter } from 'next/navigation'

const loginForm = ()=>{
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
        
    const router = useRouter()

    const onSubmit = data => {
        router.push('/platform')
    };


    return(
        <div className='absolute top-[20%] right-[8%] flex flex-col justify-evenly h-[25rem] w-[25rem]'>  
            {/* <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col"> */}
                <TextField id="standard-basic" label="Username" variant="standard" />
                <TextField type="password" id="standard-basic" label="Password" variant="standard" />
                <Button variant="outlined" color="success" onClick={onSubmit}>Login</Button>
            {/* </form> */}
            <SocialMediaLogin ></SocialMediaLogin>
        </div>
    )
}

export default loginForm