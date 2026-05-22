export interface TelegramConfig {
  token: string;
  chatId: string;
}

export function getTelegramConfig(): TelegramConfig {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const groupId = process.env.TELEGRAM_GROUP_ID;
  const chatId = process.env.TELEGRAM_CHAT_ID;
  
  // Default/fallback chat ID if neither GROUP_ID nor CHAT_ID is configured
  const targetChatId = (groupId || chatId || '-1003502873196').trim();

  return {
    token: (token || '').trim(),
    chatId: targetChatId,
  };
}

export async function sendTelegramMessage(text: string): Promise<{ success: boolean; error?: string }> {
  const { token, chatId } = getTelegramConfig();

  if (!token) {
    console.error('Telegram Bot Token is missing or empty.');
    return { 
      success: false, 
      error: 'Telegram configuration is missing on the server (Bot Token is not set).' 
    };
  }

  try {
    const response = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: text,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Telegram API error response:', errorText, 'chat_id:', chatId);
      return { 
        success: false, 
        error: `Telegram API error: ${response.status} ${response.statusText} - ${errorText}` 
      };
    }

    return { success: true };
  } catch (error) {
    console.error('Error sending Telegram message:', error);
    return { 
      success: false, 
      error: error instanceof Error ? error.message : String(error) 
    };
  }
}
