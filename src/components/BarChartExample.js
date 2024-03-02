import { useRef, useEffect, useState } from "react";
import Chart from 'chart.js/auto'; // For Chart.js 3.x

const Barchart = () => {

    // Reference
    const ChartRef = useRef(null)

    // State
    let warehouse = [];
    let products = [];
    
    useEffect( () => {

        async function fetchMyAPI() {

            // // Send Request Store Cart
            const reqOption = {
                method: "GET",
                // headers: {
                //             "Content-Type" : "application/json", 
                //             'Authorization': 'Bearer ' + localStorage.getItem('token') 
                //         },
            }   
            
            // Request
            const response = await fetch(`http://localhost:4000/api/warehousestock/`);
            const data = await response.json();
            
            // Save Data
            // setStock(data.data);

            // Setting Stock and Name
            data.data.forEach((item) => {
                if(!warehouse.includes(item.name) || !products.includes(item.Products.length))
                {
                    warehouse.push(item.name);
                    products.push(item.Products.length)
                }
            });

            if(ChartRef.current){
                if(ChartRef.current.chart){
                    ChartRef.current.chart.destroy()
                }

                // New Chart
                const context = ChartRef.current.getContext("2d");

                // Chart
                const newChart = new Chart(context, {
                    type: "bar",
                    data: {
                        labels: warehouse,
                        datasets: [
                            {
                                label: "stok",
                                data: products,
                                backgroundColor: [
                                    "rgb(75, 192, 192, 0.2)",
                                    "rgb(255, 205, 86, 0.2)",
                                    "rgb(255, 99, 132, 0.2)",
                                ],
                                borderWidth: 1,
                            }
                        ]
                    },
                    options: {
                        scales: {
                            x: {
                                type: "category"
                            },
                            y: {
                                beginAtZero: true
                            }
                        }
                    }
                });

                ChartRef.current.chart = newChart
            }

        }

        fetchMyAPI();

    }, [])

    return (
        <>
            <div className="bg-white h-full flex items-center rounded-lg">
                <canvas ref={ChartRef}></canvas>
            </div>
        </>
    );
}
 
export default Barchart;