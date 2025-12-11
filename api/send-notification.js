import notificationapi from 'notificationapi-node-server-sdk';


notificationapi.init(
  '', //client id
  '', //client secret
  {
    baseURL: 'https://api.ca.notificationapi.com'
  }
);

export default async function handler(req, res) {

  const data = req.body;
  if (data.trackingid) {
    try {
      const result = await notificationapi.deleteSchedule(data.trackingid);
      res.status(200).json(result.data);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to cancel notification' });
    }
  } else {
    try {
      const result = await notificationapi.send({
        type: 'map_events_for_websites',
        to: { id: data.id },
        web_push: {
          title: data.msg,
          message: data.msg,
          icon: 'https://app.notificationapi.com/mstile-150x150.png?id={{commentId}}',
          url: 'https://vancouver-transit-tracker.vercel.app/',
        },
        schedule: data.schedule
      });
      res.status(200).json(result.data);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to send notification' });
    }
  }

}
