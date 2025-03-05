import { cn } from "@/app/lib/utils"

export function AnimatedUnderline({ className }: { className?: string }) {
    return (
        <div className={cn("relative overflow-hidden", className)}>
            <div className="absolute bottom-0 left-0 h-[2px] w-full bg-emerald-600 origin-left transform scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100" />
        </div>
    )
}
