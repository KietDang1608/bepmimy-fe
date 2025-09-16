import { NextRequest, NextResponse } from 'next/server';

const BASE_URL = 'https://bepmimy-be.onrender.com';

export async function GET() {
  try {
    const res = await fetch(`${BASE_URL}/recipes`, { cache: 'no-store' });
    if (!res.ok) {
      return NextResponse.json({ error: 'Failed to fetch data' }, { status: res.status });
    }
    const data = await res.json();
    return NextResponse.json(data);
  } catch (err) {
    console.error('GET error:', err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const { ingredients } = await req.json();

    const res = await fetch(`${BASE_URL}/ingredient-cost`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ingredients }),
    });

    if (!res.ok) {
      return NextResponse.json({ error: 'Failed to fetch data' }, { status: res.status });
    }

    const data = await res.json();
    return NextResponse.json(data);
  } catch (err) {
    console.error('POST error:', err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
