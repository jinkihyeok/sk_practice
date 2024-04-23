import GenderGraph from "./GenderGraph";

export default function GraphSection() {
    return (
        <div className="col-span-3">
            <div className="flex flex-row gap-3 w-full">
                <div className="flex flex-col w-1/2 gap-3">
                   <GenderGraph />
                </div>
                <div className="flex flex-col w-1/2 gap-3">
                    <div className="h-44 border-2 border-gray-500"></div>
                    <div className="h-44 border-2 border-gray-500"></div>
                </div>
            </div>
        </div>
    );
}