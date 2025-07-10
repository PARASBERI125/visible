import express from "express";
import cors from "cors"; //cross origin resource sharing so as to allow frontend to communicate with server and access database/website
import cookieParser from "cookie-parser"; //used to store user information through cookies stored in user's browser,basically we can access and even change his cookies

const app = express();
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
    //for timebeing in env we have allowed from everywhere * but ideally only allow from URL where our frontend is hosted like vercel and all so that no one else can come and directly communicate and access our backend
  })
);
app.use(
  //to limit data coming from form submission in json format otherwise server will crash
  express.json({
    limit: "16kb",
  })
);
app.use(express.urlencoded({ extended: true, limit: "16kb" })); //if data coming from URL then different browsers have different url for eg some put %20 in url and some put // etc
//extended true means we can get objects inside objects as well / nested objects
app.use(express.static("public")); //used to store some public files or images on our server itself
//where we are using app.use it means we are using some middleware
app.use(cookieParser());
export default app;
//a middleware is always in between frontend and server because we dont have to serve every user and waste computational load
//EG-if someone is requesting instagram but he is not logged in only then why will we serve him the home page,thats where middleware comes in action and it checks
//similarly there can be multiple middlewares to check and flag it or give it to the next middleware eg- if he is user or admin etc etc
//(err,req,res,next) this next is flag
