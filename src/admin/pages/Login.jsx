import React, { useState } from 'react'

import Card from '../shared/Card'
import CardBody from '../shared/CardBody'
import CardHeader from '../shared/CardHeader'
import { VscLoading } from 'react-icons/vsc'
import { login } from '../../redux/actions/auth'
import { loginByUsernamePassword } from '../api/auth'
import { toast } from 'react-toastify'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [password, setPassword] = useState('')
  const [username, setUsername] = useState('')
  let dispatch = useDispatch()
  let navigate = useNavigate()

  const handleSubmit = async () => {
    setIsLoading(true)
    let res = await loginByUsernamePassword(username, password)
    if (res['success']) {
      dispatch(login(res['data']['access_token']))
      setIsLoading(false)
      setPassword('')
      setUsername('')
      toast.success('Login success!')
      navigate('/admin/dashboard')
    } else {
      setIsLoading(false)
      setPassword('')
      toast.error('Login failed!')
    }
  }

  return (
    <main className="p-5 bg-gray-600 h-screen">
      <section className="mx-auto mt-40 max-w-lg">
        <Card>
          <CardHeader>Login</CardHeader>
          <CardBody>
            <form>
              <section className="sm:rounded-md">
                <section className="px-4 py-5 bg-white sm:p-6">
                  <article className="grid grid-cols-6 gap-6">
                    <aside className="col-span-6 sm:col-span-4">
                      <label
                        htmlFor="username"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Username
                      </label>
                      <input
                        type="text"
                        placeholder="Enter Username"
                        name="text"
                        id="username"
                        onChange={(e) => {
                          setUsername(e.target.value)
                        }}
                        onKeyPress={(e) => {
                          if (e.key === 'Enter') {
                            e.preventDefault()
                          }
                        }}
                        className=" mt-1 bg-gray-200 focus:bg-white focus:ring-primary-light focus:border-primary-light block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </aside>

                    <aside className="col-span-6 sm:col-span-4">
                      <label
                        htmlFor="password"
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                      >
                        Password
                      </label>
                      <input
                        type="password"
                        placeholder="Enter Password"
                        name="password"
                        id="password"
                        onChange={(e) => {
                          setPassword(e.target.value)
                        }}
                        onKeyPress={(e) => {
                          if (e.key === 'Enter') {
                            e.preventDefault()
                            handleSubmit()
                          }
                        }}
                        className="mt-1 bg-gray-200 focus:bg-white focus:ring-primary-light dark:text-gray-900 focus:border-primary-light block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </aside>
                  </article>
                </section>
                <section className="px-4 py-3 sm:px-6 flex justify-start space-x-3 col-span-6">
                  {isLoading ? (
                    <VscLoading className="animate-spin" />
                  ) : (
                    <button
                      onClick={() => {
                        handleSubmit()
                      }}
                      type="button"
                      className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-primary hover:bg-primary-light focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-light"
                    >
                      Login
                    </button>
                  )}
                </section>
              </section>
            </form>
          </CardBody>
        </Card>
      </section>
    </main>
  )
}

export default Login
