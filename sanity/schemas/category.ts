export default {
  name: 'category',
  title: 'Product Category',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Category Name',
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
      name: 'description',
      title: 'Category Description',
      type: 'text',
      validation: (Rule: any) => Rule.min(50).max(500),
    },
    {
      name: 'buyingGuide',
      title: 'Buying Guide (300-500 words)',
      type: 'text',
    },
    {
      name: 'heroImage',
      title: 'Category Hero Image',
      type: 'image',
    },
    {
      name: 'thumbnailImage',
      title: 'Thumbnail for Grid',
      type: 'image',
    },
  ],
}
