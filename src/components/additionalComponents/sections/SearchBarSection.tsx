import React from "react";

export default function SearchBarSection() {
    const handleSearch = () => {
        alert("메뉴 검색");
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.ctrlKey && event.key.toLowerCase() === 'k') {
            event.preventDefault();
            handleSearch();
        }
    };

    return (
        <div className="flex flex-row justify-between w-3/4">
            <div className="flex flex-row gap-2">
                <input
                    type="text"
                    placeholder="Ctrl + K 검색"
                    className="border-2 border-gray-500 px-2 py-1 rounded-lg"
                    onKeyDown={handleKeyDown}
                />
                <button
                    className="text-white bg-blue-500 px-5 border-2 border-gray-500 rounded-lg"
                    onClick={handleSearch}
                >
                    메뉴 검색
                </button>
            </div>
            <div>
                <select className="h-full text-white bg-blue-500 px-10 border-2 border-gray-500 rounded-lg">
                    <option>한글</option>
                    <option>영문</option>
                </select>
            </div>
        </div>
    );
}