---
permalink: /sma
title: Moving Average Crossover
---

Simple moving average is a tool for [technical analysis][ta]. SMA is a subset of [moving average][ma].

Quoting wikipedia,

> In financial applications a simple moving average (SMA) is the unweighted mean of the previous n data

I employ a popular [Moving average crossover][mac] strategy (MAC):

1. One SMA with a large window (ex n=50)
2. One SMA with a short window (ex n=20)
3. Watch for intersections between the fast and slow curves
    * if Fast crosses below Slow --> exit
    * if Fast crosses above Slow —> enter
    * else —> hold

I implemented a MAC command line tool in python which uses the [unofficial Robinhood’s apis][api] for data.

* inputs: symbols, fast/slow rates
* outputs: recommends enter/exit/hold.

It has additional parameters to display charts and more.

If you have feature requests or implementation thoughts, please open some issues on github or send me an email.

[Github repo][repo]

[api]: https://github.com/sanko/Robinhood
[ta]: https://en.wikipedia.org/wiki/Technical_analysis
[mac]: https://en.wikipedia.org/wiki/Moving_average_crossover
[ma]: https://en.wikipedia.org/wiki/Moving_average
[repo]: https://github.com/vikasagartha/agartha-sma
