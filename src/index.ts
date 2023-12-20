import 'dotenv/config';

import http from 'http';
import server from './server';

const { VERCEL_PORT } = process.env;

http.createServer({
}, server)
  .listen(VERCEL_PORT, () => {
    console.log(`Server is listening on port ${VERCEL_PORT}`);
  });
