import {SEVEN_SEGMENTS_MAP} from '../default-maps';
import {segmentController} from '../segment-controller';

export function ClassicSlanted500({ char }) {
    const classes = segmentController(SEVEN_SEGMENTS_MAP, char);

    return (
        <svg className='character' viewBox="0.7200000286102295 594.25 134.09999084472656 240.3699951171875">
            <g xmlns="http://www.w3.org/2000/svg">
                <polygon className={classes[6]} points="102.47 699.46 33.07 699.46 18.45 713.36 33.07 727.27 102.47 727.27 117.09 713.36 102.47 699.46"></polygon>
                <polygon className={classes[4]} points=".72 730.23 .72 807.46 29.97 800.99 29.97 730.23 15.34 716.32 .72 730.23"></polygon>
                <path className={classes[1]} d="M105.57,623.49h0v73.01l14.62,13.91,14.62-13.91v-82.55c-7.66-7.66-12.04-12.04-19.7-19.7l-9.54,29.24Z"></path>
                <polygon className={classes[5]} points="15.34 710.41 29.97 696.5 29.97 628 .72 618.46 .72 696.5 15.34 710.41"></polygon>
                <path className={classes[2]} d="M120.2,716.32l-14.62,13.91v75.15h0l9.54,29.24h0l19.7-19.7v-84.69l-14.62-13.91Z"></path>
                <polygon className={classes[3]} points="101.07 805.38 29.97 805.38 .72 811.84 .72 811.84 23.5 834.62 110.61 834.62 101.07 805.38"></polygon>
                <path className={classes[0]} d="M29.97,623.49H101.07l9.54-29.24H20.43c-7.66,7.66-12.04,12.04-19.7,19.7l29.24,9.54Z"></path>
            </g>
        </svg>
    )
}