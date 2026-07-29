async function getJSON(url) {
    const res = await fetch(url);

    if (!res.ok) {
        throw new Error(`HTTP ${res.status} — ${res.statusText}`);
    }

    return res.json();
}

async function getTodo(id) {
    try {
        const todo = await getJSON(`https://jsonplaceholder.typicode.com/todos/${id}`);

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