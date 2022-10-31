import Header from '../../components/Header'
import HeaderImage from '../../images/image5.jpeg'
import './gallery.css'

const Gallery = () => {
  const galleryLength = 6;
  const images = [];

  for(let i=1; i <= galleryLength; i++) {
    images.push(require(`../../images/image${i}.jpeg`))
  }

  return (
    <>
      <Header title='Our Gallery' image={HeaderImage}>
        Quisquam id tenetur adipisci nesciunt ipsum amet in quibusdam, architecto nostrum nobis, est, deserunt odio illum perspiciatis.
      </Header>
      <section className="gallery">
        <div className="container gallery__container">
          {
            images.map((image, index) => {
              return <article key={index}>
                <img src={image} alt={`Gallery Image ${index + 1}`} />
              </article>
            })
          }
        </div>
      </section>
    </>
  )
}

export default Gallery