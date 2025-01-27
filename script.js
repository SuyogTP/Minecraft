/* General Reset */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

/* Body Styling */
body {
    font-family: Arial, sans-serif;
    background-color: black;
    color: white;
    padding: 20px;
}

/* Floating Diamond Styling */
#floating-diamond {
    position: fixed;
    top: 20px; /* Position it at the top */
    left: 50%;
    transform: translateX(-50%);
    font-size: 3em; /* Initial size */
    animation: floating 2s ease-in-out infinite;
    z-index: 10;
}

/* Floating animation */
@keyframes floating {
    0% {
        transform: translateX(-50%) translateY(0);
    }
    50% {
        transform: translateX(-50%) translateY(-20px);
    }
    100% {
        transform: translateX(-50%) translateY(0);
    }
}

/* Header Styling */
header {
    text-align: center;
    margin-bottom: 40px;
}

header h1 {
    color: #00b0ff;
    font-size: 3em;
}

header p {
    color: white;
    font-size: 1.2em;
    margin-top: 10px;
}

/* Diamond Prices Section */
.diamond-prices h2 {
    color: #00b0ff;
    font-size: 2.5em;
    text-align: center;
    margin-bottom: 20px;
}

.diamond-prices ul {
    list-style-type: none;
    padding: 0;
}

.diamond-prices li {
    font-size: 1.5em;
    text-align: center;
    margin: 15px 0;
}

.diamond-amount {
    color: #00b0ff;
}

/* Special Offers Section */
.special-offers h2 {
    color: #00b0ff;
    font-size: 2.5em;
    text-align: center;
    margin-top: 40px;
}

.special-offers ul {
    list-style-type: none;
    padding: 0;
}

.special-offers li {
    font-size: 1.5em;
    text-align: center;
    margin: 15px 0;
}

.offer {
    color: #00b0ff;
}

/* Combo Pack Section */
.combo-pack h2 {
    color: #00b0ff;
    font-size: 2.5em;
    text-align: center;
    margin-top: 40px;
}

.combo-pack p {
    color: white;
    font-size: 1.8em;
    text-align: center;
}

.combo {
    color: #00b0ff;
}

/* Footer Styling */
footer {
    text-align: center;
    margin-top: 60px;
    font-size: 1.2em;
    color: white;
}
