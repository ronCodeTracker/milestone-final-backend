const router = require('express').Router()
const bodyParser = require('body-parser')
const { request } = require('express')
const db = require("../models")



router.use(bodyParser.json())
router.use(bodyParser.urlencoded({
    extended:true
}

))





router.post("/add_junk", (req, res) => {
    console.log(req.body)
    if (!req.body.pic) {
        // Default image if one is not provided
        req.body.pic = 'http://placekitten.com/400/400'
    }
    db.Junk.create(req.body)
        .then((placeVar) => {
            console.log("placeVar: ", placeVar)
            res.json(req.body)
        })
        .catch(err => {
            console.log('err', err)
            //res.json(req.body)
        })
})





router.get('/', (req, res) => {
    db.Junk.find()
        .then((junks) => { res.json(junks) })
})



router.get('/:junkId', (req, res) => {

    let junkId = req.params.junkId
    if (!junkId) {
        res.status(404).json({ message: `no id found` })
    } else {

        db.Junk.findOne({ "_id": junkId })
            .then((id) => {
                if (!id) {
                    res.status(404).json({ message: `Could not find place with id "${junkId}"` })
                } else {
                    res.json(id)
                }
            })
    }

})

router.put('/:junkId', (req, res) => {

    let junkId = req.params.junkId
    let updates = req.body
    if (!junkId) {
        res.json({ message: `no id found` })
    } else {

        db.Junk.findOne({ "_id": junkId })
            .then((id) => {

                if (!id) {
                    res.status(404).json({ message: `Could not find place with id "${junkId}"` })
                } else {
                    db.Junk.findOneAndUpdate({ _id: req.params.junkId }, updates, { new: true })
                        .then(updatedJunk => res.json(updatedJunk))
                        .catch(err => res.status(400).json("Error: " + err))
                }

            })


    }
})




router.delete('/:junkId', (req, res) => {

    let junkId = req.params.junkId
    console.log('junkId:  ' ,  junkId)
    if (!junkId) {
        res.json({ message: `nothing for id` })
    }
    else {
        db.Junk.findOne({ "_id": junkId })
            .then((id) => {

                if (!id) {
                    res.status(404).json({ message: `Could not find place with id "${placeId}"` })
                }
                else {
                    db.Junk.findByIdAndRemove(req.params.junkId)
                        .then(() => res.json("Junk Deleted )= "))
                        .catch(err => res.status(400).json("Error: " + err))
                }


            })

    }

  }  )



module.exports = router


