import express from 'express';
import {Application} from 'express';
import {notify} from './notify.route';
import {subscribe} from './subscribe.route';
const bodyParser = require('body-parser');

const webpush = require('web-push');

const vapidKeys = {
    publicKey: 'BO4QXponQpWcci9VHrEYVofUEAfDyzw76xzRSFNiMrEfPKZMlXGBfienJt3hm7vVOr7R7-s0OAjybEXZNX69pMQ',
    privateKey: '535DY2Qj3xlg3tF_AOWnzadU6fJrNFbbd0Iv1J4HqrU'
};

webpush.setVapidDetails(
    'mailto:pedro.vitorinosp@gmail.com',
    vapidKeys.publicKey,
    vapidKeys.privateKey
);

const app: Application = express();

app.use(bodyParser.json());

app.route('/api/subscribe')
    .post(subscribe);

app.route('/api/notify')
    .post(notify);

// launch an HTTP Server
const httpServer = app.listen(9090, () => {
    console.log('HTTP Server running at http://localhost:' + httpServer.address().port);
});


