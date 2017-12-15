import React, {Component} from 'react'
import Helmet from 'react-helmet'
import {map} from 'lodash'
import "katex/dist/katex.min.css"
import {Todo} from '../components/todo'


class TodosPage extends Component {

  render() {
    const todos = map(this.props.data.allMarkdownRemark.edges, e => e.node)
    
    return (
      <div>
        {
          map(
            todos,
            (todo, idx) => (
              <Todo data={todo} key={idx}/>
            )
          )
        }
      </div>
    )
  }
}

export const todoHistoryQuery = graphql`
  query TodoHistory {
    allMarkdownRemark(
      filter: {fileAbsolutePath: {regex: "/todos/"}}
      limit: 1000
    ) {
      edges {
        node {
          html
          frontmatter {
            date
          }
        }
      }
    }
  }
`

export default TodosPage
