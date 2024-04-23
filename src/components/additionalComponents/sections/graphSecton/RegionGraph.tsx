import {SubscriberData} from "../../../../dummyData/subscriberData";
import {SubscriberType} from "../../../../types";
import {VictoryArea, VictoryChart, VictoryPie, VictoryPolarAxis, VictoryTheme} from "victory";

export default function RegionGraph() {
    const regions: string[] = [...new Set(SubscriberData.map((subscriber: SubscriberType) => subscriber.region))];

    const countByRegion = regions.map((region: string) => {
        return SubscriberData.filter(
            (subscriber: SubscriberType) =>
                subscriber.region === region
        ).length;
    });

    const chartData = regions.map((region, index) => ({
        x: region,
        y: countByRegion[index]
    }));

    return (
        <>
            <div className="h-44 border-2 border-gray-500">
                <VictoryPie
                    colorScale={["tomato", "orange", "gold", "cyan", "navy", "purple", "green"]}
                    data={chartData}
                />
            </div>
            <div className="h-44 border-2 border-gray-500">
                <VictoryChart polar
                              theme={VictoryTheme.material}
                >
                    <VictoryPolarAxis dependentAxis
                                      style={{axis: {stroke: "none"}}}
                                      tickFormat={() => ""}
                    />
                    <VictoryPolarAxis
                    labelPlacement="vertical"
                    style={{tickLabels: {padding: 15}}}
                    />
                    <VictoryArea
                        data={chartData}
                        style={{data: {fill: "skyBlue", fillOpacity: 0.3}}}
                    />
                </VictoryChart>
            </div>
        </>
    )
}