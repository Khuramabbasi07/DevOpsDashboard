const express = require('express');
const sql = require('mssql');
const app = express();
const port = 3000;

const config = {
    user: 'sa',
    password: 'YourStrongPassword',
    server: 'localhost',
    database: 'DevOpsDB',
    options: { trustServerCertificate: true }
};

app.get('/deployments', async (req, res) => {
    try {
        let pool = await sql.connect(config);
        let result = await pool.request().query('SELECT * FROM Deployments ORDER BY DeployedAt DESC');
        res.json(result.recordset);
    } catch (err) {
        res.status(500).send(err.message);
    }
});

app.listen(port, () => console.log(`Backend running on port ${port}`));
