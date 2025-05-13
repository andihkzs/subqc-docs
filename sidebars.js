// @ts-check

/**
 * @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
const sidebars = {
  docs: [
    'intro',

    // 🌟 Core Modules
    {
      type: 'category',
      label: 'Work Orders',
      link: { type: 'doc', id: 'work-orders' },
      items: [
        'work-orders/add-work-order',
        'work-orders/edit-work-orders',
        'work-orders/delete-work-orders'
      ]
    },
    {
      type: 'category',
      label: 'Checklists',
      link: { type: 'doc', id: 'checklists' },
      items: [
        'checklists/create-checklist',
        'checklists/types-of-checklists',
        'checklists/ai-generated-checklist'
      ]
    },
    {
      type: 'category',
      label: 'Products & Suppliers',
      items: [
        {
          type: 'category',
          label: 'Products',
          link: { type: 'doc', id: 'products' },
          items: [
            'products/add-product',
            'products/product-fields',
            'products/manage-products'
          ]
        },
        {
          type: 'category',
          label: 'Suppliers',
          link: { type: 'doc', id: 'suppliers' },
          items: ['suppliers/add-supplier', 'suppliers/manage-suppliers']
        }
      ]
    },
    {
      type: 'category',
      label: 'Inspections & Reports',
      link: { type: 'doc', id: 'inspections' },
      items: [
        'inspections/performing-inspections',
        'inspections/defect-logging',
        'inspections/report-generation',
        'inspections/shared-report-features'
      ]
    },

    // 🔐 System Administration
    {
      type: 'category',
      label: 'User & Access Management',
      items: ['user-roles', 'management']
    },

    // 🧰 Tools & Help
    {
      type: 'category',
      label: 'Reference & Help',
      items: ['aql-calculator', 'mobile-inspections', 'faq']
    }
  ]
}

export default sidebars
