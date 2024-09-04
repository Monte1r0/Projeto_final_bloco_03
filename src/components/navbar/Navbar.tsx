
import { Link,  } from 'react-router-dom'




function Navbar() {


  return (
    <>
     <div className='w-full bg-[#F02925] text-white flex justify-center py-4'>
          <div className="container flex justify-between text-lg">
          <Link to='/home' className='text-2xl font-bold uppercase'>FARMACOM</Link>

            <div className='flex gap-4 text-black'>
            <div className='hover:underline'>Produtos</div>
            <Link to='/temas' className='hover:underline'>Categorias</Link>
              <div className='hover:underline'>Cadastrar Categoria</div>
             
            </div>
          </div>
        </div>
    </>
  )
}

export default Navbar