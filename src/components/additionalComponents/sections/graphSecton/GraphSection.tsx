import GenderGraph from "./GenderGraph";
import RegionGraph from "./RegionGraph";

export default function GraphSection() {
    return (
        <div className="flex flex-grow bg-gray-50">
            <div className="flex flex-row gap-3 w-full">
                <div className="flex flex-col w-1/2 gap-3">
                    <GenderGraph/>
                </div>
                <div className="flex flex-col w-1/2 gap-3">
                    <RegionGraph/>
                </div>
            </div>
        </div>
    );
}