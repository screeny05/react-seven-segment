import {SHARP_SEGMENTS_MAP} from '../default-maps';
import {segmentController} from '../segment-controller';

export function SharpTraced300({ char }) {
    const classes = segmentController(SHARP_SEGMENTS_MAP, char);

    return (
        <svg className='character' viewBox="2488.189453125 987.34130859375 146.053955078125 239.5665283203125">
            <g xmlns="http://www.w3.org/2000/svg">
                <path className={classes[1]} d="M2631.59,1041.5c-6.54,14.75-20.65,34.9-20.65,34.9-4.85,6.7-17.83,24.93-29.48,31.74-1.9,1.11-4.97,3.26-7.27,1.6-1.45-1.04-3.21-3.52-2.09-4.85,13.88-16.46,20.07-23.8,25.93-35.42,6.5-12.9,12.55-26.38,17.82-45.76,2.48-9.12,3.35-19.2,5.9-19.34,10.25-.55,16.26,22.68,9.85,37.13Z"></path>
                <path className={classes[0]} d="M2525.87,1025.46c-4.44-.1-11.25-12.55-9.89-15.06,5.89-10.86,16.91-17.88,29.37-20.13,13.07-2.36,26.59-3.74,42.58-2.41,19.2,1.59,29.31,6.59,28.4,9.06-.67,1.82-3.41,5.02-5.42,4.48-4.15-1.11-8.63-3.35-23.23-3.95-17.53-.72-31.06,2.06-40.41,5.84-13.16,5.33-17.27,22.26-21.4,22.17Z"></path>
                <path className={classes[7]} d="M2564.66,1018.02c1.04,1.63,9.66-2.83,11.85-.02,.87,1.12,.31,2.86,.06,3.6-7.51,22.41-12.09,45.92-18.9,68.61-.45,1.5-1.4,4.85,.34,7.42,1.82,2.68,6.18,3.9,9.14,2.75,3.58-1.39,4.56-6.02,4.94-7.68,3.21-14.03,21.03-69.24,24.43-79,.54-1.56,1.8-5.07,.08-7.39-3-4.05-13.26-2.06-19.66,.74-7.82,3.42-13.23,9.51-12.29,10.97Z"></path>
                <path className={classes[6]} d="M2510.27,1022.89c.37-1.82,12.98,11.41,13.56,13.31,.71,2.35-6.79,35.96-6.85,49.7-.02,4.86,3.77,10.35,9.34,14.07,8.88,5.93,18.97,2.49,28.01,4.91,2.99,.8,4.63,5.54,1.72,7.94-1.77,1.46-8.86,1.75-18.17,1.37-15.22-.62-37.58-6.43-36.94-26.14,.62-19.18,4.85-43.18,9.33-65.16Z"></path>
                <path className={classes[2]} d="M2595.37,1105.52c3.84-.5,13.54,.05,16.2,1.13,2.05,.84,2.21,9.06,1.12,9.59-1.26,.6-12.59-.62-17.8-1.56-3.3-.6-4.44-3.35-3.91-5.87,.45-2.13,1.97-2.97,4.38-3.29Z"></path>
                <path className={classes[5]} d="M2543.89,1125.06c-11.61,5.51-40.54,42.75-47.24,56.7-.5,1.04,15.93,3.75,16.34,3.04,11.44-19.8,16.2-31.26,38.13-57.55,1.67-2-4.7-3.4-7.23-2.2Z"></path>
                <path className={classes[3]} d="M2569.97,1116.53c3.61-.43,27.11,6.99,37.43,21.42,9.57,13.38,5.41,46.36,3.57,49.05-.55,.81-15.7-1.66-15.48-2.45,2.75-10.12,6.59-30.17-.3-41.22-6.85-10.99-16.55-15.05-25.93-19.45-2.21-1.04-2.39-6.98,.72-7.34Z"></path>
                <path className={classes[8]} d="M2556.98,1129.35c-5.93,21.71-15.72,60.18-20.32,78.02-.45,1.75,18.79,1.83,18.95,.9,4.97-30.07,7.98-52.82,9.97-76.94,.29-3.45-8.14-3.66-8.6-1.97Z"></path>
                <path className={classes[4]} d="M2494.03,1188.87c3.41-.12,12.01,1.17,15.91,2.38,1.36,.42-8.17,14.83-2.28,20.65,4.58,4.53,49.75,7.02,68.26,2.76,8.28-1.9,12.5-14.13,16.94-23.01,.31-.61,16.24,2.43,15.89,3.22-5.24,11.67-11.99,25.98-25.79,29.04-22.1,4.9-57.06,3.09-80.07-.42-6.83-1.04-14.67-9.2-14.7-18.14-.03-7.71,4.27-16.44,5.85-16.49Z"></path>
            </g>
        </svg>
    )
}