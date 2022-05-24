import {SEVEN_SEGMENTS_MAP} from '../default-maps';
import {segmentController} from '../segment-controller';

export function SeamlessRound500({ char }) {
    const classes = segmentController(SEVEN_SEGMENTS_MAP, char);

    return (
        <svg className='character' viewBox="3261.2998046875 186.94000244140625 134.10009765625 240.3699951171875">
            <g xmlns="http://www.w3.org/2000/svg">
                <polygon className={classes[6]} points="3308.56 273.42 3308.56 318.53 3348.15 331.73 3348.15 286.62 3308.56 273.42"></polygon>
                <path className={classes[1]} d="M3352.39,241.96c0,.21,.03,.41,.03,.62v40.53c19.21,6.36,35.55,15.89,42.97,32.46v-81.43c0-12.73-5.12-24.32-13.39-32.84l-29.62,40.66Z"></path>
                <path className={classes[4]} d="M3276.89,307.97c-7.63-5.19-12.55-11.95-15.59-19.57v65.58l42.97,14.32v-47.18c-9.16-3.76-19.01-7.33-27.39-13.15Z"></path>
                <path className={classes[3]} d="M3350.4,378.52c-2.25,3.49-6.17,5.81-10.64,5.81h-22.82c-6.6,0-12.01-5.05-12.6-11.49l-43.03-14.34v21.61c0,25.96,21.24,47.2,47.2,47.2h39.7c11.26,0,21.63-4,29.76-10.64l-27.56-38.14Z"></path>
                <path className={classes[5]} d="M3261.31,234.13v30.4c.12,4.98,.58,9.96,1.65,14.83,4.84,22.81,22.22,29.51,41.32,37.17v-73.95c0-.4,.02-.79,.06-1.17l-42.52-14.17c-.33,2.26-.51,4.56-.51,6.9Z"></path>
                <path className={classes[2]} d="M3352.43,287.65v84.02c0,.71-.07,1.41-.19,2.09l28.93,40.04c8.77-8.58,14.23-20.52,14.23-33.68v-42.4c.01-6.3-.86-12.65-3.14-18.55-6.39-17.03-23.43-25.85-39.84-31.51Z"></path>
                <path className={classes[0]} d="M3305.46,237.27c2.01-4.34,6.39-7.35,11.49-7.35h22.82c4.86,0,9.07,2.74,11.19,6.75l27.91-38.32c-8.26-7.1-18.98-11.41-30.66-11.41h-39.7c-22.12,0-40.81,15.43-45.85,36.06l42.8,14.27Z"></path>
            </g>
        </svg>
    )
}