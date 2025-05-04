import Profile from "../../assets/Home/Ellipse 2699.png";

export default function AccountDetails() {
  const details = [
    { label: "Username", value: "John Smith" },
    { label: "Password", value: "Johnxyz" },
    { label: "E-mail", value: "Johnsmit@gmail.com" },
    { label: "Phone", value: "9475xxxxxx" },
  ];

  return (
    <div className="flex flex-col items-center justify-center text-center w-full p-6">
      <img
        src={Profile}
        alt="profile"
        className="md:w-40 md:h-40 h-36 w-36 rounded-full shadow-lg mb-6" // Added bottom margin for spacing
      />
      <div className="mt-6 text-lg space-y-3 ">
        {details.map((detail, index) => (
          <p key={index} className="text-left ml-10">
            {" "}
            {/* Center each label */}
            <span className="font-bold">{detail.label} :</span> {detail.value}
          </p>
        ))}
      </div>
    </div>
  );
}
