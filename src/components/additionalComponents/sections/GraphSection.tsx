export default function GraphSection () {
    return (
        <div className="col-span-3">
            <div className="flex flex-col w-full">
                <div className="flex flex-row">
                    <div className="w-1/2 h-40 bg-blue-50"></div>
                    <div className="w-1/2 h-40 bg-yellow-200"></div>
                </div>
                <div className="flex flex-row">
                    <div className="w-1/2 h-40 bg-yellow-200"></div>
                    <div className="w-1/2 h-40 bg-blue-50"></div>
                </div>
            </div>
        </div>
    )
}