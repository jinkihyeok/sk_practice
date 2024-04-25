import React from "react";
import {HeaderIcon, RightArrowIcon} from "../ui/Icons";
import {Link} from "react-router-dom";

interface HeaderProps {
    title: string;
    linkTitle: string;
    linkPath: string;
}

export default function MainHeader({title, linkTitle, linkPath}: HeaderProps) {
    return (
        <header className="flex flex-row justify-between py-1">
            <div className="flex flex-row gap-1 items-center">
            <HeaderIcon size={5} />
            <h1 className="font-bold">{title}</h1>
            </div>
            <div className="flex flex-row items-center">
            <Link to={linkPath} className="text-gray-400">{linkTitle}</Link>
                <RightArrowIcon size={3}/>
            </div>
        </header>
    )
}