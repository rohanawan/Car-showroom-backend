# carShowroom Backend

## Steps to run the application

1) Create a ``.env`` file in the root directory of the project. Inside ``.env`` file enter the following environment
   variables:

```
NODE_ENV="development"
# Port number
PORT=4000
# URL of the Mongo DB
MONGODB_URL=mongodb+srv://rohan:rohan@cluster0.mdl0s0n.mongodb.net/?retryWrites=true&w=majority
```

## SMTP Server Setup

Inside ``.env`` file enter the following environment variables:

```
# SMTP configuration options for the email service
# For testing, you can use a fake SMTP service like Ethereal: https://ethereal.email/create
SMTP_HOST=smtp.gmail.com
SMTP_PORT=465
SMTP_USERNAME=rohan.awan863@gmail.com
SMTP_PASSWORD=edvfxnbtxvbdtajm
EMAIL_FROM=rohan.awan863@gmail.com
```

2) Run this command in the project terminal to install dependencies:

```
npm install
```

3) Run this command in the project terminal to start the application:

```
npm run dev
```

### Happy Hacking!
