

import React, { useState, useCallback } from "react";
import useWaifuService from '../hook/useWaifuService';
import { ReloadOutlined } from '@ant-design/icons';
import ImageViewer from "react-simple-image-viewer";
import './style/background.css';
import { useEffect } from "react";
import { useLocation} from "react-router-dom";

function Background() {

    const waifuHook = useWaifuService();
    const [currentImage, setCurrentImage] = useState(0);
    const [isViewerOpen, setIsViewerOpen] = useState(false);
    const [isViewerClose, setIsViewerClose] = useState(true);

    const openImageViewer = useCallback((index: React.SetStateAction<number>) => {
        setCurrentImage(index);
        setIsViewerOpen(true);
        setIsViewerClose(false)

    }, []);

    const closeImageViewer = () => {
        setCurrentImage(0);
        setIsViewerOpen(false);
        setIsViewerClose(true)

    };

    const location=useLocation()

    useEffect(()=>{
        waifuHook.getWaifus({
            unique: false
        })
        
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[location])

    return (
        <section>
            {
                isViewerClose && (
                    <div className='buttonRefect'>
                        <ReloadOutlined
                            onClick={() => {
                                waifuHook.getWaifus({
                                    unique: false
                                })
                            }}
                            style={{ fontSize: '75px', color: '#08c' }} />
                    </div >
                )
            }
            <div className='gridWrapper' >
                {
                    waifuHook.waifusList.map((link, index) => {
                        return <div className='big' key={link + index}>
                            <img
                                onClick={() => openImageViewer(index)}
                                alt={link}
                                src={link}
                                key={index + link}
                                className='image-waifu' />
                        </div>
                    })
                }
            </div>

            {isViewerOpen && (
                <ImageViewer
                    src={waifuHook.waifusList}
                    currentIndex={currentImage}
                    onClose={closeImageViewer}
                    disableScroll={false}
                    backgroundStyle={{
                        backgroundColor: "rgba(0,0,0,0.9)",
                    }}
                    closeOnClickOutside={true}
                />
            )}

        </section>
    )
}

export default Background;