import React, { PropsWithChildren, useEffect } from "react";
import './aiyo-carousel.css';

interface Props {
    width?: string | undefined;
    height?: string | undefined;
    autoplay?: boolean;
}

export const AiyoCarousel = (props: PropsWithChildren<Props>) => {
    const containerStyle = {
        width: props.width,
        height: props.height,
    };

    const doClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        const curElIndex = e.currentTarget.getAttribute('data-index');
        btnForItem(parseInt(curElIndex ? curElIndex : '0'));
    }

    const btnForItem = (index: number) => {
        const carousel = document.querySelector('.aiyo-carousel');
        const carouselWidth = carousel?.clientWidth;

        // 计算偏移值
        const offsetValue = carouselWidth ? (index * carouselWidth) : 0;

        const carouselContainer = document.querySelector('.aiyo-carousel .carousel-container');
        carouselContainer?.setAttribute('style', `left:-${offsetValue}px`);

        // 按钮样式排他法
        const alist = document.querySelectorAll('.aiyo-carousel .carousel-button ul a');
        alist.forEach((item) => {
            item.setAttribute('style', `background-color:rgba(255, 255, 255, 0.3)`);
        });
        alist[index].setAttribute('style', `background-color:rgba(255, 255, 255, 1)`);
    }

    // 默认选中第一个
    useEffect(() => {
        btnForItem(0);

        // 自动播放
        const items = document.querySelectorAll('.aiyo-carousel .carousel-container .carousel-item');
        let defaultIndex = 0;

        const play = () => {
            defaultIndex += 1;
            if (defaultIndex >= items.length) defaultIndex = 0;
            btnForItem(defaultIndex);
        }
        if (props.autoplay) {
            const timer = setInterval(play, 4000);
        }

    }, []);



    return (
        <div className="aiyo-carousel" style={containerStyle}>
            <div className="carousel-container" >
                {
                    React.Children.map(props.children, (item, index) => {
                        return <div key={index} data-index={index} className="carousel-item">{item}</div>
                    })
                }
            </div>
            <div className="carousel-button">
                <ul>
                    {
                        React.Children.map(props.children, (item, index) => {
                            return (
                                <li key={index}>
                                    <a onClick={doClick} data-index={index}></a>
                                </li>
                            );
                        })
                    }
                </ul>
            </div>
        </div>
    );
}