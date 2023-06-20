export default {
  name: 'experience',
  type: 'document',
  title: 'Experience',
  fields: [
    {
      name: 'company',
      title: 'Company',
      type: 'string',
    },
    {
      name: 'position',
      title: 'Position',
      type: 'string',
    },
    {
      name: 'timeFrame',
      title: 'TimeFrame',
      type: 'string',
    },
    {
      name: 'tasks',
      title: 'Tasks',
      type: 'array',
      of: [{type: 'string'}],
    },
  ],
}
