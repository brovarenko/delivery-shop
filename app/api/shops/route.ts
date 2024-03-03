import { NextResponse } from 'next/server';

import { db } from '@/lib/prismadb';

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { name } = body;

    if (!name) {
      return new NextResponse('Name is required', { status: 400 });
    }

    const shop = await db.shop.create({
      data: {
        name,
      },
    });

    return NextResponse.json(shop);
  } catch (error) {
    console.log(error);
    return new NextResponse('Internal error', { status: 500 });
  }
}

export async function GET(req: Request) {
  try {
    const shops = await db.shop.findMany({});

    return NextResponse.json(shops);
  } catch (error) {
    console.log(error);
    return new NextResponse('Internal error', { status: 500 });
  }
}
