const express = require('express');

const Schema = require('./cooking-model.js');

const router = express.Router();

// GET Reqs
router.get('/recipes', (req, res) => {
    Schema.getRecipes()
        .then(recipes => {
            res.status(200).json(recipes);
        })
        .catch(err => {
            res.status(500).json({ message: 'Woops, there was a problem retrieving recipes', err});
        });
});

router.get('/recipes/:id/shoppingList', (req, res) => {
    const { id } = req.params;
    
    if (id) {
        Schema.getShoppingList(id)
            .then(list => {
                res.status(200).json(list);
            })
            .catch(err => {
                res.status(500).json({ message: 'Woops, there was a problem retrieving the shopping list', err});
            });
    } else {
        res.status(404).json({ error: `Recipe ${id} does not exist.`});
    }
});

router.get('/recipes/:id/instructions', (req, res) => {
    const id = req.params.id;

    if (id) {
        Schema.getInstructions(id)
            .then(steps => {
                res.status(200).json(steps);
            })
            .catch(err => {
                res.status(500).json({ message: 'Woops, there was a problem retrieving instructions', err});
            });
    } else {
        res.status(404).json({ error: `Recipe ${id} does not exist`});
    };
});

module.exports = router;