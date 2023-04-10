import Carousel from 'react-bootstrap/Carousel';

function Carous() {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=First slide&bg=373940"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=Second slide&bg=282c34"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://th.bing.com/th/id/R.bfcec6d8860bcfcdec6b295aff77a5d6?rik=iIaIaX%2fvveWuGA&riu=http%3a%2f%2fi2.wp.com%2ftravel-lush.com%2fwp-content%2fuploads%2f2015%2f05%2fgado-gado-1-of-1.jpg&ehk=w9GkiLYpwv4N3GsVyGU4XqXB3W4qXSYdB%2blrWmVRxTg%3d&risl=&pid=ImgRaw&r=0"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carous;