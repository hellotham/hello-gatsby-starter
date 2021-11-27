import * as React from 'react'
import { useForm } from 'react-hook-form'
import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { CheckCircleIcon } from '@heroicons/react/outline'

import SiteMetadata from '@/utils/sitemetadata'
import Layout from '@/components/layout'
import SEO from '@/components/seo'
import PageHero from '@/components/PageHero'
import Map from '@/components/map'

import Email from '@/svg/icons/email.inline.svg'
import Phone from '@/svg/icons/phone.inline.svg'
import LinkedIn from '@/svg/icons/linkedin.inline.svg'
import Facebook from '@/svg/icons/facebook.inline.svg'
import Instagram from '@/svg/icons/instagram.inline.svg'
import Twitter from '@/svg/icons/twitter.inline.svg'
import Github from '@/svg/icons/github.inline.svg'

import Image from '@/svg/undraw/undraw_contact_us_-15-o2.svg'
import OGImage from '@/images/undraw/undraw_contact_us_15o2.png'

export default function ContactUs() {
  // Default coordinates are that of Sydney, NSW, Australia
  const position: [number, number] = [-33.86785, 151.20732]

  const [open, setOpen] = useState(false)
  const ogimage = {
    src: OGImage,
    width: 1342,
    height: 1024,
  }

  const metadata = SiteMetadata().siteMetadata

  const contactMethods = [
    { name: 'Email', link: 'email' in metadata.social ? metadata.social.email : null, image: Email },
    { name: 'Phone', link: 'phone' in metadata.social ? metadata.social.phone : null, image: Phone },
    { name: 'LinkedIn', link: 'linkedin' in metadata.social ? metadata.social.linkedin : null, image: LinkedIn },
    { name: 'Facebook', link: 'facebook' in metadata.social ? metadata.social.facebook : null, image: Facebook },
    { name: 'Instagram', link: 'instagram' in metadata.social ? metadata.social.instagram : null, image: Instagram },
    { name: 'Twitter', link: 'twitter' in metadata.social ? metadata.social.twitter : null, image: Twitter },
    { name: 'Github', link: 'github' in metadata.social ? metadata.social.github : null, image: Github },
  ]
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const onSubmit = (data: unknown) => {
    fetch('/api/sendgrid', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'content-type': 'application/json',
      },
    })
      .then(res => res.json())
      .then(body => {
        console.log('response from API:', body)
        setOpen(true)
      })
  }

  console.log({ errors })
  return (
    <Layout>
      <SEO
        type="page"
        title="Contact Us"
        description="Our presence is real and digital. Contact us through the following ways."
        image={ogimage}
        pathname="/contactus"
      />
      <main className="mt-10">
        <article className="post">
          <header>
            <PageHero
              title="Contact Us"
              description="Our presence is real and digital. Contact us through the following ways."
              image={Image}
            />
          </header>
        </article>

        <Map lat={-33.86785} lng={151.20732} />

        <div className="mt-10 sm:mt-0 p-8 bg-purple-100">
          <div className="lg:grid lg:grid-cols-3 lg:gap-6">
            <div className="lg:col-span-1">
              <div className="px-4 sm:px-0">
                {contactMethods.map(method =>
                  method.link ? (
                    <p key={method.name} className="mt-2 flex items-center text-sm text-gray-500">
                      <method.image className=" h-5 w-5" />
                      <span>&nbsp;{method.name}:&nbsp;</span>
                      <a href={method.link} className="text-purple-600 hover:text-pink-600">
                        {method.link}
                      </a>
                    </p>
                  ) : (
                    ''
                  )
                )}
              </div>
            </div>

            <div className="mt-5 lg:mt-0 lg:col-span-2 mb-24">
              <form onSubmit={handleSubmit(onSubmit)} method="POST">
                <div className="shadow overflow-hidden sm:rounded-md">
                  <div className="px-4 py-5 bg-white sm:p-6">
                    <div className="grid grid-cols-6 gap-6">
                      <div className="col-span-6 sm:col-span-6">
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                          Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          autoComplete="off"
                          className="mt-1 focus:ring-purple-500 focus:border-purple-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                          {...register('name', { required: true, maxLength: 256 })}
                        />
                      </div>

                      <div className="col-span-6">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                          Email address
                        </label>
                        <input
                          type="email"
                          id="email"
                          autoComplete="off"
                          className="mt-1 focus:ring-purple-500 focus:border-purple-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                          {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
                        />
                      </div>

                      <div className="col-span-6">
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                          Phone
                        </label>
                        <input
                          type="tel"
                          multiple
                          id="phone"
                          autoComplete="off"
                          className="mt-1 focus:ring-purple-500 focus:border-purple-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                          {...register('phone', {
                            required: true,
                            minLength: 6,
                            maxLength: 12,
                          })}
                        />
                      </div>

                      <div className="col-span-6">
                        <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                          Subject
                        </label>
                        <input
                          type="text"
                          id="subject"
                          autoComplete="on"
                          className="mt-1 focus:ring-purple-500 focus:border-purple-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                          {...register('subject', { required: true, maxLength: 256 })}
                        />
                      </div>

                      <div className="col-span-6">
                        <label htmlFor="text" className="block text-sm font-medium text-gray-700">
                          Message
                        </label>
                        <textarea
                          className="form-textarea mt-1 block w-full h-32 focus:ring-purple-500 focus:border-purple-500 shadow-sm sm:text-sm border-gray-300 rounded-md"
                          rows={5}
                          id="text"
                          placeholder="Enter your message here."
                          {...register('text', { required: true })}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                    <button
                      type="submit"
                      className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
                    >
                      Send
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="fixed z-10 inset-0 overflow-y-auto" onClose={setOpen}>
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                      <CheckCircleIcon className="h-6 w-6 text-green-600" aria-hidden="true" />
                    </div>
                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                      <Dialog.Title as="h3" className="text-lg leading-6 font-medium text-gray-900">
                        Your message was sent!
                      </Dialog.Title>
                      <div className="mt-2">
                        <p className="text-sm text-gray-500">Thank you for contacting us. We will respond shortly.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                  <button
                    type="button"
                    className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:ml-3 sm:w-auto sm:text-sm"
                    onClick={() => setOpen(false)}
                  >
                    OK
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
    </Layout>
  )
}
