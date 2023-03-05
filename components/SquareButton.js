export default function SquareButton({ className, svg, text, func }) {
    return (
        <button onClick={func} className={className}>
            {svg}
            <p>{text}</p>
        </button>
    )
};