import { FC, useState } from "react";
import { useQuery } from "react-query";
import axios from "axios";

import { FcLikePlaceholder } from "react-icons/fc";

import "./home.css";
import Posts from "./Posts";

const fetchUsers = async () => {
  const res = await axios.get("https://dummyapi.io/data/v1/post", {
    headers: {
      "app-id": "6369186c4bd24b0cf83c8e20",
      "access-control-allow-origin": "*",
    },
  });
  return res;
};

const Home: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { data, isLoading } = useQuery("users", fetchUsers);
  const [modalData, setModalData] = useState<any>(null);
  if (isLoading) {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "80vh",
          fontWeight: "bolder",
          fontSize: "2rem",
        }}
      >
        Loading...
      </div>
    );
  }
  const handleClick = () => {
    setIsOpen(true);
  };
  return (
    <>
      <div className="container">
        {data?.data.data.map((item: any) => (
          <div key={item.id} className="imgContainer">
            <img
              src={item.image}
              className="image"
              onClick={() => {
                setIsOpen(true);
                setModalData(item);
              }}
            />
            <div className="childContainer">
              <FcLikePlaceholder fontSize="2rem" />
              <p>{item.likes}</p>
            </div>
          </div>
        ))}
      </div>
      {isOpen && (
        <Posts
          setIsOpen={setIsOpen}
          firstName={modalData.owner.firstName}
          lastName={modalData.owner.lastName}
          image={modalData.image}
          avatarImg={modalData.owner.picture}
          desc={modalData.text}
          tags={modalData.tags}
        />
      )}
    </>
  );
};

export default Home;
