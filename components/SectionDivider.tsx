'use client';

export default function SectionDivider() {
    return (
        <div className="w-full h-px bg-charcoal-600 relative overflow-hidden">
            {/* Metalic Highlight - Center Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-charcoal-400/30 to-transparent" />
        </div>
    );
}
