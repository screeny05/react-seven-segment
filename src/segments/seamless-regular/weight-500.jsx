import {SEVEN_SEGMENTS_MAP} from '../default-maps';
import {segmentController} from '../segment-controller';

export function SeamlessRegular500({ char }){
    const classes = segmentController(SEVEN_SEGMENTS_MAP, char);

    return (
        <svg className="character" viewBox="2616.419921875 186.9300079345703 134.090087890625 240.37998962402344">
            <g xmlns="http://www.w3.org/2000/svg">
                <polygon className={classes[4]} points="2616.42 305.15 2616.42 351.76 2659.4 366.08 2659.4 322.15 2659.4 319.48 2616.42 305.15"></polygon>
                <polygon className={classes[6]} points="2663.68 273.42 2663.68 316.39 2703.26 329.59 2703.26 286.62 2663.68 273.42"></polygon>
                <path className={classes[5]} d="M2616.42,221.47v79.17l42.97,14.32h0v-80.55l-42.94-14.31c-.02,.45-.03,.91-.03,1.36Z"></path>
                <path className={classes[1]} d="M2738.03,194.95l-30.49,34.96v53.62l42.97,14.32v-76.38c0-10.63-4.87-20.17-12.48-26.52Z"></path>
                <path className={classes[2]} d="M2707.54,288.04h0v139.26h8.44c18.99,0,34.53-15.54,34.53-34.53v-90.41l-42.97-14.32Z"></path>
                <path className={classes[3]} d="M2703.26,384.33h-43.87v-13.74l-42.97-14.32v36.51c0,18.99,15.54,34.53,34.53,34.53h52.31v-42.97Z"></path>
                <path className={classes[0]} d="M2659.4,229.91h43.89l-.81-.71,32.09-36.79c-5.38-3.46-11.76-5.48-18.59-5.48h-65.03c-17.04,0-31.3,12.52-34.05,28.81l42.49,14.16Z"></path>
            </g>
        </svg>
    )
}