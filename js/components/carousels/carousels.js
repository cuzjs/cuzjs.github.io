'use strict';

var Carousel = cuz.Carousel;
var CarouselItem = cuz.CarouselItem;

var App = '\nconst carouselInstance = (\n\t<Carousel>\n      <CarouselItem>\n        <img width={900} height={500} alt="900x500" src="http://react-bootstrap.github.io/assets/carousel.png"/>\n        <div className="carousel-caption">\n          <h3>First slide label</h3>\n          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>\n        </div>\n      </CarouselItem>\n\n      <CarouselItem>\n        <img width={900} height={500} alt="900x500" src="http://react-bootstrap.github.io/assets/carousel.png"/>\n        <div className="carousel-caption">\n          <h3>Second slide label</h3>\n          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>\n        </div>\n      </CarouselItem>\n\n      <CarouselItem>\n        <img width={900} height={500} alt="900x500" src="http://react-bootstrap.github.io/assets/carousel.png"/>\n        <div className="carousel-caption">\n          <h3>Third slide label</h3>\n          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>\n        </div>\n      </CarouselItem>\n  </Carousel>\n\t);\n\nReactDOM.render(carouselInstance, mountNode);\n';

ReactDOM.render(React.createElement(ReactPlayground, { codeText: App }), document.getElementById('carousels-default'));