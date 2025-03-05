import { motion, AnimatePresence } from "framer-motion";
import { Button } from "../form/button";
import React from "react";

interface ComingSoonProps {
  isModalOpen: boolean;
  setIsModalOpen: (isOpen: boolean) => void;
}

const ComingSoon: React.FC<ComingSoonProps> = ({
  isModalOpen,
  setIsModalOpen,
}) => {
  return (
    <AnimatePresence>
      {isModalOpen && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center bg-opacity-50 backdrop-blur-sm z-30"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsModalOpen(false)}
        >
          <motion.div
            className="bg-white rounded-xl p-6 shadow-xl text-center"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 50, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-xl font-semibold text-gray-800">Coming Soon</h2>
            <p className="mt-2 text-gray-600">Stay tuned for updates!</p>
            <div className="mt-4">
              <Button
                text="Close"
                variant="secondary"
                // className="mt-4"
                onClick={() => setIsModalOpen(false)}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ComingSoon;
