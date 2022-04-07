// npm install react-flippy
import Flippy, { BackSide, FrontSide } from 'react-flippy'

import React from 'react'

const FlagshipTiles = ({ title, centerTile, position, eligibility }) => {
    return (
        <Flippy
            flipOnHover={true}
            infinte
            flipDirection="vertical"
            className={`flex flex-col justify-center items-center ${
                centerTile ? 'w-96 h-96 ' : 'w-80 h-80 opacity-90 '
            }`}
        >
            <FrontSide className="flex bg-primary text-white rounded-md text-center justify-center items-center">
                <p
                    className={` font-medium ${
                        centerTile
                            ? 'text-xl md:text-4xl '
                            : 'text-lg md:text-3xl'
                    }`}
                >
                    {title}
                </p>
            </FrontSide>
            <BackSide className="flex flex-col text-primary border border-primary rounded-md text-center justify-center items-center">
                <p
                    className={` font-bold ${
                        centerTile ? 'text-md md:text-xl' : 'text-md md:text-lg'
                    }`}
                >
                    POSITIONS
                </p>
                <p
                    className={`${
                        centerTile ? 'text-md md:text-xl' : 'text-sm md:text-lg'
                    }`}
                >
                    {position}
                </p>
                <p
                    className={`mt-6 font-bold ${
                        centerTile ? 'text-md md:text-xl' : 'text-md md:text-lg'
                    }`}
                >
                    ELIGIBILITY
                </p>
                <p
                    className={`${
                        centerTile ? 'text-md md:text-xl' : 'text-sm md:text-lg'
                    }`}
                >
                    {eligibility}
                </p>
            </BackSide>
        </Flippy>
    )
}

export default FlagshipTiles
