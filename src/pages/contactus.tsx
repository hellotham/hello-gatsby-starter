import * as React from "react"

import Layout from "@/components/layout"
import Seo from "@/components/seo"

import PageHero from "@/components/PageHero"

import Image from "@/svg/undraw_contact_us_15o2.svg"

import Email from "@/svg/email.svg"
import Phone from "@/svg/phone.svg"
import LinkedIn from "@/svg/linkedin.svg"
import Facebook from "@/svg/facebook.svg"
import Instagram from "@/svg/instagram.svg"
import Twitter from "@/svg/twitter.svg"

const contactMethods = [
  { name: "Email", link: "mailto:info@hellotham.com", image: Email },
  { name: "Phone", link: "tel:+61413008577", image: Phone },
  { name: "LinkedIn", link: "https://www.linkedin.com/company/17950469", image: LinkedIn },
  { name: "Facebook", link: "https://www.facebook.com/HelloThamCom", image: Facebook },
  { name: "Instagram", link: "https://www.instagram.com/HelloThamCom/", image: Instagram },
  { name: "Twitter", link: "https://twitter.com/HelloThamCom", image: Twitter },
]

export default function ContactUs() {
  return (
    <Layout>
      <Seo title="Blog Posts" />
      <main className="mt-10">
        <article className="post">
          <header>
            <PageHero title="Contact Us" description="Our presence is real and digital." image={Image} />
          </header>
        </article>
        <div className="mt-10 sm:mt-0 p-8 bg-pink-100">
          <div className="lg:grid lg:grid-cols-3 lg:gap-6">
            <div className="lg:col-span-1">
              <div className="px-4 sm:px-0">
                <p className="mb-6 text-gray-600">
                  Our common id across Facebook, Twitter and Instagram is @HelloThamCom. In addition, you may contact us
                  through the following​ means:
                </p>
                {contactMethods.map(method => (
                  <p key={method.name} className="mt-2 flex items-center text-sm text-gray-500">
                    <img src={method.image} className=" h-5 w-5" />
                    <span>&nbsp;{method.name}:&nbsp;</span>
                    <a href={method.link} className="text-purple-600 hover:text-pink-600">
                      {method.link}
                    </a>
                  </p>
                ))}
              </div>
            </div>

            <div className="mt-5 lg:mt-0 lg:col-span-2">
              <form action="/api/sendgrid" method="POST">
                <div className="shadow overflow-hidden sm:rounded-md">
                  <div className="px-4 py-5 bg-white sm:p-6">
                    <div className="grid grid-cols-6 gap-6">
                      <div className="col-span-6 sm:col-span-6">
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                          Name
                        </label>
                        <input
                          type="text"
                          name="name"
                          id="name"
                          autoComplete="name"
                          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        />
                      </div>

                      <div className="col-span-6">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                          Email address
                        </label>
                        <input
                          type="email"
                          name="email"
                          id="email"
                          autoComplete="email"
                          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        />
                      </div>

                      <div className="col-span-6">
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                          Phone
                        </label>
                        <input
                          type="tel"
                          multiple
                          name="phone"
                          id="phone"
                          autoComplete="tel"
                          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        />
                      </div>

                      <div className="col-span-6">
                        <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                          Subject
                        </label>
                        <input
                          type="text"
                          name="subject"
                          id="subject"
                          autoComplete="subject"
                          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        />
                      </div>

                      <div className="col-span-6">
                        <label htmlFor="text" className="block text-sm font-medium text-gray-700">
                          Message
                        </label>
                        <textarea
                          className="form-textarea mt-1 block w-full h-32 focus:ring-indigo-500 focus:border-indigo-500 shadow-sm sm:text-sm border-gray-300 rounded-md"
                          rows={5}
                          name="text"
                          id="text"
                          placeholder="Enter your message here."
                        />
                      </div>
                    </div>
                  </div>

                  <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                    <button
                      type="submit"
                      className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
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
    </Layout>
  )
}
