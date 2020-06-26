import {
  getDetailTime
} from './time.filter'

export const handleBlogListTimeAndTags = (list) => {
  list.map(blog => {
    blog.date = getDetailTime(blog.date)
    
    
    blog.tags = blog.tags.join('、')
    return blog;
  })
}

export const handleBlogTimeAndTags = (blog) => {
  blog.date = getDetailTime(blog.date)
  return blog;
}
