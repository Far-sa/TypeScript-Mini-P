import blogService from './services/blog.service'
;(async () => {
  await blogService.create({
    title: 'Book1',
    text: 'Need time to learn the..'
  })

  await blogService.create({
    title: 'Book2',
    text: 'Need time to pass the Book1'
  })

  await blogService.create({
    title: 'Book4',
    text: 'Need time to pass the Book2'
  })

  console.log(await blogService.fetch())
  console.log(await blogService.fetchById(3))
  console.log(await blogService.edit(3, { title: 'All books have been ....' }))
})()
