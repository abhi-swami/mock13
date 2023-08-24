const jwt =require("jsonwebtoken");

let userId
const auth=(req,res,next)=>{
    const url=req.url.split("/")
    if(url.includes("blogs")){
        const { token } = req.headers;
        try {
          const decoded = jwt.verify(token, "mock13");
          console.log(decoded)
          req.body.userId=decoded.userId;
        } catch (err) {
          res.send({ error: err.message });
        }
    }
    next();
}
module.exports={auth};