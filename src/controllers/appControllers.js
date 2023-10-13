const jwtToken = require("jsonwebtoken");
const constant = require("../utility/constants");
const home = (req, res) => {
  // res.send('Welcome to our first app!');
  const tokenString = req.headers.authorization;
  const token = tokenString.split(' ')[1];
  console.log('token:::', token);
  jwtToken.verify(token,constant.secretkey,(error,decodedData)=>{  //this line has some issues
    if(error){
      res.status(401).end('invalid data')
    }else{
      res.status(200).json(decodedData)
    }
  })
}
  const signin = (req, res) => {
    const userData = req.body.data;
console.log(userData)
    if (
      userData.email === "sabiburrahaman720@gmail.com" &&
      userData.password === 12345
    ) {
      const payLoad = {
        name: "sabibur",
        email: "sabiburrahaman720@gmail.com",
        role: "admin",
        //   secretKey: "abcd",
      };
      const encriptedToken = jwtToken.sign(payLoad, constant.secretkey);
      res.status(201).json({  userToken: encriptedToken});
    
    } else {
      res.status(401).end("unauthorized user");
    }
  };

module.exports = {
  home,
  signin,
};
