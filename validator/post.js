exports.createPostValidator = (req,res,next)=>{


    //title
    req.check("title","write title").notempty()
    req.check("title",'title must be between 4 and 150 characters').islength({
        min:4,
        max:150
    });

    
    //body
    req.check("body","write body").notempty()
    req.check("body","body must be between 4 and 2000 characters").islength({
        min:4,
        max:2000
    });

    //validation
    const errors = req.validationErrors()

    //if the first error happen show it as it is
    if(errors){
    const firstError = errors.map((error) => error.msg)[0]
    return res.status(400).json({error: firstError})
    }

    //proceed to next middleware
    next();
};