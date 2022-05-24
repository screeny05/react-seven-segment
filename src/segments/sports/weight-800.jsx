import {SEVEN_SEGMENTS_MAP} from '../default-maps';
import {segmentController} from '../segment-controller';

export function Sports800({ char }){
    const classes = segmentController(SEVEN_SEGMENTS_MAP, char);

    return (
        <svg className='character' viewBox="504.6600646972656 186.94000244140625 134.10000610351562 240.3699951171875">
            <g xmlns="http://www.w3.org/2000/svg">
                <path className={classes[0]} d="M543.9,248.62v-15.64c0-3.76,3.05-6.81,6.81-6.81h42.01c2.02,0,3.83,.88,5.07,2.28l17.36-37.48c-5.38-2.58-11.4-4.03-17.74-4.03h-51.4c-22.74,0-41.34,18.6-41.34,41.34v5.06l39.23,15.28Z"></path>
                <path className={classes[1]} d="M599.13,230.67c.26,.72,.41,1.49,.41,2.31v49.18c1.36,.36,2.72,.76,4.05,1.24,3.53,1.25,6.91,2.89,10.09,4.85,3.18,1.96,6.12,4.22,8.89,6.67,1.6,1.42,3.13,2.94,4.58,4.52,2.77-3.29,5.16-6.9,7.01-10.79,3.09-6.48,4.61-13.67,4.6-20.84v-39.53c0-15.64-8.8-29.32-21.7-36.34l-17.94,38.73Z"></path>
                <path className={classes[2]} d="M627.15,302.68c-1.45,1.59-2.98,3.1-4.58,4.52-2.77,2.45-5.71,4.72-8.89,6.67-3.17,1.96-6.56,3.6-10.09,4.85-1.34,.48-2.69,.88-4.05,1.24v61.3c0,.73-.12,1.43-.33,2.08l17.79,38.99c12.93-7.01,21.76-20.71,21.76-36.38v-51.65c0-7.17-1.51-14.36-4.6-20.84-1.85-3.89-4.24-7.5-7.01-10.79Z"></path>
                <path className={classes[3]} d="M597.92,385.67c-1.25,1.47-3.11,2.41-5.19,2.41h-42.01c-3.76,0-6.81-3.05-6.81-6.81v-15.64l-39.23,15.28v5.06c0,22.74,18.6,41.34,41.34,41.34h51.4c6.31,0,12.31-1.44,17.67-4l-17.18-37.64Z"></path>
                <path className={classes[4]} d="M529.76,313.87c-3.18-1.96-6.12-4.22-8.89-6.67-1.6-1.42-3.13-2.94-4.58-4.52-2.77,3.29-5.16,6.9-7.01,10.79-3.09,6.48-4.61,13.67-4.6,20.84h0v44.3l39.23-15.28v-43.37c-1.36-.36-2.72-.76-4.05-1.24-3.53-1.25-6.91-2.89-10.09-4.85Z"></path>
                <path className={classes[5]} d="M504.67,267.81h0c0,7.17,1.51,14.36,4.6,20.84,1.85,3.89,4.24,7.5,7.01,10.79,1.45-1.59,2.98-3.1,4.58-4.52,2.77-2.45,5.71-4.72,8.89-6.67,3.17-1.96,6.56-3.6,10.09-4.85,1.34-.48,2.69-.88,4.05-1.24v-31.24l-39.23-15.28v32.18Z"></path>
                <path className={classes[6]} d="M612.55,312.05c3.06-1.88,5.91-4.07,8.59-6.45,1.61-1.43,3.14-2.95,4.58-4.54-1.45-1.59-2.97-3.12-4.58-4.54-2.68-2.38-5.54-4.57-8.59-6.45-3.05-1.88-6.3-3.45-9.68-4.65-6.77-2.43-14.01-3.25-21.16-3.25h-19.99c-7.16,0-14.39,.83-21.16,3.25-3.38,1.2-6.62,2.77-9.68,4.65-3.06,1.88-5.91,4.07-8.59,6.45-1.61,1.43-3.14,2.95-4.58,4.54,1.45,1.59,2.97,3.12,4.58,4.54,2.68,2.38,5.54,4.57,8.59,6.45,3.05,1.88,6.3,3.45,9.68,4.65,6.77,2.43,14.01,3.25,21.16,3.25h19.99c7.16,0,14.39-.83,21.16-3.25,3.38-1.2,6.62-2.77,9.68-4.65Z"></path>
            </g>
        </svg>
    )
}