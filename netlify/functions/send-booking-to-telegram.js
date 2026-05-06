const TELEGRAM_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const GROUP_ID = process.env.TELEGRAM_GROUP_ID?.trim();
const CHAT_ID = process.env.TELEGRAM_CHAT_ID?.trim();
const TARGET_CHAT_ID = GROUP_ID || CHAT_ID || '-1003502873196';

const bookedSlots = new Set();

exports.handler = async function (event) {
  if (event.httpMethod === 'GET') {
    const date = event.queryStringParameters?.date;
    if (!date) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Missing date' }),
      };
    }
    const times = Array.from(bookedSlots)
      .filter((key) => key.startsWith(`${date}|`))
      .map((key) => key.split('|')[1]);
    return {
      statusCode: 200,
      body: JSON.stringify({ times }),
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

    const { name, email, message, date, time, displayDate } = JSON.parse(event.body);

    if (!name || !email || !date || !time) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Missing fields' }),
      };
    }

    const slotKey = `${date}|${time}`;
    if (bookedSlots.has(slotKey)) {
      return {
        statusCode: 409,
        body: JSON.stringify({ error: 'Slot already booked' }),
      };
    }

    const telegramMessage = `
📅 New QA Consultation Booking:
👤 Name: ${name}
📧 Email: ${email}
📅 Date: ${displayDate || date} at ${time} (Kyiv time)
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

    // Mark slot as booked only after Telegram accepts the message.
    bookedSlots.add(slotKey);

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
