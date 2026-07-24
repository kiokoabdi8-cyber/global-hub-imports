export default {
  name: 'journal',
  title: 'Journal / Blog Post',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Article Title',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title' },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Meta Description',
      type: 'string',
      validation: (Rule: any) => Rule.max(160),
    },
    {
      name: 'heroImage',
      title: 'Hero Image',
      type: 'image',
    },
    {
      name: 'content',
      title: 'Article Content',
      type: 'text',
    },
    {
      name: 'publishedAt',
      title: 'Published Date',
      type: 'datetime',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'relatedProducts',
      title: 'Related Products (up to 3)',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'product' }] }],
      validation: (Rule: any) => Rule.max(3),
    },
  ],
}
