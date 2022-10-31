import Header from '../../components/Header'
import HeaderImage from '../../images/눈풍경.jpeg'
import StoryImage from '../../images/노트.jpeg'
import VisionImage from '../../images/돋보기.jpeg'
import MissionImage from '../../images/카메라.jpeg'
import './about.css'



const About = () => {
  return (
    <>
      <Header title='About Us' image={HeaderImage}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Et maiores doloribus, eligendi incidunt modi rerum debitis consequatur molestias?
      </Header>

      <section className="about__story">
        <div className="container about__story-container">
          <div className="about__section-image">
            <img src={StoryImage} alt="Our Story Image" />
          </div>
          <div className="about__section-content">
            <h1>Our Story</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores fugit ad neque quo, quas eius quam at sunt quod in atque nulla minus nam impedit tempore consectetur esse quibusdam voluptatum optio nemo! Aperiam veritatis delectus commodi. Minima tempora voluptates natus.</p>
          </div>
        </div>
      </section>

      <section className="about__Vision">
        <div className="container about__Vision-container">

          <div className="about__section-content">
            <h1>Our Vision</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores fugit ad neque quo, quas eius quam at sunt quod in atque nulla minus nam impedit tempore consectetur esse quibusdam voluptatum optio nemo! Aperiam veritatis delectus commodi. Minima tempora voluptates natus.</p>
          </div>
          <div className="about__section-image">
            <img src={VisionImage} alt="Our Vision Image" />
          </div>
        </div>
      </section>

      <section className="about__mission">
        <div className="container about__mission-container">
          <div className="about__section-image">
            <img src={MissionImage} alt="Our Mission Image" />
          </div>
          <div className="about__section-content">
            <h1>Our Mission</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores fugit ad neque quo, quas eius quam at sunt quod in atque nulla minus nam impedit tempore consectetur esse quibusdam voluptatum optio nemo! Aperiam veritatis delectus commodi. Minima tempora voluptates natus.</p>
          </div>
        </div>
      </section>
    </>
  )
}

export default About