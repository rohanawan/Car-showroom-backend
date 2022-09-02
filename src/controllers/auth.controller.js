const httpStatus = require('http-status');
const generator = require('generate-password');
const catchAsync = require('../utils/catchAsync');
const { authService, userService, tokenService, emailService } = require('../services');

const sendVerificationEmail = catchAsync(async (req, res) => {
  // eslint-disable-next-line no-console
  console.log('req.user.email', req.user);
  await emailService.sendVerificationEmail(req.user.email);
  res.status(httpStatus.NO_CONTENT).send();
});

const register = catchAsync(async (req, res) => {
  const genPassword = generator.generate({
    length: 10,
    symbols: true,
    numbers: true,
    lowercase: true,
    uppercase: true,
    strict: true,
    exclude: true,
  });
  req.body.password = genPassword;
  const user = await userService.createUser(req.body);
  const tokens = await tokenService.generateAuthTokens(user);
  await emailService.sendVerificationEmail(req.body.email, req.body.password);
  res.status(httpStatus.CREATED).send({ user, tokens });
});

const login = catchAsync(async (req, res) => {
  const { email, password } = req.body;
  const user = await authService.loginUserWithEmailAndPassword(email, password);
  const tokens = await tokenService.generateAuthTokens(user);
  res.send({ user, tokens });
});

module.exports = {
  register,
  login,
  sendVerificationEmail,
};
