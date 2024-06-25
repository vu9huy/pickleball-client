"use client";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./ReactResposiveCarousel.css";
import SliderImage from "./sliderImage/SliderImage";
import ArrowKeenSlider from "./arrow/ArrowKeenSlider";

const ReactResponsiveCarousel = ({ images, slideImageClass, isLazy }) => {
    const arrowStyles = {
        position: "absolute",
        zIndex: 2,
        top: "calc(50% - 15px)",
        width: 30,
        height: 30,
        cursor: "pointer"
    };
    if (!images || !images.length) return "";

    const numberOfImages = images?.length;
    const checkOneImage = numberOfImages === 1;

    return (
        <Carousel
            // autoPlay={true}
            // stopOnHover={true}
            showStatus={false}
            infiniteLoop={false}
            showIndicators={!checkOneImage}
            showThumbs={false}
            swipeable={true}
            dynamicHeight={true}
            emulateTouch={true}
            width={"100%"}
            renderArrowPrev={(onClickHandler, hasPrev) =>
                checkOneImage ? "" : <ArrowKeenSlider isLeft={true} styles={{ ...arrowStyles, left: "15px" }} onClick={onClickHandler} disabled={!hasPrev} />
            }
            renderArrowNext={(onClickHandler, hasNext) =>
                checkOneImage ? "" : <ArrowKeenSlider isLeft={false} styles={{ ...arrowStyles, right: "15px" }} onClick={onClickHandler} disabled={!hasNext} />
            }
        >
            {images.map((image, index) => {
                return (<SliderImage
                    src={image.url}
                    index={index}
                    key={index}
                    isLazy={isLazy ? true : index === 0 ? false : true}
                    imageClass={slideImageClass}
                    alt={image.alt}
                />);
            })}
        </Carousel>
    );
};


export default ReactResponsiveCarousel;
