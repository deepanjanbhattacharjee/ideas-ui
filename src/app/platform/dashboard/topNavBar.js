import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import IconButton from '@mui/material/IconButton';
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import NotificationsActiveRoundedIcon from '@mui/icons-material/NotificationsActiveRounded';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';

const topNavBar = ()=>{
    return(
        <div className="flex justify-between h-[10%]">
            <span className="text-sky-600 font-bold w-2/12">Dashboard</span>
            <div className='w-6/12'>
                <TextField id="standard-basic" placeholder="Search for a idea..."
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
            <IconButton color="primary" aria-label="add to shopping cart">
                 <AddCircleRoundedIcon />
            </IconButton>
            <IconButton color="primary" aria-label="add to shopping cart">
                 <NotificationsActiveRoundedIcon />
            </IconButton>
            <IconButton color="primary" aria-label="add to shopping cart">
                 <SettingsRoundedIcon />
            </IconButton>
            </div>
        </div>
    )
}

export default topNavBar;