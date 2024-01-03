import React from 'react'

const Clients = () => {
  return (
    <section>
        <div className="container py-5 md:py-12">
            <div className="grid grid-cols-6 gap-x-10 gap-y-5 md:gap-x-10 lg:gap-y-0 lg:gap-x-20">
                <div className="col-span-2 self-center md:col-span-1">
                    <div className="">
                        <img src="./product.svg" className='w-full grayscale duration-200 hover:grayscale-0' alt="" />
                    </div>
                </div>
                <div className="col-span-2 self-center md:col-span-1">
                    <div className="">
                        <img src="./pinpoint.svg" className='w-full grayscale duration-200 hover:grayscale-0' alt="" />
                    </div>
                </div>
                <div className="col-span-2 self-center md:col-span-1">
                    <div className="">
                        <img src="./wonderer.svg" className='w-full grayscale duration-200 hover:grayscale-0' alt="" />
                    </div>
                </div>
                <div className="col-span-2 self-center md:col-span-1">
                    <div className="">
                        <img src="./voyage.svg" className='w-full grayscale duration-200 hover:grayscale-0' alt="" />
                    </div>
                </div>
                <div className="col-span-2 self-center md:col-span-1">
                    <div className="">
                        <img src="./wayfarer.svg" className='w-full grayscale duration-200 hover:grayscale-0' alt="" />
                    </div>
                </div>
                <div className="col-span-2 self-center md:col-span-1">
                    <div className="">
                        <img src="./truant.svg" className='w-full grayscale duration-200 hover:grayscale-0' alt="" />
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Clients