 {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: Arial, sans-serif;
    line-height: 1.6;
    background-color: #f5f5f5;
    color: #333;
    padding: 20px;
}

/* Estilos para o cabeçalho principal */
header {
    text-align: center;
    margin-bottom: 20px;
}

.titulo-estilizado {
    font-size: 2em;
    color: #0056b3;
    font-weight: bold;
}

.segundo-titulo {
    font-size: 1.5em;
    color: #333;
    font-style: italic;
    margin-top: 20px;
}

/* Seção "Sobre mim" */
section {
    margin-bottom: 20px;
}

section h2 {
    font-size: 1.8em;
    color: #0056b3;
    margin-bottom: 10px;
}

/* Estilo para a galeria de imagens */
.galeria {
    display: flex;
    justify-content: space-around;
    list-style: none;
    margin-top: 15px;
}

.galeria li {
    width: 30%;
}

.galeria img {
    width: 100%;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    transition: transform 0.3s;
}

.galeria img:hover {
    transform: scale(1.05);
}

/* Rodapé */
footer {
    text-align: center;
    font-size: 0.9em;
    color: #555;
    margin-top: 30px;
    border-top: 1px solid #ddd;
    padding-top: 10px;
}
