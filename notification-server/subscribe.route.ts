import {SUBSCRIPTIONS} from './db';

export function subscribe(req, res) {

    const sub = req.body;

    console.log('Received Subscription on the server: ', sub);

    SUBSCRIPTIONS.push(sub);

    res.status(200).json({message: 'Subscription added successfully.'});
}
