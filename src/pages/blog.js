import React from 'react'
import Helmet from 'react-helmet'
import SiteMeta from '../components/SiteMeta/SiteMeta'
import Layout from '../components/Layout/DefaultLayout'
import PostList from '../components/Post/PostList/PostList';
import Pagination from '../components/Pagination/Pagination'
import '../components/Post/Post.scss'

// grab the pageContext prop given by createPage in gatsby-node.js
const BlogPage = ({ pageContext }) => {
    const { group } = pageContext

    // 'group' is the array of posts from pageContext
    console.log('Posts template', group)

    return (
        <Layout>
            <SiteMeta />
            <Helmet
                title="iler.io - Blog"
                meta={[
                    { name: 'Blog Page', content: 'Blog' },
                    { name: 'blog, articles, etc', content: 'blog, articles' }
                ]}
                bodyAttributes={{
                    class: 'blogroll page-blog'
                }}
            />
                
            <PostList posts={group} />
            <Pagination pageContext={pageContext} />
                
        </Layout>
    )
}
export default BlogPage

export const posts = graphql`
    query {
        allWordpressPost {
            edges {
                node {
                    id
                    wordpress_id
                    slug
                    status
                    template
                    format
                    title
                    date(formatString: "MMMM DD, YYYY")
                    excerpt
                    content
                    featured_media {
                        source_url
                        alt_text
                    }
                    categories {
                        id
                        wordpress_id
                        count
                        description
                        link
                        name
                        slug
                        parent {
                            __typename
                            id
                        }
                        children {
                            id
                            __typename
                        }
                        wordpress_parent
                        _links {
                            self {
                                href
                            }
                        }
                    }
                }
            }
        }
        site {
            siteMetadata {
                title
                subtitle
                description
                author
                url
                image
                facebookImage
                twitterImage
                twitterUser
            }
        }
    }
`
