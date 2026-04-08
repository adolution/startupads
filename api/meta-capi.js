export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const token = process.env.META_CAPI_TOKEN;
  if (!token) {
    return res.status(500).json({ error: 'Missing token' });
  }

  const { hashed_email, event_name, event_id, event_source_url, fbp, fbc, client_user_agent } = req.body;

  const userData = {
    em: [hashed_email],
    client_user_agent: client_user_agent
  };
  if (fbp) userData.fbp = fbp;
  if (fbc) userData.fbc = fbc;

  const payload = {
    data: [{
      event_name: event_name,
      event_time: Math.floor(Date.now() / 1000),
      event_id: event_id,
      action_source: 'website',
      event_source_url: event_source_url,
      user_data: userData
    }]
  };

  const fbRes = await fetch(
    `https://graph.facebook.com/v19.0/5808257675949121/events?access_token=${token}`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    }
  );

  const data = await fbRes.json();
  return res.status(fbRes.status).json(data);
}
