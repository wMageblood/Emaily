module.exports = (req, res, next) => {
    //next es una funcion que llamamos cuando nuestro middleware se completo
    if (!req.user) {
        return res.status(401).send({ error: 'You must log in!' });
    }

    next();
};