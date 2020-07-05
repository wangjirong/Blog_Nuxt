import {
  getDetailTime,
  getJustDay,
  getYearAndMonth,
  getJustTime
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

export const formDataBlog = blog => {
  blog.day = getJustDay(blog.date)
  blog.monthYear = getYearAndMonth(blog.date)
  blog.tag = blog.tags.join('、')
  blog.time = getJustTime(blog.date)
  return blog;
}
