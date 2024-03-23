'use client'
import { motion } from "framer-motion";

const ScrollingTestimonials = () => {
  return (
    <div className="bg-slate-950 py-12 w-[100%]     ">
      <div className="mb-8 px-4">
        <h3 className="text-slate-50 text-4xl font-semibold text-center">
          Testimonials
        </h3>
        <p className="text-center text-slate-300 text-sm mt-2 max-w-lg mx-auto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
          consequatur reprehenderit.
        </p>
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
          <img src={testimonial.img} alt="Testimonial" className="w-full h-44 object-cover" />
          <div className="bg-slate-900 text-slate-50 p-4">
            <span className="block font-semibold text-lg mb-1">{testimonial.name}</span>
            <span className="block mb-3 text-sm font-medium">{testimonial.title}</span>
            <span className="block text-sm text-slate-300">{testimonial.info}</span>
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
      img: "https://images.unsplash.com/photo-1540569014015-19a7be504e3a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80", // Replace with actual image URL
      name: "Jen S.",
      title: "Founder of XYZ",
      info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa nostrum labore dolor facilis, nesciunt facere mollitia nam aspernatur esse corporis!",
    },
    {
      id: 2,
      img: "https://images.unsplash.com/photo-1627161683077-e34782c24d81?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=703&q=80", // Replace with actual image URL
      name: "Paul A.",
      title: "Founder of XYZ",
      info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa nostrum labore dolor facilis.",
    },
    {
      id: 3,
      img: "https://images.unsplash.com/photo-1573497161161-c3e73707e25c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80", // Replace with actual image URL
      name: "Cindy J.",
      title: "Founder of XYZ",
      info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa nostrum labore dolor facilis, nesciunt facere mollitia nam.",
    },
    {
      id: 4,
      img: "https://images.unsplash.com/photo-1595211877493-41a4e5f236b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=715&q=80", // Replace with actual image URL
      name: "Danica W.",
      title: "Founder of XYZ",
      info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa nostrum labore dolor.",
    },
    {
      id: 5,
      img: "https://plus.unsplash.com/premium_photo-1670588776139-da93b47afc6f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80", // Replace with actual image URL
      name: "Peter H.",
      title: "Founder of XYZ",
      info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa nostrum labore.",
    },
    {
      id: 6,
      img: "https://images.unsplash.com/photo-1629425733761-caae3b5f2e50?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80", // Replace with actual image URL
      name: "Lanny B.",
      title: "Founder of XYZ",
      info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa nostrum labore dolor facilis, nesciunt facere mollitia nam aspernatur esse!",
    },
  ],
  
  middle: [
    {
      id: 1,
      img: "https://images.unsplash.com/photo-1540569014015-19a7be504e3a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80", // Replace with actual image URL
      name: "Alex F.",
      title: "Founder of XYZ",
      info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa nostrum labore dolor facilis, nesciunt facere mollitia nam.",
    },
    {
      id: 2,
      img: "https://images.unsplash.com/photo-1629425733761-caae3b5f2e50?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80", // Replace with actual image URL
      name: "Claude O.",
      title: "Founder of XYZ",
      info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa nostrum labore dolor facilis, nesciunt.",
    },
    {
      id: 3,
      img: "https://images.unsplash.com/photo-1627161683077-e34782c24d81?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=703&q=80", // Replace with actual image URL
      name: "Max Q.",
      title: "Founder of XYZ",
      info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa nostrum labore dolor facilis.",
    },
    {
      id: 4,
      img: "https://images.unsplash.com/photo-1573497161161-c3e73707e25c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80", // Replace with actual image URL
      name: "Jeff R.",
      title: "Founder of XYZ",
      info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa nostrum labore dolor facilis, nesciunt facere mollitia nam aspernatur esse corporis!",
    },
    {
      id: 5,
      img: "https://plus.unsplash.com/premium_photo-1670588776139-da93b47afc6f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80", // Replace with actual image URL
      name: "Kevin K.",
      title: "Founder of XYZ",
      info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit!",
    },
    {
      id: 6,
      img: "https://images.unsplash.com/photo-1595211877493-41a4e5f236b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=715&q=80", // Replace with actual image URL
      name: "Andrea B.",
      title: "Founder of XYZ",
      info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa nostrum labore dolor facilis, nesciunt facere!",
    },
  ],
  

  bottom: [
    {
      id: 1,
      img: "https://images.unsplash.com/photo-1573497161161-c3e73707e25c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80", // Replace with actual image URL
      name: "Danny G.",
      title: "Founder of XYZ",
      info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa nostrum labore dolor facilis, nesciunt facere mollitia nam aspernatur!",
    },
    {
      id: 2,
      img: "https://images.unsplash.com/photo-1540569014015-19a7be504e3a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80", // Replace with actual image URL
      name: "Ian D.",
      title: "Founder of XYZ",
      info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa nostrum labore dolor facilis, nesciunt facere.",
    },
    {
      id: 3,
      img: "https://plus.unsplash.com/premium_photo-1670588776139-da93b47afc6f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80", // Replace with actual image URL
      name: "Ben S.",
      title: "Founder of XYZ",
      info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    },
    {
      id: 4,
      img: "https://images.unsplash.com/photo-1595211877493-41a4e5f236b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=715&q=80", // Replace with actual image URL
      name: "Matthew I.",
      title: "Founder of XYZ",
      info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa nostrum labore dolor facilis, nesciunt facere mollitia nam aspernatur esse corporis!",
    },
    {
      id: 5,
      img: "https://images.unsplash.com/photo-1627161683077-e34782c24d81?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=703&q=80", // Replace with actual image URL
      name: "Garrett P.",
      title: "Founder of XYZ",
      info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa nostrum labore dolor facilis, nesciunt facere mollitia.",
    },
    {
      id: 6,
      img: "https://images.unsplash.com/photo-1629425733761-caae3b5f2e50?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80", // Replace with actual image URL
      name: "Xavier C.",
      title: "Founder of XYZ",
      info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa nostrum labore dolor facilis, nesciunt facere mollitia nam aspernatur.",
    },
  ],
  

};


export default ScrollingTestimonials