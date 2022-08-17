import React, { useState } from "react";

function RandomEmoji() {
  const [emoji, setEmoji] = useState("❔");
  const [disable, setDisable] = useState(false)

  const emojis = [
    "😀", "😁", "😂",
    "🤣", "😃", "😄",
    "😅", "😆", "😉",
    "😊", "😋", "😎",
    "😍", "😘", "😗",
    "😙", "😚", "🙂",
    "🤗", "🤩", "🤔",
    "🤨", "😐", "😑",
    "😶", "🙄", "😏",
    "😣", "😥", "😮",
    "🤐", "😯", "😪",
    "😫", "😴", "😌",
    "😛", "😜", "😝",
    "🤤", "😒", "😓",
    "😔", "😕", "🙃",
    "🤑", "😲", "🙁",
    "😟", "😤", "😭", 
    "😦", "😧", "😨", 
    "😩", "🤯", "😬",
    "😰", "😱", "😳",
    "🤪", "😵", "😡",
    "😠", "🤬", "😷",
    "🤒", "🤕", "🤢", 
    "🤮", "🤧", "😇",
    "🤠", "🤡", "🥳",
    "🥴", "🥺", "🤥",
    "🤫", "🤭", "🧐",
    "🤓", "😺", "😸",
    "😹", "😻", "😼",
    "😽", "🙀", "😿",
    "😖", "😞"
  ];

  const randomEmoji = () => {
    setEmoji(emojis[Math.floor(Math.random() * emojis.length)]);
  }

  const handleButton = () => {
    randomEmoji();
    setDisable(true);

    setTimeout(() => {
      setDisable(false);
      setEmoji("❔");
    }, 3000);
  }

  return (
    <div className="wrapper">
      <h2 className="title">What emoji suits you today?</h2>
      <button
        className="button"
        disabled={disable}
        onClick={() => handleButton()}
        style={
          disable
            ? { backgroundColor: "#d1d5db", color: "black" }
            : { backgroundColor: "#a855f7" }
        }
      >
        {disable ? "Emoji ini cocok" : "Pilih Emoji"}
      </button>
      <h1 className="emoji">{emoji}</h1>
    </div>
  );
}

export default RandomEmoji;