import useWaifuService from '../hook/useWaifuService';
import { ReloadOutlined } from '@ant-design/icons';
import './style/background.css';

function Background(this: any) {
    const waifuHook = useWaifuService();



    return (
        <div>

            <div className='buttonRefect'>
                <ReloadOutlined
                    onClick={() => {
                       
                    }}
                    style={{ fontSize: '50px', color: '#08c' }} />
            </div>
            {
                waifuHook.waifusList.map((link, index) => {
                    return <img alt={link} src={link} key={index} className='image-waifu' />
                })
            }
        </div>
    )
}

export default Background;
