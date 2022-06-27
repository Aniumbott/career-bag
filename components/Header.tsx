import ThemeToggle from "./ThemeToggle";
export default function Header(props: any) {
  const { colorScheme, toggleColorScheme } = props;
  return (
    <div>
      <style>
        {`
        .title{
          width: fit-content;
            padding:  1rem 3rem 1rem 1rem;
            background: #6930c3;
            color: white;
            border-radius: 0 0 50px 0;
            margin:0;
            margin-bottom:3rem;
        }
        `}
      </style>
      <h1 className="title">
        <a href="https://career-bag.vercel.app/">CAREER BAG</a>
      </h1>
      <ThemeToggle
        colorScheme={colorScheme}
        toggleColorScheme={toggleColorScheme}
      />
    </div>
  );
}
