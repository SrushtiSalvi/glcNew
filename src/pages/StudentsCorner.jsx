import { Dropdown } from '../components/StudentsCorner'
import { IoBookSharp } from 'react-icons/io5'
import { Link } from 'react-router-dom'
import { MdOutlineArrowForwardIos } from 'react-icons/md'
import React from 'react'
import { RiFileList3Fill } from 'react-icons/ri'
import samplePDF from '../assets/pdfs/sample.pdf'
import { useNavigate } from 'react-router-dom'

const StudentsCorner = () => {
    let navigate = useNavigate()
    return (
        <div className="m-4">
            <div className="shadow-lg shadow-gray-500 rounded-3xl p-4">
                <div className="border-b-2 border-primary-light flex gap-4 p-4 text-primary-dark">
                    <IoBookSharp className="my-auto mx-4 text-2xl md:text-3xl " />
                    <h1 className="text-lg md:text-2xl font-semibold">
                        Notice Board
                    </h1>
                </div>
                <div className="my-4 md:my-6 space-y-4 md:space-y-6 mx-4">
                    <p className="text-sm md:text-lg">
                        Welcome to GLC Placement Notice Board.
                        <br />
                        Please Click on the following button to view all
                        Notices.
                    </p>
                    <button
                        className="bg-primary-dark text-white text-xs md:text-base py-1 px-5 rounded-xl"
                        onClick={() => navigate('/all-posts')}
                    >
                        View Notices
                    </button>
                </div>
            </div>
            <div className="p-4 lg:border-b lg:border-primary-dark">
                <div className="border-b-2 border-primary-light flex gap-4 p-4 text-primary-dark">
                    <RiFileList3Fill className="text-3xl" />
                    <h1 className="text-lg md:text-2xl font-semibold">
                        Rules & Regulations
                    </h1>
                </div>
                <div className="my-4 space-y-2">
                    <Dropdown
                        title="DEFINITIONS USED IN THE RULES AND REGULATIONS"
                        content={
                            <ol className="space-y-2 list-decimal">
                                <li>
                                    Application: Shall refer to the Curriculum
                                    Vitae (CV) for the said position under the
                                    Placement Notice.
                                </li>
                                <li>
                                    Recruiter: Shall refer to any Company, Law
                                    Firm, Independent Practitioners, Lawyers,
                                    etc.
                                </li>
                                <li>
                                    Placement Committee: Shall refer to the
                                    Placement Committee/Cell or Recruitment
                                    Coordination Committee (RCC) of Government
                                    Law College, Mumbai.{' '}
                                </li>
                                <li>
                                    Secretaries: Shall refer to the General
                                    Secretary and Assistant General Secretary of
                                    the Placement Committee, Government Law
                                    College (GLC), Mumbai.
                                </li>
                                <li>
                                    HR: Shall refer to the Human Resource
                                    Manager associated with any recruiter or any
                                    concerned third-person connected with the
                                    Placement Committee who is directly involved
                                    in the placement process.
                                </li>
                                <li>
                                    Associate: Shall refer to all the positions
                                    who are full time and permanent in nature.
                                </li>
                            </ol>
                        }
                    />
                    <Dropdown
                        title="1.   GUIDELINES REGARDING CV"
                        content={
                            <ol className="space-y-2 list-decimal">
                                <li>
                                    Students applying for a recruitment vacancy
                                    through the Placement Committee should
                                    ensure that the CV is according to the
                                    standard format of the Placement Committee.
                                </li>
                                <li>
                                    If there is any error in the CV then, a
                                    member of the Placement Committee will
                                    communicate the same. Once informed, the
                                    rectified CV should be sent by the candidate
                                    or their proxies within 15 minutes to 1
                                    hour. After the lapse of 1 hour, the
                                    Placement Committee will not be processing
                                    and forwarding the CV further.
                                </li>
                                <li>
                                    The candidate should adhere to the deadline
                                    provided by the Placement Committee while
                                    applying for any vacancy. Only under
                                    exceptional circumstances and after getting
                                    approval from/of the Secretaries, the late
                                    application shall be considered.
                                </li>
                                <li>
                                    The eligibility of a vacancy shall be
                                    specified by the Placement Committee. If a
                                    candidate fails to fall within the
                                    eligibility criteria, their application
                                    would be discarded automatically.
                                </li>
                            </ol>
                        }
                    />
                    <Dropdown
                        title="2.   POLICY REGARDING SHORTLIST"
                        content={
                            <ol className="space-y-2 list-decimal">
                                <li>
                                    Only the students who have been shortlisted
                                    will be informed via a Placement Committee
                                    member about their application status
                                    including the interview details, selection,
                                    etc. The students who have not been
                                    shortlisted or selected further will not be
                                    updated.
                                </li>
                                <li>
                                    No inquiry regarding the vacancy, the
                                    shortlisted number of candidates and the
                                    names of shortlisted candidates shall be
                                    entertained. The Placement Committee
                                    reserves the right to publish such a list
                                    upon the discretion of the Prof. H. D.
                                    Pithawalla (Professor In-charge) or the
                                    Secretaries.
                                </li>
                                <li>
                                    The Placement Committee reserves the right
                                    to give contact details of the candidates to
                                    the recruiter, shall a need arise.
                                </li>
                                <li>
                                    The guidelines mentioned herein about the
                                    shortlist can be applied to the
                                    Selected-List of candidates.
                                </li>
                                <li>
                                    If a student has applied via Placement
                                    Committee of the college, all communications
                                    should take place via the committee, and in
                                    case the student is in any direct contact
                                    with the recruiter, the student must inform
                                    the committee about the same immediately. No
                                    attempt by the students shall be made to
                                    contact the recruiters directly in regards
                                    to the status of their application.{' '}
                                </li>
                            </ol>
                        }
                    />
                    <Dropdown
                        title="3.  POLICY FOR THE POST-SHORTLIST INTERVIEW"
                        content={
                            <ol className="space-y-2 list-decimal">
                                <li>
                                    If a student has applied for a vacancy and
                                    gets shortlisted for an interview, it is
                                    mandatory for the student to appear for the
                                    same.{' '}
                                </li>
                                <li>
                                    If any problem/emergency/inability makes a
                                    candidate unavailable for the scheduled
                                    interview, such a candidate can ask for
                                    rescheduling. No request concerning the
                                    withdrawal of such application can be made
                                    then (after shortlist).
                                </li>
                                <li>
                                    The Placement Committee does not guarantee a
                                    reschedule for the said interview. It lies
                                    upon the discretion of the recruiter whether
                                    to approve it or not.
                                </li>
                                <li>
                                    If a candidate does not appear for the
                                    interview, knowingly or unknowingly, after
                                    being informed of the same, such candidate
                                    shall face a penalty with respect to
                                    applying for any vacancy through the
                                    Placement Committee for specific period as
                                    decided by Professor In-charge and the
                                    Secretaries, after ascertaining the
                                    misconduct.
                                </li>
                                <li>
                                    In case of a medical emergency or technical
                                    failure or inability to reach for the
                                    interview, shall the student be given leeway
                                    after the candidate furnishes valid proof
                                    and a formal statement/reason corroborating
                                    the same. This will lie upon the sole
                                    discretion of the Secretaries whether to
                                    accept it or not.
                                </li>
                                <li>
                                    Only in the case of a candidate getting
                                    selected for some other position concerning
                                    any application (pursuant to the candidate
                                    accepting it) associated with the Placement
                                    Committee, shall the candidate’s application
                                    be withdrawn from other interview processes
                                    if it is for the same duration/tenure. The
                                    withdrawal is mandatory and such candidates
                                    may or may not be informed about the same.
                                </li>
                                <li>
                                    In case of rescheduling of interviews by the
                                    recruiter, the Placement Committee shall not
                                    be liable for the same. The candidates are
                                    expected to comply with the said reschedule
                                    and such rescheduling will be conveyed to
                                    the shortlisted students by any member of
                                    the Placement Committee or Recruiter.
                                </li>
                            </ol>
                        }
                    />
                    <Dropdown
                        title="4.  POLICY FOR SELECTION AND POST-ACCEPTANCE  OF OFFER"
                        content={
                            <ol className="space-y-2 list-decimal">
                                <li>
                                    It is to be noted that, after interviews, it
                                    lies upon the discretion of any candidate
                                    whether to accept or reject the offer.{' '}
                                </li>
                                <li>
                                    The candidate accepting or rejecting the
                                    offer has to give a formal confirmation of
                                    the same via a written formal statement and
                                    in case, the students reject, he/she shall
                                    also state the reason for such denial of the
                                    offer.
                                </li>
                                <li>
                                    In cases, where the recruiter has pre-hand
                                    specified that the candidates should only
                                    apply if they will be complying with the
                                    selection, in that case, the candidate has
                                    to necessarily accept the offer and cannot
                                    deny it later (after selection).
                                </li>
                                <li>
                                    If any candidate, after acceptance of offer,
                                    rejects it or fails to complete the agreed
                                    duration, then such candidate shall be
                                    barred from participating in the future
                                    recruitment process of the said recruiter,
                                    in case if a recruiter demands. That
                                    candidate shall also face a penalty with
                                    respect to applying for any vacancy through
                                    the Placement Committee as decided by
                                    Professor In-charge and the Secretaries,
                                    after ascertaining the misconduct.
                                </li>
                                <li>
                                    If any student confirms to join any
                                    recruiter for any position, he/she shall
                                    commence on the proposed date. Any change or
                                    rejection after confirmation should be
                                    communicated to the Placement Committee well
                                    in advance. Also, in case of rejection, if
                                    the student is not able to provide a
                                    satisfactory reason for the same,
                                    appropriate action will be taken against
                                    such a student.{' '}
                                </li>
                                <li>
                                    Any unprofessional behavior/mode of conduct
                                    reported by the recruiter in regards to any
                                    candidate placed by the Placement Committee
                                    shall invite strict appropriate actions and
                                    sanctions on the candidature of such
                                    candidate. That candidate shall also face a
                                    penalty with respect to applying for any
                                    vacancy through the Placement Committee for
                                    specific period as decided by Professor
                                    In-charge and the Secretaries, after
                                    ascertaining the misconduct.
                                </li>
                                <li>
                                    As soon as a student accepts the offer for
                                    any position other than Associate, via
                                    Placement Committee, he/she shall not be
                                    eligible to apply for any other position
                                    other than Associate for the period that
                                    he/she has already confirmed with the
                                    previous recruiter. In case the joining of
                                    the other position is negotiable, the
                                    application will be considered after careful
                                    deliberation by the Placement Committee.
                                </li>
                                <li>
                                    As soon as a student accepts the offer as an
                                    Associate with any recruiter, via Placement
                                    Committee, he/she shall not be eligible to
                                    apply for any position, with immediate
                                    cancellation/withdrawal of/from all pending
                                    interviews.{' '}
                                </li>
                                <li>
                                    Only selected candidates can ask for the
                                    name or contact details of the HR or the
                                    concerned person associated with the
                                    recruitment process of the said recruiter.
                                    That can only be provided at the discretion
                                    of such HR or the concerned person.
                                </li>
                            </ol>
                        }
                    />
                    <Dropdown
                        title="5.  IMPORTANT NOTE"
                        content={
                            <ol className="space-y-2 list-decimal">
                                <li>
                                    In case of any default with regards to the
                                    above-mentioned rules, an appropriate action
                                    may be taken against that student, at the
                                    complete discretion of Prof. H. D.
                                    Pithawalla (Professor In-charge) and the
                                    Secretaries of the Placement Committee.
                                </li>
                                <li>
                                    The Placement Committee reserves the right
                                    to change the above rules and regulations
                                    without any prior notice.
                                </li>
                                <li>
                                    The Placement Committee shall not be
                                    responsible for any recruiter cancelling
                                    their registration or delaying the response
                                    regarding the same.
                                </li>
                            </ol>
                        }
                    />
                </div>
            </div>
            <div className="lg:grid lg:grid-cols-2 md:w-4/5 mx-auto lg:p-12">
                <div className="hidden lg:block bg-gradient-to-b from-primary-dark to-primary-lighter text-white m-6 p-10 my-6 xl:py-16 space-y-10">
                    <h1 className="xl:text-4xl text-3xl font-semibold">
                        Sample CV <br /> Format
                    </h1>
                    <p className="xl:text-2xl text-xl font-medium">
                        Refer the given Sample CV Format for building your CV.
                    </p>
                    <Link
                        className="xl:text-xl text-lg justify-center underline underline-offset-8 flex mx-auto gap-4"
                        to={samplePDF}
                        target="_blank"
                        download
                    >
                        Sample CV
                        <MdOutlineArrowForwardIos />
                    </Link>
                </div>
                <div className="m-4 my-6 shadow-md shadow-primary-dark p-6 md:p-10 xl:py-16 space-y-10">
                    <h1 className="text-lg xl:text-4xl md:text-3xl font-semibold text-primary-dark">
                        Want to Build <br />a CV?
                    </h1>
                    <p className="text-sm md:text-xl xl:text-2xl text-primary-dark font-medium">
                        To Create a CV, Please Click below and fill the required
                        Data.
                    </p>
                    <div className="flex justify-between py-4">
                        <button
                            className="bg-primary text-white text-xs md:text-lg  xl:txet-xl px-6 rounded-xl"
                            onClick={() => navigate('/cv-builder')}
                        >
                            Click Here
                        </button>
                        <Link
                            className="lg:hidden text-xxs md:text-xs border-b flex border-primary-dark"
                            to={samplePDF}
                            target="_blank"
                            download
                        >
                            Sample CV
                            <MdOutlineArrowForwardIos />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StudentsCorner
