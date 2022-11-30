import './style/Information.css';

import frontend from '../assets/frontend.jpeg';
import powerBy from '../assets/power_by.png';
import backend from '../assets/backend.jpg';
import { BackTop } from 'antd';


interface ISocialMedia{
    name:string,
    url:string,
    icon:string
}

const Profile=({
    name,
    socialMedia,
    avatar,
}:{
    name?:string,
    socialMedia?:ISocialMedia[],
    avatar:any
})=>{
    return(<div>
        <img
            alt='ohkujh'
            src={avatar}
        />
    </div>)
}


function Information() {
    return (
        <>
            <div className="center">
                <p>power by</p>
            </div>
            <div className="container">

                <div className="left">
                    <Profile
                       avatar='https://i.waifu.pics/3_7mVJQ.gif'
                    />
                </div>
                <div className="right">
                </div>
            </div>
        </>
    )
}

export default Information;