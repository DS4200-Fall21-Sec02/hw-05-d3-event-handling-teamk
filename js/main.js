let margin = {
    top: 60,
    left: 50,
    right: 30,
    bottom: 35
  },
  width = 500 - margin.left - margin.right,
  height = 500 - margin.top - margin.bottom;

//SVG that will hold the visualization 
let svg = d3.select('#vis')
  .append('svg')
  .attr('preserveAspectRatio', 'xMidYMid meet') // this will scale your visualization according to the size of its parent element and the page.
  .attr('width', '100%') // this is now required by Chrome to ensure the SVG shows up at all
  .style('background-color', 'white') 
  .style('border', 'solid')
  .attr('viewBox', [0, 0, width + margin.left + margin.right, height + margin.top + margin.bottom].join(' '))

// Add a square 
let rect = svg.append('rect')
  .attr('x', '100')
  .attr('y', '200')
  .attr('width', '20%')
  .attr('height', '20%')
  .attr('fill', '#a6cee3')
  .on("click", function() {
    //Code for random Color:
    //https://css-tricks.com/snippets/javascript/random-hex-color/
      circle.style('fill', "#" + String(Math.floor(Math.random()*16777215).toString(16)))
  })
    .on('mouseover', function(){



        rect.style('stroke', '#f92882');
        rect.style('stroke-width', '4px');
    })
    .on('mouseout', function(){


        rect.style('stroke', '#f92882');
        rect.style('stroke-width', '0px');
    })
    .call(d3.drag().on("drag", moveRect))





// Add a circle 
let circle = svg.append('circle') 
  .attr('cx', '350')
  .attr('cy', '250')
  .attr('r', '60')
  .attr('fill', '#b2df8a')
    .on('dblclick', function() {


        circle.style('fill', "#" + String(Math.floor(Math.random()*16777215).toString(16)))
        rect.style('fill', "#" + String(Math.floor(Math.random()*16777215).toString(16)))

    })
    .on('mouseover', function(){


        circle.style('stroke', '#f92882');
        circle.style('stroke-width', '4px');
    })
    .on('mouseout', function() {


        circle.style('stroke', '#f92882');
        circle.style('stroke-width', '0px');
    })
    .call(d3.drag().on("drag", moveCircle))

function moveCircle (event) {
    console.log('dragged')
    console.log(event)
    console.log(this)
    //Adapted from https://observablehq.com/@d3/click-vs-drag
    d3.select(this).raise().attr("cx", this.cx = event.x).attr("cy", this.cy = event.y);
}

function moveRect (event) {

    console.log('dragged')
    console.log(event)
    console.log(this)
    //Adapted from https://observablehq.com/@d3/click-vs-drag
    d3.select(this).raise().attr("x", this.x = event.x - 43).attr("y", this.y = event.y - 25);
}

