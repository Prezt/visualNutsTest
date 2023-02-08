# Tech challenge
## Exercise 1 
**Question:** How will you keep this code safe from bugs?  
**Answer:** My suggestion here is to have automated tests running every deploy. I've made some suggestions of what them could look like, but depending on the details of the behaviour, they should be different

## Exercise 2
In this exercise there are two ways to implement the solution.  
There is the "seggregated" or "clean" approach which prioritizes clarity of the funcions;  
and there is the "aggregated" or "performatic" approach which prioritizes performance  
  
Depending on how much performance is important in the final solution I'd choose a different approach.  
If the system must be fast, either because it process a large amount of data, responds a vital live application or receive huge amounts of requests simultaniously, I'd choose the "performatic" approach  
If the system receive multiple updates on a regular bases or if it doesn't match the criteria above (e.g. a ETL that runs on a small json once per week), I'd choose the "clean" approach  
Another great advantage of the "clean" approach is the fact that you can test the functions separatedly as showcased in the printCountries.test.js file