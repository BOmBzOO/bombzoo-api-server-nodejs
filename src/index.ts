import 'dotenv/config';

import https from 'https';
import server from './server';

const { PORT } = process.env;

https.createServer({
}, server)
  .listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
  });
