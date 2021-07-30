export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
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
                  buildHookId: '610368454a903af9d6f02e29',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventy-blog-studio-m557d2en',
                  apiId: '97268dc3-b86b-4cf4-af62-5dbf8d9ad56f'
                },
                {
                  buildHookId: '61036845e8288dd100919303',
                  title: 'Blog Website',
                  name: 'sanity-eleventy-blog-web-83q1hsky',
                  apiId: 'c87bf052-b714-4f5c-8927-d05504a5fea9'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/kachunchau/sanity-eleventy-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-eleventy-blog-web-83q1hsky.netlify.app', category: 'apps'}
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
