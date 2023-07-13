import React from 'react'
import Process from '../../component/Process/Process';
import Palette from '../../component/Palette/Palette';
import BodyPart1 from '../../component/bodyPart1/BodyPart1';
import '../Test/detailTest.css'

function DetailTest(params) {
    return (
        <>
            <Process />
            <section>
                <Palette />
                <BodyPart1 />
            </section>

        </>
    )
}
export default DetailTest