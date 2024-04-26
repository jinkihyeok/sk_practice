import React, {useEffect} from "react";
import {useLocaleState} from "../../../contexts/LocaleStateContext";

export default function SearchBarSection() {
    const {locale, setLocale} = useLocaleState();


    const handleSearch = () => {
        alert("메뉴 검색");
    };

    const handleKeyDown = (event: KeyboardEvent) => {
        if ((event.ctrlKey && event.key.toLowerCase() === 'k') || event.key === 'ㅏ') {
            event.preventDefault();
            handleSearch();
        }
    };

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    const handleLanguageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setLocale(event.target.value as "ko" | "en");
    }

    return (
        <div className="flex flex-row gap-3 w-full">
            <div className="w-[250px]"></div>
            <div className="flex flex-grow flex-row justify-between">
                <div className="flex flex-row gap-2">
                    <input
                        type="text"
                        placeholder="Ctrl + K 검색"
                        className="border-2 border-gray-500 px-2 py-1 rounded-lg"
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