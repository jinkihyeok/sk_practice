import React from "react";
import {HeaderIcon, RightArrowIcon} from "../ui/Icons";
import {Link} from "react-router-dom";

interface HeaderProps {
    title: string;
}

export default function Header({title}: HeaderProps) {
    return (
        <header className="flex flex-row gap-1 justify-between items-center py-1">
            <div className="flex flex-row">
            <HeaderIcon/>
            <h1 className="font-bold">{title}</h1>
            </div>
            <div className="flex flex-row items-center">
            <Link to="/additional" className="text-gray-400">Additional Page</Link>
                <RightArrowIcon/>
            </div>
        </header>
    )
}