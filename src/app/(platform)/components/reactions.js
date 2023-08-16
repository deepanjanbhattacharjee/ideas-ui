import IconButton from '@mui/material/IconButton';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import ThumbUpRoundedIcon from '@mui/icons-material/ThumbUpRounded';
import ThumbDownAltRoundedIcon from '@mui/icons-material/ThumbDownAltRounded';
import StarsRoundedIcon from '@mui/icons-material/StarsRounded';
import PaidRoundedIcon from '@mui/icons-material/PaidRounded';

const reactions = ()=>{
    let reactions = [
        {
            title: 'Interested',
            icon: FavoriteRoundedIcon,
            color: ''
        },
        {
            title: 'I believe it will work',
            icon: ThumbUpRoundedIcon,
            color: ''
        },
        {
            title: "I believe it won't work",
            icon: ThumbDownAltRoundedIcon,
            color: ''
        },
        {
            title: "It's amazing, I wan't to collaborate",
            icon: StarsRoundedIcon,
            color: ''
        },
        {
            title: 'I want to be a sponsor',
            icon: PaidRoundedIcon,
            color: ''
        },
    ]

    return(
        <>
            {reactions.map(react=>{
                return (
                        <IconButton color="primary">
                            <react.icon />
                        </IconButton>
                )
            })}
        </>
    )
}

export default reactions