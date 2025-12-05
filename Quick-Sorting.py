class Solution:
    def quickSort(self, nums):
        if len(nums)<=1:
            return nums 
        else:
            i= nums[0]
            lesser= [x for x in nums[1:] if x<= i]
            higher= [x for x in nums[1:] if x> i]
            return self.quickSort(lesser) + [i] + self.quickSort(higher) 
n=input().strip("[]")
n=list(map(int, n.split(",")))
print(Solution().quickSort(n))
