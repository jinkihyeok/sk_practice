import React from "react";
import {useLocaleState} from "../../../contexts/LocaleStateContext";

export default function SearchBarSection() {
    const {locale, setLocale} = useLocaleState();


    const handleSearch = () => {
        alert("메뉴 검색");
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.ctrlKey && event.key.toLowerCase() === 'k') {
            event.preventDefault();
            handleSearch();
        }
    };

    const handleLanguageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setLocale(event.target.value as "ko" | "en");
    }

    return (
        <div className="grid grid-cols-4 gap-24 my-2 w-full">
            <div className="col-span-1"></div>
            <div className="col-span-3 flex flex-row justify-between">
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
                    <select
                        className="h-full text-white bg-blue-500 px-10 border-2 border-gray-500 rounded-lg"
                        value={locale}
                        onChange={handleLanguageChange}
                    >
                        <option value="ko">한글</option>
                        <option value="en">영문</option>
                    </select>
                </div>
            </div>
        </div>
    );
}