export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '5df7c97f0d0894677ee60a2f',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-o33ap55h',
                  apiId: 'c8c7a110-1902-4659-a3cf-4fc0fb2a74c1'
                },
                {
                  buildHookId: '5df7c97f15dd989562a93f78',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-nmdxc6a1',
                  apiId: '7fb54a4f-3618-4555-a1ab-9fceba2fe146'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/brettdoyle44/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-nmdxc6a1.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
