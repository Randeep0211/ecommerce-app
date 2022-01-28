exports.userValidator = (req,res,next)=>{
    req.check('name' , 'Name is required').notEmpty();
    req.check('email' , 'email must contain atleast 3 to 32 characters')
              .matches(/.+\@.+\..+/)
              .withMessage("email must contain @")
              .isLength(
                  {
                      min:3,
                      max:32
                  }
              );
    
    req.check('password' , 'password is required').notEmpty()
              req.check('password')
                        .isLength({
                            min:8
                        }) 
                        .withMessage('password must contain atleast 8 characters')
                        .matches(/\d/)
                        .withMessage('password must contain atleast one digit')  
                        
                        const errors = req.validationErrors();
                        if(errors){

                            const firstError = errors.map(error => error.msg)[0]
                            return res.status(400).json({error: firstError})
                        }

                        next();
}