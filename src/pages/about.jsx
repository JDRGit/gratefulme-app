import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.jpg'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export default function About() {
  return (
    <>
      <Head>
        <title>About - Jaime Rodriguez</title>
        <meta
          name="description"
          content="I’m Jaime Rodriguez. Realistic wellness is my jam, and I believe it’s attainable for everyone."
        />
      </Head>
      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <Image
                src={portraitImage}
                alt=""
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
              />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              I’m Jaime Rodriguez. Wellness is my jam, and I believe it’s
              attainable for everyone.
            </h1>
            <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
              <p>
                Welcome to my GratefulMe App! I'm passionate about promoting
                health and well-being. My mission is to share simple, yet
                useful tools to help you achieve your personal wellness goals.
              </p>
              <p>
                With 15 years of experience in the healthcare industry, I saw
                the need for a comprehensive and user-friendly platform that
                addresses various aspects of wellness. This inspired the
                creation of our app, which combines expert knowledge,
                evidence-based practices, and the latest advancements in health
                technology.
              </p>
              <p>
                I believe in a holistic approach to wellness, focusing not only
                on physical health but also on mental and emotional well-being.
                My app offers a wide range of features, including personalized
                wellness plans, expert advice, engaging articles, and
                interactive tools designed to empower you to take control of
                your health journey.
              </p>
              <p>
                I understand that each individual is unique, and my goal is to
                provide tailored guidance that resonates with your specific
                needs and preferences. By fostering a supportive community and
                providing access to professional insights, I aim to make the
                journey towards wellness enjoyable and achievable for everyone.
              </p>
              <p>
                I'm so excited to be part of your journey towards a healthier
                and happier you!
              </p>
            </div>
          </div>
          <div className="lg:pl-20">
            <ul role="list">
              <SocialLink href="#" icon={TwitterIcon}>
                Follow on Twitter
              </SocialLink>
              <SocialLink href="#" icon={InstagramIcon} className="mt-4">
                Follow on Instagram
              </SocialLink>
              <SocialLink href="#" icon={GitHubIcon} className="mt-4">
                Follow on GitHub
              </SocialLink>
              <SocialLink href="#" icon={LinkedInIcon} className="mt-4">
                Follow on LinkedIn
              </SocialLink>
              <SocialLink
                href="mailto:GratefulMe@livingwellness.com"
                icon={MailIcon}
                className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
              >
                GratefulMe@livingwellness.com
              </SocialLink>
            </ul>
          </div>
        </div>
      </Container>
    </>
  )
}
