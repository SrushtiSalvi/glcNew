import React from 'react'
import image from '../assets/img/handshake.jpg'

const SingleNotice = () => {
    return (
        <div className="m-6 md:m-16 flex flex-col align-middle place-items-center gap-8 shadow-lg shadow-gray-500 p-5">
            <h1 className="w-full text-lg md:text-xl lg:text-2xl font-medium border-b-2 border-gray-400 p-3">
                Notice Title
            </h1>
            <div>
                <img src={image} alt="img" className="" />
            </div>
            <section className="w-full text-sm md:text-lg p-5">
                <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing software
                    like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
            </section>
        </div>
    )
}

export default SingleNotice
