import Image from 'next/image';
import ProfilePic from '../../../../public/platform/profilePic.jpg'
import IdeaPic from '../../../../public/login/undraw_Thought_process_re_om58.png'
import IdeaTags from './ideaTags';
import NorthRoundedIcon from '@mui/icons-material/NorthRounded';
import SouthRoundedIcon from '@mui/icons-material/SouthRounded';


const ideaCard = (props)=>{

    const tagList = [
        {   
            id:1,
            title: 'idea'
        },
        {
            id:2,
            title:'entrepreneur'
        },
        {
            id:3,
            title:'business'
        },
        {
            id:4,
            title:'future'
        },
        {
            id:5,
            title:'growth'
        },
    ]

    const notationList=[
        {   
            id: 1,
            title: 'I need sponsor to start this'
        },
        {
            id: 2,
            title: 'I need suggestions from experts'
        },
        {
            id: 3,
            title: "It's a survey, if my idea is good to go or not"
        }
    ]

    return(
        <div className="flex flex-col my-8" key={props.id}>
            <div className='flex justify-between'>
                <div className='flex w-2/12 items-center'>
                    <Image
                        src={ProfilePic}
                        width={35}
                        height={35}
                        alt="Profile Pic"
                        className='m-auto rounded-[50px]'
                        />
                    <span className='text-slate-400'>John Doe</span>
                </div>
                <div className='flex w-1/12'>
                    <NorthRoundedIcon></NorthRoundedIcon>
                    <SouthRoundedIcon></SouthRoundedIcon>
                </div>
            </div>
            <div className=''>
                    <Image
                        src={IdeaPic}
                        width={200}
                        height={200}
                        alt="Idea Pic"
                        className='m-auto rounded-[40px]'
                        />
            </div>
            <div className='flex flex-col'>
                <span className='text-slate-400	font-semibold'>Idea 1</span>
                <div className='flex'>
                    {notationList.map((notation)=>{
                        return <li className='text-slate-400 text-xs mr-4' key={notation.id}>{notation.title}</li>
                    })}
                </div>
                <div className='flex'>
                    {tagList.map(tag=>{
                        return <IdeaTags tagName={tag.title} id={tag.id}></IdeaTags>
                    })}
                </div>
                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</span>
            </div>
        </div>
    )
}

export default ideaCard;