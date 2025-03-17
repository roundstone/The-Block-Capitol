import { motion, useInView } from "framer-motion";
import { Button } from "../form/button";
import React, { useRef } from "react";
import { useIsInView } from "../../hooks/use-inview";

const BlockchainCourses = () => {
  const ref = useRef(null);
  const isInView = useIsInView(ref);

  return (
    <section ref={ref} className="bg-[#FCF2E8] py-16 px-6 md:px-12 ">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-5xl font-bold text-gray-900"
        >
          Structured{" "}
          <motion.em className="text-[#F05432]">Blockchain</motion.em> Courses
          Designed For Developers, By Developers.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="mt-4 text-gray-700 text-lg"
        >
          With our 4-month program, learn how to create decentralized protocols,
          dApps, and smart contracts.
        </motion.p>
      </div>

      <div className="hidden md:grid md:grid-cols-2 gap-8 mt-12 max-w-5xl mx-auto">
        {courses.map((course, index) => (
            <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            className={`relative flex flex-col gap-5 p-5 max-sm:flex-col max-sm:p-4 ${
              index === 1 || index === 5
                ? "bg-[url(/src/assets/vector-long-curve.png)] max-md:bg-none bg-no-repeat bg-contain bg-right "
                : ""
            } ${
              index === 2
                ? "bg-[url(/src/assets/vector-short-curv.png)] max-md:bg-none bg-no-repeat bg-contain bg-left "
                : ""
            } ${
              index === 0 || index === 4
                ? "bg-[url(/src/assets/long-arrow.png)] max-md:bg-none bg-no-repeat bg-top bg-[length:80%]"
                : ""
            } ${
              index === 20 || index === 6
                ? "bg-[url(/src/assets/long-arrow-left.png)] max-md:bg-none bg-no-repeat bg-top bg-[length:80%]"
                : ""
            } `}
          >
            <div
              className="absolute max-md:hidden -top-1  w-5 h-5 bg-orange-600 hexagon"
              aria-hidden="true"
            />
            <div>
              <h3 className="max-md:hidden mb-4 text-2xl font-medium max-sm:text-xl text-[#FF6B4A]">
                {course.title}
              </h3>

              <div className="hidden max-md:flex items-center gap-2">
                <div
                  className="w-5 h-5 bg-orange-600 hexagon"
                  aria-hidden="true"
                />
                <h3 className="text-2xl font-medium max-sm:text-xl text-[#FF6B4A]">
                  {course.title}
                </h3>
              </div>
              <p className="text-base font-light leading-normal text-gray-800">
                {course.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="md:hidden grid md:grid-cols-2 gap-8 mt-12 max-w-5xl mx-auto">
        {courses.map((course, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            
          >
            <div className="">
              <h3 className="max-md:hidden mb-4 text-2xl font-medium max-sm:text-xl text-[#FF6B4A]">
                {course.title}
              </h3>

              <div className="flex flex-col">
                <div className="flex items-center  gap-3">
                  <div>
                    <div
                      className="w-5 h-5 bg-primary hexagon"
                      aria-hidden="true"
                    />
                  </div>
                  <h3 className="text-2xl font-medium max-sm:text-xl text-primary">
                    {course.title}
                  </h3>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-it mx-auto pl-1">
                    <img src="/src/assets/arrow-down.png" className="h-full w-3" alt="" />
                  </div>
                  <div className="w-full ml-1">
                    <p className="text-base font-light leading-normal text-[#818284]">
                      {course.description}
                    </p>
                  </div>
                </div>
                
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ scale: 0.9 }}
        animate={isInView ? { scale: 1 } : {}}
        transition={{ duration: 0.5 }}
        className="mt-12 text-center w-full"
      >
        <Button text="Join Cohort" variant="primary"className="max-md:w-full" />
      </motion.div>
    </section>
  );
};

const courses = [
  {
    title: "Blockchain Fundamentals",
    description:
      "Begin with blockchain technology concepts. Learn what blockchain is, how it works, and its diverse applications beyond cryptocurrency, including DeFi and NFTs. Understand the different types of blockchains and their unique characteristics.",
  },
  {
    title: "Wallets, Nodes, and Cryptography",
    description:
      "Master the essentials of blockchain infrastructure. Learn about different types of wallets, how to set them up, and the role of public and private keys. Understand the function of nodes in a blockchain network and explore the cryptographic principles, like ECDSA, that secure transactions.",
  },
  {
    title: "Ethereum Tokens (ERC-20 & ERC-721)",
    description:
      "Delve into the world of Ethereum tokens. Understand the difference between fungible (ERC-20) and non-fungible (NFTs - ERC-721) tokens. Create, test, and deploy your own ERC-20 and ERC-721 tokens using OpenZeppelin, a powerful library for smart contract development.",
  },
  {
    title: "Ethereum Virtual Machine (EVM) and Solidity",
    description:
      "Explore the engine of Ethereum, the EVM. Understand how it executes smart contracts and the concept of gas. Learn Solidity, the programming language of Ethereum, and build your first smart contracts using development tools like Hardhat and Remix.",
  },
  {
    title: "Smart Contract Testing and Deployment",
    description:
      "Learn the best practices for developing secure and reliable smart contracts. Master testing methodologies using Hardhat and Foundry to ensure your contracts function as intended. Deploy your contracts to test networks and prepare them for real-world use.",
  },
  {
    title: "Decentralized Applications (DApps) and Web3",
    description:
      "Build your first decentralized application (DApp). Connect your frontend to your smart contracts using Web3.js, Ethers.js, and Wagmi React hooks. Learn how to interact with contract functions and execute transactions from your DApp's interface.",
  },
  {
    title: "Advanced Smart Contract Development and Security",
    description:
      "Get details on advanced topics, including upgradable smart contracts using proxy patterns and the Diamond Standard. Learn about common smart contract vulnerabilities and best practices for writing secure code. Explore Ethereum Layer-2 scaling solutions and cross-chain interoperability. Culminate your learning with a capstone project",
  },
  {
    title: "Blockchain Oracles and Data Indexing",
    description:
      "Acquaint yourself with the role of oracles in bridging the gap between blockchains and the real world. Learn about Chainlink and how to integrate price feeds into your DApps. Understand data indexing with The Graph and how to efficiently query on-chain data.",
  },
];

export default BlockchainCourses;
