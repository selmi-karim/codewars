Given an array containing only zeros and ones, find the index of the zero that, if converted to one, will make the longest sequence of ones.


For instance, given the array

[1,0,1,1,1,0,1,1,1,1,0,1,1,1,1,0,0,1,1],

replacing the zero at index 10 (counting from 0) forms a sequence of 9 ones.

Your task is to write the function replaceZero() that determines where to replace a zero with a one to make the maximum length subsequence.

Note:

If the're multiple results, return the last
[1,1,0,1,1,0,1,1] //=> 5

The array will always contain zeros and ones.
Can you do this in one pass ?
