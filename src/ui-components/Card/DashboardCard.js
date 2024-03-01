const DashboardCard = ({name, count}) => {

    return (
        <>
            <div className="bg-slate-800 text-white mb-3 p-2">
                <div className="text-center">{name}</div>
                <div>Jumlah Produk: {count}</div>
            </div>
        </>
    );
}
 
export default DashboardCard;