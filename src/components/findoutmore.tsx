import * as React from "react"

import Partners from "@/images/undraw_features_overview_jg7a.svg"
import Work from "@/images/undraw_All_the_data_re_hh4w.svg"
import People from "@/images/undraw_Team_page_re_cffb.svg"

const callouts = [
  {
    name: "People",
    description:
      "Find out more about our consultants",
    imageSrc: People,
    imageAlt: "People drawing",
    href: "/pages/consultants",
  },
  {
    name: "Partners",
    description: "Find out more about our partners",
    imageSrc: Partners,
    imageAlt: "Partners drawing",
    href: "/pages/partners",
  },
  {
    name: "Achievements",
    description: "Recent work we have performed for our clients",
    imageSrc: Work,
    imageAlt: "Recent work drawing",
    href: "/pages/work",
  },
]

export default function FindOutMore() {
  return (
    <div className="bg-pink-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto py-16 sm:py-24 lg:py-32 lg:max-w-none">
          <h2 className="text-4xl font-extrabold text-purple-800">
            Find Out More
          </h2>

          <div className="mt-6 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-6">
            {callouts.map(callout => (
              <div key={callout.name} className="group relative">
                <div className="relative w-full h-80 bg-white rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                  <img
                    src={callout.imageSrc}
                    alt={callout.imageAlt}
                    className="w-full h-full object-center object-contain"
                  />
                </div>
                <h3 className="mt-6 text-2xl text-purple-500">
                  <a href={callout.href}>
                    <span className="absolute inset-0" />
                    {callout.name}
                  </a>
                </h3>
                <p className="text-base text-gray-900">{callout.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
