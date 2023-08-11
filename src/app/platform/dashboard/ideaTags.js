const ideaTags = ({tagName,id})=>{
    return(
        <a href="#" key={id} className="mr-2 text-blue-800">#{tagName}</a>
    )
}

export default ideaTags;