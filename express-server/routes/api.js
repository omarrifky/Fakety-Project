// Import dependencies
const mongoose = require('mongoose');
const express = require('express');

const router = express.Router();

// MongoDB URL from the docker-compose file
const dbHost = 'mongodb://database/mean-docker';

// Connect to mongodb
mongoose.connect(dbHost);

//-------------------------------------------Create the mongo DB schemas & models--------------------------

// create mongoose schema
const userSchema = new mongoose.Schema({
    username: {
        unique : true,
        type: String,
        required: true,
        trim: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true,
        trim: true,
    },
    balance : Number 
  });
//--------------------------------Resturant-------ACML
const ResturantSchema = new mongoose.Schema({
    name: {
        unique : true,
        type: String,
        required: true,
        trim: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true,
        trim: true,
    },
  });
  
  // create mongoose model
 const User = mongoose.model('User', userSchema);
const Resturant = mongoose.model('Resturant', ResturantSchema);
  


/* GET api listing. */
router.get('/', (req, res) => {
        res.send('api works');
});

/* GET all users. */
router.get('/users', (req, res) => {
    User.find({}, (err, users) => {
        if (err) res.status(500).send(error)

        res.status(200).json(users);
    });
});
router.get('/resturants', (req, res) => {
    Resturant.find({}, (err, resturants) => {
        if (err) res.status(500).send(error)

        res.status(200).json(resturants);
    });
});

router.route('/users/:user_id')
.get(function(req, res) {
	User.findById(req.params.user_id, function(err, Users) {
		if (err)
			res.send(err);
		res.json(Users);
	});
})
.delete(function(req, res) {
	User.remove({
		_id: req.params.user_id
	}, function(err, Users) {
		if (err)
			res.send(err);

		res.json({ message: 'Successfully deleted' });
	});
});

router.route('/resturants/:resturants_id')
.get(function(req, res) {
	Resturant.findById(req.params.resturants_id, function(err, Resturants) {
		if (err)
			res.send(err);
		res.json(Resturants);
	});
})
.delete(function(req, res) {
	Resturant.remove({
		_id: req.params.resturants_id
	}, function(err, Users) {
		if (err)
			res.send(err);

		res.json({ message: 'Successfully deleted' });
	});
});


/* Create a user. */
router.post('/users', (req, res) => {
    let user = new User({
        username: req.body.username,
        password: req.body.password,
        balance : 0
    });

    user.save(error => {
        if (error) res.status(500).send(error);

        res.status(201).json({
            message: 'User created successfully'
        });
    });
});

router.post('/resturants', (req, res) => {
    let user = new Resturant({
        name: req.body.name,
        password: req.body.password
    });

    user.save(error => {
        if (error) res.status(500).send(error);

        res.status(201).json({
            message: 'Resturants created successfully'
        });
    });
});

router.patch('/setuserbalance/:id', (req, res) => {
	User.findByIdAndUpdate(
        req.params.id,
        {
            $set: {balance : req.body.balance}
        },
        { new: true }

        ).exec(function(err, updateduser) {
            if (err) {
                return res
                .status(404)
                .json({ err: null, msg: 'balance not given.', data: null });
            }
            if (!updateduser) {
                return res
                        .status(404)
                        .json({ err: null, msg: 'user not found.', data: null });
            }
            res.status(200).json({
                err: null,
                msg: 'user was updated successfully.',
                data: updateduser
            });
        });
});

router.route('/loginuser')
.patch( function (req, res) {// this method is responsible for logging the user into his account
        User.findOne({ username: req.body.username  }).exec(function (err, userfound) {


                if (!userfound) {

                    return res.status(422).json({
                        err: null,
                        msg: "No user with this username was found",
                        data: null
                    });
                }
                else {
                 if(userfound.password == req.body.password){
                    return res.status(422).json({
                        err: null,
                        msg: "Login successful",
                        data: userfound
                    });
                 }	
                 
                    return res.status(422).json({
                        err: null,
                        msg: "Wrong password",
                        data: null
                    });
                
                }
            
        })});

router.route('/searchuserinredis')
.get(function(req, res) {
    var redisClient = require('redis-connection')(); // require & connect
    redisClient.get(''+req.body.username, function (err, reply) {
    
});
})
        router.route('/userbyname')
        .patch( function (req, res) {// this method is responsible for logging the user into his account
                User.findOne({ username: req.body.username  }).exec(function (err, userfound) {
   

                        if (!userfound) {
        
                            return res.status(422).json({
                                err: null,
                                msg: "No user with this username was found",
                                data: null
                            });
                        }
                        else {
                        	var redisClient = require('redis-connection')(); // require & connect
                           redisClient.set(''+userfound.name, userfound);
                           
                         
                            return res.status(422).json({
                                err: null,
                                msg: "User found",
                                data: userfound
                            });
                            
                        
                        }
                    
                    
                })});
        router.route('/loginresturant')
.patch( function (req, res) {// this method is responsible for logging the resturant account
        Resturant.findOne({ name: req.body.name  }).exec(function (err, resturantfound) {


                if (!resturantfound) {

                    return res.status(422).json({
                        err: null,
                        msg: "No resturant with this name was found",
                        data: null
                    });
                }
                else {
                 if(resturantfound.password == req.body.password){
                    return res.status(422).json({
                        err: null,
                        msg: "Login successful",
                        data: resturantfound
                    });
                }	

                return res.status(422).json({
                    err: null,
                    msg: "Wrong password",
                    data: null
                });
              
            
            }
            
        })});

        
      

module.exports = router;