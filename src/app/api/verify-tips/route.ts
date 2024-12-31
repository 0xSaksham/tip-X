import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { username } = await request.json();

    if (!username) {
      return NextResponse.json(
        { error: "Username is required" },
        { status: 400 }
      );
    }

    // Verify Twitter username
    const twitterResponse = await fetch(
      `https://api.twitter.com/2/users/by/username/${username}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.TWITTER_BEARER_TOKEN}`,
        },
      }
    );

    if (!twitterResponse.ok) {
      return NextResponse.json(
        { error: "Invalid Twitter username" },
        { status: 400 }
      );
    }

    // TODO: Add your database query here to check for tips
    const mockTipAmount = "0.05"; // Replace with actual database query

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
