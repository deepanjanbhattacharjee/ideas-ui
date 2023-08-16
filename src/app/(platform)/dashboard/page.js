import TopNavBar from '../components/topNavBar';
import FeedArea from './feed';
import Filters from './filters';
import Stats from './stats';

const dashboard = (props)=>{
    return(
        <div className="flex justify-between h-[90%]">
            <div className='w-8/12 overflow-y-auto'>
                <FeedArea></FeedArea>
            </div>
            <div className='w-[30%] h-full'>
                <Filters></Filters>
                <Stats></Stats>
            </div>
        </div>
    )
}

export default dashboard