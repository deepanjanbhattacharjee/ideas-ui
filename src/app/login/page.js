'use client'
import Image from 'next/image';
import Logo from '/public/ideas.png';
import LoginArt from '/public/login/undraw_thought_process_re_om58.svg'
import LoginForm from './loginForm';

const login = ()=>{

    return(
        <div id="login-flow" className="h-full w-full bg-login-bg px-12 py-12">
            <div className="bg-white rounded-2xl h-full w-4/5 m-auto px-8 py-8 flex relative">
                <div className="">
                    <Image
                    src={Logo}
                    width={100}
                    height={100}
                    alt='Logo'
                    className="cursor-pointer"
                    />
                    <Image
                    src={LoginArt}
                    width={800}
                    height={800}
                    alt="clip-art"
                    className="mt-24"
                    />
                </div>
                <LoginForm></LoginForm>
            </div>
        </div>
    )
}

export default login;