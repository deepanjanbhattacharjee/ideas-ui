const chat = ()=>{

    let conversation = [
        {
            person1: 'Joe',
            msg: 'Hi, How are you?'
        },
        {
            person2: 'Bela',
            msg: 'Hi, am good thank you. How are you?'
        },
        {
            person1: 'Joe',
            msg: 'Hi, How are you?'
        },
        {
            person2: 'Bela',
            msg: 'Hi, am good thank you. How are you?'
        },
        {
            person1: 'Joe',
            msg: 'Hi, How are you?'
        },
        {
            person2: 'Bela',
            msg: 'Hi, am good thank you. How are you?'
        },
        {
            person1: 'Joe',
            msg: 'Hi, How are you?'
        },
        {
            person2: 'Bela',
            msg: 'Hi, am good thank you. How are you?'
        },
        {
            person1: 'Joe',
            msg: 'Hi, How are you?'
        },
        {
            person2: 'Bela',
            msg: 'Hi, am good thank you. How are you?'
        },
        {
            person1: 'Joe',
            msg: 'Hi, How are you?'
        },
        {
            person2: 'Bela',
            msg: 'Hi, am good thank you. How are you?'
        },
        {
            person1: 'Joe',
            msg: 'Hi, How are you?'
        },
        {
            person2: 'Bela',
            msg: 'Hi, am good thank you. How are you?'
        },
        {
            person1: 'Joe',
            msg: 'Hi, How are you?'
        },
        {
            person2: 'Bela',
            msg: 'Hi, am good thank you. How are you?'
        },
        {
            person1: 'Joe',
            msg: 'Hi, How are you?'
        },
        {
            person2: 'Bela',
            msg: 'Hi, am good thank you. How are you?'
        },
        {
            person1: 'Joe',
            msg: 'Hi, How are you?'
        },
        {
            person2: 'Bela',
            msg: 'Hi, am good thank you. How are you?'
        },
        {
            person1: 'Joe',
            msg: 'Hi, How are you?'
        },
        {
            person2: 'Bela',
            msg: 'Hi, am good thank you. How are you?'
        },
        {
            person1: 'Joe',
            msg: 'Hi, How are you?'
        },
        {
            person2: 'Bela',
            msg: 'Hi, am good thank you. How are you?'
        }
    ]

    return(
        <>
            {conversation.map((conv)=>{
                if(conv.person1){
                    return (
                        <div className="flex flex-col">
                            <span className="text-slate-400 text-sm">{conv.person1}</span>
                            <span>{conv.msg}</span>
                        </div>
                    )
                }else{
                    return (
                        <div className="flex flex-col items-end">
                            <span className="text-slate-400 text-sm">{conv.person2}</span>
                            <span>{conv.msg}</span>
                        </div>
                    )
                }
            })}
        </>
    )
}

export default chat;