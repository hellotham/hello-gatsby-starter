import { graphql, useStaticQuery } from 'gatsby'

export type TagType = {
  tag: string
  count: number
}

type TagQueryType = {
  allMdx: {
    group: {
      tag: string
      count: number
    }[]
  }
}

const GetTags = () => {
  const data: TagQueryType = useStaticQuery(tagQuery)
  return data.allMdx.group // .map(tag => ({ tag: tag.fieldValue, count: tag.totalCount }))
}

export default GetTags

export const tagQuery = graphql`
  query {
    allMdx(limit: 2000) {
      group(field: frontmatter___tags) {
        tag: fieldValue
        count: totalCount
      }
    }
  }
`
