## eAuction
```eAuction is a platform for conduct online Auctions for sale and purchase.```

![](images/eAuction.png)



## How it works

### How the data is stored:

The Item Name, username and password are stored in  keys and value form.

### Performance Benchmarks
```
====== PING_INLINE ======
  1000 requests completed in 0.02 seconds
  50 parallel clients
  3 bytes payload
  keep alive: 1

74.30% <= 1 milliseconds
99.90% <= 2 milliseconds
100.00% <= 2 milliseconds
47619.05 requests per second


====== LRANGE_100 (first 100 elements) ======
  1000 requests completed in 0.02 seconds
  50 parallel clients
  3 bytes payload
  keep alive: 1

76.50% <= 1 milliseconds
100.00% <= 1 milliseconds
47619.05 requests per second

====== LRANGE_300 (first 300 elements) ======
  1000 requests completed in 0.04 seconds
  50 parallel clients
  3 bytes payload
  keep alive: 1

3.90% <= 1 milliseconds
85.30% <= 2 milliseconds
98.70% <= 3 milliseconds
100.00% <= 3 milliseconds
24390.24 requests per second

====== LRANGE_500 (first 450 elements) ======
  1000 requests completed in 0.06 seconds
  50 parallel clients
  3 bytes payload
  keep alive: 1

1.00% <= 1 milliseconds
31.70% <= 2 milliseconds
90.20% <= 3 milliseconds
99.10% <= 4 milliseconds
100.00% <= 4 milliseconds
17241.38 requests per second

====== LRANGE_600 (first 600 elements) ======
  1000 requests completed in 0.07 seconds
  50 parallel clients
  3 bytes payload
  keep alive: 1

1.90% <= 1 milliseconds
12.00% <= 2 milliseconds
63.40% <= 3 milliseconds
89.80% <= 4 milliseconds
99.00% <= 5 milliseconds
100.00% <= 5 milliseconds
13888.89 requests per second



```
## How to run it locally?

Clone the repo nd follow below instruction to do it.

```
$ https://github.com/kushalchauhan7629/eAuction.git
```
Now navigate to ```eAuction``` folder and run npm install like below.

```
$ cd eAuction
$ npm install
```
## Run
```
$ npm run dev
```
### Prerequisites

```
1. NVM, with Node LTS installed (Currently 16+)
2. Visual Studio Code LTS
```





### Heroku

[Insert Deploy on Heroku button](https://devcenter.heroku.com/articles/heroku-button)
