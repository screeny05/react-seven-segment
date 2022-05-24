import {X_SEVEN_SEGMENTS_MAP} from '../default-maps';
import {segmentController} from '../segment-controller';

export function XSeven500({ char }) {
    const classes = segmentController(X_SEVEN_SEGMENTS_MAP, char);

    return (
        <svg className='character' viewBox="2350.959716796875 1377.1199951171875 134.090576171875 240.3699951171875">
            <g xmlns="http://www.w3.org/2000/svg">
                <path className={classes[4]} d="M2389.43,1501.31l-38.47,45.65v32.02c0,7.13,1.94,13.8,5.32,19.52l57.53-68.26-24.38-28.93Z"></path>
                <path className={classes[5]} d="M2350.96,1415.63v30.08l38.47,45.65,24.38-28.93-56.84-67.44c-3.8,5.97-6.01,13.05-6.01,20.65Z"></path>
                <polygon className={classes[6]} points="2442.39 1496.33 2418.01 1467.4 2393.63 1496.33 2418.01 1525.26 2442.39 1496.33"></polygon>
                <path className={classes[1]} d="M2446.58,1491.35l38.47-45.65v-30.08c0-7.6-2.21-14.68-6.01-20.65l-56.84,67.44,24.38,28.93Z"></path>
                <path className={classes[2]} d="M2485.05,1578.98v-32.02l-38.47-45.65-24.38,28.93,57.53,68.26c3.38-5.73,5.32-12.4,5.32-19.53Z"></path>
                <path className={classes[3]} d="M2446.24,1568.73v2.63c0,6.5-5.27,11.78-11.78,11.78h-32.92c-6.5,0-11.78-5.27-11.78-11.78v-2.63l-29.64,35.17c7.06,8.31,17.59,13.59,29.34,13.59h57.07c11.76,0,22.28-5.28,29.34-13.58l-29.64-35.17Z"></path>
                <path className={classes[0]} d="M2389.77,1423.94c.05-6.46,5.3-11.68,11.77-11.68h32.92c6.47,0,11.72,5.22,11.77,11.68l28.82-34.19c-7.04-7.76-17.21-12.63-28.51-12.63h-57.07c-11.3,0-21.47,4.87-28.51,12.63l28.82,34.19Z"></path>
            </g>
        </svg>
    )
}