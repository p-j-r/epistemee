export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gridsome-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '6231bb8cf1095c4ecea10f2d',
                  title: 'Sanity Studio',
                  name: 'epistemee-studio',
                  apiId: '011eb541-d33e-488a-87c4-4eb85f641abd'
                },
                {
                  buildHookId: '6231bb8c917bf54bef07fe0a',
                  title: 'Blog Website',
                  name: 'epistemee',
                  apiId: 'c5d098ea-338b-472a-9151-dde6ee1afc00'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/p-j-r/epistemee',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://epistemee.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
