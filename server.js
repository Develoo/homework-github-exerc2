const express = require('express');
const app = express();
const port = 3000;

// Route principale
app.get('/', (req, res) => {
    res.send('Hello, Express!');
});

// Démarrer le serveur
app.listen(port, () => {
    console.log(`Serveur démarré sur http://localhost:${port}`);
});
/*test3*/
/*test4*/
/*test5*/