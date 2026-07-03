import { NextResponse } from 'next/server';
import crypto from 'crypto';
import fs from 'fs';
import path from 'path';

const pinsFile = path.join(process.cwd(), 'data', 'pins.json');

const readPins = () => {
  try {
    return JSON.parse(fs.readFileSync(pinsFile, 'utf-8'));
  } catch {
    return [];
  }
};

const writePins = (pins: unknown[]) => {
  fs.mkdirSync(path.dirname(pinsFile), { recursive: true });
  fs.writeFileSync(pinsFile, JSON.stringify(pins, null, 2));
};

const validateToken = (req: Request) => {
  const authHeader = req.headers.get('authorization');
  if (!authHeader?.startsWith('Bearer ')) return false;
  const token = authHeader.slice(7);
  const adminPassword = process.env.ADMIN_PASSWORD || 'atlas-admin-2025';
  const secret = process.env.AUTH_SECRET || 'atlas-map-secret-key-change-me';
  const expected = crypto.createHmac('sha256', secret).update(adminPassword).digest('hex');
  return token === expected;
};

export async function GET() {
  return NextResponse.json(readPins());
}

export async function POST(req: Request) {
  if (!validateToken(req)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  const pin = await req.json();
  const pins = readPins();
  const newPin = { ...pin, id: Date.now() };
  pins.push(newPin);
  writePins(pins);
  return NextResponse.json(newPin);
}

export async function DELETE(req: Request) {
  if (!validateToken(req)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  const { id } = await req.json();
  const pins = readPins().filter((p: { id: number }) => p.id !== id);
  writePins(pins);
  return NextResponse.json({ success: true });
}
