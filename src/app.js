const express = require('express');
const cookieParser = require('cookie-parser');
const v1Routes = require('./routes/v1.routes');
const { errorHandler, notFoundHandler } = require('./middleware/error.middleware');
const { applySecurityMiddleware } = require('./middleware/security.middleware');

const app = express();

applySecurityMiddleware(app);

app.use(express.json());
app.use(cookieParser());

app.use('/api/v1', v1Routes);

app.use(notFoundHandler);
app.use(errorHandler);

module.exports = app;
