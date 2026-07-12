/* ===========================
   NOVA v1.0
   Powered by FlowPilott
=========================== */

*{
    margin:0;
    padding:0;
    box-sizing:border-box;
}

body{
    font-family:'Poppins',sans-serif;
    background:#060b16;
    color:#ffffff;
    overflow:hidden;
    min-height:100vh;
}

/* Animated Background */

.background{
    position:fixed;
    inset:0;
    background:
        radial-gradient(circle at top,#173a72 0%,transparent 45%),
        radial-gradient(circle at bottom right,#3d1d72 0%,transparent 35%),
        #060b16;
    animation:bgMove 8s ease-in-out infinite alternate;
}

@keyframes bgMove{
    from{
        transform:scale(1);
    }
    to{
        transform:scale(1.08);
    }
}

/* Center */

.hero{
    position:relative;
    height:100vh;
    display:flex;
    justify-content:center;
    align-items:center;
    padding:20px;
}

/* Glass Card */

.glass-card{

    width:100%;
    max-width:500px;

    padding:45px 35px;

    border-radius:28px;

    background:rgba(255,255,255,.08);

    border:1px solid rgba(255,255,255,.15);

    backdrop-filter:blur(18px);

    text-align:center;

    box-shadow:
    0 0 30px rgba(0,180,255,.18);

}

.version{

    color:#6bc8ff;

    font-size:13px;

    letter-spacing:3px;

    margin-bottom:20px;

}

h1{

    font-family:'Orbitron',sans-serif;

    font-size:58px;

    color:#ffffff;

}

h2{

    margin-top:10px;

    color:#9fd7ff;

    font-weight:500;

}

.description{

    margin-top:25px;

    line-height:1.7;

    color:#d8e7ff;

}

/* Status */

.status{

    margin:30px 0;
