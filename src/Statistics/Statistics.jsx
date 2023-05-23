import React from 'react';
import "../Statistics/Statistics.css"
import { getRandomHexColor } from "../utilits/getRandomHexColor"

export function Statistics({ title, stats }) {
  return (
    <section className="statistics">
      <div className="wrap">
        <h2 className="title">{title}</h2>

        <ul className="stat-list">
          {stats.map(stat => (
            <li className="item" key={stat.id}
              style={
                {
                  backgroundColor: getRandomHexColor()
                }
              }
            >
              <span className="label">{stat.label}</span>
              <span className="percentage">{stat.percentage}%</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
