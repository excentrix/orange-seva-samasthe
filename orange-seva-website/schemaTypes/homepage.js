// schemas/homePage.js
import {defineType, defineField} from 'sanity'

export const HomePage = defineType({
  name: 'homePage',
  title: 'Home Page',
  type: 'document',
  fields: [
    defineField({
      name: 'hero',
      title: 'Hero Section',
      type: 'object',
      fields: [
        {name: 'title', type: 'string'},
        {name: 'subtitle', type: 'text'},
        {
          name: 'backgroundImage',
          type: 'reference',
          to: [{type: 'customImage'}],
        },
        {name: 'ctaText', type: 'string'},
      ],
    }),
    defineField({
      name: 'mission',
      title: 'Mission Section',
      type: 'object',
      fields: [
        {name: 'title', type: 'string'},
        {name: 'description', type: 'text'},
        {
          name: 'images',
          type: 'array',
          of: [{type: 'reference', to: [{type: 'customImage'}]}],
        },
      ],
    }),
    defineField({
      name: 'impactStats',
      title: 'Impact Stats',
      type: 'object',
      fields: [
        {name: 'title', type: 'string'},
        {
          name: 'stats',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                {name: 'icon', type: 'string'},
                {name: 'value', type: 'number'},
                {name: 'prefix', type: 'string'},
                {name: 'label', type: 'string'},
              ],
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'transformingLives',
      title: 'Transforming Lives',
      type: 'object',
      fields: [
        {name: 'title', type: 'string'},
        {
          name: 'cards',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                {name: 'title', type: 'string'},
                {name: 'description', type: 'text'},
                {
                  name: 'image',
                  type: 'reference',
                  to: [{type: 'customImage'}],
                },
              ],
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'communityImpact',
      title: 'Community Impact',
      type: 'object',
      fields: [
        {name: 'title', type: 'string'},
        {
          name: 'image',
          type: 'reference',
          to: [{type: 'customImage'}],
        },
      ],
    }),
  ],
})
