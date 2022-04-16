import FlagshipSingleTile from './FlagshipSingleTile';
import React from 'react';
import TileImg1 from '../../assets/Rectangle 185.png';
import TileImg2 from '../../assets/Rectangle 186.png';
import TileImg3 from '../../assets/Rectangle 187.png';

const FlagshipTiles = () => {
  const current = new Date();
  const currentMonth = current.getMonth() + 1;
  // const currentMonth = 10;
  return (
    <div className="my-8 flex space-x-4 items-center justify-center">
      {currentMonth === 2 ? (
        <FlagshipSingleTile
          img={TileImg3}
          title="GLC E-CAMPUS RECRUITMENT"
          position="Associate"
          eligibility="Final Year Students (V-V & III-III)"
        />
      ) : (
        <FlagshipSingleTile
          img={TileImg1}
          title="FEBRUARY PLACEMENT WEEK"
          position="Intern, Articled Clerk, Associate"
          eligibility="V-III, V-IV, V-V & III-I, III-II, III-III"
        />
      )}
      {currentMonth === 2 ? (
        <FlagshipSingleTile
          img={TileImg1}
          centerTile
          title="FEBRUARY PLACEMENT WEEK"
          position="Intern, Articled Clerk, Associate"
          eligibility="V-III, V-IV, V-V & III-I, III-II, III-III"
        />
      ) : currentMonth === 10 ? (
        <FlagshipSingleTile
          img={TileImg2}
          centerTile
          title="OCTOBER PLACEMENT WEEK"
          position="Associate"
          eligibility="Final Year Students(V-V & III-III)"
        />
      ) : (
        <FlagshipSingleTile
          img={TileImg3}
          centerTile
          title="GLC E-CAMPUS RECRUITMENT"
          position="Associate"
          eligibility="Final Year Students (V-V & III-III)"
        />
      )}
      {currentMonth === 10 ? (
        <FlagshipSingleTile
          img={TileImg3}
          title="GLC E-CAMPUS RECRUITMENT"
          position="Associate"
          eligibility="Final Year Students (V-V & III-III)"
        />
      ) : (
        <FlagshipSingleTile
          img={TileImg2}
          title="OCTOBER PLACEMENT WEEK"
          position="Associate"
          eligibility="Final Year Students(V-V & III-III)"
        />
      )}
    </div>
  );
};

export default FlagshipTiles;
