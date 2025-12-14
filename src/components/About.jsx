import { Establishment } from "./Establishment"
import { MissionVision } from "./mission-vision"
import { President } from "./President"



export const About = ()=>{

    return(
        <>
            <President/>
            <MissionVision/>
            <Establishment/>
        </>
    )
}