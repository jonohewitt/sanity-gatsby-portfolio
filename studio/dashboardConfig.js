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
                  buildHookId: '6092b4fb23925c008ca1c27f',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-3rm6itoc',
                  apiId: '3a033976-9836-499d-b4f2-96e0d9f51bfc'
                },
                {
                  buildHookId: '6092b4fb5700bd00ed67497e',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-619e6441',
                  apiId: 'c09bf38b-e3e5-422f-b737-7aed5d33bf23'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jonohewitt/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-619e6441.netlify.app',
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
