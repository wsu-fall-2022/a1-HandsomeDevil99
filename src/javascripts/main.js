// Required by Webpack - do not touch
require.context('../', true, /\.(html|json|txt|dat)$/i)
require.context('../images/', true, /\.(gif|jpg|png|svg|eot|ttf|woff|woff2)$/i)
require.context('../stylesheets/', true, /\.(css|scss)$/i)

// First: Set up your name
let std_name = "Alexandrew Christensen"
document.querySelector('#std_name').innerHTML = `<strong>${std_name}</strong>`

//Then: comes everything else
// TODO
import * as d3 from "d3";

// <svg width="500" height="600" style="background: rgb(232, 207, 207)" fill="transparent">d3.select('main')
let svg1 = d3.select('main').append('svg')
    .attr('width', 100)
    .attr('height', 100)
    .style('background', '#eee')
    .style('fill', 'transparent')
let svg2 = d3.select('main').append('svg')
    .attr('width', 100)
    .attr('height', 100)
    .style('background', '#eee')
    .style('fill', 'transparent')
let svg3 = d3.select('main').append('svg')
    .attr('width', 100)
    .attr('height', 100)
    .style('background', '#eee')
    .style('fill', 'transparent')
let svg4 = d3.select('main').append('svg')
    .attr('width', 100)
    .attr('height', 100)
    .style('background', '#eee')
    .style('fill', 'transparent')
let svg5 = d3.select('main').append('svg')
    .attr('width', 100)
    .attr('height', 100)
    .style('background', '#eee')
    .style('fill', 'transparent')
let obj_circle = svg1.append('circle')
    .attr('cx', 50)
    .attr('cy', 50)
    .attr('r', 50)
    .attr('stroke', 'black')
    .attr('fill', 'transparent')
let Rect_svg1 = svg1.append('rect')
    .attr('x', 50)
    .attr('y', 50)
    .attr('width', .25)
    .attr('height', 40)
    .attr('stroke', 'black')
    .attr('fill', 'black')
let interpol_rotate = d3.interpolateString('rotate(0, 50, 50)', 'rotate(360, 50, 50)')
function animate_rect()
{
    Rect_svg1
        .transition()
        // .attr('transform', 'translate(50, 50)')
        // .duration(1000)
        .attrTween('transform', function(d,i,a){return interpol_rotate})
        .duration(10000)
    //repeatCount="indefinite"

}
animate_rect()

let obj_circle2 = svg2.append('circle')
    .attr('cx', 50)
    .attr('cy', 50)
    .attr('r', 50)
    .attr('stroke', 'black')
    .attr('fill', 'transparent')