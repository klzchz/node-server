module.exports = {

    user: (app, req, res) => {
        req.assert('name', 'name is Mandatory.').notEmpty();
        req.assert('email', 'Email is Mandatory.').notEmpty().isEmail();


        let errors = req.validationErrors();

        if (errors) {
            app.utils.error.send(errors, req, res);
            return false;

        } else {
            return true;
        }
    }


};