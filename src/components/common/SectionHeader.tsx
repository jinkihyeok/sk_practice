import React from 'react';

interface SectionHeaderProps {
    title: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title }) => {
    return (
        <div className="flex flex-row gap-2 px-4 items-center text-neutral-100 bg-gray-400 text-sm">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                 stroke="currentColor" className="w-3 h-3 text-white bg-green-500 rounded">
                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5"/>
            </svg>

            <h2 className="font-semibold">{title}</h2>
        </div>
    );
};

export default SectionHeader;