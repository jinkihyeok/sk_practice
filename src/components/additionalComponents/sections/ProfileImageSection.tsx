import {ImageIcon} from "../../ui/Icons";

export default function ProfileImageSection() {
    return (
        <div className="col-span-1">
            <div className="flex flex-col w-full">
                <div className="w-[250px] bg-red-200 relative border-2 border-gray-400">
                    <img src="/images/profileImage.jpg" alt="profile" className="w-[250px] object-cover"/>
                </div>
                <div className="flex justify-center w-[250px] my-2">
                    <button className="flex flex-row justify-center items-center text-white bg-blue-500 w-full mx-1 py-2 border-2 border-gray-500 rounded-lg relative">
                        <div className="absolute left-5">
                        <ImageIcon/>
                        </div>
                        <h3>찾기</h3>
                    </button>
                </div>
            </div>
        </div>
    )
}