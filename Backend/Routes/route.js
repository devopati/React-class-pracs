const express = require('express')
const router = express.Router()
const Sign = require('../models/signupmodel')


router.post('/signup',(request,response) => {
	const signedUpUser = new Sign({
		username:request.body.username,
		email:request.body.email,
		password:request.body.password,
		repeatPassword:request.body.repeatPassword
	})

	signedUpUser.save()
	.then(data => {
		response.json(data)
	}) .catch(error => {
		response.json(error)
	})
})


module.exports = router



