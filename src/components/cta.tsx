import * as React from 'react'

export default function CTA() {
  return (
    <div className="bg-gray-50">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          <span className="block">Ready to give it a try?</span>
          <span className="block text-purple-600">Use the starter on Github today.</span>
        </h2>
        <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
          <div className="inline-flex rounded-md shadow">
            <a
              href="https://github.com/hellotham/hello-gatsby-starter/generate"
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-600 hover:bg-pink-600"
            >
              Use Template
            </a>
          </div>
          <div className="ml-3 inline-flex rounded-md shadow">
            <a
              href="https://github.com/hellotham/hello-gatsby-starter"
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-purple-600 bg-white hover:bg-purple-100"
            >
              Github Repo
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
