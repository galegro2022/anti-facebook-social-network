const { User, Thought } = require('../models');
const reactionModel = require('../models/reactions');

module.exports = {
    // get all thoughts
    getAllThought(req, res) {
        Thought.find({})
            .then((dbThoughtData) => res.json(dbThoughtData))
            .catch((err) => {
                console.log(err);
                res.status(400).json(err);
            },
            );
    },
    // get one thought by id
    getSingleThought({ params }, res) {
        Thought.findOne({ _id: params.id })
            .select('-__v')
            .then((dbThoughtData) => {
                // If no thought is found, send 404
                if (!dbThoughtData) {
                    res.status(404).json({ message: 'No thought found with this id!' });
                    return;
                }
                res.json(dbThoughtData);

            })
            .catch((err) => {
                console.log(err);
                res.status(400).json(err);
            })
    },


    // createThought
    createThought(req, res) {
        Thought.create(req.body)
            .then((Thought) => { res.json(Thought) })
            .catch((err) => { console.log(err); res.status(500).json(err) })},

            
// delete thought
    deleteThought(req, res) {
        Thought.findOneAndDelete({ _id: req.params.id })
            .then((dbThoughtData) => {
                if (!dbThoughtData) {
                    res.status(404).json({ message: 'No thought found with this id!' }
                    );
                    return;
                }
                res.json(dbThoughtData);
            }
            )
            .catch((err) => res.status(400).json(err));
            //console.log(err);
    },

// create reaction
    createReaction(req, res) {
        Thought.findOneAndUpdate(
            { _id: req.params.thoughtId },
            {$push: { reactions: req.body }},
            { new: true, runValidators: true }
        )
        .then((dbreactionData) => {
            if (!dbreactionData) {
                res.status(404).json({ message: 'No reaction found with this id!' }
                );
                return;
            }
            res.json(dbreactionData);
        })
        .catch((err) => res.status(400).json(err));
    },

// delete reaction
    deleteReaction(req, res) {
        Thought.findOneAndUpdate(
            { _id: req.params.thoughtId},
            {$pull: { reactions: {_id:req.params.reactionId} }},
            { new: true, runValidators: true }
        )
        .then((dbreactionData) => {
            if (!dbreactionData) {
                res.status(404).json({ message: 'No reaction found with this id!' }
                );
                return;
            }
            res.json(dbreactionData);
        })
        .catch((err) => res.status(400).json(err));
    }

};