import {SEVEN_SEGMENTS_MAP} from '../default-maps';
import {segmentController} from '../segment-controller';

export function Classic500({ char }) {
    const classes = segmentController(SEVEN_SEGMENTS_MAP, char);

    return (
        <svg className='character' viewBox="173.3800048828125 594.239990234375 134.10000610351562 240.3800048828125">
            <g xmlns="http://www.w3.org/2000/svg">
                <path className={classes[1]} d="M307.48,613.95c-3.19-3.19-5.81-5.81-8.34-8.34l-20.9,20.9v69.98l14.62,13.91,14.62-13.91v-82.55Z"></path>
                <polygon className={classes[6]} points="275.13 699.46 205.73 699.46 191.11 713.36 205.73 727.27 275.13 727.27 289.75 713.36 275.13 699.46"></polygon>
                <path className={classes[5]} d="M202.63,626.52l-20.9-20.9c-2.53,2.53-5.15,5.15-8.34,8.34v82.55l14.62,13.91,14.62-13.91v-69.98Z"></path>
                <polygon className={classes[4]} points="202.63 802.35 202.63 730.23 188 716.32 173.38 730.23 173.38 811.84 183.26 821.72 202.63 802.35"></polygon>
                <path className={classes[3]} d="M275.21,805.38h-69.55l-19.37,19.37,9.87,9.87h91.61c3.19-3.19,5.81-5.81,8.34-8.34l-20.91-20.9Z"></path>
                <path className={classes[2]} d="M292.85,716.32l-14.62,13.91v72.12l20.91,20.9c2.53-2.53,5.15-5.15,8.34-8.34v-84.69l-14.62-13.91Z"></path>
                <path className={classes[0]} d="M205.65,623.49h69.55l20.91-20.91c-2.53-2.53-5.15-5.15-8.34-8.34h-94.69c-3.19,3.19-5.81,5.81-8.34,8.34l20.9,20.9Z"></path>
            </g>
        </svg>
    )
}