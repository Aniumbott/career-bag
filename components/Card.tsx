// Modules
import styled from "styled-components";
import { Image } from "@mantine/core";

// Main Function
function Carad(props: any) {
  const city = props.link;

  // Function to get the image url
  function linkToDSrc(l: string) {
    let sc = "https://logo.clearbit.com/";
    l = l.substring(8);
    let i = 0;
    while (i < l.length && l[i] != "/") i++;
    sc += l.substring(0, i);
    return sc;
  }

  return (
    <div>
      <a href={city[1]} target="_blank" rel="noreferrer">
        <Card>
          <div className="image-container">
            <Image className="image" src={linkToDSrc(city[1])} />
          </div>
          <p>{city[0]}</p>
        </Card>
      </a>
    </div>
  );
}

// Styled Components
const Card = styled.div`
  height: 12rem;
  width: 10rem;
  margin: 1rem;
  background: white;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
  position: relative;
  transition: 0.2s ease;
  border: none;
  &:hover {
    box-shadow: 0px 0px 20px 0.1px #515151;
    transform: scale(1.05);
  }

  .image-container {
    height: 10rem;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    .image {
      padding: 0 0.3rem;
      border-radius: 10px;
      object-fit: cover;
      width: 100%;
    }
  }
  p {
    width: 100%;
    height: 2rem;
    position: absolute;
    bottom: 0;
    margin: 0;
    text-align: center;
    color: white;
    background: #6930c3;
  }
`;
export default Carad;
