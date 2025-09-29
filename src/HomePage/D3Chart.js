import React, { useRef, useEffect } from "react";
import * as d3 from "d3";

function D3Chart({ data = [] }) {
  const chartRef = useRef();

  useEffect(() => {
    d3.select(chartRef.current).select("svg").remove();

    const pieChartData = data.map(item => ({
      name: item.title,
      value: item.budget
    }));

    const height = 400,
      width = 400,
      margin = 15;

    const svg = d3
      .select(chartRef.current)
      .append("svg")
      .attr("width", width)
      .attr("height", height);

    const radius = Math.min(width, height) / 2 - margin;

    const g = svg
      .append("g")
      .attr("transform", `translate(${width / 2}, ${height / 2})`);

    const colors = ["#33ec42ff", "#3f91e9ff", "#ee71cbff"];

    const pie = d3.pie().value(d => d.value);
    const path = d3.arc().outerRadius(radius).innerRadius(110);
    const label = d3.arc().outerRadius(radius).innerRadius(radius - 75);

    const pies = g
      .selectAll(".arc")
      .data(pie(pieChartData))
      .enter()
      .append("g")
      .attr("class", "arc");

    pies
      .append("path")
      .attr("d", path)
      .attr("fill", (d, i) => colors[i % colors.length]);

    pies
      .append("text")
      .attr("transform", d => `translate(${label.centroid(d)})`)
      .attr("text-anchor", "middle")
      .attr("font-size", "14px")
      .text(d => d.data.name);
  }, [data]);

  return <div ref={chartRef}></div>;
}

export default D3Chart;
