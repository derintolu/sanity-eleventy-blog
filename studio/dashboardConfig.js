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
                  buildHookId: '5f463c7073360cc763f7f0d8',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventy-blog-studio-ww5duns8',
                  apiId: 'b240cf37-558b-42b0-bd0b-084df2122fef'
                },
                {
                  buildHookId: '5f463c707244bcdc5ea77d1f',
                  title: 'Blog Website',
                  name: 'sanity-eleventy-blog-web-zaihe8qm',
                  apiId: '9f21f088-b493-4cc9-8b60-2af25a87e03f'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/derintolu/sanity-eleventy-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-eleventy-blog-web-zaihe8qm.netlify.app', category: 'apps'}
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
