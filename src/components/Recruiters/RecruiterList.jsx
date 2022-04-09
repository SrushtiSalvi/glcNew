import React from 'react'

const RecruiterList = () => {
    return (
        <div class="flex flex-col sm:flex-row justify-between ">
            <div className=" text-center flex-1  ">
                <div>
                    <h1
                        data-aos="fade-right"
                        className="text-xl  md:text-2xl bg-primary-dark rounded-full text-white  m-5"
                    >
                        Law Firms
                    </h1>
                </div>

                <ul
                    data-aos="fade-up"
                    className="text-base md:text-xl delay-750"
                >
                    <li>A&S Legal</li>
                    <li>Abja Advisory</li>
                    <li>Acuity Law</li>
                    <li>Advani & Co.</li>
                    <li>Advaya Legal</li>
                    <li>Advent Juris</li>
                    <li>Ahuja & Associates</li>
                    <li>AK Legal & Associates</li>
                    <li>ALG India Law Offices LLP</li>
                    <li>Alliance Law</li>
                    <li>ALMT Legal</li>
                    <li>Argus Partners</li>
                    <li>Arogya Legal</li>
                    <li>Ashwin Ankhad & Associates</li>
                    <li>Auroma Law</li>
                    <li>AZB & Partners</li>
                    <li>Batavia Legal</li>
                    <li>Begur & Partners (formerly ARA LAW)</li>
                    <li>Bekay Legal</li>
                    <li>Bharucha & Partners</li>
                    <li>Boazz Law Chambers</li>
                    <li>Bombay Law Chambers</li>
                    <li>Bulwark Solicitors</li>
                    <li>Clove Legal</li>
                    <li>Consortia Legal</li>
                    <li>Constellation Blu</li>
                    <li>Crawford Bayley & Co.</li>
                    <li>Cyril Amarchand Mangaldas</li>
                    <li>D. M. Harish & Co.</li>
                    <li>D.D. Shah & Associates</li>
                </ul>
            </div>
            <div className="flex-1 flex-col space-y-5">
                <div className=" flex-1 text-center ">
                    <h1
                        data-aos="fade-right"
                        className="text-xl md:text-2xl  m-5 bg-primary-dark rounded-full text-white"
                    >
                        Corporate
                    </h1>
                    <ul
                        data-aos="fade-up"
                        className="text-base md:text-xl delay-750"
                    >
                        <li>Abott India</li>
                        <li>Acies Consulting LLP</li>
                        <li>Aditya Birla Group</li>
                        <li>Ahuja Group</li>
                        <li>Alsisar Impact Pvt. Ltd.</li>
                        <li>Ania Advisory LLP</li>
                        <li>ANM Global</li>
                        <li>Ascent Pharmaceuticals Pvt. Ltd.</li>
                        <li>Asian Paints</li>
                        <li>Axis Bank</li>
                        <li>Balaji Telefilms Ltd.</li>
                    </ul>
                </div>
                <div className=" flex-1 text-center   ">
                    <h1
                        data-aos="fade-right"
                        className=" block text-xl md:text-2xl bg-primary-dark rounded-full text-white m-5"
                    >
                        Counsel
                    </h1>
                    <ul
                        data-aos="fade-up"
                        className="text-base md:text-xl delay-750"
                    >
                        <li>Adv. Aarti Sathe </li>
                        <li>Adv. Abhishek Dhingra</li>
                        <li>Adv. Abraham Mathews</li>
                        <li>Adv. Aditya N. Mehta</li>
                        <li>Adv. Advait Sethna</li>
                        <li>Adv. Amin Solkar</li>
                        <li>Adv. Anay Banhatti</li>
                        <li>Adv. Ashish S. Chavan</li>
                        <li>Adv. Bhavik Lalan</li>
                        <li>Adv. Chirag Shah</li>
                        <li>Adv. Chritarth Palli</li>
                    </ul>
                </div>
            </div>
            <div className="flex-1 flex-col space-y-5">
                <div className=" flex-1 text-center  ">
                    <h1
                        data-aos="fade-right"
                        className=" block text-base md:text-xl bg-primary-dark rounded-full text-white m-5"
                    >
                        Goverment Authorities, Tribunals & NGOs:
                    </h1>
                    <ul data-aos="fade-up" className="text-base md:text-xl">
                        <li>Commonwealth Human Rights Initiative</li>
                        <li>DSAC, IIIT Hyderabad</li>
                        <li>Human Rights Law Network</li>
                        <li>Justice Venture India Trust</li>
                        <li>
                            Mr. Bijay Kumar (Ex-IAS/ Maharashtra Administrative
                            Tribunal)
                        </li>
                        <li>Serious Fraud Investigation Office</li>
                        <li>State Election commission,Maharashtra</li>
                        <li>TribestforGOOD</li>
                        <li>Wockhardt Foundation</li>
                    </ul>
                </div>
                <div className=" flex-1 text-center ">
                    <h1
                        data-aos="fade-right"
                        className=" block text-xl md:text-2xl bg-primary-dark rounded-full text-white m-5"
                    >
                        Legal Process Outsourcing (LPOs):
                    </h1>
                    <ul data-aos="fade-up" className="text-base md:text-xl ">
                        <li>H5 Asia Pacific </li>
                        <li>Pangea3 Legal Database Systems Pvt. Ltd. Echo</li>
                        <li>Solutions Pvt. Ltd.</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default RecruiterList
