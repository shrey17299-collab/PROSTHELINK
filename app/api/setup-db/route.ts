export const runtime = "nodejs";

import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

/**
 * One-time DB initializer.
 * It forces Prisma to connect and ensures the schema is applied by touching the DB.
 * (Prisma tables are created by Prisma migration/db push locally; here we just verify connectivity.)
 */
export async function GET() {
  try {
    // simple connectivity check
    await prisma.user.findFirst();
    return NextResponse.json({ ok: true, message: "DB connected. If tables exist, you're good." });
  } catch (e: any) {
    return NextResponse.json(
      { ok: false, error: String(e?.message || e) },
      { status: 500 }
    );
  }
}
