import React, { useState, useCallback } from "react";
import useWaifuService from '../hook/useWaifuService';
import { ReloadOutlined } from '@ant-design/icons';
import ImageViewer from "react-simple-image-viewer";

import './style/background.css';

function Background(this: any) {
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

    return (
        <section>

            {
                isViewerClose && (
                    <div className='buttonRefect'>
                        <ReloadOutlined
                            onClick={() => {
                                waifuHook.getWaifus({
                                    type: 'sfw',
                                    category: 'waifu',
                                    unique: false
                                })
                            }}
                             />
                    </div >
                )
            }

            <div className='gridWrapper' >
                {
                    waifuHook.waifusList.map((link, index) => {
                        return <div className='big'>
                            <img
                                onClick={() => openImageViewer(index)}
                                alt={link}
                                src={link}
                                key={index}
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
                        backgroundColor: "rgba(0,0,0,0.9)"
                    }}
                    closeOnClickOutside={true}
                />
            )}

        </section>
    )
}

export default Background;
