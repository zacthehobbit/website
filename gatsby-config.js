require("dotenv").config()

module.exports = {
    siteMetadata: {
        title: `Zac the Hobbit`,
        description: `Zac is the best of blood`,
        author: `Zac the Hobbit <zachary@zachary.com>`,
        siteUrl: `https://zachary.com`
    },
    plugins: [
        `gatsby-plugin-preact`,
        `gatsby-plugin-typescript`,
        "gatsby-plugin-linaria",
        `gatsby-plugin-react-helmet`,
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        `gatsby-remark-images`,
        `gatsby-plugin-netlify-cms`,
        {
            resolve: `gatsby-plugin-layout`,
            options: {
                component: require.resolve(`./src/components/Layout.tsx`)
            }
        },
        {
            resolve: `gatsby-plugin-svgr`,
            options: {
                svgo: false
            }
        },
        {
            resolve: `gatsby-plugin-nprogress`,
            options: {
                color: `#f05f40`
            }
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`
            }
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `blogPosts`,
                path: `${__dirname}/content/blog`
            }
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `blogPostImages`,
                path: `${__dirname}/content/images/`
            }
        },
        {
            resolve: `gatsby-plugin-mdx`,
            options: {
                plugins: [
                    `gatsby-remark-images`,
                    {
                        resolve: `gatsby-remark-images-medium-zoom`,
                        options: {
                            background: "rgba(0,0,0,0.8)"
                        }
                    }
                ],
                gatsbyRemarkPlugins: [{
                        resolve: `gatsby-remark-images`,
                        options: {
                            maxWidth: 800,
                            quality: 80,
                            withWebp: true,
                            linkImagesToOriginal: false
                        }
                    },
                    {
                        resolve: `gatsby-remark-images-medium-zoom`,
                        options: {
                            background: "rgba(0,0,0,0.8)"
                        }
                    },
                    {
                        resolve: "gatsby-remark-external-links",
                        options: {
                            rel: "noopener"
                        }
                    }
                ]
            }
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `Zac the Hobbit`,
                short_name: `Zac the Hobbit`,
                start_url: `/`,
                background_color: `#fefefe`,
                theme_color: `#fefefe`,
                display: `standalone`,
                cache_busting_mode: "none",
                icon: "src/images/icon.png",
                icon_options: {
                    purpose: "maskable any"
                },
                include_favicon: false
            }
        },
        {
            resolve: "gatsby-plugin-offline",
            options: {
                precachePages: ["/", "/about", "/blog/*", "/contact"],
                workboxConfig: {
                    globPatterns: ["icons/*"],
                    globIgnores: ["admin/*"]
                }
            }
        },
        {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
                trackingId: "XX-XXXXXXXX-X"
            }
        },
        {
            resolve: "gatsby-plugin-page-progress",
            options: {
                includePaths: [{ regex: "^/blog" }, "/about"],
                height: 1,
                prependToBody: false,
                color: `#3F88C5`,
                headerHeight: 0,
            }
        }
    ]
}