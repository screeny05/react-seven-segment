const DEFAULT_MAP_CHAR = new Array(30).fill(0);

export function segmentController(map, char) {
    const charMap = map[char] ?? DEFAULT_MAP_CHAR;
    return charMap.map(active => active ? 'segment segment--active' : 'segment');
}