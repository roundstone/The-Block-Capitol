import { motion } from "framer-motion";

interface MotionButtonProps {
  text: string;
  variant: "primary" | "secondary" | "light";
  className?: string;
}

const MotionButton: React.FC<MotionButtonProps> = ({
  text,
  variant,
  className,
  ...props 
}) => {
  const baseStyle = `px-6 py-3 text-white font-medium rounded-xl transition-all duration-300 border-b-4 border-[#FEDA02] mb-1 min-w-[275.33px] ${className}`;

  const styles = {
    primary: "bg-red-500 hover:bg-[#FF2F00]",
    secondary: "bg-black hover:bg-gray-800",
    light: "bg-[#E5E5E5] !text-black hover:bg-gray-100",
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`${baseStyle} ${styles[variant]} ${className}`}
      {...props}
    >
      {text}
    </motion.button>
  );
};

export default MotionButton;

// import { ButtonHTMLAttributes, ReactNode } from "react";

// interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
//   children: ReactNode;
//   className?: string;
// }

// export function Button({ children, className = "", ...props }: ButtonProps) {
//   return (
//     <button
//       className={`px-4 py-2 rounded-lg font-medium transition duration-200 ${className}`}
//       {...props}
//     >
//       {children}
//     </button>
//   );
// }
