import type { NextApiRequest, NextApiResponse } from 'next';
import { sendTelegramMessage } from '../../src/lib/telegram';

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

    const result = await sendTelegramMessage(telegramMessage);

    if (!result.success) {
        return res.status(500).json({ error: result.error });
    }

    res.status(200).json({ success: true });
}
