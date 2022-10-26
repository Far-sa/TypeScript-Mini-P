export interface IBlog {
  id: number
  title: string
  text: string
}

export interface IDatabase {
  blogs: IBlog[]
}
export type NewBlog = Omit<IBlog, 'id'>
export type EditBlog = Partial<NewBlog>
