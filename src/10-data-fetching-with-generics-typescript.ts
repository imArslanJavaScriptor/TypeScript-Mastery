// Agr kuch confusing lge to is code ki explanation nikalo,

interface Todo {
  userId: number,
  id: number,
  title: string,
  completed: boolean
}

interface Post {
  userId: number,
  id: number,
  title: string,
  body: string
}

async function dataFetcher<T>(url: string): Promise<T[]> {
  const res = await fetch(url)
  if(!res.ok) {
    throw new Error("Something went wrong")
  }
  const data: T[] = await res.json()
  return data
}

const url = "https://jsonplaceholder.typicode.com/todos"
dataFetcher<Todo>(url).then(data => {
  const titles = data.map(todo => todo.title)
  console.log(titles)
})

const url2 = "https://jsonplaceholder.typicode.com/posts"
dataFetcher<Post>(url2).then(data => {
  const titles = data.map(post => post.title)
  console.log(titles)
})