import Header from '../../components/Header'
import HeaderImage from '../../images/logo.png'
import {trainers} from '../../data'
import {BsInstagram} from 'react-icons/bs'
import {AiOutlineTwitter} from 'react-icons/ai'
import {FaFacebookF} from 'react-icons/fa'
import Trainer from '../../components/Trainer'
import './trainers.css'

const Trainers = () => {
  return (
    <>
      <Header title='Out Trainers' image={HeaderImage}>
        Racilis, iusto numquam unde laboriosam expedita qui exercitationem? Dicta vero accusantium est aut molestiae fugit doloremque suscipit quod.
      </Header>
      <section className="trainers">
        <div className="container trainers__container">
          {
            trainers.map(({id, image, name, job, socials}) => {
              return <Trainer key={id} image={image} name={name} job={job} socials={
                [
                  {icon: <BsInstagram/>, link: socials[0]},
                  {icon: <AiOutlineTwitter/>, link: socials[1]},
                  {icon: <FaFacebookF/>, link: socials[2]},
                ]
              }/>
            })
          }
        </div>
      </section>
    </>
  )
}

export default Trainers