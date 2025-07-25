const express = require('express');
const bodyParser = require('body-parser');
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const rateLimit = require('express-rate-limit');
const winston = require('winston');

const app = express();
app.use(bodyParser.json());

// Logging setup
const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    transports: [
        new winston.transports.Console(),
    ],
});

// Rate limiting
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // Limit each IP to 100 requests per windowMs
    message: 'Too many requests, please try again later.',
});

app.use(limiter);

// Import versioned routes
const v1Employees = require('./routes/v1/employees');
//const v2Employees = require('./routes/v2/employees');

// Use versioned routes
app.use('/v1/employees', v1Employees);
//app.use('/v2/employees', v2Employees);

// Swagger documentation
const swaggerDocument = YAML.load('./swagger.json');
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    logger.info(`Server running on port ${PORT}`);
});
