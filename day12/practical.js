const users = [
    { id: 1, name: "Sita" },
    { id: 2, name: "Ram" }
];

const orders = [
    { userId: 1, item: "Laptop" },
    { userId: 1, item: "Mouse" },
    { userId: 2, item: "Book" }
];

function getUser(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const user = users.find((u) => u.id === id);

            if (user) {
                resolve(user);
            } else {
                reject(new Error("User not found"));
            }
        }, 1000);
    });
}

function getOrders(userId) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(orders.filter((o) => o.userId === userId));
        }, 1000);
    });
}

async function showOrders() {
    try {
        const user = await getUser(2);
        const userOrders = await getOrders(user.id);

        console.log(`${user.name}'s orders:`);
        console.log(userOrders);
    } catch (err) {
        console.error(err.message);
    }
}

showOrders();