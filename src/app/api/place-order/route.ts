import {projectId, dataset, token} from "@/sanity/env"
import { createClient } from "next-sanity";
import { NextResponse } from "next/server";

const client = createClient({
  projectId,
  dataset,
  token, // Add your token here
  useCdn: false,
});

export async function POST(req: Request) {
  try {
    const { orderDetails } = await req.json();

    if (!orderDetails) {
      return NextResponse.json({ message: 'Missing order details' }, { status: 400 });
    }

    const result = await client.create({
      _type: 'order',
      ...orderDetails,
    });

    return NextResponse.json({ message: 'Order saved successfully', result }, { status: 201 });
  } catch (error) {
    console.error('Error saving order:', error);
    return NextResponse.json({ message: 'Failed to save order', error }, { status: 500 });
  }
}
