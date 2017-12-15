import React from 'react'
import Helmet from 'react-helmet'
import "katex/dist/katex.min.css"

export default function Template({data}) {
  const {markdownRemark: post} = data

  return (
    <div className='blog-post-container'>
      <Helmet title={`${post.frontmatter.title}`}/>
      <div className='blog-post'>
        <h1>{post.frontmatter.title}</h1>
        <div
          className='blog-post-content'
          dangerouslySetInnerHTML={{__html: post.html}}
          />
      </div>

    </div>
  )
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: {eq: $path }}) {
      html
      frontmatter {
        path
        title
      }
    }
  }
`

