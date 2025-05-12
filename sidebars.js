// @ts-check

/**
 * @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
const sidebars = {
  docs: [
    'intro', // Assuming you have an intro.md file
    {
      type: 'category',
      label: 'Work Orders',
      link: {
        type: 'doc',
        id: 'work-orders'
      },
      items: [
        'work-orders/add-work-order',
        'work-orders/edit-work-orders',
        'work-orders/delete-work-orders'
      ]
    }
    // You can add more categories here
  ]
}

export default sidebars
