import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { walletAddress } = await request.json();

    if (!walletAddress || !/^0x[0-9a-fA-F]{40}$/.test(walletAddress)) {
      return NextResponse.json(
        { error: "Invalid Ethereum wallet address" },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { message: "Tips claimed successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing claim:", error);
    return NextResponse.json(
      { error: "Failed to process claim" },
      { status: 500 }
    );
  }
}
