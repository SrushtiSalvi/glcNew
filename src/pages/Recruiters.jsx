import { RecruiterList, RecruitersForm } from '../components/Recruiters'

import RecruitmentProcess from '../assets/img/Recruitment Process.png'

const Recruiters = () => {
    return (
        <div>
            <div className="flex flex-col lg:flex-row mt-10  align-text-bottom">
                <div className="flex-1"></div>
                <div className="flex-1  flex-col font-extrabold text-xl lg:text-2xl text-center  font-poppins  justify-center ">
                    <h1>THE RECRUITMENT PROCESS</h1>
                </div>
                <div className="flex-1 lg:flex lg:justify-end hidden  ">
                    <button className="bg-cyan-400 rounded-3xl flex-wrap text-base md:text-lg font-bold lg:mr-4 px-7">
                        View Recruitment Broucher
                    </button>
                </div>
            </div>
            <h1 className=" text-md lg:text-xl font-light my-3 text-center">
                Placement Committee
            </h1>
            <div className="flex justify-center mx-20">
                <img src={RecruitmentProcess} alt="logo"></img>
            </div>

            <h1 className="text-center font-bold text-xl md:text-2xl lg:text-3xl my-8 font-poppins">
                Registration Form
            </h1>
            <div>
                <RecruitersForm />
            </div>
            <div className="flex justify-center  my-5 text-sm lg:hidden  ">
                <button className="bg-cyan-400 rounded-3xl flex-wrap font-bold  px-7 py-1">
                    VIEW <br />
                    Recruitment Broucher
                </button>
            </div>
            <div>
                <h1 className="font-bold text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-poppins text-center mt-10">
                    Past Recruiters
                </h1>
                <div className="m-5">
                    <RecruiterList />
                </div>
            </div>
        </div>
    )
}
export default Recruiters
