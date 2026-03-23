import { NextResponse } from "next/server";

const API_BASE = process.env.BACKEND_URL ?? "http://127.0.0.1:8000";

export async function POST(request: Request) {
    const payload = await request.json();

    const response = await fetch(`${API_BASE}/api/v1/users/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
    });

    const data = await response.json().catch(() => ({}));

    if (!response.ok) {
        return NextResponse.json({ detail: data?.detail ?? "Ошибка регистрации" }, { status: response.status });
    }

    return NextResponse.json(data, { status: 201 });
}
