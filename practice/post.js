async function createTodo() {
    try {
        const res = await fetch("https://jsonplaceholder.typicode.com/todos", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({title: "Learn fetch",completed: false,userId: 1}),
        });

        if (!res.ok) {
            throw new Error(`HTTP ${res.status} — ${res.statusText}`);
        }

        const created = await res.json();
        console.log("Created todo with id:", created.id);
        return created;
    } catch (err) {
        console.error("Could not create todo:", err.message);
        return null;
    }
}

createTodo();