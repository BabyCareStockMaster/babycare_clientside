import MainLayout from "../../../src/ui-components/layout/MainLayout";
import Barchart from "../../../src/components/BarChartExample";
import { useEffect, useState } from "react";
import DashboardCard from "../../../src/ui-components/Card/DashboardCard"

const Dashbaord = () => {

    const [stock, setStock] = useState([{}]);
    const [pro, setPro] = useState([]);

    // Product
    let products = [];

    useEffect( () => {

        async function fetchMyAPI() {

            // Send Request Store Cart
            const reqOption = {
                method: "GET",
                headers: {
                            "Content-Type" : "application/json", 
                            'Authorization': 'Bearer ' + localStorage.getItem('token') 
                        },
            }   
            
            // Request
            const response = await fetch(`http://localhost:4000/api/warehousestock/`, reqOption);
            const data = await response.json();
            
            // Save Data
            setStock(data.data);

            // Loop
            data.data.forEach((item) => {
                if(products.length <= item.Products.length || item.Products.length == 0)
                {
                    if(!products.includes(0)){

                        products.push(item.Products.length)
                    }
                }
            });

            setPro(products)
        }

        fetchMyAPI();


    }, [])


    return (
        <>
            <div className="flex p-8 flex-wrap">

                {/* Stock Alert */}
                <div className="w-[450px] h-[400px] border mr-7 mb-7 bg-white rounded-lg">
                    <div className="overflow-y-auto overflow-x-hidden text-black h-full">

                        <div className="text-center text-black font-bold text-2xl mt-3 mb-5">
                            <p>Stock Alert</p>
                        </div>
                        
                        {/* Stock */}
                        {stock.map((s, index) => (
                            <DashboardCard key={s.id} name={s.name} count={pro[index]} />
                        ))}

                    </div>
                </div>

                {/* Chart JS */}
                <div className="w-[450px] h-[400px] border mr-7 mb-7 rounded-lg">
                    <Barchart />
                </div>
            </div>
        </>
    );
}
 
export default Dashbaord;

Dashbaord.getLayout = function getLayout(page) {
return (
    <MainLayout>{page}</MainLayout>
)
}