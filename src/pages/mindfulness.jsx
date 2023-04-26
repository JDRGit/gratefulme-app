import Head from 'next/head'

import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function SpeakingSection({ children, ...props }) {
  return (
    <Section {...props}>
      <div className="space-y-16">{children}</div>
    </Section>
  )
}

function Appearance({ title, description, event, cta, href }) {
  return (
    <Card as="article">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Eyebrow decorate>{event}</Card.Eyebrow>
      <Card.Description>{description}</Card.Description>
      <Card.Cta>{cta}</Card.Cta>
    </Card>
  )
}

export default function Speaking() {
  return (
    <>
      <Head>
        <title>Mindfulness Practices - Jaime Rodriguez</title>
        <meta
          name="description"
          content="Discover a collection of mindfulness practices to enhance your mental well-being and overall quality of life."
        />
      </Head>
      <SimpleLayout
        title="Mindfulness Practices for a Balanced Life"
        intro="Explore a variety of mindfulness practices and techniques aimed at helping you cultivate a deeper sense of self-awareness, mental well-being, and overall quality of life."
      >
        <div className="space-y-20">
          <SpeakingSection title="Meditation">
            <Appearance
              href="https://www.mindful.org/meditation/mindfulness-getting-started/"
              title="Introduction to Mindfulness Meditation"
              description="Learn the basics of mindfulness meditation and how it can improve your mental well-being and overall quality of life."
              event="Meditation for Beginners"
              cta="Watch video"
            />
            <Appearance
              href="https://www.healthline.com/health/breathing-exercise"
              title="Breathing Techniques for Stress Relief"
              description="Discover various breathing techniques to help you manage stress, anxiety, and promote relaxation."
              event="Breathwork for Stress Management"
              cta="Watch video"
            />
          </SpeakingSection>
          <SpeakingSection title="Podcasts">
            <Appearance
              href="https://podcasts.apple.com/us/podcast/mindful-life-podcast/id1445597918"
              title="The Science of Mindfulness"
              description="Explore the science behind mindfulness and its numerous benefits for our mental and physical health."
              event="The Mindful Life"
              cta="Listen to podcast"
            />
            <Appearance
              href="https://podcasts.apple.com/us/podcast/the-positive-mindset-podcast/id1352860550"
              title="Cultivating Gratitude and Positivity"
              description="Learn about the power of gratitude and how practicing it regularly can transform your mindset and overall happiness."
              event="Positive Mindset Show"
              cta="Listen to podcast"
            />
            <Appearance
              href="https://podcasts.apple.com/us/podcast/conscious-connections-with-nicole-blackson/id1615711712"
              title="Mindful Communication for Better Relationships"
              description="Discover the art of mindful communication and how it can help you build stronger, more meaningful relationships with others."
              event="Conscious Connections"
              cta="Listen to podcast"
            />
          </SpeakingSection>
        </div>
      </SimpleLayout>
    </>
  )
}
