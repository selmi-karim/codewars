
const longestConsec = (strings, count) => {
    let n = strings.length;
    if (!n || count <= 0 || count > strings.length)
        return '';

    let lengths = Array(n);

    // fill the running window
    let windowLen = 0;
    for (let i = 0; i < count - 1; i++) {
        let stringLen = strings[i].length;
        windowLen += stringLen;
        // fill the cache with items 0..count-1, the rest will be filled in the main loop
        lengths[i] = stringLen;
    }
    let maxLen = 0;
    let maxLenAt = 0;
    for (let i = count - 1, windowStart = 0; i < n; i++, windowStart++) {
        let stringLen = strings[i].length;
        lengths[i] = stringLen;

        let thisLen = windowLen + stringLen;
        if (thisLen > maxLen) {
            maxLen = thisLen;
            maxLenAt = windowStart;
        }
        windowLen += stringLen - lengths[windowStart];
    }

    return strings.slice(maxLenAt, maxLenAt + count).join('');
}
