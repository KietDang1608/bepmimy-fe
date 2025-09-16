import { NextResponse } from 'next/server';

interface Recipe {
  id: number;
  name: string;
  unit: string;
  unitAmount: number;
  price: number;
}

export async function GET() {
  try {
    const response = await fetch('https://bepmimy-be.onrender.com/recipes', {
      cache: 'no-store',
    });

    if (!response.ok) {
      return NextResponse.json(
        { error: 'Failed to fetch data from backend' },
        { status: response.status }
      );
    }

    const rawData = await response.json();

    // ép kiểu dữ liệu về Recipe[]
    const data: Recipe[] = (rawData as unknown[]).map((item) => ({
      id: Number((item as { id: unknown }).id),
      name: String((item as { name: unknown }).name),
      unit: String((item as { unit: unknown }).unit),
      unitAmount: Number((item as { unitAmount: unknown }).unitAmount),
      price: Number((item as { price: unknown }).price),
    }));

    return NextResponse.json(data);
  } // chỗ này: catch (error: any)
  catch (error: unknown) {
    console.error(error); // log ra để tránh "unused var"
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
