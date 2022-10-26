import { EditBlog, IBlog, IDatabase, NewBlog } from '../types/type'

export default new class Database {
  private state: IDatabase = {
    blogs: [{ id: 1, title: 'Some title', text: 'some info about blog' }]
  }
  public async AddBlog (data: NewBlog): Promise<string> {
    this.state.blogs.push({
      id: this.state.blogs.length + 1,
      title: data.title,
      text: data.text
    })
    return 'Blog Created'
  }
  public async GetAllBlogs (): Promise<IBlog[]> {
    return this.state.blogs
  }
  public async GetBlogById (id: IBlog['id']): Promise<IBlog | undefined> {
    return this.state.blogs.find(blog => blog.id == id)
  }
  public async RemoveBlogById (id: IBlog['id']): Promise<string> {
    if (!this.GetBlogById) return 'Blog Not Found'
    this.state.blogs.forEach((blog, index) => {
      if (blog.id == id) {
        this.state.blogs.splice(index, 1)
      }
    })
    return 'Blog has been removed'
  }
  public async EditBlog (id: IBlog['id'], newData: EditBlog): Promise<string> {
    if (!this.GetBlogById) return 'Blog Not Found'
    this.state.blogs.forEach((blog, index) => {
      this.state.blogs[index] = Object.assign(blog, newData)
    })
    return 'Blog has been updated'
  }
}
