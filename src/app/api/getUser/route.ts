import { getServerSession } from "next-auth";
import { authOptions } from "../../../../lib/authOptions";
import { NextResponse } from "next/server";


export async function GET() {
    const session = await getServerSession()
    if (!session) {
        return NextResponse.json({ message: "Not Authorized" }, { status: 400 })
    }
    return NextResponse.json({ success: session }, { status: 200 })

}