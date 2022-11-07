import React, { FC } from "react";
import "./post.css";

interface Props {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  firstName: string;
  lastName: string;
  image: string;
  avatarImg: string;
  desc: string;
  tags: string[];
}

const Posts: FC<Props> = ({
  setIsOpen,
  firstName,
  lastName,
  image,
  avatarImg,
  desc,
  tags,
}) => {
  return (
    <div className="container">
      <div className="centered">
        <button className="buttonStyles" onClick={() => setIsOpen(false)}>
          x
        </button>

        <img className="postImg" src={image} alt="" />

        <div className="headingDiv">
          <img src={avatarImg} alt="" />
          <h3>
            {firstName} <span> {lastName}</span>
          </h3>
        </div>

        <div className="footerDiv">
          <p>Tags : {tags.map((item) => "#" + item + " ")}</p>
          <p>{desc}</p>
        </div>
      </div>
    </div>
  );
};

export default Posts;
