// src/app/api/artists/route.ts
import { NextRequest, NextResponse } from "next/server";

const artists: {
  name: string;
  category: string;
  location: string;
  feeRange: string;
}[] = [];

export async function GET() {
  return NextResponse.json(artists);
}

export async function POST(req: NextRequest) {
  const data = await req.json();
  artists.push(data);
  return NextResponse.json({ message: "Submitted successfully", artist: data });
}
