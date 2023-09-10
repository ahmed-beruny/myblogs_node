const router = require('express').Router();
const Myblogs = require('../models/myblogs');



router.get('/myblogs', async (req, res) => {
    try {
        const myblogs = await Myblogs.find();
        res.json(myblogs);
    } catch (err) {
        res.json({ message: err });
    }
}
);

router.post('/myblogs', async (req, res) => {
    const myblogs = new Myblogs({
        title: req.body.title,
        author: req.body.author,
        content: req.body.content,
        image: req.body.image
    });
    try {
        const savedmyblogs = await myblogs.save();
        res.json(savedmyblogs);
    } catch (err) {
        res.json({ message: err });
    }
});

module.exports = router;