import {SEVEN_SEGMENTS_MAP} from '../default-maps';
import {segmentController} from '../segment-controller';

export function SeamlessTangram500({ char }) {
    const classes = segmentController(SEVEN_SEGMENTS_MAP, char);

    return (
        <svg className="character" viewBox="3021.35009765625 187.10000610351562 133.989990234375 240.20999145507812">
            <g xmlns="http://www.w3.org/2000/svg">
                <polygon className={classes[0]} points="3110.46 231.68 3152.4 187.1 3024.28 187.1 3066.02 231.68 3067.42 231.68 3109.27 231.68 3110.46 231.68"></polygon>
                <rect className={classes[6]} x="3067.42" y="284.88" width="41.86" height="44.65"></rect>
                <polygon className={classes[1]} points="3113.55 234.64 3113.55 235.96 3113.55 280.6 3155.34 280.6 3155.34 190.22 3113.55 234.64"></polygon>
                <polygon className={classes[5]} points="3063.14 329.53 3063.14 284.88 3063.14 280.6 3063.14 235.96 3063.14 234.86 3021.35 190.23 3021.35 329.53 3063.14 329.53"></polygon>
                <polygon className={classes[3]} points="3110.48 382.73 3109.27 382.73 3067.42 382.73 3066.14 382.73 3024.28 427.31 3152.4 427.31 3110.48 382.73"></polygon>
                <polygon className={classes[2]} points="3113.55 284.88 3113.55 379.74 3155.34 424.18 3155.34 284.88 3113.55 284.88"></polygon>
                <polygon className={classes[4]} points="3063.14 379.68 3063.14 378.45 3063.14 333.8 3021.35 333.8 3021.35 424.18 3063.14 379.68"></polygon>
            </g>
        </svg>
    )
}