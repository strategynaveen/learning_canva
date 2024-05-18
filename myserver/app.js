const express = require('express');
const bodyParser = require('body-parser');
const { runInNewContext } = require('vm');

const app = express();
const port = 3000;

// Middleware to parse JSON body
app.use(bodyParser.json());

// Endpoint to execute JavaScript code
app.get('/run-js', (req, res) => {
    const code = `
    function demo(){
        return "Hello strategy";
    }
    demo();
    `;

    try {
        // Execute JavaScript code in a new context
        const output = runInNewContext(code, {});

        // Send the output back to the client
        res.send({ output });
    } catch (error) {
        console.error('Execution error:', error);
        res.status(500).send({ error: 'Execution error' });
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
