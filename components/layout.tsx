import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import styles from '../styles/Layout.module.css'

type LayoutProps = {
  children: React.ReactNode,
  pageTitle?: string,
  metaDescription: string,
  showHomeLink?: boolean,
}

export default function Layout({ children, pageTitle, metaDescription, showHomeLink = true }: LayoutProps) {
  const headTitle = (pageTitle? `${pageTitle} - ` : '') + 'Ably and Next.js fundamentals starter kit'
  return (
    <div className={styles.container}>
      <Head>
        <title>{headTitle}</title>
        <meta name="description" content={metaDescription} />
        <link rel="icon" href="https://static.ably.dev/motif-red.svg?ably-nextjs-fundamentals-kit" type="image/svg+xml" />
      </Head>
      <main className={styles.main}>

        <h1 className={styles.title}>
          <a href="https://ably.com/?utm_source=github&utm_medium=github-repo&utm_campaign=GLB-2211-ably-nextjs-fundamentals-kit&utm_content=ably-nextjs-fundamentals-kit&src=GLB-2211-ably-nextjs-fundamentals-kit-github-repo">Ably</a> &amp; <a href="https://nextjs.org">Next.js</a> fundamentals
        </h1>
        { showHomeLink && <Link href="/">&larr; Home</Link> }

        {pageTitle && <h2>{pageTitle}</h2>}

        {children}
      </main>
    </div>
  )
}
