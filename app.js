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
            font-family: 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
        }

        :root {
            --verde-oscuro: #0f4d2c;
            --verde-medio: #1a6e42;
            --verde-claro: #2ecc71;
            --amarillo: #f5b02e;
            --crema: #f8faf5;
            --texto: #2d3748;
        }

        body {
            background: var(--crema);
            color: var(--texto);
            line-height: 1.6;
        }

        /* Navegación */
        nav {
            background: white;
            padding: 1rem 5%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            box-shadow: 0 2px 10px rgba(0,0,0,0.05);
            position: sticky;
            top: 0;
            z-index: 100;
        }

        .logo {
            font-size: 1.5rem;
            font-weight: 700;
            color: var(--verde-oscuro);
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }

        .nav-links a {
            color: var(--texto);
            text-decoration: none;
            margin-left: 2rem;
            font-weight: 500;
            transition: color 0.3s;
        }

        .nav-links a:hover {
            color: var(--verde-medio);
        }

        /* Hero / Portada */
        .hero {
            margin: 2rem 5%;
            border-radius: 20px;
            background: linear-gradient(rgba(15, 77, 44, 0.85), rgba(15, 77, 44, 0.9)),
                        url('https://images.unsplash.com/photo-1542838132-92c53300491e?w=1600&q=80') no-repeat center center;
            background-size: cover;
            padding: 4rem 3rem;
            color: white;
            display: flex;
            flex-direction: column;
            max-width: 100%;
        }

        .hero h1 {
            font-size: 2.8rem;
            line-height: 1.2;
            margin-bottom: 1.5rem;
            max-width: 500px;
        }

        .hero p {
            font-size: 1.1rem;
            margin-bottom: 2rem;
            max-width: 400px;
            opacity: 0.9;
        }

        .btn {
            background: var(--amarillo);
            color: #2d2d2d;
            padding: 0.9rem 2rem;
            border-radius: 10px;
            text-decoration: none;
            font-weight: 700;
            width: fit-content;
            transition: transform 0.3s, box-shadow 0.3s;
        }

        .btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 20px rgba(245, 176, 46, 0.3);
        }

        /* Categorías */
        .categorias {
            margin: 4rem 5%;
        }

        .categorias h2 {
            font-size: 1.8rem;
            margin-bottom: 0.5rem;
            color: var(--texto);
        }

        .subtitulo {
            color: #718096;
            margin-bottom: 2rem;
        }

        .grid-categorias {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 1.5rem;
        }

        .categoria-card {
            background: white;
            padding: 2rem;
            border-radius: 15px;
            text-align: center;
            box-shadow: 0 4px 15px rgba(0,0,0,0.05);
            transition: transform 0.3s;
            cursor: pointer;
        }

        .categoria-card:hover {
            transform: translateY(-5px);
        }

        .categoria-icon {
            font-size: 2rem;
            margin-bottom: 0.8rem;
        }

        /* Productos destacados */
        .productos {
            margin: 0 5% 5rem;
        }

        .productos h2 {
            font-size: 1.8rem;
            margin-bottom: 0.5rem;
        }

        .grid-productos {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 1.5rem;
            margin-top: 2rem;
        }

        .producto-card {
            background: white;
            border-radius: 15px;
            overflow: hidden;
            box-shadow: 0 4px 15px rgba(0,0,0,0.05);
            transition: transform 0.3s;
        }

        .producto-card:hover {
            transform: translateY(-5px);
        }

        .producto-img {
            height: 180px;
            background-size: cover;
            background-position: center;
        }

        .producto-info {
            padding: 1.2rem;
        }

        .version-badge {
            display: inline-block;
            margin-top: 2rem;
            padding: 0.5rem 1.2rem;
            background: var(--verde-claro);
            color: white;
            border-radius: 30px;
            font-weight: 600;
            font-size: 0.9rem;
        }

        /* Responsivo */
        @media (max-width: 768px) {
            .nav-links { display: none; }
            .hero h1 { font-size: 2rem; }
        }
    </style>
</head>
<body>

    <!-- Navegación -->
    <nav>
        <div class="logo">🌿 Andina Market</div>
        <div class="nav-links">
            <a href="#">Inicio</a>
            <a href="#">Categorías</a>
            <a href="#">Productos</a>
        </div>
    </nav>

    <!-- Portada Principal -->
    <section class="hero">
        <h1>Todo lo que necesitas, en un solo lugar</h1>
        <p>Encuentra productos frescos, alimentos y artículos de calidad para tu hogar. ¡Compra fácil y rápido!</p>
        <a href="#" class="btn">Explorar productos →</a>
    </section>

    <!-- Categorías -->
    <section class="categorias">
        <h2>Nuestras categorías</h2>
        <p class="subtitulo">Encuentra lo que buscas fácilmente.</p>
        <div class="grid-categorias">
            <div class="categoria-card">
                <div class="categoria-icon">🥬</div>
                <h3>Frutas y verduras</h3>
            </div>
            <div class="categoria-card">
                <div class="categoria-icon">🥛</div>
                <h3>Lácteos</h3>
            </div>
            <div class="categoria-card">
                <div class="categoria-icon">🥩</div>
                <h3>Carnes</h3>
            </div>
            <div class="categoria-card">
                <div class="categoria-icon">🛒</div>
                <h3>Abarrotes</h3>
            </div>
        </div>
    </section>

    <!-- Productos Destacados -->
    <section class="productos">
        <h2>Productos destacados</h2>
        <p class="subtitulo">Algunos de nuestros productos favoritos.</p>
        <div class="grid-productos">
            <div class="producto-card">
                <div class="producto-img" style="background-image: url('https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=400&q=80')"></div>
                <div class="producto-info">
                    <h3>Manzanas Rojas</h3>
                    <p>Deliciosas y frescas</p>
                </div>
            </div>
            <div class="producto-card">
                <div class="producto-img" style="background-image: url('https://images.unsplash.com/photo-1540420773420-3366772f4999?w=400&q=80')"></div>
                <div class="producto-info">
                    <h3>Verduras Mixtas</h3>
                    <p>Recién cosechadas</p>
                </div>
            </div>
            <div class="producto-card">
                <div class="producto-img" style="background-image: url('https://images.unsplash.com/photo-1543923016-f8904a57d44d?w=400&q=80')"></div>
                <div class="producto-info">
                    <h3>Leche de Vaca</h3>
                    <p>Natural y fresca</p>
                </div>
            </div>
            <div class="producto-card">
                <div class="producto-img" style="background-image: url('https://images.unsplash.com/photo-1551028150-64b9f398f678?w=400&q=80')"></div>
                <div class="producto-info">
                    <h3>Carnes Selectas</h3>
                    <p>De la mejor calidad</p>
                </div>
            </div>
        </div>
        <center><span class="version-badge">Versión ${VERSION} — Desplegado desde GitHub ✅</span></center>
    </section>

</body>
</html>
`;

http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end(html);
}).listen(3000, '0.0.0.0');

