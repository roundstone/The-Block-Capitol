import { useEffect, useState } from "react";
import React from "react";
import { motion } from "framer-motion";
import ComingSoon from "../modal/coming-soon";

interface ButtonProps {
  text: string;
  variant: "primary" | "secondary" | "light";
  className?: string;
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({
  text,
  variant,
  className,
  ...props
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    // Any side effects can be handled here if needed
  }, [isModalOpen]);

  const baseStyle =
    "px-6 py-3 text-white font-medium rounded-xl transition-all duration-300 border-b-4 border-[#FEDA02] mb-1 min-w-[275.33px] !h-[54px]";
  const styles = {
    primary: "bg-primary hover:bg-secondary",
    secondary: "bg-dark hover:bg-gray-800",
    light: "bg-[#E5E5E5] !text-dark hover:bg-gray-100",
  };

  return (
    <>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`${baseStyle} ${styles[variant]} ${className}`}
        onClick={() => setIsModalOpen(!isModalOpen)}
        {...props}
      >
        {text}
      </motion.button>

      {isModalOpen && (
        <ComingSoon isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      )}
    </>
  );
};
