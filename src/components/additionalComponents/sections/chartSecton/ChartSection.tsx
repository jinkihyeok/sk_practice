import GenderChart from "./GenderChart";
import RegionChart from "./RegionChart";

export default function ChartSection() {
    return (
        <div className="flex flex-grow bg-gray-50">
            <div className="flex flex-row gap-3 w-full">
                <div className="flex flex-col w-1/2 gap-3">
                    <GenderChart/>
                </div>
                <div className="flex flex-col w-1/2 gap-3">
                    <RegionChart/>
                </div>
            </div>
        </div>
    );
}