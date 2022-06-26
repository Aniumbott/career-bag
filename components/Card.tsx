import { Card, Image, Text } from "@mantine/core";

function Carad(props: any) {
  const city = props.link;
  //   const links = props.links[1];
  console.log(city);
  return (
    <div>
      <Card shadow="sm" p="xl" component="a" href={city[1]} target="_blank">
        <Card.Section>
          <Image
            src={`https://logo.clearbit.com/${city[1]}`}
            height={100}
            width={100}
            alt="Nahi Mila 🙄"
          />
        </Card.Section>

        <Text weight={500} size="lg">
          {city[0]}
        </Text>
      </Card>
    </div>
  );
}

export default Carad;
