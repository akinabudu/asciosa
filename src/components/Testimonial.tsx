'use client'
import { motion } from "framer-motion";
import Image from "next/image";
import LogoImage  from "../../public/logo.jpg"
import Akin  from "../../public/akinabudu.jpg"


const ScrollingTestimonials = () => {
  return (
    <div className="bg-slate-950 py-12 w-[100%]     ">
      <div className="mb-8 px-4">
        <h3 className="text-slate-50 text-4xl font-semibold text-center">
          Testimonials  
        </h3>
        <p className="text-center text-slate-300 text-sm mt-2 max-w-lg mx-auto">
What we have to say about our College.        </p>
      </div>
      <div className="p-4 overflow-x-hidden relative">
        <div className="absolute top-0 bottom-0 left-0 w-24 z-10 bg-gradient-to-r from-slate-900 to-transparent" />
        <div className="flex items-center mb-4">
          <TestimonialList list={testimonials.top} duration={125} />
          <TestimonialList list={testimonials.top} duration={125} />
          <TestimonialList list={testimonials.top} duration={125} />
        </div>
        <div className="flex items-center mb-4">
          <TestimonialList list={testimonials.middle} duration={75} reverse />
          <TestimonialList list={testimonials.middle} duration={75} reverse />
          <TestimonialList list={testimonials.middle} duration={75} reverse />
        </div>
        <div className="flex items-center mb-4">
          <TestimonialList list={testimonials.bottom} duration={275} />
          <TestimonialList list={testimonials.bottom} duration={275} />
          <TestimonialList list={testimonials.bottom} duration={275} />
        </div>
        <div className="flex items-center ">
          <TestimonialList list={testimonials.middle} duration={75} reverse />
          <TestimonialList list={testimonials.middle} duration={75} reverse />
          <TestimonialList list={testimonials.middle} duration={75} reverse />
        </div>
        <div className="absolute top-0 bottom-0 right-0 w-24 z-10 bg-gradient-to-l from-slate-900 to-transparent" />
      </div>
    </div>
  );
};
interface TestimonialProps {
    list:any
    reverse?:boolean
    duration?:number
}

const TestimonialList = ({ list, reverse = false, duration = 50 }:TestimonialProps) => {
  return (
    <motion.div
      initial={{ translateX: reverse ? "-100%" : "0%" }}
      animate={{ translateX: reverse ? "0%" : "-100%" }}
      transition={{ duration, repeat: Infinity, ease: "linear" }}
      className="flex gap-4 px-2"
    >
      {list.map((testimonial:any) => (
        <div
          key={testimonial.id}
          className="shrink-0 w-[500px] grid grid-cols-[7rem,_1fr] rounded-lg overflow-hidden relative"
        >
          <Image src={testimonial.img} alt="Testimonial" className="w-full h-44 object-cover" />
          <div className="bg-slate-900 text-slate-50 p-4">
            <span className="block font-semibold text-lg mb-1">{testimonial.name}</span>
            <span className="block mb-3 text-sm font-medium">{testimonial.title}</span>
            <span className="block text-[10px] text-slate-300">{testimonial.info}</span>
          </div>
          <span className="text-7xl absolute top-2 right-2 text-slate-700">
            &quot;
          </span>
        </div>
      ))}
    </motion.div>
  );
};

