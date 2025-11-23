import Link from 'next/link'

import Page from '@/components/page'

export default function NotFoundPage() {
  return (
    <Page>
      <section className="sample-text-area">
        <div className="container box_1170">
          <h1>404: Page not found.</h1>
          <p>
            You&apos;ve hit the void. <Link href="/">Go back.</Link>
          </p>
        </div>
        <div style={{ height: '24em' }}></div>
      </section>
    </Page>
  )
}
