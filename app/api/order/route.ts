import { db } from '@/lib/prismadb';
import { CartItem } from '@/types';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { customerInfo, cartItems } = body;

    if (!customerInfo.email) {
      return new NextResponse('Email info is required', { status: 400 });
    }

    const order = await db.order.create({
      data: {
        email: customerInfo.email,
        phone: customerInfo.phone,
        address: customerInfo.phone,
        cartItems: {
          create: cartItems.map((cartItem: CartItem) => ({
            quantity: cartItem.quantity,
            itemId: cartItem.id,
          })),
        },
      },
    });

    return NextResponse.json(order);
  } catch (error) {
    console.log(error);
    return new NextResponse('Internal error', { status: 500 });
  }
}

export async function GET(req: Request) {
  try {
    const orders = await db.order.findMany({
      include: {
        cartItems: {},
      },
    });

    return NextResponse.json(orders);
  } catch (error) {
    console.log(error);
    return new NextResponse('Internal error', { status: 500 });
  }
}
