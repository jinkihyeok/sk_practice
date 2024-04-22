import {VictoryAxis, VictoryBar, VictoryLegend, VictoryStack} from "victory";
import {SubscriberData} from "../../../dummyData/subscriberData";
import {SubscriberType} from "../../../types";

export default function GraphSection() {
    const subscribeTypes: string[] = [...new Set(SubscriberData.map((subscriber: SubscriberType) => subscriber.subscribeType))];

    const maleCountBySubscribeType = subscribeTypes.map((subscribeType: string) => {
        return SubscriberData.filter(
            (subscriber: SubscriberType) =>
                subscriber.subscribeType === subscribeType && subscriber.gender === "male"
        ).length;
    });

    const femaleCountBySubscribeType = subscribeTypes.map((subscribeType: string) => {
        return SubscriberData.filter(
            (subscriber: SubscriberType) =>
                subscriber.subscribeType === subscribeType && subscriber.gender === "female"
        ).length;
    });

    const maleChartData = subscribeTypes.map((subscribeType, index) => ({
        x: subscribeType,
        y: maleCountBySubscribeType[index]
    }));

    const femaleChartData = subscribeTypes.map((subscribeType, index) => ({
        x: subscribeType,
        y: femaleCountBySubscribeType[index]
    }));


    return (
        <div className="col-span-3">
            <div className="flex flex-col gap-3 w-full">
                <div className="flex flex-row gap-3">
                    <div className="w-1/2 h-44 border-2 border-gray-500">
                        <VictoryStack
                            width={700}
                            height={350}
                            colorScale={["darkBlue", "skyBlue"]}
                        >
                            <VictoryBar
                                data={maleChartData}
                                barWidth={20}
                            />
                            <VictoryBar
                                data={femaleChartData}
                                barWidth={20}
                            />
                            <VictoryAxis dependentAxis
                                         style={{
                                             grid: {stroke: "gray", strokeWidth: 0.2},
                                             tickLabels: {padding: 20}
                                         }}
                            />
                            <VictoryAxis
                                tickValues={subscribeTypes}
                                style={{
                                    tickLabels: {
                                        angle: -30,
                                        textAnchor: "end",
                                        padding: 0,
                                    }
                                }}
                            />
                            <VictoryLegend
                                x={600} y={30}
                                orientation="vertical"
                                gutter={20}
                                style={{
                                    title: {fontSize: 20}
                                }}
                                data={[
                                    {name: "남성", symbol: {fill: "darkBlue"}},
                                    {name: "여성", symbol: {fill: "skyBlue"}}
                                ]}
                            />
                        </VictoryStack>
                    </div>
                    <div className="w-1/2 h-44 border-2 border-gray-500"></div>
                </div>
                <div className="flex flex-row gap-3">
                    <div className="w-1/2 h-44 border-2 border-gray-500"></div>
                    <div className="w-1/2 h-44 border-2 border-gray-500"></div>
                </div>
            </div>
        </div>
    );
}