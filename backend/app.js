import express from 'express';
import { createServer } from 'node:http'
import multer from 'multer'
import { getParameters } from './aws.js';

if (process.env.CLOUD === 'aws') {
    getParameters(process.env['SSM_PARAMETER_PATH']).then(() => {
        console.log("Parameters loaded from AWS SSM");
        startservice();
    }).catch((error) => {
        console.error(error.message);
        startservice();
    })

} else {
    console.log("No AWS SSM parameters to load, starting service...");
    startservice();
}

async function startservice() {
    //Import authentication modules here
    // e.g import { authenticateToken } from './auth.js';
    

    const app = express();
    const server = createServer(app);
    const upload = multer()

    app.use(express.urlencoded({ extended: true }))
    app.use(express.json());

    app.get('/api', (req, res) => {
        res.json({ "message": "/api endpoint", "status": "true" })
    });

    app.get('/api/test', (req, res) => {
        res.json({ "message": "Test endpoint", "status": "true", "test": process.env.TEST || 'NOT_FOUND' });
    });

    const PORT = process.env.PORT || 4000;

    server.listen(PORT, () => {
        console.log(`API server is running on port ${PORT}`);
    });
}
