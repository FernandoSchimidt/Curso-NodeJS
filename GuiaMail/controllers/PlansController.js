class PlansController {

    index(req, res) {
        res.send('Hello World');
    }
    create(req, res) {
        res.render('plans/create');
    }

}

module.exports = new PlansController();