const testimonials = {
  top: [
    {
      id: 1,
      img: Akin, // Replace with actual image URL
      name: "Akin Abudu",
      title: "Founder of Orglobal Tech Network || Software & Cloud Engineer",
      info: "Attending ASCOL was an unforgettable experience. The supportive teachers and engaging curriculum truly prepared me for my academic journey ahead. I'm grateful for the friendships and memories made here that will last a lifetime.",
    },
    {
      id: 2,
      img: LogoImage,      name: "Damilola Adeboyejo",
      title: "Founder of XYZ",
      info: "Choosing ASCOL was one of the best decisions I ever made. The diverse community and inclusive environment fostered a sense of belonging, allowing me to thrive both academically and personally. Thank you, ASCOL, for shaping me into the confident individual I am today.",
    },
    {
      id: 3,
      img: LogoImage,      name: "Foyekemi Oyewole",
      title: "Founder of XYZ",
      info: "I can't speak highly enough of ASCOL. From the dedicated staff who went above and beyond to the plethora of extracurricular activities available, every aspect of my time there was enriching. ASCOL isn't just a school; it's a community that feels like home.",
    },
    {
      id: 4,
      img: LogoImage,      name: "Anjola Taiwo",
      title: "Medical Lab Scientist",
      info: "As a parent, entrusting my child's education to ASCOL was the best choice I could have made. The caring educators provided personalized attention, ensuring my child's academic success while nurturing their unique talents and interests. I couldn't be happier with the holistic education they received.",
    },
    {
      id: 5,
      img: LogoImage,      name: "Hannah Rotimi-Williams",
      title: "Founder of XYZ",
      info: "Reflecting on my years at ASCOL, I'm filled with gratitude for the opportunities it provided. Whether it was participating in sports, leading clubs, or excelling academically, ASCOL empowered me to pursue my passions and set ambitious goals for the future.",
    },
    {
      id: 6,
      img: LogoImage,      name: "Faith Adeniji",
      title: "Software Developer",
      info: "Enrolling in ASCOL was a transformative experience for me. The innovative teaching methods and emphasis on critical thinking not only prepared me for higher education but also instilled in me a lifelong love of learning. I'm forever indebted to ASCOL for shaping my intellectual curiosity.",
    },
  ],
  
  middle: [
    {
      id: 1,
      img: LogoImage,      name: "Alex F.",
      title: "Founder of XYZ",
      info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa nostrum labore dolor facilis, nesciunt facere mollitia nam.",
    },
    {
      id: 2,
      img: LogoImage,      name: "Claude O.",
      title: "Founder of XYZ",
      info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa nostrum labore dolor facilis, nesciunt.",
    },
    {
      id: 3,
      img: LogoImage,      name: "Max Q.",
      title: "Founder of XYZ",
      info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa nostrum labore dolor facilis.",
    },
    {
      id: 4,
      img: LogoImage,      name: "Jeff R.",
      title: "Founder of XYZ",
      info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa nostrum labore dolor facilis, nesciunt facere mollitia nam aspernatur esse corporis!",
    },
    {
      id: 5,
      img: LogoImage,      name: "Kevin K.",
      title: "Founder of XYZ",
      info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit!",
    },
    {
      id: 6,
      img: LogoImage,      name: "Andrea B.",
      title: "Founder of XYZ",
      info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa nostrum labore dolor facilis, nesciunt facere!",
    },
  ],
  

  bottom: [
    {
      id: 1,
      img: LogoImage,      name: "Danny G.",
      title: "Founder of XYZ",
      info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa nostrum labore dolor facilis, nesciunt facere mollitia nam aspernatur!",
    },
    {
      id: 2,
      img: LogoImage,      name: "Ian D.",
      title: "Founder of XYZ",
      info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa nostrum labore dolor facilis, nesciunt facere.",
    },
    {
      id: 3,
      img: LogoImage,      name: "Ben S.",
      title: "Founder of XYZ",
      info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    },
    {
      id: 4,
      img: LogoImage,      name: "Matthew I.",
      title: "Founder of XYZ",
      info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa nostrum labore dolor facilis, nesciunt facere mollitia nam aspernatur esse corporis!",
    },
    {
      id: 5,
      img: LogoImage,      name: "Garrett P.",
      title: "Founder of XYZ",
      info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa nostrum labore dolor facilis, nesciunt facere mollitia.",
    },
    {
      id: 6,
      img: LogoImage,      name: "Xavier C.",
      title: "Founder of XYZ",
      info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa nostrum labore dolor facilis, nesciunt facere mollitia nam aspernatur.",
    },
  ],
  

};


export default ScrollingTestimonials