import * as React from "react"

const Tags = ({ tags }: { tags: string[] }) => (
  <div className="flex flex-row items-start space-x-2">
    {tags.map(tag => (
      <span
        className="inline-block py-1 px-3 rounded bg-purple-600 text-white text-xs font-medium tracking-tight uppercase"
        key={tag}
      >
        {tag}
      </span>
    ))}
  </div>
)
export default Tags