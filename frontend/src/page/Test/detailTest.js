import React from 'react'
import Process from '../../component/Process/Process';
import Palette from '../../component/LineCheck/Palette';
import BodyPart1 from '../../component/bodyPart1/BodyPart1';
import '../Test/detailTest.css'

function DetailTest(params) {
    return (
        <>
            <Process />
            <div className='main'>
                <Palette />
                <BodyPart1 />
            </div>
        </>
    )
}
export default DetailTest