import {SEVEN_SEGMENTS_MAP} from '../default-maps';
import {segmentController} from '../segment-controller';

export function Default500({ char }) {
    const classes = segmentController(SEVEN_SEGMENTS_MAP, char);

    return (
        <svg className='character' viewBox="1476.1298828125 594.25 134.10009765625 240.3699951171875">
            <g xmlns="http://www.w3.org/2000/svg">
                <path className={classes[1]} d="M1575.27,629.21v60.72c.44,.1,.88,.2,1.3,.31,1.6,.42,3.08,.97,4.52,1.59,2.87,1.23,5.53,2.73,8.05,4.4,4.52,3.03,8.58,6.66,12.11,10.78,2.51-3.59,4.6-7.48,6.08-11.61,.95-2.63,1.68-5.34,2.17-8.09,.46-2.76,.69-5.55,.72-8.34v-50.19c0-15.42-10.25-28.57-24.27-32.97l-10.68,33.4Z"></path>
                <path className={classes[6]} d="M1579.42,725.25c2.57-1.1,5.02-2.47,7.35-4.02,4.43-2.97,8.43-6.6,11.83-10.71-3.4-4.12-7.4-7.74-11.83-10.71-2.33-1.55-4.78-2.92-7.35-4.02-1.29-.55-2.6-1.03-3.95-1.39-1.34-.36-2.72-.63-4.12-.64h-56.34c-1.4,0-2.78,.28-4.12,.64-1.35,.35-2.67,.84-3.95,1.39-2.57,1.1-5.02,2.47-7.35,4.02-4.43,2.97-8.43,6.6-11.83,10.71,3.4,4.12,7.4,7.74,11.83,10.71,2.33,1.55,4.78,2.92,7.35,4.02,1.29,.55,2.6,1.03,3.95,1.39,1.34,.36,2.72,.63,4.12,.64h56.34c1.4,0,2.78-.28,4.12-.64,1.35-.35,2.67-.84,3.95-1.39Z"></path>
                <path className={classes[5]} d="M1476.13,628.78v50.22c.03,2.78,.26,5.56,.72,8.31,.49,2.75,1.22,5.46,2.17,8.09,1.48,4.13,3.57,8.02,6.08,11.61,3.53-4.12,7.59-7.75,12.11-10.78,2.52-1.68,5.18-3.17,8.05-4.4,1.44-.61,2.92-1.16,4.52-1.59,.43-.11,.86-.22,1.3-.32v-55.79l-32.19-18.84c-1.77,4.15-2.76,8.7-2.76,13.48Z"></path>
                <path className={classes[3]} d="M1570.78,799.67h-59.7l-34.05,8.18c3.55,15.29,17.31,26.77,33.64,26.77h65.03c2.08,0,4.11-.2,6.09-.55l-11-34.4Z"></path>
                <path className={classes[2]} d="M1609.51,733.71c-.49-2.75-1.22-5.46-2.17-8.09-1.48-4.13-3.57-8.02-6.08-11.61-3.53,4.12-7.59,7.75-12.11,10.78-2.52,1.68-5.18,3.17-8.05,4.4-1.44,.61-2.92,1.16-4.52,1.59-.43,.11-.86,.22-1.3,.31v68.58h0l10.67,33.38c14.03-4.4,24.28-17.54,24.28-32.97v-58.04c-.03-2.79-.26-5.58-.72-8.34Z"></path>
                <path className={classes[0]} d="M1511.1,629.2h59.68l11-34.4c-1.98-.36-4.01-.55-6.09-.55h-65.03c-12.7,0-23.84,6.95-29.84,17.23l30.28,17.72Z"></path>
                <path className={classes[4]} d="M1511.08,731.09c-.44-.1-.88-.2-1.3-.32-1.6-.42-3.08-.97-4.52-1.59-2.87-1.23-5.53-2.73-8.05-4.4-4.52-3.03-8.58-6.66-12.11-10.78-2.51,3.59-4.6,7.48-6.08,11.61-.95,2.63-1.68,5.34-2.17,8.09-.46,2.75-.69,5.53-.72,8.31v58.07c0,1.19,.06,2.37,.18,3.53l34.77-8.35v-64.18Z"></path>
            </g>
        </svg>
    )
}