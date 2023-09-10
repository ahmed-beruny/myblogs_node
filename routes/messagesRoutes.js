const router = require('express').Router();
const Messages = require('../models/messages');


router.get('/messages', async (req, res) => {
    try {
        const messages = await Messages.find();
        res.json(messages);
    } catch (err) {
        res.json({ message: err });
    }
}
);

router.post('/messages', async (req, res) => {
    const messages = new Messages({
        name: req.body.name,
        email: req.body.email,
        message: req.body.message
    });
    try {
        const savedmessages = await messages.save();
        res.json(savedmessages);
    } catch (err) {
        res.json({ message: err });
    }
});


module.exports = router;