var SUBSCRIPTIONS = require('./db');

const webpush = require('web-push');


function notify(req, res) {

    console.log('Total subscriptions', SUBSCRIPTIONS.length);

    // sample notification payload
    const notificationPayload = {
        notification: {
            title: 'Legolas',
            body: 'They`re taking the hobbits to Isengard!',
            icon: 'assets/main-page-logo-small-hat.png',
            vibrate: [100, 50, 100],
            data: {
                dateOfArrival: Date.now(),
                primaryKey: 1
            },
            // actions: [{
            //     action: 'explore',
            //     title: 'Go to the Isengard'
            // }]
        }
    };


    Promise.all(SUBSCRIPTIONS.map(sub => webpush.sendNotification(
        sub, JSON.stringify(notificationPayload) )))
        .then(() => res.status(200).json({message: 'Message sent successfully.'}))
        .catch(err => {
            console.error('Error sending notification, reason: ', err);
            res.sendStatus(500);
        });
}

module.exports = notify;