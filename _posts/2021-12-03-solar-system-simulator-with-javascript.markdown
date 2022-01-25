---
categories: [Physics, Coding]
---
{% include js-solar-system.html %}

I had 1.5 days during a Qlik hackathon to build something fun. I decided to build a simplified version of my [Solar System Simulator]({% post_url 2020-10-02-solar-system-simulator %}) using javascript. The graphics is rendered on a canvas. Planets/sun are drawn using dots with varied brightness. The math for lighting and animating can be found [here](https://www.a1k0n.net/2011/07/20/donut-math.html).

The main features include animating, rotating around x-axis by panning up/down, or zooming with mouse wheel. You can also change light source between parallel (light from infinity) and point (light from the centered sun), toggle traces, and zoom extent, in case panning and zooming go too far. 

The project was built with standard HTML and vanila Javascript, with HammerJS for panning, and Bootstrap for rendering buttons.

To make it works, simply copy the path of index.html or index-with-script.html to a browser. The source code can be found in [my Github](https://github.com/bao-ho/JS-solar-system).


