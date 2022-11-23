import useWaifuService from '../hook/useWaifuService';
import { ReloadOutlined } from '@ant-design/icons';
import './style/background.css';

function Background(this: any) {
    const waifuHook = useWaifuService();

    return (
        <section>
            <div className='buttonRefect'>
                <ReloadOutlined
                    onClick={() => {
                        waifuHook.getWaifus({
                            type: 'sfw',
                            category: 'waifu',
                            unique: false
                        })
                    }}
                    style={{ fontSize: '40px', color: '#08c' }} />
            </div >

            <div className='gridWrapper' >
                {
                    waifuHook.waifusList.map((link, index) => {
                        return <div className='big'><img alt={link} src={link} key={index} className='image-waifu' /></div>
                    })
                }
            </div>

        </section>
    )
}

export default Background;
