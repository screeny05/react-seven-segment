import { StyleSelector } from "./style-selector";

export function Line({ text, style, weight, minChars = 0 }) {
    const chars = text.split('');
    const charCount = Math.max(chars.length, minChars);
    
    return (
        <div className="segment-line">
            {new Array(charCount).fill(null).map((_, i) => (
                <StyleSelector key={i} char={chars[i] ?? ''} style={style} weight={weight}/>
            ))}
        </div>
    )
}