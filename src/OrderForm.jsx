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
    const [selectedSize, setSelectedSize] = useState("");
    const [selectedDough, setSelectedDough] = useState("");
    const doughOptions = ["İnce Hamur", "Normal Hamur"];

    // Boyut değişimi
    const handleSizeChange = (event) => {
        setSelectedSize(event.target.value);
    };

    // Hamur değişimi
    const handleDoughChange = (event) => {
        setSelectedDough(event.target.value);
    };

    // Malzeme seçimi
    const toppings = [
        "Pepperoni", "Sosis", "Kanada Jambonu", "Tavuk Izgara",
        "Soğan", "Domates", "Mısır", "Sucuk", "Jalepeno",
        "Sarımsak", "Biber", "Ananas", "Kabak"
    ];

    const [selectedToppings, setSelectedToppings] = useState([
        "Pepperoni", "Sosis", "Mısır", "Jalepeno", "Ananas"
    ]);

    const handleToppingChange = (topping) => {
        if (selectedToppings.includes(topping)) {
            setSelectedToppings(selectedToppings.filter(item => item !== topping));
        } else if (selectedToppings.length < 10) {
            setSelectedToppings([...selectedToppings, topping]);
        }
    };

    // Sayı arttırma
    const [count, setCount] = useState(1);
    const increase = () => setCount(count + 1);
    const decrease = () => {
        if (count > 1) setCount(count - 1);
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
            backgroundColor: "#F5F5DC",
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
            <div style={{ display: "flex", justifyContent: "space-between", marginTop: "20px" }}>
                <div style={{ display: "flex", flexDirection: "column" }}>
                    <h3 style={{ display: "flex", color: "#292929", fontSize: "20px" }}>Boyut Seç</h3>
                    <label style={{ margin: "5px 0", fontSize: "16px", color: "#5F5F5F" }}>
                        <input
                            type="radio"
                            value="small"
                            checked={selectedSize === "small"}
                            onChange={handleSizeChange}
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
                    <select value={selectedDough} onChange={handleDoughChange} style={{ padding: "10px", fontSize: "12px", borderRadius: "3px", border: "1px solid #ccc" }}>
                        <option value="" disabled>Hamur Kalınlığını Seç</option>
                        {doughOptions.map((option, index) => (
                            <option key={index} value={option}>{option}</option>
                        ))}
                    </select>
                </div>
            </div>

            <div style={{ display: "flex", paddingTop: "20px", flexDirection: "column", textAlign: "left" }}>
                {/* Ek Malzemeler */}
                <h3 style={{ fontSize: "20px", color: "#292929" }}>Ek Malzemeler</h3>
                <p style={{ fontSize: "16px", color: "#5F5F5F" }}>En fazla 10 malzeme seçebilirsiniz.</p>
                <div style={{}}>
                    {toppings.map((topping) => (
                        <label key={topping} style={{ fontSize: "16px", color: "#5F5F5F", margin: "10px", display: "inline-flex", gap: "13px", width: "29%" }}>
                            <input
                                type="checkbox"
                                checked={selectedToppings.includes(topping)}
                                onChange={() => handleToppingChange(topping)}
                                style={{}}
                            />
                            {topping}
                        </label>
                    ))}
                </div>
            </div>

            <div style={{ marginTop: "20px", textAlign: "left", width: "96%" }}>
                <label htmlFor="orderNote" style={{ fontSize: "20px", color: "#292929", fontWeight: "bold" }}>
                    Sipariş Notu
                </label>
                <textarea
                    id="orderNote"
                    placeholder="Siparişine eklemek istediğin bir not var mı?"
                    style={{
                        width: "100%",
                        height: "56px",
                        padding: "10px",
                        fontSize: "14px",
                        border: "1px solid #D9D9D9",
                        borderRadius: "6px",
                        marginTop: "10px",
                        resize: "none",
                        color: "#5F5F5F"
                    }}
                />
            </div>

            <hr style={{ border: "1px solid #5F5F5F80", margin: "20px 0", width: "100%" }} />
            
            {/* Sayı artırma azaltma */}
                <div style={{justifyContent:"space-between"}}>
                    <div style={{ marginTop: "20px", textAlign: "left",  }}>
                        <h3 style={{ fontSize: "20px", color: "#292929", fontWeight: "bold", }}>Adet</h3>
                        <div style={{ display: "flex", alignItems: "center" }}>
                            <button
                                onClick={decrease}
                                style={{
                                    backgroundColor: "#FDC913",
                                    border: "1px solid  #FDC913 ",
                                    padding: "5px 10px",
                                    fontSize: "16px",
                                    cursor: "pointer",
                                    
                                }}
                            >
                                -
                            </button>
                            <span style={{
                                    border: "1px solid #D9D9D9",
                                    padding: "3px 12px",
                                    fontSize: "16px",
                                    borderRadius:"7px"
                                
                             }}>
                                {count}
                            </span>
                            <button
                                onClick={increase}
                                style={{
                                    backgroundColor: "#FDC913",
                                    border: "1px solid #FDC913 ",
                                    padding: "5px 10px",
                                    fontSize: "16px",
                                    cursor: "pointer"
                                }}
                            >
                                +
                            </button>
                        </div>
                    </div> 
                    <div>  
                    // sipariş toplama bölümü buraya gelicek
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
