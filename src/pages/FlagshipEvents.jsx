import FlagshipTiles from '../components/FlagshipEvents/FlagshipTiles'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const FlagshipEvents = () => {
    const current = new Date()
    const currentMonth = current.getMonth() + 1
    // const currentMonth = 10;

    return (
        <div className="my-8 flex space-x-4 items-center justify-center">
            {currentMonth === 2 ? (
                <FlagshipTiles
                    title="GLC E-CAMPUS RECRUITMENT"
                    position="Associate"
                    eligibility="Final Year Students (V-V & III-III)"
                />
            ) : (
                <FlagshipTiles
                    title="FEBRUARY PLACEMENT WEEK"
                    position="Intern, Articled Clerk, Associate"
                    eligibility="V-III, V-IV, V-V & III-I, III-II, III-III"
                />
            )}
            {currentMonth === 2 ? (
                <FlagshipTiles
                    centerTile
                    title="FEBRUARY PLACEMENT WEEK"
                    position="Intern, Articled Clerk, Associate"
                    eligibility="V-III, V-IV, V-V & III-I, III-II, III-III"
                />
            ) : currentMonth === 10 ? (
                <FlagshipTiles
                    centerTile
                    title="OCTOBER PLACEMENT WEEK"
                    position="Associate"
                    eligibility="Final Year Students(V-V & III-III)"
                />
            ) : (
                <FlagshipTiles
                    centerTile
                    title="GLC E-CAMPUS RECRUITMENT"
                    position="Associate"
                    eligibility="Final Year Students (V-V & III-III)"
                />
            )}
            {currentMonth === 10 ? (
                <FlagshipTiles
                    title="GLC E-CAMPUS RECRUITMENT"
                    position="Associate"
                    eligibility="Final Year Students (V-V & III-III)"
                />
            ) : (
                <FlagshipTiles
                    title="OCTOBER PLACEMENT WEEK"
                    position="Associate"
                    eligibility="Final Year Students(V-V & III-III)"
                />
            )}
        </div>
    )
}

export default FlagshipEvents
