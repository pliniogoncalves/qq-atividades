const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    password: 'postgres',
    port: 5432,
});

//Realizando Consulta em Clientes
async function getClientes() {
    try {
        const client = await pool.connect();
        console.log('Conexão realizada com sucesso!');

        const res = await client.query('SELECT * from postgres."Loja-ABC".cliente');
        console.log('Clientes:', res.rows);

        client.release();
    } catch(err) {
        console.error('Erro ao executar a consulta', err);
    }
}

getClientes();

//Realizando consulta em Categoria
async function getCategorias() {
    try {
        const client = await pool.connect();
        console.log('Conexão realizada com sucesso!');
   
        const res = await client.query('SELECT * from postgres."Loja-ABC".categoria');
        console.log('Categorias:', res.rows);

        client.release();
    } catch(err) {
        console.error('Erro ao executar a consulta', err);
    }  
}

getCategorias();

//Realizando uma consulta em qualquer tabela 
async function consultaTabela(nomeTabela) {
    try {
        const client = await pool.connect();
        console.log('Conexão realizada com sucesso!');

        const res = await client.query(`SELECT * from postgres."Loja-ABC".${nomeTabela}`);
        console.log(`${nomeTabela}:`, res.rows);

        client.release();
    } catch(err) {
        console.error('Erro ao executar a consulta', err);
    }
}

consultaTabela('item_pedido_venda');
consultaTabela('pedido');
consultaTabela('produto');
consultaTabela('vendedor');