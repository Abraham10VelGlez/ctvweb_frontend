import { useRef, useState } from 'react'
import { useRoute, useLocation } from 'wouter'
import { Logo } from '@pmndrs/branding'
import { Three1 } from './Three1'
import './style.css'


export default function Box() {
    const [, params] = useRoute('/item/:id')
    const [, setLocation] = useLocation()
    return (
        <>
            <Three1></Three1>
            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
                <a style={{ position: 'absolute', bottom: 40, left: 90, fontSize: '13px' }}>
                    pmnd.rs / IGECEM/CI AVG 
                </a>
                <Logo style={{ position: 'absolute', bottom: 40, left: 40, width: 30 }} />
                {/*<a style={{ position: 'absolute', top: 40, left: 40, fontSize: '13px' }} href="#" onClick={() => setLocation('/')}>
                    {params ? '< Regresar' : 'Haz doble Click para entrar'}
                </a>*/}
            </div>{' '}
        </>
    )
}
