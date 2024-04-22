export default function ProfileImageSection() {
    return (
        <div className="col-span-1">
            <div className="flex flex-col w-full">
                <div className="w-[250px] bg-red-200 relative">
                    <img src="/images/profileImage.jpg" alt="profile" className="w-[250px] object-cover"/>
                </div>
                <div>Button div</div>
            </div>
        </div>
    )
}