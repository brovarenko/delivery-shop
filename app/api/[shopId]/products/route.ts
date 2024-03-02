import { NextResponse } from 'next/server';

import { db } from '@/lib/prismadb';

export async function POST(
  req: Request,
  { params }: { params: { shopId: string } }
) {
  try {
    const body = await req.json();

    const { name, price, image } = body;

    if (!name) {
      return new NextResponse('Name is required', { status: 400 });
    }

    if (!image) {
      return new NextResponse('Images are required', { status: 400 });
    }

    if (!price) {
      return new NextResponse('Price is required', { status: 400 });
    }

    if (!params.shopId) {
      return new NextResponse('Store id is required', { status: 400 });
    }

    const storeByUserId = await db.shop.findFirst({
      where: {
        id: Number(params.shopId),
      },
    });

    if (!storeByUserId) {
      return new NextResponse('Unauthorized', { status: 405 });
    }

    const product = await db.item.create({
      data: {
        name,
        price,
        shopId: Number(params.shopId),
        image: image,
      },
    });

    return NextResponse.json(product);
  } catch (error) {
    console.log(error);
    return new NextResponse('Internal error', { status: 500 });
  }
}

export async function GET(
  req: Request,
  { params }: { params: { shopId: string } }
) {
  try {
    if (!params.shopId) {
      return new NextResponse('Shop id is required', { status: 400 });
    }

    const products = await db.item.findMany({
      where: {
        shopId: Number(params.shopId),
      },
    });

    return NextResponse.json(products);
  } catch (error) {
    console.log(error);
    return new NextResponse('Internal error', { status: 500 });
  }
}
