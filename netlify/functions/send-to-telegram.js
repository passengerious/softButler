const TELEGRAM_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const GROUP_ID = process.env.TELEGRAM_GROUP_ID || '-1003922476267';
const CHAT_ID = process.env.TELEGRAM_CHAT_ID;
const TARGET_CHAT_ID = GROUP_ID || CHAT_ID;

exports.handler = async function(event, context) {
  // Only allow POST
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method Not Allowed' })
    };
  }

  try {
    if (!TELEGRAM_TOKEN || !TARGET_CHAT_ID) {
      console.error('Missing Telegram environment variables');
      return {
        statusCode: 500,
        body: JSON.stringify({ error: 'Server is missing Telegram configuration' })
      };
    }

    const { name, email, message } = JSON.parse(event.body);

    if (!name || !email || !message) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Missing fields' })
      };
    }

    const telegramMessage = `
📩 New Contact Form Submission:
👤 Name: ${name}
📧 Email: ${email}
📝 Message: ${message}
    `;

    const telegramRes = await fetch(`https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: TARGET_CHAT_ID,
        text: telegramMessage,
        parse_mode: 'Markdown',
      }),
    });

    if (!telegramRes.ok) {
      const errorText = await telegramRes.text();
      console.error('Telegram API error:', errorText);
      throw new Error('Failed to send Telegram message');
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true })
    };
  } catch (err) {
    console.error('Send-to-telegram error:', err);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to send message' })
    };
  }
};
