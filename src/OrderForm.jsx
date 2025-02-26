import React, { useState } from "react"; 
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div style={{
            width: "100%",
            maxWidth: "1920px",
            height: "207px",
            backgroundColor: "#CE2829",
            position: "absolute",
            top: "0",
            left: "50%",
            transform: "translateX(-50%)",
            borderBottom: "1px solid #C20608",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            fontFamily: "Barlow"
        }}>
            <header></header>
            <a>
                <img
                    src="../images/iteration-1-images/logo.svg"
                    alt="Logo"
                    style={{
                        width: "361.93px",
                        height: "45.79px",
                        marginTop: "20px",
                    }}
                />
            </a>
            <div style={{
                display: 'flex',
                gap: '20px',
                marginTop: '10px',
            }}>
                <Link to="" style={{
                    textDecoration: "none",
                    color: "#FAF7F2",
                    fontSize: "18px",
                    fontWeight: "bold",
                }}>
                    Anasayfa
                </Link>
                <p style={{
                    color: "#FFFFFF",
                    fontSize: "18px",
                    fontWeight: "bold",
                    margin: 0,
                }}>
                    Sipariş Oluştur
                </p>
            </div>
        </div>
    );
};

const ContentBox = () => {
    const [selectedSize, setSelectedSize] = useState("small");
    const [selectedDough, setSelectedDough] = useState(""); // Hamur seçimi için durum
    const doughOptions = ["İnce Hamur", "Normal Hamur"]; // Hamur seçenekleri

    const handleSizeChange = (event) => {
        setSelectedSize(event.target.value);
    };

    const handleDoughChange = (event) => {
        setSelectedDough(event.target.value);
    };

    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            width: "532px",
            height: "auto",
            position: "absolute",
            top: "207px",
            left: "50%",
            transform: "translateX(-50%)",
            backgroundColor: "#F5F5DC", // burası silinicek ...
            padding: "20px",
            marginTop: "50px",
        }}>
            <h1 style={{
                color: "#292929",
                flexDirection: "column",
                height: "56px",
                width: "100%",
                textAlign: "left",
                display: "block",
                margin: "0",
                padding: "0",
                fontSize: "22px"
            }}>
                Position Absolute Acı Pizza
            </h1>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <h2 style={{ fontSize: "28px", color: "#292929", display: "flex" }}>85.50₺</h2>
                <div style={{ fontSize: "16px", display: "flex", gap: "50px", marginTop: "30px" }}>
                    <p>4.9</p>
                    <p>(200)</p>
                </div>
            </div>
            <p style={{ textAlign: "left", width: "100%" }}>
                Frontent Dev olarak hala position:absolute kullanıyorsan bu çok acı pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli lezzetli bir yemektir. Küçük bir pizzaya bazen pizzetta denir.
            </p>

            {/* Boyut Seçme Kısmı */}
            <div style={{ display: "flex", justifyContent: "space-between", marginTop: "50px" }}>
                <h3 style={{ display: "flex", flexDirection: "column", color: "#292929", fontSize: "20px" }}>Boyut Seç</h3>
                <div style={{ display: "flex", flexDirection: "column" }}>
                    <label style={{ margin: "5px 0", fontSize: "16px", color: "#5F5F5F" }}>
                        <input
                            type="radio" // tek seçeneğin işaretlenmesi için
                            value="small" // değerin güncellendiği kısım
                            checked={selectedSize === "small"} // seçileni gösteren yer
                            onChange={handleSizeChange} // butona bağlı değişen fonksiyonumuz
                            style={{ marginRight: "10px" }}
                        />
                        Küçük
                    </label>
                    <label style={{ margin: "5px 0", fontSize: "16px", color: "#5F5F5F" }}>
                        <input
                            type="radio"
                            value="medium"
                            checked={selectedSize === "medium"}
                            onChange={handleSizeChange}
                            style={{ marginRight: "10px" }}
                        />
                        Orta
                    </label>
                    <label style={{ margin: "5px 0", fontSize: "16px", color: "#5F5F5F" }}>
                        <input
                            type="radio"
                            value="large"
                            checked={selectedSize === "large"}
                            onChange={handleSizeChange}
                            style={{ marginRight: "10px" }}
                        />
                        Büyük
                    </label>
                </div>
                {/* Hamur Seçimi Dropdown menüsü */} 
                <div>
                    <h3>Hamur Seç:</h3> 
                    <select value={selectedDough} onChange={handleDoughChange} style={{ padding: "10px", fontSize: "16px", borderRadius: "5px", border: "1px solid #ccc" }}>
                        <option value="" disabled>Hamur Kalınlığını Seç</option>
                        {doughOptions.map((option, index) => ( //burda döngüye alma ve etiket oluşturma kısmı var ve yeniz dizi oluşturma
                            <option key={index} value={option}>{option}</option> // index anahtar 
                        ))}
                    </select>
                </div>
            </div>
        </div>
    );
};

const App = () => {
    return (
        <>
            <Header />
            <ContentBox />
        </>
    );
};

export default App;
