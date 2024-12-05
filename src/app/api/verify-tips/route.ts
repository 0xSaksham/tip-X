import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { username } = await request.json();

    // TODO: Add your database query here to check for tips
    // This is a mock response
    const mockTipAmount = "0.05"; // Replace with actual database query

    if (!username) {
      return NextResponse.json(
        { error: "Username is required" },
        { status: 400 }
      );
    }

    return NextResponse.json(
      {
        tipAmount: mockTipAmount,
        username,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error verifying tips:", error);
    return NextResponse.json(
      { error: "Failed to verify tips" },
      { status: 500 }
    );
  }
}
