import { db } from '@/lib/prismadb';
import { NextResponse } from 'next/server';

export async function DELETE(
  req: Request,
  { params }: { params: { productId: string; storeId: string } }
) {
  try {
    if (!params.productId) {
      return new NextResponse('Product id is required', { status: 400 });
    }

    const product = await db.item.delete({
      where: {
        id: Number(params.productId),
      },
    });

    return NextResponse.json(product);
  } catch (error) {
    console.log('[PRODUCT_DELETE]', error);
    return new NextResponse('Internal error', { status: 500 });
  }
}
