import {VictoryAxis, VictoryBar, VictoryChart, VictoryLegend, VictoryLine, VictoryStack} from "victory";
import {subscriberCountByGender} from "../../../../dummyData/ChartData";

export default function GenderGraph() {

    const [maleChartData, femaleChartData, monthData] = subscriberCountByGender.reduce<[{ x: string; y: number }[], { x: string; y: number }[], string[]]>(
        (acc, { month, male, female }) => {
            acc[0].push({ x: month, y: male });
            acc[1].push({ x: month, y: female });
            acc[2].push(month);
            return acc;
        },
        [[], [], []]
    );

    return (
        <>
            <div className="h-44 border-2 border-gray-500">
                <VictoryChart
                    width={800}
                    domainPadding={20}
                >
                    <VictoryLegend
                        x={690} y={30}
                        orientation="vertical"
                        gutter={20}
                        style={{
                            title: {fontSize: 20}
                        }}
                        data={[
                            {name: "남성", symbol: {fill: "skyBlue"}},
                            {name: "여성", symbol: {fill: "pink"}}
                        ]}
                    />
                    <VictoryStack
                        colorScale={["skyBlue", "pink"]}
                    >
                        <VictoryBar
                            data={maleChartData}
                        />
                        <VictoryBar
                            data={femaleChartData}
                        />
                        <VictoryAxis dependentAxis
                                     style={{
                                         grid: {stroke: "gray", strokeWidth: 0.2},
                                         tickLabels: {padding: 10}
                                     }}
                        />
                        <VictoryAxis
                            tickValues={monthData}
                            style={{
                                tickLabels: {
                                    angle: -30,
                                    textAnchor: "end",
                                    padding: 0,
                                }
                            }}
                        />

                    </VictoryStack>
                </VictoryChart>
            </div>
            <div className="h-44 border-2 border-gray-500">
                <VictoryChart
                    width={800}
                    domainPadding={20}
                    minDomain={{y: 0}}
                >
                    <VictoryLine
                        style={{
                            data: {stroke: "skyBlue"},
                            parent: {border: "1px solid #ccc"}
                        }}
                        data={maleChartData}
                    />
                    <VictoryLine
                        style={{
                            data: {stroke: "pink"},
                            parent: {border: "1px solid #ccc"}
                        }}
                        data={femaleChartData}
                    />
                    <VictoryAxis dependentAxis
                                 style={{
                                     grid: {stroke: "gray", strokeWidth: 0.2},
                                 }}
                    />
                    <VictoryAxis
                        tickValues={monthData}
                        style={{
                            tickLabels: {
                                angle: -30,
                                textAnchor: "end",
                                padding: 0,
                            }
                        }}
                    />
                </VictoryChart>
            </div>
        </>
    )
}