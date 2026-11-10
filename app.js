const http = require('http');
const VERSION = '1.0';

const html = `
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Andina Market</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif;
        }

        body {
            min-height: 100vh;
            /* 🌄 Fondo con imagen + capa de color para legibilidad */
            background: 
                linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.6)),
                url('https://images.unsplash.com/photo-1503220317375-aaad61436b1b?w=1920&q=80') no-repeat center center fixed;
            background-size: cover;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 20px;
        }

        .card {
            background: rgba(255, 255, 255, 0.92);
            border-radius: 24px;
            padding: 50px 60px;
            box-shadow: 0 25px 70px rgba(0, 0, 0, 0.4);
            text-align: center;
            max-width: 520px;
            width: 100%;
            backdrop-filter: blur(8px);
            animation: aparecer 0.8s ease-out;
        }

        @keyframes aparecer {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }

        h1 {
            color: #1a202c;
            font-size: 2.6rem;
            margin-bottom: 12px;
        }

        .divisor {
            width: 80px;
            height: 4px;
            background: linear-gradient(90deg, #667eea, #764ba2);
            margin: 0 auto 25px;
            border-radius: 2px;
        }

        .version {
            display: inline-block;
            background: linear-gradient(90deg, #667eea, #764ba2);
            color: white;
            padding: 10px 28px;
            border-radius: 50px;
            font-weight: bold;
            font-size: 1.1rem;
            margin: 10px 0 25px;
            box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
        }

        p {
            color: #4a5568;
            font-size: 1.1rem;
            line-height: 1.8;
            margin-bottom: 10px;
        }

        .status {
            margin-top: 20px;
            font-size: 1rem;
            color: #2f855a;
            font-weight: 600;
        }

        .emoji {
            font-size: 1.4rem;
            vertical-align: middle;
        }
    </style>
</head>
<body>
    <div class="card">
        <h1>🏔️ Andina Market</h1>
        <div class="divisor"></div>
        <div class="version">Versión ${VERSION}</div>
        <p>Desplegado automáticamente desde GitHub</p>
        <p class="status"><span class="emoji">✅</span> Sistema funcionando correctamente</p>
    </div>
</body>
</html>
`;

http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end(html);
}).listen(3000, '0.0.0.0');
