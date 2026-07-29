async function getTodo(id) {
    try {
        const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);

        if (!res.ok) {
            throw new Error(`HTTP ${res.status} — ${res.statusText}`);
        }

        const todo = await res.json();

        if (!todo.title) {
            throw new Error(`No todo found with id ${id}`);
        }

        console.log("Title:", todo.title);
        return todo;
    } catch (err) {
        console.error("Could not load todo:", err.message);
        return null;
    }
}
getTodo(1);
getTodo(9999999);