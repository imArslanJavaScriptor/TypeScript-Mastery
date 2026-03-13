export {};

/**
 * ==========================================
 * 1. DEFINING DATA CONTRACTS (Interfaces)
 * ==========================================
 * These represent the "Shape" of the data coming from the API.
 */
interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

/**
 * ==========================================
 * 2. THE GENERIC FETCH FUNCTION
 * ==========================================
 * <T> allows us to pass the expected type as an argument.
 * Promise<T[]> tells TS that this async function eventually returns 
 * an array of whatever type T is.
 */
async function dataFetcher<T>(url: string): Promise<T[]> {
  const response = await fetch(url);

  // Check for HTTP errors (like 404 or 500)
  if (!response.ok) {
    throw new Error(`HTTP Error! Status: ${response.status}`);
  }

  // Cast the JSON response to the Generic Type T[]
  const data: T[] = await response.json();
  return data;
}

/**
 * ==========================================
 * 3. PRACTICAL USAGE (Consumption)
 * ==========================================
 */

const TODO_URL = "https://jsonplaceholder.typicode.com/todos";
const POST_URL = "https://jsonplaceholder.typicode.com/posts";

// Usage 1: Fetching Todos
dataFetcher<Todo>(TODO_URL)
  .then((todos) => {
    // Because of Generics, TS knows 'todo' has 'title' and 'completed'
    todos.forEach((todo) => console.log(`Todo: ${todo.title} [${todo.completed}]`));
  })
  .catch((err) => console.error(err));

// Usage 2: Fetching Posts
dataFetcher<Post>(POST_URL)
  .then((posts) => {
    // TS knows 'post' has 'body' which is not present in 'Todo'
    posts.forEach((post) => console.log(`Post Body: ${post.body.substring(0, 20)}...`));
  })
  .catch((err) => console.error(err));