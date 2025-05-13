import clsx from 'clsx'
import Heading from '@theme/Heading'
import styles from './styles.module.css'

const FeatureList = [
  {
    title: 'Create and Manage Work Orders',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Seamlessly create <strong>Standard</strong> or{' '}
        <strong>AQL Work Orders</strong> using a detailed form. Assign
        inspectors, select checklists, and track progress easily.
      </>
    )
  },
  {
    title: 'AI-Powered Checklists',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Automatically generate intelligent inspection checklists based on
        product data, with built-in support for AQL and Non-AQL inspection
        types.
      </>
    )
  },
  {
    title: 'Inspector Mobile Workflow',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Inspectors can log defects, attach photos, and submit reports from
        mobile devices— ensuring fast, on-site quality control.
      </>
    )
  },
  {
    title: 'Shared Reports and Defect Logs',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Access inspection reports, defect logs, and downloadable PDFs. View
        every checklist response and add comments collaboratively.
      </>
    )
  },
  {
    title: 'Products and Suppliers Management',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Maintain detailed records of products and suppliers with technical
        specs, images, and document attachments—ready to be linked to work
        orders.
      </>
    )
  },
  {
    title: 'Role-Based Access Control',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        SubQC-AI supports different roles like Admins, Inspectors, and
        Suppliers—ensuring everyone sees what they need, and nothing more.
      </>
    )
  }
]

function Feature ({ Svg, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className='text--center'>
        <Svg className={styles.featureSvg} role='img' />
      </div>
      <div className='text--center padding-horiz--md'>
        <Heading as='h3'>{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default function HomepageFeatures () {
  return (
    <section className={styles.features}>
      <div className='container'>
        <div className='row'>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  )
}
