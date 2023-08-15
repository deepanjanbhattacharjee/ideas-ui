import IdearCard from './ideaCard';

const feedArea = ()=>{
    const feedList = [1,2,3,4,5,6,7,8,9,10]

    return(
        <div className="p-4">
            {feedList.map((feed)=>{
                return <IdearCard key={feed}></IdearCard>
            })}
        </div>
    )
}

export default feedArea;