async function loadUsers() {
    try {
        const [users, todos] = await Promise.all([
            getJSON("https://jsonplaceholder.typicode.com/users"),
            getJSON("https://jsonplaceholder.typicode.com/todos"),
        ]);

        users.forEach((user) => {
            const count = todos.filter((t) => t.userId === user.id).length;
            console.log(`${user.name}: ${count} todos`);
        });
    } catch (err) {
        console.error("Could not load users/todos:", err.message);
    }
}

loadUsers();