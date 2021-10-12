import * as React from 'react'
import { MapIcon, SparklesIcon, PuzzleIcon, PresentationChartBarIcon } from '@heroicons/react/outline'

const features = [
  {
    name: 'Business and IT Strategies',
    description: 'Business and IT strategy and plans, operating models, business process design and standardisation',
    icon: SparklesIcon,
  },
  {
    name: 'Enterprise Architecture',
    description:
      'Enterprise analysis, design, planning, and implementation for the successful development and execution of a strategy',
    icon: PuzzleIcon,
  },
  {
    name: 'Analytics and Data Science',
    description: 'Data discovery, analysis, deep and reinforced learning, insights and recommendations',
    icon: PresentationChartBarIcon,
  },
  {
    name: 'Strategic Roadmaps',
    description: 'Aligning portfolio to strategy, business cases, project planning and initiation',
    icon: MapIcon,
  },
]

export default function Features() {
  return (
    <div className="py-12 bg-purple-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-purple-800 font-semibold tracking-wide uppercase">Our Services</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Vision into Reality
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-600 lg:mx-auto">
            We help organisations around the world define and implement their vision and objectives.
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {features.map(feature => (
              <div key={feature.name} className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-purple-500 text-white">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-600">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
