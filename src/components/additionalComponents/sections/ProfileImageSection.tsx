import {ImageIcon} from "../../ui/Icons";
import {useState} from "react";

export default function ProfileImageSection() {
    const [previewImage, setPreviewImage] = useState<string>("");

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreviewImage(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className="flex flex-col">
            <div className="relative border-2 border-gray-500">
                <img src={previewImage || "/images/profileImage.jpg"} alt="profile"
                     className="w-[250px] h-[300.84px] object-fill"/>
            </div>
            <div className="flex justify-center w-[250px] my-2">
                <label htmlFor="fileInput"
                       className="flex flex-row justify-center items-center text-white bg-blue-500 w-full py-2 border-2 border-gray-500 rounded-lg relative cursor-pointer">
                    <div className="absolute left-5">
                        <ImageIcon/>
                    </div>
                    <h3>찾기</h3>
                    <input id="fileInput" type="file" accept="image/*" onChange={handleFileChange} className="hidden"/>
                </label>
            </div>
        </div>
    );
}