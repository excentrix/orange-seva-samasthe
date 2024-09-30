import {defineType, defineField} from 'sanity'

export const Timeline = defineType({
  name: 'timeline',
  title: 'Timeline',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'The title or year of the timeline item (e.g., "2024" or "Early 2023")',
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'text',
      description: 'The main content or description for this timeline item',
    }),
    defineField({
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'customImage'}]}],
      description: 'Images related to this timeline item',
    }),
    defineField({
      name: 'order',
      title: 'Order',
      type: 'number',
      description: 'The order in which this item should appear (lower numbers appear first)',
    }),
  ],
  orderings: [
    {
      title: 'Title, Descending',
      name: 'titleDesc',
      by: [{field: 'title', direction: 'desc'}],
    },
    {
      title: 'Order, Ascending',
      name: 'orderAsc',
      by: [{field: 'order', direction: 'asc'}],
    },
  ],
  preview: {
    select: {
      title: 'title',
      media: 'images.0.image',
    },
  },
})
