import TopNavBar from './topNavBar';
import FeedArea from './feed';
import Filters from './filters';
const dashboard = (props)=>{
    return(
        <div className="w-9/12 bg-white rounded-2xl px-12 py-12">
            <TopNavBar></TopNavBar>
            <div className="flex justify-between h-[90%]">
                <div className='w-8/12 overflow-y-auto'>
                    <FeedArea></FeedArea>
                </div>
                <div className='w-3/12 h-full'>
                    <Filters></Filters>
                </div>
            </div>
        </div>
    )
}

export default dashboard