import { type NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { username, email, password, telegramUsername } =
      await request.json();

    if (!username || !email || !password) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 },
      );
    }

    if (password.length < 6) {
      return NextResponse.json(
        { error: 'Password must be at least 6 characters' },
        { status: 400 },
      );
    }

    // For preview mode, simulate successful registration
    console.log('New user registration:', {
      username,
      email,
      telegramUsername,
      timestamp: new Date().toISOString(),
    });

    // Simulate Telegram notification
    if (process.env.TELEGRAM_BOT_TOKEN && process.env.TELEGRAM_CHAT_ID) {
      const message = `🎉 New User Registration!

👤 Username: ${username}
📧 Email: ${email}
📱 Telegram: ${telegramUsername || 'Not provided'}
🕐 Time: ${new Date().toLocaleString()}

Welcome to SarthCloudX! 🚀`;

      try {
        const telegramResponse = await fetch(
          `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              chat_id: process.env.TELEGRAM_CHAT_ID,
              text: message, // This should be plain text, not encoded
              parse_mode: 'HTML',
            }),
          },
        );

        if (telegramResponse.ok) {
          console.log('Telegram notification sent successfully');
        } else {
          console.log('Failed to send Telegram notification');
        }
      } catch (telegramError) {
        console.error('Telegram notification error:', telegramError);
      }
    }

    return NextResponse.json(
      {
        message: 'User created successfully',
        userId: `user_${Date.now()}`,
      },
      { status: 201 },
    );
  } catch (error) {
    console.error('Registration error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 },
    );
  }
}
