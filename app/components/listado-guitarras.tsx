import Guitarra from '~/components/guitarra';

const ListadoGuitarras = ({guitarras}:any) => {
  return (
    <>
      <h2 className='heading'>Nuestra Coleccion</h2>
        {guitarras.length && (
          <div className='guitarras-grid'>
            {guitarras.map((guitarra:any) => (
              <Guitarra 
                key={guitarra?.id}
                guitarra={guitarra?.attributes}
              />
            ))}
          </div>
        )}
    </>
  )
}

export default ListadoGuitarras
