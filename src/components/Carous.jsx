import Carousel from 'react-bootstrap/Carousel';

function Carous() {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <img height={"300px"}
          className="d-block w-100"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6sntxkpOK9B4mqSJHIgM3FqQrW7S6XxKlFcaQYRTC78aeZUw_KVWKSdQf8vnk9p4ineUk1eeK5zM&usqp=CAU&ec=48665699"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img height={"300px"}
          className="d-block w-100"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6sntxkpOK9B4mqSJHIgM3FqQrW7S6XxKlFcaQYRTC78aeZUw_KVWKSdQf8vnk9p4ineUk1eeK5zM&usqp=CAU&ec=48665699"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img height={"300px"}
          className="d-block w-100"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6sntxkpOK9B4mqSJHIgM3FqQrW7S6XxKlFcaQYRTC78aeZUw_KVWKSdQf8vnk9p4ineUk1eeK5zM&usqp=CAU&ec=48665699"
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