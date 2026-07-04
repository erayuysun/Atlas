import { NextResponse } from 'next/server';
import crypto from 'crypto';

const PINS_KEY = 'atlas:pins';

function getRedis() {
  const url = process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.UPSTASH_REDIS_REST_TOKEN;
  if (!url || !token) return null;
  const { Redis } = require('@upstash/redis');
  return new Redis({ url, token });
}

const readPins = async (): Promise<unknown[]> => {
  const redis = getRedis();
  if (!redis) return [];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const pins = await (redis as any).get(PINS_KEY);
  return (pins as unknown[]) ?? [];
};

const writePins = async (pins: unknown[]) => {
  const redis = getRedis();
  if (!redis) return;
  await redis.set(PINS_KEY, pins);
};

const validateToken = (req: Request) => {
  const authHeader = req.headers.get('authorization');
  if (!authHeader?.startsWith('Bearer ')) return false;
  const token = authHeader.slice(7);
  const adminPassword = process.env.ADMIN_PASSWORD!;
  const secret = process.env.AUTH_SECRET!;
  const expected = crypto.createHmac('sha256', secret).update(adminPassword).digest('hex');
  return token === expected;
};

export async function GET() {
  const pins = await readPins();
  return NextResponse.json(pins);
}

export async function POST(req: Request) {
  if (!validateToken(req)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  const pin = await req.json();
  const pins = await readPins();
  const newPin = { ...pin, id: Date.now() };
  (pins as object[]).push(newPin);
  await writePins(pins);
  return NextResponse.json(newPin);
}

export async function DELETE(req: Request) {
  if (!validateToken(req)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  const { id } = await req.json();
  const pins = (await readPins()).filter((p: unknown) => (p as { id: number }).id !== id);
  await writePins(pins);
  return NextResponse.json({ success: true });
}
