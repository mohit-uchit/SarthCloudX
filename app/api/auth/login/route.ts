import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json()

    if (!email || !password) {
      return NextResponse.json({ error: "Missing email or password" }, { status: 400 })
    }

    // Check admin credentials from environment
    const adminEmail = process.env.ADMIN_EMAIL || process.env.NEXT_PUBLIC_ADMIN_EMAIL || "admin@sarthcloudx.com"
    const adminPassword = process.env.ADMIN_PASSWORD || process.env.NEXT_PUBLIC_ADMIN_PASSWORD || "admin123"

    if (email === adminEmail && password === adminPassword) {
      const userData = {
        email: adminEmail,
        role: "admin",
        username: "Admin",
      }

      return NextResponse.json({
        token: `admin_token_${Date.now()}`,
        user: userData,
      })
    }

    // For preview mode, allow any valid email/password combination for regular users
    if (email.includes("@") && password.length >= 6) {
      const userData = {
        email: email,
        role: "user",
        username: email.split("@")[0],
      }

      return NextResponse.json({
        token: `user_token_${Date.now()}`,
        user: userData,
      })
    }

    return NextResponse.json({ error: "Invalid credentials" }, { status: 401 })
  } catch (error) {
    console.error("Login error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
