export default {
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Product Name',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'name' },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'sku',
      title: 'SKU / Product Code',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: [{ type: 'category' }],
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'subCategory',
      title: 'Sub-Category',
      type: 'string',
      description: 'e.g., "Basin Mixers (deck-mounted)"',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: (Rule: any) => Rule.min(50).max(500),
    },
    {
      name: 'benefits',
      title: 'Key Benefits (4 max)',
      type: 'array',
      of: [{ type: 'string' }],
      validation: (Rule: any) => Rule.max(4),
    },
    {
      name: 'finishes',
      title: 'Available Finishes',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'name', type: 'string', title: 'Finish Name' },
            { name: 'color', type: 'string', title: 'Color Hex (e.g., #B69663)' },
          ],
        },
      ],
    },
    {
      name: 'price',
      title: 'Price (KES)',
      type: 'number',
      description: 'Leave blank for "Request Price"',
    },
    {
      name: 'priceVisibility',
      title: 'Show Price',
      type: 'string',
      options: {
        list: [
          { title: 'Show price', value: 'show' },
          { title: 'Request price', value: 'request' },
        ],
      },
      initialValue: 'show',
    },
    {
      name: 'material',
      title: 'Material',
      type: 'string',
      options: {
        list: [
          'Brass',
          'Stainless Steel 304',
          'Ceramic',
          'Granite composite',
        ],
      },
    },
    {
      name: 'mounting',
      title: 'Mounting Type',
      type: 'string',
      options: {
        list: ['Deck', 'Wall', 'Concealed', 'Freestanding'],
      },
    },
    {
      name: 'specifications',
      title: 'Full Specifications',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'label', type: 'string', title: 'Spec Label' },
            { name: 'value', type: 'string', title: 'Spec Value' },
          ],
        },
      ],
    },
    {
      name: 'warranty',
      title: 'Warranty Term',
      type: 'string',
      description: 'e.g., "10 years on body"',
    },
    {
      name: 'inStock',
      title: 'In Stock',
      type: 'boolean',
      initialValue: true,
    },
    {
      name: 'images',
      title: 'Product Images',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'image', type: 'image', title: 'Image' },
            { name: 'alt', type: 'string', title: 'Alt Text' },
            { name: 'caption', type: 'string', title: 'Caption (e.g., Hero, Detail, In-situ)' },
          ],
        },
      ],
    },
    {
      name: 'specSheet',
      title: 'Spec Sheet (PDF)',
      type: 'file',
      options: { accept: 'application/pdf' },
    },
    {
      name: 'dimensionDrawing',
      title: 'Dimension Drawing (PDF)',
      type: 'file',
      options: { accept: 'application/pdf' },
    },
    {
      name: 'installationGuide',
      title: 'Installation Guide',
      type: 'text',
    },
    {
      name: 'relatedProducts',
      title: 'Related Products',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'product' }] }],
    },
    {
      name: 'isNew',
      title: 'New Arrival',
      type: 'boolean',
      initialValue: false,
    },
    {
      name: 'isProjectFavourite',
      title: 'Project Favourite',
      type: 'boolean',
      initialValue: false,
    },
    {
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
    },
  ],
}
