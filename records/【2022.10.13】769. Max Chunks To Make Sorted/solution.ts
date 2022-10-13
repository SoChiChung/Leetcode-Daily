function maxChunksToSorted(arr: number[]): number {
    let n = arr.length, ans = 0
    for (let i = 0, j = 0, min = n, max = -1; i < n; i++) {
        min = Math.min(min, arr[i])
        max = Math.max(max, arr[i])
        if (j == min && i == max) {
            ans++; j = i + 1; min = n; max = -1;
        }
    }
    return ans
}

