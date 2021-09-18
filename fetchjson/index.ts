import axios from 'axios'

const url = "https://jsonplaceholder.typicode.com/todos/1";

interface Todo {
    id: number;
    title: string;
    finished: boolean;
}

axios.get(url).then( response => {
    const todo = response.data as Todo;

    const id = todo.id;
    const title = todo.title;
    const finished = todo.finished;

    logTodo(id, title, finished);    
});

const logTodo = (id: number, title: string, finished: boolean) => {
    console.log(`
        The Todo with ID: ${id}
        Has a title of: ${title}
        Is it finished? ${finished}
    `);
}
