import type { MouseEventHandler, ReactNode } from "react";

type tooltipProps = {
    tooltipText: string,
    duration: string,
    link?: string,
    onClick?: MouseEventHandler<HTMLButtonElement>;
    children: ReactNode,
    scale:boolean,

};

function TooltipWidget({tooltipText, duration, link, onClick, children, scale}: tooltipProps) {
    if (link && onClick) {
        return <h3>Hanya Masukkan salah satu dari link atau onClick.</h3>
    }
    return (
    <div className="relative group">
        {link ?
            <a href={link} target="_blank" rel="noopener noreferer" className={`${scale ? "hover:scale-110" : ""} duration-[800ms] ease-out inline-block`}>
                {children}
            </a>:
            <button className={`${scale ? "hover:scale-110" : ""} duration-[800ms] ease-out`} onClick={onClick}>
                {children}
            </button>
        }

        <div className={`absolute bottom-full left-1/2 -translate-x-1/2 mb-2
                    opacity-0 group-hover:opacity-100 pointer-events-none
                    bg-[#d1d1d1] text-[#2c2c2c] font-jetbrainsmono text-sm px-3 py-1 rounded shadow-md
                    whitespace-nowrap z-50
                    transition-opacity ${duration} ease-in-out`}>
            {tooltipText}
        </div>
    </div>
    );
}

export default TooltipWidget;