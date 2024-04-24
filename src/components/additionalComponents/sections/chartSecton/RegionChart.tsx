import {VictoryArea, VictoryChart, VictoryPie, VictoryPolarAxis, VictoryTheme} from "victory";
import {subscriberCountByRegion} from "../../../../dummyData/ChartData";

function generateColors(length: number): string[] {
    const colors: string[] = [];
    for (let i = 0; i < length; i++) {
        const color = "#" + Math.floor(Math.random() * 16777215).toString(16);
        colors.push(color);
    }
    return colors;
}

export default function RegionChart() {

    const chartData = subscriberCountByRegion.map((data) => ({
        x: data.region,
        y: data.count
    }));

    const randomColor = generateColors(chartData.length);

    return (
        <>
            <div className="h-44 border-2 border-gray-500">
                <VictoryPie
                    colorScale={randomColor}
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