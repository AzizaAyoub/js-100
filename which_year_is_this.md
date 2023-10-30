### Solution
``` JavaScript 
let today = new Date();

today.getYear(); 
today.getFullYear(); // 2023
```
### Discussion
getYear() **Deprecated:** This feature is no longer recommended.  
The getYear() method of Date instances returns the year for this date according to local time. Because getYear() does not return full years ("year 2000 problem"), it is deprecated and has been replaced by the getFullYear() method.

getFullYear() Use this method instead of the getYear() method.
The getFullYear() method of Date instances returns the year for this date according to local time.


