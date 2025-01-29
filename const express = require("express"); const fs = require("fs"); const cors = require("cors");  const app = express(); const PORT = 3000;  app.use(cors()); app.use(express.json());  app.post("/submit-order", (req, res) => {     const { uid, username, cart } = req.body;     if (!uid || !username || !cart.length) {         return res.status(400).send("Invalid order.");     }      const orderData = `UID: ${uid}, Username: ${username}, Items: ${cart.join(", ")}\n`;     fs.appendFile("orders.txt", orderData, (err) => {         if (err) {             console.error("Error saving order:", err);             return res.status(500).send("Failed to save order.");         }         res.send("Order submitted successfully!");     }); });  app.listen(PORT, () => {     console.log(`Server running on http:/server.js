const express = require("express");
const fs = require("fs");
const cors = require("cors");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.post("/submit-order", (req, res) => {
    const { uid, username, cart } = req.body;
    if (!uid || !username || !cart.length) {
        return res.status(400).send("Invalid order.");
    }

    const orderData = `UID: ${uid}, Username: ${username}, Items: ${cart.join(", ")}\n`;
    fs.appendFile("orders.txt", orderData, (err) => {
        if (err) {
            console.error("Error saving order:", err);
            return res.status(500).send("Failed to save order.");
        }
        res.send("Order submitted successfully!");
    });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
