import { Sports300 } from "./sports/weight-300";
import {Sports500} from './sports/weight-500';
import {Sports600} from './sports/weight-600';
import {Sports800} from './sports/weight-800';
import {SportsRounded300} from './sports-rounded/weight-300';
import {SportsRounded500} from './sports-rounded/weight-500';
import {SportsRounded600} from './sports-rounded/weight-600';
import {SportsRounded800} from './sports-rounded/weight-800';
import {SportsRounded900} from './sports-rounded/weight-900';
import {SportsBlackNine300} from './sports-black-nine/weight-300';
import {SeamlessRegular500} from './seamless-regular/weight-500';
import {SeamlessTangram500} from './seamless-tangram/weight-500';
import {SeamlessRound500} from './seamless-round/weight-500';
import {Default500} from './default/weight-500';
import {DoubleBubble500} from './double-bubble/weight-500';
import {ClassicSlanted500} from './classic-slanted/weight-500';
import {Classic500} from './classic/weight-500';
import {SharpTraced300} from './sharp-traced/weight-300';
import {XSeven500} from './x-seven/weight-500';

export const StyleMap = {
    default: {
        500: Default500,
    },
    sports: {
        300: Sports300,
        500: Sports500,
        600: Sports600,
        800: Sports800,
    },
    sportsrounded: {
        300: SportsRounded300,
        500: SportsRounded500,
        600: SportsRounded600,
        800: SportsRounded800,
        900: SportsRounded900,
    },
    sportsnineblack: {
        300: SportsBlackNine300,
    },
    seamlessregular: {
        500: SeamlessRegular500,
    },
    seamlesstangram: {
        500: SeamlessTangram500,
    },
    seamlessround: {
        500: SeamlessRound500,
    },
    doublebubble: {
        500: DoubleBubble500,
    },
    classicslanted: {
        500: ClassicSlanted500
    },
    classic: {
        500: Classic500
    },
    sharptraced: {
        300: SharpTraced300,
    },
    xseven: {
        500: XSeven500
    }
}

export const FlatStyleMap = Object.keys(StyleMap).map(style => {
    const weights = Object.keys(StyleMap[style]);
    return weights.map(weight => `${style}-${weight}`);
}).flat();

export function StyleSelector({ char, style, weight }) {
    const Component = StyleMap[style]?.[weight] ?? Default500;
    return <Component char={char}/>;
}

/**
 * SVG-Fitter: https://codepen.io/screeny05/pen/JjprwaE
 * Source: http://www.michieldb.nl/other/segments/All%20segment%20designs%20v1-1.svg
 * YouTube: https://www.youtube.com/watch?v=RTB5XhjbgZA
 */
