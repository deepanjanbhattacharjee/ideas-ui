import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import ForumRoundedIcon from '@mui/icons-material/ForumRounded';
import Diversity3RoundedIcon from '@mui/icons-material/Diversity3Rounded';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import Button from '@mui/material/Button';
import Image from 'next/image';
import ProfilePic from '/public/platform/profilePic.jpg'
import Link from 'next/link';

const leftNavBar = ()=>{
    const menuItems = [
        {
            title: 'Home',
            icon: HomeRoundedIcon,
            route : '/dashboard '
        },
        {
            title: 'Forum',
            icon: ForumRoundedIcon,
            route : '/forum'
        },
        {
            title: 'Circle',
            icon: Diversity3RoundedIcon,
            route : '/circle'
        },
        {
            title: 'Profile',
            icon: AccountCircleRoundedIcon,
            route: '/profile'
        },
    ]


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
                    return <Link href={item.route} className="flex text-sky-600 h-15 p-3 hover:bg-sky-600 hover:cursor-pointer hover:rounded-2xl hover:text-slate-300" key={item.title}>
                        <item.icon></item.icon>
                        <span className='ml-2'>{item.title}
                        </span>
                    </Link>
                })}
            </div>
        </div>
    )
}

export default leftNavBar