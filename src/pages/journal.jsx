import Head from 'next/head'

import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function ToolsSection({ children, ...props }) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({ title, href, children }) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export default function Journal() {
  return (
    <>
      <Head>
        <title>Gratitude Journal Best Practices</title>
        <meta
          name="description"
          content="Discover the best practices for maintaining a gratitude journal and improving your mental well-being."
        />
      </Head>
      <SimpleLayout
        title="Gratitude Journal Best Practices"
        intro="A gratitude journal is a personal diary or notebook dedicated to documenting and reflecting upon the positive aspects, experiences, and blessings in one's life. By consistently recording moments of gratitude, individuals can cultivate a greater sense of appreciation, happiness, and overall well-being."
      >
        <div className="space-y-20">
          <ToolsSection title="Getting Started">
            <Tool
              href="https://ggia.berkeley.edu/practice/gratitude_journal"
              title="Starting a Gratitude Journal"
            >
              Learn how to start your gratitude journal journey with these simple yet effective tips.
            </Tool>
            <Tool
              href="https://positivepsychology.com/gratitude-journal/"
              title="Gratitude Journal Template and Prompts"
            >
              Get inspired by gratitude journal templates and prompts to help you maintain a consistent practice.
            </Tool>
          </ToolsSection>
          <ToolsSection title="Benefits">
            <Tool
              href="https://www.health.harvard.edu/healthbeat/giving-thanks-can-make-you-happier"
              title="The Science Behind Gratitude and Happiness"
            >
              Explore the scientific research on the benefits of gratitude and how it can positively impact your happiness.
            </Tool>
            <Tool
              href="https://www.psychologytoday.com/us/blog/the-mindful-self-express/201511/how-gratitude-leads-happier-life"
              title="How Gratitude Leads to a Happier Life"
            >
              Discover how incorporating gratitude into your daily routine can lead to a more fulfilling and happy life.
            </Tool>
          </ToolsSection>
          <ToolsSection title="Maintaining Consistency">
            <Tool
              href="https://www.mindbodygreen.com/0-24855/10-tips-for-keeping-a-consistent-gratitude-journal-practice.html"
              title="10 Tips for Keeping a Consistent Gratitude Journal Practice"
            >
              Learn strategies to help you maintain a consistent gratitude journal practice for long-term benefits.
            </Tool>
            <Tool
              href="https://yourmentalhealthpal.com/gratitude-apps/"
              title="Best Gratitude Journal Apps"
            >
              Find the best gratitude journal apps to help you stay consistent and organized with your practice.
            </Tool>
          </ToolsSection>
        </div>
      </SimpleLayout>
    </>
  )
}
