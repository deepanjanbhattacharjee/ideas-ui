import CircleRoundedIcon from '@mui/icons-material/CircleRounded';

const forumList = ()=>{
    const forumList = [
        {
            name: 'John Doe',
            status: 'Active'
        },
        {
            name: 'Serena Johnes',
            status: 'Active'
        },
        {
            name: 'Steve Harley',
            status: 'Inactive'
        },
        {
            name: 'Andrew ',
            status: 'Active'
        },
        {
            name: 'John Doe',
            status: 'Active'
        },
        {
            name: 'Serena Johnes',
            status: 'Active'
        },
        {
            name: 'Steve Harley',
            status: 'Inactive'
        },
        {
            name: 'Andrew ',
            status: 'Active'
        },
        {
            name: 'John Doe',
            status: 'Active'
        },
        {
            name: 'Serena Johnes',
            status: 'Active'
        },
        {
            name: 'Steve Harley',
            status: 'Inactive'
        },
        {
            name: 'Andrew ',
            status: 'Active'
        },
        {
            name: 'John Doe',
            status: 'Active'
        },
        {
            name: 'Serena Johnes',
            status: 'Active'
        },
        {
            name: 'Steve Harley',
            status: 'Inactive'
        },
        {
            name: 'Andrew ',
            status: 'Active'
        },
        {
            name: 'John Doe',
            status: 'Active'
        },
        {
            name: 'Serena Johnes',
            status: 'Active'
        },
        {
            name: 'Steve Harley',
            status: 'Inactive'
        },
        {
            name: 'Andrew ',
            status: 'Active'
        }
    ]

    return(
        <>
            {forumList.map((list)=>{
                if(list.status == 'Active'){
                    return  <div className='p-4 hover:bg-hightlight-col hover:cursor-pointer hover:rounded-2xl hover:text-slate-300'>
                                <CircleRoundedIcon className='text-green-400 text-[10px]'></CircleRoundedIcon>
                                <span className='ml-4'>{list.name}</span>
                            </div>
                }else{
                    return  <div className='p-4 hover:bg-hightlight-col hover:cursor-pointer hover:rounded-2xl hover:text-slate-300'>
                                <CircleRoundedIcon className='text-slate-400 text-[10px]'></CircleRoundedIcon>
                                <span className='ml-4'>{list.name}</span>
                            </div>
                }
            })}
        </>
    )
}

export default forumList;