export default {
  name: 'project',
  title: 'Project / Client Case Study',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Project Title',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title' },
    },
    {
      name: 'location',
      title: 'Location / City',
      type: 'string',
    },
    {
      name: 'projectType',
      title: 'Project Type',
      type: 'string',
      options: {
        list: ['Hotel', 'Residential', 'Commercial', 'Development', 'Office'],
      },
    },
    {
      name: 'scope',
      title: 'Project Scope',
      type: 'text',
      description: 'e.g., "45-room hotel, full sanitary ware & shower supply"',
    },
    {
      name: 'description',
      title: 'Full Case Study',
      type: 'text',
    },
    {
      name: 'images',
      title: 'Project Photos',
      type: 'array',
      of: [{ type: 'image' }],
    },
    {
      name: 'clientName',
      title: 'Client Name (if permitted)',
      type: 'string',
    },
    {
      name: 'completedAt',
      title: 'Completion Date',
      type: 'date',
    },
  ],
}
