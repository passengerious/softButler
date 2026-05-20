const TELEGRAM_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const GROUP_ID = process.env.TELEGRAM_GROUP_ID?.trim();
const CHAT_ID = process.env.TELEGRAM_CHAT_ID?.trim();
const TARGET_CHAT_ID = GROUP_ID || CHAT_ID || '-1003502873196';

exports.handler = async function (event) {
  if (event.httpMethod === 'GET') {
    return {
      statusCode: 200,
      body: JSON.stringify({ times: [] }),
    };
  }

  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method Not Allowed' }),
    };
  }

  try {
    if (!TELEGRAM_TOKEN || !TARGET_CHAT_ID) {
      console.error('Missing Telegram environment variables');
      return {
        statusCode: 500,
        body: JSON.stringify({ error: 'Server is missing Telegram configuration' }),
      };
    }

    const { name, email, message, date, displayDate } = JSON.parse(event.body);

    if (!name || !email || !date) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Missing fields' }),
      };
    }

    const telegramMessage = `
📅 New QA Consultation Booking:
👤 Name: ${name}
📧 Email: ${email}
📅 Date: ${displayDate || date}
📝 Message: ${message || '-'}
    `;

    const telegramRes = await fetch(`https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: TARGET_CHAT_ID,
        text: telegramMessage,
      }),
    });

    if (!telegramRes.ok) {
      const errorText = await telegramRes.text();
      console.error('Telegram API error:', errorText, 'chat_id:', TARGET_CHAT_ID);
      return {
        statusCode: telegramRes.status,
        body: JSON.stringify({ error: 'Telegram API error', details: errorText }),
      };
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true }),
    };
  } catch (err) {
    console.error('Send-booking error:', err);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to send message', details: err?.message || 'Unknown error' }),
    };
  }
};
