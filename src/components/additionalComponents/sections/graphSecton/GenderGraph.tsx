import {VictoryAxis, VictoryBar, VictoryChart, VictoryLegend, VictoryLine, VictoryStack, VictoryTheme} from "victory";

interface ChartDataType {
    month: string;
    male: number;
    female: number;
}

export default function GenderGraph() {
    const subscriberCountByGender: ChartDataType[] = [
        {"month": "january", "male": 320, "female": 280},
        {"month": "february", "male": 280, "female": 290},
        {"month": "march", "male": 120, "female": 340},
        {"month": "april", "male": 220, "female": 124},
        {"month": "may", "male": 235, "female": 247},
        {"month": "june", "male": 300, "female": 370},
        {"month": "july", "male": 400, "female": 420},
        {"month": "august", "male": 320, "female": 220},
        {"month": "september", "male": 600, "female": 600},
        {"month": "october", "male": 270, "female": 600},
        {"month": "november", "male": 320, "female": 280},
        {"month": "december", "male": 500, "female": 400},
    ];

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
                            data={subscriberCountByGender.map((data) => ({x: data.month, y: data.male}))}
                        />
                        <VictoryBar
                            data={subscriberCountByGender.map((data) => ({x: data.month, y: data.female}))}
                        />
                        <VictoryAxis dependentAxis
                                     style={{
                                         grid: {stroke: "gray", strokeWidth: 0.2},
                                         tickLabels: {padding: 10}
                                     }}
                        />
                        <VictoryAxis
                            tickValues={subscriberCountByGender.map((data) => data.month)}
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
                        data={subscriberCountByGender.map((data) => ({x: data.month, y: data.male}))}
                    />
                    <VictoryLine
                        style={{
                            data: {stroke: "pink"},
                            parent: {border: "1px solid #ccc"}
                        }}
                        data={subscriberCountByGender.map((data) => ({x: data.month, y: data.female}))}
                    />
                    <VictoryAxis dependentAxis
                                 style={{
                                     grid: {stroke: "gray", strokeWidth: 0.2},
                                 }}
                    />
                    <VictoryAxis
                        tickValues={subscriberCountByGender.map((data) => data.month)}
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