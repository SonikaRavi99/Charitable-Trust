import { Button, Image, Text } from "@mantine/core";
import "./Card.css";

function Cards({ data }) {
  return data?.map((item) => {
    return (
      <div className="box" key={item.id}>
        <Image
          className="card-image"
          src={item.image}
          alt={item.eventName}
          width={320}
          height={200}
        />
          <h2 fw={700}>
            {item.eventName}
          </h2>{" "}
          <hr />
          <Text size="xs" fw={500}>{item.description}</Text>
          <Text size="xs" fw={500}> Date & Time:{item.time}</Text>
          <Text size="xs" fw={500}>Venue:{item.place}</Text>
      </div>
    );
  });
}
export default Cards;
