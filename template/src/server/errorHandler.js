// Edit phyre.config.js to enable custom errorHandler

export const errorHandler = (err, req, res, next) => {
    if (err) {
        console.error('Error: ', err);
    }
    res.status(500).send(`<h1>Check console to see the error</h1>`);
}