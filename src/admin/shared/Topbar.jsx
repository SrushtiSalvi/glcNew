import { HiLogin, HiLogout } from 'react-icons/hi'
import { Link, useNavigate } from 'react-router-dom'
import { Menu, Transition } from '@headlessui/react'
import { useDispatch, useSelector } from 'react-redux'

import { BiChevronDown } from 'react-icons/bi'
import { FaUserCircle } from 'react-icons/fa'
import React from 'react'
import { logout } from '../../redux/actions/auth'
import { toast } from 'react-toastify'

const Topbar = () => {
  let isLoggedIn = useSelector((state) => state.isLoggedIn)
  const dispatch = useDispatch()
  let navigate = useNavigate()
  const logoutUser = () => {
    dispatch(logout())
    toast.success('Logout successful!')
    navigate('/admin/login')
  }
  return (
    <nav className="flex bg-white shadow-lg justify-between">
      <Link to="/admin/dashboard">
        <article className="p-5 ml-5 text-xl text-gray-800 dark:text-white font-bold">
          GLC Admin
        </article>
      </Link>

      <article className="flex justify-end p-4 my-auto space-x-3">
        {/* <button
        onClick={() => {
          if (localStorage.getItem('theme') === 'dark') {
            localStorage.setItem('theme', 'light');
            dispatch(setLightMode());
          } else {
            localStorage.setItem('theme', 'dark');
            dispatch(setDarkMode());
          }
        }}
        id="switchTheme"
        className="h-10 w-10 flex justify-center items-center focus:outline-none text-yellow-500">
        <svg
          className="w-6 h-6"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg">
          <path
            fillRule="evenodd"
            d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
            clipRule="evenodd"></path>
        </svg>
      </button> */}

        <Menu as="article" className="relative">
          {({ open }) => (
            <>
              <Menu.Button className="inline-flex justify-center w-full rounded-md border border-gray-300 dark:border-dark-light shadow-sm px-4 py-2 bg-white dark:bg-dark-lighter dark:text-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-primary">
                <FaUserCircle />
                <span className="ml-2 mr-1 text-xs hidden sm:block">
                  {isLoggedIn ? 'User' : 'Guest'}
                </span>
                <BiChevronDown
                  aria-hidden="true"
                  className={`${open ? 'transform rotate-180' : ''}`}
                />
              </Menu.Button>
              <Transition
                show={open}
                enter="transform transition duration-100 ease-in"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="transform transition duration-100 ease-out"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Menu.Items
                  className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white dark:bg-dark ring-1 ring-opacity-5 divide-y divide-gray-100 focus:outline-none"
                  static
                >
                  <article className="py-1">
                    {isLoggedIn ? (
                      <Menu.Item onClick={logoutUser}>
                        {({ active }) => (
                          <header
                            className={`flex items-center px-4 py-2 text-sm
              ${
                active
                  ? 'text-white hover:text-white dark:hover:bg-dark-light hover:bg-primary-light'
                  : 'text-gray-700 dark:text-white'
              }`}
                          >
                            <HiLogout
                              className={`mr-3 h-5 w-5 
                ${active ? 'text-white' : 'text-gray-400 dark:text-white'}`}
                              aria-hidden="true"
                            />
                            Logout
                          </header>
                        )}
                      </Menu.Item>
                    ) : (
                      <>
                        <Menu.Item>
                          {({ active }) => (
                            <Link
                              to="/login"
                              className={`flex items-center px-4 py-2 text-sm
              ${
                active
                  ? 'bg-primary text-white hover:text-white'
                  : 'text-gray-700'
              }`}
                            >
                              <HiLogin
                                className={`mr-3 h-5 w-5 
                ${active ? 'text-white' : 'text-gray-400'}`}
                                aria-hidden="true"
                              />
                              Login
                            </Link>
                          )}
                        </Menu.Item>
                      </>
                    )}
                  </article>
                </Menu.Items>
              </Transition>
            </>
          )}
        </Menu>
      </article>
    </nav>
  )
}

export default Topbar
