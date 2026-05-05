import type { NextApiRequest, NextApiResponse } from 'next';

const TELEGRAM_TOKEN = process.env.TELEGRAM_BOT_TOKEN!;
const GROUP_ID = process.env.TELEGRAM_GROUP_ID || '-1003922476267';
const CHAT_ID = process.env.TELEGRAM_CHAT_ID;
const TARGET_CHAT_ID = GROUP_ID || CHAT_ID;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'POST') {
        return res.status(405).end('Method Not Allowed');
    }

    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ error: 'Missing fields' });
    }

    const telegramMessage = `
📩 New Contact Form Submission:
👤 Name: ${name}
📧 Email: ${email}
📝 Message: ${message}
  `;

    try {
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
            throw new Error('Failed to send Telegram message');
        }

        res.status(200).json({ success: true });
    } catch {
        res.status(500).json({ error: 'Failed to send message' });
    }
}
