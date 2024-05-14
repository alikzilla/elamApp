import React, { useEffect } from 'react';
import styles from "./houseItemPage.module.css";
import { useParams } from 'react-router-dom';
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { houses } from "../../../../store";
import HouseCard from "./components/HouseCard";
import Chart from "chart.js/auto";

function HouseItemPage() {
  
  const { houseId } = useParams();
  const house = houses.find((item) => houseId == item.id);
  const anotherHouses = houses.filter((item) => houseId != item.id);

  useEffect(() => {
    console.log(houses);
    console.log(house);
    window.scrollTo({ top: 0, behavior: "smooth" });
  
    const chartData = {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
      values1: [10, 40, 40, 20, 40, 30],
      values2: [40, 30, 50, 70, 70, 80]
    };
    
    const doughnutData = {
      labels: ["Seismic Rating", "Energy Efficiency", "Amenities", "Location", "Neighborhood", "Security"],
      values: [60, 40, 30, 10, 5]
    };
  
    const lineChart = createLineChart(chartData);
    const doughnutChart = createDoughnutChart(doughnutData);


    return () => {
      lineChart.destroy();
      doughnutChart.destroy();
    };
  }, [house]);
  
  function createLineChart(data) {
    const ctx = document.getElementById("lineChart").getContext("2d");
    return new Chart(ctx, {
      type: "line",
      data: {
        labels: data.labels,
        datasets: [{
          label: "4YOU",
          data: data.values1,
          borderColor: "#15ff00",
          borderWidth: 1
        },
        {
          label: "Other Houses",
          data: data.values2,
          borderColor: "#ff0000",
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }  

  function createDoughnutChart(data) {
    const ctx = document.getElementById("doughnutChart").getContext("2d");
    return new Chart(ctx, {
      type: "doughnut",
      data: {
        labels: data.labels,
        datasets: [{
          data: data.values,
          backgroundColor: [
            "#FF6384",
            "#36A2EB",
            "#FFCE56",
            "#4BC0C0",
            "#9966FF",
            "#FF8A80"
          ],
          hoverBackgroundColor: [
            "#FF6384",
            "#36A2EB",
            "#FFCE56",
            "#4BC0C0",
            "#9966FF",
            "#FF8A80"
          ]
        }]
      }
    });
  }

  return (
    <section className={styles.housePage}>
      <div className={styles.houseBlock}>
        <div className={styles.house}>
          <ImageGallery items={house.images} additionalClass={styles.imageGallery} showPlayButton={false} showBullets={true} />
          <div className={styles.houseInfo}>
            <h1>{house.name}</h1>
            <p>Address: {house.address}</p>
            <p>Cost: {house.cost}</p>
            <p>Rating: {house.rating}/5</p>
            <p>Description: {house.description}</p>  
          </div> 
        </div>
        <div className={styles.chartList}>
          <div className={styles.chart} style={{height: "376px", width: "100%"}}>
            <canvas id="lineChart" width="50px" height="50px"></canvas>
          </div>
          <div className={styles.chart} style={{height: "376px", width: "100%"}}>
            <canvas id="doughnutChart" width="50px" height="50px"></canvas>
          </div>
        </div>
      </div>
      
      <div className={styles.sidebar}>
        <h1 style={{fontSize: "25px"}}>Another houses you would like</h1>
        <div className={styles.anotherHousesList}>
          {anotherHouses.map((house) => (
            <HouseCard key={house.id} house={house} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default HouseItemPage;
