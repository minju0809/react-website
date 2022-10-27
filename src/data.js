import { SiOpenaigym } from "react-icons/si";

export const links = [
  {
    name: "Home",
    path: '/'
  },
  {
    name: "About",
    path: '/about'
  },
  {
    name: "Gallery",
    path: '/gallery'
  },
  {
    name: "Plans",
    path: '/plans'
  },
  {
    name: "Trainers",
    path: '/trainers'
  },
  {
    name: "Contact",
    path: '/contact'
  }
]


export const programs = [
  {
    id: 1,
    icon: <SiOpenaigym/>,
    title: 'Program One',
    info: 'This is the day that the lord has made. We will rejoice!',
    path: "/programs/111",
  },
  {
    id: 2,
    icon: <SiOpenaigym/>,
    title: 'Program Two',
    info: 'This is the day that the lord has made. We will rejoice!',
    path: "/programs/222",
  },
  {
    id: 3,
    icon: <SiOpenaigym/>,
    title: 'Program Three',
    info: 'This is the day that the lord has made. We will rejoice!',
    path: "/programs/333",
  },
  {
    id: 4,
    icon: <SiOpenaigym/>,
    title: 'Program Four',
    info: 'This is the day that the lord has made. We will rejoice!',
    path: "/programs/444",
  }
]


export const values = [
  {
    id: 1,
    icon: <SiOpenaigym/>,
    title: 'Value One',
    desc: 'Placeat quidem facere dicta modi? Pariatur exercitationem illum.'
  },
  {
    id: 2,
    icon: <SiOpenaigym/>,
    title: 'Value Two',
    desc: 'Placeat quidem facere dicta modi? Pariatur exercitationem illum.'
  },
  {
    id: 3,
    icon: <SiOpenaigym/>,
    title: 'Value Three',
    desc: 'Placeat quidem facere dicta modi? Pariatur exercitationem illum.'
  },
  {
    id: 4,
    icon: <SiOpenaigym/>,
    title: 'Value Four',
    desc: 'Placeat quidem facere dicta modi? Pariatur exercitationem illum.'
  }
]


export const faqs = [
  {
    id: 1,
    question: 'How often should I exercise?',
    answer: 'Consectetur adipisicing elit. Non ipsa dolorem, rem consequatur eum omnis ex, fuga temporibus qui nesciunt odio aliquam commodi culpa inventore ut similique repellendus perferendis sint!'
  },
  {
    id: 2,
    question: 'What time of day is best to work out?',
    answer: 'Distinctio nihil blanditiis accusantium atque, quo maxime inventore eum! Cum dolorem quibusdam amet et qui. Eos, omnis beatae? Quas, est at! Molestiae quidem ab soluta exercitationem culpa nostrum iusto illum qui non a harum deserunt atque commodi at velit.'
  },
  {
    id: 3,
    question: 'How long should my workouts be',
    answer: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.'
  },
  {
    id: 4,
    question: 'Do I need to warm up before my workouts?',
    answer: 'Molestiae quidem ab soluta exercitationem culpa nostrum iusto illum qui non a harum deserunt atque commodi at velit, consequatur quibusdam dignissimos cum labore possimus placeat consectetur nisi cupiditate? Qui totam est omnis dolor nobis quisquam veritatis a!'
  },
  {
    id: 5,
    question: 'Should I do strength training, cardio or both?',
    answer: 'Maiores fuga, cum preasentium esse laudantium! Distinctio nihil blanditiis accusantium atque, quo maxime inventore eum! Cum dolorem quibusdam amet et qui.'
  },
  {
    id: 6,
    question: 'Should I lift weights for strength training?',
    answer: 'Quas, est at! Molestiae quidem ab soluta exercitationem culpa nostrum iusto illun qui non a harum dererunt atque commodi at velit, consequatur quibusdam dignissimos cum labore possimus placeat consectetur nisi cupiditate.'
  }
]

export const testimonials = [
  {
    id: 1,
    name: `Diana Ayi`,
    quote: 'Lorem ipsum dolor sit amet consectetur adipisicing dlit.',
    job: 'Student',
    avatar: require('./images/MJS/0header1.jpg')
  },
  {
    id: 2,
    name: `Diana Vinyo`,
    quote: 'Harum quaerat hic consequuntur molestias repellat ad quo tenetur vitae rem, labore quisquam?.',
    job: 'Software Egineer',
    avatar: require('./images/MJS/0header2.jpg')
  },
  {
    id: 3,
    name: `Edam Quist`,
    quote: 'Quaerat hic praesentium consequuntur molestias repellat ad quo tenetur vitae rem, labore quisquam?',
    job: 'University Lecturer',
    avatar: require('./images/MJS/6flex.jpg')
  },
  {
    id: 4,
    name: `Grace Lavoe`,
    quote: 'Cupiditate deleniti sint consequuntur molestias repellat ad quo tenetur vitae rem, labore quisquam?',
    job: 'Talking Parrot',
    avatar: require('./images/MJS/7firstTrip_Jeju.jpg')
  },
  {
    id: 5,
    name: `Nana Yaa Dankwa`,
    quote: 'Maxime minima cumque sit amet consectetur adipisicing elit.',
    job: 'Pharmacist',
    avatar: require('./images/MJS/10완선Wedding1.jpg')
  }
]


