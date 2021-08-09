import express, { Request, Response } from 'express'
import { router } from './routes/loginRoutes';
import cookieSession from 'cookie-session';

const app = express();

app.use(express.urlencoded());
app.use(cookieSession({ keys: ['laskdif'] }));
app.use(router);

app.listen(3000, () => {
  console.log('Listening on port 3000');
});
