const stats=()=>{
    return(
        <div className="grid gap-8 grid-rows-{n} grid-cols-[repeat(auto-fit,_minmax(150px,_1fr))] mt-8">
            <div className="flex flex-col bg-emerald-500 rounded-2xl h-[6rem] p-4">
                <span className="text-slate-300	text-lg	">Following</span>
                <span className="text-white">378</span>
            </div>
            <div className="flex flex-col bg-emerald-500 rounded-2xl h-[6rem] p-4">
                <span className="text-slate-300	text-lg	">Followers</span>
                <span className="text-white">192</span>
            </div>
            <div className="flex flex-col bg-emerald-500 rounded-2xl h-[6rem] p-4">
                <span className="text-slate-300	text-lg	">Total views</span>
                <span className="text-white	">3000</span>
            </div>
            <div className="flex flex-col bg-emerald-500 rounded-2xl h-[6rem] p-4">
                <span className="text-slate-300	text-lg	">Your ideas</span>
                <span className="text-white">7</span>
            </div>
        </div>
    )
}

export default stats