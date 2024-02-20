// #1 - Sort 10 schools around your house by distance:
// INSERTION SORT
// For sorting a small number of schools (10 in this case) by distance, 
// you typically don't need a complex sorting algorithm. Instead, a simple and 
// efficient algorithm like insertion sort or selection sort would be suitable. 
// These algorithms have a time complexity of O(n^2), which is acceptable for small input 
// sizes like 10 schools.
// Insertion sort may be a slightly better choice since it performs well on nearly 
// sorted data, which is likely the case when sorting schools by distance around your house.

// #2 - eBay sorts listings by the current Bid amount:
// RADIX OR COUNTING SORT
// Chat GPT recommends QUICK SORT or MERGE SORT

// #3 - Sport scores on ESPN:
// QUICK SORT. Note that QUICK sort has better space complexity than merge sort.

// #4 - Massive database (can't fit all into memory) needs to sort through past year's user data:
// MERGE SORT.

// #5 - Almost sorted Udemy review data needs to update and add 2 new reviews:
// INSERTION SORT, because data is almost sorted.

// #6 - Temperature Records for the past 50 years in Canada:
// QUICK SORT.

// #7 - Large user name database needs to be sorted. Data is very random:
// QUICK SORT or HEAP SORT.

// #8 - You want to teach sorting for the first time:
// BUBBLE SORT and SELECTION SORT