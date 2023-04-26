import Head from 'next/head'
import Image from 'next/image'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import logoNutrition from '@/images/logos/nutrition.png'
import logoExercise from '@/images/logos/exercise.png'
import logoSleep from '@/images/logos/sleep.png'
import logoStressManagement from '@/images/logos/stress-management.png'
import logoMentalHealth from '@/images/logos/mental-health.png'
import logoPreventiveCare from '@/images/logos/preventive-care.png'


const health = [
  {
    name: 'Nutrition',
    description:
      'Discover the importance of a balanced diet and mindful eating.',
    link: {
      href: 'https://www.hsph.harvard.edu/nutritionsource/healthy-eating-plate/',
      label: 'nutrition.example.com',
    },
    logo: logoNutrition,
  },
  {
    name: 'Exercise',
    description: 'Learn about the benefits of regular physical activity.',
    link: {
      href: 'https://www.cdc.gov/physicalactivity/basics/index.htm',
      label: 'exercise.example.com',
    },
    logo: logoExercise,
  },
  {
    name: 'Sleep',
    description:
      'Understand the role of quality sleep in maintaining good health.',
    link: {
      href: 'https://www.sleepfoundation.org/how-sleep-works/how-much-sleep-do-we-really-need',
      label: 'sleep.example.com',
    },
    logo: logoSleep,
  },
  {
    name: 'Stress Management',
    description:
      'Explore the impact of stress on overall health and find strategies for managing it.',
    link: {
      href: 'https://www.apa.org/topics/stress',
      label: 'stress-management.example.com',
    },
    logo: logoStressManagement,
  },
  {
    name: 'Mental Health',
    description:
      'Gain insights into mental well-being and resources for managing mental health challenges.',
    link: {
      href: 'https://www.nimh.nih.gov/health',
      label: 'mental-health.example.com',
    },
    logo: logoMentalHealth,
  },
  {
    name: 'Preventive Care',
    description:
      'Learn about preventive care measures to maintain overall health and well-being, and reduce the risk of future health issues.',
    link: {
      href: 'https://health.gov/myhealthfinder/healthy-living',
      label: 'preventive-care.example.com',
    },
    logo: logoPreventiveCare,
  },
]

function LinkIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  )
}

export default function Projects() {
  return (
    <>
      <Head>
        <title>GratefulMe - Jaime Rodriguez</title>
        <meta
          name="description"
          content="Explore a collection of projects dedicated to promoting a healthy and balanced lifestyle, covering various aspects of well-being such as nutrition, exercise, sleep, stress management, mental health, and preventive care."
        />
      </Head>
      <SimpleLayout
        title="GratfulMe sources for better health."
        intro="Explore a collection of resources dedicated to promoting a healthy and balanced lifestyle, covering various aspects of well-being such as nutrition, exercise, sleep, stress management, mental health, and preventive care."
      >
        <ul
          role="list"
          className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
        >
          {health.map((project) => (
            <Card as="li" key={project.name}>
              <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                <Image
                  src={project.logo}
                  alt=""
                  className="h-8 w-8"
                  unoptimized
                />
              </div>
              <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
                <Card.Link href={project.link.href}>{project.name}</Card.Link>
              </h2>
              <Card.Description>{project.description}</Card.Description>
              <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
                <LinkIcon className="h-6 w-6 flex-none" />
                <span className="ml-2">{project.link.label}</span>
              </p>
            </Card>
          ))}
        </ul>
      </SimpleLayout>
    </>
  )
}
