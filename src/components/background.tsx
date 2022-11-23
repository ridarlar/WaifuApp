import useWaifuService from '../hook/useWaifuService';
import './style/background.css';


function Background() {
    const waifuHook = useWaifuService();

    return (
        <div>
            {
                waifuHook.waifusList.map((link, index) => {
                    return <img alt={link} src={link} key={index} className='image-waifu' />
                })
            }
        </div>
    )
}

export default Background
