const pagination = (current: number, total: number, limit: number): Array<number> => {
    let last = Math.ceil(total / limit);
    let delta = 2;
    let left = current - delta;
    let right = current + delta + 1;
    let range = [];
    let result = [];
    let l;

    for (let i = 1; i <= last; i++) {
        if (i == 1 || i == last || i >= left && i < right) {
            range.push(i);
        }
    }

    for (let i of range) {
        if (l) {
            if (i - l === 2) {
                result.push(l + 1);
            } else if (i - l !== 1) {
                result.push(-1);
            }
        }
        result.push(i);
        l = i;
    }

    return result;
}

export default pagination