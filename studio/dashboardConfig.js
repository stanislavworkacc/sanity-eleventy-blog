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
                  buildHookId: '61f82d86a1f272236b0284e4',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventy-blog-studio-rq1yhnyj',
                  apiId: '44b1e225-d131-442f-8137-3cd7be1e7757'
                },
                {
                  buildHookId: '61f82d861ca9ec2766e7c0d3',
                  title: 'Blog Website',
                  name: 'sanity-eleventy-blog-web-fsmqc7qq',
                  apiId: 'bddce6e0-2aad-4a0e-a816-eede66f3c210'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/stanislavworkacc/sanity-eleventy-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-eleventy-blog-web-fsmqc7qq.netlify.app', category: 'apps'}
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
