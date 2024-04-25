import React from "react";

interface GenerateEmptyArrayProps {
    arrayLength: number;
    dataLength: number;
    columnLength: number;
}

export const GenerateEmptyArray: React.FC<GenerateEmptyArrayProps> = ({
                                                                          arrayLength,
                                                                          dataLength,
                                                                          columnLength,
                                                                      }) => {
    return (
        <>
            {Array(arrayLength - dataLength)
                .fill(null)
                .map((_, index) => (
                    <tr
                        key={`empty-${index}`}
                        className={`border-b border-gray-200 h-5 ${
                            (dataLength + index) % 2 === 0 ? "bg-white" : "bg-gray-50"
                        }`}
                    >
                        {Array.from({ length: columnLength }).map((_, cellIndex) => (
                            <td
                                key={cellIndex}
                                className={`px-1 ${cellIndex === 0 ? "" : "border"}`}
                            ></td>
                        ))}
                    </tr>
                ))}
        </>
    );
};