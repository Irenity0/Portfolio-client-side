import Tag from "./Tag";


// const Banner = () => {
//     return (
//         <>
//   <div className="flex my-10 flex-col gap-10 md:flex-row">
//     <div className="w-1/2 lg:w-2/3">
//       <h4 className="space-x-3">
//         <Tag name={'Web Developer'}></Tag>
//         <Tag name={'Writer'}></Tag>
//         <Tag name={'Literature enthusiast'}></Tag>
//       </h4>
//       <h1 className="md:text-5xl text-4xl font-bold text-accent">Hi, I am <span className="rounded-full font-playfair underline">Afra Anjum</span></h1>
//       <p className="py-6 font-rosario text-accent">
//       I’m a web developer, passionate about new techs and creativity. I build efficient, user-friendly web solutions. Besides programming, I deeply enjoy reading and learning new things
//       </p>
//     </div>
//     <div className="">
//     <img
//       src="https://i.pinimg.com/236x/7b/be/9e/7bbe9ecb7463c4537a96c4965b7b45f6.jpg"
//       className=" mx-auto max-w-xs lg:max rounded-lg shadow-2xl" />
//     </div>
//   </div>
// </>

//     );
// };

// export default Banner;




const Banner = () => {
    return (
      <div className="bg-neutral text-primary py-16">
        <div className="flex flex-col justify-between md:flex-row items-center gap-8">
          {/* Left Column: text */}
          <div className="md:w-1/2">
            <div className="space-y-3">
            <h4 className="space-x-3">
             <Tag name={'Web Developer'}></Tag>
             <Tag name={'Writer'}></Tag>
             <Tag name={'Literature enthusiast'}></Tag>
           </h4>
           <h1 className="md:text-5xl text-4xl font-bold text-accent">Hi, I am <span className="rounded-full font-playfair underline">Afra Anjum</span></h1>
           <p className="py-6 font-rosario text-accent">
           I’m a web developer, passionate about new techs and creativity. I build efficient, user-friendly web solutions. Besides programming, I deeply enjoy reading and learning new things
           </p>
            </div>
          </div>
  
          {/* Right Column: Image */}
          <div className="md:w-1/2">
            <img
              src="https://i.pinimg.com/474x/40/41/d5/4041d50a4e3b3de55f9fa644c22f27d1.jpg"
              alt="FAQ Illustration"
              className="max-w-sm mx-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    );
  };
  
  export default Banner;