import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./ReactResposiveCarousel.css";
import SliderImage from "./sliderImage/SliderImage";
import ArrowKeenSlider from "./arrow/ArrowKeenSlider";

// const images = [
//     "https://images.unsplash.com/photo-1590004953392-5aba2e72269a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=500&w=800&q=80",
//     "https://images.unsplash.com/photo-1590004845575-cc18b13d1d0a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=500&w=800&q=80",
//     "https://images.unsplash.com/photo-1590004987778-bece5c9adab6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=500&w=800&q=80",
//     "https://images.unsplash.com/photo-1590005176489-db2e714711fc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=500&w=800&q=80"
// ];

const ReactResponsiveCarousel = ({ images }) => {
    const arrowStyles = {
        position: "absolute",
        zIndex: 2,
        top: "calc(50% - 15px)",
        width: 30,
        height: 30,
        cursor: "pointer"
    };

    if (!images || !images.length) return "";

    return (
        <Carousel
            // autoPlay={true}
            // stopOnHover={true}
            showStatus={false}
            infiniteLoop={false}
            showThumbs={false}
            swipeable={true}
            dynamicHeight={true}
            emulateTouch={true}
            width={"100%"}
            renderArrowPrev={(onClickHandler, hasPrev) =>
                <ArrowKeenSlider isLeft={true} styles={{ ...arrowStyles, left: "15px" }} onClick={onClickHandler} disabled={!hasPrev} />
            }
            renderArrowNext={(onClickHandler, hasNext) =>
                <ArrowKeenSlider isLeft={false} styles={{ ...arrowStyles, right: "15px" }} onClick={onClickHandler} disabled={!hasNext} />
            }
        >
            {images.map((image, index) => {
                return (<SliderImage
                    src={image.url}
                    index={index}
                    key={index}
                    isLazy={true}
                    imageClass={"infowindow-slide"}
                    alt={image.alt}
                />);
            })}
        </Carousel>
    );
};


export default ReactResponsiveCarousel;
