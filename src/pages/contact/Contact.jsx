import Header from '../../components/Header'
import HeaderImage from '../../images/MJS/5firstCoupleBag.jpg'
import {MdEmail} from 'react-icons/md'
import {BsMessenger} from 'react-icons/bs'
import {IoLogoWhatsapp} from 'react-icons/io'
import './contact.css'

const Contact = () => {
  return (
    <>
      <Header title='Get In Touch' image={HeaderImage}>
        Fruga itaque ducimus, ad amet praesentium suscipit sit, assumenda nihil officia totam, animi culpa nobis nemo natus doloremque?
      </Header>
      <section className="contact">
        <div className="container contact__container">
          <div className="contact__wrapper">
            <a href="mailto:kangmj0809@naver.com" target='_blank' rel='noreferrer noopener'><MdEmail/></a>
            <a href="kangmj_0809@naver.com" target='_blank' rel='noreferrer noopener'><BsMessenger/></a>
            <a href="kangmj_0809@naver.com" target='_blank' rel='noreferrer noopener'><IoLogoWhatsapp/></a>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact