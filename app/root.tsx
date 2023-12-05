import { useState, useEffect } from 'react';
import {
    Meta,
    Links,
    Outlet,
    Scripts,
    LiveReload,
    useCatch,
    Link
} from '@remix-run/react';
import styles from '~/styles/index.css'
import Header from '~/components/header';
import Footer from '~/components/footer';

export function meta() {
    return (
        [
            { title: 'GuitarLA - Remix' },
            { property: 'charset', content: 'utf-8' },
            { property: 'viewport', content: 'witdh=device-width,initial-scale=1' },
        ]
    )
}

export function links() {
    return [
        {
            rel: 'stylesheet',
            href: 'https://necolas.github.io/normalize.css/8.0.1/normalize.css'
        },
        {
            rel: 'stylesheet',
            href: styles
        },
        {
            rel: 'preconnect',
            href: 'https://fonts.googleapis.com'
        },
        {
            rel: 'preconnect',
            href: 'https://fonts.gstatic.com',
            crossOrigin: 'true'
        },
        {
            rel: 'stylesheet',
            href: 'https://fonts.googleapis.com/css2?family=Lato:wght@700;900&family=Outfit:wght@400;700;900&display=swap'
        },
    ];
}

export default function App() {
    const carritoLocalStorage = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('carrito') ?? '[]') : [];
    const [carrito, setCarrito] = useState<any>(carritoLocalStorage);

    useEffect(() => {
        localStorage.setItem('carrito', JSON.stringify(carrito));
    }, [carrito])

    const agregarCarrito = (guitarra:any) => {
        if(carrito.some((c:any) => c.id === guitarra.id)) {
            const carritoActualizado = carrito.map((c:any) =>{
                if(c.id === guitarra.id) {
                    c.cantidad = guitarra.cantidad;
                }
                return c;
            });

            setCarrito(carritoActualizado);
        }
        else {
            setCarrito([...carrito, guitarra]);
        }
    }

    const actualizarCantidad = (guitarra:any) => {
        const carritoActualizado = carrito.map((c:any) =>{
            if(c.id === guitarra.id) {
                c.cantidad = guitarra.cantidad;
            }
            return c;
        }); 

        setCarrito(carritoActualizado);
    }

    const eliminarGuitarra = (id:any) => {
        const carritoActualizado = carrito.filter((g:any) => g.id !== id);
        setCarrito(carritoActualizado);
    }

    return (
        <Document>
            <Outlet context={{
                agregarCarrito,
                carrito,
                actualizarCantidad,
                eliminarGuitarra
            }} />
        </Document>
    )
}

function Document(params:any) {
    return (
        <html lang="es">
            <head>
                <Meta />
                <Links />
            </head>
            <body>
                <Header />
                {params.children}
                <Footer />
                <Scripts />
                <LiveReload />
            </body>
        </html>
    )
}

/** Manejo de errores */
export function CatchBoundary() {
    const error = useCatch();
    return (
        <Document>
            <p className='error'>{error.status} {error.statusText}</p>
            <Link className='error-enlace' to='/'>Volver a la pagina principal</Link>
        </Document>
    )
}

export function ErrorBoundary({error}:any) {
    return (
        <Document>
            <p className='error'>{error.status} {error.statusText}</p>
            <Link className='error-enlace' to='/'>Volver a la pagina principal</Link>
        </Document>
    )
}