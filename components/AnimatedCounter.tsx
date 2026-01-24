'use client';

import { useEffect, useRef, useState } from 'react';

export function AnimatedCounter({
    target,
    duration = 2000,
    suffix = ''
}: {
    target: number;
    duration?: number;
    suffix?: string;
}) {
    const [count, setCount] = useState(0);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    let start = 0;
                    const end = target;
                    const totalFrames = Math.round(duration / 16);
                    const increment = end / totalFrames;

                    let frame = 0;
                    const timer = setInterval(() => {
                        frame++;
                        const currentCount = Math.floor(increment * frame);

                        if (frame >= totalFrames) {
                            setCount(end);
                            clearInterval(timer);
                        } else {
                            setCount(currentCount);
                        }
                    }, 16);
                }
            },
            { threshold: 0.5 }
        );

        if (ref.current) observer.observe(ref.current);

        return () => observer.disconnect();
    }, [target, duration]);

    return (
        <div ref={ref} className="text-4xl font-black text-primary-600 tracking-tighter">
            {count}{suffix}
        </div>
    );
}
