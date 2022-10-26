import blogModel from '../models/blog.model'
import { EditBlog, IBlog, NewBlog } from '../types/type'

export default new class BlogService {
  private db = blogModel

  public async create (data: NewBlog): Promise<string> {
    return this.db.AddBlog(data)
  }
  public async fetch (): Promise<IBlog[]> {
    return this.db.GetAllBlogs()
  }
  public async fetchById (id: IBlog['id']): Promise<IBlog | undefined> {
    return this.db.GetBlogById(id)
  }
  public async deleteById (id: IBlog['id']): Promise<string> {
    return this.db.RemoveBlogById(id)
  }
  public async edit (id: IBlog['id'], newData: EditBlog): Promise<string> {
    return this.db.EditBlog(id, newData)
  }
}
