import React, { useState } from "react";
import { Image } from "@mantine/core";
import "./Do.css";

function Utils({ data }) {
  return (
    <div>
      {data?.map((item, id) => (
        <TextItem key={id} item={item} />
      ))}
    </div>
  );
}

function TextItem({ item }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="Container">
      <Image className="Doimage" src={item.image} width={500} height={400} />
      <div className="DoText">
        <h4 className="heading">{item.heading}</h4>
        <p>
          {isExpanded ? item.text : `${item.text.slice(0, 505)}...`}
          <p  onClick={handleToggle} className="see-more-btn">
            {isExpanded ? "See less" : "See more"}
          </p>
        </p>
      </div>
    </div>
  );
}

export default Utils;
