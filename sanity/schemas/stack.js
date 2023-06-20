export default {
  name: 'stack',
  type: 'document',
  title: 'stack',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },

    {
      name: 'imageurl',
      title: 'ImgURL',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
}
