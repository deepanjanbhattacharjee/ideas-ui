import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import ForumRoundedIcon from '@mui/icons-material/ForumRounded';
import Diversity3RoundedIcon from '@mui/icons-material/Diversity3Rounded';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import Button from '@mui/material/Button';
import Image from 'next/image';
import ProfilePic from '../../../public/platform/profilePic.jpg'

const leftNavBar = ({setSegment})=>{
    const menuItems = [
        {
            title: 'Home',
            icon: HomeRoundedIcon
        },
        {
            title: 'Forum',
            icon: ForumRoundedIcon
        },
        {
            title: 'Circle',
            icon: Diversity3RoundedIcon
        },
        {
            title: 'Profile',
            icon: AccountCircleRoundedIcon
        },
    ]

    const changeSegment=(segment)=>{
        setSegment(segment)
    }

    return(
        <div className='w-1/5 rounded-2xl bg-white px-12 py-12'>
            <div className='flex flex-col text-center h-1/3 justify-between'>
                <div className='rounded-3xl'>
                <Image
                    src={ProfilePic}
                    width={100}
                    height={100}
                    alt="Profile Pic"
                    className='m-auto rounded-[40px]'
                    />
                </div>
                <span>John Doe</span>
                <Button variant="outlined" color="success">Edit</Button>
            </div>
            <div className='mt-8'>
                {menuItems.map(item=>{
                    return <div className="flex text-sky-600 h-15 p-3 hover:bg-sky-600 hover:cursor-pointer hover:rounded-2xl hover:text-slate-300" key={item.title} onClick={changeSegment(item.title)}>
                        <item.icon></item.icon>
                        <span>{item.title}</span>
                    </div>
                })}
            </div>
        </div>
    )
}

export default leftNavBar