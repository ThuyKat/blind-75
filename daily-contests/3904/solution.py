class Solution(object):
    def firstStableIndex(self, nums, k):
        """
        :type nums: List[int]
        :type k: int
        :rtype: int
        """
        length = len(nums)
        
        left = [0] * length
        left[0] = nums[0]
        for i in range (0,length):
            left[i] = max(nums[i],left[i-1])

        right = [0]*length
        right[length-1] = nums[length-1]
        for i in range(length-2,-1,-1):
            right[i] = min(nums[i],right[i+1])
        
        for i in range(0,length):
            if(left[i]-right[i]<=k):
                return i
        return -1
