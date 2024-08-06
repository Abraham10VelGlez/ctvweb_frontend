import React, { useEffect, useState } from 'react';
import { Routes, Route, useNavigate, Link } from 'react-router-dom';
import Box from './Box';



export default function Menu() {

    return (
        /*<Router>*/
        <Routes>
            <Route path="/" index element={<Box />} />
            <Route path="/me" element={<Box />} />
            <Route path="/digimonsavg" element={<Boxes />} />
            {/* comodin para dar por defecto la pagina que no sirve */}
            <Route path="*" element={<NotFound />} />
        </Routes>
        /*</Router>*/
    );
}

function Boxes() {
    return <>CTV WEB 2025</>
}

function Navbar2() {
    // visible on every page
    return <> <h1>NAVEGACION DE RUTAS QUEDETALLE </h1></>
}

function Home() {
    return (
        <>
            <p>NAVEGACION DE RUTAS ABRAHAM</p>
            <ul>
                <li><Link to='/regixpress'>Registro de Usuarios</Link></li>
                <li><Link to='/json'>ejemplo de json</Link></li>
                <li><Link to='/world8'>MUNDO 8 Buscador de gifs</Link></li>
                <li><Link to='/world9'>MUNDO 9 Fronted con backend ExpressJS</Link></li>
                <li><Link to='/world10'>MUNDO 10 Fronted con backend Laravel 10</Link></li>
            </ul>
        </>);
}

function Viewall() {
    return (
        <List_n></List_n>
    );
}


function NotFound() {
    return (<><p>Ha llegado a una página que no existe :| </p></>);
}