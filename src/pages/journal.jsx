import { useState, useEffect } from 'react'
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
  const [entry, setEntry] = useState('')
  const [journalEntries, setJournalEntries] = useState([])
  const [editingEntry, setEditingEntry] = useState(null)
  const [editingIndex, setEditingIndex] = useState(-1)

  useEffect(() => {
    setJournalEntries(loadInitialState())
  }, [])

  const loadInitialState = () => {
    if (typeof window === 'undefined') {
      return []
    }

    const entries = localStorage.getItem('journalEntries')
    return entries ? JSON.parse(entries) : []
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (editingIndex > -1) {
      journalEntries[editingIndex] = entry
    } else {
      journalEntries.push(entry)
    }
    setJournalEntries([...journalEntries])
    localStorage.setItem('journalEntries', JSON.stringify(journalEntries))
    setEntry('')
    setEditingEntry(null)
    setEditingIndex(-1)
  }

  const handleEdit = (index) => {
    setEntry(journalEntries[index])
    setEditingEntry(journalEntries[index])
    setEditingIndex(index)
  }

  const handleDelete = (index) => {
    const updatedEntries = journalEntries.filter((_, i) => i !== index)
    setJournalEntries(updatedEntries)
    localStorage.setItem('journalEntries', JSON.stringify(updatedEntries))
  }

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
              Learn how to start your gratitude journal journey with these
              simple yet effective tips.
            </Tool>
            <Tool
              href="https://positivepsychology.com/gratitude-journal/"
              title="Gratitude Journal Template and Prompts"
            >
              Get inspired by gratitude journal templates and prompts to help
              you maintain a consistent practice.
            </Tool>
          </ToolsSection>
          <ToolsSection title="Benefits">
            <Tool
              href="https://www.health.harvard.edu/healthbeat/giving-thanks-can-make-you-happier"
              title="The Science Behind Gratitude and Happiness"
            >
              Explore the scientific research on the benefits of gratitude and
              how it can positively impact your happiness.
            </Tool>
            <Tool
              href="https://www.psychologytoday.com/us/blog/the-mindful-self-express/201511/how-gratitude-leads-happier-life"
              title="How Gratitude Leads to a Happier Life"
            >
              Discover how incorporating gratitude into your daily routine can
              lead to a more fulfilling and happy life.
            </Tool>
          </ToolsSection>
          <ToolsSection title="Maintaining Consistency">
            <Tool
              href="https://www.mindbodygreen.com/0-24855/10-tips-for-keeping-a-consistent-gratitude-journal-practice.html"
              title="10 Tips for Keeping a Consistent Gratitude Journal Practice"
            >
              Learn strategies to help you maintain a consistent gratitude
              journal practice for long-term benefits.
            </Tool>
            <Tool
              href="https://yourmentalhealthpal.com/gratitude-apps/"
              title="Best Gratitude Journal Apps"
            >
              Find the best gratitude journal apps to help you stay consistent
              with your practice and make it a part of your daily routine.
            </Tool>
          </ToolsSection>
          <ToolsSection title="Sample an Entry for Journaling">
            <form onSubmit={handleSubmit} className="space-y-20">
              <div>
                <label
                  htmlFor="entry"
                  className="flex ring-zinc-900/5 backdrop-blur dark:text-gray-100 dark:ring-white/10"
                >
                  What's on your mind
                </label>
                <div className="flex text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10">
                  <textarea
                    id="entry"
                    name="entry"
                    rows="2"
                    className="w-full rounded-md border-gray-500 bg-white dark:bg-gray-800 dark:text-gray-100"
                    value={entry}
                    onChange={(e) => setEntry(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  className="inline-flex justify-center rounded-md border border-transparent bg-teal-400 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
                >
                  Add Entry
                </button>
              </div>
            </form>

            <div className="mt-8">
              <h3 className="flex text-sm font-medium  ring-zinc-900/5 backdrop-blur  dark:text-gray-100 dark:ring-white/10">
                Your Entries
              </h3>
              <ul className="mt-4 space-y-4">
                {journalEntries.map((entry, index) => (
                  <li
                    key={index}
                    className="flex items-center justify-between rounded-lg bg-white p-4 text-sm shadow-md dark:bg-gray-800"
                  >
                    <p className="font-medium text-gray-800 dark:text-gray-100">
                      {entry}
                    </p>
                    <div className="space-x-2">
                      <button
                        onClick={() => handleEdit(index)}
                        className="inline-flex items-center rounded bg-blue-100 px-3 py-1 text-sm font-medium text-blue-600 hover:bg-blue-200"
                      >
                        <span>Edit</span>
                      </button>
                      <button
                        onClick={() => handleDelete(index)}
                        className="inline-flex items-center rounded bg-red-100 px-3 py-1 text-sm font-medium text-red-600 hover:bg-red-200"
                      >
                        <span>Delete</span>
                      </button>
                    </div>
                    <blockquote className="mt-4 text-center text-2xl font-semibold italic text-slate-900 dark:text-gray-100">
                      Congratulations
                      <span className="relative inline-block before:absolute before:-inset-1 before:block before:-skew-y-3 before:bg-pink-500">
                        <span className="relative text-white">you</span>
                      </span>
                      did it.
                    </blockquote>
                  </li>
                ))}
              </ul>
            </div>
          </ToolsSection>
        </div>
      </SimpleLayout>
    </>
  )
}
