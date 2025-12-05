class Solution {
    quickSort(nums) {
        if (nums.length <= 1) {
            return nums;
        }

        let pivot = nums[0];               // correct pivot
        let lesser = nums.slice(1).filter(x => x <= pivot);
        let higher = nums.slice(1).filter(x => x > pivot);

        return [
            ...this.quickSort(lesser),
            pivot,
            ...this.quickSort(higher)
        ];
    }
}

const n = [7, 4, 1, 5, 3];
console.log(new Solution().quickSort(n));
