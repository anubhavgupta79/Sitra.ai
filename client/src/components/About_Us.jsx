import React from 'react'

const About_Us = () => {
  return (
     <><style>{`
                @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
            
                * {
                    font-family: 'Poppins', sans-serif;
                }
            `}</style>
            <h1 className="text-3xl font-semibold text-center mx-auto">About our apps</h1>
            <p className="text-sm text-slate-500 text-center mt-2 max-w-md mx-auto">
                A visual collection of our most recent works - each piece crafted with intention, emotion and style.
            </p>
            <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-center gap-8 px-4 md:px-0 py-10">
                <div className="size-[520px] rounded-full absolute blur-[300px] -z-10 bg-[#FBFFE1]"></div>
                <img className="max-w-sm w-full rounded-xl h-auto"
                    src="https://images.unsplash.com/photo-1555212697-194d092e3b8f?q=80&w=830&h=844&auto=format&fit=crop"
                    alt="" />
                <div>
                    <h1 className="text-3xl font-semibold">Our Latest features</h1>
                    <p className="text-sm text-slate-500 mt-2">
                        Ship Beautiful Frontends Without the Overhead — Customizable, Scalable and Developer-Friendly UI
                        Components.
                    </p>
            
                    <div className="flex flex-col gap-10 mt-6">
                        <div className="flex items-center gap-4">
                            <div className="size-9 p-2 bg-indigo-50 border border-indigo-200 rounded">
                                <img src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/aboutSection/flashEmoji.png" alt="" />
                            </div>
                            <div>
                                <h3 className="text-base font-medium text-slate-600">Lightning-Fast Performance</h3>
                                <p className="text-sm text-slate-500">Built with speed — minimal load times and optimized.</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="size-9 p-2 bg-indigo-50 border border-indigo-200 rounded">
                                <img src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/aboutSection/colorsEmoji.png" alt="" />
                            </div>
                            <div>
                                <h3 className="text-base font-medium text-slate-600">Beautifully Designed Components</h3>
                                <p className="text-sm text-slate-500">Modern, pixel-perfect UI components ready for any project.</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="size-9 p-2 bg-indigo-50 border border-indigo-200 rounded">
                                <img src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/aboutSection/puzzelEmoji.png" alt="" />
                            </div>
                            <div>
                                <h3 className="text-base font-medium text-slate-600">Plug-and-Play Integration</h3>
                                <p className="text-sm text-slate-500">Simple setup with support for React, Next.js and Tailwind css.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div flex className="items-center justify-center gap-10 max-w-4xl mx-auto px-4 md:px-0 py-10">
              <h1 className='flex items-center justify-center underline  size-md text-blue-800 text-bold'>Sitra.Ai  The Future of Content Creation</h1>
            </div>
             <p className=' gap-10 text-gray-500 text-sm  px-20 '>
                Sitra.Ai stands at the forefront of digital innovation, offering a comprehensive suite of AI-powered solutions designed to redefine the landscape of content creation. Our platform is meticulously engineered to empower creators, entrepreneurs, and developers by bridging the gap between complex technology and intuitive user experience. By leveraging state-of-the-art artificial intelligence, we provide a unified ecosystem where users can seamlessly generate high-authority articles, craft compelling blog titles, and produce <span className='bold text-blue-500'>professional-grade </span> visuals with unparalleled ease.
Built on a foundation of performance and scalability, Sitra.Ai integrates advanced tools like automated image generation, precision background removal, and intelligent content enhancement. Our mission is to eliminate creative bottlenecks and optimize workflows, allowing our users to focus on what truly matters: innovation and growth. Whether you are a solo freelancer or a scaling agency, Sitra.Ai provides the competitive edge necessary to thrive in today’s fast-paced digital economy. With a commitment to excellence and a vision for the future, Sitra.Ai is not just a platform—it’s a catalyst for creativity, productivity, and success in the digital age.
              </p>
     </>
  )
}

export default About_Us