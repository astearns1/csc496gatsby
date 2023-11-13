const path = require('path');

// exports.modifyWebPackConfig = ({ config, stage }) => {
//     config.devServer = {
//         hot: false,
//         inline: false,
//     }
//     return config;
// };

// Create a slug for each recipe and set it as a field on the node.
exports.onCreateNode = ({ node, getNode, actions }) => {
    //console.log(node)
    const { createNodeField } = actions
    const slug = (node.path && node.path.alias) ? node.path.alias : '/node/' + node.drupal_id;
    createNodeField({
        node,
        name: 'slug',
        value: slug,
    })
}

// Implement the Gatsby API "createPages". This is called once the 
// data layer is bootstrapped to let plugins create pages from data
exports.createPages = async({ actions, graphql }) => {
    const { createPage } = actions
    return new Promise((resolve, reject) => {
        const articleTemplate = path.resolve('src/pages/articles.js')
        const pageTemplate = path.resolve('src/pages/recipe.js')
        // const horseTemplate = path.resolve('src/pages/catalogpage.js')
        // cosnt categoryTemplate = path.resolve('src/templates/taxonomy/tag/index.js')

        // const paragraphVimeo = path.resolve('src/templates/paragraph/paragraph__vimeo_video/index.js')
        // page building queries
        // field_ragozin_sheet throws graphql errors
        resolve(
            graphql(
            `
            query MyQuery {
              Drupal {
                nodeRecipes(first: 10) {
                  edges {
                    node {
                      changed
                      id
                      cookingTime
                      created
                      path
                      status
                      title
                      preparationTime
                      numberOfServings
                      ingredients
                      difficulty
                      mediaImage {
                        mediaImage {
                          url
                        }
                      }
                      recipeInstruction {
                        processed
                      }
                      summary {
                        processed
                      }
                    }
                  }
                }
              }
            }
            `
            ).then(result => {
                // show during build/dev
                console.log("RESULT");
                console.log(result);
                if(result.errors){
                    reject(result.errors)
                }
                console.log("RECIPES");
                console.log(result.data.Drupal.nodeRecipes);
                const pages = result.data.Drupal.nodeRecipes.edges;

                // result.data.allNodesHorse.edges.forEach(({ node }, index) => {
                pages.forEach(({ node }, index) => {
                    console.log(node);
                    console.log("PATH: ");
                    console.log(node.path);
                    // const page_path = (node.path && node.path.alias) ? node.path.alias : '/node/' + node.drupal_id;
                    const page_path = node.path
                    console.log(node.path);

                    createPage({
                        path: `${page_path}`,
                        component: pageTemplate,
                        context: {
                            nid: node.id,
                            data: node,
                        },
                    })
                })
            })
        )

        resolve(
            graphql(
                `
                query MyQuery {
                  Drupal {
                    nodeArticles(first: 100) {
                      edges {
                        node {
                          body {
                            processed
                          }
                          author {
                            displayName
                          }
                          changed
                          mediaImage {
                            mediaImage {
                              url
                            }
                          }
                          title
                          path
                        }
                      }
                    }
                  }
                }
                `
            ).then(result => {
                // show during build/dev
                console.log("RESULT");
                console.log(result);
                if(result.errors){
                    reject(result.errors)
                }
                console.log("ARTICLES");
                console.log(result.data.Drupal.nodeArticles);
                const pages = result.data.Drupal.nodeArticles.edges;

                // result.data.allNodesHorse.edges.forEach(({ node }, index) => {
                pages.forEach(({ node }, index) => {
                    console.log(node);
                    console.log("PATH: ");
                    console.log(node.path);
                    // const page_path = (node.path && node.path.alias) ? node.path.alias : '/node/' + node.drupal_id;
                    const page_path = node.path
                    console.log(node.path);

                    createPage({
                        path: `${page_path}`,
                        component: articleTemplate,
                        context: {
                            nid: node.id,
                            data: node,
                        },
                    })
                })
            })
        )
    });
}