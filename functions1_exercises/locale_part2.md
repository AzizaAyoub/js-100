### Soution 
``` JavaScritpt 
extractRegion('en_US.UTF-8');  // 'US'
extractRegion('en_GB.UTF-8');  // 'GB'
extractRegion('ko_KR.UTF-16'); // 'KR'

function extractRegion(region) {
  console.log(region[3] +region[4]);
}
```
