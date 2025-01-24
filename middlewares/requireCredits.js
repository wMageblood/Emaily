module.exports = (req, res, next) => {
    //next es una funcion que llamamos cuando nuestro middleware se completo
    if (req.user.credits < 1) {
        return res.status(403).send({ error: 'Not enough credits!' });
    }

    next();
};