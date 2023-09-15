const router = require('express').Router();
const Myblogs = require('../models/myblogs');


//get all blogs 
router.get('/myblogs', async (req, res) => {
    try {
        const myblogs = await Myblogs.find();
        res.json(myblogs);
    } catch (err) {
        res.json({ message: err });
    }
}
);

//add a blog
router.post('/myblogs', async (req, res) => {
    const myblogs = new Myblogs({
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

//delete a blog
router.delete('/myblogs/:id', async (req, res) => {
    try {
        const removedmyblogs = await Myblogs.findByIdAndDelete(req.params.id);
        res.json(removedmyblogs);
    } catch (err) {
        res.json({ message: err });
    }
});


module.exports = router;