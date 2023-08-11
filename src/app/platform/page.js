'use client'
import { useState,useEffect } from 'react';
import LeftNavBar from './leftNavBar';
import Dashboard from './dashboard/page';
import Forum from './forum/page';
import Circle from './circle/page';

const platform = (props)=>{

    const [selectedSeg,setSelectedSeg] = useState('')

    useEffect(()=>{
        setSelectedSeg('Home')
    },[selectedSeg])

    const segmentChangeHandler = (segment)=>{
        setSelectedSeg(segment)
    }

    return(
        <div className='px-16 py-16 flex justify-between h-full bg-platform-bg'>
            <LeftNavBar setSegment = {(segment)=>{segmentChangeHandler(segment)}}></LeftNavBar>
            {selectedSeg == "Home" && <Dashboard></Dashboard>}
            {selectedSeg == "Forum" && <Forum></Forum>}
            {selectedSeg == "Circle" && <Circle></Circle>}
            {selectedSeg == "Settings" && <Circle></Circle>}
        </div>
    )
}

export default platform