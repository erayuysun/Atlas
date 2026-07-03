import { NextResponse } from 'next/server';
import crypto from 'crypto';

export async function POST(req: Request) {
  const { password } = await req.json();
  const adminPassword = process.env.ADMIN_PASSWORD || 'atlas-admin-2025';
  const secret = process.env.AUTH_SECRET || 'atlas-map-secret-key-change-me';

  if (password !== adminPassword) {
    return NextResponse.json({ error: 'Invalid password' }, { status: 401 });
  }

  // Token = HMAC(password, secret) — can be validated server-side without a session store
  const token = crypto.createHmac('sha256', secret).update(password).digest('hex');
  return NextResponse.json({ token });
}
