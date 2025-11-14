// src/pages/NotificationsDisplay.tsx
import React from 'react'

export default function NotificationsDisplay() {
    const items = [
        { id: '1', sender: 'Tim Finansaku', message: 'Bayar internet Rp500.000 jatuh tempo hari ini', dateLabel: '04 Oktober 2025' },
        { id: '2', sender: 'Tim Finansaku', message: 'Bayar makan Rp 1.000.000 jatuh tempo hari ini', dateLabel: '03 Oktober 2025' },
    ]

    return (
    <div className="min-h-screen w-full text-white">
        <div className="mt-6 space-y-3" aria-label="Daftar notifikasi">
        {items.map((n) => (
            <div key={n.id} className="rounded-xl border border-white bg-white/5 px-4 py-3">
                <div className="flex items-center gap-3">
                    <AvatarPlaceholder />
                    <div className="flex-1">
                        <p className="text-xs leading-none text-white/70">{n.sender}</p>
                        <p className="mt-1 text-sm md:text-base">{n.message}</p>
                    </div>
                    <div className="ml-3 text-[11px] text-white/60">
                        {n.dateLabel}
                    </div>
                </div>
            </div>
        ))}
        </div>
    </div>
    )
}

function AvatarPlaceholder() {
    return (
    <div className="grid h-9 w-9 place-items-center rounded-full bg-white/10 ring-1 ring-white/10">
        <svg viewBox="0 0 24 24" className="h-4 w-4 text-white/80" aria-hidden="true">
            <path fill="currentColor" d="M12 12a5 5 0 1 0-5-5a5 5 0 0 0 5 5Zm0 2c-4.42 0-8 2.24-8 5v1h16v-1c0-2.76-3.58-5-8-5Z"/> </svg>
        <span className="sr-only">Avatar</span>
    </div>
    )
}
