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
        h2{
            padding-left: 1rem;
            padding-right: 0.5rem;
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
        <h2>CAREER BAG</h2>
        <Image width={30} height={30} src={logo} />
      </div>
      <ThemeToggle
        colorScheme={colorScheme}
        toggleColorScheme={toggleColorScheme}
      />
    </div>
  );
}