export const plans = [
  {
    id: 1,
    name: 'Sliver Package',
    desc: 'This package is perfect for beginners who need constant help',
    price: 29.99,
    features: [
      {feature: 'First Feature', available: true},
      {feature: 'Second Feature', available: true},
      {feature: 'Third Feature', available: true},
      {feature: 'Fourth Feature', available: true},
      {feature: 'Fifth Feature', available: true},
      {feature: 'Fifth Feature Plus', available: false},
      {feature: 'Sixth Feature', available: false},
      {feature: 'Seventh Feature', available: false},
      {feature: 'Seventh Feature Plus', available: false},
      {feature: 'Eighth Feature', available: false},
      {feature: 'Ninth Feature', available: false},
      {feature: 'Tenth Feature', available: false},
      {feature: 'Eleventh Feature', available: false},
    ]
  },
  {
    id: 2,
    name: 'Gold Package',
    desc: 'This package is perfect package for beginners who know what their doing',
    price: 49.99,
    features: [
      {feature: 'First Feature', available: true},
      {feature: 'Second Feature', available: true},
      {feature: 'Third Feature', available: true},
      {feature: 'Fourth Feature', available: true},
      {feature: 'Fifth Feature', available: true},
      {feature: 'Fifth Feature Plus', available: true},
      {feature: 'Sixth Feature', available: true},
      {feature: 'Seventh Feature', available: true},
      {feature: 'Seventh Feature Plus', available: true},
      {feature: 'Eighth Feature', available: false},
      {feature: 'Ninth Feature', available: false},
      {feature: 'Tenth Feature', available: false},
      {feature: 'Eleventh Feature', available: false},
    ]
  },
  {
    id: 3,
    name: 'Platinum Package',
    desc: 'This package is perfect for busy people who need home service',
    price: 89.99,
    features: [
      {feature: 'First Feature', available: true},
      {feature: 'Second Feature', available: true},
      {feature: 'Third Feature', available: true},
      {feature: 'Fourth Feature', available: true},
      {feature: 'Fifth Feature', available: true},
      {feature: 'Fifth Feature Plus', available: true},
      {feature: 'Sixth Feature', available: true},
      {feature: 'Seventh Feature', available: true},
      {feature: 'Seventh Feature Plus', available: true},
      {feature: 'Eighth Feature', available: true},
      {feature: 'Ninth Feature', available: true},
      {feature: 'Tenth Feature', available: true},
      {feature: 'Eleventh Feature', available: true},
    ]
  }
]


const Trainer1 = require('./images/MJS/8incheon.jpg')
const Trainer2 = require('./images/MJS/9secondTrip_Busan,Gyeongju.jpg')
const Trainer3 = require('./images/MJS/10완선Wedding1.jpg')
const Trainer4 = require('./images/MJS/11완선Wedding2.jpg')
const Trainer5 = require('./images/MJS/12완선Wedding3.jpg')
const Trainer6 = require('./images/MJS/KakaoTalk_20220502_220450540.jpg')

export const trainers = [
  {
    id: 1,
    image: Trainer1,
    name: 'John Doe',
    job: 'Body Composition Trainer',
    socials: ['https://instagram.com/', 'https://twitter.com/', 'https://facebook.com/']
  },
  {
    id: 2,
    image: Trainer2,
    name: 'Daniel vinyo',
    job: 'Body Composition Trainer',
    socials: ['https://instagram.com/', 'https://twitter.com/', 'https://facebook.com/']
  },
  {
    id: 3,
    image: Trainer3,
    name: 'Edem Quist',
    job: 'Body Composition Trainer',
    socials: ['https://instagram.com/', 'https://twitter.com/', 'https://facebook.com/']
  },
  {
    id: 4,
    image: Trainer4,
    name: 'Shatta Wale',
    job: 'Body Composition Trainer',
    socials: ['https://instagram.com/', 'https://twitter.com/', 'https://facebook.com/']
  },
  {
    id: 5,
    image: Trainer5,
    name: 'Diana Ayi',
    job: 'Body Composition Trainer',
    socials: ['https://instagram.com/', 'https://twitter.com/', 'https://facebook.com/']
  },
  {
    id: 6,
    image: Trainer6,
    name: 'Wayne Carter',
    job: 'Body Composition Trainer',
    socials: ['https://instagram.com/', 'https://twitter.com/', 'https://facebook.com/']
  },
]