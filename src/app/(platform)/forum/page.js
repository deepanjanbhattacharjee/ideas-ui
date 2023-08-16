import Chat from './chat';
import ForumList from './forumList';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import SendRoundedIcon from '@mui/icons-material/SendRounded';

const forum = ()=>{
    return(
        <div className="flex justify-between h-[90%]">
            <div className='w-8/12'>
                {/* <span className='text-base font-semibold'>Bela Johnes</span> */}
                <div className='h-[90%] p-8 overflow-y-auto'>
                    <Chat></Chat>
                </div>
                <div className="flex justify-between mt-4 px-8">
                    <TextField
                        id="idea-tags"
                        placeholder="Type a message..."
                        className='w-11/12'
                    />
                    <IconButton color="primary">
                        <SendRoundedIcon />
                    </IconButton>
                </div>
            </div>
            <div className='w-[30%]'>
                <span className='text-base font-semibold'>Forum List</span>
                <div className='h-[85%] overflow-y-auto text-sm'>
                    <ForumList></ForumList>
                </div>
            </div>
        </div>
    )
}

export default forum