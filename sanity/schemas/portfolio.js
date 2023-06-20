export default {
  name: 'portfolio',
  type: 'document',
  title: 'Portfolio',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'string',
    },
    {
      name: 'imageurl',
      title: 'ImageURL',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'stacks',
      title: 'Stacks',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'name',
              title: 'Name',
              type: 'string',
            },
            {
              name: 'imageurl',
              title: 'ImageURL',
              type: 'image',
              options: {
                hotspot: true,
              },
            },
          ],
        },
      ],
    },
    {
      name: 'links',
      title: 'Links',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'website',
              title: 'Website',
              type: 'string',
            },
            {
              name: 'href',
              title: 'Href',
              type: 'string',
            },
            {
              name: 'imageurl',
              title: 'ImageURL',
              type: 'image',
              options: {
                hotspot: true,
              },
            },
          ],
        },
      ],
    },
  ],
}
