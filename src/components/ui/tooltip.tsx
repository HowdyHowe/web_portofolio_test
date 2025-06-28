import type { ReactNode } from "react";

type tooltipProps = {
    tooltipText: string,
    duration: string
    link: string
    children: ReactNode,

};

function TooltipWidget({tooltipText, duration, link, children}: tooltipProps) {
    return (
    <div className="relative group">
        <button className="hover:scale-105 duration-200 ease-out">
            <a href={link} target="_blank" rel="noopener noreferer">
                {children}
            </a>
        </button>

        <div className={`absolute bottom-full left-1/2 -translate-x-1/2 mb-2
                    opacity-0 group-hover:opacity-100 pointer-events-none
                    bg-[#2c2c2c] text-white text-sm px-3 py-1 rounded shadow-md
                    whitespace-nowrap z-10
                    transition-opacity ${duration} ease-in-out`}>
            {tooltipText}
        </div>
    </div>
    );
}

export default TooltipWidget;