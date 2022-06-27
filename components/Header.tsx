import Image from "next/image";
import { Text } from "@mantine/core";
import ThemeToggle from "./ThemeToggle";
import logo from "../public/images/logo.png";
import GithubCorner from "react-github-corner";
export default function Header(props: any) {
  const { colorScheme, toggleColorScheme } = props;
  return (
    <div>
      <style>
        {`
        .title{
            padding:  1rem 3rem 1rem 1rem;
            // padding-right: 0.5rem;
            background: #6930c3;
            color: white;
            border-radius: 0 50px 50px 0;
        }
        .header{
          width: 100%;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: flex-start;
        }
        `}
      </style>
      <GithubCorner href="#" />
      <div className="header">
        <h1 className="title">
          CAREER BAG <span>🎒</span>
        </h1>
      </div>
      <ThemeToggle
        colorScheme={colorScheme}
        toggleColorScheme={toggleColorScheme}
      />
    </div>
  );
}
