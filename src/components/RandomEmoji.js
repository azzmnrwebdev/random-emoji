import React, { useState } from "react";

function RandomEmoji() {
  const [emoji, setEmoji] = useState("โ");
  const [disable, setDisable] = useState(false)

  const emojis = [
    "๐", "๐", "๐",
    "๐คฃ", "๐", "๐",
    "๐", "๐", "๐",
    "๐", "๐", "๐",
    "๐", "๐", "๐",
    "๐", "๐", "๐",
    "๐ค", "๐คฉ", "๐ค",
    "๐คจ", "๐", "๐",
    "๐ถ", "๐", "๐",
    "๐ฃ", "๐ฅ", "๐ฎ",
    "๐ค", "๐ฏ", "๐ช",
    "๐ซ", "๐ด", "๐",
    "๐", "๐", "๐",
    "๐คค", "๐", "๐",
    "๐", "๐", "๐",
    "๐ค", "๐ฒ", "๐",
    "๐", "๐ค", "๐ญ", 
    "๐ฆ", "๐ง", "๐จ", 
    "๐ฉ", "๐คฏ", "๐ฌ",
    "๐ฐ", "๐ฑ", "๐ณ",
    "๐คช", "๐ต", "๐ก",
    "๐ ", "๐คฌ", "๐ท",
    "๐ค", "๐ค", "๐คข", 
    "๐คฎ", "๐คง", "๐",
    "๐ค ", "๐คก", "๐ฅณ",
    "๐ฅด", "๐ฅบ", "๐คฅ",
    "๐คซ", "๐คญ", "๐ง",
    "๐ค", "๐บ", "๐ธ",
    "๐น", "๐ป", "๐ผ",
    "๐ฝ", "๐", "๐ฟ",
    "๐", "๐"
  ];

  const randomEmoji = () => {
    setEmoji(emojis[Math.floor(Math.random() * emojis.length)]);
  }

  const handleButton = () => {
    randomEmoji();
    setDisable(true);

    setTimeout(() => {
      setDisable(false);
      setEmoji("โ");
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