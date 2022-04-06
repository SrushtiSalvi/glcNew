import React from 'react'
import image from '../assets/img/handshake.jpg'

const AllNotices = () => {
    return (
        <div className="p-5">
            <h1 className="text-center font-medium text-lg md:text-2xl">
                All Notices
            </h1>
            <section className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 auto-rows-auto gap-10 my-10">
                <div className="container flex flex-col justify-self-center w-full border rounded-xl overflow-hidden">
                    <img src={image} alt="img" className="" />
                    <div className="p-3">
                        <h1 className="font-medium">Title</h1>
                        <p>mini content</p>
                    </div>
                </div>
                <div className="container flex flex-col justify-self-center w-full border rounded-xl overflow-hidden">
                    <img src={image} alt="img" className="" />
                    <div className="p-3">
                        <h1 className="font-medium">Title</h1>
                        <p>mini content</p>
                    </div>
                </div>
                <div className="container flex flex-col justify-self-center w-full border rounded-xl overflow-hidden">
                    <img src={image} alt="img" className="" />
                    <div className="p-3">
                        <h1 className="font-medium">Title</h1>
                        <p>mini content</p>
                    </div>
                </div>
                <div className="container flex flex-col justify-self-center w-full border rounded-xl overflow-hidden">
                    <img src={image} alt="img" className="" />
                    <div className="p-3">
                        <h1 className="font-medium">Title</h1>
                        <p>mini content</p>
                    </div>
                </div>
                <div className="container flex flex-col justify-self-center w-full border rounded-xl overflow-hidden">
                    <img src={image} alt="img" className="" />
                    <div className="p-3">
                        <h1 className="font-medium">Title</h1>
                        <p>mini content</p>
                    </div>
                </div>
                <div className="container flex flex-col justify-self-center w-full border rounded-xl overflow-hidden">
                    <img src={image} alt="img" className="" />
                    <div className="p-3">
                        <h1 className="font-medium">Title</h1>
                        <p>mini content</p>
                    </div>
                </div>
                <div className="container flex flex-col justify-self-center w-full border rounded-xl overflow-hidden">
                    <img src={image} alt="img" className="" />
                    <div className="p-3">
                        <h1 className="font-medium">Title</h1>
                        <p>mini content</p>
                    </div>
                </div>
                <div className="container flex flex-col justify-self-center w-full border rounded-xl overflow-hidden">
                    <img src={image} alt="img" className="" />
                    <div className="p-3">
                        <h1 className="font-medium">Title</h1>
                        <p>mini content</p>
                    </div>
                </div>
                <div className="container flex flex-col justify-self-center w-full border rounded-xl overflow-hidden">
                    <img src={image} alt="img" className="" />
                    <div className="p-3">
                        <h1 className="font-medium">Title</h1>
                        <p>mini content</p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default AllNotices
