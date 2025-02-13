type AvatarType = {
  username: string;
};

const Avatar = ({ username }: AvatarType) => {
  const initial = username ? username.charAt(0).toUpperCase() : "?";

  return (
    <div
      className={
        "flex transform items-center justify-center gap-4 rounded-full bg-gradient-to-r from-gray-900 to-[#299cd5] px-5 py-3 text-lg font-semibold text-white shadow-lg transition duration-300 ease-in-out hover:scale-105 hover:from-[#299cd5] hover:to-gray-900"
      }
    >
      {initial}
    </div>
  );
};

export default Avatar;
