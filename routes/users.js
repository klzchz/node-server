let nedb = require('nedb');
let db = new nedb({
    filename: 'users.db',
    autoload: true
});

module.exports = (app) => {

    let route = app.route('/users');

    route.get((req, res) => {

        db.find({}).sort({ name: 1 }).exec((err, users) => {

            if (err) {
                app.send(err, req, res, 400);
            } else {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json({
                    users
                })
            }
        });

    });


    route.post((req, res) => {


        db.insert(req.body, (err, user) => {
            if (err) {
                app.send(err, req, res, 400);
            } else {
                res.status(200).json(user);
            }


        });

    });

};