// import clsx from 'clsx'
// import Link from '@docusaurus/Link'
// import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
// import Layout from '@theme/Layout'
// import HomepageFeatures from '@site/src/components/HomepageFeatures'

// import Heading from '@theme/Heading'
// import styles from './index.module.css'

// function HomepageHeader () {
//   const { siteConfig } = useDocusaurusContext()
//   return (
//     <header className={clsx('hero hero--primary', styles.heroBanner)}>
//       <div className='container'>
//         <Heading as='h1' className='hero__title'>
//           SubQC-AI
//         </Heading>
//         <p className='hero__subtitle'>
//           AI-powered inspection platform for managing quality checks, products,
//           inspectors, and reports — all in one place.
//         </p>
//         <div className={styles.buttons}>
//           <Link className='button button--secondary button--lg' to='/intro'>
//             Get Started with Docs 🚀
//           </Link>
//         </div>
//       </div>
//     </header>
//   )
// }

// export default function Home () {
//   const { siteConfig } = useDocusaurusContext()
//   return (
//     <Layout
//       title='SubQC-AI Documentation'
//       description='Learn how to use SubQC-AI to manage inspections, checklists, work orders, and reports efficiently.'
//     >
//       <HomepageHeader />
//       <main>
//         <HomepageFeatures />
//       </main>
//     </Layout>
//   )
// }

import { Redirect } from '@docusaurus/router'

export default function Home () {
  return <Redirect to='/intro' />
}
