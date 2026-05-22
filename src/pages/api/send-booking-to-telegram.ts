import type { NextApiRequest, NextApiResponse } from 'next';

const TELEGRAM_TOKEN = process.env.TELEGRAM_BOT_TOKEN!;
const GROUP_ID = process.env.TELEGRAM_GROUP_ID?.trim();
const CHAT_ID = process.env.TELEGRAM_CHAT_ID?.trim();
const TARGET_CHAT_ID = GROUP_ID || CHAT_ID || '-1003502873196';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'POST') {
        return res.status(405).end('Method Not Allowed');
    }

    const { name, email, message, date, displayDate } = req.body;

    if (!name || !email || !date) {
        return res.status(400).json({ error: 'Missing fields' });
    }

    const telegramMessage = `
📅 New QA Consultation Booking:
👤 Name: ${name}
📧 Email: ${email}
📅 Date: ${displayDate || date}
📝 Message: ${message || '-'}
  `;

    try {
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
            throw new Error('Failed to send Telegram message');
        }

        res.status(200).json({ success: true });
    } catch (err) {
        console.error('Send-booking API error:', err);
        res.status(500).json({ error: 'Failed to send message' });
    }
}
