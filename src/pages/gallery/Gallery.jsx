import Header from '../../components/Header'
import HeaderImage from '../../images/logo.png'
import './gallery.css'

const Gallery = () => {
  const galleryLength = 2;
  const images = [];

  for(let i=1; i <= galleryLength; i++) {
    images.push(require(`../../images/MJS/0header${i}.jpg`))
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