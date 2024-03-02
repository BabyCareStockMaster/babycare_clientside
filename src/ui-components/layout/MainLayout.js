import { useEffect } from "react";
import { useRouter } from "next/router";

const MainLayout = ({children}) => {

    // // Router
    // const router = useRouter();

    // // Recheck Token
    // useEffect(() => {

    //     function fetchMyAPI() {

    //         // Checking Token
    //         const token = localStorage.getItem('token');

    //         // Check The Data
    //         if(token != null && token != "")
    //         {
    //             router.replace('/dashboard')
    //         }
    //     }
        
    //     fetchMyAPI();
        
    // }, []);

    return (
        <>
            <div className="bg-slate-800 text-white w-screen h-full flex overflow-hidden">
                {/* <Sidebar /> */}
                <div className="ml-16">
                    {children}
                </div>
            </div>
        </>
    );
}
 
export default MainLayout;