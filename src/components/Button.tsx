import React from "react";

interface ButtonProps {
  text: string;
  color: string;
  textColor: string;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ text, color, textColor, onClick }) => {
  return (
    <td className="p-2">
      <button
        className={`bg-${color}-500 text-${textColor} p-2 rounded-none cursor-pointer hover:bg-${color}-700`}
        onClick={onClick}
      >
        {text}
      </button>
    </td>
  );
};

export default Button;
