// configure environment - DO NOT MODIFY
require('dotenv').config();

// Import package

// Your code here
const jwt = require('jsonwebtoken');

// Define variables - DO NOT MODIFY
let token;
let payload;

// 1. Sign (create) a JWT containing your email address

// Your code here

token = jwt.sign(
  {email: 'jhasstheisen1@gmail.com'},
  process.env.SECRET_KEY,
  { expiresIn: '1h'}
);

// See the JWT in the console
console.log('JWT:', token);

// 2. Decode a JWT Payload

// Your code here

payload = jwt.decode(token);

// See the decoded payload in the console
console.log('Payload:', payload);

// 3. Verify a JWT

// Your code here

payload = jwt.verify(token, process.env.SECRET_KEY);

// See the verified payload in the console
console.log('Verified Payload:', payload);

// (Optional) Bonus: Catch Error With Invalid Signature
// Generate an alternate secret key and use it
//    To "try" to get the payload using jwt.verify
//    Then "catch" the error and log it to the console.

// Your code here

const altkey = '5c85a21fc81e28c377943686318a17684640bfc7e23568ac2f9ec4d37a1b9c213c10ad687ff92c6a0f7cf4bf0bd6e54405ecb56d77f4e6d0f41e5b962ba83cfa';
try {
  payload = jwt.verify(token, altkey);
} catch (e) {
  console.log(e)
}

// (Optional) Bonus: Catch Error With Expired Token
// First, set the token's expiration (above) to 1 second
// Second, add a setTimeout longer than 1 second
//    To "try" to get the payload using jwt.verify (with proper secret)
//    Then "catch" the error and log it to the console

// Your code here

try {
  token2 = jwt.sign(
    {email: 'jhasstheisen1@gmail.com'},
    process.env.SECRET_KEY,
    { expiresIn: '100ms'}
  );
  setTimeout(() => {console.log(jwt.verify(token, process.env.SECRET_KEY));}, 5000);
} catch (e) {
  console.log(e)
}
